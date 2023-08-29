import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSound from 'use-sound'; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'; // icons for play and pause
import { IconContext } from 'react-icons'; // for customazing the icons

import { selectAudioByName } from '../store/audioSlice';
import store from '../store/store';
import { fetchAudio } from '../store/audioSlice';

store.dispatch(fetchAudio());

const AudioPlayerComponent = (audioName) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: '?',
    sec: '?',
  });
  const [currTime, setCurrTime] = useState({
    min: '?',
    sec: '?',
  });

  const [seconds, setSeconds] = useState('');

  const choosenAudio = useSelector((state) =>
    selectAudioByName(state, audioName.audioName)
  );

  const choosenAudioPath =
    choosenAudio && choosenAudio.audioMP3 && choosenAudio.audioMP3;

  const [play, { pause, duration, sound }] = useSound(choosenAudioPath);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    const ctx = new AudioContext();
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      if (ctx.state === 'running') {
        play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className='component'>
      <img
        className='musicCover'
        alt='test'
        src='https://picsum.photos/200/200'
      />
      <div>
        <h2 className='title'>Sesja relaksu bez dotyku</h2>
        <p className='subTitle'>Praktyka prowadzona</p>
      </div>
      <div>
        <div className='time'>
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type='range'
          min='0'
          max={duration / 1000}
          default='0'
          value={seconds}
          className='timeline'
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <button className='playButton' onClick={playingButton}>
          <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
            {time.min === '?' ? (
              <div>ładowanie</div>
            ) : !isPlaying ? (
              <AiFillPlayCircle />
            ) : (
              <AiFillPauseCircle />
            )}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default AudioPlayerComponent;
