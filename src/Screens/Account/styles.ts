import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImg: {
      alignItems: 'center',
      marginTop: moderateScale(18),
    },
    centerView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: moderateScale(12),
      marginBottom: '25%',
    },
    txtStyle: {
      fontFamily: fontFamily.medium,
      color: colors.black,
    },
    btnStyle: {
      marginVertical: moderateScale(6),
      backgroundColor: colors.black,
      borderRadius: moderateScale(24),
      paddingHorizontal: moderateScale(18),
      paddingVertical: moderateScale(6),
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnTxt: {
      fontFamily: fontFamily.medium,
      color: colors.white,
    },
  });
  

export default styles