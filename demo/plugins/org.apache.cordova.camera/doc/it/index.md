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

Questo plugin fornisce un'API per scattare foto e per aver scelto immagini dalla libreria di immagini del sistema.

    cordova plugin add org.apache.cordova.camera
    

## navigator.camera.getPicture

Prende una foto utilizzando la fotocamera, o recupera una foto dalla galleria di immagini del dispositivo. L'immagine viene passata al metodo di callback successo come una codifica base64 `String` , o come l'URI per il file di immagine. Il metodo stesso restituisce un `CameraPopoverHandle` che può essere utilizzato per riposizionare il Muffin di selezione file.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

### Descrizione

il `camera.getPicture` funzione apre predefinito fotocamera applicazione il dispositivo che consente agli utenti di scattare foto. Questo comportamento si verifica per impostazione predefinita, quando `Camera.sourceType` è uguale a `Camera.PictureSourceType.CAMERA` . Una volta che l'utente scatta la foto, si chiude l'applicazione fotocamera e l'applicazione viene ripristinato.

Se `Camera.sourceType` è `Camera.PictureSourceType.PHOTOLIBRARY` o `Camera.PictureSourceType.SAVEDPHOTOALBUM` , quindi un display finestra di dialogo che consente agli utenti di selezionare un'immagine esistente. La `camera.getPicture` la funzione restituisce un `CameraPopoverHandle` oggetto, che può essere utilizzato per riposizionare la finestra di selezione immagine, ad esempio, quando l'orientamento del dispositivo.

Il valore restituito viene inviato alla `cameraSuccess` funzione di callback, in uno dei seguenti formati, a seconda che l'oggetto specificato `cameraOptions` :

*   A `String` contenente l'immagine della foto con codifica base64.

*   A `String` che rappresenta il percorso del file di immagine su archiviazione locale (predefinito).

Si può fare quello che vuoi con l'immagine codificata o URI, ad esempio:

*   Il rendering dell'immagine in un `<img>` tag, come nell'esempio qui sotto

*   Salvare i dati localmente ( `LocalStorage` , [Lawnchair][1], ecc.)

*   Inviare i dati a un server remoto

 [1]: http://brianleroux.github.com/lawnchair/

**Nota**: risoluzione foto sui più recenti dispositivi è abbastanza buona. Foto selezionate dalla galleria del dispositivo non è percepiranno di qualità inferiore, anche se un `quality` è specificato il parametro. Per evitare problemi di memoria comune, impostare `Camera.destinationType` a `FILE_URI` piuttosto che`DATA_URL`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

### Amazon fuoco OS stranezze

Amazon fuoco OS utilizza intenti a lanciare l'attività della fotocamera sul dispositivo per catturare immagini e sui telefoni con poca memoria, l'attività di Cordova può essere ucciso. In questo scenario, l'immagine potrebbe non apparire quando viene ripristinata l'attività di cordova.

### Stranezze Android

Android utilizza intenti a lanciare l'attività della fotocamera sul dispositivo per catturare immagini e sui telefoni con poca memoria, l'attività di Cordova può essere ucciso. In questo scenario, l'immagine potrebbe non apparire quando viene ripristinata l'attività di Cordova.

### Firefox OS stranezze

Fotocamera plugin è attualmente implementato mediante [Attività Web][2].

 [2]: https://hacks.mozilla.org/2013/01/introducing-web-activities/

### iOS stranezze

Compreso un JavaScript `alert()` in entrambi il callback funzioni possono causare problemi. Avvolgere l'avviso all'interno di un `setTimeout()` per consentire la selezione immagine iOS o muffin per chiudere completamente la prima che viene visualizzato l'avviso:

    setTimeout(function() {/ / fai la tua cosa qui!}, 0);
    

### Windows Phone 7 capricci

Richiamando l'applicazione nativa fotocamera mentre il dispositivo è collegato tramite Zune non funziona e innesca un callback di errore.

### Tizen stranezze

Tizen supporta solo un `destinationType` di `Camera.DestinationType.FILE_URI` e un `sourceType` di`Camera.PictureSourceType.PHOTOLIBRARY`.

### Esempio

Scattare una foto e recuperarla come un'immagine con codifica base64:

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
    

Scattare una foto e recuperare il percorso del file dell'immagine:

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

Parametri opzionali per personalizzare le impostazioni della fotocamera.

    {qualità: 75, destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: vero, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: false};
    

### Opzioni

*   **qualità**: qualità dell'immagine salvata, espressa come un intervallo di 0-100, dove 100 è tipicamente piena risoluzione senza perdita di compressione file. *(Numero)* (Si noti che informazioni sulla risoluzione della fotocamera non sono disponibile).

*   **destinationType**: Scegli il formato del valore restituito. Definito in `navigator.camera.DestinationType` *(numero)*
    
        Camera.DestinationType = {DATA_URL: 0, / / ritorno di immagine come stringa con codifica base64 FILE_URI: 1, / / ritorno file immagine URI NATIVE_URI: 2 / / ritorno immagine nativa URI (ad esempio, beni-biblioteca: / / su iOS o contenuto: / / su Android)};
        

*   **sourceType**: impostare l'origine dell'immagine. Definito in `navigator.camera.PictureSourceType` *(numero)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, fotocamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **Proprietà allowEdit**: consentire la semplice modifica dell'immagine prima di selezione. *(Booleano)*

*   **encodingType**: scegliere il file immagine restituita di codifica. Definito in `navigator.camera.EncodingType` *(numero)*
    
        Camera.EncodingType = {JPEG: 0, / / JPEG restituire codificati immagine PNG: 1 / / ritorno PNG codificato immagine};
        

*   **targetWidth**: larghezza in pixel all'immagine della scala. Deve essere usato con **targetHeight**. Proporzioni rimane costante. *(Numero)*

*   **targetHeight**: altezza in pixel all'immagine della scala. Deve essere usato con **targetWidth**. Proporzioni rimane costante. *(Numero)*

*   **mediaType**: impostare il tipo di supporto per scegliere da. Funziona solo quando `PictureSourceType` è `PHOTOLIBRARY` o `SAVEDPHOTOALBUM` . Definito in `nagivator.camera.MediaType` *(numero)* 
    
        Camera.MediaType = {foto: 0, / / permette la selezione di immagini ancora solo. PER IMPOSTAZIONE PREDEFINITA. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
        };
        

*   **correctOrientation**: ruotare l'immagine per correggere l'orientamento del dispositivo durante l'acquisizione. *(Booleano)*

*   **saveToPhotoAlbum**: salvare l'immagine nell'album di foto sul dispositivo dopo la cattura. *(Booleano)*

*   **popoverOptions**: solo iOS opzioni che specificano la posizione di muffin in iPad. Definito in`CameraPopoverOptions`.

*   **cameraDirection**: scegliere la telecamera da utilizzare (o retro-frontale). Definito in `navigator.camera.Direction` *(numero)*
    
        Camera.Direction = {indietro: 0, / / utilizzare la fotocamera posteriore anteriore: 1 / / utilizzare la fotocamera frontale};
        

### Amazon Fire OSQuirks

*   Qualsiasi `cameraDirection` valore i risultati in una foto di lamatura.

*   Ignora il `allowEdit` parametro.

*   `Camera.PictureSourceType.PHOTOLIBRARY`e `Camera.PictureSourceType.SAVEDPHOTOALBUM` entrambi visualizzare l'album fotografico stesso.

### Stranezze Android

*   Qualsiasi `cameraDirection` valore i risultati in una foto di lamatura.

*   Ignora il `allowEdit` parametro.

*   `Camera.PictureSourceType.PHOTOLIBRARY`e `Camera.PictureSourceType.SAVEDPHOTOALBUM` entrambi visualizzare l'album fotografico stesso.

### BlackBerry 10 capricci

*   Ignora il `quality` parametro.

*   Ignora il `sourceType` parametro.

*   Ignora il `allowEdit` parametro.

*   `Camera.MediaType`non è supportato.

*   Ignora il `correctOrientation` parametro.

*   Ignora il `cameraDirection` parametro.

### Firefox OS stranezze

*   Ignora il `quality` parametro.

*   `Camera.DestinationType`viene ignorato e corrisponde a `1` (URI del file di immagine)

*   Ignora il `allowEdit` parametro.

*   Ignora il `PictureSourceType` parametro (utente ne sceglie in una finestra di dialogo)

*   Ignora il`encodingType`

*   Ignora le `targetWidth` e`targetHeight`

*   `Camera.MediaType`non è supportato.

*   Ignora il `correctOrientation` parametro.

*   Ignora il `cameraDirection` parametro.

### iOS stranezze

*   Impostare `quality` inferiore al 50 per evitare errori di memoria su alcuni dispositivi.

*   Quando si utilizza `destinationType.FILE_URI` , foto vengono salvati nella directory temporanea dell'applicazione. Si può eliminare il contenuto di questa directory utilizzando il `navigator.fileMgr` API, se lo spazio di archiviazione è una preoccupazione.

### Tizen stranezze

*   opzioni non supportate

*   restituisce sempre un URI del FILE

### Windows Phone 7 e 8 stranezze

*   Ignora il `allowEdit` parametro.

*   Ignora il `correctOrientation` parametro.

*   Ignora il `cameraDirection` parametro.

*   Ignora la `mediaType` proprietà di `cameraOptions` come il SDK di Windows Phone non fornisce un modo per scegliere il video da PHOTOLIBRARY.

## CameraError

funzione di callback onError che fornisce un messaggio di errore.

    function(message) {
        // Show a helpful message
    }
    

### Parametri

*   **messaggio**: il messaggio è fornito dal codice nativo del dispositivo. *(String)*

## cameraSuccess

funzione di callback onSuccess che fornisce i dati di immagine.

    function(imageData) {
        // Do something with the image
    }
    

### Parametri

*   **imageData**: Base64 codifica dei dati immagine, *o* il file di immagine URI, a seconda `cameraOptions` in vigore. *(String)*

### Esempio

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    

## CameraPopoverHandle

Un handle per la finestra di dialogo di muffin creato da`navigator.camera.getPicture`.

### Metodi

*   **setPosition**: impostare la posizione dei muffin.

### Piattaforme supportate

*   iOS

### setPosition

Impostare la posizione dei muffin.

**Parametri**:

*   `cameraPopoverOptions`: il `CameraPopoverOptions` che specificare la nuova posizione

### Esempio

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

iOS solo parametri che specificano l'ancoraggio elemento posizione e freccia direzione il Muffin quando si selezionano le immagini dalla libreria un iPad o un album.

    {x: 0, y: 32, larghezza: 320, altezza: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

### CameraPopoverOptions

*   **x**: pixel coordinata x dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **y**: coordinata y di pixel dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **larghezza**: larghezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **altezza**: altezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **arrowDir**: direzione dovrebbe puntare la freccia il muffin. Definito in `Camera.PopoverArrowDirection` *(numero)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / corrisponde a iOS UIPopoverArrowDirection costanti ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Si noti che la dimensione del muffin possa cambiare per regolare la direzione della freccia e l'orientamento dello schermo. Assicurarsi che tenere conto di modifiche di orientamento quando si specifica la posizione di elemento di ancoraggio.

## Navigator.camera.Cleanup

Rimuove intermedio foto scattate con la fotocamera da deposito temporaneo.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

### Descrizione

Rimuove intermedio i file di immagine che vengono tenuti in custodia temporanea dopo la chiamata `camera.getPicture` . Si applica solo quando il valore di `Camera.sourceType` è uguale a `Camera.PictureSourceType.CAMERA` e il `Camera.destinationType` è uguale a`Camera.DestinationType.FILE_URI`.

### Piattaforme supportate

*   iOS

### Esempio

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }