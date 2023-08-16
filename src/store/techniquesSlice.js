import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GASA_TECHNIQUES_URL = 'gasa-app-data/gasa-techniques.json';

const initialState = {
  name: 'LOADING - All GaSa techniques',
  copyrights: 'LOADING - © DeGaSa - Marta Mucha-Balcerek',
  email: 'LOADING - kontakt@martamucha.pl',
  techniquesForGasaAreas: [],
};

export const fetchTechniques = createAsyncThunk(
  'techniques/fetchTechniques',
  async () => {
    try {
      const response = await axios.get(GASA_TECHNIQUES_URL);
      console.log('response', response.data);
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
    builder.addCase(fetchTechniques.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllTechniques = (state) => state.techniques;

export default techniquesSlice.reducer;
