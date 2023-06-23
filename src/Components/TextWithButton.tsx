import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Image} from 'react-native-animatable';
import fontFamily from '../styles/fontFamily';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

interface IbuttonProps {
  text: string;
  image: any;
  onPress: () => void;
}

const TextWithButton: FC<IbuttonProps> = props => {
  const {text, image, onPress} = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.btnStyle}
        activeOpacity={0.7}
        onPress={onPress}>
        <Image source={image} style={styles.imgStyle} resizeMode="contain" />
        <Text style={styles.txtStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextWithButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.blackOpacity50,
    borderBottomWidth: 0.2,
    paddingVertical: moderateScale(12),
  },
  txtStyle: {
    fontFamily: fontFamily.medium,
    paddingHorizontal: moderateScale(12),
    color: colors.black,
    fontSize: moderateScale(17),
  },
  imgStyle: {
    width: moderateScale(25),
    height: moderateScale(25),
    // tintColor: colors.black,
  },
});
