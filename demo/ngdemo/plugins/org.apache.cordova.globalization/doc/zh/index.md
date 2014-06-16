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

這個外掛程式獲取的資訊，並執行操作特定于使用者的地區設定、 語言和時區。 注意到地區設定和語言之間的區別： 數位、 日期和時間的顯示方式為一個區域，雖然語言確定什麼語言文本的地區設定控制項顯示為，與地區設定無關。 開發人員經常使用的地區設定來設置這兩個設置，但使用者不能將她的語言設置為"英語"沒有理由但地區設定為"法語"這樣的文本顯示在英語但日期、 時間等，同時會顯示他們是在法國。 不幸的是，大多數移動平臺目前不做這些設置之間的區別。

## 安裝

    cordova plugin add org.apache.cordova.globalization
    

## 物件

*   GlobalizationError

## 方法

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

獲取用戶端的當前語言 BCP 47 語言標記。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### 說明

返回的 BCP 47 相容的語言識別項標記 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。

如果有出錯的語言，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en-US` 的語言，這應顯示彈出式功能表對話方塊的文本與 `language: en-US` ：

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### Android 的怪癖

*   返回的 ISO 639-1 雙字母語言代碼、 大寫 ISO 3166-1 國家代碼和由連字號分隔的變形。例子："en"、"EN-US"，"美國"

### Windows Phone 8 怪癖

*   返回 ISO 639-1 兩個字母語言代碼和相應的設置，由連字號分隔的"語言"區域變形的 ISO 3166-1 國家代碼。
*   請注意的區域變體是的"語言"設置的屬性，並不由 Windows Phone 上的無關的"國家/地區"設置決定的。

## navigator.globalization.getLocaleName

返回用戶端的目前範圍設置的 BCP 47 符合標記。

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### 說明

返回到的 BCP 47 符合地區設定識別碼字串 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。 Locale 標記將包括兩個字母小寫語言代碼、 國家代碼兩個字母大寫和 （未指定） 變數的代碼，由連字號分隔。

如果有出錯的地區設定，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en-US` 的地區設定，這將顯示彈出式對話方塊中的文本`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### Android 的怪癖

*   JAVA 不區分設置"語言"和設置的"地區設定"，所以這種方法基本上是相同`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 怪癖

*   返回 ISO 639-1 兩個字母語言代碼和區域 variant 類型的值對應于"區域格式"設置，以連字號分隔的 ISO 3166-1 國家代碼。

## navigator.globalization.dateToString

返回一個日期格式設置為一個字串，根據用戶端的地區設定和時區。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### 說明

返回格式化的日期 `String` 通過 `value` 屬性可從該物件作為一個參數傳遞`successCallback`.

入站 `date` 參數的類型應為`Date`.

如果有錯誤格式日期，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING_ERROR`.

`options`參數是可選的且其預設值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或`full`.

`options.selector`可以是 `date` ， `time` 或`date and time`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

如果瀏覽器設置為 `en_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `date: 9/25/2012 4:21PM` 使用預設選項：

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 怪癖

*   `formatLength`選項僅支援 `short` 和 `full` 的值。

## navigator.globalization.getCurrencyPattern

返回一個模式字串格式化和分析根據用戶端的使用者首選項和 ISO 4217 貨幣代碼貨幣值。

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### 說明

返回到模式 `successCallback` 與 `properties` 物件作為參數。該物件應包含以下屬性：

*   **模式**： 要格式化和分析貨幣值的貨幣模式。 模式按照[Unicode 技術標準 #35][1]。 *（字串）*

*   **代碼**： 模式的 ISO 4217 貨幣代碼。*（字串）*

*   **分數**： 小數位數解析和貨幣的格式時要使用的數量。*（人數）*

*   **舍**： 舍遞增時分析和格式設置使用。*（人數）*

*   **十進位**： 小數點符號用於分析和格式設置。*（字串）*

*   **分組**： 分組符號用於分析和格式設置。*（字串）*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

入站 `currencyCode` 參數應該是 `String` 的 ISO 4217 貨幣代碼，例如 '美元' 之一。

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS

### 示例

當瀏覽器設置為 `en_US` 地區設定和所選的幣種是美元，本示例將顯示一個彈出對話方塊與類似的結果，請按照操作的文本：

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
    

預期的結果：

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

返回一個陣列的幾個月的名稱或一周內，根據用戶端的使用者首選項和日曆天。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### 說明

返回的陣列的名稱為 `successCallback` 與 `properties` 物件作為參數。 該物件包含 `value` 屬性與 `Array` 的 `String` 的值。 從任一開始一年或一周內，根據所選的選項的第一天中的第一個月的陣列功能名稱。

如果有錯誤取得名字，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN_ERROR`.

`options`參數是可選的且其預設值：

    {type:'wide', item:'months'}
    

值 `options.type` 可以是 `narrow` 或`wide`.

值 `options.item` 可以是 `months` 或`days`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，本示例顯示一系列的十二個彈出對話方塊，每個月，與類似的文本一個 `month: January` ：

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

返回一個模式字串格式化和解析日期根據用戶端的使用者首選項。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### 說明

返回到模式 `successCallback` 。作為一個參數傳遞的物件包含以下屬性：

*   **模式**： 要格式化和解析日期的日期和時間模式。 模式按照[Unicode 技術標準 #35][1]。 *（字串）*

*   **時區**： 在用戶端上的時區的縮寫的名稱。*（字串）*

*   **utc_offset**： 用戶端的時區和協調通用時間當前區別秒。*（人數）*

*   **dst_offset**： 在用戶端的夏之間的秒數的當前夏令時偏移量的時區和用戶端的夏時制儲蓄的時區。*（人數）*

如果您獲取該模式，錯誤 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PATTERN_ERROR`.

`options`參數是可選的並且預設為以下值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，此示例顯示彈出式對話方塊中的文本如 `pattern: M/d/yyyy h:mm a` ：

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 怪癖

*   `formatLength`僅支援 `short` 和 `full` 的值。

*   `pattern`的 `date and time` 模式返回只完整的日期時間格式。

*   `timezone`返回全時區名稱。

*   `dst_offset`屬性不受支援，並且總是返回零。

## navigator.globalization.getFirstDayOfWeek

返回用戶端的使用者首選項和日曆星期的第一天。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### 說明

周中天的編號 1，從開始位置 1 假定是星期日。 返回到天 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `Number` 的值。

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.UNKNOWN_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

返回一個模式字串格式化和分析數位根據用戶端的使用者首選項。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### 說明

返回到模式 `successCallback` 與 `properties` 物件作為參數。該物件包含以下屬性：

*   **模式**： 要格式化和分析數位的數位模式。 模式按照[Unicode 技術標準 #35][1]。 *（字串）*

*   **符號**： 符號格式設置和分析過程中，如 %或貨幣符號時使用。*（字串）*

*   **分數**： 小數位數解析和設置數位格式時要使用的數量。*（人數）*

*   **舍**： 舍遞增時分析和格式設置使用。*（人數）*

*   **積極**： 積極數位分析和格式時要使用的符號。*（字串）*

*   **負面**： 要為負數時分析和格式設置使用的符號。*（字串）*

*   **十進位**： 小數點符號用於分析和格式設置。*（字串）*

*   **分組**： 分組符號用於分析和格式設置。*（字串）*

如果有錯誤獲得該模式，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PATTERN_ERROR`.

`options`參數是可選的並且預設值：

    {類型： '十進位'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，此時應顯示一個彈出對話方塊與類似的結果，請按照操作的文本：

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
    

### Windows Phone 8 怪癖

*   `pattern`不支援屬性，和 retuens 為空字串。

*   `fraction`不支援屬性，並返回零。

## navigator.globalization.isDayLightSavingsTime

指示是否夏令時生效是給定日期使用用戶端的時區和日曆。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### 說明

指示是否夏令時生效的是 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `dst` 屬性與 `Boolean` 的值。 A `true` 值指示夏令時實際上是對給定的日期，和 `false` 指示它不是。

入站的參數 `date` 的類型應為`Date`.

如果有錯誤讀取日期，然後 `errorCallback` 執行。錯誤的期望的代碼`GlobalizationError.UNKNOWN_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

在夏天的時候，如果瀏覽器被設置為啟用 DST 時區，這應顯示一個彈出式對話方塊與類似的文本和 `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

返回一個數位的格式設置為根據用戶端的使用者首選項的字串。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### 說明

返回到帶格式的數位字串 `successCallback` 與 `properties` 物件作為參數。 物件應具有 `value` 屬性與 `String` 的值。

如果有錯誤格式數，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.FORMATTING_ERROR`.

`options`參數是可選的且其預設值：

    {類型： '十進位'}
    

`options.type`可以是 '十進位'、 '%' 或 '貨幣'。

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `number: 3.142` ：

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

分析日期格式設置為一個字串，根據用戶端的使用者首選項和日曆使用時區的用戶端，並返回對應的 date 物件。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### 說明

返回的日期與成功回檔到 `properties` 物件作為參數。該物件應具有以下屬性：

*   **一年**： 將四個數字的年份。*（人數）*

*   **月**： 從 （0-11) 月。*（人數）*

*   **一天**： 從 （1-31) 天。*（人數）*

*   **小時**： 從 (0-23) 小時。*（人數）*

*   **分鐘**： 從 (0-59) 分鐘。*（人數）*

*   **第二**： 的第二位 (0-59)。*（人數）*

*   **毫秒**： 的毫秒數 （從 0-999)，在所有平臺上不可用。*（人數）*

入站 `dateString` 參數的類型應為`String`.

`options`參數是可選的並且預設為以下值：

    {formatLength: '短'，選擇器： 日期和時間}
    

`options.formatLength`可以是 `short` ， `medium` ， `long` ，或 `full` 。 `options.selector`可以是 `date` ， `time` 或`date and
time`.

如果有錯誤解析日期字串，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PARSING_ERROR`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，這將顯示一個彈出對話方塊與類似的文本 `month:8 day:25 year:2012` 。 請注意，整數是一個月比少的字串，作為月整數代表陣列索引。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 怪癖

*   `formatLength`選項僅支援 `short` 和 `full` 的值。

## navigator.globalization.stringToNumber

分析的數位格式化為根據用戶端的使用者首選項的字串並返回相應的號碼。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### 說明

返回到數 `successCallback` 與 `properties` 物件作為參數。物件應具有 `value` 屬性與 `Number` 的值。

如果有錯誤解析的字串，然後 `errorCallback` 執行與 `GlobalizationError` 物件作為參數。 錯誤的期望的代碼`GlobalizationError.PARSING_ERROR`.

`options`參數是可選的並且預設為以下值：

    {類型： '十進位'}
    

`options.type`可以是 `decimal` ， `percent` ，或`currency`.

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS
*   Windows Phone 8

### 示例

當瀏覽器設置為 `en_US` 的地區設定，此時應顯示與文本類似于彈出式對話方塊中 `number: 1234.56` ：

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

從全球化 API 表示一個錯誤的物件。

### 屬性

*   **代碼**： 表示錯誤類型的以下代碼之一 *（人數）* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **消息**： 一條文本消息，包括錯誤的解釋，和/或詳細說明*（字串）*

### 說明

此物件創建和填充的科爾多瓦，並返回到出現錯誤時的回檔。

### 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   iOS

### 示例

以下錯誤回檔執行時，它會顯示彈出式對話方塊中的文本類似于 `code: 3` 和`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };