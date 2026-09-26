import {configureStore, createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (store, action)
  }

});

const myntraStore = configureStore({
  reducer:{
    items:itemsSlice.reducer
  }
});
export default myntraStore;


