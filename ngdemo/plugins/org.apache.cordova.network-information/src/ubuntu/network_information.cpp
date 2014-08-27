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

#include "network_information.h"

void NetworkInformation::getConnectionInfo(int scId, int ecId) {
    Q_UNUSED(ecId);

    QString result;
    QNetworkInfo::NetworkMode networkMode = m_systemNetworkInfo.currentNetworkMode();
    QNetworkInfo::NetworkStatus networkStatus = m_systemNetworkInfo.networkStatus(networkMode, 0);
    QNetworkInfo::CellDataTechnology cellDataTechnology = m_systemNetworkInfo.currentCellDataTechnology(0);

    if (networkStatus == QNetworkInfo::NoNetworkAvailable)
        result = "Connection.NONE";

    switch (networkMode) {
    case QNetworkInfo::WimaxMode:
    case QNetworkInfo::WlanMode:
        result = "Connection.WIFI";
        break;
    case QNetworkInfo::EthernetMode:
        result = "Connection.ETHERNET";
        break;
    case QNetworkInfo::LteMode:
        result = "Connection.CELL_4G";
        break;
    case QNetworkInfo::GsmMode:
    case QNetworkInfo::CdmaMode:
    case QNetworkInfo::TdscdmaMode:
    case QNetworkInfo::WcdmaMode:
        switch (cellDataTechnology) {
        case QNetworkInfo::UmtsDataTechnology:
        case QNetworkInfo::HspaDataTechnology:
            result = "Connection.CELL_3G";
            break;
        case QNetworkInfo::EdgeDataTechnology:
        case QNetworkInfo::GprsDataTechnology:
            result = "Connection.CELL_2G";
            break;
        case QNetworkInfo::UnknownDataTechnology:
            result = "Connection.UNKNOWN";
            break;
        }
    case QNetworkInfo::BluetoothMode:
    case QNetworkInfo::UnknownMode:
        result = "Connection.UNKNOWN";
        break;
    }

    this->callback(scId, result);
}
