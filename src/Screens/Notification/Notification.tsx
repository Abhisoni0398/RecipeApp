//import liraries
import React, {FC} from 'react';
import {View, SectionList, Image, Text, TouchableOpacity} from 'react-native';
//custom components
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
//constants
import strings from '../../constants/lang';
import DATA from './Data';
//styles
import styles from './styles';

// create a component
const Notification: FC = () => {
  return (
    <WrapperContainer>
      <Header leftText={strings.NOTIFICATIONS} />
      <SectionList
        sections={DATA}
        // keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          console.log(item);
          return (
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>
              <Image source={item.image} style={styles.imgStyle} />
              <View style={styles.innerView}>
                <View style={styles.view1}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.recipe}>{item.recipe}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </WrapperContainer>
  );
};

//make this component available to the app
export default Notification;
