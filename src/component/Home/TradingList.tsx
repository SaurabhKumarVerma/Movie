import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constant/color';
import {RootState} from '../../redux/store';
import {useAppSelector} from '../../redux/hook';
import ListMovie from '../../Base/ListMovie';
import {IMovie} from '../../types/interface/IMovie.interface';

const TradingList = () => {
  const movieDataList = useAppSelector((state: RootState) => state.movie);

  const renderItem = (item: IMovie) => {
    return (
      <View>
        <ListMovie item={item} />
      </View>
    );
  };

  return (
    <View>
      <View style={{paddingTop: 10}}>
        <Text style={styles.titleText}>Popular</Text>
      </View>

      <FlatList
        data={movieDataList.movieData}
        keyExtractor={(item, _) => item.id.toString()}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '24%'}}
      />
    </View>
  );
};

export default TradingList;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.black,
    letterSpacing: 1,
    marginBottom: 30,
  },
});
