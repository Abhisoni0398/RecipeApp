//import liraries
import React, {Component, FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
//custom components
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import BottomTxt from '../../Components/BottomTxt';
//constants
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
//custom functions
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunctions';
//3rd party
import {useForm} from 'react-hook-form';

const ForgotPassword: FC = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState<string>('');

  const sendCode = () => {
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  return (
    <WrapperContainer>
      <HeaderComp
        leftText={strings.FORGOT_PASS}
        onPressRight={() => navigation.goBack()}
        bottomTxt={strings.SEND_LINK}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{marginTop: moderateScale(18), flex: 1}}>
            <BottomTxt
              control={control}
              label={strings.EMAIL_ADDRESS}
              placeholder={strings.EMAIL_ADDRESS}
              show={true}
              name={strings.EMAIL_ADDRESS}
              pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              msg={strings.VALID_MAIL}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.button}>
          <ButtonComp
            btnText={strings.SEND_EMAIL}
            onPress={handleSubmit(sendCode)}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {justifyContent: 'flex-end', marginBottom: moderateScale(18)},
});

//make this component available to the app
export default ForgotPassword;
