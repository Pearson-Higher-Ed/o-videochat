



var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});


// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('mainRoom');
});

var video = document.getElementById('localVideo');

var video = document.getElementById('remoteVideos');

// Toggle button color...
$("#recordButton").toggle(function(){
  $("#recordButton").css("background","red")
},function(){
  $("#recordButton").css("background","gray")
})


// Toggle Mute...
$("#muteButton").toggle(function(){
  webrtc.mute()
  $("#muteButton").css("background","blue")
},function(){
  webrtc.unmute()
  $("#muteButton").css("background","gray")
})



// Toggle video...
$("#videoButton").toggle(function(){
  webrtc.pauseVideo();
  $("#videoButton").css("background","green")
},function(){
  webrtc.resumeVideo();
  $("#videoButton").css("background","gray")
})


// Toggle screenShareButton
$("#screenShareButton").toggle(function(){
  $("#screenShareButton").css("background","orange")
},function(){
  $("#screenShareButton").css("background","gray")
})




  var mediaRecorder = new  new MediaRecorder(video);
mediaRecorder.ondataavailable = function(e) {
  console.log("data available");
}
