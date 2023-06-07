//import liraries
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//constants
import strings from '../../constants/lang';
//custom components
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import InputWithLabel from '../../Components/InputWithLabel';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
//styling
import styles from './styles';

// create a component
const Signup: FC = (props: any) => {
  const {navigation} = props;
  const [state, setState] = useState<any>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  return (
    <WrapperContainer>
      <HeaderComp
        leftText={strings.CREATE_ACCOUNT}
        onPressRight={() => navigation.goBack()}
      />
      <TextInputWithLabel
        value={state.username}
        onChangeText={txt => setState({username: txt})}
        placeholder={strings.USERNAME}
        label={strings.USERNAME}
        icon="user"
      />
      <View style={{flexDirection: 'row'}}>
        <InputWithLabel
          value={state.firstName}
          onChangeText={txt => setState({firstName: txt})}
          placeholder={strings.FIRST_NAME}
          label={strings.FIRST_NAME}
          icon="user"
          viewStyle={{width: '95%'}}
        />
        <InputWithLabel
          value={state.email}
          onChangeText={txt => setState({email: txt})}
          placeholder={strings.LAST_NAME}
          label={strings.LAST_NAME}
          icon="user"
        />
      </View>
      <TextInputWithLabel
        value={state.email}
        onChangeText={txt => setState({email: txt})}
        placeholder={strings.ENTER_EMAIL_ADDRESS}
        label={strings.EMAIL_ADDRESS}
        icon="envelope"
      />
      <TextInputWithLabel
        value={state.password}
        onChangeText={txt => setState({password: txt})}
        placeholder={strings.PASSWORD}
        label={strings.PASSWORD}
        icon="lock"
        icon2="eye"
      />
      <ButtonComp
        btnText={strings.CONTINUE}
        onPress={() => console.log('account created')}
      />
      <Text style={styles.txtStyle}>{strings.BY_CONTINUE}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.termTxt}>{strings.TERMS}</Text>
        </TouchableOpacity>
        <Text style={styles.txtStyle}>&</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.termTxt}>{strings.PRIVACY_POLICY}</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Signup;
