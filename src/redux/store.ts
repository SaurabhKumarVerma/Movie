import {combineReducers, configureStore} from '@reduxjs/toolkit';
import MovieListSlice from './slice/MovieListSlice';

const rootReducer = combineReducers({
  movie: MovieListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
