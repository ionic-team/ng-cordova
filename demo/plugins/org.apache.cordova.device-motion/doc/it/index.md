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

Questo plugin consente di accedere all'accelerometro del dispositivo. L'accelerometro è un sensore di movimento che rileva il cambiamento (*delta*) nel movimento relativo l'orientamento corrente del dispositivo, in tre dimensioni lungo l'asse *x*, *y*e *z* .

## Installazione

    cordova plugin add org.apache.cordova.device-motion
    

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Metodi

*   navigator.accelerometer.getCurrentAcceleration
*   navigator.accelerometer.watchAcceleration
*   navigator.accelerometer.clearWatch

## Oggetti

*   Accelerazione

## navigator.accelerometer.getCurrentAcceleration

Ottenere l'attuale accelerazione lungo gli assi *x*, *y*e *z* .

I valori di accelerazione vengono restituiti per la `accelerometerSuccess` funzione di callback.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

### Esempio

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
    

### iOS stranezze

*   iOS non riconosce il concetto di ottenere l'accelerazione della corrente in un dato punto.

*   Si deve guardare l'accelerazione e acquisire i dati di intervalli di tempo dato.

*   Così, il `getCurrentAcceleration` funzione restituisce l'ultimo valore segnalato da un `watchAccelerometer` chiamare.

## navigator.accelerometer.watchAcceleration

Recupera il dispositivo di corrente `Acceleration` a intervalli regolari, eseguendo la `accelerometerSuccess` funzione di callback ogni volta. Specificare l'intervallo in millisecondi via la `acceleratorOptions` dell'oggetto `frequency` parametro.

L'oggetto restituito guardare ID riferimenti intervallo orologio di accelerometro e può essere utilizzato con `navigator.accelerometer.clearWatch` a smettere di guardare l'accelerometro.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

*   **accelerometerOptions**: Un oggetto con le seguenti chiavi opzionali: 
    *   **frequenza**: la frequenza di recuperare il `Acceleration` in millisecondi. *(Numero)* (Default: 10000)

### Esempio

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
    

### iOS stranezze

L'API chiama la funzione di callback di successo nell'intervallo richiesto, ma limita la gamma di richieste alla periferica tra 40ms e 1000ms. Ad esempio, se si richiede un intervallo di 3 secondi, (3000ms), l'API richiede i dati dal dispositivo ogni secondo, ma esegue solo il callback di successo ogni 3 secondi.

## navigator.accelerometer.clearWatch

Smettere di guardare il `Acceleration` fanno riferimento il `watchID` parametro.

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**: l'ID restituito da`navigator.accelerometer.watchAcceleration`.

### Esempio

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## Accelerazione

Contiene `Accelerometer` dati acquisiti in un punto specifico nel tempo. I valori di accelerazione includono l'effetto della gravità (9,81 m/s ^ 2), in modo che quando un dispositivo si trova piatta e rivolto in su, *x*, *y*, e *z* valori restituiti devono essere `` , `` , e`9.81`.

### Proprietà

*   **x**: quantità di accelerazione sull'asse x. (in m/s ^ 2) *(Numero)*
*   **y**: quantità di accelerazione sull'asse y. (in m/s ^ 2) *(Numero)*
*   **z**: quantità di accelerazione sull'asse z. (in m/s ^ 2) *(Numero)*
*   **timestamp**: creazione timestamp in millisecondi. *(DOMTimeStamp)*