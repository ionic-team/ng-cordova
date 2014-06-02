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

/*global Windows:true, URL:true */



var cordova = require('cordova'),
    Camera = require('./Camera'),
    FileEntry = require('org.apache.cordova.file.FileEntry'),
    FileError = require('org.apache.cordova.file.FileError'),
    FileReader = require('org.apache.cordova.file.FileReader');

module.exports = {

    // args will contain :
    //  ...  it is an array, so be careful
    // 0 quality:50,
    // 1 destinationType:Camera.DestinationType.FILE_URI,
    // 2 sourceType:Camera.PictureSourceType.CAMERA,
    // 3 targetWidth:-1,
    // 4 targetHeight:-1,
    // 5 encodingType:Camera.EncodingType.JPEG,
    // 6 mediaType:Camera.MediaType.PICTURE,
    // 7 allowEdit:false,
    // 8 correctOrientation:false,
    // 9 saveToPhotoAlbum:false,
    // 10 popoverOptions:null

    takePicture: function (successCallback, errorCallback, args) {
        var encodingType = args[5];
        var targetWidth = args[3];
        var targetHeight = args[4];
        var sourceType = args[2];
        var destinationType = args[1];
        var mediaType = args[6];
        var saveToPhotoAlbum = args[9];

        var pkg = Windows.ApplicationModel.Package.current;
        var packageId = pkg.installedLocation;

        var fail = function (fileError) {
            errorCallback("FileError, code:" + fileError.code);
        };

        // resize method :)
        var resizeImage = function (file) {
            var tempPhotoFileName = "";
            if (encodingType == Camera.EncodingType.PNG) {
                tempPhotoFileName = "camera_cordova_temp_return.png";
            } else {
                tempPhotoFileName = "camera_cordova_temp_return.jpg";
            }
            var imgObj = new Image();
            var success = function (fileEntry) {
                var successCB = function (filePhoto) {
                    var fileType = file.contentType,
                        reader = new FileReader();
                    reader.onloadend = function () {
                        var image = new Image();
                        image.src = reader.result;
                        image.onload = function () {
                            var imageWidth = targetWidth,
                                imageHeight = targetHeight;
                            var canvas = document.createElement('canvas');

                            canvas.width = imageWidth;
                            canvas.height = imageHeight;

                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(this, 0, 0, imageWidth, imageHeight);

                            // The resized file ready for upload
                            var _blob = canvas.msToBlob();
                            var _stream = _blob.msDetachStream();

                            var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
                            storageFolder.createFileAsync(tempPhotoFileName, Windows.Storage.CreationCollisionOption.generateUniqueName).done(function (file) {
                                file.openAsync(Windows.Storage.FileAccessMode.readWrite).done(function (fileStream) {
                                    Windows.Storage.Streams.RandomAccessStream.copyAndCloseAsync(_stream, fileStream).done(function () {
                                        var _imageUrl = URL.createObjectURL(file);
                                        successCallback(_imageUrl);
                                    }, function () {
                                        errorCallback("Resize picture error.");
                                    });
                                }, function () {
                                    errorCallback("Resize picture error.");
                                });
                            }, function () {
                                errorCallback("Resize picture error.");
                            });

                        };
                    };

                    reader.readAsDataURL(filePhoto);
                };

                var failCB = function () {
                    errorCallback("File not found.");
                };
                fileEntry.file(successCB, failCB);
            };

            var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
            file.copyAsync(storageFolder, file.name, Windows.Storage.NameCollisionOption.replaceExisting).then(function (storageFile) {
                success(new FileEntry(storageFile.name, storageFile.path));
            }, function () {
                fail(FileError.INVALID_MODIFICATION_ERR);
            }, function () {
                errorCallback("Folder not access.");
            });

        };

        // because of asynchronous method, so let the successCallback be called in it.
        var resizeImageBase64 = function (file) {
            var imgObj = new Image();
            var success = function (fileEntry) {
                var successCB = function (filePhoto) {
                    var fileType = file.contentType,
                        reader = new FileReader();
                    reader.onloadend = function () {
                        var image = new Image();
                        image.src = reader.result;

                        image.onload = function () {
                            var imageWidth = targetWidth,
                                imageHeight = targetHeight;
                            var canvas = document.createElement('canvas');

                            canvas.width = imageWidth;
                            canvas.height = imageHeight;

                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(this, 0, 0, imageWidth, imageHeight);

                            // The resized file ready for upload
                            var finalFile = canvas.toDataURL(fileType);

                            // Remove the prefix such as "data:" + contentType + ";base64," , in order to meet the Cordova API.
                            var arr = finalFile.split(",");
                            var newStr = finalFile.substr(arr[0].length + 1);
                            successCallback(newStr);
                        };
                    };

                    reader.readAsDataURL(filePhoto);

                };
                var failCB = function () {
                    errorCallback("File not found.");
                };
                fileEntry.file(successCB, failCB);
            };

            var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
            file.copyAsync(storageFolder, file.name, Windows.Storage.NameCollisionOption.replaceExisting).then(function (storageFile) {
                success(new FileEntry(storageFile.name, "ms-appdata:///local/" + storageFile.name));
            }, function () {
                fail(FileError.INVALID_MODIFICATION_ERR);
            }, function () {
                errorCallback("Folder not access.");
            });


        };

        if (sourceType != Camera.PictureSourceType.CAMERA) {
            var fileOpenPicker = new Windows.Storage.Pickers.FileOpenPicker();
            fileOpenPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
            if (mediaType == Camera.MediaType.PICTURE) {
                fileOpenPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);
            }
            else if (mediaType == Camera.MediaType.VIDEO) {
                fileOpenPicker.fileTypeFilter.replaceAll([".avi", ".flv", ".asx", ".asf", ".mov", ".mp4", ".mpg", ".rm", ".srt", ".swf", ".wmv", ".vob"]);
            }
            else {
                fileOpenPicker.fileTypeFilter.replaceAll(["*"]);
            }

            fileOpenPicker.pickSingleFileAsync().then(function (file) {
                if (file) {
                    if (destinationType == Camera.DestinationType.FILE_URI) {
                        if (targetHeight > 0 && targetWidth > 0) {
                            resizeImage(file);
                        }
                        else {

                            var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
                            file.copyAsync(storageFolder, file.name, Windows.Storage.NameCollisionOption.replaceExisting).then(function (storageFile) {
                                successCallback(URL.createObjectURL(storageFile));
                            }, function () {
                                fail(FileError.INVALID_MODIFICATION_ERR);
                            }, function () {
                                errorCallback("Folder not access.");
                            });

                        }
                    }
                    else {
                        if (targetHeight > 0 && targetWidth > 0) {
                            resizeImageBase64(file);
                        } else {
                            Windows.Storage.FileIO.readBufferAsync(file).done(function (buffer) {
                                var strBase64 = Windows.Security.Cryptography.CryptographicBuffer.encodeToBase64String(buffer);
                                successCallback(strBase64);
                            });
                        }

                    }

                } else {
                    errorCallback("User didn't choose a file.");
                }
            }, function () {
                errorCallback("User didn't choose a file.");
            });
        }
        else {

            var cameraCaptureUI = new Windows.Media.Capture.CameraCaptureUI();
            cameraCaptureUI.photoSettings.allowCropping = true;
            var allowCrop = !!args[7];
            if (!allowCrop) {
                cameraCaptureUI.photoSettings.allowCropping = false;
            }

            if (encodingType == Camera.EncodingType.PNG) {
                cameraCaptureUI.photoSettings.format = Windows.Media.Capture.CameraCaptureUIPhotoFormat.png;
            } else {
                cameraCaptureUI.photoSettings.format = Windows.Media.Capture.CameraCaptureUIPhotoFormat.jpeg;
            }

            // decide which max pixels should be supported by targetWidth or targetHeight.
            if (targetWidth >= 1280 || targetHeight >= 960) {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.large3M;
            }
            else if (targetWidth >= 1024 || targetHeight >= 768) {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.mediumXga;
            }
            else if (targetWidth >= 800 || targetHeight >= 600) {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.mediumXga;
            }
            else if (targetWidth >= 640 || targetHeight >= 480) {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.smallVga;
            }
            else if (targetWidth >= 320 || targetHeight >= 240) {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.verySmallQvga;
            }
            else {
                cameraCaptureUI.photoSettings.maxResolution = Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution.highestAvailable;
            }

            cameraCaptureUI.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).then(function (picture) {
                if (picture) {
                    // save to photo album successCallback
                    var success = function (fileEntry) {
                        if (destinationType == Camera.DestinationType.FILE_URI) {
                            if (targetHeight > 0 && targetWidth > 0) {
                                resizeImage(picture);
                            } else {

                                var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
                                picture.copyAsync(storageFolder, picture.name, Windows.Storage.NameCollisionOption.replaceExisting).then(function (storageFile) {
                                    successCallback("ms-appdata:///local/" + storageFile.name);
                                }, function () {
                                    fail(FileError.INVALID_MODIFICATION_ERR);
                                }, function () {
                                    errorCallback("Folder not access.");
                                });
                            }
                        } else {
                            if (targetHeight > 0 && targetWidth > 0) {
                                resizeImageBase64(picture);
                            } else {
                                Windows.Storage.FileIO.readBufferAsync(picture).done(function (buffer) {
                                    var strBase64 = Windows.Security.Cryptography.CryptographicBuffer.encodeToBase64String(buffer);
                                    successCallback(strBase64);
                                });
                            }
                        }
                    };
                    // save to photo album errorCallback
                    var fail = function () {
                        //errorCallback("FileError, code:" + fileError.code);
                        errorCallback("Save fail.");
                    };

                    if (saveToPhotoAlbum) {
                        Windows.Storage.StorageFile.getFileFromPathAsync(picture.path).then(function (storageFile) {
                            storageFile.copyAsync(Windows.Storage.KnownFolders.picturesLibrary, picture.name, Windows.Storage.NameCollisionOption.generateUniqueName).then(function (storageFile) {
                                success(storageFile);
                            }, function () {
                                fail();
                            });
                        });
                        //var directory = new DirectoryEntry("Pictures", parentPath);
                        //new FileEntry(picture.name, picture.path).copyTo(directory, null, success, fail);
                    } else {
                        if (destinationType == Camera.DestinationType.FILE_URI) {
                            if (targetHeight > 0 && targetWidth > 0) {
                                resizeImage(picture);
                            } else {

                                var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
                                picture.copyAsync(storageFolder, picture.name, Windows.Storage.NameCollisionOption.replaceExisting).then(function (storageFile) {
                                    successCallback("ms-appdata:///local/" + storageFile.name);
                                }, function () {
                                    fail(FileError.INVALID_MODIFICATION_ERR);
                                }, function () {
                                    errorCallback("Folder not access.");
                                });
                            }
                        } else {
                            if (targetHeight > 0 && targetWidth > 0) {
                                resizeImageBase64(picture);
                            } else {
                                Windows.Storage.FileIO.readBufferAsync(picture).done(function (buffer) {
                                    var strBase64 = Windows.Security.Cryptography.CryptographicBuffer.encodeToBase64String(buffer);
                                    successCallback(strBase64);
                                });
                            }
                        }
                    }
                } else {
                    errorCallback("User didn't capture a photo.");
                }
            }, function () {
                errorCallback("Fail to capture a photo.");
            });
        }
    }
};

require("cordova/exec/proxy").add("Camera",module.exports);
