/*  
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
	http://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Collections.Generic;
using Microsoft.Phone.Tasks;
using System.Runtime.Serialization;
using System.IO;
using System.IO.IsolatedStorage;
using System.Windows.Media.Imaging;
using Microsoft.Phone;
using Microsoft.Xna.Framework.Media;
using System.Diagnostics;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class Camera : BaseCommand
    {

        /// <summary>
        /// Return base64 encoded string
        /// </summary>
        private const int DATA_URL = 0;

        /// <summary>
        /// Return file uri
        /// </summary>
        private const int FILE_URI = 1;

        /// <summary>
        /// Choose image from picture library
        /// </summary>
        private const int PHOTOLIBRARY = 0;

        /// <summary>
        /// Take picture from camera
        /// </summary>

        private const int CAMERA = 1;

        /// <summary>
        /// Choose image from picture library
        /// </summary>
        private const int SAVEDPHOTOALBUM = 2;

        /// <summary>
        /// Take a picture of type JPEG
        /// </summary>
        private const int JPEG = 0;

        /// <summary>
        /// Take a picture of type PNG
        /// </summary>
        private const int PNG = 1;

        /// <summary>
        /// Folder to store captured images
        /// </summary>
        private const string isoFolder = "CapturedImagesCache";

        /// <summary>
        /// Represents captureImage action options.
        /// </summary>
        [DataContract]
        public class CameraOptions
        {
            /// <summary>
            /// Source to getPicture from.
            /// </summary>
            [DataMember(IsRequired = false, Name = "sourceType")]
            public int PictureSourceType { get; set; }

            /// <summary>
            /// Format of image that returned from getPicture.
            /// </summary>
            [DataMember(IsRequired = false, Name = "destinationType")]
            public int DestinationType { get; set; }

            /// <summary>
            /// Quality of saved image
            /// </summary>
            [DataMember(IsRequired = false, Name = "quality")]
            public int Quality { get; set; }

            /// <summary>
            /// Controls whether or not the image is also added to the device photo album.
            /// </summary>
            [DataMember(IsRequired = false, Name = "saveToPhotoAlbum")]
            public bool SaveToPhotoAlbum { get; set; }

            /// <summary>
            /// Ignored
            /// </summary>
            [DataMember(IsRequired = false, Name = "correctOrientation")]
            public bool CorrectOrientation { get; set; }

            /// <summary>
            /// Ignored
            /// </summary>
            [DataMember(IsRequired = false, Name = "allowEdit")]
            public bool AllowEdit { get; set; }

                        /// <summary>
            /// Height in pixels to scale image
            /// </summary>
            [DataMember(IsRequired = false, Name = "encodingType")]
            public int EncodingType { get; set; }

                        /// <summary>
            /// Height in pixels to scale image
            /// </summary>
            [DataMember(IsRequired = false, Name = "mediaType")]
            public int MediaType { get; set; }


            /// <summary>
            /// Height in pixels to scale image
            /// </summary>
            [DataMember(IsRequired = false, Name = "targetHeight")]
            public int TargetHeight { get; set; }


            /// <summary>
            /// Width in pixels to scale image
            /// </summary>
            [DataMember(IsRequired = false, Name = "targetWidth")]
            public int TargetWidth { get; set; }

            /// <summary>
            /// Creates options object with default parameters
            /// </summary>
            public CameraOptions()
            {
                this.SetDefaultValues(new StreamingContext());
            }

            /// <summary>
            /// Initializes default values for class fields.
            /// Implemented in separate method because default constructor is not invoked during deserialization.
            /// </summary>
            /// <param name="context"></param>
            [OnDeserializing()]
            public void SetDefaultValues(StreamingContext context)
            {
                PictureSourceType = CAMERA;
                DestinationType = FILE_URI;
                Quality = 80;
                TargetHeight = -1;
                TargetWidth = -1;
                SaveToPhotoAlbum = false;
                CorrectOrientation = true;
                AllowEdit = false;
                MediaType = -1;
                EncodingType = -1;
            }
        }

        /// <summary>
        /// Camera options
        /// </summary>
        CameraOptions cameraOptions;

        public void takePicture(string options)
        {
            try
            {
                string[] args = JSON.JsonHelper.Deserialize<string[]>(options);
                // ["quality", "destinationType", "sourceType", "targetWidth", "targetHeight", "encodingType",
                //     "mediaType", "allowEdit", "correctOrientation", "saveToPhotoAlbum" ]
                cameraOptions = new CameraOptions();
                cameraOptions.Quality = int.Parse(args[0]);
                cameraOptions.DestinationType = int.Parse(args[1]);
                cameraOptions.PictureSourceType = int.Parse(args[2]);
                cameraOptions.TargetWidth = int.Parse(args[3]);
                cameraOptions.TargetHeight = int.Parse(args[4]);
                cameraOptions.EncodingType = int.Parse(args[5]);
                cameraOptions.MediaType = int.Parse(args[6]);
                cameraOptions.AllowEdit = bool.Parse(args[7]);
                cameraOptions.CorrectOrientation = bool.Parse(args[8]);
                cameraOptions.SaveToPhotoAlbum = bool.Parse(args[9]);

                // a very large number will force the other value to be the bound
                if (cameraOptions.TargetWidth > -1 && cameraOptions.TargetHeight == -1)
                {
                    cameraOptions.TargetHeight = 100000;   
                }
                else if (cameraOptions.TargetHeight > -1 && cameraOptions.TargetWidth == -1)
                {
                    cameraOptions.TargetWidth = 100000;
                }
            }
            catch (Exception ex)
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
                return;
            }

            if(cameraOptions.DestinationType != Camera.FILE_URI && cameraOptions.DestinationType != Camera.DATA_URL )
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Incorrect option: destinationType"));
                return;
            }

            ChooserBase<PhotoResult> chooserTask = null;
            if (cameraOptions.PictureSourceType == CAMERA)
            {
                chooserTask = new CameraCaptureTask();
            }
            else if ((cameraOptions.PictureSourceType == PHOTOLIBRARY) || (cameraOptions.PictureSourceType == SAVEDPHOTOALBUM))
            {
                chooserTask = new PhotoChooserTask();
            }
            // if chooserTask is still null, then PictureSourceType was invalid
            if (chooserTask != null)
            {
                chooserTask.Completed += onTaskCompleted;
                chooserTask.Show();
            }
            else
            {
                Debug.WriteLine("Unrecognized PictureSourceType :: " + cameraOptions.PictureSourceType.ToString());
                DispatchCommandResult(new PluginResult(PluginResult.Status.NO_RESULT));
            }
        }

        public void onTaskCompleted(object sender, PhotoResult e)
        {
            var task = sender as ChooserBase<PhotoResult>;
            if (task != null)
            {
                task.Completed -= onTaskCompleted;
            }

            if (e.Error != null)
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR));
                return;
            }

            switch (e.TaskResult)
            {
                case TaskResult.OK:
                    try
                    {
                        string imagePathOrContent = string.Empty;

                        // Save image back to media library
                        // only save to photoalbum if it didn't come from there ...
                        if (cameraOptions.PictureSourceType == CAMERA && cameraOptions.SaveToPhotoAlbum)
                        {
                            MediaLibrary library = new MediaLibrary();
                            Picture pict = library.SavePicture(e.OriginalFileName, e.ChosenPhoto); // to save to photo-roll ...
                        }

                        int orient = ImageExifHelper.getImageOrientationFromStream(e.ChosenPhoto);
                        int newAngle = 0;
                        switch (orient)
                        {
                            case ImageExifOrientation.LandscapeLeft:
                                newAngle = 90;
                                break;
                            case ImageExifOrientation.PortraitUpsideDown:
                                newAngle = 180;
                                break;
                            case ImageExifOrientation.LandscapeRight:
                                newAngle = 270;
                                break;
                            case ImageExifOrientation.Portrait:
                            default: break; // 0 default already set
                        }

                        if (newAngle != 0)
                        {
                            using (Stream rotImageStream = ImageExifHelper.RotateStream(e.ChosenPhoto, newAngle))
                            {
                                // we should reset stream position after saving stream to media library
                                rotImageStream.Seek(0, SeekOrigin.Begin);
                                if (cameraOptions.DestinationType == DATA_URL)
                                {
                                    imagePathOrContent = GetImageContent(rotImageStream);
                                }
                                else   // FILE_URL
                                {
                                    imagePathOrContent = SaveImageToLocalStorage(rotImageStream, Path.GetFileName(e.OriginalFileName));
                                }
                            }
                        }
                        else   // no need to reorient
                        {
                            if (cameraOptions.DestinationType == DATA_URL)
                            {
                                imagePathOrContent = GetImageContent(e.ChosenPhoto);
                            }
                            else  // FILE_URL
                            {
                                imagePathOrContent = SaveImageToLocalStorage(e.ChosenPhoto, Path.GetFileName(e.OriginalFileName));
                            }
                        }

                        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, imagePathOrContent));
                    }
                    catch (Exception)
                    {
                        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Error retrieving image."));
                    }
                    break;
                case TaskResult.Cancel:
                    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Selection cancelled."));
                    break;
                default:
                    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Selection did not complete!"));
                    break;
            }
        }
     
        /// <summary>
        /// Returns image content in a form of base64 string
        /// </summary>
        /// <param name="stream">Image stream</param>
        /// <returns>Base64 representation of the image</returns>
        private string GetImageContent(Stream stream)
        {
            byte[] imageContent = null;

            try
            {
                // Resize photo and convert to JPEG
                imageContent = ResizePhoto(stream);
            }
            finally
            {
                stream.Dispose();
            }

            return Convert.ToBase64String(imageContent);
        }

        /// <summary>
        /// Resize image
        /// </summary>
        /// <param name="stream">Image stream</param>
        /// <returns>resized image</returns>
        private byte[] ResizePhoto(Stream stream)
        {
            //output
            byte[] resizedFile;

            BitmapImage objBitmap = new BitmapImage();
            objBitmap.SetSource(stream);
            objBitmap.CreateOptions = BitmapCreateOptions.None;

            WriteableBitmap objWB = new WriteableBitmap(objBitmap);
            objBitmap.UriSource = null;

            // Calculate resultant image size
            int width, height;
            if (cameraOptions.TargetWidth >= 0 && cameraOptions.TargetHeight >= 0)
            {
                // Keep proportionally
                double ratio = Math.Min(
                    (double)cameraOptions.TargetWidth / objWB.PixelWidth,
                    (double)cameraOptions.TargetHeight / objWB.PixelHeight);
                width = Convert.ToInt32(ratio * objWB.PixelWidth);
                height = Convert.ToInt32(ratio * objWB.PixelHeight);
            }
            else
            {
                width = objWB.PixelWidth;
                height = objWB.PixelHeight;
            }

            //Hold the result stream
            using (MemoryStream objBitmapStreamResized = new MemoryStream())
            {

                try
                {
                    // resize the photo with user defined TargetWidth & TargetHeight
                    Extensions.SaveJpeg(objWB, objBitmapStreamResized, width, height, 0, cameraOptions.Quality);
                }
                finally
                {
                    //Dispose bitmaps immediately, they are memory expensive
                    DisposeImage(objBitmap);
                    DisposeImage(objWB);
                    GC.Collect();
                }

                //Convert the resized stream to a byte array. 
                int streamLength = (int)objBitmapStreamResized.Length;
                resizedFile = new Byte[streamLength]; //-1 
                objBitmapStreamResized.Position = 0;

                //for some reason we have to set Position to zero, but we don't have to earlier when we get the bytes from the chosen photo... 
                objBitmapStreamResized.Read(resizedFile, 0, streamLength);
            }

            return resizedFile;
        }

        /// <summary>
        /// Util: Dispose a bitmap resource
        /// </summary>
        /// <param name="image">BitmapSource subclass to dispose</param>
        private void DisposeImage(BitmapSource image)
        {
            if (image != null)
            {
                try
                {
                    using (var ms = new MemoryStream(new byte[] { 0x0 }))
                    {
                        image.SetSource(ms);
                    }
                }
                catch (Exception)
                {
                }
            }
        }

        /// <summary>
        /// Saves captured image in isolated storage
        /// </summary>
        /// <param name="imageFileName">image file name</param>
        /// <returns>Image path</returns>
        private string SaveImageToLocalStorage(Stream stream, string imageFileName)
        {

            if (stream == null)
            {
                throw new ArgumentNullException("imageBytes");
            }
            try
            {
                var isoFile = IsolatedStorageFile.GetUserStoreForApplication();

                if (!isoFile.DirectoryExists(isoFolder))
                {
                    isoFile.CreateDirectory(isoFolder);
                }

                string filePath = System.IO.Path.Combine("///" + isoFolder + "/", imageFileName);

                using (IsolatedStorageFileStream outputStream = isoFile.CreateFile(filePath))
                {
                    BitmapImage objBitmap = new BitmapImage();
                    objBitmap.SetSource(stream);
                    objBitmap.CreateOptions = BitmapCreateOptions.None;

                    WriteableBitmap objWB = new WriteableBitmap(objBitmap);
                    objBitmap.UriSource = null;

                    try
                    {

                        //use photo's actual width & height if user doesn't provide width & height
                        if (cameraOptions.TargetWidth < 0 && cameraOptions.TargetHeight < 0)
                        {
                            objWB.SaveJpeg(outputStream, objWB.PixelWidth, objWB.PixelHeight, 0, cameraOptions.Quality);
                        }
                        else
                        {
                            //Resize
                            //Keep proportionally
                            double ratio = Math.Min((double)cameraOptions.TargetWidth / objWB.PixelWidth, (double)cameraOptions.TargetHeight / objWB.PixelHeight);
                            int width = Convert.ToInt32(ratio * objWB.PixelWidth);
                            int height = Convert.ToInt32(ratio * objWB.PixelHeight);

                            // resize the photo with user defined TargetWidth & TargetHeight
                            objWB.SaveJpeg(outputStream, width, height, 0, cameraOptions.Quality);
                        }
                    }
                    finally
                    {
                        //Dispose bitmaps immediately, they are memory expensive
                        DisposeImage(objBitmap);
                        DisposeImage(objWB);
                        GC.Collect();
                    }
                }

                return new Uri(filePath, UriKind.Relative).ToString();
            }
            catch (Exception)
            {
                //TODO: log or do something else
                throw;
            }
            finally
            {
                stream.Dispose();
            }
        }

    }
}
