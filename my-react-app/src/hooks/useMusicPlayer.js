import { useState, useRef } from 'react'
import musicFile from '../assets/music/a lonely star_spotdown.org.mp3'
import musicFile2 from '../assets/music/Together_spotdown.org.mp3'
import musicFile3 from '../assets/music/I Thought We Were Friends_spotdown.org.mp3'

const musicTracks = [
  { title: 'A Lonely Star - Jhove', src: musicFile },
  { title: 'Together', src: musicFile2 },
  { title: 'I Thought We Were Friends', src: musicFile3 },
]

function useMusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const playTrack = (index) => {
    setCurrentTrack(index)
    audioRef.current.src = musicTracks[index].src
    audioRef.current.play()
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const nextTrack = () => {
    const next = (currentTrack + 1) % musicTracks.length
    playTrack(next)
  }

  const prevTrack = () => {
    const prev = (currentTrack - 1 + musicTracks.length) % musicTracks.length
    playTrack(prev)
  }

  return {
    musicTracks,
    audioRef,
    currentTrack,
    isPlaying,
    playTrack,
    togglePlayPause,
    nextTrack,
    prevTrack,
  }
}

export default useMusicPlayer