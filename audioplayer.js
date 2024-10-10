 // Array mit Pfaden zu den Musikdateien
 const tracks = [
    //"music/Mitelalter_1.mp3",
    //"music/Mitelalter_2.mp3",
    //"music/Mitelalter_3.mp3",
    "music/Eclipsed Heart.mp3",
    "music/Wishes Among the Stars.mp3",
    "music/Einheit im Wandel.mp3",
    "music/Whispers of Summer.mp3",
    "music/Whispers in the Wetland.mp3",
    "music/Neon Echoes.mp3",
  ];

  let currentTrack = 0;
  const audioPlayer = document.getElementById("audioPlayer");

  // Funktion, um den nächsten Track abzuspielen
  function playNextTrack() {
    //currentTrack++;
    currentTrack = Math.floor(Math.random() * tracks.length);
    if (currentTrack >= tracks.length) {
      currentTrack = 0; // Gehe zurück zum ersten Track
    }
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
  }

  // Initialisierung des Players mit dem ersten Track
  audioPlayer.src = tracks[currentTrack];

  // Event-Listener, um zum nächsten Track zu wechseln, wenn das aktuelle Lied endet
  audioPlayer.addEventListener("ended", playNextTrack);

  /* You are (not) alone - 01 */
  document.addEventListener('keypress', function(e) {
    if (e.key === 'e') { // Aktiviert, wenn jemand "e" drückt
      const audio = new Audio("music/The Cruel Angel's Thesis (Director's Edit Version).mp3");
      audio.play();
    }
  });
  