import { useState, useEffect } from 'react'

const TRACKS_PER_PAGE = 3

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
  const [closing, setClosing] = useState(false)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(musicTracks.length / TRACKS_PER_PAGE)

  useEffect(() => {
    setPage(Math.floor(currentTrack / TRACKS_PER_PAGE) + 1)
  }, [currentTrack])

  const startIndex = (page - 1) * TRACKS_PER_PAGE
  const visibleTracks = musicTracks.slice(startIndex, startIndex + TRACKS_PER_PAGE)

  const closeModal = () => {
    if (closing) return
    setClosing(true)
    setTimeout(() => {
      setShow(false)
      setClosing(false)
    }, 300)
  }

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
        <div className={`modal-overlay ${closing ? 'closing' : ''}`} onClick={closeModal}>
          <div className="music-player-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title"><i className="fa-regular fa-snowflake"></i> Lofi Lounge</h2>
            <div className="music-tracks">
              {visibleTracks.map((track, index) => {
                const globalIndex = startIndex + index
                return (
                  <div
                    key={globalIndex}
                    className={`track-item ${currentTrack === globalIndex ? 'active' : ''}`}
                    onClick={() => playTrack(globalIndex)}
                  >
                    <i className="fas fa-music"></i>
                    <span>{track.title}</span>
                  </div>
                )
              })}
              <div className="pagination">
                <button
                  className="pagination-btn"
                  onClick={() => setPage(page - 1)}
                  disabled={page <= 1}
                  aria-label="Previous page"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span className="pagination-info">{page} / {totalPages}</span>
                <button
                  className="pagination-btn"
                  onClick={() => setPage(page + 1)}
                  disabled={page >= totalPages}
                  aria-label="Next page"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
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