import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  startIndex: 6,
  items: [],
  total: 0,
};

export const fetchBooksApi = createAsyncThunk(
  "books/fetchBooksApi",
  async ({ search, startIndex }) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=6&startIndex=${startIndex}`
    );
    return res.data.items;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setStartIndex(state, action) {
      state.startIndex = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksApi.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log("all is okay");
    });
    builder.addCase(fetchBooksApi.pending, (state, action) => {
      state.items = [];
      console.log("send request");
    });
    builder.addCase(fetchBooksApi.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export const { setStartIndex, setItems, setTotal } = bookSlice.actions;

export default bookSlice.reducer;
