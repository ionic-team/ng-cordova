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

# org.apache.cordova.file

This plugin provides the [HTML5 Filesystem API](http://dev.w3.org/2009/dap/file-system/pub/FileSystem/). For usage, refer
to HTML5 Rocks' [FileSystem article](http://www.html5rocks.com/en/tutorials/file/filesystem/)
on the subject. For an overview of other storage options, refer to Cordova's
[storage guide](http://cordova.apache.org/docs/en/edge/cordova_storage_storage.md.html).

## Installation

    cordova plugin add org.apache.cordova.file

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10*
- iOS
- Windows Phone 7 and 8*
- Windows 8*

\* _These platforms do not support `FileReader.readAsArrayBuffer` nor `FileWriter.write(blob)`._

## Configuring the Plugin

The set of available filesystems can be configured per-platform. Both iOS and
Android recognize a <preference> tag in `config.xml` which names the
filesystems to be installed. By default, all file-system roots are enabled.

    <preference name="iosExtraFilesystems" value="library,library-nosync,documents,documents-nosync,cache,bundle,root" />
    <preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,root" />

### Android

* files: The application's internal file storage directory
* files-external: The application's external file storage directory
* sdcard: The global external file storage directory (this is the root of the SD card, if one is installed)
* cache: The application's internal cache directory
* cache-external: The application's external cache directory
* root: The entire device filesystem

Android also supports a special filesystem named "documents", which represents a "/Documents/" subdirectory within the "files" filesystem.

### iOS

* library: The application's Library directory
* documents: The application's Documents directory
* cache: The application's Cache directory
* app-bundle: The application's bundle; the location of the app itself on disk
* root: The entire device filesystem

By default, the library and documents directories can be synced to iCloud. You can also request two additional filesystems, "library-nosync" and "documents-nosync", which represent a special non-synced directory within the Library or Documents filesystem.

## Android Quirks

### Android Persistent storage location

There are multiple valid locations to store persistent files on an Android
device. See [this page](http://developer.android.com/guide/topics/data/data-storage.html)
for an extensive discussion of the various possibilities.

Previous versions of the plugin would choose the location of the temporary and
persistent files on startup, based on whether the device claimed that the SD
Card (or equivalent storage partition) was mounted. If the SD Card was mounted,
or if a large internal storage partition was available (such as on Nexus
devices,) then the persistent files would be stored in the root of that space.
This meant that all Cordova apps could see all of the files available on the
card.

If the SD card was not available, then previous versions would store data under
/data/data/<packageId>, which isolates apps from each other, but may still
cause data to be shared between users.

It is now possible to choose whether to store files in the internal file
storage location, or using the previous logic, with a preference in your
application's config.xml file. To do this, add one of these two lines to
config.xml:

    <preference name="AndroidPersistentFileLocation" value="Internal" />

    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

Without this line, the File plugin will use "Compatibility" as the default. If
a preference tag is present, and is not one of these values, the application
will not start.

If your application has previously been shipped to users, using an older (pre-
1.0) version of this plugin, and has stored files in the persistent filesystem,
then you should set the preference to "Compatibility". Switching the location to
"Internal" would mean that existing users who upgrade their application may be
unable to access their previously-stored files, depending on their device.

If your application is new, or has never previously stored files in the
persistent filesystem, then the "internal" setting is generally recommended.

## BlackBerry Quirks

`DirectoryEntry.removeRecursively()` may fail with a `ControlledAccessException` in the following cases:

- An app attempts to access a directory created by a previous installation of the app.

> Solution: ensure temporary directories are cleaned manually, or by the application prior to reinstallation.

- If the device is connected by USB.

> Solution: disconnect the USB cable from the device and run again.

## iOS Quirks
- `FileReader.readAsText(blob, encoding)`
  - The `encoding` parameter is not supported, and UTF-8 encoding is always in effect.

### iOS Persistent storage location

There are two valid locations to store persistent files on an iOS device: the
Documents directory and the Library directory. Previous versions of the plugin
only ever stored persistent files in the Documents directory. This had the
side-effect of making all of an application's files visible in iTunes, which
was often unintended, especially for applications which handle lots of small
files, rather than producing complete documents for export, which is the
intended purpose of the directory.

It is now possible to choose whether to store files in the documents or library
directory, with a preference in your application's config.xml file. To do this,
add one of these two lines to config.xml:

    <preference name="iosPersistentFileLocation" value="Library" />

    <preference name="iosPersistentFileLocation" value="Compatibility" />

Without this line, the File plugin will use "Compatibility" as the default. If
a preference tag is present, and is not one of these values, the application
will not start.

If your application has previously been shipped to users, using an older (pre-
1.0) version of this plugin, and has stored files in the persistent filesystem,
then you should set the preference to "Compatibility". Switching the location to
"Library" would mean that existing users who upgrade their application would be
unable to access their previously-stored files.

If your application is new, or has never previously stored files in the
persistent filesystem, then the "Library" setting is generally recommended.

## Upgrading Notes

In v1.0.0 of this plugin, the `FileEntry` and `DirectoryEntry` structures have changed,
to be more in line with the published specification.

Previous (pre-1.0.0) versions of the plugin stored the device-absolute-file-location
in the `fullPath` property of `Entry` objects. These paths would typically look like

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

These paths were also returned by the `toURL()` method of the `Entry` objects.

With v1.0.0, the `fullPath` attribute is the path to the file, _relative to the root of
the HTML filesystem_. So, the above paths would now both be represented by a `FileEntry`
object with a `fullPath` of

    /path/to/file

If your application works with device-absolute-paths, and you previously retrieved those
paths through the `fullPath` property of `Entry` objects, then you should update your code
to use `entry.toURL()` instead. This method will now return filesystem URLs of the form

    cdvfile://localhost/persistent/path/to/file

which can be used to identify the file uniquely.

For backwards compatibility, the `resolveLocalFileSystemURL()` method will accept a
device-absolute-path, and will return an `Entry` object corresponding to it, as long as that
file exists within either the TEMPORARY or PERSISTENT filesystems.

This has particularly been an issue with the File-Transfer plugin, which previously used
device-absolute-paths (and can still accept them). It has been updated to work correctly
with FileSystem URLs, so replacing `entry.fullPath` with `entry.toURL()` should resolve any
issues getting that plugin to work with files on the device.
