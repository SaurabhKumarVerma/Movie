import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMovie} from '../types/interface/IMovie.interface';
import {image} from '../../assets/image';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../constant/color';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../types/ScreenType/ScreenName';
import {RootStackParamList} from '../navigation/StackNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface IListMovie {
  item: IMovie;
}

const ListMovie = (props: IListMovie) => {
  const {width} = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.MOVIE_DETAILS, {
          details: props.item,
        })
      }>
      <View>
        <Image source={image.movie1} style={styles.imageStyle} />
      </View>
      <View style={{marginLeft: 20}}>
        <Text style={{width: width * 0.5, fontSize: 18, fontWeight: '600'}}>
          {props.item.movie}
        </Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={20} color={colors.goldColor} />
          <Text style={{marginLeft: 10}}>{props.item.rating} / 10 IMDb</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListMovie;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 6,
  },
  imageStyle: {width: 90, height: 130, borderRadius: 10},
});
