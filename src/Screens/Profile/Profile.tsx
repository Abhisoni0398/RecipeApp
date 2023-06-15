//import liraries
import React, {Component, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
//constants
import strings from '../../constants/lang';

// create a component
const Profile: FC = () => {
  return (
    <WrapperContainer>
      <Header leftText={strings.MY_PROFILE} />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Profile;
