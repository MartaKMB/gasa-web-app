import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GASA_AUDIO_URL = 'gasa-app-data/gasa-audio.json';

const initialState = {
  name: 'idle | GaSa audio',
  copyrights: 'idle | © DeGaSa - Marta Mucha-Balcerek',
  email: 'idle | kontakt@martamucha.pl',
  audioForGasaPractices: [],
};

export const fetchAudio = createAsyncThunk('audio/fetchAudio', async () => {
  try {
    const response = await axios.get(GASA_AUDIO_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAudio.pending, (state, action) => {
        state = 'loading | GaSa audio';
        console.log('%c LOADING', 'color: MediumTurquoise');
      })
      .addCase(fetchAudio.fulfilled, (state, action) => {
        console.log(
          '%c FETCH AUDIO FULFILLED:',
          'color: MediumSpringGreen',
          action.payload
        );
        return action.payload;
      })
      .addCase(fetchAudio.rejected, (state, action) => {
        state.name = 'failed | GaSa audio';
        console.log(
          '%c FETCH AUDIO REJECTED:',
          'color: LightCoral',
          action.error.message
        );
      });
  },
});

export const selectAllAudio = (state) => state.audio;

export const selectAudioByName = (state, choosenName) =>
  state.audio.audioForGasaPractices.find(
    (singleMP3) => singleMP3.audioName === choosenName
  );

export default audioSlice.reducer;
