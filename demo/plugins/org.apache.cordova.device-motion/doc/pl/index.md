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

Ten plugin umożliwia dostęp do urządzenia akcelerometr. Akcelerometr jest czujnik ruchu, który wykrywa zmiany (*delta*) w ruchu względem bieżącej orientacji urządzenia, w trzech wymiarach na osi *x*, *y*i *z* .

## Instalacji

    cordova plugin add org.apache.cordova.device-motion
    

## Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   Jeżyna 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 i 8
*   Windows 8

## Metody

*   navigator.accelerometer.getCurrentAcceleration
*   navigator.accelerometer.watchAcceleration
*   navigator.accelerometer.clearWatch

## Obiekty

*   Acceleration

## navigator.accelerometer.getCurrentAcceleration

Pobiera aktualne przyspieszenie wzdłuż osi *x*, *y* oraz *z*.

Wartości przyspieszeń są zwracane funkcji `accelerometerSuccess`.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

### Przykład

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
    

### iOS dziwactwa

*   iOS nie rozpoznaje koncepcji pobrania aktualnego przyspieszenia w danym punkcie.

*   Musisz obserwować przyspieszenie i przejmować dane w określonych odstępach czasu.

*   Podsumowując, funkcja `getCurrentAcceleration` zwraca ostatnią wartość zgłoszoną przez wywołanie `watchAccelerometer`.

## navigator.accelerometer.watchAcceleration

Pobiera urządzenie w bieżącym `Acceleration` w regularnych odstępach czasu, wykonywanie `accelerometerSuccess` funkcja wywołania zwrotnego za każdym razem. Określ interwał w milisekundach przez `acceleratorOptions` obiektu `frequency` parametr.

Zwracane obejrzeć identyfikator odniesienia akcelerometr zegarek interwał i może być używany z `navigator.accelerometer.clearWatch` do zatrzymania, obejrzeniu akcelerometru.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

*   **accelerometerOptions**: Obiekt z opcjonalnie następujące klucze: 
    *   **frequency**: Jak często uzyskuje dane z `Acceleration` w milisekundach. *(Liczba)* (Domyślnie: 10000)

### Przykład

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
    

### iOS dziwactwa

API wywołuje funkcję zwrotną success w żądanym przedziale ale zakres żądania do urządzenia jest ograniczony przedziałem od 40ms do 1000ms. Dla przykładu, jeśli żądasz 3 sekundowy przedział (3000ms), API pobierze dane z urządzenia co 1 sekundę, ale wykona funkcję zwrotną success co każde 3 sekundy.

## navigator.accelerometer.clearWatch

Przestaje obserwować `Acceleration` odnoszące się do parametru `watchID`.

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**: Identyfikator zwrócony przez`navigator.accelerometer.watchAcceleration`.

### Przykład

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## Przyspieszenie

Zawiera przechwycone w danej chwili dane z `akcelerometru`. Wartości przyśpieszenia to efekt grawitacji (9.81 m/s ^ 2), tak, że kiedy urządzenie znajduje się płaska i górę, *x*, *y*, i *z* wartości zwracane powinny być `` , `` , i`9.81`.

### Właściwości

*   **x**: Wielkość przyśpieszenia na osi x. (w m/s^2) *(Liczba)*
*   **y**: Wielkość przyśpieszenia na osi y. (w m/s^2) *(Liczba)*
*   **z**: Wielkość przyśpieszenia na osi z. (w m/s^2) *(Liczba)*
*   **timestamp**: Znacznik czasu w milisekundach. *(DOMTimeStamp)*