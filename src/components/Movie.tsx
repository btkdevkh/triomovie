import '../assets/css/Movie.css'
import { useEffect, useRef, useState } from 'react'
import { IMovie } from "../types/IMovie"
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  document: IMovie
}

export default function Movie({ document }: Props) {
  const [isPlayed, setIsPlayed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    // setIsPlayed(true)
  }

  const handleStop = (e: any) => {
    e.target.classList.contains('movie-player') && setIsPlayed(false)
  }

  return (
    <>
      <div className="movie">
        <h2>{document.title}</h2>
        <div className="movie-cover">
          <img src={document.cover_url} alt={document.title} />
        </div>
        <div className="movie-info">
          <div className={
            `rating 
            ${
              document.rating < 6 ? 
              'lessThan6' : 
              document.rating < 7 ? 
              'lessThan7' : 
              ''
            }`
          }>
            {document.rating === 0 ? '0.0' : document.rating}
          </div>
          <button className='play' title='Play' onClick={handlePlay}>
            <a href={document.movie_url} target='_blank'>
              <FontAwesomeIcon icon={faPlayCircle} color='#909090' />
            </a>
          </button>
          <div className='released'>{document.released_year}</div>
        </div>
      </div>

      {/* in case using php rest api */}
      {isPlayed && (
        <div className="movie-player" onClick={handleStop}>
          <div>
            <video 
              ref={videoRef}
              src={document.movie_url}
              controls
              autoPlay
            >
              {document.sub_title && (
                <track 
                  kind="subtitles" 
                  srcLang='en'
                  src={document.sub_title}
                />
              )}
            </video>
          </div>
        </div>
      )}
    </>
  )
}
