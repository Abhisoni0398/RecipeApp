import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {Image} from 'react-native-animatable';
import imagePath from '../../constants/imagePath';
import {moderateScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ISearchProps {
  value: string;
  onChange: (txt: string) => void;
}

const Searchbar: FC<ISearchProps> = props => {
  const {value, onChange} = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search here..."
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Icon name="filter" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(18),
  },
  input: {
    flex: 0.96,
    justifyContent: 'center',
    borderRadius: width / 2,
    borderWidth: 0.8,
    borderColor: colors.blackOpacity20,
    height: moderateScale(40),
    paddingHorizontal: moderateScale(18),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.tabActive,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
