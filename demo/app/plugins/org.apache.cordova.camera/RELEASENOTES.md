<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->
# Release Notes

### 0.2.1 (Sept 5, 2013)
* [CB-4656] Don't add line-breaks to base64-encoded images (Fixes type=DataURI)
* [CB-4432] copyright notice change

### 0.2.3 (Sept 25, 2013)
* CB-4889 bumping&resetting version
* CB-4889 forgot index.html
* CB-4889 renaming core inside cameraProxy
* [Windows8] commandProxy has moved
* [Windows8] commandProxy has moved
* added Camera API for FirefoxOS
* Rename CHANGELOG.md -> RELEASENOTES.md
* [CB-4823] Fix XCode 5 camera plugin warnings
* Fix compiler warnings
* [CB-4765] Move ExifHelper.java into Camera Plugin
* [CB-4764] Remove reference to DirectoryManager from CameraLauncher
* [CB-4763] Use a copy of FileHelper.java within camera-plugin.
* [CB-4752] Incremented plugin version on dev branch.
* CB-4633: We really should close cursors.  It's just the right thing to do.
* No longer causes a stack trace, but it doesn't cause the error to be called.
* CB-4889 renaming org.apache.cordova.core.camera to org.apache.cordova.camera

 ### 0.2.4 (Oct 28, 2013)
* CB-5128: added repo + issue tag to plugin.xml for camera plugin
* CB-4958 - iOS - Camera plugin should not show the status bar
* [CB-4919] updated plugin.xml for FxOS
* [CB-4915] Incremented plugin version on dev branch.

### 0.2.5 (Dec 4, 2013)
* fix camera for firefox os
* getPicture via web activities
* [ubuntu] specify policy_group
* add ubuntu platform
* 1. User Agent detection now detects AmazonWebView. 2. Change to use amazon-fireos as the platform if user agent string contains 'cordova-amazon-fireos'
* Added amazon-fireos platform.

### 0.2.6 (Jan 02, 2014)
* CB-5658 Add doc/index.md for Camera plugin
* CB-2442 CB-2419 Use Windows.Storage.ApplicationData.current.localFolder, instead of writing to app package.
* [BlackBerry10] Adding platform level permissions
* CB-5599 Android: Catch and ignore OutOfMemoryError in getRotatedBitmap()

### 0.2.7 (Feb 05, 2014)
* CB-4919 firefox os quirks added and supported platforms list is updated
* getPicture via web activities
* Documented quirk for CB-5335 + CB-5206 for WP7+8
* reference the correct firefoxos implementation
* [BlackBerry10] Add permission to access_shared

### 0.2.8 (Feb 26, 2014)
* CB-1826 Catch OOM on gallery image resize

### 0.2.9 (Apr 17, 2014)
* CB-6460: Update license headers
* CB-6422: [windows8] use cordova/exec/proxy
* [WP8] When only targetWidth or targetHeight is provided, use it as the only bound
* CB-4027, CB-5102, CB-2737, CB-2387: [WP] Fix camera issues, cropping, memory leaks
* CB-6212: [iOS] fix warnings compiled under arm64 64-bit
* [BlackBerry10] Add rim xml namespaces declaration
* Add NOTICE file
