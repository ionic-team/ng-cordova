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

Ten plugin zawiera informacje o lokalizacji urządzenia, takie jak szerokość i długość geograficzną. Najczęstsze źródła informacji o lokalizacji obejmują Global Positioning System (GPS) i lokalizacji wywnioskować z sieci sygnały, takie jak adres IP, RFID, WiFi i Bluetooth MAC adresy, a komórki GSM/CDMA identyfikatorów. Nie ma żadnej gwarancji, że API zwraca rzeczywistej lokalizacji urządzenia.

Ten interfejs API jest oparty na [Specyfikacji W3C Geolocation API][1]i tylko wykonuje na urządzeniach, które już nie zapewniają implementacja.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Ostrzeżenie**: zbierania i wykorzystywania danych geolokacyjnych podnosi kwestie prywatności ważne. Polityka prywatności danej aplikacji należy omówić, jak aplikacja używa danych, czy jest on dzielony z innych stron i poziom dokładności danych (na przykład, gruba, porządku, kod pocztowy poziom, itp.). Danych geolokacyjnych ogólnie uznaje wrażliwych, bo to może ujawnić pobytu użytkownika i, jeśli przechowywane, historii ich podróży. W związku z tym oprócz aplikacji prywatności, zdecydowanie warto powiadomienia just-in-time, zanim aplikacja uzyskuje dostęp do danych (jeśli urządzenie system operacyjny nie robi już). Że ogłoszenie powinno zawierać te same informacje, o których wspomniano powyżej, jak również uzyskanie uprawnienia użytkownika (np. poprzez przedstawianie wyborów **OK** i **Nie dzięki**). Aby uzyskać więcej informacji zobacz przewodnik prywatności.

## Instalacji

    cordova plugin add org.apache.cordova.geolocation
    

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

*   navigator.geolocation.getCurrentPosition
*   navigator.geolocation.watchPosition
*   navigator.geolocation.clearWatch

## Obiekty (tylko do odczytu)

*   Stanowisko
*   PositionError
*   Współrzędne

## navigator.geolocation.getCurrentPosition

Zwraca aktualną pozycję urządzenia do `geolocationSuccess` wywołania zwrotnego z `Position` obiektu jako parametr. Jeśli występuje błąd, `geolocationError` wywołania zwrotnego jest przekazywany `PositionError` obiektu.

    navigator.geolocation.getCurrentPosition (geolocationSuccess, [geolocationError], [geolocationOptions]);
    

### Parametry

*   **geolocationSuccess**: wywołania zwrotnego, który jest przekazywany aktualnej pozycji.

*   **geolocationError**: *(opcjonalne)* wywołania zwrotnego, która wykonuje w przypadku wystąpienia błędu.

*   **geolocationOptions**: *(opcjonalne)* opcji geolokalizacji.

### Przykład

    onSuccess Callback / / Metoda ta akceptuje pozycji obiektu, który zawiera / / GPS aktualne współrzędne / / var onSuccess = function(position) {wpisu ("Latitude:" + position.coords.latitude + '\n' + ' długości geograficznej: "+ position.coords.longitude + '\n' +" wysokości: "+ position.coords.altitude + '\n' +" dokładność: "+ position.coords.accuracy + '\n' +" wysokości dokładność: "+ position.coords.altitudeAccuracy + '\n' +" pozycji: "+ position.coords.heading + '\n' +" prędkości: "+ position.coords.speed + '\n' + ' sygnatury czasowej:" + position.timestamp + '\n');};
    
    onError wywołania zwrotnego otrzymuje obiekt PositionError / / funkcja onError(error) {wpisu ("kod:" error.code + "\n" + "wiadomość: ' + error.message +"\n");}
    
    navigator.geolocation.getCurrentPosition (onSuccess, onError);
    

## navigator.geolocation.watchPosition

Zwraca bieżącą pozycję urządzenia po wykryciu zmiany pozycji. Gdy urządzenie pobiera nową lokalizację, `geolocationSuccess` wykonuje wywołanie zwrotne z `Position` obiektu jako parametr. Jeśli występuje błąd, `geolocationError` wykonuje wywołanie zwrotne z `PositionError` obiektu jako parametr.

    var watchId = navigator.geolocation.watchPosition (geolocationSuccess, [geolocationError], [geolocationOptions]);
    

### Parametry

*   **geolocationSuccess**: wywołania zwrotnego, który jest przekazywany aktualnej pozycji.

*   **geolocationError**: (opcjonalne) wywołania zwrotnego, która wykonuje w przypadku wystąpienia błędu.

*   **geolocationOptions**: (opcjonalne) geolocation opcje.

### Zwraca

*   **Napis**: zwraca identyfikator zegarek, który odwołuje się oglądać pozycji interwał. Identyfikator zegarek powinny być używane z `navigator.geolocation.clearWatch` Aby przestać oglądać do zmiany pozycji.

### Przykład

    onSuccess Callback / / Metoda ta akceptuje obiekt "Stanowisko", który zawiera / / bieżące współrzędne GPS / / funkcja onSuccess(position) {var elementu = document.getElementById('geolocation');
        element.innerHTML = "Latitude:" + position.coords.latitude + ' < br / >' + ' długości geograficznej: "+ position.coords.longitude +" < br / > "+" < hr / > "+ element.innerHTML;
    } / / onError wywołania zwrotnego otrzymuje obiekt PositionError / / funkcja onError(error) {wpisu ("kod:" error.code + "\n" + "wiadomość: ' + error.message +"\n");}
    
    Opcje: rzucać błąd, jeśli nie aktualizacji jest co 30 sekund.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {limit czasu: 30000});
    

## geolocationOptions

Opcjonalne parametry aby dostosować wyszukiwanie geolocation`Position`.

    {maximumAge: 3000, limit: 5000, enableHighAccuracy: true};
    

### Opcje

*   **enableHighAccuracy**: stanowi wskazówkę, że aplikacja musi możliwie najlepszych rezultatów. Domyślnie, urządzenie próbuje pobrać `Position` przy użyciu metody oparte na sieci. Ustawienie tej właściwości na `true` mówi ramach dokładniejszych metod, takich jak pozycjonowanie satelitarne. *(Wartość logiczna)*

*   **Limit czasu**: maksymalna długość czas (w milisekundach), który może przekazać wywołanie `navigator.geolocation.getCurrentPosition` lub `geolocation.watchPosition` do odpowiednich `geolocationSuccess` wykonuje wywołanie zwrotne. Jeśli `geolocationSuccess` wywołania zwrotnego nie jest wywoływany w tej chwili, `geolocationError` wywołania zwrotnego jest przekazywany `PositionError.TIMEOUT` kod błędu. (Należy zauważyć, że w połączeniu z `geolocation.watchPosition` , `geolocationError` wywołania zwrotnego można nazwać w odstępie co `timeout` milisekund!) *(Liczba)*

*   **maximumAge**: przyjąć buforowane pozycji, w których wiek jest nie większa niż określony czas w milisekundach. *(Liczba)*

### Android dziwactwa

Emulatory Androida 2.x nie zwracają wynik geolokalizacji, chyba że `enableHighAccuracy` jest opcja zestaw do`true`.

## navigator.geolocation.clearWatch

Przestać oglądać zmiany położenia urządzenia przez `watchID` parametru.

    navigator.geolocation.clearWatch(watchID);
    

### Parametry

*   **watchID**: identyfikator `watchPosition` Interwał jasne. (String)

### Przykład

    Opcje: obserwować zmiany w pozycji i najczęściej / / dokładne położenie dostępną metodą nabycia.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {enableHighAccuracy: true});
    
    .. .later na...
    
    navigator.geolocation.clearWatch(watchID);
    

## Stanowisko

Zawiera `Position` współrzędnych i sygnatury czasowej, stworzony przez geolocation API.

### Właściwości

*   **coords**: zestaw współrzędnych geograficznych. *(Współrzędne)*

*   **sygnatura czasowa**: Sygnatura czasowa utworzenia dla `coords` . *(Data)*

## Współrzędne

A `Coordinates` obiektu jest dołączony do `Position` obiekt, który jest dostępny dla funkcji wywołania zwrotnego w prośby o aktualnej pozycji. Zawiera zestaw właściwości, które opisują geograficzne współrzędne pozycji.

### Właściwości

*   **szerokość geograficzna**: Latitude w stopniach dziesiętnych. *(Liczba)*

*   **długość geograficzna**: długość geograficzna w stopniach dziesiętnych. *(Liczba)*

*   **wysokość**: wysokość pozycji metrów nad elipsoidalny. *(Liczba)*

*   **dokładność**: poziom dokładności współrzędnych szerokości i długości geograficznej w metrach. *(Liczba)*

*   **altitudeAccuracy**: poziom dokładności Współrzędna wysokość w metrach. *(Liczba)*

*   **pozycja**: kierunek podróży, określonego w stopni licząc ruchu wskazówek zegara względem północy rzeczywistej. *(Liczba)*

*   **prędkość**: Aktualna prędkość ziemi urządzenia, określone w metrach na sekundę. *(Liczba)*

### Amazon ogień OS dziwactwa

**altitudeAccuracy**: nie obsługiwane przez Android urządzeń, powrót`null`.

### Android dziwactwa

**altitudeAccuracy**: nie obsługiwane przez Android urządzeń, powrót`null`.

## PositionError

`PositionError`Obiekt jest przekazywany do `geolocationError` funkcji wywołania zwrotnego, gdy wystąpi błąd z navigator.geolocation.

### Właściwości

*   **Kod**: jeden z kodów błędów wstępnie zdefiniowanych poniżej.

*   **wiadomość**: komunikat o błędzie, opisując szczegóły wystąpił błąd.

### Stałe

*   `PositionError.PERMISSION_DENIED` 
    *   Zwracane, gdy użytkownicy nie zezwalają aplikacji do pobierania informacji o pozycji. Jest to zależne od platformy.
*   `PositionError.POSITION_UNAVAILABLE` 
    *   Zwracane, gdy urządzenie jest w stanie pobrać pozycji. Ogólnie rzecz biorąc oznacza to urządzenie nie jest podłączone do sieci lub nie może uzyskać satelita utrwalić.
*   `PositionError.TIMEOUT` 
    *   Zwracane, gdy urządzenie jest w stanie pobrać pozycji w czasie określonym przez `timeout` w `geolocationOptions` . Gdy używana z `navigator.geolocation.watchPosition` , ten błąd może być wielokrotnie przekazywane do `geolocationError` zwrotne co `timeout` milisekund.