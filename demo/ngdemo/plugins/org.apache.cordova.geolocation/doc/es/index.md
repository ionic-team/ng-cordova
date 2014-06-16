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

Este plugin proporciona información sobre la ubicación del dispositivo, tales como la latitud y longitud. Fuentes comunes de información de localización incluyen sistema de posicionamiento Global (GPS) y ubicación deducido de las señales de red como dirección IP, direcciones de RFID, WiFi y Bluetooth MAC y celulares GSM/CDMA IDs. No hay ninguna garantía de que la API devuelve la ubicación del dispositivo real.

Esta API se basa en la [Especificación de API de geolocalización W3C][1]y sólo se ejecuta en dispositivos que ya no proporcionan una implementación.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**ADVERTENCIA**: recopilación y uso de datos de geolocalización plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza los datos de geolocalización, si se comparte con cualquiera de las partes y el nivel de precisión de los datos (por ejemplo, código postal grueso, fino, nivel, etc.). Datos de geolocalización es generalmente considerados sensibles porque puede revelar paradero del usuario y, si está almacenado, la historia de sus viajes. Por lo tanto, además de política de privacidad de la app, fuertemente considere dar un aviso de just-in-time antes de la aplicación tiene acceso a datos de geolocalización (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Para obtener más información, por favor consulte a la guía de privacidad.

## Instalación

    cordova plugin add org.apache.cordova.geolocation
    

## Plataformas soportadas

*   Amazon fuego OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Métodos

*   navigator.geolocation.getCurrentPosition
*   navigator.geolocation.watchPosition
*   navigator.geolocation.clearWatch

## Objetos (sólo lectura)

*   Position
*   PositionError
*   Coordinates

## navigator.geolocation.getCurrentPosition

Devuelve la posición actual del dispositivo a la `geolocationSuccess` "callback" con un `Position` objeto como parámetro. Si hay un error, el `geolocationError` "callback" pasa un `PositionError` objeto.

    navigator.geolocation.getCurrentPosition (geolocationSuccess, [geolocationError], [geolocationOptions]);
    

### Parámetros

*   **geolocationSuccess**: la devolución de llamada que se pasa a la posición actual.

*   **geolocationError**: *(opcional)* la devolución de llamada que se ejecuta si se produce un error.

*   **geolocationOptions**: *(opcional)* las opciones de geolocalización.

### Ejemplo

    onSuccess Callback / / este método acepta un objeto Position, que contiene el / / coordenadas GPS actual / / var onSuccess = function(position) {alert (' latitud: ' + position.coords.latitude + '\n' + ' longitud: ' + position.coords.longitude + '\n' + ' altitud: ' + position.coords.altitude + '\n' + ' exactitud: ' + position.coords.accuracy + '\n' + ' altitud exactitud: ' + position.coords.altitudeAccuracy + '\n' + ' hacia: ' + position.coords.heading + '\n' + ' velocidad: ' + position.coords.speed + '\n' + ' Timestamp: ' + position.timestamp + '\n');};
    
    onError Callback recibe un objeto PositionError / / function onError(error) {alert (' código: ' + error.code + '\n' + ' mensaje: ' + error.message + '\n');}
    
    navigator.geolocation.getCurrentPosition (onSuccess, onError);
    

## navigator.geolocation.watchPosition

Devuelve la posición actual del dispositivo cuando se detecta un cambio de posición. Cuando el dispositivo recupera una nueva ubicación, el `geolocationSuccess` devolución de llamada se ejecuta con un `Position` objeto como parámetro. Si hay un error, el `geolocationError` devolución de llamada se ejecuta con un `PositionError` objeto como parámetro.

    var watchId = navigator.geolocation.watchPosition (geolocationSuccess, [geolocationError], [geolocationOptions]);
    

### Parámetros

*   **geolocationSuccess**: la devolución de llamada que se pasa a la posición actual.

*   **geolocationError**: (opcional) la devolución de llamada que se ejecuta si se produce un error.

*   **geolocationOptions**: opciones (opcional) la geolocalización.

### Devoluciones

*   **Cadena**: devuelve un identificador de reloj que hace referencia el intervalo de posición del reloj. El id del reloj debe ser utilizado con `navigator.geolocation.clearWatch` para dejar de ver a los cambios de posición.

### Ejemplo

    onSuccess Callback / / este método acepta un objeto 'Position', que contiene / / coordenadas GPS de la corriente / / function onSuccess(position) {var elemento = document.getElementById('geolocation');
        element.innerHTML = ' latitud: ' + position.coords.latitude + ' < br / >' + ' longitud: ' + position.coords.longitude + ' < br / >' + ' < hr / >' + element.innerHTML;
    } / / onError Callback recibe un objeto PositionError / / function onError(error) {alert (' código: ' + error.code + '\n' + ' mensaje: ' + error.message + '\n');}
    
    Opciones: tira un error si no se recibe ninguna actualización cada 30 segundos.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {timeout: 30000});
    

## geolocationOptions

Parámetros opcionales para personalizar la recuperación de la geolocalización`Position`.

    {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
    

### Opciones

*   **enableHighAccuracy**: proporciona una pista que la aplicación necesita los mejores resultados posibles. De forma predeterminada, el dispositivo intentará recuperar un `Position` usando métodos basados en red. Al establecer esta propiedad en `true` dice el marco a utilizar métodos más precisos, como el posicionamiento satelital. *(Boolean)*

*   **tiempo de espera**: la longitud máxima de tiempo (en milisegundos) que está permitido el paso de la llamada a `navigator.geolocation.getCurrentPosition` o `geolocation.watchPosition` hasta el correspondiente `geolocationSuccess` devolución de llamada se ejecuta. Si el `geolocationSuccess` no se invoque "callback" dentro de este tiempo, el `geolocationError` devolución de llamada se pasa un `PositionError.TIMEOUT` código de error. (Tenga en cuenta que cuando se utiliza en conjunción con `geolocation.watchPosition` , el `geolocationError` "callback" podría ser llamado en un intervalo cada `timeout` milisegundos!) *(Número)*

*   **maximumAge**: aceptar un puesto en la memoria caché, cuya edad no es mayor que el tiempo especificado en milisegundos. *(Número)*

### Rarezas Android

Emuladores Android 2.x no devuelva un resultado de geolocalización a menos que el `enableHighAccuracy` opción se establece en`true`.

## navigator.geolocation.clearWatch

Deja de ver cambios en la ubicación del dispositivo al que hace referencia el `watchID` parámetro.

    navigator.geolocation.clearWatch(watchID);
    

### Parámetros

*   **watchID**: el id de la `watchPosition` intervalo para despejar. (String)

### Ejemplo

    Opciones: ver los cambios en la posición y usar más / / exacta posición disponible del método de adquisición.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {enableHighAccuracy: true});
    
    ... después de...
    
    navigator.geolocation.clearWatch(watchID);
    

## Position

Contiene `Position` coordenadas y timestamp, creado por la API de geolocalización.

### Propiedades

*   **coordenadas**: un conjunto de coordenadas geográficas. *(Coordenadas)*

*   **timestamp**: fecha y hora de creación `coords` . *(Fecha)*

## Coordinates

A `Coordinates` objeto está unido a un `Position` que está disponible para funciones de retrollamada en las solicitudes para la posición actual del objeto. Contiene un conjunto de propiedades que describen las coordenadas geográficas de posición.

### Propiedades

*   **Latitude**: latitud en grados decimales. *(Número)*

*   **longitud**: longitud en grados decimales. *(Número)*

*   **altitud**: altura de la posición en metros por encima del elipsoide. *(Número)*

*   **exactitud**: nivel de precisión de las coordenadas de latitud y longitud en metros. *(Número)*

*   **altitudeAccuracy**: nivel de precisión de las coordenadas de altitud en metros. *(Número)*

*   **Dirección**: dirección del recorrido, especificado en grados contando hacia la derecha en relación con el norte verdadero. *(Número)*

*   **velocidad**: velocidad actual del dispositivo especificado en metros por segundo. *(Número)*

### Amazon fuego OS rarezas

**altitudeAccuracy**: no compatible con dispositivos Android, regresando`null`.

### Rarezas Android

**altitudeAccuracy**: no compatible con dispositivos Android, regresando`null`.

## PositionError

El `PositionError` objeto se pasa a la `geolocationError` función de devolución de llamada cuando se produce un error con navigator.geolocation.

### Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

*   **mensaje**: mensaje de Error que describe los detalles del error encontrado.

### Constantes

*   `PositionError.PERMISSION_DENIED` 
    *   Regresó cuando los usuarios no permiten la aplicación recuperar información de la posición. Esto depende de la plataforma.
*   `PositionError.POSITION_UNAVAILABLE` 
    *   Regresó cuando el dispositivo es capaz de recuperar una posición. En general, esto significa que el dispositivo no está conectado a una red o no puede obtener una solución vía satélite.
*   `PositionError.TIMEOUT` 
    *   Cuando el dispositivo es capaz de recuperar una posición dentro del tiempo especificado por el `timeout` incluido en `geolocationOptions` . Cuando se utiliza con `navigator.geolocation.watchPosition` , este error podría pasar repetidamente a la `geolocationError` "callback" cada `timeout` milisegundos.