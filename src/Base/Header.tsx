import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constant/color';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.container}>
        <Ionicons name="arrow-back-sharp" size={20} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: colors.black,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'absolute',
    zIndex: 1,
    marginHorizontal: 20,
  },
});
