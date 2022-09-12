import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/index';

export default configureStore({
  reducer: {
    product: productReducer,
  },
});