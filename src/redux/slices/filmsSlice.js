// libs
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// axios
import axios from '../../utils/axios';

const getFilmByName = createAsyncThunk(
  "films/name",
  async (filmName) => {
  }
);

const initialState = {
  films: [],
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,

  reducers: {

  },
});

export default filmsSlice.reducer;