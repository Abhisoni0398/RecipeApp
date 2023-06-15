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
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
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
  },
  header: {
    fontSize: moderateScale(18),
    fontFamily: fontFamily.bold,
    marginTop: moderateScale(12),
    marginBottom: moderateScale(8),
  },
  title: {
    fontSize: moderateScale(12),
    fontFamily: fontFamily.regular,
    color: colors.gray,
  },
  time: {
    fontSize: moderateScale(12),
    fontFamily: fontFamily.bold,
    color: colors.blackOpacity50,
  },
  view1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipe: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    marginTop: moderateScale(8),
  },
  imgStyle: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(8),
  },
  innerView: {flex: 1, marginLeft: moderateScale(12)},
});

export default styles;
