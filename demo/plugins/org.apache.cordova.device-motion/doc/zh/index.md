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

這個外掛程式提供了對設備的加速度計的訪問。 加速度計是動作感應器檢測到的更改 (*三角洲*) 在相對於當前的設備方向，在三個維度沿*x*、 *y*和*z*軸運動。

## 安裝

    cordova plugin add org.apache.cordova.device-motion
    

## 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   黑莓 10
*   火狐瀏覽器作業系統
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 方法

*   navigator.accelerometer.getCurrentAcceleration
*   navigator.accelerometer.watchAcceleration
*   navigator.accelerometer.clearWatch

## 物件

*   加速度

## navigator.accelerometer.getCurrentAcceleration

獲取當前加速沿*x*、 *y*和*z*軸。

這些加速度值將返回到 `accelerometerSuccess` 回呼函數。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

### 示例

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
    

### iOS 的怪癖

*   iOS 不會認識到在任何給定的點獲取當前加速度的概念。

*   你必須看加速和捕獲的資料在特定的時間間隔。

*   因此， `getCurrentAcceleration` 收益率從報告的最後一個值的函數 `watchAccelerometer` 調用。

## navigator.accelerometer.watchAcceleration

檢索該設備的當前 `Acceleration` 間隔時間定期，執行 `accelerometerSuccess` 回呼函數每次。 指定的時間間隔，以毫秒為單位通過 `acceleratorOptions` 物件的 `frequency` 參數。

返回的觀看 ID 引用加速度計的手錶時間間隔，並可以用 `navigator.accelerometer.clearWatch` 來停止看加速度計。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

*   **accelerometerOptions**： 具有以下可選的鍵的物件： 
    *   **頻率**： 經常如何檢索 `Acceleration` 以毫秒為單位。*（人數）*（預設值： 10000）

### 示例

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
    

### iOS 的怪癖

API 呼叫成功的回呼函數的時間間隔的要求，但到 40ms年之間設備限制所請求的範圍和 1000ms。 例如，如果請求的時間間隔為 3 秒，(3000ms) API 請求資料從設備每隔 1 秒，但只有執行成功回檔每隔 3 秒。

## navigator.accelerometer.clearWatch

停止看 `Acceleration` 引用的 `watchID` 參數。

    navigator.accelerometer.clearWatch(watchID);
    

*   **watchID**： 由返回的 ID`navigator.accelerometer.watchAcceleration`.

### 示例

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.accelerometer.clearWatch(watchID);
    

## 加速度

包含 `Accelerometer` 在時間中的特定點捕獲的資料。 加速度值包括引力的影響 (9.81 m/s ^2)，因此當設備謊言平面和麵朝上， *x*、 *y*，和*z*返回的值應該是 `` ， `` ，和`9.81`.

### 屬性

*   **x**： 在 X 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **y**： 在 y 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **z**： 在 Z 軸上的加速度量。（在 m/s ^2)*（人數）*
*   **時間戳記**： 創建時間戳記以毫秒為單位。*() DOMTimeStamp*