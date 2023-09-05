import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GASA_FILE_URL = 'gasa-app-data/gasa-files.json';

const initialState = {
  name: 'idle | GaSa files',
  copyrights: 'idle | © DeGaSa - Marta Mucha-Balcerek',
  email: 'idle | kontakt@martamucha.pl',
  fileForGasaPractices: [],
};

export const fetchFile = createAsyncThunk('audio/fetchFile', async () => {
  try {
    const response = await axios.get(GASA_FILE_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFile.pending, (state, action) => {
        state = 'loading | GaSa file';
        console.log('%c LOADING', 'color: MediumTurquoise');
      })
      .addCase(fetchFile.fulfilled, (state, action) => {
        console.log(
          '%c FETCH FILE FULFILLED:',
          'color: MediumSpringGreen',
          action.payload
        );
        return action.payload;
      })
      .addCase(fetchFile.rejected, (state, action) => {
        state.name = 'failed | GaSa audio';
        console.log(
          '%c FETCH FILE REJECTED:',
          'color: LightCoral',
          action.error.message
        );
      });
  },
});

export const selectAllFiles = (state) => state.audio;

export const selectFileByName = (state, choosenName) =>
  state.file.fileForGasaPractices.find(
    (singleFile) => singleFile.fileName === choosenName
  );

export default fileSlice.reducer;
