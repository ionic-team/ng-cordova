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

# org.apache.cordova.camera

Este plugin proporciona una API para tomar fotografías y por elegir imágenes de biblioteca de imágenes del sistema.

    cordova plugin add org.apache.cordova.camera
    

## navigator.camera.getPicture

Toma una foto con la cámara, o recupera una foto de Galería de imágenes del dispositivo. La imagen se pasa a la devolución de llamada de éxito como un codificado en base64 `String` , o como el URI para el archivo de imagen. El método se devuelve un `CameraPopoverHandle` objeto que puede utilizarse para volver a colocar el popover de selección de archivo.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

### Descripción

El `camera.getPicture` función abre la aplicación de cámara predeterminada del dispositivo que permite a los usuarios ajustar imágenes. Este comportamiento se produce de forma predeterminada, cuando `Camera.sourceType` es igual a `Camera.PictureSourceType.CAMERA` . Una vez que el usuario ajusta la foto, una aplicación de cámara se cierra y se restablecerá la aplicación.

Si `Camera.sourceType` es `Camera.PictureSourceType.PHOTOLIBRARY` o `Camera.PictureSourceType.SAVEDPHOTOALBUM` , entonces una muestra de diálogo que permite a los usuarios seleccionar una imagen existente. El `camera.getPicture` función devuelve un `CameraPopoverHandle` objeto, que puede utilizarse para volver a colocar el diálogo de selección de imagen, por ejemplo, cuando cambia la orientación del dispositivo.

El valor devuelto es enviado a la `cameraSuccess` función de callback, en uno de los formatos siguientes, dependiendo del objeto `cameraOptions` :

*   A `String` que contiene la imagen codificada en base64.

*   A `String` que representa la ubicación del archivo de imagen de almacenamiento local (por defecto).

Puedes hacer lo que quieras con la imagen codificada o URI, por ejemplo:

*   Utilidad de la imagen en un `<img>` etiqueta, como en el ejemplo siguiente

*   Guardar los datos localmente ( `LocalStorage` , [Lawnchair][1], etc..)

*   Enviar los datos a un servidor remoto

 [1]: http://brianleroux.github.com/lawnchair/

**Nota**: resolución de la foto en los nuevos dispositivos es bastante bueno. Fotos seleccionadas de la Galería del dispositivo no son degradadas a una calidad más baja, incluso si un `quality` se especifica el parámetro. Para evitar problemas con la memoria común, establezca `Camera.destinationType` a `FILE_URI` en lugar de`DATA_URL`.

### Plataformas soportadas

*   Amazon fuego OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

### Amazon fuego OS rarezas

Amazon fuego OS utiliza los intentos para poner en marcha la actividad de la cámara del dispositivo para capturar imágenes y en teléfonos con poca memoria, puede matar la actividad Cordova. En este escenario, la imagen no aparezca cuando se restaura la actividad cordova.

### Rarezas Android

Android utiliza los intentos para iniciar la actividad de la cámara del dispositivo para capturar imágenes, y en los teléfonos con poca memoria, puede matar la actividad Cordova. En este escenario, la imagen no aparezca cuando se restaura la actividad Cordova.

### Firefox OS rarezas

Cámara plugin actualmente se implementa mediante [Actividades Web][2].

 [2]: https://hacks.mozilla.org/2013/01/introducing-web-activities/

### iOS rarezas

Incluyendo un JavaScript `alert()` en cualquiera de la devolución de llamada funciones pueden causar problemas. Envuelva la alerta dentro de un `setTimeout()` para permitir que el selector de imagen iOS o popover cerrar completamente antes de la alerta se muestra:

    setTimeout(function() {
        // do your thing here!
    }, 0);
    

### Windows Phone 7 rarezas

Invocando la aplicación de cámara nativa mientras el dispositivo está conectado vía Zune no funciona y desencadena un callback de error.

### Rarezas Tizen

Tizen sólo es compatible con un `destinationType` de `Camera.DestinationType.FILE_URI` y un `sourceType` de`Camera.PictureSourceType.PHOTOLIBRARY`.

### Ejemplo

Tomar una foto y recuperarlo como una imagen codificada en base64:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

Tomar una foto y recuperar la ubicación del archivo de la imagen:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## CameraOptions

Parámetros opcionales para personalizar la configuración de la cámara.

    {calidad: destinationType 75,: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: true, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: falsa};
    

### Opciones

*   **calidad**: calidad de la imagen guardada, expresada en un rango de 0-100, donde 100 es típicamente resolución sin pérdida de compresión del archivo. *(Número)* (Tenga en cuenta que no está disponible información sobre resolución de la cámara).

*   **destinationType**: elegir el formato del valor devuelto. Definido en `navigator.camera.DestinationType` *(número)* 
    
        Camera.DestinationType = {DATA_URL: 0, / / devolver la imagen como cadena codificada en base64 FILE_URI: 1, / / retorno de archivo de imagen URI NATIVE_URI: 2 / / retorno de la imagen nativa URI (por ejemplo, biblioteca de activos: / / on iOS o contenido: / / on Android)};
        

*   **sourceType**: establecer el origen de la imagen. Definido en `navigator.camera.PictureSourceType` *(número)* 
    
        Camera.PictureSourceType = {Fototeca: 0, cámara: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: permite edición sencilla de imagen antes de la selección. *(Booleano)*

*   **encodingType**: elegir la codificación del archivo de imagen devuelta. Definido en `navigator.camera.EncodingType` *(número)* 
    
        Camera.EncodingType = {JPEG: 0 / / retorno JPEG imagen PNG codificada: 1 / / retorno PNG imagen codificada};
        

*   **targetWidth**: ancho en píxeles a escala de la imagen. Debe usarse con **targetHeight**. Proporción se mantiene constante. *(Número)*

*   **targetHeight**: altura en píxeles a escala de la imagen. Debe usarse con **targetWidth**. Proporción se mantiene constante. *(Número)*

*   **mediaType**: definir el tipo de medios para seleccionar. Sólo funciona cuando `PictureSourceType` es `PHOTOLIBRARY` o `SAVEDPHOTOALBUM` . Definido en `nagivator.camera.MediaType` *(número)* 
    
        Camera.MediaType = {imagen: 0, / / permiten la selección de imágenes fijas solamente. DE FORMA PREDETERMINADA. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
        };
        

*   **correctOrientation**: rotar la imagen para corregir la orientación del dispositivo durante la captura. *(Booleano)*

*   **saveToPhotoAlbum**: guardar la imagen en el álbum de fotos en el dispositivo después de su captura. *(Booleano)*

*   **popoverOptions**: opciones sólo iOS que especifican popover ubicación en iPad. Definido en`CameraPopoverOptions`.

*   **cameraDirection**: elegir la cámara para usar (o parte posterior-frontal). Definido en `navigator.camera.Direction` *(número)* 
    
        Camera.Direction = {atrás: 0, / / usar la cámara trasera frente: 1 / / usar la cámara frontal};
        

### Amazon fuego OSQuirks

*   Cualquier `cameraDirection` valor resultados en una foto orientada hacia atrás.

*   Ignora el `allowEdit` parámetro.

*   `Camera.PictureSourceType.PHOTOLIBRARY`y `Camera.PictureSourceType.SAVEDPHOTOALBUM` ambas muestran el mismo álbum de fotos.

### Rarezas Android

*   Cualquier `cameraDirection` valor resultados en una foto orientada hacia atrás.

*   Ignora el `allowEdit` parámetro.

*   `Camera.PictureSourceType.PHOTOLIBRARY`y `Camera.PictureSourceType.SAVEDPHOTOALBUM` ambas muestran el mismo álbum de fotos.

### BlackBerry 10 rarezas

*   Ignora el `quality` parámetro.

*   Ignora el `sourceType` parámetro.

*   Ignora el `allowEdit` parámetro.

*   `Camera.MediaType`No se admite.

*   Ignora el `correctOrientation` parámetro.

*   Ignora el `cameraDirection` parámetro.

### Firefox OS rarezas

*   Ignora el `quality` parámetro.

*   `Camera.DestinationType`se ignora y es igual a `1` (URI del archivo de imagen)

*   Ignora el `allowEdit` parámetro.

*   Ignora el `PictureSourceType` parámetro (usuario elige en una ventana de diálogo)

*   Ignora el`encodingType`

*   Ignora el `targetWidth` y`targetHeight`

*   `Camera.MediaType`No se admite.

*   Ignora el `correctOrientation` parámetro.

*   Ignora el `cameraDirection` parámetro.

### iOS rarezas

*   Establecer `quality` por debajo de 50 para evitar errores de memoria en algunos dispositivos.

*   Cuando se utiliza `destinationType.FILE_URI` , fotos se guardan en el directorio temporal de la aplicación. Puedes borrar el contenido de este directorio mediante la `navigator.fileMgr` API si el espacio de almacenamiento es un motivo de preocupación.

### Rarezas Tizen

*   opciones no compatibles

*   siempre devuelve un identificador URI de archivo

### Windows Phone 7 y 8 rarezas

*   Ignora el `allowEdit` parámetro.

*   Ignora el `correctOrientation` parámetro.

*   Ignora el `cameraDirection` parámetro.

*   Ignora el `mediaType` propiedad de `cameraOptions` como el SDK de Windows Phone no proporciona una manera para elegir videos fototeca.

## CameraError

onError función callback que proporciona un mensaje de error.

    function(message) {
        // Show a helpful message
    }
    

### Parámetros

*   **mensaje**: el mensaje es proporcionado por código nativo del dispositivo. *(String)*

## cameraSuccess

onSuccess función callback que proporciona los datos de imagen.

    function(imageData) {
        // Do something with the image
    }
    

### Parámetros

*   **imageData**: codificación en Base64 de los datos de imagen, *o* el archivo de imagen URI, dependiendo de `cameraOptions` en vigor. *(String)*

### Ejemplo

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    

## CameraPopoverHandle

Un identificador para el cuadro de diálogo popover creado por`navigator.camera.getPicture`.

### Métodos

*   **setPosition**: establecer la posición de la popover.

### Plataformas soportadas

*   iOS

### setPosition

Establecer la posición de la popover.

**Parámetros**:

*   `cameraPopoverOptions`: el `CameraPopoverOptions` que especifican la nueva posición

### Ejemplo

     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
           popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
         });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
    

## CameraPopoverOptions

Sólo iOS parámetros que especifican la dirección ancla elemento ubicación y la flecha de la popover al seleccionar imágenes de biblioteca o álbum de un iPad.

    {x: 0, y: 32, ancho: 320, altura: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

### CameraPopoverOptions

*   **x**: coordenadas de píxeles del elemento de la pantalla en la que anclar el popover x. *(Número)*

*   **y**: coordenada píxeles del elemento de la pantalla en la que anclar el popover. *(Número)*

*   **anchura**: anchura, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **altura**: alto, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **arrowDir**: dirección de la flecha en el popover debe apuntar. Definido en `Camera.PopoverArrowDirection` *(número)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1 / / coincide con iOS UIPopoverArrowDirection constantes ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Tenga en cuenta que puede cambiar el tamaño de la popover para ajustar la dirección de la flecha y orientación de la pantalla. Asegúrese de que para tener en cuenta los cambios de orientación cuando se especifica la ubicación del elemento de anclaje.

## Navigator.Camera.Cleanup

Elimina intermedio fotos tomadas por la cámara de almacenamiento temporal.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

### Descripción

Elimina intermedio archivos de imagen que se mantienen en depósito temporal después de llamar `camera.getPicture` . Se aplica sólo cuando el valor de `Camera.sourceType` es igual a `Camera.PictureSourceType.CAMERA` y el `Camera.destinationType` es igual a`Camera.DestinationType.FILE_URI`.

### Plataformas soportadas

*   iOS

### Ejemplo

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }