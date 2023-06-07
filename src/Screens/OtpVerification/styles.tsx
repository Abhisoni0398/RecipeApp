import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otp: {
    width: '80%',
    height: moderateScale(180),
  },
  underlineStyleBase: {
    backgroundColor: colors.blackOpacity10,
    borderRadius: moderateScale(48),
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: moderateScale(16),
    width: moderateScale(58),
    height: moderateScale(58),
  },
  resendOtp: {
    alignItems: 'center',
    marginBottom: moderateScale(24),
  },
  textStyle: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: moderateScale(16),
  },
});

export default styles;
