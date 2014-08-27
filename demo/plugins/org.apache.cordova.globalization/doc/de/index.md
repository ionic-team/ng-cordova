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

Dieses Plugin Ruft Informationen und führt durch spezifisch für des Benutzers Gebietsschema, Sprache und Zeitzone. Beachten Sie den Unterschied zwischen Sprache und Gebietsschema: Gebietsschema Steuerelemente wie Zahlen, Datumsangaben und Zeiten werden angezeigt für eine Region, während die Sprache bestimmt, welcher Text in Sprache erscheint als, unabhängig von den Einstellungen des Gebietsschemas. Häufig Entwickler verwenden Gebietsschema verwenden, setzen Sie beide Einstellungen aber es gibt keinen Grund, die ein Benutzer ihre Sprache auf "Englisch" eingestellt konnte nicht aber Gebietsschema "Französisch", damit Text angezeigt wird, in Englisch, aber Termine, Zeiten, usw. werden angezeigt wie in Frankreich. Leider machen die meisten mobile Plattformen derzeit keine Unterscheidung zwischen diesen Einstellungen.

## Installation

    cordova plugin add org.apache.cordova.globalization
    

## Objekte

*   GlobalizationError

## Methoden

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

Erhalten Sie das BCP 47-Sprachtag für aktuelle Sprache des Clients.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### Beschreibung

Gibt den BCP-47-kompatiblen Sprache-Bezeichner-Tag für die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert.

Wenn ein Fehler immer die Sprache der `errorCallback` führt mit ein `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.UNKNOWN_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en-US` Sprache, dies sollte einen Popup-Dialog mit dem Text angezeigt `language: en-US` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Android Macken

*   Gibt zurück, der ISO 639-1 zwei Buchstaben bestehenden Sprachcode, Großbuchstaben ISO 3166-1-Ländercode und Variante, die durch Bindestriche getrennt sind. Beispiele: "de", "En-US", "US"

### Windows Phone 8 Macken

*   Gibt die ISO 639-1 zweistelligen Sprachcode und ISO 3166-1-Ländercode der regionalen Variante der "Sprache" festlegen, durch einen Bindestrich getrennt.
*   Beachten Sie, dass die regionale Variante eine Eigenschaft des "Spracheinstellung ist" und nicht durch die unabhängige "Land/Region" Einstellung auf Windows Phone bestimmt.

## navigator.globalization.getLocaleName

Gibt das BCP 47 kompatible Tag für aktuelle Gebietsschema-Einstellung des Clients zurück.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### Beschreibung

Gibt die BCP 47 kompatible Gebietsschemabezeichner-Zeichenfolge, die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert. Das Gebietsschema-Tag besteht aus ein Sprachcode zwei Buchstaben in Kleinbuchstaben und Großbuchstaben Zweibuchstaben-Ländercode (nicht spezifiziert) Variantencode, durch einen Bindestrich getrennt.

Wenn es ist ein Fehler, der immer des Gebietsschemas, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.UNKNOWN_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en-US` Gebietsschema, das zeigt einen Popup-Dialog mit dem Text`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Android Macken

*   Java unterscheidet nicht zwischen einem Set "Sprache" und Set "Locale", so dass diese Methode im Wesentlichen identisch ist`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 Macken

*   Gibt die ISO 639-1 zweistelligen Sprachcode und ISO 3166-1-Ländercode der regionalen Variante entsprechenden auf die "Regionales Format"-Einstellung, die durch einen Bindestrich getrennt.

## navigator.globalization.dateToString

Gibt ein Datum formatiert als Zeichenfolge gemäß der Client Gebietsschema und Zeitzone.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### Beschreibung

Gibt das formatierte Datum `String` über eine `value` -Eigenschaft zugänglich aus dem Objekt übergeben als Parameter für die`successCallback`.

Die eingehende `date` -Parameter des Typs sein sollte`Date`.

Wenn ein Fehler, die Formatierung des Datums vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.FORMATTING_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder`full`.

Die `options.selector` kann `date` , `time` oder`date and time`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser so, dass eingestellt ist die `en_US` Gebietsschema, das zeigt einen Popup-Dialog mit Text ähnlich wie `date: 9/25/2012 4:21PM` mit den Standardoptionen:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 Macken

*   Die `formatLength` option unterstützt nur `short` und `full` Werte.

## navigator.globalization.getCurrencyPattern

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Währungsangaben nach Benutzereinstellungen und ISO 4217 Währungscode des Kunden.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### Beschreibung

Gibt das Muster auf der `successCallback` mit einem `properties` -Objekt als Parameter. Das Objekt sollte die folgenden Eigenschaften enthalten:

*   **Muster**: das Währung-Muster zur Formatierung und zum Analysieren von Währungswerten. Die Muster folgen [Unicode Technical Standard #35][1]. *(String)*

*   **Code**: der ISO-4217-Währungscode für das Muster. *(String)*

*   **Bruch**: die Anzahl von Bruchziffern zum analysieren und Formatieren einer Währung verwendet. *(Anzahl)*

*   **Rundung**: die Rundung erhöhen wenn analysieren und formatieren verwenden. *(Anzahl)*

*   **Dezimal**: das Dezimaltrennzeichen für analysieren und formatieren. *(String)*

*   **Gruppieren**: das Symbol für Zifferngruppierung zum analysieren und formatieren verwenden. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Die eingehende `currencyCode` Parameter sollte eine `String` eines der ISO 4217 Währungscodes, z. B. 'USD'.

Wenn es einen Fehler erhalten das Muster, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.FORMATTING_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema und die gewählte Währung US-Dollar, in diesem Beispiel wird einen Popup-Dialog mit Text ähnlich wie die Ergebnisse, die Folgen:

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
    

Erwartete Ergebnis:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

Gibt ein Array der Namen der Monate oder Tage der Woche, abhängig von dem Client Benutzereinstellungen und Kalender.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### Beschreibung

Gibt das Array von Namen der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt enthält eine `value` -Eigenschaft mit einer `Array` der `String` Werte. Die Namen von Array-Funktionen, entweder der erste Monat im Jahr oder der erste Tag der Woche, je nach der ausgewählten Option ab.

Wenn ein Fehler auftritt erhalten die Namen, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.UNKNOWN_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {type:'wide', item:'months'}
    

Der Wert des `options.type` kann `narrow` oder`wide`.

Der Wert des `options.item` kann `months` oder`days`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, in diesem Beispiel wird eine Reihe von zwölf Popup-Dialoge, eine pro Monat, mit Text ähnlich `month: January` :

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

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Daten entsprechend der Client-Benutzer-Einstellungen.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### Beschreibung

Gibt das Muster auf der `successCallback` . Das als Parameter übergebene Objekt enthält die folgenden Eigenschaften:

*   **Muster**: das Datum und die Uhrzeit-Muster zur Formatierung und zum Analysieren von Daten. Die Muster folgen [Unicode Technical Standard #35][1]. *(String)*

*   **Zeitzone**: der abgekürzte Name der Zeitzone auf dem Client. *(String)*

*   **Utc_offset**: die aktuelle Differenz in Sekunden zwischen dem Client Zeitzone und koordinierte Weltzeit. *(Anzahl)*

*   **Dst_offset**: der aktuelle Sommerzeit-Offset in Sekunden zwischen der Client-Sommerzeit der Zeitzone und der Client Tageslicht Speichern der Zeitzone. *(Anzahl)*

Wenn es einen Fehler erhalten das Muster der `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.PATTERN_ERROR`.

Die `options` Parameter ist optional und wird standardmäßig auf folgende Werte:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder `full` . Die `options.selector` kann `date` , `time` oder`date and
time`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, in diesem Beispiel wird einen Popup-Dialog mit Text wie z. B. `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 Macken

*   Die `formatLength` unterstützt nur `short` und `full` Werte.

*   Die `pattern` für `date and time` Muster kehrt nur volle Datetime-Format.

*   Die `timezone` gibt den Namen des Vollzeit-Zone zurück.

*   Die `dst_offset` -Eigenschaft wird nicht unterstützt, und gibt immer NULL.

## navigator.globalization.getFirstDayOfWeek

Den ersten Tag der Woche laut dem Client Benutzereinstellungen und Kalender gibt.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### Beschreibung

Die Tage der Woche sind nummeriert, beginnend mit 1, wo wird 1 Sonntag angenommen. Liefert den Tag auf der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `Number` Wert.

Wenn es einen Fehler erhalten das Muster, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.UNKNOWN_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, das zeigt einen Popup-Dialog mit Text ähnlich`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Zahlen nach der Client-Benutzer-Einstellungen.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### Beschreibung

Gibt das Muster auf der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt enthält die folgenden Eigenschaften:

*   **Muster**: die Muster zur Formatierung und zum Analysieren von Zahlen. Die Muster folgen [Unicode Technical Standard #35][1]. *(String)*

*   **Symbol**: das Symbol beim Formatieren und analysieren, wie ein Prozentsatz oder Symbol verwendet. *(String)*

*   **Bruch**: die Anzahl von Bruchziffern zum analysieren und Formatieren von Zahlen verwendet. *(Anzahl)*

*   **Rundung**: die Rundung erhöhen wenn analysieren und formatieren verwenden. *(Anzahl)*

*   **positiv**: das Symbol für positive Zahlen beim Analysieren und formatieren verwenden. *(String)*

*   **negativ**: das Symbol für negative Zahlen beim Analysieren und formatieren verwenden. *(String)*

*   **Dezimal**: das Dezimaltrennzeichen für analysieren und formatieren. *(String)*

*   **Gruppieren**: das Symbol für Zifferngruppierung zum analysieren und formatieren verwenden. *(String)*

Wenn es einen Fehler erhalten das Muster, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.PATTERN_ERROR`.

Die `options` Parameter ist optional und Standardwerte sind:

    {Typ: "decimal"}
    

Die `options.type` kann `decimal` , `percent` , oder`currency`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, dies sollte einen Popup-Dialog mit Text ähnlich wie die Ergebnisse in den folgenden anzeigen:

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
    

Ergebnisse:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 Macken

*   Die `pattern` -Eigenschaft wird nicht unterstützt, und Retuens eine leere Zeichenfolge.

*   Die `fraction` -Eigenschaft wird nicht unterstützt, und gibt NULL zurück.

## navigator.globalization.isDayLightSavingsTime

Gibt an, ob die Sommerzeit ist in der Tat für ein bestimmtes Datum unter Verwendung des Auftraggebers Zeitzone und Kalender.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### Beschreibung

Gibt an, ob Sommerzeit ist in der Tat zu den `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `dst` Eigenschaft mit einer `Boolean` Wert. A `true` Wert angibt, dass die Sommer-/Winterzeit für das angegebene Datum gültig ist und `false` weist darauf hin, dass es nicht.

Die eingehenden Parameter `date` sollte vom Typ`Date`.

Wenn gibt es einen Lesefehler das Datum der `errorCallback` führt. Die erwarteten Fehlercode ist`GlobalizationError.UNKNOWN_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Im Sommer und wenn der Browser auf eine DST-fähigen Zeitzone festgelegt ist, sollte dies einen Popup-Dialog mit Text ähnlich angezeigt `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

Gibt eine Zahl, die als Zeichenfolge nach dem Client-Benutzer-Einstellungen formatiert.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### Beschreibung

Gibt die formatierte Zeichenfolge, die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert.

Wenn es ist ein Fehler, die Formatierung der Zahl, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.FORMATTING_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {Typ: "decimal"}
    

Die `options.type` kann sein "decimal", "Prozent" oder "Währung".

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, das zeigt einen Popup-Dialog mit Text ähnlich wie `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

Analysiert ein Datum formatiert als Zeichenfolge, nach der Client Benutzereinstellungen und Kalender mit der Zeitzone des Clients, und gibt das entsprechende Datumsobjekt zurück.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### Beschreibung

Gibt das Datum zurück, an den Erfolg-Rückruf mit einem `properties` -Objekt als Parameter. Das Objekt sollte folgenden Eigenschaften aufweisen:

*   **Jahr**: die vier Digit Year. *(Anzahl)*

*   **Monat**: der Monat ab (0-11). *(Anzahl)*

*   **Tag**: der Tag von (1-31). *(Anzahl)*

*   **Stunde**: die Stunde (0-23). *(Anzahl)*

*   **Minute**: die Minute (0-59). *(Anzahl)*

*   **zweite**: die zweite von (0-59). *(Anzahl)*

*   **Millisekunde**: die Millisekunden (von 0-999), nicht auf allen Plattformen verfügbar. *(Anzahl)*

Die eingehende `dateString` -Parameter des Typs sein sollte`String`.

Die `options` Parameter ist optional und wird mit den folgenden Werten:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder `full` . Die `options.selector` kann `date` , `time` oder`date and
time`.

Wenn es ist ein Fehler beim Analysieren der Datumszeichenfolge dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.PARSING_ERROR`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, das zeigt einen Popup-Dialog mit Text ähnlich `month:8 day:25 year:2012` . Beachten Sie, dass im Monat ganze Zahl ist kleiner als die Zeichenfolge AsInteger Monat stellt einen Array-Index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 Macken

*   Die `formatLength` option unterstützt nur `short` und `full` Werte.

## navigator.globalization.stringToNumber

Analysiert eine Zahl als Zeichenfolge nach dem Client-Benutzer-Einstellungen formatiert und gibt die entsprechende Nummer zurück.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### Beschreibung

Liefert die Anzahl an der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `Number` Wert.

Wenn es ist ein Fehler beim Analysieren der Zeichenfolge, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Die erwarteten Fehlercode ist`GlobalizationError.PARSING_ERROR`.

Die `options` Parameter ist optional und wird standardmäßig auf folgende Werte:

    {Typ: "decimal"}
    

Die `options.type` kann `decimal` , `percent` , oder`currency`.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Beispiel

Wenn der Browser auf festgelegt ist die `en_US` Gebietsschema, dies sollte einen Popup-Dialog mit Text ähnlich anzeigen `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

Ein Objekt, das einen Fehler von der Globalisierung-API darstellt.

### Eigenschaften

*   **Code**: Einen der folgenden Codes, der den Fehlertyp *(Anzahl)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **Nachricht**: eine SMS-Nachricht, die enthält den Fehler Erklärung und/oder details *(String)*

### Beschreibung

Dieses Objekt ist erstellt und bevölkert von Cordova und kehrte nach einem Rückruf im Fehlerfall.

### Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   iOS

### Beispiel

Die folgenden Fehler-Callback ausgeführt wird, zeigt einen Popup-Dialog mit dem Text ähnlich wie `code: 3` und`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };