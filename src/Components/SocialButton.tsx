import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
  btnText: string,
  btnTextStyle?: object,
  icon: string;
  btnStyle?: object //? means its is an optional 
}

const SocialButton: FC<Props> = (props) => {
  const { onPress, btnText, btnStyle, btnTextStyle, icon } = props
  return (
    <TouchableOpacity
      style={{ ...styles.btnStyle, ...btnStyle }}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}
    >
        <View style = {styles.view}>
            <Icon name={icon} size={25} color='white' />
      <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.black,
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(30),
    marginVertical: moderateScale(8)
  },
  btnTextStyle: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    paddingHorizontal: moderateScale(12)
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default SocialButton;
