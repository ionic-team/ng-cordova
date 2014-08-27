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

# org.apache.cordova.geolocation

Dieses Plugin bietet Informationen über das Gerät an den Speicherort, z. B. breiten- und Längengrad. Gemeinsame Quellen von Standortinformationen sind Global Positioning System (GPS) und Lage von Netzwerk-Signale wie IP-Adresse, RFID, WLAN und Bluetooth MAC-Adressen und GSM/CDMA Zelle IDs abgeleitet. Es gibt keine Garantie, dass die API des Geräts tatsächliche Position zurückgibt.

Diese API basiert auf der [W3C Geolocation API-Spezifikation][1], und nur auf Geräten, die nicht bereits eine Implementierung bieten führt.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Warnung**: Erhebung und Nutzung von Geolocation-Daten wichtige Privatsphäre wirft. Wie die app benutzt Geolocation-Daten, Ihre app-Datenschutzrichtlinien zu diskutieren, ob es mit allen anderen Parteien und das Niveau der Genauigkeit der Daten (z. B. grob, fein, Postleitzahl, etc..) freigegeben ist. Geolocation-Daten gilt allgemein als empfindlich, weil es den Aufenthaltsort des Benutzers erkennen lässt und wenn gespeichert, die Geschichte von ihren Reisen. Daher neben der app-Privacy Policy sollten stark Sie Bereitstellung einer just-in-Time-Bekanntmachung, bevor die app Geolocation-Daten zugreift (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Weitere Informationen finden Sie in der Datenschutz-Guide.

## Installation

    cordova plugin add org.apache.cordova.geolocation
    

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

*   navigator.geolocation.getCurrentPosition
*   navigator.geolocation.watchPosition
*   navigator.geolocation.clearWatch

## Objekte (schreibgeschützt)

*   Stellung
*   PositionError
*   Koordinaten

## navigator.geolocation.getCurrentPosition

Gibt das Gerät die aktuelle Position auf der `geolocationSuccess` Rückruf mit einem `Position` Objekt als Parameter. Wenn ein Fehler auftritt, der `geolocationError` Rückruf wird übergeben ein `PositionError` Objekt.

    navigator.geolocation.getCurrentPosition (GeolocationSuccess, [GeolocationError], [GeolocationOptions]);
    

### Parameter

*   **GeolocationSuccess**: der Rückruf, der die aktuelle Position übergeben wird.

*   **GeolocationError**: *(Optional)* der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **GeolocationOptions**: *(Optional)* die Geolocation-Optionen.

### Beispiel

    OnSuccess Rückruf / / diese Methode akzeptiert eine Position-Objekt, das enthält die / / aktuellen GPS-Koordinaten / / Var OnSuccess = function(position) {Warnung (' Breitengrad: ' + position.coords.latitude + '\n' + ' Länge: "+ position.coords.longitude + '\n' + ' Höhe: ' + position.coords.altitude + '\n' + ' Genauigkeit: ' + position.coords.accuracy + '\n' + ' Höhe Genauigkeit: ' + position.coords.altitudeAccuracy + '\n' + ' Überschrift: ' + position.coords.heading + '\n' + ' Geschwindigkeit: ' + position.coords.speed + '\n' + ' Timestamp: ' + position.timestamp + '\n');};
    
    OnError Rückruf erhält ein PositionError-Objekt / / function onError(error) {Alert ('Code: ' + error.code + '\n' + ' Nachricht: ' + error.message + '\n');}
    
    navigator.geolocation.getCurrentPosition (OnSuccess, OnError);
    

## navigator.geolocation.watchPosition

Gibt das Gerät aktuelle Position zurück, wenn eine Änderung erkannt wird. Wenn das Gerät einen neuen Speicherort und ruft die `geolocationSuccess` Rückruf führt mit einem `Position` Objekt als Parameter. Wenn ein Fehler auftritt, der `geolocationError` Rückruf führt mit einem `PositionError` Objekt als Parameter.

    Var WatchId = navigator.geolocation.watchPosition (GeolocationSuccess, [GeolocationError], [GeolocationOptions]);
    

### Parameter

*   **GeolocationSuccess**: der Rückruf, der die aktuelle Position übergeben wird.

*   **GeolocationError**: (Optional) der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **GeolocationOptions**: (Optional) die Geolocation-Optionen.

### Gibt

*   **String**: gibt eine Uhr-Id, die das Uhr Position Intervall verweist zurück. Die Uhr-Id sollte verwendet werden, mit `navigator.geolocation.clearWatch` , gerade für Änderungen zu stoppen.

### Beispiel

    OnSuccess Callback / / diese Methode akzeptiert eine 'Position'-Objekt, das enthält / / der aktuellen GPS-Koordinaten / / function onSuccess(position) {Var-Element = document.getElementById('geolocation');
        element.innerHTML = ' Breitengrad: "+ position.coords.latitude + ' < Br / >' + ' Länge:" + position.coords.longitude + ' < Br / >' + ' < hr / >' + element.innerHTML;
    } / / OnError Rückruf erhält ein PositionError-Objekt / / function onError(error) {Alert ('Code: ' + error.code + '\n' + ' Nachricht: ' + error.message + '\n');}
    
    Optionen: lösen Sie einen Fehler aus, wenn kein Update alle 30 Sekunden empfangen wird.
    Var WatchID = navigator.geolocation.watchPosition (OnSuccess, OnError, {Timeout: 30000});
    

## geolocationOptions

Optionalen Parametern, um das Abrufen von der geolocation`Position`.

    {MaximumAge: 3000, Timeout: 5000, EnableHighAccuracy: true};
    

### Optionen

*   **EnableHighAccuracy**: stellt einen Hinweis, dass die Anwendung die bestmöglichen Ergebnisse benötigt. Standardmäßig versucht das Gerät abzurufen ein `Position` mit netzwerkbasierte Methoden. Wenn diese Eigenschaft auf `true` erzählt den Rahmenbedingungen genauere Methoden, z. B. Satellitenortung verwenden. *(Boolean)*

*   **Timeout**: die maximale Länge der Zeit (in Millisekunden), die zulässig ist, übergeben Sie den Aufruf von `navigator.geolocation.getCurrentPosition` oder `geolocation.watchPosition` bis zu den entsprechenden `geolocationSuccess` Rückruf führt. Wenn die `geolocationSuccess` Rückruf wird nicht aufgerufen, in dieser Zeit die `geolocationError` Rückruf wird übergeben ein `PositionError.TIMEOUT` Fehlercode. (Beachten Sie, dass in Verbindung mit `geolocation.watchPosition` , die `geolocationError` Rückruf könnte auf ein Intervall aufgerufen werden alle `timeout` Millisekunden!) *(Anzahl)*

*   **MaximumAge**: eine zwischengespeicherte Position, deren Alter nicht größer als die angegebene Zeit in Millisekunden ist, zu akzeptieren. *(Anzahl)*

### Android Macken

Android 2.x-Emulatoren geben ein Geolocation-Ergebnis nicht zurück, es sei denn, die `enableHighAccuracy` Option auf festgelegt ist`true`.

## navigator.geolocation.clearWatch

Stoppen, gerade für Änderungen an das Gerät Stelle verweist die `watchID` Parameter.

    navigator.geolocation.clearWatch(watchID);
    

### Parameter

*   **WatchID**: die Id der `watchPosition` Intervall löschen. (String)

### Beispiel

    Optionen: Achten Sie auf Änderungen der Position und verwenden Sie die / / genaue position Erwerbsart verfügbar.
    Var WatchID = navigator.geolocation.watchPosition (OnSuccess, OnError, {EnableHighAccuracy: True});
    
    ... veranstalten am...
    
    navigator.geolocation.clearWatch(watchID);
    

## Stellung

Enthält `Position` Koordinaten und Timestamp, erstellt von der Geolocation API.

### Eigenschaften

*   **CoOrds**: eine Reihe von geographischen Koordinaten. *(Koordinaten)*

*   **Timestamp**: Zeitstempel der Erstellung für `coords` . *(Datum)*

## Koordinaten

A `Coordinates` Objekt an angeschlossen ist ein `Position` -Objekt, das Callback-Funktionen in Anforderungen für die aktuelle Position zur Verfügung steht. Es enthält eine Reihe von Eigenschaften, die die geographischen Koordinaten von einer Position zu beschreiben.

### Eigenschaften

*   **Breitengrad**: Latitude in Dezimalgrad. *(Anzahl)*

*   **Länge**: Länge in Dezimalgrad. *(Anzahl)*

*   **Höhe**: Höhe der Position in Meter über dem Ellipsoid. *(Anzahl)*

*   **Genauigkeit**: Genauigkeit der breiten- und Längengrad Koordinaten in Metern. *(Anzahl)*

*   **AltitudeAccuracy**: Genauigkeit der Koordinate Höhe in Metern. *(Anzahl)*

*   **Rubrik**: Fahrtrichtung, angegeben in Grad relativ zu den Norden im Uhrzeigersinn gezählt. *(Anzahl)*

*   **Geschwindigkeit**: aktuelle Geschwindigkeit über Grund des Geräts, in Metern pro Sekunde angegeben. *(Anzahl)*

### Amazon Fire OS Macken

**AltitudeAccuracy**: von Android-Geräten, Rückgabe nicht unterstützt`null`.

### Android Macken

**AltitudeAccuracy**: von Android-Geräten, Rückgabe nicht unterstützt`null`.

## PositionError

Das `PositionError` -Objekt übergeben, um die `geolocationError` Callback-Funktion tritt ein Fehler mit navigator.geolocation.

### Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

*   **Nachricht**: Fehlermeldung, die die Informationen über den aufgetretenen Fehler beschreibt.

### Konstanten

*   `PositionError.PERMISSION_DENIED` 
    *   Zurückgegeben, wenn Benutzer erlauben nicht die app Positionsinformationen abgerufen werden. Dies ist abhängig von der Plattform.
*   `PositionError.POSITION_UNAVAILABLE` 
    *   Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position abzurufen ist. Im Allgemeinen bedeutet dies, dass das Gerät nicht mit einem Netzwerk verbunden ist oder ein Satelliten-Update kann nicht abgerufen werden.
*   `PositionError.TIMEOUT` 
    *   Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position innerhalb der festgelegten Zeit abzurufen ist die `timeout` enthalten `geolocationOptions` . Bei Verwendung mit `navigator.geolocation.watchPosition` , könnte dieser Fehler wiederholt übergeben werden, zu der `geolocationError` Rückruf jedes `timeout` Millisekunden.