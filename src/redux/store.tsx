import {configureStore, combineReducers} from '@reduxjs/toolkit';
import topSalesReducer from './slice/topSalesSlice';
import aboutCardReducer from './slice/aboutCardSlice';
import catalogReducer from './slice/catalogSlice';
import cartReducer from './slice/cartSlice';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  topSales: topSalesReducer,
  aboutCard: aboutCardReducer,
  catalog: catalogReducer,
  cart: cartReducer,
})

const persidedReducer = persistReducer(persistConfig, rootReducer );

export const store = configureStore({
    reducer: persidedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch