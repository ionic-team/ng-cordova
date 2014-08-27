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

이 플러그인 정보를 가져오고 사용자의 로캘, 언어 및 표준 시간대에 특정 작업을 수행 합니다. 로캘 및 언어의 차이점을 참고: 로캘 어떻게 숫자, 날짜 및 시간 표시 되는 제어 영역의 언어 어떤 언어 텍스트를 결정 하는 반면, 로캘 설정에 관계 없이 나타납니다. 종종 개발자 로캘 설정을 모두를 사용 하 여 하지만 거기에 아무 이유 없이 사용자 "영어"로 그녀의 언어를 설정할 수 없습니다 있지만 "프랑스어" 로캘을 영어 하지만 날짜, 시간, 등, 텍스트 표시 되도록 표시 됩니다 그들은 프랑스에. 불행히도, 대부분의 모바일 플랫폼 현재 만들지 않는다 이러한 설정 구분.

## 설치

    cordova plugin add org.apache.cordova.globalization
    

## 개체

*   GlobalizationError

## 메서드

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

클라이언트의 현재 언어에 대 한 BCP 47 언어 태그를 얻을.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

### 설명

BCP 47 규격 언어 식별자 태그를 반환 합니다는 `successCallback` 와 `properties` 개체를 매개 변수로 합니다. 있어야 해당 개체는 `value` 속성을 `String` 값.

언어, 점점 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en-US` 언어,이 텍스트와 함께 팝업 대화 상자를 표시 한다 `language: en-US` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

### 안 드 로이드 단점

*   ISO 639-1 두 자리 언어 코드, 대문자 ISO 3166-1 국가 코드와 하이픈으로 구분 된 variant를 반환 합니다. 예: "en", "en-US", "미국"

### Windows Phone 8 단점

*   반환 ISO 639-1 두 글자 언어 코드 및 ISO 3166-1 국가 코드의 "언어" 설정, 하이픈으로 구분 된 해당 지역 이체.
*   Note 지역 변종 "언어" 설정의 속성 이며 Windows Phone 관련 없는 "국가/지역" 설정에 의해 결정 되지.

## navigator.globalization.getLocaleName

클라이언트의 현재 로캘 설정에 대 한 BCP 47 호환 태그를 반환합니다.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

### 설명

BCP 47 준수 로캘 식별자 문자열을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `value` 속성을 `String` 값. 두 자리 소문자 언어 코드, 두 글자 대문자 국가 코드와 하이픈으로 분리 된 (지정 되지 않은) 변형 코드 로캘 태그 구성 됩니다.

로캘, 점점 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en-US` 로케일, 텍스트와 함께 팝업 대화 상자가 표시 됩니다`locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

### 안 드 로이드 단점

*   자바 구분 하지 않습니다 설정된 "언어"를 설정된 "로캘" 이므로이 방법은 기본적으로 동일`navigator.globalizatin.getPreferredLanguage()`.

### Windows Phone 8 단점

*   반환 ISO 639-1 두 글자 언어 코드 및 ISO 3166-1 국가 코드 지역 변형 하이픈으로 구분 된 "지역 포맷" 설정에 해당 합니다.

## navigator.globalization.dateToString

날짜를 반환 합니다 클라이언트의 로케일과 시간대에 따라 문자열로 서식이 지정 된.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

### 설명

서식이 지정 된 날짜를 반환 합니다 `String` 통해는 `value` 개체에서 액세스할 수 있는 속성을 매개 변수로 전달 되는`successCallback`.

인바운드는 `date` 매개 변수 유형 이어야 합니다`Date`.

날짜 서식을 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.FORMATTING_ERROR`.

`options`매개 변수는 선택적 이며 그것의 기본 값은:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는`full`.

`options.selector`수 있는 `date` , `time` 또는`date and time`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우는 `en_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다 `date: 9/25/2012 4:21PM` 기본 옵션을 사용 하 여:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

### Windows Phone 8 단점

*   `formatLength`만 지원 옵션 `short` 및 `full` 값.

## navigator.globalization.getCurrencyPattern

포맷 하 고 클라이언트의 사용자 환경 설정 및 ISO 4217 통화 부호에 따라 통화 값을 구문 분석 패턴 문자열을 반환 합니다.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

### 설명

패턴을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 해당 개체에는 다음과 같은 속성이 포함 되어야 합니다.

*   **패턴**: 통화 패턴 서식을 지정 하 여 통화 값을 구문 분석 합니다. 패턴에 따라 [유니코드 기술 표준 #35][1]. *(문자열)*

*   **코드**: ISO 4217 통화 코드 패턴. *(문자열)*

*   **분수**: 구문 분석 하 고 통화 서식을 사용 하 여 소수 자릿수의 수. *(수)*

*   **반올림**: 라운딩 때 구문 분석 및 서식 지정을 사용 하 여 증가 합니다. *(수)*

*   **10 진수**: 구문 분석 및 서식 지정에 사용할 소수점 기호가. *(문자열)*

*   **그룹화**: 구문 분석 및 서식 지정에 사용할 그룹화 기호. *(문자열)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

인바운드는 `currencyCode` 매개 변수 이어야 합니다는 `String` 의 ISO 4217 통화 코드, 예를 들어 '미화' 중 하나.

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.FORMATTING_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로캘 및 선택한 통화는 미국 달러,이 예제에서는 수행 결과를 유사한 텍스트와 팝업 대화 상자가 표시 됩니다:

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
    

예상된 결과:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## navigator.globalization.getDateNames

달의 이름 또는 클라이언트의 사용자 환경 설정 및 일정에 따라 매일의 배열을 반환합니다.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

### 설명

이름의 배열을 반환 합니다는 `successCallback` 와 `properties` 개체를 매개 변수로 합니다. 해당 개체를 포함 한 `value` 속성으로는 `Array` 의 `String` 값. 배열 기능 이름과 년 또는 선택한 옵션에 따라 일주일의 첫날 첫 번째 달에서 시작.

이름을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN_ERROR`.

`options`매개 변수는 선택적 이며 그것의 기본 값은:

    {type:'wide', item:'months'}
    

값 `options.type` 일 수 있다 `narrow` 또는`wide`.

값 `options.item` 일 수 있다 `months` 또는`days`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 예에서는 표시 12 팝업 대화 상자, 텍스트 비슷한 한달에 하나 시리즈 `month: January` :

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

포맷 하 고 클라이언트의 사용자 환경 설정에 따라 날짜 구문 분석 패턴 문자열을 반환 합니다.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

### 설명

패턴을 반환 합니다 `successCallback` . 매개 변수로 전달 된 개체에는 다음 속성이 포함 되어 있습니다.

*   **패턴**: 포맷 하 고 날짜를 구문 분석할 날짜 및 시간 패턴. 패턴에 따라 [유니코드 기술 표준 #35][1]. *(문자열)*

*   **시간대**: 클라이언트에 표준 시간대의 약식된 이름. *(문자열)*

*   **utc_offset**: 클라이언트의 시간대와 세계시 간의 초에서 현재 차이. *(수)*

*   **dst_offset**: 클라이언트의 비 일광 절약 간격 (초)에 현재 일광 절약 시간제 오프셋의 시간대와 클라이언트의 일광 절약의 시간대. *(수)*

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로 합니다. 오류의 예상 된 코드는`GlobalizationError.PATTERN_ERROR`.

`options`매개 변수는 선택적 이며 기본값은 다음 값:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는 `full` . `options.selector`수 있는 `date` , `time` 또는`date and
time`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로캘,이 예제에서는 같은 텍스트와 함께 팝업 대화 상자를 표시 `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

### Windows Phone 8 단점

*   `formatLength`만 지원 `short` 및 `full` 값.

*   `pattern`에 대 한 `date and time` 패턴 전체 datetime 형식만 반환 합니다.

*   `timezone`풀 타임 영역 이름을 반환 합니다.

*   `dst_offset`속성은 지원 되지 않으며 항상 반환 0.

## navigator.globalization.getFirstDayOfWeek

클라이언트의 사용자 환경 설정 및 일정에 따라 일주일의 첫 날을 반환합니다.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

### 설명

주일의 일 1 일요일으로 간주 됩니다 1에서 시작 하는 번호가 지정 됩니다. 하루에 반환 합니다는 `successCallback` 와 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `value` 속성을 `Number` 값.

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## navigator.globalization.getNumberPattern

포맷 하 고 클라이언트의 사용자 환경 설정에 따라 숫자를 구문 분석할 패턴 문자열을 반환 합니다.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

### 설명

패턴을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 해당 개체에는 다음 속성이 포함 되어 있습니다.

*   **패턴**: 포맷 하 고 숫자를 구문 분석할 숫자 패턴. 패턴에 따라 [유니코드 기술 표준 #35][1]. *(문자열)*

*   **기호**: 때 서식 지정 및 구문 분석, % 또는 통화 기호 등을 사용 하 여 기호. *(문자열)*

*   **분수**: 구문 분석 하 고 숫자 서식을 사용 하 여 소수 자릿수의 수. *(수)*

*   **반올림**: 라운딩 때 구문 분석 및 서식 지정을 사용 하 여 증가 합니다. *(수)*

*   **양수**: 양수 때 구문 분석 및 서식 지정에 사용할 기호. *(문자열)*

*   **음수**: 음수 때 구문 분석 및 서식 지정에 사용할 기호. *(문자열)*

*   **10 진수**: 구문 분석 및 서식 지정에 사용할 소수점 기호가. *(문자열)*

*   **그룹화**: 구문 분석 및 서식 지정에 사용할 그룹화 기호. *(문자열)*

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.PATTERN_ERROR`.

`options`매개 변수는 선택적 이며 기본값은:

    {유형: '10 진수'}
    

`options.type`수 있는 `decimal` , `percent` , 또는`currency`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 수행 결과를 유사한 텍스트 팝업 대화 상자를 표시 합니다:

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
    

결과:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

### Windows Phone 8 단점

*   `pattern`속성은 지원 되지 않습니다, 및 retuens는 빈 문자열.

*   `fraction`속성은 지원 되지 않습니다, 그리고 반환 0.

## navigator.globalization.isDayLightSavingsTime

일광 절약 시간이 클라이언트의 표준 시간대 및 달력을 사용 하 여 특정된 날짜에 대 한 효과 인지 표시 합니다.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

### 설명

나타냅니다 여부 일광 절약 시간 적용 하는 `successCallback` 와 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `dst` 속성을 `Boolean` 값. A `true` 값 나타냅니다 일광 절약 시간이 특정된 날짜에 대해 적용 되 고 `false` 하지 않음을 나타냅니다.

인바운드 매개 변수는 `date` 형식 이어야 합니다`Date`.

날짜 읽기 오류가 발생 하는 경우 다음 `errorCallback` 를 실행 합니다. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

여름 동안에, 브라우저 DST 설정 표준 시간대로 설정 되어 있으면이 텍스트 비슷한 팝업 대화 상자를 표시 해야 하 고 `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## navigator.globalization.numberToString

클라이언트의 사용자 환경 설정에 따라 문자열 형식으로 숫자를 반환 합니다.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

### 설명

서식이 지정 된 숫자 문자열을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `value` 속성을 `String` 값.

번호, 서식 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.FORMATTING_ERROR`.

`options`매개 변수는 선택적 이며 그것의 기본 값은:

    {유형: '10 진수'}
    

`options.type`'소수', '%' 또는 '통화' 될 수 있습니다.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다 `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## navigator.globalization.stringToDate

클라이언트의 사용자 환경 설정 및 달력 클라이언트의 표준 시간대를 사용 하 여 문자열 형식으로 날짜를 구문 분석 하 고 해당 하는 date 개체를 반환 합니다.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

### 설명

날짜와 함께 성공 콜백 반환 된 `properties` 개체를 매개 변수로. 해당 개체는 다음 속성이 있어야 합니다.

*   **년**: 4 자리 연도. *(수)*

*   **달**: 달 (0-11). *(수)*

*   **주**: (1-31)에서 하루. *(수)*

*   **시간**: 1 시간 (0-23). *(수)*

*   **분**: 분 (0-59)에서. *(수)*

*   **두 번째**: (0-59)에서 두 번째. *(수)*

*   **밀리초**: 모든 플랫폼에서 사용할 수 없습니다 (0-999)에서 밀리초. *(수)*

인바운드는 `dateString` 매개 변수 유형 이어야 합니다`String`.

`options`매개 변수는 선택적 이며 기본값은 다음 값:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는 `full` . `options.selector`수 있는 `date` , `time` 또는`date and
time`.

날짜 문자열을 구문 분석 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.PARSING_ERROR`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다 `month:8 day:25 year:2012` . 유의 정수는 한 달 미만의 문자열, 달 정수로 나타내는 배열 인덱스.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

### Windows Phone 8 단점

*   `formatLength`만 지원 옵션 `short` 및 `full` 값.

## navigator.globalization.stringToNumber

클라이언트의 사용자 환경 설정에 따라 문자열 형식으로 번호를 구문 분석 하 고 해당 번호를 반환 합니다.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

### 설명

번호를 반환 합니다는 `successCallback` 와 `properties` 개체를 매개 변수로 합니다. 있어야 해당 개체는 `value` 속성을 `Number` 값.

숫자 문자열을 구문 분석 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.PARSING_ERROR`.

`options`매개 변수는 선택적 이며 기본값은 다음 값:

    {유형: '10 진수'}
    

`options.type`수 있는 `decimal` , `percent` , 또는`currency`.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS
*   Windows Phone 8

### 예를 들어

브라우저 설정 된 경우에 `en_US` 로케일,이 텍스트와 유사한 팝업 대화 상자를 표시 한다 `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## GlobalizationError

세계화 API에서 오류를 나타내는 개체입니다.

### 속성

*   **코드**: 오류 형식을 나타내는 다음 코드 중 하나 *(수)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **메시지**: 오류 설명을 포함 및/또는 *(문자열)를* 자세히 설명 하는 텍스트 메시지

### 설명

이 개체와 코르도바, 의해 만들어지고 오류 경우 콜백 반환.

### 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   iOS

### 예를 들어

유사한 텍스트와 팝업 대화 상자가 표시 됩니다 다음 오류 콜백 실행 되 면 `code: 3` 와`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };