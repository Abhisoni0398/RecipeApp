import React, { FC } from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    value: string,
    onChangeText: (text: string) => void;
    placeholder: string,
    inputStyle?: object, //? means its is an optional 
    label: string,
    icon?: string;
}

const TextInputWithLabel: FC<Props> = (props) => {
    const { value, placeholder, onChangeText, inputStyle, label, icon } = props
    return (
        <View style={{marginVertical: moderateScale(8)}}>
            <Text style={styles.labelText}>{label} </Text>
            <View style = {styles.viewStyle}>
            <Icon name={icon} size={20} color={colors.black} />
            <TextInput
                placeholder={placeholder}
                style={{ ...styles.inputStyle, ...inputStyle }}
                value={value}
                onChangeText={onChangeText}
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        ...commonStyles.fontSize14,
        backgroundColor: colors.white,
        borderColor: colors.blackOpacity20,
        paddingHorizontal: moderateScale(8),
        color: colors.black
    },
    labelText: {
        ...commonStyles.fontSize16,
        fontFamily: fontFamily.medium,
        marginBottom: moderateScale(8)
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
    
}
});


export default TextInputWithLabel

