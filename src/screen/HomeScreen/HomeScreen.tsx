import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../../component/Home/Home';
import {colors} from '../../constant/color';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 12}}>
      <View style={{marginTop: 50}}>
        <Text style={styles.textStyle}>Movies</Text>
      </View>

      <Home />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: colors.black,
    letterSpacing: 2,
  },
});
