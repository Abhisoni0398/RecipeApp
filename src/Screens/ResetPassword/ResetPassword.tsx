import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useCallback, useState} from 'react';
import {moderateScale} from '../../styles/responsiveSize';
//custom components
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
//constants
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
//custom functions
import {showError, showSuccess} from '../../utils/helperFunctions';

const ResetPassword = (props: any) => {
  const {navigation} = props;
  const [password, setPassword] = useState<string>('');
  const [resetpassword, setResetPassword] = useState<string>('');

  const resetPass = useCallback(() => {
    console.log('I am called.');
    if (password.length < 8) {
      return;
    }
    if (password !== resetpassword) {
      showError(strings.PASS_MATCH_ERR);
      return;
    }
    navigation.navigate(navigationStrings.LOGIN);
  }, [password, resetpassword]);

  return (
    <WrapperContainer>
      <HeaderComp
        leftText={strings.CREATE_PASSWORD}
        onPressRight={() => navigation.goBack()}
        bottomTxt={strings.PASS_MSG}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{marginTop: moderateScale(18), flex: 1}}>
          <TextInputWithLabel
            value={password}
            onChangeText={txt => setPassword(txt)}
            placeholder={strings.PASSWORD}
            label={strings.PASSWORD}
            icon="lock"
            icon2="eye"
            password={password}
          />
          <TextInputWithLabel
            value={resetpassword}
            onChangeText={txt => setResetPassword(txt)}
            placeholder={strings.CONFIRM_PASSWORD}
            label={strings.CONFIRM_PASSWORD}
            icon="lock"
            icon2="eye"
          />
          <ButtonComp btnText={strings.RESET_PASSWORD} onPress={resetPass} />
        </View>
      </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};
export default ResetPassword;
