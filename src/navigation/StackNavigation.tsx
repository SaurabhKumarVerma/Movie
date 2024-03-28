import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenName} from '../types/ScreenType/ScreenName';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import MovieDetails from '../component/Home/MovieDetails';
import {IMovie} from '../types/interface/IMovie.interface';

export type RootStackParamList = {
  [ScreenName.HOME]: undefined;
  [ScreenName.MOVIE_DETAILS]: {details: IMovie};
};

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.HOME} component={HomeScreen} />
      <Stack.Screen name={ScreenName.MOVIE_DETAILS} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
