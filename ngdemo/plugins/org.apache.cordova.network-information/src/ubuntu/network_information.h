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

#ifndef NETWORK_INFORMATION_H
#define NETWORK_INFORMATION_H

#include <cplugin.h>

#include <QtSystemInfo>
#include <QtCore>

class NetworkInformation: public CPlugin {
    Q_OBJECT
public:
    explicit NetworkInformation(Cordova *cordova): CPlugin(cordova) {}

    virtual const QString fullName() override {
        return NetworkInformation::fullID();
    }

    virtual const QString shortName() override {
        return "Connection";
    }

    static const QString fullID() {
        return "NetworkStatus";
    }

public slots:
    void getConnectionInfo(int scId, int ecId);

private:
    QNetworkInfo m_systemNetworkInfo;
};

#endif
