import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSound from 'use-sound';
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillQuestionCircle,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { selectAudioByName, fetchAudio } from '../store/audioSlice';
import store from '../store/store';

store.dispatch(fetchAudio());

const timeObject = {
  min: '?',
  sec: '?',
};

const AudioPlayerComponent = (audioName) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(timeObject);
  const [currTime, setCurrTime] = useState(timeObject);
  const [seconds, setSeconds] = useState(0);

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

  const handlePlayBtn = () => {
    const ctx = new AudioContext();
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      if (ctx.state === 'running') {
        play();
        setIsPlaying(true);
      }
    }
  };

  const audioTitle =
    choosenAudio &&
    choosenAudio.audioTitle &&
    choosenAudio.audioTitle.toUpperCase();

  return (
    <section className='gasa-app-audio-player'>
      <div className='gasa-app-audio-player__img-cover'></div>
      <div>
        <h2 className='gasa-app-audio-player__title'>{audioTitle}</h2>
        <p className='gasa-app-audio-player__subtitle'>Praktyka prowadzona</p>
      </div>
      <div>
        <div className='gasa-app-audio-player__time'>
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
          className='gasa-app-audio-player__time-line'
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <button
          className='gasa-app-audio-player__play-button'
          onClick={handlePlayBtn}
        >
          <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
            {time.min === '?' ? (
              <AiFillQuestionCircle />
            ) : !isPlaying ? (
              <AiFillPlayCircle />
            ) : (
              <AiFillPauseCircle />
            )}
          </IconContext.Provider>
        </button>
      </div>
    </section>
  );
};

export default AudioPlayerComponent;
