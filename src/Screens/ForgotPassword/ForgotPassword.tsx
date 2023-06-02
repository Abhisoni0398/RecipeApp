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
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
//constants
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';

const ForgotPassword: FC = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState<string>('');
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
            <TextInputWithLabel
              value={email}
              onChangeText={txt => setEmail(txt)}
              placeholder={strings.ENTER_EMAIL_ADDRESS}
              label={strings.EMAIL_ADDRESS}
              icon="envelope"
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.button}>
          <ButtonComp
            btnText={strings.SEND_EMAIL}
            onPress={() =>
              navigation.navigate(navigationStrings.OTP_VERIFICATION)
            }
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
