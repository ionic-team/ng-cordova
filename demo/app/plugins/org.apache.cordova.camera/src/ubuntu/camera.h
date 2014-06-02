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

#ifndef CAMERA_H
#define CAMERA_H

#include <cplugin.h>

#include <QtCore>
#include <QQuickView>
#include <QCamera>
#include <QtMultimediaWidgets/QCameraViewfinder>
#include <QCameraImageCapture>

class Camera: public CPlugin {
    Q_OBJECT
public:
    explicit Camera(Cordova *cordova);

    virtual const QString fullName() override {
        return Camera::fullID();
    }

    virtual const QString shortName() override {
        return "Camera";
    }

    static const QString fullID() {
        return "Camera";
    }

public slots:
    void takePicture(int scId, int ecId, int quality, int destinationType, int/*sourceType*/, int targetWidth, int targetHeight, int encodingType,
                     int/*mediaType*/, bool/*allowEdit*/, bool/*correctOrientation*/, bool/*saveToPhotoAlbum*/, const QVariantMap &popoverOptions, int cameraDirection);
    void cancel();

    void onImageSaved(QString path);

private:
    bool preprocessImage(QString &path);

    int _lastScId;
    int _lastEcId;
    QSharedPointer<QCamera> _camera;

    QVariantMap _options;
protected:
    enum DestinationType {
        DATA_URL = 0,
        FILE_URI = 1
    };
    enum EncodingType {
        JPEG = 0,
        PNG = 1
    };
};

#endif // CAMERA_H
