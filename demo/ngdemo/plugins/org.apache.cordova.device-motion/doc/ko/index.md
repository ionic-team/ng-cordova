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

# org.apache.cordova.device-motion

이 플러그인 장치의 속도계에 대 한 액세스를 제공합니다. 가 속도계 3 차원 *x*, *y*및 *z* 축 따라 현재 장치 방향 기준으로 이동 (*델타*) 변경 내용을 감지 하는 모션 센서입니다.

## 설치

    cordova plugin add org.apache.cordova.device-motion
    

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10
*   Firefox 운영 체제
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 메서드

*   navigator.accelerometer.getCurrentAcceleration
*   navigator.accelerometer.watchAcceleration
*   navigator.accelerometer.clearWatch

## 개체

*   가속

## navigator.accelerometer.getCurrentAcceleration

*X*, *y*및 *z* 축 따라 현재 가속도 얻을.

이 가속도 값에 반환 되는 `accelerometerSuccess` 콜백 함수.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

### 예를 들어

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

### iOS 단점

*   iOS는 어떤 주어진된 시점에서 현재 가속도의 개념을 인식 하지 못합니다.

*   가속을 감시 하며 데이터 캡처에 주어진 시간 간격.

*   따라서,는 `getCurrentAcceleration` 에서 보고 된 마지막 값을 생성 하는 함수는 `watchAccelerometer` 전화.

## navigator.accelerometer.watchAcceleration

검색 장치의 현재 `Acceleration` 일반 간격에서 실행는 `accelerometerSuccess` 콜백 함수 때마다. 통해 밀리초 단위로 간격을 지정 된 `acceleratorOptions` 개체의 `frequency` 매개 변수.

반환 된 ID 참조가 속도계의 시계 간격, 시청과 함께 사용할 수 있습니다 `navigator.accelerometer.clearWatch` 가 속도계를 보고 중지 합니다.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

*   **accelerometerOptions**: 다음 선택적 키 개체: 
    *   **주파수**: 검색 하는 `Acceleration` (밀리초)입니다. *(수)* (기본: 10000)

### 예를 들어

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

### iOS 단점

API 요청 간격 성공 콜백 함수를 호출 하지만 40ms 사이 장치에 요청의 범위를 제한 하 고 1000ms. 예를 들어 (3000ms) 3 초의 간격을 요청 하는 경우 API 마다 1 초 장치에서 데이터를 요청 하지만 성공 콜백을 3 초 마다 실행 됩니다.

## navigator.accelerometer.clearWatch

보고 중지는 `Acceleration` 에 의해 참조 되는 `watchID` 매개 변수.

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**: ID 반환`navigator.accelerometer.watchAcceleration`.

### 예를 들어

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## 가속

포함 `Accelerometer` 특정 시점에 캡처된 데이터가. 가속도 값 포함 중력의 효과 (9.81 m/s ^2) 때 장치 거짓말 평평 하 고 *x*, *y*, 최대 직면 하 고 *z* 값 반환 되어야 합니다 있도록, `` , `` , 그리고`9.81`.

### 속성

*   **x**: x 축에 가속의 금액. (m/s에서 ^2) *(수)*
*   **y**: y 축에 가속의 금액. (m/s에서 ^2) *(수)*
*   **z**: z 축의 가속도의 금액. (m/s에서 ^2) *(수)*
*   **타임 스탬프**: 생성 타임 스탬프 (밀리초)입니다. *(DOMTimeStamp)*