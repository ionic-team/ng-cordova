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

Dieses Plugin stellt eine API für Aufnahmen und für die Auswahl der Bilder aus dem System-Image-Library.

    cordova plugin add org.apache.cordova.camera
    

## navigator.camera.getPicture

Nimmt ein Foto mit der Kamera, oder ein Foto aus dem Gerät Bildergalerie abgerufen. Das Bild wird an den Erfolg-Rückruf als eine base64-codierte übergeben `String` , oder als den URI für die Image-Datei. Die Methode selbst gibt ein `CameraPopoverHandle` -Objekt, das verwendet werden kann, um die Datei-Auswahl-Popover neu zu positionieren.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

### Beschreibung

Die `camera.getPicture` -Funktion öffnet das Gerät Standard-Kamera-Anwendung, die Benutzern ermöglicht, Bilder ausrichten. Dieses Verhalten tritt standardmäßig, wenn `Camera.sourceType` gleich `Camera.PictureSourceType.CAMERA` . Sobald der Benutzer die Fotoschnäpper, die Kameraanwendung geschlossen wird und die Anwendung wird wiederhergestellt.

Wenn `Camera.sourceType` ist `Camera.PictureSourceType.PHOTOLIBRARY` oder `Camera.PictureSourceType.SAVEDPHOTOALBUM` , dann ein Dialog-Displays, die Benutzern ermöglicht, ein vorhandenes Bild auszuwählen. Die `camera.getPicture` Funktion gibt ein `CameraPopoverHandle` -Objekt, das verwendet werden kann, um den Bild-Auswahl-Dialog, zum Beispiel beim ändert sich der Orientierung des Geräts neu positionieren.

Der Rückgabewert wird gesendet, um die `cameraSuccess` Callback-Funktion in einem der folgenden Formate, je nach dem angegebenen `cameraOptions` :

*   A `String` mit dem base64-codierte Foto-Bild.

*   A `String` , die die Bild-Datei-Stelle auf lokalem Speicher (Standard).

Sie können tun, was Sie wollen, mit dem codierten Bildes oder URI, zum Beispiel:

*   Rendern Sie das Bild in ein `<img>` Tag, wie im folgenden Beispiel

*   Die Daten lokal zu speichern ( `LocalStorage` , [Lawnchair][1], etc..)

*   Post die Daten an einen entfernten server

 [1]: http://brianleroux.github.com/lawnchair/

**Hinweis**: Fotoauflösung auf neueren Geräten ist ganz gut. Fotos aus dem Gerät Galerie ausgewählt sind nicht zu einer niedrigeren Qualität herunterskaliert auch wenn ein `quality` -Parameter angegeben wird. Um Speicherprobleme zu vermeiden, legen Sie `Camera.destinationType` auf `FILE_URI` statt`DATA_URL`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

### Amazon Fire OS Macken

Amazon Fire OS verwendet Absichten zum Starten von der Kamera-Aktivität auf dem Gerät, um Bilder zu erfassen und auf Handys mit wenig Speicher, Cordova Tätigkeit getötet werden kann. In diesem Szenario kann das Bild nicht angezeigt, wenn die Aktivität von Cordova wiederhergestellt wird.

### Android Macken

Android verwendet Absichten zum Starten von der Kamera-Aktivität auf dem Gerät, um Bilder zu erfassen und auf Handys mit wenig Speicher, Cordova Tätigkeit getötet werden kann. In diesem Szenario kann das Bild nicht angezeigt, wenn die Aktivität von Cordova wiederhergestellt wird.

### Firefox OS Macken

Kamera-Plugin ist derzeit implementiert mithilfe von [Web-Aktivitäten][2].

 [2]: https://hacks.mozilla.org/2013/01/introducing-web-activities/

### iOS Macken

Darunter eine JavaScript `alert()` entweder des Rückrufs Funktionen können Probleme verursachen. Wickeln Sie die Warnung innerhalb einer `setTimeout()` erlauben die iOS-Bild-Picker oder Popover vollständig zu schließen, bevor die Warnung angezeigt:

    setTimeout(function() {/ / Mach dein Ding hier!}, 0);
    

### Windows Phone 7 Macken

Die native Kameraanwendung aufrufen, während das Gerät via Zune angeschlossen ist funktioniert nicht und löst eine Fehler-Callback.

### Tizen Macken

Tizen unterstützt nur eine `destinationType` der `Camera.DestinationType.FILE_URI` und eine `sourceType` von`Camera.PictureSourceType.PHOTOLIBRARY`.

### Beispiel

Nehmen Sie ein Foto und rufen Sie sie als base64-codierte Bild:

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
    

Nehmen Sie ein Foto und rufen Sie das Bild-Datei-Speicherort:

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

Optionale Parameter die Kameraeinstellungen anpassen.

    {Qualität: 75, DestinationType: Camera.DestinationType.DATA_URL, SourceType: Camera.PictureSourceType.CAMERA, AllowEdit: stimmt, EncodingType: Camera.EncodingType.JPEG, TargetWidth: 100, TargetHeight: 100, PopoverOptions: CameraPopoverOptions, SaveToPhotoAlbum: false};
    

### Optionen

*   **Qualität**: Qualität des gespeicherten Bildes, ausgedrückt als ein Bereich von 0-100, wo 100 in der Regel voller Auflösung ohne Verlust aus der Dateikomprimierung ist. *(Anzahl)* (Beachten Sie, dass Informationen über die Kamera Auflösung nicht verfügbar ist.)

*   **DestinationType**: Wählen Sie das Format des Rückgabewerts. Im Sinne `navigator.camera.DestinationType` *(Anzahl)*
    
        Camera.DestinationType = {DATA_URL: 0, / / Return Bild als base64-codierte Zeichenfolge FILE_URI: 1, / / Return Image-Datei-URI NATIVE_URI: 2 / / Return image native URI (z. B. Ressourcen-Bibliothek: / / auf iOS oder Inhalte: / / auf Android)};
        

*   **SourceType**: Legen Sie die Quelle des Bildes. Im Sinne `navigator.camera.PictureSourceType` *(Anzahl)*
    
        Camera.PictureSourceType = {Fotothek: 0, Kamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **AllowEdit**: einfache Bearbeitung des Bildes vor Auswahl zu ermöglichen. *(Boolesch)*

*   **EncodingType**: die zurückgegebene Image-Datei ist Codierung auswählen. Im Sinne `navigator.camera.EncodingType` *(Anzahl)*
    
        Camera.EncodingType = {JPEG: 0, / / Return JPEG-codierte Bild PNG: 1 / / Return PNG codiertes Bild};
        

*   **TargetWidth**: Breite in Pixel zum Bild skalieren. Muss mit **TargetHeight**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **TargetHeight**: Höhe in Pixel zum Bild skalieren. Muss mit **TargetWidth**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **MediaType**: Legen Sie den Typ der Medien zur Auswahl. Funktioniert nur, wenn `PictureSourceType` ist `PHOTOLIBRARY` oder `SAVEDPHOTOALBUM` . Im Sinne `nagivator.camera.MediaType` *(Anzahl)* 
    
        Camera.MediaType = {Bild: 0, / / Auswahl der Standbilder nur ermöglichen. STANDARD. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
        };
        

*   **CorrectOrientation**: Drehen Sie das Bild um die Ausrichtung des Geräts während der Aufnahme zu korrigieren. *(Boolesch)*

*   **SaveToPhotoAlbum**: das Bild auf das Fotoalbum auf dem Gerät zu speichern, nach Einnahme. *(Boolesch)*

*   **PopoverOptions**: iOS-nur Optionen, die Popover Lage in iPad angeben. In definierten`CameraPopoverOptions`.

*   **CameraDirection**: Wählen Sie die Kamera (vorn oder hinten-gerichtete) verwenden. Im Sinne `navigator.camera.Direction` *(Anzahl)*
    
        Camera.Direction = {zurück: 0, / / die hinten gerichteter Kamera vorne verwenden: 1 / / die nach vorn gerichtete Kamera verwenden};
        

### Amazon Fire OSQuirks

*   `cameraDirection`Ergebnisse in einem hinten gerichteter Foto Wert.

*   Ignoriert die `allowEdit` Parameter.

*   `Camera.PictureSourceType.PHOTOLIBRARY`und `Camera.PictureSourceType.SAVEDPHOTOALBUM` beide das gleiche Fotoalbum anzuzeigen.

### Android Macken

*   `cameraDirection`Ergebnisse in einem hinten gerichteter Foto Wert.

*   Ignoriert die `allowEdit` Parameter.

*   `Camera.PictureSourceType.PHOTOLIBRARY`und `Camera.PictureSourceType.SAVEDPHOTOALBUM` beide das gleiche Fotoalbum anzuzeigen.

### BlackBerry 10 Macken

*   Ignoriert die `quality` Parameter.

*   Ignoriert die `sourceType` Parameter.

*   Ignoriert die `allowEdit` Parameter.

*   `Camera.MediaType`wird nicht unterstützt.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.

### Firefox OS Macken

*   Ignoriert die `quality` Parameter.

*   `Camera.DestinationType`wird ignoriert, und gleich `1` (Bilddatei-URI)

*   Ignoriert die `allowEdit` Parameter.

*   Ignoriert die `PictureSourceType` Parameter (Benutzer wählt es in einem Dialogfenster)

*   Ignoriert die`encodingType`

*   Ignoriert die `targetWidth` und`targetHeight`

*   `Camera.MediaType`wird nicht unterstützt.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.

### iOS Macken

*   Legen Sie `quality` unter 50 Speicherfehler auf einigen Geräten zu vermeiden.

*   Bei der Verwendung `destinationType.FILE_URI` , Fotos werden im temporären Verzeichnis der Anwendung gespeichert. Sie können den Inhalt dieses Verzeichnisses mit löschen die `navigator.fileMgr` APIs, wenn Speicherplatz ein Anliegen.

### Tizen Macken

*   nicht unterstützte Optionen

*   gibt immer einen Datei-URI

### Windows Phone 7 und 8 Macken

*   Ignoriert die `allowEdit` Parameter.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.

*   Ignoriert die `mediaType` -Eigenschaft des `cameraOptions` wie das Windows Phone SDK keine Möglichkeit, Fotothek Videos wählen.

## CameraError

OnError-Callback-Funktion, die eine Fehlermeldung bereitstellt.

    function(message) {
        // Show a helpful message
    }
    

### Parameter

*   **Meldung**: die Nachricht wird durch das Gerät systemeigenen Code bereitgestellt. *(String)*

## cameraSuccess

OnSuccess Callback-Funktion, die die Bilddaten bereitstellt.

    function(imageData) {
        // Do something with the image
    }
    

### Parameter

*   **CMYK**: Base64-Codierung der Bilddaten, *oder* die Image-Datei-URI, je nach `cameraOptions` in Kraft. *(String)*

### Beispiel

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    

## CameraPopoverHandle

Ein Handle für das Dialogfeld "Popover" erstellt von`navigator.camera.getPicture`.

### Methoden

*   **SetPosition**: Legen Sie die Position der Popover.

### Unterstützte Plattformen

*   iOS

### setPosition

Legen Sie die Position von der Popover.

**Parameter**:

*   `cameraPopoverOptions`: die `CameraPopoverOptions` angeben, dass die neue Position

### Beispiel

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

nur iOS-Parametern, die Anker-Element Lage und Pfeil Richtung der Popover angeben, bei der Auswahl von Bildern aus einem iPad Bibliothek oder Album.

    {X: 0, y: 32, Breite: 320, Höhe: 480, ArrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

### CameraPopoverOptions

*   **X**: x Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **y**: y Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Breite**: Breite in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Höhe**: Höhe in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **ArrowDir**: Richtung der Pfeil auf der Popover zeigen sollte. Im Sinne `Camera.PopoverArrowDirection` *(Anzahl)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / entspricht iOS UIPopoverArrowDirection Konstanten ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Beachten Sie, dass die Größe der Popover ändern kann, um die Richtung des Pfeils und Ausrichtung des Bildschirms anzupassen. Achten Sie darauf, um Orientierung zu berücksichtigen, wenn Sie den Anker-Element-Speicherort angeben.

## Navigator.Camera.Cleanup

Entfernt Mittelstufe Fotos von der Kamera aus der vorübergehenden Verwahrung genommen.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

### Beschreibung

Entfernt Mittelstufe Image-Dateien, die nach der Berufung in vorübergehender Verwahrung gehalten werden `camera.getPicture` . Gilt nur, wenn der Wert des `Camera.sourceType` ist gleich `Camera.PictureSourceType.CAMERA` und der `Camera.destinationType` entspricht`Camera.DestinationType.FILE_URI`.

### Unterstützte Plattformen

*   iOS

### Beispiel

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }