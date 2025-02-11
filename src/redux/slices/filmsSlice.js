// libs
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// axios
import axios from "../../utils/axios";

export const fetchFilmByName = createAsyncThunk(
  "fetchFilmByName",
  async (filmName) => {
    const res = await axios.get(`/?t=${filmName}&apikey=186be766`);
    return res.data;
  }
);

const initialState = {
  films: [],
  status: "loading",
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmByName.pending, (state, action) => {
      state.films = [];
      state.status = "loading";
    });
    
    builder.addCase(fetchFilmByName.fulfilled, (state, action) => {
      state.films = action.payload;
      state.status = "loaded";
    });

    builder.addCase(fetchFilmByName.rejected, (state, action) => {
      state.films = action.payload;
      state.status = "error";
    });
  },
});

export default filmsSlice.reducer;
