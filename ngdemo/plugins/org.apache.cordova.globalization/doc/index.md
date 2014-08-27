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

This plugin obtains information and performs operations specific to the user's
locale, language, and timezone. Note the difference between locale and language:
locale controls how numbers, dates, and times are displayed for a region, while
language determines what language text appears as, independently of locale settings.
Often developers use locale to set both settings, but there is no reason a user
couldn't set her language to "English" but locale to "French", so that text is
displayed in English but dates, times, etc., are displayed as they are in France.
Unfortunately, most mobile platforms currently do not make a distinction between
these settings. 

## Installation

    cordova plugin add org.apache.cordova.globalization

## Objects

- GlobalizationError

## Methods

- navigator.globalization.getPreferredLanguage
- navigator.globalization.getLocaleName
- navigator.globalization.dateToString
- navigator.globalization.stringToDate
- navigator.globalization.getDatePattern
- navigator.globalization.getDateNames
- navigator.globalization.isDayLightSavingsTime
- navigator.globalization.getFirstDayOfWeek
- navigator.globalization.numberToString
- navigator.globalization.stringToNumber
- navigator.globalization.getNumberPattern
- navigator.globalization.getCurrencyPattern

## navigator.globalization.getPreferredLanguage

Get the BCP 47 language tag for the client's current language.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

### Description

Returns the BCP-47 compliant language identifier tag to the `successCallback` 
with a `properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error getting the language, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en-US` language, this should display a
popup dialog with the text `language: en-US`:

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );

### Android Quirks

- Returns the ISO 639-1 two-letter language code, upper case ISO 3166-1 
country code and variant separated by hyphens. Examples: "en", "en-US", "US"

### Windows Phone 8 Quirks

- Returns the ISO 639-1 two-letter language code and ISO 3166-1 country code
of the regional variant corresponding to the "Language" setting, separated by
a hyphen.
- Note that the regional variant is a property of the "Language" setting and
not determined by the unrelated "Country/Region" setting on Windows Phone.

## navigator.globalization.getLocaleName

Returns the BCP 47 compliant tag for the client's current locale setting.

    navigator.globalization.getLocaleName(successCallback, errorCallback);

### Description

Returns the BCP 47 compliant locale identifier string to the `successCallback`
with a `properties` object as a parameter. That object should have a `value`
property with a `String` value. The locale tag will consist of a two-letter lower
case language code, two-letter upper case country code, and (unspecified) variant
code, separated by a hyphen.

If there is an error getting the locale, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en-US` locale, this displays a popup
dialog with the text `locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );

### Android Quirks

- Java does not distinguish between a set "langauge" and set "locale," so this
method is essentially the same as `navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 Quirks

- Returns the ISO 639-1 two-letter language code and ISO 3166-1 country code
of the regional variant corresponding to the "Regional Format" setting, separated
by a hyphen.


## navigator.globalization.dateToString

Returns a date formatted as a string according to the client's locale and timezone.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

### Description

Returns the formatted date `String` via a `value` property accessible
from the object passed as a parameter to the `successCallback`.

The inbound `date` parameter should be of type `Date`.

If there is an error formatting the date, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING_ERROR`.

The `options` parameter is optional, and its default values are:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or `full`.

The `options.selector` can be `date`, `time` or `date and time`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

If the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `date: 9/25/2012 4:21PM` using the default
options:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );

### Windows Phone 8 Quirks

- The `formatLength` option supports only `short` and `full` values.

## navigator.globalization.getCurrencyPattern

Returns a pattern string to format and parse currency values according
to the client's user preferences and ISO 4217 currency code.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

### Description

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object should contain the following properties:

- __pattern__: The currency pattern to format and parse currency values.  The patterns follow [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html). _(String)_

- __code__: The ISO 4217 currency code for the pattern. _(String)_

- __fraction__: The number of fractional digits to use when parsing and formatting currency. _(Number)_

- __rounding__: The rounding increment to use when parsing and formatting. _(Number)_

- __decimal__: The decimal symbol to use for parsing and formatting. _(String)_

- __grouping__: The grouping symbol to use for parsing and formatting. _(String)_

The inbound `currencyCode` parameter should be a `String` of one of
the ISO 4217 currency codes, for example 'USD'.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS

### Example

When the browser is set to the `en_US` locale and the selected
currency is United States Dollars, this example displays a popup
dialog with text similar to the results that follow:

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

Expected result:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,


## navigator.globalization.getDateNames

Returns an array of the names of the months or days of the week,
depending on the client's user preferences and calendar.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

### Description

Returns the array of names to the `successCallback` with a
`properties` object as a parameter. That object contains a `value`
property with an `Array` of `String` values. The array features names
starting from either the first month in the year or the first day of
the week, depending on the option selected.

If there is an error obtaining the names, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN_ERROR`.

The `options` parameter is optional, and its default values are:

    {type:'wide', item:'months'}

The value of `options.type` can be `narrow` or `wide`.

The value of `options.item` can be `months` or `days`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this example displays
a series of twelve popup dialogs, one per month, with text similar to
`month: January`:

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

Returns a pattern string to format and parse dates according to the
client's user preferences.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

### Description

Returns the pattern to the `successCallback`. The object passed in as
a parameter contains the following properties:

- __pattern__: The date and time pattern to format and parse dates. The patterns follow [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html). _(String)_

- __timezone__: The abbreviated name of the time zone on the client. _(String)_

- __utc_offset__: The current difference in seconds between the client's time zone and coordinated universal time. _(Number)_

- __dst_offset__: The current daylight saving time offset in seconds between the client's non-daylight saving's time zone and the client's daylight saving's time zone. _(Number)_

If there is an error obtaining the pattern, the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN_ERROR`.

The `options` parameter is optional, and defaults to the following values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this example displays
a popup dialog with text such as `pattern: M/d/yyyy h:mm a`:

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

### Windows Phone 8 Quirks

- The `formatLength` supports only `short` and `full` values.

- The `pattern` for `date and time` pattern returns only full datetime format.

- The `timezone` returns the full time zone name.

- The `dst_offset` property is not supported, and always returns zero.


## navigator.globalization.getFirstDayOfWeek

Returns the first day of the week according to the client's user
preferences and calendar.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

### Description

The days of the week are numbered starting from 1, where 1 is assumed
to be Sunday.  Returns the day to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `Number` value.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this displays a
popup dialog with text similar to `day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );


## navigator.globalization.getNumberPattern

Returns a pattern string to format and parse numbers according to the client's user preferences.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

### Description

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object contains the following properties:

- __pattern__: The number pattern to format and parse numbers.  The patterns follow [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-4.html). _(String)_

- __symbol__: The symbol to use when formatting and parsing, such as a percent or currency symbol. _(String)_

- __fraction__: The number of fractional digits to use when parsing and formatting numbers. _(Number)_

- __rounding__: The rounding increment to use when parsing and formatting. _(Number)_

- __positive__: The symbol to use for positive numbers when parsing and formatting. _(String)_

- __negative__: The symbol to use for negative numbers when parsing and formatting. _(String)_

- __decimal__: The decimal symbol to use for parsing and formatting. _(String)_

- __grouping__: The grouping symbol to use for parsing and formatting. _(String)_

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN_ERROR`.

The `options` parameter is optional, and default values are:

    {type:'decimal'}

The `options.type` can be `decimal`, `percent`, or `currency`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this should display a
popup dialog with text similar to the results that follow:

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

Results:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,


### Windows Phone 8 Quirks

- The `pattern` property is not supported, and retuens an empty string.

- The `fraction` property is not supported, and returns zero.


## navigator.globalization.isDayLightSavingsTime

Indicates whether daylight savings time is in effect for a given date
using the client's time zone and calendar.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

### Description

Indicates whether or not daylight savings time is in effect to the
`successCallback` with a `properties` object as a parameter. That object
should have a `dst` property with a `Boolean` value. A `true` value
indicates that daylight savings time is in effect for the given date,
and `false` indicates that it is not.

The inbound parameter `date` should be of type `Date`.

If there is an error reading the date, then the `errorCallback`
executes. The error's expected code is `GlobalizationError.UNKNOWN_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

During the summer, and if the browser is set to a DST-enabled
timezone, this should display a popup dialog with text similar to
`dst: true`:

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );



## navigator.globalization.numberToString

Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

### Description

Returns the formatted number string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error formatting the number, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING_ERROR`.

The `options` parameter is optional, and its default values are:

    {type:'decimal'}

The `options.type` can be 'decimal', 'percent', or 'currency'.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `number: 3.142`:

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );


## navigator.globalization.stringToDate

Parses a date formatted as a string, according to the client's user
preferences and calendar using the time zone of the client, and
returns the corresponding date object.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

### Description

Returns the date to the success callback with a `properties` object as
a parameter. That object should have the following properties:

- __year__: The four digit year. _(Number)_

- __month__: The month from (0-11). _(Number)_

- __day__: The day from (1-31). _(Number)_

- __hour__: The hour from (0-23). _(Number)_

- __minute__: The minute from (0-59). _(Number)_

- __second__: The second from (0-59). _(Number)_

- __millisecond__: The milliseconds (from 0-999), not available on all platforms. _(Number)_

The inbound `dateString` parameter should be of type `String`.

The `options` parameter is optional, and defaults to the following
values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

If there is an error parsing the date string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PARSING_ERROR`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this displays a
popup dialog with text similar to `month:8 day:25 year:2012`. Note
that the month integer is one less than the string, as the month
integer represents an array index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );


### Windows Phone 8 Quirks

- The `formatLength` option supports only `short` and `full` values.

## navigator.globalization.stringToNumber

Parses a number formatted as a string according to the client's user
preferences and returns the corresponding number.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

### Description

Returns the number to the `successCallback` with a `properties` object
as a parameter. That object should have a `value` property with a
`Number` value.

If there is an error parsing the number string, then the
`errorCallback` executes with a `GlobalizationError` object as a
parameter. The error's expected code is
`GlobalizationError.PARSING_ERROR`.

The `options` parameter is optional, and defaults to the following
values:

    {type:'decimal'}

The `options.type` can be `decimal`, `percent`, or `currency`.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 8

### Example

When the browser is set to the `en_US` locale, this should display a
popup dialog with text similar to `number: 1234.56`:

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );


## GlobalizationError

An object representing a error from the Globalization API.

### Properties

- __code__:  One of the following codes representing the error type _(Number)_
  - GlobalizationError.UNKNOWN_ERROR: 0
  - GlobalizationError.FORMATTING_ERROR: 1
  - GlobalizationError.PARSING_ERROR: 2
  - GlobalizationError.PATTERN_ERROR: 3
- __message__:  A text message that includes the error's explanation and/or details _(String)_

### Description

This object is created and populated by Cordova, and returned to a callback in the case of an error.

### Supported Platforms

- Amazon Fire OS
- Android
- iOS

### Example

When the following error callback executes, it displays a
popup dialog with the text similar to `code: 3` and `message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

