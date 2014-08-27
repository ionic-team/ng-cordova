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

このプラグインは、情報を取得し、ユーザーのロケール、言語、およびタイム ゾーンに固有の操作を実行します。 ロケールと言語の違いに注意してください: ロケール コントロール番号、日付、および時刻の表示方法、地域の言語で決まりますがどのような言語のテキストの間のように、ロケールの設定とは無関係です。 多くの開発者を使用してロケール設定両方、しかしユーザーは「英語」彼女言語を設定できませんでした理由はない"フランス語"ロケールので英語が日付時刻等でテキストが表示されますが表示されるフランスでは。 残念ながら、ほとんどのモバイルプラット フォーム現在行いませんこれらの設定の間の区別。

## インストール

    cordova plugin add org.apache.cordova.globalization
    

## オブジェクト

*   GlobalizationError

## メソッド

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

クライアントの現在の言語の BCP 47 言語タグを取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### 説明

BCP 47 準拠の言語識別子タグを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

言語を取得中にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en-US` 言語、これで、テキストとポップアップ ダイアログを表示 `language: en-US` ：

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Android の癖

*   ISO 639-1 の 2 文字の言語コード、大文字の ISO 3166-1 国名コードおよびハイフンで区切られたバリアントを返します。例:"en"、"EN-US"、「米国」

### Windows Phone 8 癖

*   返します ISO 639-1 の 2 文字言語コードと設定、ハイフンで区切られた「言語」に対応する地域バリアントの ISO 3166-1 国名コード。
*   地域バリアント「言語」の設定のプロパティは Windows Phone に無関係な"国/地域] の設定によって決定できないことに注意してください。

## navigator.globalization.getLocaleName

クライアントの現在のロケール設定 BCP 47 準拠タグを返します。

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### 説明

BCP 47 準拠ロケール識別子文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。 ロケール タグは 2 文字の小文字の言語コード、大文字 2 文字の国コード、ハイフンで区切られた (不特定) のバリアント型コードで構成されます。

ロケールを取得中にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en-US` ロケール、テキストとポップアップ ダイアログが表示されます`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Android の癖

*   Java は区別されません設定「言語」と「ロケール設定、」ので、このメソッドは、本質的に同じ`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 癖

*   返します ISO 639-1 の 2 文字言語コードおよびハイフンで区切られた「地域形式」の設定に対応する地域バリアントの ISO 3166-1 国名コード。

## navigator.globalization.dateToString

日付を返します、クライアントのロケールおよびタイムゾーンに従って文字列として書式設定されます。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### 説明

書式設定された日付を返します `String` を介して、 `value` にパラメーターとして渡されたオブジェクトからアクセス可能なプロパティ、`successCallback`.

受信 `date` パラメーター型である必要があります`Date`.

場合は、日付の書式設定エラーがあるし、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または`full`.

`options.selector`することができます `date` 、 `time` または`date and time`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザー設定されている場合、 `en_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `date: 9/25/2012 4:21PM` 既定のオプションを使用して。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。

## navigator.globalization.getCurrencyPattern

書式設定および通貨の値によると、クライアントのユーザーの基本設定と ISO 4217 通貨コードを解析するパターン文字列を返します。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### 説明

パターンを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティを含める必要があります。

*   **パターン**: 通貨パターンを書式設定および通貨の値を解析します。 パターンは、 [Unicode 技術標準 #35][1]に従ってください。 *(文字列)*

*   **コード**: パターンの ISO 4217 通貨コード。*(文字列)*

*   **分数**: 解析および通貨を書式設定するときに使用する小数部の桁の数。*(数)*

*   **丸め**: 解析および書式設定するときに使用するインクリメントに丸め。*(数)*

*   **10 進数**: 解析および書式設定を使用する小数点の記号。*(文字列)*

*   **グループ**: 解析および書式設定を使用する区切り記号。*(文字列)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

受信した `currencyCode` パラメーターをする必要があります、 `String` 、ISO 4217 通貨コードは、たとえば 'USD' のいずれかの。

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS

### 例

ブラウザーに設定すると、 `en_US` ロケールと、選択した通貨は米国ドルで、この例は次の結果のようなテキストとポップアップ ダイアログを表示します。

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
    

期待される結果:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

月の名前またはクライアントのユーザーの好みやカレンダーに応じて曜日の配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### 説明

名前の配列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが含まれています、 `value` プロパティ、 `Array` の `String` の値。 年または選択したオプションに応じて、週の最初の日の最初の月のいずれかから始まってアレイ機能の名前。

名前の取得エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {type:'wide', item:'months'}
    

値 `options.type` することができます `narrow` または`wide`.

値 `options.item` することができます `months` または`days`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` ロケール、この例の表示 12 ポップアップ ダイアログ ボックスのようなテキストで、毎月のシリーズ `month: January` :

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

クライアントのユーザーの設定に従った日付を解析するパターン文字列を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### 説明

パターンを返します、 `successCallback` 。パラメーターとして渡されたオブジェクトには、次のプロパティが含まれています。

*   **パターン**: 書式し、日付を解析する日付と時刻のパターン。 パターンは、 [Unicode 技術標準 #35][1]に従ってください。 *(文字列)*

*   **タイムゾーン**: クライアントのタイム ゾーンの省略名。*(文字列)*

*   **とおりです。**: クライアントのタイム ゾーンと世界協定時刻間の秒で現在の差異。*(数)*

*   **dst_offset**： クライアントの非夏時間 (秒単位) は、現在の夏時間オフセットのタイムゾーンとクライアントの夏時間保存のタイム ゾーン。*(数)*

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PATTERN_ERROR`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` ロケール、例など、テキストとポップアップ ダイアログを表示します `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 癖

*   `formatLength`のみをサポートしています `short` と `full` の値。

*   `pattern`の `date and time` パターンは完全な datetime 形式のみを返します。

*   `timezone`完全なタイム ゾーン名を返します。

*   `dst_offset`プロパティはサポートされていませんし、常に 0 を返します。

## navigator.globalization.getFirstDayOfWeek

よると、クライアントのユーザー設定カレンダー週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### 説明

週の日 1 日曜日であると見なされます、1 から始まる番号が付けられます。 曜日を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `Number` 値。

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.UNKNOWN_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` のロケールのようなテキストとポップアップ ダイアログが表示されます`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

クライアントのユーザーの設定に従って数値を解析するパターン文字列を返します。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### 説明

パターンを返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトには、次のプロパティが含まれています。

*   **パターン**: 番号のパターンを書式設定および解析の数字。 パターンは、 [Unicode 技術標準 #35][1]に従ってください。 *(文字列)*

*   **記号**: 書式設定と解析、パーセントや通貨記号などのときに使用するシンボル。*(文字列)*

*   **分数**: 解析および数値を書式設定するときに使用する小数部の桁の数。*(数)*

*   **丸め**: 解析および書式設定するときに使用するインクリメントに丸め。*(数)*

*   **正**： 正の数の解析および書式設定するときに使用する記号。*(文字列)*

*   **負**: 負の数の解析および書式設定するときに使用する記号。*(文字列)*

*   **10 進数**: 解析および書式設定を使用する小数点の記号。*(文字列)*

*   **グループ**: 解析および書式設定を使用する区切り記号。*(文字列)*

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PATTERN_ERROR`.

`options`パラメーターが省略可能であり、既定値。

    {0} 型: 'decimal'}
    

`options.type`することができます `decimal` 、 `percent` 、または`currency`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` のロケールに従って結果のようなテキストとポップアップ ダイアログが表示されます。

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
    

結果:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 癖

*   `pattern`プロパティはサポートされていませんと retuens、空の文字列。

*   `fraction`プロパティはサポートされていません、0 を返します。

## navigator.globalization.isDayLightSavingsTime

夏時間の時間が、クライアントのタイム ゾーンとカレンダーを使用して特定の日付に対して有効かどうかを示します。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### 説明

夏時間が有効にするかどうかを示します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `dst` を持つプロパティ、 `Boolean` 値。 A `true` 値は、夏時間の時間が指定した日付のために有効であることを示しますと `false` がないことを示します。

受信パラメーター `date` 型である必要があります`Date`.

日付を読み取り中にエラーがある場合、 `errorCallback` を実行します。予想されるエラーコードです。`GlobalizationError.UNKNOWN_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

夏の間、これでのようなテキストとポップアップ ダイアログを表示するブラウザーは、DST が有効なタイム ゾーンに設定されている場合と `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

クライアントのユーザーの設定に従って文字列として書式設定された数を返します。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### 説明

番号の書式設定された文字列を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `value` を持つプロパティ、 `String` 値。

番号、書式設定エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {0} 型: 'decimal'}
    

`options.type`'Decimal'、'%' または '通貨' にすることができます。

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `number: 3.142` ：

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

クライアントのユーザーの基本設定や、クライアントのタイム ゾーンを使用して予定表によると、文字列として書式設定された日付を解析し、対応する日付オブジェクトを返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### 説明

日付の成功時のコールバックを返します、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティが必要です。

*   **年**： 4 桁の年。*(数)*

*   **月**: (0-11) から 1 カ月。*(数)*

*   **日**: 日 (1 から 31)。*(数)*

*   **時間**: 時間 (0-23) から。*(数)*

*   **分**: (0-59） から分です。*(数)*

*   **2 番目**: (0-59） から 2 番目。*(数)*

*   **ミリ秒**： 時間をミリ秒単位 (0 ～ 999) まですべてのプラットフォームでは利用できません。*(数)*

受信 `dateString` パラメーター型である必要があります`String`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

日付文字列の解析エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PARSING_ERROR`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `month:8 day:25 year:2012` 。 注意： 整数は 1 ヶ月未満の文字列、月整数として配列のインデックスを表します。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。

## navigator.globalization.stringToNumber

クライアントのユーザーの設定に従って文字列として書式設定された数を解析し、対応する番号を返します。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### 説明

番号を返します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。そのオブジェクトが必要な `value` を持つプロパティ、 `Number` 値。

数値文字列の解析エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PARSING_ERROR`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {0} 型: 'decimal'}
    

`options.type`することができます `decimal` 、 `percent` 、または`currency`.

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS
*   Windows Phone 8

### 例

ブラウザーに設定すると、 `en_US` ロケール、これのようなテキストとポップアップ ダイアログを表示する必要があります `number: 1234.56` ：

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

グローバリゼーション API からエラーを表すオブジェクト。

### プロパティ

*   **コード**: エラーの種類を表す次のコードの 1 つ *(数)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **メッセージ**: エラーの説明が含まれていますおよび/または*(文字列)*の詳細をテキスト メッセージ

### 説明

このオブジェクトが作成され、コルドバ、によって移入エラーの場合のコールバックに返されます。

### サポートされているプラットフォーム

*   アマゾン火 OS
*   アンドロイド
*   iOS

### 例

次のエラー コールバックを実行するのようなテキストとポップアップ ダイアログが表示されます `code: 3` と`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };