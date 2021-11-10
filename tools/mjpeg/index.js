var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
 
app.get('/', new MjpegProxy('https://webcam.camping-finck.de:5555/axis-cgi/mjpg/video.cgi?camera=1').proxyRequest);
app.listen(3564);
