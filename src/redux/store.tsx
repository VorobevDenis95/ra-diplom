import {configureStore} from '@reduxjs/toolkit';
import topSalesReducer from './slice/topSalesSlice';
import aboutCardReducer from './slice/aboutCardSlice';
import catalogReducer from './slice/catalogSlice';
import cartReducer from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
    aboutCard: aboutCardReducer,
    catalog: catalogReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch