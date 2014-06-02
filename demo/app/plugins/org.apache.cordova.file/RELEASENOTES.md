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
* [CB-4656] Don't add newlines in data urls within readAsDataUrl.
* [CB-4514] Making DirectoryCopy Recursive
* [iOS] Simplify the code in resolveLocalFileSystemURI

### 0.2.3 (Sept 25, 2013)
* CB-4889 bumping&resetting version
* [CB-4903] File Plugin not loading Windows8
* [CB-4903] File Plugin not loading Windows8
* CB-4889 renaming references
* CB-4889 renaming org.apache.cordova.core.file to org.apache.cordova.file
* Rename CHANGELOG.md -> RELEASENOTES.md
* [CB-4771] Expose TEMPORARY and PERSISTENT constants on window.
* Fix compiler/lint warnings
* [CB-4764] Move DirectoryManager.java into file plugin
* [CB-4763] Copy FileHelper.java into the plugin.
* [CB-2901] [BlackBerry10] Automatically unsandbox filesystem if path is not in app sandbox
* [CB-4752] Incremented plugin version on dev branch.

### 0.2.4 (Oct 9, 2013)
* CB-5020 - File plugin should execute on a separate thread
* [CB-4915] Incremented plugin version on dev branch.
* CB-4504: Updating FileUtils.java to compensate for Java porting failures in the Android SDK. This fails because Java knows nothing about android_asset not being an actual filesystem

 ### 0.2.5 (Oct 28, 2013)
* CB-5129: Add a consistent filesystem attribute to FileEntry and DirectoryEntry objects
* CB-5128: added repo + issue tag to plugin.xml for file plugin
* CB-5015 [BlackBerry10] Add missing dependency for File.slice
* [CB-5010] Incremented plugin version on dev branch.

### 1.0.0 (Feb 05, 2014)
* CB-5974: Use safe 'Compatibilty' mode by default
* CB-5915: CB-5916: Reorganize preference code to make defaults possible
* CB-5974: Android: Don't allow File operations to continue when not configured
* CB-5960: ios: android: Properly handle parent references in getFile/getDirectory
* [ubuntu] adopt to recent changes
* Add default FS root to new FS objects
* CB-5899: Make DirectoryReader.readEntries return properly formatted Entry objects
* Add constuctor params to FileUploadResult related to CB-2421
* Fill out filesystem attribute of entities returned from resolveLocalFileSystemURL
* CB-5916: Create documents directories if they don't exist
* CB-5915: Create documents directories if they don't exist
* CB-5916: Android: Fix unfortunate NPE in config check
* CB-5916: Android: Add "/files/" to persistent files path
* CB-5915: ios: Update config preference (and docs) to match issue
* CB-5916: Android: Add config preference for Android persistent storage location
* iOS: Add config preference for iOS persistent storage location
* iOS: Android: Allow third-party plugin registration
* Android: Expose filePlugin getter so that other plugins can register filesystems
* Fix typos in deprecation message
* Add backwards-compatibility shim for file-transfer
* Android: Allow third-party plugin registration
* CB-5810 [BlackBerry10] resolve local:/// paths (application assets)
* CB-5774: create DirectoryEntry instead of FileEntry
* Initial fix for CB-5747
* Change default FS URL scheme to "cdvfile"
* Android: Properly format content urls
* Android, iOS: Replace "filesystem" protocol string with constant
* Android: Allow absolute paths on Entry.getFile / Entry.getDirectory
* Android: Make clear that getFile takes a path, not just a filename
* CB-5008: Rename resolveLocalFileSystemURI to resolveLocalFileSystemURL; deprecate original
* Remove old file reference from plugin.xml
* Android: Refactor File API
* CB-4899 [BlackBerry10] Fix resolve directories
* CB-5602 Windows8. Fix File Api mobile spec tests
* Android: Better support for content urls and cross-filesystem copy/move ops
* CB-5699 [BlackBerry10] Update resolveLocalFileSystemURI implementation
* CB-5658 Update license comment formatting of doc/index.md
* CB-5658 Add doc.index.md for File plugin.
* CB-5658 Delete stale snapshot of plugin docs
* CB-5403: Backwards-compatibility with file:// urls where possible
* CB-5407: Fixes for ContentFilesystem
* Android: Add method for testing backwards-compatibility of filetransfer plugin
* iOS: Add method for testing backwards-compatiblity of filetransfer plugin
* Android: Updates to allow FileTransfer to continue to work
* Android: Clean up unclosed file objects
* CB-5407: Cleanup
* CB-5407: Add new Android source files to plugin.xml
* CB-5407: Move read, write and truncate methods into modules
* CB-5407: Move copy/move methods into FS modules
* CB-5407: Move getParent into FS modules
* CB-5407: Move getmetadata methods into FS modules
* CB-5407: Move readdir methods into FS modules
* CB-5407: Move remove methods into FS modules
* CB-5407: Move getFile into FS modules
* CB-5407: Start refactoring android code: Modular filesystems, rfs, rlfsurl
* CB-5407: Update android JS to use FS urls
* CB-5405: Use URL formatting for Entry.toURL
* CB-5532 Fix
* Log file path for File exceptions.
* Partial fix for iOS File compatibility with previous fileTransfer plugin
* CB-5532 WP8. Add binary data support to FileWriter
* CB-5531 WP8. File Api readAsText incorrectly handles position args
* Added ubuntu platform support
* Added amazon-fireos platform support
* CB-5118 [BlackBerry10] Add check for undefined error handler
* CB-5406: Extend public API for dependent plugins
* CB-5403: Bump File plugin major version
* CB-5406: Split iOS file plugin into modules
* CB-5406: Factor out filesystem providers in iOS
* CB-5408: Add handler for filesystem:// urls
* CB-5406: Update iOS native code to use filesystem URLs internally
* CB-5405: Update JS code to use URLs exclusively
* CB-4816 Fix file creation outside sandbox for BB10

### 1.0.1 (Feb 28, 2014)
* CB-6116 Fix error where resolveLocalFileSystemURL would fail
* CB-6106 Add support for nativeURL attribute on Entry objects
* CB-6110 iOS: Fix typo in filesystemPathForURL: method
* Android: Use most specific FS match when resolving file: URIs
* iOS: Update fileSystemURLforLocalPath: to return the most match url.
* Allow third-party plugin registration, and the total count of fs type is not limited to just 4.
* CB-6097 Added missing files for amazon-fireos platform. Added onLoad flag to true.
* CB-6087 Android, iOS: Load file plugin on startup
* CB-6013 BlackBerry10: wrap webkit prefixed called in requestAnimationFrame
* Update plugin writers' documentation
* CB-6080 Fix file copy when src and dst are on different local file systems
* CB-6057 Add methods for plugins to convert between URLs and paths
* CB-6050 Public method for returning a FileEntry from a device file path
* CB-2432 CB-3185, CB-5975: Fix Android handling of content:// URLs
* CB-6022 Add upgrade notes to doc
* CB-5233 Make asset-library urls work properly on iOS
* CB-6012 Preserve query strings on cdvfile:// URLs where necessary
* CB-6010 Test properly for presence of URLforFilesystemPath method
* CB-5959 Entry.getMetadata should return size attribute

### 1.1.0 (Apr 17, 2014)
* CB-4965: Remove tests from file plugin
* Android: Allow file:/ URLs
* CB-6422: [windows8] use cordova/exec/proxy
* CB-6249: [android] Opportunistically resolve content urls to file
* CB-6394: [ios, android] Add extra filesystem roots
* CB-6394: [ios, android] Fix file resolution for the device root case
* CB-6394: [ios] Return ENCODING_ERR when fs name is not valid
* CB-6393: Change behaviour of toURL and toNativeURL
* ios: Style: plugin initialization
* ios: Fix handling of file URLs with encoded spaces
* Always use Android's recommended temp file location for temporary file system
* CB-6352: Allow FileSystem objects to be serialized to JSON
* CB-5959: size is explicitly 0 if not set, file.spec.46&47 are testing the type of size
* CB-6242: [BlackBerry10] Add deprecated version of resolveLocalFileSystemURI
* CB-6242: [BlackBerry10] add file:/// prefix for toURI / toURL
* CB-6242: [BlackBerry10] Polyfill window.requestAnimationFrame for OS < 10.2
* CB-6242: [BlackBerry10] Override window.resolveLocalFileSystemURL
* CB-6212: [iOS] fix warnings compiled under arm64 64-bit
* ios: Don't cache responses from CDVFile's URLProtocol
* CB-6199: [iOS] Fix toNativeURL() not escaping characters properly
* CB-6148: Fix cross-filesystem copy and move
* fixed setMetadata() to use the formatted fullPath
* corrected typo which leads to a "comma expression"
* CB-4952: ios: Resolve symlinks in file:// URLs
* Add docs about the extraFileSystems <preference>
* CB-6460: Update license headers
