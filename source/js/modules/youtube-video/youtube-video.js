let iframe = document.querySelector('.gym__iframe-wrapper');
iframe.remove();

let poster = document.querySelector('.gym__poster-wrapper');
poster.classList.remove('gym__poster-wrapper--nojs');


// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '228',
    width: '364',
    videoId: '9TZXsZItgdw',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.setVolume(1);
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 30000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

let videoWrapper = document.querySelector('.gym__video-wrapper');
videoWrapper.addEventListener('click', () => {
  onYouTubeIframeAPIReady();
});
