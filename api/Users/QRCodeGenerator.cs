using System;
using System.IO;
using Newtonsoft.Json;
using ZXing.QrCode;

namespace MuaythaiSportManagementSystemApi.Users
{
    public static class QRCodeGenerator
    {
        public static string GenerateQRCode(object data){
            var width = 250; // width of the Qr Code 
            var height = 250; // height of the Qr Code 
            var margin = 0; 
 
            var qrCodeWriter = new ZXing.BarcodeWriterPixelData 
            { 
                Format = ZXing.BarcodeFormat.QR_CODE, 
                Options = new QrCodeEncodingOptions { Height = height, Width = width, Margin = margin } 
            }; 

            var jsonData = JsonConvert.SerializeObject(data);
            var pixelData = qrCodeWriter.Write(jsonData); 

            using (var bitmap = new System.Drawing.Bitmap(pixelData.Width, pixelData.Height, System.Drawing.Imaging.PixelFormat.Format32bppRgb)) 
            using (var ms = new MemoryStream()) 
            { 
                 
                var bitmapData = bitmap.LockBits(new System.Drawing.Rectangle(0, 0, pixelData.Width, pixelData.Height), 
                   System.Drawing.Imaging.ImageLockMode.WriteOnly, System.Drawing.Imaging.PixelFormat.Format32bppRgb); 
                try 
                { 
                    // we assume that the row stride of the bitmap is aligned to 4 byte multiplied by the width of the image 
                    System.Runtime.InteropServices.Marshal.Copy(pixelData.Pixels, 0, bitmapData.Scan0, 
                       pixelData.Pixels.Length); 
                } 
                finally 
                { 
                    bitmap.UnlockBits(bitmapData); 
                } 
                // save to stream as PNG 
                bitmap.Save(ms, System.Drawing.Imaging.ImageFormat.Png); 

                return String.Format("data:image/png;base64,{0}", Convert.ToBase64String(ms.ToArray()));
        }
    }
}
}