/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

#include "camera.h"
#include <cordova.h>

#include <QCameraViewfinder>
#include <QCameraImageCapture>
#include <QGraphicsObject>
#include <QCloseEvent>
#include <QQuickItem>

const char code[] = "\
var component, object;                                                  \
function createObject() {                                               \
    component = Qt.createComponent(%1);                                 \
    if (component.status == Component.Ready)                            \
        finishCreation();                                               \
    else                                                                \
        component.statusChanged.connect(finishCreation);                \
}                                                                       \
function finishCreation() {                                             \
    CordovaWrapper.object = component.createObject(root,                \
        {root: root, cordova: cordova});                                \
}                                                                       \
createObject()";


Camera::Camera(Cordova *cordova):
    CPlugin(cordova),
    _lastScId(0),
    _lastEcId(0) {
}

bool Camera::preprocessImage(QString &path) {
    bool convertToPNG = (*_options.find("encodingType")).toInt() == Camera::PNG;
    int quality = (*_options.find("quality")).toInt();
    int width = (*_options.find("targetWidth")).toInt();
    int height = (*_options.find("targetHeight")).toInt();

    QImage image(path);
    if (width <= 0)
        width = image.width();
    if (height <= 0)
        height = image.height();
    image = image.scaled(width, height, Qt::KeepAspectRatio, Qt::SmoothTransformation);

    QFile oldImage(path);
    QTemporaryFile newImage;

    const char *type;
    if (convertToPNG) {
        newImage.setFileTemplate("imgXXXXXX.png");
        type = "png";
    } else {
        newImage.setFileTemplate("imgXXXXXX.jpg");
        type = "jpg";
    }

    newImage.open();
    newImage.setAutoRemove(false);
    image.save(newImage.fileName(), type, quality);

    path = newImage.fileName();
    oldImage.remove();

    return true;
}

void Camera::onImageSaved(QString path) {
    bool dataURL = _options.find("destinationType")->toInt() == Camera::DATA_URL;

    QString cbParams;
    if (preprocessImage(path)) {
        QString absolutePath = QFileInfo(path).absoluteFilePath();
        if (dataURL) {
            QFile image(absolutePath);
            image.open(QIODevice::ReadOnly);
            QByteArray content = image.readAll().toBase64();
            cbParams = QString("\"%1\"").arg(content.data());
            image.remove();
        } else {
            cbParams = CordovaInternal::format(QUrl::fromLocalFile(absolutePath).toString());
        }
    }

    this->callback(_lastScId, cbParams);

    _lastEcId = _lastScId = 0;
}

void Camera::takePicture(int scId, int ecId, int quality, int destinationType, int/*sourceType*/, int targetWidth, int targetHeight, int encodingType,
                         int/*mediaType*/, bool/*allowEdit*/, bool/*correctOrientation*/, bool/*saveToPhotoAlbum*/, const QVariantMap &/*popoverOptions*/, int/*cameraDirection*/) {
    if (_camera.isNull()) {
        _camera = QSharedPointer<QCamera>(new QCamera());
    }

    if (((_lastScId || _lastEcId) && (_lastScId != scId && _lastEcId != ecId)) || !_camera->isAvailable() || _camera->lockStatus() != QCamera::Unlocked) {
        this->cb(_lastEcId, "Device is busy");
        return;
    }

    _options.clear();
    _options.insert("quality", quality);
    _options.insert("destinationType", destinationType);
    _options.insert("targetWidth", targetWidth);
    _options.insert("targetHeight", targetHeight);
    _options.insert("encodingType", encodingType);

    _lastScId = scId;
    _lastEcId = ecId;

    QString path = m_cordova->get_app_dir() + "/../qml/CaptureWidget.qml";

    // TODO: relative url
    QString qml = QString(code).arg(CordovaInternal::format(path));
    m_cordova->execQML(qml);
}

void Camera::cancel() {
    m_cordova->execQML("CordovaWrapper.object.destroy()");
    this->cb(_lastEcId, "canceled");

    _lastEcId = _lastScId = 0;
}
