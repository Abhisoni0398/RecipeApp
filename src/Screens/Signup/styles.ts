import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    txtStyle: {
      textAlign: 'center',
      fontFamily: fontFamily.medium,
      color: colors.gray,
      marginBottom: moderateScale(4),
    },
    termTxt: {
      fontFamily: fontFamily.bold,
      color: colors.black,
    },
  });

export default styles