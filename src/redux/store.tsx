import {configureStore} from '@reduxjs/toolkit';
import topSalesReducer from './slice/topSalesSlice';

export default configureStore({
  reducer: {
    topSales: topSalesReducer,
  },
});