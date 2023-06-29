//import liraries
import React, {Component, FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import Searchbar from '../../Components/Search/Searchbar';
//constants
import strings from '../../constants/lang';

// create a component
const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <WrapperContainer>
      <Header leftText={strings.SEARCH} />
      <Searchbar value={value} onChange={(txt: string) => setValue(txt)} />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Search;
