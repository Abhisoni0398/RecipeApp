import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import IFoodProps from '../../Interfaces';
import {moderateScale} from '../../styles/responsiveSize';
import {Image} from 'react-native-animatable';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const FoodItem: FC<IFoodProps> = props => {
  const {img1, img2, name, title} = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Image source={img1} style={styles.imgStyle} />

      <View style={styles.view1}>
        <Text style={styles.text1}>{title}</Text>
        <View style={styles.view2}>
          <Image source={img2} style={styles.img2} />
          <Text style={styles.text2}>{name}</Text>
        </View>
      </View>
      <Image source={imagePath.forward} style={styles.forward} />
    </TouchableOpacity>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  button: {
    marginVertical: moderateScale(8),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imgStyle: {
    width: moderateScale(100),
    height: moderateScale(80),
    borderRadius: moderateScale(12),
  },
  img2: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(9),
  },
  text1: {
    fontFamily: fontFamily.medium,
    fontSize: moderateScale(16),
    color: colors.black,
    maxWidth: '80%',
  },
  text2: {
    fontFamily: fontFamily.regular,
    fontSize: moderateScale(12),
    color: colors.blackOpacity40,
    marginHorizontal: moderateScale(6),
  },
  view1: {
    paddingHorizontal: moderateScale(8),
    flex: 1,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: moderateScale(8),
  },
  forward: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginRight: moderateScale(12),
  },
});
