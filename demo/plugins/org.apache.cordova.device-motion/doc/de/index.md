<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.device-motion

Dieses Plugin ermöglicht den Zugriff auf das Gerät Beschleunigungsmesser. Der Beschleunigungsmesser ist ein Bewegungssensor, der die Änderung (*Delta*) erkennt Bewegung im Verhältnis zu der aktuellen Geräte-Orientierung, in drei Dimensionen entlang der *x-*, *y-*und *Z* -Achse.

## Installation

    cordova plugin add org.apache.cordova.device-motion
    

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Methoden

*   navigator.accelerometer.getCurrentAcceleration
*   navigator.accelerometer.watchAcceleration
*   navigator.accelerometer.clearWatch

## Objekte

*   Beschleunigung

## navigator.accelerometer.getCurrentAcceleration

Erhalten Sie die aktuelle Beschleunigung entlang der *x-*, *y-*und *Z* -Achsen.

Diese Beschleunigungswerte werden zurückgegeben die `accelerometerSuccess` Callback-Funktion.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

### Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

### iOS Macken

*   iOS erkennt nicht das Konzept die aktuelle Beschleunigung zu einem bestimmten Zeitpunkt zu bekommen.

*   Müssen Sie die Beschleunigung zu sehen und erfassen die Daten zu bestimmten Zeitintervallen.

*   So die `getCurrentAcceleration` -Funktion führt zu den letzten Wert berichtet von einer `watchAccelerometer` rufen.

## navigator.accelerometer.watchAcceleration

Ruft das Gerät die aktuelle `Acceleration` in regelmäßigen Abständen, Ausführung der `accelerometerSuccess` Callback-Funktion jedes Mal. Gibt das Intervall in Millisekunden über die `acceleratorOptions` des Objekts `frequency` Parameter.

Das zurückgegebene ID Referenzen der Beschleunigungsmesser Uhr Intervall zu sehen und kann mit verwendet werden `navigator.accelerometer.clearWatch` , beobachten den Beschleunigungsmesser zu stoppen.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

*   **accelerometerOptions**: Ein Objekt mit den folgenden optionalen Elementen: 
    *   **Häufigkeit**: wie oft abgerufen werden die `Acceleration` in Millisekunden. *(Anzahl)* (Default: 10000)

### Beispiel

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

### iOS Macken

Die API ruft die Erfolg-Callback-Funktion im Intervall angefordert, aber schränkt den Bereich der Anforderungen an das Gerät zwischen 40ms und 1000ms. Beispielsweise wenn Sie ein Intervall von 3 Sekunden, (3000ms), beantragen die API fordert Daten vom Gerät jede Sekunde, aber nur den Erfolg-Rückruf führt alle 3 Sekunden.

## navigator.accelerometer.clearWatch

Beenden, beobachten die `Acceleration` verwiesen wird, durch die `watchID` Parameter.

    navigator.accelerometer.clearWatch(watchID);
    

*   **WatchID**: die ID von zurückgegeben`navigator.accelerometer.watchAcceleration`.

### Beispiel

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## Beschleunigung

Zu einem bestimmten Zeitpunkt erfasste `Beschleunigungsmesser`-Daten. Beschleunigungswerte sind die Auswirkungen der Schwerkraft (9.81 m/s ^ 2), so dass wenn ein Gerät flach und nach oben, *X*, *y liegt*, und *Z* -Werte zurückgegeben werden sollte `` , `` , und`9.81`.

### Eigenschaften

*   **X**: Betrag der Beschleunigung auf der x-Achse. (in m/s ^ 2) *(Anzahl)*
*   **y**: Betrag der Beschleunigung auf der y-Achse. (in m/s ^ 2) *(Anzahl)*
*   **Z**: Betrag der Beschleunigung auf die z-Achse. (in m/s ^ 2) *(Anzahl)*
*   **Timestamp**: Zeitstempel der Erstellung in Millisekunden. *(DOMTimeStamp)*