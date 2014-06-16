/*
 *
 * Copyright 2013 Canonical Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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

#ifndef GEOLOCATION_H_SVO2013
#define GEOLOCATION_H_SVO2013

#include <QGeoPositionInfoSource>
#include <QGeoPositionInfo>
#include <QtCore>
#include <cassert>

#include <cplugin.h>

class Geolocation: public CPlugin {
    Q_OBJECT
public:
    explicit Geolocation(Cordova *cordova);

    virtual const QString fullName() override {
        return Geolocation::fullID();
    }

    virtual const QString shortName() override {
        return "Geolocation";
    }

    static const QString fullID() {
        return "Geolocation";
    }

public slots:
    void getLocation(int scId, int ecId, bool enableHighAccuracy, qint64 maximumAge);
    void addWatch(int scId, int ecId, const QString &id, bool enableHighAccuracy);
    void clearWatch(int scId, int ecId, const QString &id);

protected slots:
    void positionUpdated(const QGeoPositionInfo &update);
    void updateTimeout();

private:
    QMap<QString, int> _id2sc;
    QMap<QString, int> _id2ec;
    QSet<QString> _singleUpdate;
    QSharedPointer<QGeoPositionInfoSource> _geoPositionInfoSource;

    enum PositionError {
        PERMISSION_DENIED = 1,
        POSITION_UNAVAILABLE = 2,
        TIMEOUT = 3
    };
};

#endif
