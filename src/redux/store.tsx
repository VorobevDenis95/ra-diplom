import {configureStore} from '@reduxjs/toolkit';
import topSalesReducer from './slice/topSalesSlice';
import aboutCardReducer from './slice/aboutCardSlice';
import catalogReducer from './slice/catalogSlice';
import cartReducer from './slice/cartSlice';

export default configureStore({
  reducer: {
    topSales: topSalesReducer,
    aboutCard: aboutCardReducer,
    catalog: catalogReducer,
    cart: cartReducer,
  },
});