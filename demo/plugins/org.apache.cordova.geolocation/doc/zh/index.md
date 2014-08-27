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

# org.apache.cordova.geolocation

這個外掛程式提供了有關該設備的位置，例如緯度和經度資訊。 常見的位置資訊來源包括全球定位系統 (GPS) 和網路信號，如 IP 位址、 RFID、 WiFi 和藍牙 MAC 位址和 GSM/CDMA 儲存格 Id 從推斷出的位置。 沒有任何保證，API 返回設備的實際位置。

此 API 基於[W3C 地理定位 API 規範][1]，並只執行已經不提供實現的設備上。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**警告**： 地理定位資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論這款應用程式如何使用地理定位資料，資料是否共用它的任何其他締約方和的資料 （例如，粗、 細，ZIP 代碼級別，等等） 的精度水準。 地理定位資料一般認為是敏感，因為它能揭示使用者的下落以及如果存儲，他們的旅行的歷史。 因此，除了應用程式的隱私權原則，您應強烈考慮之前應用程式訪問地理定位資料 （如果設備作業系統不會這樣做已經) 提供在時間的通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 有關詳細資訊，請參閱隱私指南。

## 安裝

    cordova plugin add org.apache.cordova.geolocation
    

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

*   navigator.geolocation.getCurrentPosition
*   navigator.geolocation.watchPosition
*   navigator.geolocation.clearWatch

## 物件 （唯讀）

*   Position
*   PositionError
*   Coordinates

## navigator.geolocation.getCurrentPosition

返回設備的當前位置到 `geolocationSuccess` 回檔與 `Position` 物件作為參數。 如果有錯誤， `geolocationError` 回檔通過 `PositionError` 物件。

    navigator.geolocation.getCurrentPosition （geolocationSuccess，[geolocationError] [geolocationOptions]) ；
    

### 參數

*   **geolocationSuccess**： 傳遞當前位置的回檔。

*   **geolocationError**： *（可選）*如果錯誤發生時執行的回檔。

*   **geolocationOptions**： *（可選）*地理定位選項。

### 示例

    onSuccess 回檔 / / 此方法接受一個位置的物件，它包含 / / 目前的 GPS 座標 / / var onSuccess = function(position) {警報 (' 緯度： '+ position.coords.latitude + \n +' 經度： '+ position.coords.longitude + '\n' +' 海拔高度： '+ position.coords.altitude + \n +' 準確性： '+ position.coords.accuracy + '\n' +' 海拔高度準確性： '+ position.coords.altitudeAccuracy + '\n' +' 標題： '+ position.coords.heading + \n +' 速度： '+ position.coords.speed + '\n' +' 時間戳記： ' + position.timestamp + \n) ；} ；onError 回檔接收一個 PositionError 物件 / / 函數 onError(error) {警報 (' 代碼： '+ error.code + '\n' +' 消息： ' + error.message + \n);}navigator.geolocation.getCurrentPosition (onSuccess，onError) ；
    

## navigator.geolocation.watchPosition

當檢測到更改位置返回該設備的當前的位置。 當設備中檢索一個新的位置， `geolocationSuccess` 回檔執行與 `Position` 物件作為參數。 如果有錯誤， `geolocationError` 回檔執行與 `PositionError` 物件作為參數。

    var watchId = navigator.geolocation.watchPosition （geolocationSuccess，[geolocationError] [geolocationOptions]) ；
    

### 參數

*   **geolocationSuccess**： 傳遞當前位置的回檔。

*   **geolocationError**： （可選） 如果錯誤發生時執行的回檔。

*   **geolocationOptions**： （可選） 地理定位選項。

### 返回

*   **字串**： 返回引用的觀看位置間隔的表 id。 應與一起使用的表 id `navigator.geolocation.clearWatch` 停止了觀看中位置的更改。

### 示例

    onSuccess 回檔 / / 此方法接受一個 '立場' 物件，其中包含 / / 當前 GPS 座標 / / 函數 onSuccess(position) {var 元素 = document.getElementById('geolocation') ；element.innerHTML = '緯度:' + position.coords.latitude + '< br / >' +' 經度: '+ position.coords.longitude +' < br / >' + ' < hr / >' + element.innerHTML;} / / onError 回檔接收一個 PositionError 物件 / / 函數 onError(error) {警報 (' 代碼： '+ error.code + '\n' +' 消息： ' + error.message + \n);}如果沒有更新收到每隔 30 秒選項： 將引發錯誤。
    var watchID = navigator.geolocation.watchPosition （onSuccess，onError，{超時： 30000});
    

## geolocationOptions

若要自訂的地理定位檢索的可選參數`Position`.

    {maximumAge: 3000，超時： 5000，enableHighAccuracy: true} ；
    

### 選項

*   **enableHighAccuracy**： 提供應用程式需要最佳的可能結果的提示。 預設情況下，該設備將嘗試檢索 `Position` 使用基於網路的方法。 將此屬性設置為 `true` 告訴要使用更精確的方法，如衛星定位的框架。 *(布林值)*

*   **超時**： 時間 (毫秒) 從調用傳遞，允許的最大長度 `navigator.geolocation.getCurrentPosition` 或 `geolocation.watchPosition` 直到相應的 `geolocationSuccess` 回檔執行。 如果 `geolocationSuccess` 不會在此時間內調用回檔 `geolocationError` 傳遞回檔 `PositionError.TIMEOUT` 錯誤代碼。 (請注意，與一起使用時 `geolocation.watchPosition` 、 `geolocationError` 的時間間隔可以調用回檔每 `timeout` 毫秒!)*（人數）*

*   **maximumAge**： 接受其年齡大於指定以毫秒為單位的時間沒有緩存的位置。*（人數）*

### Android 的怪癖

Android 2.x 模擬器不返回地理定位結果除非 `enableHighAccuracy` 選項設置為`true`.

## navigator.geolocation.clearWatch

再看對所引用的設備的位置更改為 `watchID` 參數。

    navigator.geolocation.clearWatch(watchID) ；
    

### 參數

*   **watchID**： 的 id `watchPosition` 清除的時間間隔。（字串）

### 示例

    選項： 監視的更改的位置，並使用最 / / 準確定位採集方法可用。
    var watchID = navigator.geolocation.watchPosition （onSuccess，onError，{enableHighAccuracy: true});....later 上的......
    
    navigator.geolocation.clearWatch(watchID) ；
    

## Position

包含 `Position` 座標和時間戳記，由地理位置 API 創建。

### 屬性

*   **coords**： 一組的地理座標。*（座標）*

*   **時間戳記**： 創建時間戳記為 `coords` 。*（日期）*

## Coordinates

A `Coordinates` 物件附加到 `Position` 物件，可用於在當前職位的請求中的回呼函數。 它包含一組屬性，描述位置的地理座標。

### 屬性

*   **緯度**： 緯度以十進位度為單位。*（人數）*

*   **經度**: 經度以十進位度為單位。*（人數）*

*   **海拔高度**： 高度在米以上橢球體中的位置。*（人數）*

*   **準確性**： 中米的緯度和經度座標的精度級別。*（人數）*

*   **altitudeAccuracy**： 在米的海拔高度座標的精度級別。*（人數）*

*   **標題**： 旅行，指定以度為單位元數目相對於真北順時針方向。*（人數）*

*   **速度**： 當前地面速度的設備，指定在米每秒。*（人數）*

### 亞馬遜火 OS 怪癖

**altitudeAccuracy**: 不支援的 Android 設備，返回`null`.

### Android 的怪癖

**altitudeAccuracy**: 不支援的 Android 設備，返回`null`.

## PositionError

`PositionError`物件傳遞給 `geolocationError` 與 navigator.geolocation 發生錯誤時的回呼函數。

### 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 描述所遇到的錯誤的詳細資訊的錯誤訊息。

### 常量

*   `PositionError.PERMISSION_DENIED` 
    *   返回當使用者不允許應用程式檢索的位置資訊。這是取決於平臺。
*   `PositionError.POSITION_UNAVAILABLE` 
    *   返回設備時，不能檢索的位置。一般情況下，這意味著該設備未連接到網路或無法獲取衛星的修復。
*   `PositionError.TIMEOUT` 
    *   返回設備時，無法在指定的時間內檢索位置 `timeout` 中包含 `geolocationOptions` 。 與一起使用時 `navigator.geolocation.watchPosition` ，此錯誤可能反復傳遞給 `geolocationError` 回檔每 `timeout` 毫秒為單位）。