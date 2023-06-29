import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import {View} from 'react-native-animatable';
import imagePath from '../constants/imagePath';

interface Props {
  img: any;
  size?: number;
  bgColor?: string;
  style?: object;
}
const RoundImg: FC<Props> = props => {
  const {img, size = 104, bgColor = 'red', style} = props;
  return (
    <View>
      {img ? (
        <Image style={styles.imgStyle} source={{uri: img}} />
      ) : (
        <Image source={imagePath.person7} style={styles.imgStyle} />
      )}
    </View>
  );
};

export default RoundImg;

const styles = StyleSheet.create({
  imgStyle: {
    width: moderateScale(104),
    height: moderateScale(104),
    borderRadius: moderateScale(104 / 2),
    // backgroundColor: bgColor,
  },
});
