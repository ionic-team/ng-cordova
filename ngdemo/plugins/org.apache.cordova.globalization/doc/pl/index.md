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

# org.apache.cordova.globalization

Ten plugin uzyskuje informacje i wykonuje operacje specyficzne dla użytkownika ustawienia regionalne, język i strefa czasowa. Zwróć uwagę na różnicę między ustawień regionalnych i językowych: regionalny kontroli jak liczby, daty i godziny są wyświetlane dla regionu, podczas gdy język określa, jaki tekst w języku pojawia się jako, niezależnie od ustawień regionalnych. Często Deweloperzy używają regionalny do zarówno ustawienia, ale nie ma żadnego powodu, które użytkownik nie mógł ustawić jej język "Polski" regionalny "Francuski", tak, że tekst jest wyświetlany w angielski, ale daty, godziny, itp., są wyświetlane są one we Francji. Niestety najbardziej mobilnych platform obecnie nie wprowadzają rozróżnienia tych ustawień.

## Instalacji

    cordova plugin add org.apache.cordova.globalization
    

## Obiekty

*   GlobalizationError

## Metody

*   navigator.globalization.getPreferredLanguage
*   navigator.globalization.getLocaleName
*   navigator.globalization.dateToString
*   navigator.globalization.stringToDate
*   navigator.globalization.getDatePattern
*   navigator.globalization.getDateNames
*   navigator.globalization.isDayLightSavingsTime
*   navigator.globalization.getFirstDayOfWeek
*   navigator.globalization.numberToString
*   navigator.globalization.stringToNumber
*   navigator.globalization.getNumberPattern
*   navigator.globalization.getCurrencyPattern

## navigator.globalization.getPreferredLanguage

Znacznik języka BCP 47 uzyskać bieżący język klienta.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### Opis

Zwraca tag identyfikator język zgodny z BCP-47 `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `value` Właściwość `String` wartość.

Jeśli tu jest błąd w języku, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.UNKNOWN_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en-US` języka, to należy wyświetlić wyskakujące okno z tekstem `language: en-US` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Android dziwactwa

*   Zwraca ISO 639-1 języka dwuliterowy kod, wielkie litery ISO 3166-1 kraj kod i wariant oddzielonych myślnikami. Przykłady: "pl", "pl", "US"

### Windows Phone 8 dziwactwa

*   Zwraca ISO 639-1 dwuliterowy kod języka i kod ISO 3166-1 kraju regionalne wariant odpowiadający "Język" ustawienie, oddzielone myślnikiem.
*   Należy zauważyć, że regionalne wariant jest Właściwość ustawieniem "Language" i nie określona przez ustawienie "Kraj" niepowiązanych na Windows Phone.

## navigator.globalization.getLocaleName

Zwraca znacznik zgodny z BCP 47 dla klienta bieżące ustawienia regionalne.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### Opis

Zwraca ciąg identyfikatora regionalny zgodny z BCP 47 `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `value` Właściwość `String` wartość. Tag regionalnych będzie się składać z ma³e dwuliterowy kod języka, dwie litery wielkie litery kodu kraju i (nieokreślone) kod wariantu, oddzielone myślnikiem.

Jeśli tu jest błąd ustawienia regionalne, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.UNKNOWN_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en-US` Ustawienia regionalne, to wyświetla okno dialogowe popup z tekstem`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Android dziwactwa

*   Java nie rozróżnia się między zestaw "języka" i ustaw "regionalny", więc ta metoda jest zasadniczo taka sama, jak`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 dziwactwa

*   Zwraca ISO 639-1 dwuliterowy kod języka i kod ISO 3166-1 kraju regionalne wariant odpowiednie ustawienie "Format regionalny", oddzielone myślnikiem.

## navigator.globalization.dateToString

Zwraca daty sformatowane jako ciąg regionalny klient i strefa czasowa.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### Opis

Zwraca datę sformatowaną `String` za pomocą `value` Właściwość z obiektu przekazane jako parametr`successCallback`.

Przychodzących `date` parametr powinien być typu`Date`.

Jeśli występuje błąd formatowania daty, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.FORMATTING_ERROR`.

`options`Parametr jest opcjonalny, a jego wartości domyślne są:

    {formatLength: "krótkie", wybór: "Data i czas"}
    

`options.formatLength`Może być `short` , `medium` , `long` , lub`full`.

`options.selector`Może być `date` , `time` lub`date and time`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Jeśli przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to wyświetla okno dialogowe popup z tekst podobny do `date: 9/25/2012 4:21PM` przy użyciu opcji domyślnych:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 dziwactwa

*   `formatLength`Opcja obsługuje tylko `short` i `full` wartości.

## navigator.globalization.getCurrencyPattern

Zwraca ciąg wzór do formatu i analizy wartości walut według preferencji użytkownika klienta i kod waluty ISO 4217.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### Opis

Zwraca wzór do `successCallback` z `properties` obiektu jako parametr. Obiekt powinien zawierać następujące właściwości:

*   **wzór**: wzór waluty wobec układ graficzny i analizy wartości waluty. Wzory wykonaj [techniczny Standard Unicode #35][1]. *(String)*

*   **Kod**: kod waluty The ISO 4217 dla wzorca. *(String)*

*   **frakcja**: liczba cyfr ułamkowych podczas analizowania i Formatowanie walutowe. *(Liczba)*

*   **zaokrąglania**: Zaokrąglenie przyrost podczas analizowania i formatowanie. *(Liczba)*

*   **dziesiętny**: symbolu dziesiętnego używać do analizowania i formatowanie. *(String)*

*   **grupowanie**: symbol grupowania dla analizy i formatowanie. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Przychodzących `currencyCode` parametr powinien być `String` jednego z kodów ISO 4217 waluty, na przykład "USD".

Jeśli występuje błąd uzyskania wzorzec, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.FORMATTING_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne i wybranej waluty dolarów amerykańskich, w tym przykładzie wyświetla okno dialogowe popup z tekstem podobne do wyników, które należy wykonać:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Oczekiwany wynik:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

Zwraca tablicę nazwy miesięcy i dni tygodnia, w zależności od preferencji użytkownika klienta i kalendarz.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### Opis

Zwraca tablicę nazw do `successCallback` z `properties` obiektu jako parametr. Ten obiekt zawiera `value` Właściwość z `Array` z `String` wartości. Nazwy funkcji Tablica albo od pierwszego miesiąca w roku lub pierwszego dnia tygodnia, w zależności od wybranej opcji.

Jeśli występuje błąd uzyskiwania nazwy, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.UNKNOWN_ERROR`.

`options`Parametr jest opcjonalny, a jego wartości domyślne są:

    {type:'wide', item:'months'}
    

Wartość `options.type` może być `narrow` lub`wide`.

Wartość `options.item` może być `months` lub`days`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` ustawień regionalnych, w tym przykładzie wyświetla serię dwunastu lud dialogi, jeden raz na miesiąc, tekst podobny do `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## navigator.globalization.getDatePattern

Zwraca ciąg wzór do formatu i analizy dat według preferencji użytkownika klienta.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### Opis

Zwraca wzór do `successCallback` . Obiekt przekazywana jako parametr zawiera następujące właściwości:

*   **wzór**: data i godzina wzór do formatu i analizować daty. Wzory wykonaj [techniczny Standard Unicode #35][1]. *(String)*

*   **strefa czasowa**: skróconą nazwę strefy czasowej na klienta. *(String)*

*   **utc_offset**: aktualna różnica w sekundach między klienta strefy czasowej i skoordynowanego czasu uniwersalnego. *(Liczba)*

*   **dst_offset**: bieżącego przesunięcie czasu w sekundach między klienta nie uwzględniaj w strefę czasową i klienta światło dzienne oszczędności w strefa czasowa. *(Liczba)*

Jeśli występuje błąd uzyskiwania wzór, `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.PATTERN_ERROR`.

`options`Parametr jest opcjonalny i domyślnie następujące wartości:

    {formatLength: "krótkie", wybór: "Data i czas"}
    

`options.formatLength`Może być `short` , `medium` , `long` , lub `full` . `options.selector`Może być `date` , `time` lub`date and
time`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, w tym przykładzie wyświetla okno dialogowe popup z tekstu, takich jak `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 dziwactwa

*   `formatLength`Obsługuje tylko `short` i `full` wartości.

*   `pattern`Dla `date and time` wzór zwraca tylko pełne datetime format.

*   `timezone`Zwraca nazwę strefy w pełnym wymiarze czasu.

*   `dst_offset`Właściwość nie jest obsługiwany, a zawsze zwraca wartość zero.

## navigator.globalization.getFirstDayOfWeek

Zwraca pierwszy dzień tygodnia według kalendarza i preferencje użytkownika klienta.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### Opis

Dni tygodnia są numerowane począwszy od 1, gdzie 1 zakłada się niedziela. Zwraca dzień do `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `value` Właściwość `Number` wartość.

Jeśli występuje błąd uzyskania wzorzec, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.UNKNOWN_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to wyświetla okno dialogowe popup z tekst podobny do`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

Zwraca ciąg wzór do formatu i analizować liczby preferencji użytkownika klienta.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### Opis

Zwraca wzór do `successCallback` z `properties` obiektu jako parametr. Ten obiekt zawiera następujące właściwości:

*   **wzór**: wzorzec numeru do formatu i analizowania liczb. Wzory wykonaj [techniczny Standard Unicode #35][1]. *(String)*

*   **symbol**: symbolem podczas formatowania i analizy, takie jak procent lub waluta symbol. *(String)*

*   **frakcja**: liczba cyfr ułamkowych podczas analizowania i formatowanie liczb. *(Liczba)*

*   **zaokrąglania**: Zaokrąglenie przyrost podczas analizowania i formatowanie. *(Liczba)*

*   **pozytywne**: symbol dla liczb dodatnich, gdy formatowanie i analizy. *(String)*

*   **ujemna**: symbol liczb ujemnych podczas analizowania i formatowanie. *(String)*

*   **dziesiętny**: symbolu dziesiętnego używać do analizowania i formatowanie. *(String)*

*   **grupowanie**: symbol grupowania dla analizy i formatowanie. *(String)*

Jeśli występuje błąd uzyskania wzorzec, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.PATTERN_ERROR`.

`options`Parametr jest opcjonalny, a wartości domyślne są:

    {Typ: dziesiętne'}
    

`options.type`Może być `decimal` , `percent` , lub`currency`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to należy wyświetlić wyskakujące okno z tekstem podobne do wyników, które należy wykonać:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Wyniki:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 dziwactwa

*   `pattern`Właściwość nie jest obsługiwany, a retuens pusty ciąg.

*   `fraction`Właściwość nie jest obsługiwany, a zwraca zero.

## navigator.globalization.isDayLightSavingsTime

Wskazuje, czy czas letni jest obowiązująca dla danej daty za pomocą klienta strefy czasowej i kalendarz.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### Opis

Wskazuje, czy czas letni jest w efekcie do `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `dst` Właściwość `Boolean` wartość. A `true` wartość oznacza, że czas letni jest obowiązująca dla danego dnia, i `false` wskazuje, że to nie jest.

Parametr przychodzący `date` powinny być typu`Date`.

Jeśli występuje błąd odczytu daty, a następnie `errorCallback` wykonuje. Oczekiwany kod błędu`GlobalizationError.UNKNOWN_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

W okresie letnim i jeśli przeglądarka jest ustawiona na DST-umożliwiał czasowa, to należy wyświetlić wyskakujące okno z tekstem podobne do `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

Zwraca liczbę sformatowane jako ciąg preferencji użytkownika klienta.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### Opis

Zwraca sformatowany ciąg liczb do `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `value` Właściwość `String` wartość.

Jeśli występuje błąd formatowanie numeru, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.FORMATTING_ERROR`.

`options`Parametr jest opcjonalny, a jego wartości domyślne są:

    {Typ: dziesiętne'}
    

`options.type`Może być "decimal", "procent" lub "Waluta".

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to wyświetla okno dialogowe popup z tekst podobny do `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

Analizuje daty sformatowane jako ciąg, według kalendarza za pomocą klienta, strefa czasowa i preferencje użytkownika klienta i zwraca odpowiedni obiekt date.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### Opis

Zwraca datę do sukcesu wywołanie zwrotne z `properties` obiektu jako parametr. Obiekt powinien mieć następujące właściwości:

*   **rok**: rok czterocyfrowy. *(Liczba)*

*   **miesiąc**: miesiąc od (0-11). *(Liczba)*

*   **dzień**: dzień z (1-31). *(Liczba)*

*   **godziny**: godzina od (0-23). *(Liczba)*

*   **odległości**: odległości od (0-59). *(Liczba)*

*   **drugi**: drugi od (0-59). *(Liczba)*

*   **milisekundy**: milisekund (od 0-999), nie jest dostępna na wszystkich platformach. *(Liczba)*

Przychodzących `dateString` parametr powinien być typu`String`.

`options`Parametr jest opcjonalny i domyślnie następujące wartości:

    {formatLength: "krótkie", wybór: "Data i czas"}
    

`options.formatLength`Może być `short` , `medium` , `long` , lub `full` . `options.selector`Może być `date` , `time` lub`date and
time`.

Jeśli występuje błąd podczas analizowania ciągu daty, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.PARSING_ERROR`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to wyświetla okno dialogowe popup z tekst podobny do `month:8 day:25 year:2012` . Należy zauważyć, że miesiąc, liczba całkowita jest jeden mniej niż ciąg, jako miesiąc liczba całkowita reprezentuje indeks tablicy.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 dziwactwa

*   `formatLength`Opcja obsługuje tylko `short` i `full` wartości.

## navigator.globalization.stringToNumber

Analizuje liczby sformatowane jako ciąg preferencji użytkownika klienta i zwraca odpowiedni numer.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### Opis

Zwraca numer do `successCallback` z `properties` obiektu jako parametr. Obiekt powinien mieć `value` Właściwość `Number` wartość.

Jeśli występuje błąd podczas analizowania ciągu liczb, a następnie `errorCallback` wykonuje z `GlobalizationError` obiektu jako parametr. Oczekiwany kod błędu`GlobalizationError.PARSING_ERROR`.

`options`Parametr jest opcjonalny i domyślnie następujące wartości:

    {Typ: dziesiętne'}
    

`options.type`Może być `decimal` , `percent` , lub`currency`.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS
*   Windows Phone 8

### Przykład

Kiedy przeglądarka jest ustawiona na `en_US` Ustawienia regionalne, to należy wyświetlić wyskakujące okno z tekstem podobne do `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

Obiekt reprezentujący błąd z API globalizacji.

### Właściwości

*   **kod**: Jeden z następujących kodów oznaczających typ błędu *(Liczba)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **wiadomość**: komunikatu tekstowego, który zawiera wyjaśnienie błędu lub szczegóły *(String)*

### Opis

Ten obiekt jest tworzona i wypełniane przez Cordova i wrócił do wywołania zwrotnego w przypadku błędu.

### Obsługiwane platformy

*   Amazon ogień OS
*   Android
*   iOS

### Przykład

Gdy błąd wywołania zwrotnego następujące wykonuje, wyświetla okno popup z tekst podobny do `code: 3` i`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };