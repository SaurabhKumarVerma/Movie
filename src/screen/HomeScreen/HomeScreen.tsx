import {StyleSheet, View} from 'react-native';
import React from 'react';
import Home from '../../component/Home/Home';

interface IHomeScreen {}

const HomeScreen = (props: IHomeScreen) => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
