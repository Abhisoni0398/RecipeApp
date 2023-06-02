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
  bottomTxt?: string;
  onPressRight: () => void;
  headerStyle?: object; //? means its is an optional
}

const HeaderComp: FC<Props> = props => {
  const {leftText, onPressRight, headerStyle, bottomTxt} = props;
  return (
    <View style={{}}>
      <View style={{...styles.headerStyle, ...headerStyle}}>
        <TouchableOpacity onPress={onPressRight}>
          <Image source={imagePath.ic_back} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.textStyle}>{leftText}</Text>
        </View>
      </View>
      <Text style={styles.bottomTxt}>{bottomTxt}</Text>
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
  imgStyle: {width: moderateScale(25), height: moderateScale(25)},
  bottomTxt: {
    marginTop: moderateScale(16),
    fontFamily: fontFamily.medium,
    color: colors.blackOpacity80,
    lineHeight: moderateScale(18),
    fontSize: moderateScale(14),
  },
});

export default HeaderComp;
