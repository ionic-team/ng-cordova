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

#include <QUuid>

#include "geolocation.h"

Geolocation::Geolocation(Cordova *cordova): CPlugin(cordova),
                                            _geoPositionInfoSource(QGeoPositionInfoSource::createDefaultSource(this)) {
    if (_geoPositionInfoSource.data() != 0) {
        QObject::connect(_geoPositionInfoSource.data(), SIGNAL(positionUpdated(QGeoPositionInfo)), this, SLOT(positionUpdated(QGeoPositionInfo)));
        QObject::connect(_geoPositionInfoSource.data(), SIGNAL(updateTimeout()), this, SLOT(updateTimeout()));
    }
}

void Geolocation::addWatch(int scId, int ecId, const QString &id, bool enableHighAccuracy) {
    Q_UNUSED(enableHighAccuracy);

    assert(_id2sc.find(id) == _id2sc.end());

    if (!_geoPositionInfoSource.data()) {
        QVariantMap err;
        err.insert("code", POSITION_UNAVAILABLE);
        err.insert("message", "unavailable");

        this->cb(ecId, err);
        return;
    }

    _id2sc[id] = scId;
    _id2ec[id] = ecId;
}

void Geolocation::clearWatch(int scId, int ecId, const QString &id) {
    _id2sc.remove(id);
    _id2ec.remove(id);
}

void Geolocation::getLocation(int scId, int ecId, bool enableHighAccuracy, qint64 maximumAge) {
    Q_UNUSED(maximumAge);
    Q_UNUSED(enableHighAccuracy);

    if (!_geoPositionInfoSource.data()) {
        QVariantMap err;
        err.insert("code", POSITION_UNAVAILABLE);
        err.insert("message", "unavailable");

        this->cb(ecId, err);
        return;
    }

    _geoPositionInfoSource->requestUpdate();

    QString id = QString("_INTERNAL_") + QUuid::createUuid().toString();

    _id2sc[id] = scId;
    _id2ec[id] = ecId;
    _singleUpdate.insert(id);
}

void Geolocation::positionUpdated(const QGeoPositionInfo &update) {
    QGeoCoordinate coordinate = update.coordinate();

    QVariantMap p;

    p.insert("latitude", coordinate.latitude());
    p.insert("longitude", coordinate.longitude());
    p.insert("altitude", coordinate.altitude());

    if (update.hasAttribute(QGeoPositionInfo::VerticalAccuracy))
        p.insert("accuracy", update.attribute(QGeoPositionInfo::VerticalAccuracy));
    if (update.hasAttribute(QGeoPositionInfo::Direction))
        p.insert("heading", update.attribute(QGeoPositionInfo::Direction));
    if (update.hasAttribute(QGeoPositionInfo::GroundSpeed))
        p.insert("velocity", update.attribute(QGeoPositionInfo::GroundSpeed));
    if (update.hasAttribute(QGeoPositionInfo::HorizontalAccuracy))
        p.insert("altitudeAccuracy", update.attribute(QGeoPositionInfo::HorizontalAccuracy));
    p.insert("timestamp", update.timestamp().toMSecsSinceEpoch());

    for (const QString &id: _id2sc.keys()) {
        int scId = _id2sc[id];
        this->cb(scId, p);
        if (_singleUpdate.contains(id)) {
            _singleUpdate.remove(id);
            _id2sc.remove(id);
            _id2ec.remove(id);
        }
    }
}

void Geolocation::updateTimeout() {
    QVariantMap err;
    err.insert("code", TIMEOUT);
    err.insert("message", "timeout");

    for (int ecId: _id2ec) {
        this->cb(ecId, err);
    }

    _id2ec.clear();
    _id2sc.clear();
    _singleUpdate.clear();
}
