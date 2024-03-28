import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React from 'react';

interface IScreenLoader {
  isVisible: boolean;
}

const ScreenLoader = (props: IScreenLoader) => {
  return (
    <Modal transparent visible={props.isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 10,
    alignContent: 'center',
  },
});
export default ScreenLoader;
