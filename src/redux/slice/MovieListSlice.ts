import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IMovie} from '../../types/interface/IMovie.interface';
import {RootState} from '../store';
import apiService from '../../service/api';

export interface IMovieReduxState {
  movieData: undefined | IMovie;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IMovieReduxState = {
  movieData: undefined,
  isLoading: false,
  isError: false,
};

export const movieList = createAsyncThunk('movieList', async (_, thunkApi) => {
  try {
    const response = await apiService.get<IMovie>('/movies');
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const MovieListSlice = createSlice({
  initialState,
  name: 'movieSlice',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(movieList.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      movieList.fulfilled,
      (state, action: PayloadAction<IMovie>) => {
        state.isLoading = false;
        state.isError = false;
        state.movieData = action.payload;
      },
    );
    builder.addCase(movieList.rejected, state => {
      state.isError = true;
      state.isLoading = false;
      state.movieData = undefined;
    });
  },
});

export const useSelector = (state: RootState) => state.movie;
export default MovieListSlice.reducer;
