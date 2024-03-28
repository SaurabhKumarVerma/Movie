import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Header from '../../Base/Header';
import {image} from '../../../assets/image';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../../constant/color';

interface IMovieDetails {}

const MovieDetails = (props: IMovieDetails) => {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={{}}>
      <Header />
      <View>
        <Image source={image.movie1} style={{width: width, borderRadius: 10}} />
      </View>
      <View style={styles.titleText}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>
          Movie: {props.route.params.details.movie}
        </Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={20} color={colors.goldColor} />
          <Text style={{marginLeft: 10}}>
            Rating {props.route.params.details.rating} / 10 IMDb
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  titleText: {marginHorizontal: 20, marginTop: 10},
  ratingContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
});
