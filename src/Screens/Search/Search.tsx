//import liraries
import React, {Component, FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import Searchbar from '../../Components/Search/Searchbar';
import FoodItem from '../../Components/Search/FoodItem';
//constants
import strings from '../../constants/lang';
import DATA from './Data';
// 3rd party
import {FlashList} from '@shopify/flash-list';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

// create a component
const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <WrapperContainer>
      <Header leftText={strings.SEARCH} />
      <Searchbar value={value} onChange={(txt: string) => setValue(txt)} />
      <Text style={styles.recent}>Recent Searches</Text>
      <FlashList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FoodItem
            img1={item.image1}
            img2={item.image2}
            title={item.title}
            name={item.name}
          />
        )}
        estimatedItemSize={200}
        ListFooterComponentStyle={{marginBottom: '15%'}}
      />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recent: {
    fontFamily: fontFamily.medium,
    fontSize: moderateScale(20),
    marginBottom: moderateScale(12),
  },
});

//make this component available to the app
export default Search;
