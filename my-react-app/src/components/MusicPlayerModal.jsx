function MusicPlayerModal({
  show,
  setShow,
  musicTracks,
  audioRef,
  currentTrack,
  isPlaying,
  playTrack,
  togglePlayPause,
  nextTrack,
  prevTrack,
}) {
  return (
    <>
      <button
        className="music-player-btn"
        onClick={() => setShow(true)}
        aria-label="Open Music Player"
      >
        <i className="fas fa-music"></i>
        <span>Lofi Lounge</span>
      </button>

      <audio ref={audioRef} id="persistent-audio" className="persistent-audio">
        <source src={musicTracks[0].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {show && (
        <div className="modal-overlay" onClick={() => setShow(false)}>
          <div className="music-player-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShow(false)}
              aria-label="Close Modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title"><i className="fa-regular fa-snowflake"></i> Lofi Lounge</h2>
            <div className="music-tracks">
              {musicTracks.map((track, index) => (
                <div
                  key={index}
                  className={`track-item ${currentTrack === index ? 'active' : ''}`}
                  onClick={() => playTrack(index)}
                >
                  <i className="fas fa-music"></i>
                  <span>{track.title}</span>
                </div>
              ))}
              <div className="audio-controls">
                <button onClick={prevTrack} className="audio-btn">
                  <i className="fas fa-backward"></i> Prev
                </button>
                <button onClick={togglePlayPause} className="audio-btn play-btn">
                  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i> {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={nextTrack} className="audio-btn">
                  Next <i className="fas fa-forward"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MusicPlayerModal