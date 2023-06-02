import {View, Text} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
//custom components

const ResetPassword = (props: any) => {
  const {navigation} = props;
  return (
    <WrapperContainer>
      <HeaderComp
        leftText={strings.CREATE_PASSWORD}
        onPressRight={() => navigation.goBack()}
        bottomTxt={strings.PASS_MSG}
      />
    </WrapperContainer>
  );
};

export default ResetPassword;
