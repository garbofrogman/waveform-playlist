function get_tracks(){
   
}
var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "#005BBB",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000],
});

var Vocals30 = "media/audio/Vocals30.mp3"
playlist
  .load([
    {
      src: Vocals30,
      name: "Vocals",
    },
    {
      src: "media/audio/Guitar30.mp3",
      name: "Guitar",
    },
    {
      src: "media/audio/PianoSynth30.mp3",
      name: "Pianos & Synth",
    },
    {
      src: "media/audio/BassDrums30.mp3",
      name: "Drums",
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });

function testing(){
  // document.getElementById("playlist").innerHTML = "poop";
  playlist.clear();
  playlist.load([{src:"media/audio/Weezer/disaster/01 Invincible.mp3", name: "invincible"}]);
}
