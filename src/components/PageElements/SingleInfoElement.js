import { useEffect, useState } from 'react';
import useSound from 'use-sound'; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'; // icons for next and previous track
import { IconContext } from 'react-icons'; // for customazing the icons

import PointHandWithWristband from '../../assets/svgImages/PointHandWithWristband';
import obserwacja from './obserwacja.mp3'; // importing the music

const SingleInfoElement = (infoToDisplay) => {
  const [isAreaChecked, setIsAreaChecked] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, duration, sound }] = useSound(obserwacja);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const handleAreaAsCheckboxClick = (e) => setIsAreaChecked(!isAreaChecked);

  return (
    <section className='info-area-section'>
      <header className='info-area-title'>
        <input
          type='checkbox'
          id={infoToDisplay.infoToDisplay.id}
          value={infoToDisplay.infoToDisplay.id}
          name='rd'
          onChange={handleAreaAsCheckboxClick}
          checked={isAreaChecked}
          className='body-area-title__inbox'
        ></input>

        <label
          className='body-area-title__label'
          htmlFor={infoToDisplay.infoToDisplay.id}
        >
          {infoToDisplay.infoToDisplay.title}
          <PointHandWithWristband />
        </label>
      </header>
      <section>
        {isAreaChecked ? infoToDisplay.infoToDisplay.txt : null}
      </section>
      <div className='component'>
        <h2>Playing Now</h2>
        <img className='musicCover' src='https://picsum.photos/200/200' />
        <div>
          <h3 className='title'>Rubaiyyan</h3>
          <p className='subTitle'>Qala</p>
        </div>
        <div>
          <button className='playButton'>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className='playButton' onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className='playButton' onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className='playButton'>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleInfoElement;
