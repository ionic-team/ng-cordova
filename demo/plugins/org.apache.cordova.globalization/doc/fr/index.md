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

Ce plugin obtienne des informations et effectue des opérations spécifiques aux paramètres régionaux de l'utilisateur, la langue et fuseau horaire. Notez la différence entre les paramètres régionaux et linguistiques : contrôles de paramètres régionaux comment nombres, les dates et les heures sont affichées pour une région, tandis que la langue détermine quel texte apparaît sous la forme, indépendamment des paramètres régionaux. Souvent les développeurs utilisent des paramètres régionaux pour définir ces deux paramètres, mais il n'y a aucune raison, qu'un utilisateur ne pouvait pas régler sa langue sur « English », mais en paramètres régionaux « Français », afin que le texte s'affiche en anglais mais dates, heures, etc., s'affichent comme ils sont en France. Malheureusement, les plateformes mobiles plus actuellement ne font pas une distinction entre ces paramètres.

## Installation

    cordova plugin add org.apache.cordova.globalization
    

## Objets

*   GlobalizationError

## Méthodes

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

Obtenir la balise de langue BCP 47 pour la langue du client actuel.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### Description

Retourne la balise d'identificateur de langage compatible BCP-47 à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur.

S'il y a une erreur d'obtention de la langue, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour le `en-US` langue, cela devrait afficher une boîte de dialogue contextuelle avec le texte `language: en-US` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Quirks Android

*   Retourne le code de langue à deux lettres 639-1 ISO, majuscules du code ISO 3166-1 country et variante séparés par des tirets. Exemples: « fr », « en-US », « US »

### Windows Phone 8 Quirks

*   Code renvoie l'ISO 639-1 deux lettres de la langue et indicatif ISO 3166-1 de la variante régionale correspondant à la « langue » définissant, séparés par un tiret.
*   Notez que la variante régionale est une propriété du paramètre « Langue » et pas déterminé par le paramètre « Pays/région » sans rapport avec Windows Phone.

## navigator.globalization.getLocaleName

Retourne la balise conforme BCP 47 pour paramètre de langue actuel du client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### Description

Retourne la chaîne d'identificateur de paramètres régionaux compatibles BCP 47 à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur. La balise locale comprendra un code de deux lettres minuscules langue, code de pays à deux lettres majuscules et code de variante (non précisé), séparés par un tiret.

S'il y a une erreur d'obtenir les paramètres régionaux, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en-US` locale, ceci pour afficher une fenêtre popup avec le texte`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Quirks Android

*   Java ne distingue pas entre un set « langue » et le set « locale », donc cette méthode est essentiellement identique à`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 Quirks

*   Code renvoie l'ISO 639-1 deux lettres de la langue et indicatif ISO 3166-1 de la variante régionale correspondant au paramètre de Format « régional », séparé par un trait d'Union.

## navigator.globalization.dateToString

Renvoie une date mise en forme comme une chaîne selon les paramètres régionaux du client et de fuseau horaire.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### Description

Retourne la date de mise en forme `String` par une `value` propriété accessible à partir de l'objet passé comme paramètre à la`successCallback`.

L'entrantes `date` paramètre doit être de type`Date`.

S'il y a une erreur de mise en forme la date, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou`full`.

Le `options.selector` peut être `date` , `time` ou`date and time`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Si le navigateur est configuré pour la `en_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `date: 9/25/2012 4:21PM` en utilisant les options par défaut :

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.

## navigator.globalization.getCurrencyPattern

Retourne une chaîne de modèles pour formater et analyser les valeurs de monnaie selon les préférences de l'utilisateur et du code de devise ISO 4217 du client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit contenir les propriétés suivantes :

*   **modèle**: le modèle de la monnaie de formater et d'analyser les valeurs de devise. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **code**: code de devise de l'ISO 4217 pour le modèle. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de formatage de devises. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

L'entrantes `currencyCode` paramètre doit être un `String` de l'un des codes de devise ISO 4217, par exemple « USD ».

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale et la devise sélectionnée est Dollars des États-Unis, cet exemple pour afficher une fenêtre popup avec un texte semblable aux résultats qui suivent :

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
    

Résultat escompté :

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

Retourne un tableau des noms des mois ou jours de la semaine, selon le calendrier et les préférences de l'utilisateur du client.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### Description

Retourne le tableau de noms à la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient une `value` propriété avec un `Array` de `String` valeurs. Les noms de fonctionnalités de tableau à partir de soit le premier mois de l'année ou le premier jour de la semaine, selon l'option choisie.

S'il y a une erreur d'obtention des noms, puis les `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {type:'wide', item:'months'}
    

La valeur de `options.type` peut être `narrow` ou`wide`.

La valeur de `options.item` peut être `months` ou`days`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cet exemple affiche une série de douze fenêtres popup, un par mois, avec un texte semblable à `month: January` :

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

Retourne une chaîne de modèles pour formater et d'analyser les dates selon les préférences de l'utilisateur du client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### Description

Retourne le modèle de la `successCallback` . L'objet passé comme paramètre contient les propriétés suivantes :

*   **modèle**: le modèle de date et d'heure pour formater et analyser des dates. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **fuseau horaire**: l'abréviation du fuseau horaire sur le client. *(String)*

*   **utc_offset**: la différence actuelle en secondes entre le temps universel coordonné et du fuseau horaire du client. *(Nombre)*

*   **DST_OFFSET**: l'offset d'heure actuel en secondes entre non-heure le client du fuseau horaire et l'heure du client sauver du fuseau horaire. *(Nombre)*

S'il y a une erreur, obtenir le modèle, le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cet exemple pour afficher une fenêtre popup avec texte comme `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 Quirks

*   Le `formatLength` prend uniquement en charge `short` et `full` valeurs.

*   Le `pattern` pour `date and time` modèle retourne uniquement datetime plein format.

*   Le `timezone` retourne le nom de zone à temps plein.

*   La `dst_offset` propriété n'est pas prise en charge, et toujours retourne zéro.

## navigator.globalization.getFirstDayOfWeek

Retourne le premier jour de la semaine selon le calendrier et les préférences de l'utilisateur du client.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### Description

Les jours de la semaine sont numérotés à partir de 1, où 1 est supposé pour être le dimanche. Retourne le jour de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `Number` valeur.

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

Retourne une chaîne de modèles pour formater et d'analyser les chiffres selon les préférences de l'utilisateur du client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient les propriétés suivantes :

*   **modèle**: le modèle de numéro de formater et d'analyser les chiffres. Les modèles suivent [Unicode Technical Standard #35][1]. *(String)*

*   **symbole**: le symbole à utiliser lors de la mise en forme et l'analyse, comme un symbole de pourcentage ou de la monnaie. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de mise en forme des nombres. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **positif**: le symbole à utiliser pour les nombres positifs lors de l'analyse et de mise en forme. *(String)*

*   **négatif**: le symbole à utiliser pour les nombres négatifs lors de l'analyse et de mise en forme. *(String)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN_ERROR`.

Le `options` paramètre est facultatif, et les valeurs par défaut sont :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable aux résultats qui suivent :

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
    

Résultats :

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 Quirks

*   La `pattern` propriété n'est pas prise en charge et retuens une chaîne vide.

*   La `fraction` propriété n'est pas prise en charge et retourne zéro.

## navigator.globalization.isDayLightSavingsTime

Indique si l'heure d'été est en vigueur pour une date donnée en utilisant le calendrier et le fuseau horaire du client.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### Description

Indique si l'heure d'été est en vigueur ou non en transmettant un objet `properties` en paramètre de la fonction `successCallback`. Cet objet contient une propriété `dst` dont la valeur est de type `Boolean`. Ainsi, `true` indique que l'heure d'été est en vigueur à la date donnée, au contraire `false` indique qu'elle ne l'est pas.

Le paramètre obligatoire `date` doit être de type `Date`.

S'il y a une erreur de lecture de la date, puis le `errorCallback` s'exécute. Code attendu de l'erreur est`GlobalizationError.UNKNOWN_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Pendant l'été et si l'heure d'été est activée sur le fuseau horaire actuel du navigateur, une fenêtre popup contenant `dst : true` est affichée :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst : ' + date.dst + '\n');},
        function () {alert('Erreur lors de l\'obtention de la valeur de dst\n');}
    );
    

## navigator.globalization.numberToString

Renvoie un nombre formaté dans une chaîne de caractères en tenant compte des préférences utilisateur du client.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### Description

Transmet le nombre formaté en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet doit avoir une `value` propriété avec une `String` valeur.

Si une erreur survient lors du formatage du nombre, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {type: « decimal »}
    

Le `options.type` peut être « decimal », « % » ou « monnaie ».

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number : ' + number.value + '\n');},
        function () {alert('Erreur lors du formatage du nombre\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

Retourne un objet date construit à partir d'une date contenue dans une chaîne de caractères, en tenant compte des préférences utilisateur, du calendrier et du fuseau horaire du client.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### Description

Transmet la date demandée en paramètre à la fonction successCallback sous la forme d'un objet `properties`. Cet objet contient les propriétés suivantes :

*   **année**: l'année à quatre chiffres. *(Nombre)*

*   **mois**: le mois de (0-11). *(Nombre)*

*   **jour**: le jour de (1-31). *(Nombre)*

*   **heure**: l'heure du (0-23). *(Nombre)*

*   **minute**: la minute (0-59). *(Nombre)*

*   **deuxième**: la seconde de (0 à 59). *(Nombre)*

*   **milliseconde**: les millisecondes (entre 0 et 999), non disponibles sur toutes les plateformes. *(Nombre)*

Le paramètre `dateString` doit être de type `String`.

Le paramètre `options` est facultatif, sa valeur par défaut est :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

Si une erreur survient lors de l'analyse de la chaîne de caractères, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING_ERROR`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `month:8 day:25 year:2012` . Notez que l'entier faisant référence au numéro du mois est différent de celui présent dans la chaîne parsée, ceci car il représente un index de tableau.

    navigator.globalization.stringToDate(
        '25/09/2012',
        function (date) {alert('month : ' + date.month + ',' +
                               ' day : '  + date.day + ',' +
                               ' year : ' + date.year + '\n');},
        function () {alert('Erreur lors de l\'obtention de la date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.

## navigator.globalization.stringToNumber

Retourne un nombre à partir d'une chaîne de caractères contenant un nombre formaté, en tenant compte des préférences utilisateur du client.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### Description

Transmet le nombre demandé en paramètre à la fonction `successCallback` sous la forme d'un objet `properties`. Cet objet contient une propriété `value` dont la valeur est de type `Number`.

Si une erreur survient lors de l'analyse de la chaîne de caractères, la fonction `errorCallback` est exécutée et un objet `GlobalizationError` lui est passé en paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS
*   Windows Phone 8

### Exemple

Lorsque le navigateur est configuré pour la `en_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable à `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234,56',
        function (number) {alert('number : ' + number.value + '\n');},
        function () {alert('Erreur lors de l\'obtention du nombre\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

Un objet représentant une erreur de l'API Globalization.

### Propriétés

*   **code**: Un des codes suivants qui représente le type d'erreur *(Nombre)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **message**: un message texte qui comprend l'explication de l'erreur et/ou de détails *(String)*

### Description

Cet objet est créé et remplie par Cordova, puis transmis à une fonction callback en cas d'erreur.

### Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   iOS

### Exemple

Lorsque la fonction callback d'erreur suivante est exécutée, une fenêtre popup contenant par exemple `code : 3` et `message :` est affichée.

    function errorCallback(error) {
        alert('code : ' + error.code + '\n' +
              'message : ' + error.message + '\n');
    };