function SpotifyModal({ show, setShow }) {
  return (
    <>
      <button
        className="spotify-btn"
        onClick={() => setShow(true)}
        aria-label="Open Spotify Playlist"
      >
        <i className="fa-brands fa-spotify"></i>
        <span>Follow Me</span>
      </button>

      {show && (
        <div className="modal-overlay" onClick={() => setShow(false)}>
          <div className="spotify-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShow(false)}
              aria-label="Close Modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title">My Spotify Playlist</h2>
            <div className="spotify-embed-container">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/1VAwYmhFmeMPWwy7Ql7s0f?utm_source=generator"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SpotifyModal