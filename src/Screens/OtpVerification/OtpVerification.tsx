//import liraries
import React, {Component, FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
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
//3rd party
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const OtpVerification: FC = (props: any) => {
  const {navigation} = props;
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
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <ButtonComp
              btnText={strings.CONFIRM}
              onPress={() =>
                navigation.navigate(navigationStrings.RESET_PASSWORD)
              }
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

//make this component available to the app
export default OtpVerification;
