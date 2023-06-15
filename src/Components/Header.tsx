import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
//styling
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
//images
import imagePath from '../constants/imagePath';
//3rd party

interface Props {
  leftText: string;
  headerStyle?: object; //? means its is an optional
}

const Header: FC<Props> = props => {
  const {leftText, headerStyle} = props;
  return (
    <View style={{}}>
      <View style={{...styles.headerStyle, ...headerStyle}}>
        <View style={{flex: 1}}>
          <Text style={styles.textStyle}>{leftText}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    minHeight: moderateScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.bold,
    color: colors.black,
    textAlign: 'center',
  },
});

export default Header;
