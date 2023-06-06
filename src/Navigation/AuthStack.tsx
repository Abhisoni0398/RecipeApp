import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens'; //import all screens

const Stack = createNativeStackNavigator();

const AuthStack = (isFirstTime: boolean) => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Screens.Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={Screens.OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={Screens.ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.RESET_PASSWORD}
        component={Screens.ResetPassword}
        options={{headerShown: false}}
      />
    </>
  );
};

export default AuthStack;
