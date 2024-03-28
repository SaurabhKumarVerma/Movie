/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {RootState} from '../../redux/store';
import {useAppDispatch, useAppSelector} from '../../redux/hook';
import {movieList} from '../../redux/slice/MovieListSlice';
import ScreenLoader from '../../Base/ScreenLoader';
import TradingList from './TradingList';

const Home = () => {
  const movieDataList = useAppSelector((state: RootState) => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(movieList());
  }, []);

  return (
    <SafeAreaView style={{marginHorizontal: 20, flex: 1}}>
      {movieDataList.isLoading && (
        <ScreenLoader isVisible={movieDataList.isLoading} />
      )}
      <TradingList />
    </SafeAreaView>
  );
};

export default Home;
