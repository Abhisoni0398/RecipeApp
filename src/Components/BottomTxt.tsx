import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';
import {Controller, FieldValues, Control} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  placeholder?: string;
  inputStyle?: object; //? means its is an optional
  label: string;
  name: string;
  show: boolean;
  control: any;
  secureTextEntry?: boolean;
  pattern?: RegExp | any;
  msg?: string | any;
}

const BottomTxt: FC<Props> = props => {
  const {
    placeholder,
    inputStyle,
    secureTextEntry = false,
    label,
    name,
    show,
    control,
    pattern,
    msg,
  } = props;

  return (
    <View style={{}}>
      <Text style={styles.labelText}>{label} </Text>

      <Controller
        control={control}
        name={name}
        rules={{
          pattern: {
            value: pattern,
            message: msg,
          },

          required: {
            value: show,
            message: 'This field is required!',
          },
        }}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <>
            <View style={styles.viewStyle}>
              <Icon name={'envelope'} size={20} color={colors.black} />
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                style={{
                  ...styles.inputStyle,
                  ...inputStyle,
                }}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && <Text style={styles.bottomTxt}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    ...commonStyles.fontSize14,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(8),
    alignItems: 'center',
    color: colors.black,
    flex: 1,
  },
  labelText: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.medium,
    marginBottom: moderateScaleVertical(12),
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.blackOpacity20,
    borderWidth: 0.8,
    borderRadius: moderateScale(20),
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(12),
    height: moderateScale(40),
  },
  bottomTxt: {
    marginTop: moderateScale(8),
    color: colors.red,
    fontFamily: fontFamily.regular,
  },
});

export default React.memo(BottomTxt);
