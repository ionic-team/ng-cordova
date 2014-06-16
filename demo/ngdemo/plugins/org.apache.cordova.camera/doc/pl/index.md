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

Wtyczka dostarcza API do robienia zdjęć i wybór zdjęć z biblioteki obrazu systemu.

    cordova plugin add org.apache.cordova.camera
    

## navigator.camera.getPicture

Pobiera zdjęcia za pomocą aparatu lub z galerii zdjęć w urządzeniu. Obraz jest przekazywany do funkcji zwrotnej success jako `String` kodowany za pomocą base64 lub jako URI do pliku. Sama metoda zwraca obiekt `CameraPopoverHandle`, który może służyć do zmiany położenia wyskakującego okna wyboru pliku.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

### Opis

Funkcja `camera.getPicture` otwiera na urządzeniu domyślną aplikację aparatu, która pozwala użytkownikowi zrobić zdjęcie. To zachowanie występuje domyślnie, gdy `Camera.sourceType` jest równe `Camera.PictureSourceType.CAMERA`. Gdy użytkownik wykona zdjęcie, aplikacja aparatu zakończy działanie i nastąpi powrót do głównej aplikacji.

Jeśli `Camera.sourceType` jest równe `Camera.PictureSourceType.PHOTOLIBRARY` lub `Camera.PictureSourceType.SAVEDPHOTOALBUM`, wtedy zostanie wyświetlone okno dialogowe pozwalające użytkownikowi na wybór istniejącego obrazu. Funkcja `camera.getPicture` zwraca obiekt `CameraPopoverHandle`, który obsługuje zmianę położenia okna wyboru obrazu, np. po zmianie orientacji urządzenia.

Zwracana wartość jest wysyłana do funkcji zwrotnej `cameraSuccess` w jednym z następujących formatów, w zależności od określonego parametru `cameraOptions`:

*   Jako `String` zawierający obraz zakodowany przy użyciu base64.

*   Jako `String` reprezentujący lokację pliku obrazu w lokalnym magazynie (domyślnie).

Z zakodowanym obrazem lub URI możesz zrobić co zechcesz, na przykład:

*   Przedstawia obraz w tagu `<img>`, jak w przykładzie poniżej

*   Zapisuje dane lokalnie (`LocalStorage`, [Lawnchair][1], etc.)

*   Wysyła dane na zdalny serwer

 [1]: http://brianleroux.github.com/lawnchair/

**Uwaga**: zdjęcie rozdzielczości na nowsze urządzenia jest bardzo dobry. Zdjęcia wybrane z galerii urządzenia nie są skalowane do niższej jakości, nawet jeśli określono parametr `quality`. Aby uniknąć typowych problemów z pamięcią lepiej ustawić`Camera.destinationType` na `FILE_URI` niż `DATA_URL`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   Jeżyna 10
*   Firefox OS
*   iOS
*   Tizen
*   Windows Phone 7 i 8
*   Windows 8

### Amazon ogień OS dziwactwa

Amazon ogień OS używa intencje do rozpoczęcia działalności aparatu na urządzenie do przechwytywania obrazów, i na telefony z pamięci, Cordova aktywność może zostać zabity. W takim scenariuszu obrazy mogą nie być wyświetlane po przywróceniu aktywności Cordovy.

### Android dziwactwach

Android używa intencje do rozpoczęcia działalności aparatu na urządzenie do przechwytywania obrazów, i na telefony z pamięci, Cordova aktywność może zostać zabity. W tym scenariuszu obraz mogą nie być wyświetlane po przywróceniu aktywności Cordova.

### Firefox OS dziwactwa

Aparat plugin jest obecnie implementowane za pomocą [Działania sieci Web][2].

 [2]: https://hacks.mozilla.org/2013/01/introducing-web-activities/

### iOS dziwactwa

Tym JavaScript `alert()` w jednej z wywołania zwrotnego funkcji może powodować problemy. Owinąć alert w `setTimeout()` umożliwia wybór obrazu iOS lub popover całkowicie zamknąć zanim wyświetli alert:

    setTimeout(function() {
        // do your thing here!
    }, 0);
    

### Windows Phone 7 dziwactwa

Wywoływanie aparat native aplikacji, podczas gdy urządzenie jest podłączone przez Zune nie działa i powoduje błąd wywołania zwrotnego.

### Tizen dziwactwa

Tizen obsługuje tylko `destinationType` z `Camera.DestinationType.FILE_URI` i `sourceType` z`Camera.PictureSourceType.PHOTOLIBRARY`.

### Przykład

Zrób zdjęcie i pobrać go jako kodowane algorytmem base64 obrazu:

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
    

Zrób zdjęcie i pobrać lokalizacji pliku obrazu:

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

Opcjonalne parametry, aby dostosować ustawienia aparatu.

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };
    

### Opcje

*   **quality**: Jakość zapisywanego obrazu, wyrażona w przedziale 0-100, gdzie 100 zazwyczaj jest maksymalną rozdzielczością bez strat w czasie kompresji pliku. *(Liczba)* (Pamiętaj, że informacja o rozdzielczości aparatu jest niedostępna.)

*   **destinationType**: Wybierz format zwracanej wartości. Zdefiniowane w `navigator.camera.DestinationType` *(numer)*
    
        Camera.DestinationType = {
            DATA_URL : 0,      // Return image as base64-encoded string
            FILE_URI : 1,      // Return image file URI
            NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
        };
        

*   **sourceType**: Ustaw źródło obrazu. Zdefiniowane w `navigator.camera.PictureSourceType` *(numer)*
    
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };
        

*   **allowEdit**: Pozwala na prostą edycję obrazu przed zaznaczeniem. *(Boolean)*

*   **encodingType**: Wybierz plik obrazu zwracany jest kodowanie. Zdefiniowane w `navigator.camera.EncodingType` *(numer)*
    
        Camera.EncodingType = {
            JPEG : 0,               // Return JPEG encoded image
            PNG : 1                 // Return PNG encoded image
        };
        

*   **targetWidth**: Szerokość w pikselach skalowanego obrazu. Musi być użyte z **targetHeight**. Współczynnik proporcji pozostaje stały. *(Liczba)*

*   **targetHeight**: Wysokość w pikselach skalowanego obrazu. Musi być użyte z **targetWidth**. Współczynnik proporcji pozostaje stały. *(Liczba)*

*   **mediaType**: Ustawia typ nośnika, z którego będzie wybrany. Działa tylko wtedy, gdy `PictureSourceType` jest `PHOTOLIBRARY` lub `SAVEDPHOTOALBUM`. Zdefiniowane w `nagivator.camera.MediaType` *(Liczba)*
    
        Camera.MediaType = {
            PICTURE: 0,    // umożliwia wybór tylko zdjęcia. DOMYŚLNIE. Will return format specified via DestinationType
            VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
            ALLMEDIA : 2   // allow selection from all media types
        };
        

*   **correctOrientation**: Obraca obraz aby skorygować orientację urządzenia podczas przechwytywania. *(Boolean)*

*   **saveToPhotoAlbum**: Po przechwyceniu zapisuje na urządzeniu obraz w albumie na zdjęcia. *(Boolean)*

*   **popoverOptions**: Opcja tylko dla platformy iOS, która określa położenie wyskakującego okna na iPadzie. Zdefiniowane w `CameraPopoverOptions`.

*   **cameraDirection**: Wybierz aparat do korzystania (lub z powrotem przodem). Zdefiniowane w `navigator.camera.Direction` *(numer)*
    
        Camera.Direction = {
            BACK : 0,      // Używa tylnej kamery
            FRONT : 1      // Używa przedniej kamery
        };
        

### Amazon ognia OSQuirks

*   Jakakolwiek wartość w `cameraDirection` skutkuje użyciem tylnej kamery.

*   Parametr `allowEdit` jest ignorowany.

*   Oba parametry `Camera.PictureSourceType.PHOTOLIBRARY` oraz `Camera.PictureSourceType.SAVEDPHOTOALBUM` wyświetlają ten sam album ze zdjęciami.

### Android dziwactwa

*   Wszelkie `cameraDirection` wartość wyników w zdjęcie tyłu do kierunku jazdy.

*   Ignoruje `allowEdit` parametr.

*   `Camera.PictureSourceType.PHOTOLIBRARY`i `Camera.PictureSourceType.SAVEDPHOTOALBUM` wyświetlać ten sam album zdjęć.

### Jeżyna 10 dziwactwa

*   Parametr `quality` jest ignorowany.

*   Parametr `sourceType` jest ignorowany.

*   Ignoruje `allowEdit` parametr.

*   Nie jest wspierane `Camera.MediaType`.

*   Parametr `correctOrientation` jest ignorowany.

*   Parametr `cameraDirection` jest ignorowany.

### Firefox OS dziwactwa

*   Ignoruje `quality` parametr.

*   `Camera.DestinationType`jest ignorowane i jest równa `1` (plik obrazu URI)

*   Ignoruje `allowEdit` parametr.

*   Ignoruje `PictureSourceType` parametr (użytkownik wybiera go w oknie dialogowym)

*   Ignoruje`encodingType`

*   Ignoruje `targetWidth` i`targetHeight`

*   `Camera.MediaType`nie jest obsługiwane.

*   Ignoruje `correctOrientation` parametr.

*   Ignoruje `cameraDirection` parametr.

### iOS dziwactwa

*   Ustaw `quality` poniżej 50 aby uniknąć błędów pamięci na niektórych urządzeniach.

*   Jeśli użyjesz `destinationType.FILE_URI` zdjęcia zostaną zapisane w katalogu tymczasowym aplikacji. Jeżeli masz problemy z miejscem, możesz usunąć zawartość tego katalogu używając API `navigator.fileMgr`.

### Osobliwości Tizen

*   opcje nie są obsługiwane

*   zawsze zwraca FILE URI

### Windows Phone 7 i 8 dziwactwa

*   Ignoruje `allowEdit` parametr.

*   Ignoruje `correctOrientation` parametr.

*   Ignoruje `cameraDirection` parametr.

*   Ignoruje `mediaType` Właściwość `cameraOptions` jako SDK Windows Phone nie umożliwiają wybór filmów z PHOTOLIBRARY.

## CameraError

funkcja wywołania zwrotnego PrzyBłędzie, która zawiera komunikat o błędzie.

    function(message) {
        // Show a helpful message
    }
    

### Parametry

*   **message**: Natywny kod komunikatu zapewniany przez urządzenie. *(Ciąg znaków)*

## cameraSuccess

onSuccess funkcji wywołania zwrotnego, który dostarcza dane obrazu.

    function(imageData) {
        // Do something with the image
    }
    

### Parametry

*   **imageData**: Dane obrazu kodowane przy pomocy Base64 *lub* URI pliku obrazu, w zależności od użycia `cameraOptions`. *(Ciąg znaków)*

### Przykład

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    

## CameraPopoverHandle

Uchwyt do okna dialogowego popover, stworzony przez`navigator.camera.getPicture`.

### Metody

*   **setPosition**: Ustawia pozycję wyskakującego okna.

### Obsługiwane platformy

*   iOS

### setPosition

Ustaw pozycję popover.

**Parametry**:

*   `cameraPopoverOptions`: `CameraPopoverOptions`, która określa nową pozycję

### Przykład

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

tylko do iOS parametrami, które określić kotwicy element lokalizacji i strzałka kierunku popover, przy wyborze zdjęć z iPad biblioteki lub album.

    { x : 0,
      y :  32,
      width : 320,
      height : 480,
      arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
    };
    

### CameraPopoverOptions

*   **x**: współrzędna piksela x elementu ekranu, na którym zakotwiczone jest wyskakujące okno. *(Liczba)*

*   **y**: współrzędna piksela y elementu ekranu, na którym zakotwiczone jest wyskakujące okno. *(Liczba)*

*   **width**: szerokość w pikselach elementu ekranu, na którym zakotwiczone jest wyskakujące okno. *(Liczba)*

*   **height**: wysokość w pikselach elementu ekranu, na którym zakotwiczone jest wyskakujące okno. *(Liczba)*

*   **arrowDir**: Kierunek, który powinna wskazywać strzałka na wyskakującym oknie. Zdefiniowane w `Camera.PopoverArrowDirection` *(Liczba)*
    
            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // matches iOS UIPopoverArrowDirection constants
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };
        

Należy pamiętać, że rozmiar popover może zmienić aby zmienić kierunek strzałki i orientacji ekranu. Upewnij się uwzględnić zmiany orientacji podczas określania położenia elementu kotwicy.

## Navigator.Camera.CleanUp

Usuwa pośrednie zdjęcia zrobione przez aparat z czasowego składowania.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

### Opis

Usuwa pośrednie plików obrazów, które są przechowywane w pamięci tymczasowej po `camera.getPicture` . Stosuje się tylko wtedy, gdy wartość `Camera.sourceType` jest równa `Camera.PictureSourceType.CAMERA` i `Camera.destinationType` jest równa`Camera.DestinationType.FILE_URI`.

### Obsługiwane platformy

*   iOS

### Przykład

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }