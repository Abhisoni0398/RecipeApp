import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    view1: {flex: 1},
    textStyle: {
      textAlign: 'center',
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
    },
    loginWith: {
      textAlign: 'center',
      marginVertical: moderateScale(6),
      fontFamily: fontFamily.medium,
      color: colors.blackOpacity60,
      fontSize: moderateScale(14),
      letterSpacing: 1,
    },
    noAccount: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signUp: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(16),
      color: colors.gray,
    },
    or: {
        textAlign: 'center',
        fontFamily: fontFamily.medium,
        color: colors.gray,
        fontSize: moderateScale(16),
        marginTop: moderateScale(4)
    },
    bottomTxt: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: moderateScale(8),
    },
  });

export default styles