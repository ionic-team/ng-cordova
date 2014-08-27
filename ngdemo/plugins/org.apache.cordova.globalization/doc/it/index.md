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

Questo plugin ottiene informazioni ed esegue operazioni specifiche impostazioni locali dell'utente, lingua e fuso orario. Si noti la differenza tra lingua e impostazioni internazionali: controlli delle impostazioni internazionali, numeri, date e tempi di visualizzazione per una regione, mentre la lingua determina quale testo di lingua appare come, indipendentemente dalle impostazioni locali. Spesso gli sviluppatori utilizzano impostazioni locali per impostare entrambe le impostazioni, ma non non c'è alcun motivo per che un utente non poteva impostare la lingua "Inglese" ma locale alla "Francese", così che il testo viene visualizzato in inglese ma le date, tempi, ecc., vengono visualizzati come sono in Francia. Purtroppo, piattaforme mobili più attualmente non fanno una distinzione tra queste impostazioni.

## Installazione

    cordova plugin add org.apache.cordova.globalization
    

## Oggetti

*   GlobalizationError

## Metodi

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

Ottenere il tag di lingua BCP 47 per la lingua corrente del client.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### Descrizione

Restituisce l'etichetta di identificatore di linguaggio compatibile con BCP-47 per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore nell'acquisizione della lingua, poi la `errorCallback` viene eseguita con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en-US` lingua, questo dovrebbe visualizzare una finestra di dialogo pop-up con il testo `language: en-US` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Stranezze Android

*   Restituisce il codice di due lettere della lingua 639-1 ISO, maiuscolo ISO 3166-1 prefisso e variante separati da trattini. Esempi: "en", "en-US", "US"

### Windows Phone 8 stranezze

*   Codice restituisce l'ISO 639-1 due lettere della lingua e il codice ISO 3166-1 paese della variante regionale corrispondente alla "Lingua" impostazione, separati da un trattino.
*   Si noti che la variante regionale è una proprietà di impostazione "Language" e non determinato dall'impostazione del "Paese" indipendente su Windows Phone.

## navigator.globalization.getLocaleName

Restituisce il tag compatibile con BCP 47 per impostazione locale corrente del client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### Descrizione

Restituisce la stringa dell'identificatore locale conforme BCP 47 per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore. L'etichetta locale sarà costituito da un codice di due lettere minuscole lingua, codice paese di due lettere maiuscole e codice variante (non specificato), separati da un trattino.

Se c'è un errore di ottenere le impostazioni locali, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en-US` locale, questa viene visualizzata una finestra popup con il testo`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Stranezze Android

*   Java non fa distinzione tra un set "lingua" e impostare "impostazioni", quindi questo metodo è essenzialmente lo stesso`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 stranezze

*   Codice restituisce l'ISO 639-1 due lettere della lingua e il codice ISO 3166-1 paese della variante regionale corrispondente all'impostazione "Formato regionale", separato da un trattino.

## navigator.globalization.dateToString

Restituisce una data formattata come stringa secondo le impostazioni locali del client e fuso orario.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### Descrizione

Restituisce la data formattata `String` tramite un `value` proprietà accessibile dall'oggetto passato come parametro per la`successCallback`.

L'ingresso `date` parametro dovrebbe essere di tipo`Date`.

Se c'è un errore di formattazione della data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o`full`.

Il `options.selector` può essere `date` , `time` o`date and time`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Se il browser è impostato per la `en_US` locale, questa viene visualizzata una finestra di popup con testo simile a `date: 9/25/2012 4:21PM` utilizzando le opzioni di default:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.

## navigator.globalization.getCurrencyPattern

Restituisce una stringa per formattare e analizzare i valori di valuta secondo le preferenze dell'utente e il codice ISO 4217 del client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto deve contenere le seguenti proprietà:

*   **modello**: il modello valuta per formattare e analizzare i valori di valuta. I modelli seguono [Unicode Technical Standard #35][1]. *(String)*

*   **codice**: codice per il modello The ISO 4217. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione valuta. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

L'ingresso `currencyCode` parametro dovrebbe essere un `String` di uno dei codici valuta ISO 4217, ad esempio 'USD'.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS

### Esempio

Quando il browser è impostato per la `en_US` locale e la valuta selezionata è dollari degli Stati Uniti, in questo esempio viene visualizzata una finestra di popup con testo simile ai risultati che seguono:

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
    

Risultato atteso:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

Restituisce una matrice di nomi di mesi o giorni della settimana, a seconda delle preferenze dell'utente del client e calendario.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### Descrizione

Restituisce la matrice di nomi per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene un `value` proprietà con un `Array` di `String` i valori. I nomi di funzioni matrice a partire da entrambi il primo mese dell'anno o il primo giorno della settimana, a seconda dell'opzione selezionata.

Se c'è un errore ottenendo i nomi, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {type:'wide', item:'months'}
    

Il valore di `options.type` può essere `narrow` o`wide`.

Il valore di `options.item` può essere `months` o`days`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, in questo esempio viene visualizzata una serie di dodici finestre pop-up, uno al mese, con un testo simile a `month: January` :

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

Restituisce una stringa per formattare e analizzare i dati secondo le preferenze dell'utente del client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### Descrizione

Restituisce il modello per la `successCallback` . L'oggetto passato come parametro contiene le seguenti proprietà:

*   **modello**: il modello di data e ora per formattare e analizzare i dati. I modelli seguono [Unicode Technical Standard #35][1]. *(String)*

*   **fuso orario**: il nome abbreviato del fuso orario sul client. *(String)*

*   **utc_offset**: l'attuale differenza in secondi tra del client fuso orario e tempo universale coordinato. *(Numero)*

*   **DST_OFFSET**: l'offset corrente ora legale in secondi tra non-legale del client di fuso orario e ora legale del cliente risparmio di fuso orario. *(Numero)*

Se c'è un errore per ottenere il modello, il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, in questo esempio viene visualizzata una finestra di popup con il testo come `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 stranezze

*   Il `formatLength` supporta solo `short` e `full` i valori.

*   La `pattern` per `date and time` modello restituisce solo il formato datetime completo.

*   Il `timezone` restituisce il nome della zona a tempo pieno.

*   La `dst_offset` proprietà non è supportata, e sempre restituisce zero.

## navigator.globalization.getFirstDayOfWeek

Restituisce il primo giorno della settimana secondo le preferenze dell'utente del client e calendario.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### Descrizione

I giorni della settimana sono numerati a partire da 1, dove 1 è presupposto per essere domenica. Restituisce il giorno per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, questa viene visualizzata una finestra di popup con testo simile a`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

Restituisce una stringa per formattare e analizzare i numeri secondo le preferenze dell'utente del client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene le seguenti proprietà:

*   **modello**: il modello del numero per formattare e analizzare i numeri. I modelli seguono [Unicode Technical Standard #35][1]. *(String)*

*   **simbolo**: il simbolo da utilizzare durante la formattazione e l'analisi, come un simbolo di percentuale o valuta. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione dei numeri. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **positivo**: il simbolo da utilizzare per i numeri positivi quando l'analisi e la formattazione. *(String)*

*   **negativo**: il simbolo da utilizzare per i numeri negativi quando l'analisi e la formattazione. *(String)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN_ERROR`.

Il `options` parametro è facoltativo e i valori predefiniti sono:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile ai risultati che seguono:

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
    

Risultati:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 stranezze

*   La `pattern` proprietà non è supportata e retuens una stringa vuota.

*   La `fraction` proprietà non è supportata e restituisce zero.

## navigator.globalization.isDayLightSavingsTime

Indica se l'ora legale è in vigore per una data specifica utilizzando del client fuso orario e calendario.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### Descrizione

Indica se è o meno dell'ora legale in vigore alla `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `dst` proprietà con un `Boolean` valore. A `true` il valore indica che l'ora legale è in vigore per la data specificata, e `false` indica che non è.

Il parametro in ingresso `date` dovrebbe essere di tipo`Date`.

Se c'è un errore di lettura della data, allora il `errorCallback` esegue. Previsto codice dell'errore è`GlobalizationError.UNKNOWN_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Durante l'estate, e se il browser è impostato su un fuso orario abilitato DST, questo dovrebbe visualizzare una finestra di popup con testo simile a `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

Restituisce un numero formattato come una stringa secondo le preferenze dell'utente del client.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### Descrizione

Restituisce la stringa formattata numero per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore di formattazione del numero, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {tipo: 'decimale'}
    

Il `options.type` può essere 'decimale', '%' o 'valuta'.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, questa viene visualizzata una finestra di popup con testo simile a `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

Analizza una data formattata come stringa, secondo le preferenze dell'utente e calendario utilizzando il fuso orario del cliente, il cliente e restituisce l'oggetto data corrispondente.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### Descrizione

Restituisce la data al metodo di callback con successo un `properties` oggetto come parametro. Tale oggetto dovrebbe avere le seguenti proprietà:

*   **anno**: l'anno a quattro cifre. *(Numero)*

*   **mese**: mese da (0-11). *(Numero)*

*   **giorno**: il giorno da (1-31). *(Numero)*

*   **ora**: l'ora (0-23). *(Numero)*

*   **minuti**: il minuto da (0-59). *(Numero)*

*   **secondo**: il secondo da (0-59). *(Numero)*

*   **millisecondo**: I millisecondi (da 0-999), non disponibili su tutte le piattaforme. *(Numero)*

L'ingresso `dateString` parametro dovrebbe essere di tipo`String`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

Se c'è un errore di parsing della stringa data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING_ERROR`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, questa viene visualizzata una finestra di popup con testo simile a `month:8 day:25 year:2012` . Si noti che il mese intero è uno minore di stringa, come l'intero mese rappresenta un indice di matrice.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.

## navigator.globalization.stringToNumber

Analizza un numero formattato come una stringa secondo le preferenze dell'utente del client e restituisce il numero corrispondente.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### Descrizione

Restituisce il numero per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore di parsing della stringa di numeri, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS
*   Windows Phone 8

### Esempio

Quando il browser è impostato per la `en_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile a `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

Un oggetto che rappresenta un errore dall'API di globalizzazione.

### Proprietà

*   **codice**: Uno dei seguenti codici che rappresenta il tipo di errore *(Numero)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **messaggio**: un messaggio di testo che include la spiegazione dell'errore e/o dettagli *(String)*

### Descrizione

Questo oggetto è creato e popolato da Cordova e restituito una richiamata in caso di errore.

### Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   iOS

### Esempio

Quando si esegue il callback di errore seguenti, esso viene visualizzata una finestra popup con il testo simile a `code: 3` e`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };