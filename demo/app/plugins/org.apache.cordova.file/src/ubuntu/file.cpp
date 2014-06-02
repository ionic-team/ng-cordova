/*
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

#include "file.h"

#include <QApplication>

namespace {
    class FileError {
    public:
        static const QString kEncodingErr;
        static const QString kTypeMismatchErr;
        static const QString kNotFoundErr;
        static const QString kSecurityErr;
        static const QString kAbortErr;
        static const QString kNotReadableErr;
        static const QString kNoModificationAllowedErr;
        static const QString kInvalidStateErr;
        static const QString kSyntaxErr;
        static const QString kInvalidModificationErr;
        static const QString kQuotaExceededErr;
        static const QString kPathExistsErr;
    };

    QVariantMap file2map(const QFileInfo &fileInfo) {
        QVariantMap res;

        res.insert("name", fileInfo.fileName());
        res.insert("fullPath", fileInfo.isDir() ? QDir::cleanPath(fileInfo.absoluteFilePath()) : fileInfo.absoluteFilePath());
        res.insert("isDirectory", (int)fileInfo.isDir());
        res.insert("isFile", (int)fileInfo.isFile());

        return res;
    }
    QVariantMap dir2map(const QDir &dir) {
        return file2map(QFileInfo(dir.absolutePath()));
    }
};

const QString FileError::kEncodingErr("FileError.ENCODING_ERR");
const QString FileError::kTypeMismatchErr("FileError.TYPE_MISMATCH_ERR");
const QString FileError::kNotFoundErr("FileError.NOT_FOUND_ERR");
const QString FileError::kSecurityErr("FileError.SECURITY_ERR");
const QString FileError::kAbortErr("FileError.ABORT_ERR");
const QString FileError::kNotReadableErr("FileError.NOT_READABLE_ERR");
const QString FileError::kNoModificationAllowedErr("FileError.NO_MODIFICATION_ALLOWED_ERR");
const QString FileError::kInvalidStateErr("FileError.INVALID_STATE_ERR");
const QString FileError::kSyntaxErr("FileError.SYNTAX_ERR");
const QString FileError::kInvalidModificationErr("FileError.INVALID_MODIFICATION_ERR");
const QString FileError::kQuotaExceededErr("FileError.QUOTA_EXCEEDED_ERR");
const QString FileError::kPathExistsErr("FileError.PATH_EXISTS_ERR");

File::File(Cordova *cordova) :
    CPlugin(cordova),
    _persistentDir(QString("%1/.local/share/%2/persistent").arg(QDir::homePath()).arg(QCoreApplication::applicationName())) {
    QDir::root().mkpath(QDir(_persistentDir).absolutePath());
}

void File::requestFileSystem(int scId, int ecId, unsigned short type, unsigned long long size) {
    QDir dir;

    //FIXEME,what is quota value
    if (size >= 10000){
        this->callback(ecId, FileError::kQuotaExceededErr);
        return;
    }

    if (type == 0)
        dir = QDir::temp();
    else
        dir = QDir(_persistentDir);

    if (type > 1) {
        this->callback(ecId, FileError::kSyntaxErr);
        return;
    } else {
        QVariantMap res;
        res.insert("root", dir2map(dir));
        if (type == 0)
            res.insert("name", "temporary");
        else
            res.insert("name", "persistent");

        this->cb(scId, res);
    }
}

void File::resolveLocalFileSystemURI(int scId, int ecId, QString uri) {
    QUrl url = QUrl::fromUserInput(uri);

    if (!url.isValid() || uri[0] == '/' || uri[0] == '.') {
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }

    if (url.scheme() != "file") {
        this->callback(ecId, FileError::kTypeMismatchErr);
        return;
    }

    QFileInfo fileInfo(url.path());

    if (!fileInfo.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    this->cb(scId, file2map(fileInfo));
}

void File::getFile(int scId, int ecId, const QString &parentPath, const QString &rpath, const QVariantMap &options) {
    QString path(rpath);

    if (rpath[0] != '/') {
        if (!parentPath.size() || !QFileInfo(parentPath).isDir())
            path = _persistentDir + "/" + rpath;
        else
            path = parentPath + "/" + rpath;
    }

    //NOTE: colon is not safe in url, it is not a valid path in Win and Mac, simple disable it here.
    if (path.contains(":")){
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }

    QUrl url = QUrl::fromUserInput(path);
    if (!url.isValid()) {
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }

    if (url.scheme() != "file") {
        this->callback(ecId, FileError::kTypeMismatchErr);
        return;
    }

    bool create = options.value("create").toBool();
    bool exclusive = options.value("exclusive").toBool();
    QFile file(path);

    // if create is false and the path represents a directory, return error
    QFileInfo fileInfo(url.path());
    if ((!create) && fileInfo.isDir()) {
        this->callback(ecId, FileError::kTypeMismatchErr);
        return;
    }

    // if file does exist, and create is true and exclusive is true, return error
    if (file.exists()) {
        if (create && exclusive) {
            this->callback(ecId, FileError::kPathExistsErr);
            return;
        }
    }
    else {
        // if file does not exist and create is false, return error
        if (!create) {
            this->callback(ecId, FileError::kNotFoundErr);
            return;
        }

        file.open(QIODevice::WriteOnly);
        file.close();

        // Check if creation was successfull
        if (!file.exists()) {
            this->callback(ecId, FileError::kNoModificationAllowedErr);
            return;
        }
    }

    this->cb(scId, file2map(QFileInfo(file)));
}

void File::getDirectory(int scId, int ecId, QString parentPath, QString rpath, QVariantMap options) {
    QString path(rpath);
    if (rpath[0] != '/') {
        path = parentPath + "/" + rpath;
    }

    //NOTE: colon is not safe in url, it is not a valid path in Win and Mac, simple disable it here.
    if (path.contains(":")){
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }

    QUrl url = QUrl::fromUserInput(path);
    if (!url.isValid()) {
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }

    if (url.scheme() != "file") {
        this->callback(ecId, FileError::kTypeMismatchErr);
        return;
    }

    bool create = options.value("create").toBool();
    bool exclusive = options.value("exclusive").toBool();
    QDir dir(path);

    //  if create is false and the path represents a file, return error
    QFileInfo fileInfo(url.path());
    if ((!create) && fileInfo.isFile()) {
        this->callback(ecId, FileError::kTypeMismatchErr);
        return;
    }

    //  if directory does exist and create is true and exclusive is true, return error
    if (dir.exists()) {
        if (create && exclusive) {
            this->callback(ecId, FileError::kPathExistsErr);
            return;
        }
    }
    else {
        //  if directory does not exist and create is false and directory does not exist, return error
        if (!create) {
            this->callback(ecId, FileError::kNotFoundErr);
            return;
        }

        //  if directory does not exist and create is false and directory does not exist, return error
        QString folderName = dir.dirName();
        dir.cdUp();
        dir.mkdir(folderName);
        dir.cd(folderName);

        if (!dir.exists()) {
            this->callback(ecId, FileError::kNoModificationAllowedErr);
            return;
        }
    }

    QVariantMap res;
    res.insert("name", dir.dirName());
    res.insert("fullPath", dir.absolutePath());
    this->cb(scId, res);
}

void File::removeRecursively(int scId, int ecId, QString path) {
    QDir dir(path);
    if (File::rmDir(dir))
        this->cb(scId);
    else
        this->callback(ecId, FileError::kNoModificationAllowedErr);
}

void File::write(int scId, int ecId, const QString &path, const QString &_data, unsigned long long position, bool binary) {
    QFile file(path);

    file.open(QIODevice::WriteOnly);
    file.close();

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    QFileInfo fileInfo(file);
    if (!file.open(QIODevice::ReadWrite)) {
        this->callback(ecId, FileError::kNoModificationAllowedErr);
        return;
    }

    if (!binary) {
        QTextStream textStream(&file);
        textStream.setCodec("UTF-8");
        textStream.setAutoDetectUnicode(true);

        if (!textStream.seek(position)) {
            file.close();
            fileInfo.refresh();

            this->callback(ecId, FileError::kInvalidModificationErr);
            return;
        }

        textStream << _data;
        textStream.flush();
    } else {
        QByteArray data(_data.toUtf8());
        if (!file.seek(position)) {
            file.close();
            fileInfo.refresh();

            this->callback(ecId, FileError::kInvalidModificationErr);
            return;
        }

        file.write(data.data(), data.length());
    }

    file.flush();
    file.close();
    fileInfo.refresh();

    this->cb(scId, fileInfo.size() - position);
}

void File::truncate(int scId, int ecId, const QString &path, unsigned long long size) {
    QFile file(path);

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (!file.resize(size)) {
        this->callback(ecId, FileError::kNoModificationAllowedErr);
        return;
    }

    this->cb(scId, size);
}

void File::getParent(int scId, int ecId, QString path) {
    QDir dir(path);

    //can't cdup more than app's root
    // Try to change into upper directory
    if (path != _persistentDir){
        if (!dir.cdUp()) {
            this->callback(ecId, FileError::kNotFoundErr);
            return;
        }

    }
    this->cb(scId, dir2map(dir));
}

void File::remove(int scId, int ecId, QString path) {
    QFileInfo fileInfo(path);
    if (!fileInfo.exists() || (path == _persistentDir)) {
        this->callback(ecId, FileError::kNoModificationAllowedErr);
        return;
    }

    if (fileInfo.isDir()) {
        QDir dir(path);
        if (dir.rmdir(dir.absolutePath())) {
            this->cb(scId);
            return;
        }
    } else {
        QFile file(path);
        if (file.remove()) {
            this->cb(scId);
            return;
        }
    }

    this->callback(ecId, FileError::kInvalidModificationErr);
}

void File::getFileMetadata(int scId, int ecId, const QString &path) {
    QFileInfo fileInfo(path);

    if (!fileInfo.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
    } else {
        QMimeType mime = _db.mimeTypeForFile(fileInfo.fileName());

        QString args = QString("{name: %1, fullPath: %2, type: %3, lastModifiedDate: new Date(%4), size: %5}")
            .arg(CordovaInternal::format(fileInfo.fileName())).arg(CordovaInternal::format(fileInfo.absoluteFilePath()))
            .arg(CordovaInternal::format(mime.name())).arg(fileInfo.lastModified().toMSecsSinceEpoch())
            .arg(fileInfo.size());

        this->callback(scId, args);
    }
}

void File::getMetadata(int scId, int ecId, const QString &path) {
    QFileInfo fileInfo(path);

    if (!fileInfo.exists())
        this->callback(ecId, FileError::kNotFoundErr);
    else
        this->cb(scId, fileInfo.lastModified().toMSecsSinceEpoch());
}

void File::readEntries(int scId, int ecId, QString path) {
    QDir dir(path);
    QString entriesList;

    if (!dir.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    for (const QFileInfo &fileInfo: dir.entryInfoList(QDir::Dirs | QDir::Files | QDir::NoDotAndDotDot)) {
        entriesList += CordovaInternal::format(file2map(fileInfo)) + ",";
    }

    // Remove trailing comma
    if (entriesList.size() > 0)
        entriesList.remove(entriesList.size()-1, 1);
    entriesList = "new Array(" + entriesList + ")";

    this->callback(scId, entriesList);
}

void File::readAsText(int scId, int ecId, const QString &path, const QString &encoding, int sliceStart, int sliceEnd) {
    QFile file(path);

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (!file.open(QIODevice::ReadOnly)) {
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }

    QByteArray content = file.readAll();

    if (sliceEnd == -1)
        sliceEnd = content.size();
    if (sliceEnd < 0) {
        sliceEnd++;
        sliceEnd = std::max(0, content.size() + sliceEnd);
    }
    if (sliceEnd > content.size())
        sliceEnd = content.size();

    if (sliceStart < 0)
        sliceStart = std::max(0, content.size() + sliceStart);
    if (sliceStart > content.size())
        sliceStart = content.size();

    if (sliceStart > sliceEnd)
        sliceEnd = sliceStart;

    //FIXME: encoding
    content = content.mid(sliceStart, sliceEnd - sliceStart);

    this->cb(scId, content);
}

void File::readAsArrayBuffer(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd) {
    const QString str2array("\
    (function strToArray(str) {                 \
        var res = new Uint8Array(str.length);   \
        for (var i = 0; i < str.length; i++) {  \
            res[i] = str.charCodeAt(i);         \
        }                                       \
        return res;                             \
    })(\"%1\")");
    QFile file(path);

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (!file.open(QIODevice::ReadOnly)) {
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }
    QString res;
    QByteArray content = file.readAll();

    if (sliceEnd == -1)
        sliceEnd = content.size();
    if (sliceEnd < 0) {
        sliceEnd++;
        sliceEnd = std::max(0, content.size() + sliceEnd);
    }
    if (sliceEnd > content.size())
        sliceEnd = content.size();

    if (sliceStart < 0)
        sliceStart = std::max(0, content.size() + sliceStart);
    if (sliceStart > content.size())
        sliceStart = content.size();

    if (sliceStart > sliceEnd)
        sliceEnd = sliceStart;

    content = content.mid(sliceStart, sliceEnd - sliceStart);

    res.reserve(content.length() * 6);
    for (uchar c: content) {
        res += "\\x";
        res += QString::number(c, 16).rightJustified(2, '0').toUpper();
    }

    this->callback(scId, str2array.arg(res));
}

void File::readAsBinaryString(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd) {
    QFile file(path);

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (!file.open(QIODevice::ReadOnly)) {
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }
    QString res;
    QByteArray content = file.readAll();

    if (sliceEnd == -1)
        sliceEnd = content.size();
    if (sliceEnd < 0) {
        sliceEnd++;
        sliceEnd = std::max(0, content.size() + sliceEnd);
    }
    if (sliceEnd > content.size())
        sliceEnd = content.size();

    if (sliceStart < 0)
        sliceStart = std::max(0, content.size() + sliceStart);
    if (sliceStart > content.size())
        sliceStart = content.size();

    if (sliceStart > sliceEnd)
        sliceEnd = sliceStart;

    content = content.mid(sliceStart, sliceEnd - sliceStart);

    res.reserve(content.length() * 6);
    for (uchar c: content) {
        res += "\\x";
        res += QString::number(c, 16).rightJustified(2, '0').toUpper();
    }
    this->callback(scId, "\"" + res + "\"");
}

void File::readAsDataURL(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd) {
    QFile file(path);
    QFileInfo fileInfo(path);

    if (path.startsWith("content:")){
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }

    if (!file.exists()) {
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }
    // Try to open file for reading
    if (!file.open(QIODevice::ReadOnly)) {
        this->callback(ecId, FileError::kNotReadableErr);
        return;
    }
    // Read the file content
    QByteArray content = file.readAll();
    QString contentType(_db.mimeTypeForFile(fileInfo.fileName()).name());

    if (sliceEnd == -1)
        sliceEnd = content.size();
    if (sliceEnd < 0) {
        sliceEnd++;
        sliceEnd = std::max(0, content.size() + sliceEnd);
    }
    if (sliceEnd > content.size())
        sliceEnd = content.size();

    if (sliceStart < 0)
        sliceStart = std::max(0, content.size() + sliceStart);
    if (sliceStart > content.size())
        sliceStart = content.size();

    if (sliceStart > sliceEnd)
        sliceEnd = sliceStart;

    content = content.mid(sliceStart, sliceEnd - sliceStart);

    this->cb(scId, QString("data:%1;base64,").arg(contentType) + content.toBase64());
}

bool File::rmDir(QDir dir) {
    if (dir == _persistentDir) {//can't remove root dir
        return false;
    }
    bool result = true;
    if (dir.exists()) {
        // Iterate over entries and remove them
        Q_FOREACH(const QFileInfo &fileInfo, dir.entryInfoList(QDir::Dirs | QDir::Files | QDir::NoDotAndDotDot)) {
            if (fileInfo.isDir()) {
                result = rmDir(fileInfo.absoluteFilePath());
            }
            else {
                result = QFile::remove(fileInfo.absoluteFilePath());
            }

            if (!result) {
                return result;
            }
        }

        // Finally remove the current dir
        return dir.rmdir(dir.absolutePath());
    }
    return result;
}

bool File::copyFile(int scId, int ecId,const QString& sourceFile, const QString& destinationParentDir, const QString& newName) {
    if (!QDir(destinationParentDir).exists()){
        this->callback(ecId, FileError::kNotFoundErr);
        return false;
    }

    QFileInfo fileInfo(sourceFile);
    QString fileName = ((newName.isEmpty()) ? fileInfo.fileName() : newName);
    QString destinationFile(destinationParentDir + "/" + fileName);

    //NOTE: colon is not safe in url, it is not a valid path in Win and Mac, simple disable it here.
    if (!QUrl::fromUserInput(destinationFile).isValid() || destinationFile.contains(":")){
        this->callback(ecId, FileError::kEncodingErr);
        return false;
    }

    if (QFile::copy(sourceFile, destinationFile)){
        this->cb(scId, file2map(QFileInfo(destinationFile)));
        return true;
    } else {
        this->callback(ecId, FileError::kInvalidModificationErr);
        return false;
    }
}

void File::copyDir(int scId, int ecId,const QString& sourceFolder, const QString& destinationParentDir, const QString& newName) {
    QDir sourceDir(sourceFolder);
    QString dirName = ((newName.isEmpty()) ? sourceDir.dirName() : newName);
    QString destFolder(destinationParentDir + "/" + dirName);

    if (QFileInfo(destFolder).isFile()){
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }
    QDir destDir(destFolder);

    if ((sourceFolder == destFolder) || (sourceFolder == destinationParentDir)){
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if (!destDir.exists()){
        destDir.mkdir(destFolder);;
    } else{
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if (copyFolder(sourceFolder, destFolder)){
        this->cb(scId, dir2map(destDir));
        return;
    } else {
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }
}

void File::copyTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName) {
    if (QFileInfo(source).isDir())
        copyDir(scId, ecId, source, destinationDir, newName);
    else
        copyFile(scId, ecId, source, destinationDir, newName);
}

void File::moveFile(int scId, int ecId,const QString& sourceFile, const QString& destinationParentDir, const QString& newName) {
    QString fileName = ((newName.isEmpty()) ? QFileInfo(sourceFile).fileName() : newName);
    QString destinationFile(destinationParentDir + "/" + fileName);

    if (QFileInfo(sourceFile) == QFileInfo(destinationFile)) {
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if (!QFileInfo(destinationParentDir).exists()) {
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (QFileInfo(destinationFile).exists()) {
        if (!QFile::remove(QFileInfo(destinationFile).absoluteFilePath())) {
            this->callback(ecId, FileError::kInvalidModificationErr);
            return;
        }
    }

    QFile::rename(sourceFile, destinationFile);
    this->cb(scId, file2map(QFileInfo(destinationFile)));
}

void File::moveDir(int scId, int ecId,const QString& sourceDir, const QString& destinationParentDir, const QString& newName){
    QString dirName = ((newName.isEmpty()) ? QDir(sourceDir).dirName() : newName);
    QString destFolder(destinationParentDir + "/" + dirName);
    QDir destDir(destFolder);

    if (!QFileInfo(destinationParentDir).exists()){
        this->callback(ecId, FileError::kNotFoundErr);
        return;
    }

    if (QFileInfo(destFolder).isFile()){
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if ((QFileInfo(sourceDir) == QFileInfo(destFolder)) || (QFileInfo(sourceDir) == QFileInfo(destinationParentDir))) {
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if (destDir.exists() && !QDir(destinationParentDir).rmdir(dirName)) {
        this->callback(ecId, FileError::kInvalidModificationErr);
        return;
    }

    if (copyFolder(sourceDir, destFolder)) {
        rmDir(sourceDir);
        this->cb(scId, file2map(QFileInfo(destFolder)));
    } else {
        this->callback(ecId, FileError::kNoModificationAllowedErr);
    }
}

void File::moveTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName) {
    if (newName.contains(":")) {
        this->callback(ecId, FileError::kEncodingErr);
        return;
    }
    if (QFileInfo(source).isDir())
        moveDir(scId, ecId, source, destinationDir, newName);
    else
        moveFile(scId, ecId, source, destinationDir, newName);
}

bool File::copyFolder(const QString& sourceFolder, const QString& destFolder) {
    QDir sourceDir(sourceFolder);
    if (!sourceDir.exists())
        return false;
    QDir destDir(destFolder);
    if (!destDir.exists()){
        destDir.mkdir(destFolder);
    }
    QStringList files = sourceDir.entryList(QDir::Files);
    for (int i = 0; i< files.count(); i++)
    {
        QString srcName = sourceFolder + "/" + files[i];
        QString destName = destFolder + "/" + files[i];
        QFile::copy(srcName, destName);
    }
    files.clear();
    files = sourceDir.entryList(QDir::AllDirs | QDir::NoDotAndDotDot);
    for (int i = 0; i< files.count(); i++)
    {
        QString srcName = sourceFolder + "/" + files[i];
        QString destName = destFolder + "/" + files[i];
        copyFolder(srcName, destName);
    }
    return true;
}
