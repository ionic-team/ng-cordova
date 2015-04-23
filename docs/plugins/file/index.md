---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaFile
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/file.js
official-docs:  https://github.com/apache/cordova-plugin-file/
icon-apple: true
icon-android: true
icon-windows: true
---

A Plugin to get access to the device's files and directories.

```
cordova plugin add org.apache.cordova.file
```


### File System Layout

Every OS has a very different FileSystem layout, so here is a detailed description of the FileSystems for `iOS` and `Android`

##### iOS File System Layout

| Device Path                                          | `cordova.file.*`            | `iosExtraFileSystems` | r/w? | persistent? | OS clears | sync | private |
|:-----------------------------------------------|:----------------------------|:----------------------|:----:|:-----------:|:---------:|:----:|:-------:|
| `/var/mobile/Applications/<UUID>/`                        | applicationStorageDirectory | -                     | r    |     N/A     |     N/A   | N/A  |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`appname.app/`                    | applicationDirectory        | bundle                | r    |     N/A     |     N/A   | N/A  |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`www/`    | -                           | -                     | r    |     N/A     |     N/A   | N/A  |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`Documents/`                      | documentsDirectory          | documents             | r/w  |     Yes     |     No    | Yes  |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`NoCloud/`| -                           | documents-nosync      | r/w  |     Yes     |     No    | No   |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`Library`                         | -                           | library               | r/w  |     Yes     |     No    | Yes? |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`NoCloud/`| dataDirectory               | library-nosync        | r/w  |     Yes     |     No    | No   |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Cloud/`  | syncedDataDirectory         | -                     | r/w  |     Yes     |     No    | Yes  |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Caches/` | cacheDirectory              | cache                 | r/w  |     Yes*    |  Yes\*\*\*| No   |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`tmp/`                            | tempDirectory               | -                     | r/w  |     No\*\*  |  Yes\*\*\*| No   |   Yes   |


  \* Files persist across app restarts and upgrades, but this directory can
     be cleared whenever the OS desires. Your app should be able to recreate any
     content that might be deleted.

\*\* Files may persist across app restarts, but do not rely on this behavior. Files
     are not guaranteed to persist across updates. Your app should remove files from
     this directory when it is applicable, as the OS does not guarantee when (or even
     if) these files are removed.

\*\*\* The OS may clear the contents of this directory whenever it feels it is
     necessary, but do not rely on this. You should clear this directory as
     appropriate for your application.

##### Android File System Layout

| Device Path                                                 | `cordova.file.*`            | `AndroidExtraFileSystems` | r/w? | persistent? | OS clears | private |
|:------------------------------------------------------------|:----------------------------|:--------------------------|:----:|:-----------:|:---------:|:-------:|
| `file:///android_asset/`                                    | applicationDirectory        |                           | r    |     N/A     |     N/A   |   Yes   |
| `/data/data/<app-id>/`                                      | applicationStorageDirectory | -                         | r/w  |     N/A     |     N/A   |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`cache`                             | cacheDirectory              | cache                     | r/w  |     Yes     |     Yes\* |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;`files`                             | dataDirectory               | files                     | r/w  |     Yes     |     No    |   Yes   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Documents` |                             | documents                 | r/w  |     Yes     |     No    |   Yes   |
| `<sdcard>/`                                                 | externalRootDirectory       | sdcard                    | r/w  |     Yes     |     No    |   No    |
| &nbsp;&nbsp;&nbsp;&nbsp;`Android/data/<app-id>/`            | externalApplicationStorageDirectory | -                 | r/w  |     Yes     |     No    |   No    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cache`     | externalCacheDirectry       | cache-external            | r/w  |     Yes     |     No\*\*|   No    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`files`     | externalDataDirectory       | files-external            | r/w  |     Yes     |     No    |   No    |

\* The OS may periodically clear this directory, but do not rely on this behavior. Clear
   the contents of this directory as appropriate for your application. Should a user
   purge the cache manually, the contents of this directory are removed.

\*\* The OS does not clear this directory automatically; you are responsible for managing
     the contents yourself. Should the user purge the cache manually, the contents of the
     directory are removed.

**Note**: If external storage can't be mounted, the `cordova.file.external*`
properties are `null`.


### File Error Codes

When an error is thrown, one of the following codes will be used.

| Code | Constant                      |
|-----:|:------------------------------|
|    1 | `NOT_FOUND_ERR`               |
|    2 | `SECURITY_ERR`                |
|    3 | `ABORT_ERR`                   |
|    4 | `NOT_READABLE_ERR`            |
|    5 | `ENCODING_ERR`                |
|    6 | `NO_MODIFICATION_ALLOWED_ERR` |
|    7 | `INVALID_STATE_ERR`           |
|    8 | `SYNTAX_ERR`                  |
|    9 | `INVALID_MODIFICATION_ERR`    |
|   10 | `QUOTA_EXCEEDED_ERR`          |
|   11 | `TYPE_MISMATCH_ERR`           |
|   12 | `PATH_EXISTS_ERR`             |


### Methods

##### `getFreeDiskSpace()`

Get the total free disk space on the device.

> **Returns**  `String`


##### `checkDir(path, directory)`

Check if a file exists in a certain path, directory.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to check |

> **Returns**  `Object`


##### `checkFile(path, file)`

Check if a file exists in a certain path, directory.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of file to check |

> **Returns**  `Object`


##### `createDir(path, directory, replace)`

Creates a new directory in the specific path. The `replace` boolean value determines whether to replace an existing directory with the same name. If an existing directory exists and the `replace` value is `false`, the promise will fail and return an error.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to create |
| replace      | `Boolean`      | If `true`, replaces file with same name. If `false` returns error |

> **Returns**  `Object`


##### `createFile(path, file, replace)`

Creates a new file in the specific path. The `replace` boolean value determines whether to replace an existing file with the same name. If an existing file exists and the `replace` value is `false`, the promise will fail and return an error.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of file to create |
| replace      | `Boolean`      | If `true`, replaces file with same name. If `false` returns error |

> **Returns**  `Object`



##### `removeDir(path, directory)`

Removes a directory from a desired location.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to remove |

> **Returns**  `Object`

##### `removeFile(path, file)`

Removes a file from a desired location.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to remove |

> **Returns**  `Object`


##### `removeRecursively(path, directory)`

Removes all files and the directory from a desired location.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to remove |

> **Returns**  `Object`




##### `writeFile(path, file, data, replace)`

Write to a new file, and replace if desired.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to write to |
| data         | `String`       | Text/data to write to the existing file |
| replace      | `Boolean`      | If `true`, replaces file with same name. If `false` returns error |

> **Returns**  `Object`


##### `writeExistingFile(path, file, data)`

Write to an existing file.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to write to |
| data         | `String`       | Text/data to write to the existing file |

> **Returns**  `Object`




##### `readAsText(path, file)`
##### `readAsDataURL(path, file)`
##### `readAsBinaryString(path, file)`
##### `readAsArrayBuffer(path, file)`

Read a file in various methods.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to read from |

> **Returns**  `Object`



##### `moveDir(path, directory, newPath, newDirectory)`

Read a file in various methods.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to move |
| path         | `FileSystem`   | Base FileSystem of new location |
| newDirectory | `String`       | New name of directory to move to (leave blank to remain the same) |

> **Returns**  `Object`


##### `moveFile(path, file, newPath, newFile)`

Read a file in various methods.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to move |
| path         | `FileSystem`   | Base FileSystem of new location |
| file         | `String`       | New name of file to move to (leave blank to remain the same) |

> **Returns**  `Object`




##### `copyDir(path, directory, newPath, newDirectory)`

Copy a file in various methods. If directory exists, will fail to copy.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| directory    | `String`       | Name of directory to copy |
| path         | `FileSystem`   | Base FileSystem of new location |
| newDirectory | `String`       | New name of directory to copy to (leave blank to remain the same) |

> **Returns**  `Object`


##### `copyFile(path, file, newPath, newFile)`

Read a file in various methods. If file exists, will fail to copy.

| Param        | Type           | Detail  |
| ------------ |----------------| --------|
| path         | `FileSystem`   | Base FileSystem. Please refer to the iOS and Android filesystems above |
| file         | `String`       | Name of file to copy |
| path         | `FileSystem`   | Base FileSystem of new location |
| file         | `String`       | New name of file to copy to (leave blank to remain the same) |

> **Returns**  `Object`



### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaFile) {

  document.addEventListener('deviceready', function () {

    $cordovaFile.getFreeDiskSpace()
      .then(function (success) {
         // success in kilobytes
      }, function (error) {
          // error
      });
      

    // CHECK
    $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    $cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // CREATE
    $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // REMOVE
    $cordovaFile.removeDir(cordova.file.dataDirectory, "some_dir")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.removeFile(cordova.file.dataDirectory, "some_file.txt")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.removeRecursively(cordova.file.dataDirectory, "")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // WRITE
    $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // READ
    $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // MOVE
    $cordovaFile.moveDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.moveFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory)
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


    // COPY
    $cordovaFile.copyDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });

    $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
      .then(function (success) {
        // success
      }, function (error) {
        // error
      });


  });

});
```
