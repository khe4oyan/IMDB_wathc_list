// libs
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// axios
import axios from '../../utils/axios';

export const fetchFilmByName = createAsyncThunk(
  "fetchFilmByName",
  async (filmName) => {
    const data = await axios.get(`/?t=${filmName}&apikey=186be766`);
    console.log(data);
    return data;
  }
);

const initialState = {
  films: [],
  status: "loading",
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,

  reducers: {
    [fetchFilmByName.pending]: (state) => {
      state.films = [];
      state.status = "loading";
    },
    [fetchFilmByName.fulfilled]: (state, action) => {
      state.films = action.payload;
      console.log(state.films);
      state.status = "loaded";
    },
    [fetchFilmByName.rejected]: (state, action) => {
      state.films = action.payload;
      state.status = "error";
    },
  },
});

export default filmsSlice.reducer;