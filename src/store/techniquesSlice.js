import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GASA_TECHNIQUES_URL = 'gasa-app-data/gasa-techniques.json';

const initialState = {
  name: 'idle | All GaSa techniques',
  copyrights: 'idle | © DeGaSa - Marta Mucha-Balcerek',
  email: 'idle | kontakt@martamucha.pl',
  techniquesForGasaAreas: [],
};

export const fetchTechniques = createAsyncThunk(
  'techniques/fetchTechniques',
  async () => {
    try {
      const response = await axios.get(GASA_TECHNIQUES_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const techniquesSlice = createSlice({
  name: 'techniques',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTechniques.pending, (state, action) => {
        state.name = 'loading | All GaSa techniques';
        state.copyrights = 'loading | © DeGaSa - Marta Mucha-Balcerek';
        state.email = 'loading | kontakt@martamucha.pl';
        console.log('%c LOADING', 'color: MediumTurquoise');
      })
      .addCase(fetchTechniques.fulfilled, (state, action) => {
        console.log(
          '%c FETCH TECHNIQUES FULFILLED:',
          'color: MediumSpringGreen',
          action.payload
        );
        return action.payload;
      })
      .addCase(fetchTechniques.rejected, (state, action) => {
        state.name = 'failed | All GaSa techniques';
        state.copyrights = 'failed | © DeGaSa - Marta Mucha-Balcerek';
        state.email = 'failed | kontakt@martamucha.pl';
        console.log(
          '%c FETCH TECHNIQUES REJECTED:',
          'color: LightCoral',
          action.error.message
        );
      });
  },
});

export const selectAllTechniques = (state) => state.techniques;

export const selectTechniquesByBodyPartName = (state, choosenAreaName) =>
  state.techniques.techniquesForGasaAreas.find(
    (area) => area.areaName === choosenAreaName
  );

export default techniquesSlice.reducer;
