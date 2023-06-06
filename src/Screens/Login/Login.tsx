//import liraries
import React, {Component, FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import actions from '../../redux/actions';
//custom components
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import ButtonComp from '../../Components/ButtonComp';
import SocialButton from '../../Components/SocialButton';
//styling
import styles from './styles';
import colors from '../../styles/colors';
//constants
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';

// create a component
const Login: FC = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onLogin = () => {
    actions.login(true);
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          leftText="Login"
          onPressRight={() => console.log('Hello')}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.view1}>
            <TextInputWithLabel
              value={email}
              onChangeText={txt => setEmail(txt)}
              placeholder={strings.ENTER_EMAIL_ADDRESS}
              label={strings.EMAIL_ADDRESS}
              icon="envelope"
            />
            <TextInputWithLabel
              value={password}
              onChangeText={txt => setPassword(txt)}
              placeholder={strings.PASSWORD}
              label={strings.ENTER_PASSWORD}
              icon="lock"
              icon2="eye"
            />
            <ButtonComp btnText={strings.LOGIN} onPress={onLogin} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(navigationStrings.FORGOT_PASSWORD)
              }>
              <Text style={styles.textStyle}>{strings.FORGOT_PASSWORD}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.noAccount}>
          <Text style={styles.textStyle}>{strings.NO_ACCOUNT}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style={styles.signUp}>{strings.SIGNUP}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.or}>or</Text>
        <Text style={styles.loginWith}>{strings.LOGIN_WITH}</Text>
        <SocialButton
          btnText={strings.GOOGLE}
          onPress={() => console.log('Coming soon')}
          btnStyle={{backgroundColor: colors.red}}
          icon="google"
        />
        <SocialButton
          btnText={strings.FACEBOOK}
          onPress={() => console.log('Coming soon')}
          btnStyle={{backgroundColor: colors.blue}}
          icon="facebook"
        />
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Login;
