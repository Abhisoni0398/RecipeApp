//import liraries
import React, {Component, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

// create a component
const Signup: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

//make this component available to the app
export default Signup;
