//import liraries
import React, {Component, FC, useCallback, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
import ButtonComp from '../../Components/ButtonComp';
//3rd party
import OTPInputView from '@twotalltotems/react-native-otp-input';
import navigationStrings from '../../constants/navigationStrings';
//styling
import styles from './styles';
//custom functions
import actions from '../../redux/actions';
import {showError} from '../../utils/helperFunctions';

// create a component
const OtpVerification: FC = (props: any) => {
  const {navigation} = props;
  let paramData = props?.route?.params?.from;

  const [otp, setOtp] = useState<string>('');
  console.log(otp?.length);
  const verifyOtp = () => {
    if (otp?.length < 4) {
      showError(strings.ENTER_OTP);
      return;
    }
    if (paramData === navigationStrings.SIGNUP) {
      actions.login(true);
    } else {
      navigation.navigate(navigationStrings.RESET_PASSWORD);
    }
  };

  return (
    <WrapperContainer>
      <HeaderComp
        leftText={strings.ENTER_CODE}
        onPressRight={() => navigation.goBack()}
        bottomTxt={strings.CODE_TEXT}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{alignItems: 'center', flex: 1}}>
            <OTPInputView
              style={styles.otp}
              pinCount={4}
              code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={code => setOtp(code)}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              onCodeFilled={(code: string) => {
                console.log('code filled');
              }}
            />
            <ButtonComp
              btnText={strings.CONFIRM}
              onPress={verifyOtp}
              btnStyle={{width: '100%'}}
            />
            <TouchableOpacity style={styles.resendOtp} activeOpacity={0.7}>
              <Text style={styles.textStyle}>{strings.RESEND_OTP}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};
//make this component available to the app
export default OtpVerification;
