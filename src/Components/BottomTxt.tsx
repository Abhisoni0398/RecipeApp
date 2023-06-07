import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import fontFamily from '../styles/fontFamily';
import {moderateScale} from '../styles/responsiveSize';
import strings from '../constants/lang';
import colors from '../styles/colors';

const BottomTxt = () => {
  return (
    <View>
      {true && (
        <View style={styles.bottomTxt}>
          <Text
            style={{
              fontFamily: fontFamily.medium,
              color: password.length < 8 ? colors.red : colors.gray,
            }}>
            {strings.PASSWORD_LENGTH}
          </Text>
          {password.length > 7 && (
            <Icon name={'check'} size={20} color={colors.gray} />
          )}
        </View>
      )}
    </View>
  );
};

export default BottomTxt;

const styles = StyleSheet.create({
  bottomTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
  },
});
