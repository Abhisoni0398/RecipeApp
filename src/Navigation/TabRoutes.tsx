import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import * as Screens from '../Screens'; //import all screens
import * as Animatable from 'react-native-animatable';
import navigationStrings from '../constants/navigationStrings';
import {moderateScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';

const TabArr = [
  {
    route: navigationStrings.HOME,
    label: 'Home',
    activeIcon: 'home',
    inActiveIcon: 'home',
    component: Screens.Home,
  },
  {
    route: navigationStrings.SEARCH,
    label: 'Search',
    activeIcon: 'search',
    inActiveIcon: 'search',
    component: Screens.Search,
  },
  {
    route: navigationStrings.NOTIFICATION,
    label: 'Notofication',
    activeIcon: 'bell',
    inActiveIcon: 'bell',
    component: Screens.Notification,
  },

  {
    route: navigationStrings.PROFILE,
    label: 'Account',
    activeIcon: 'user',
    inActiveIcon: 'user',
    component: Screens.Profile,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container1}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.tab : colors.tabActive}
          size={20}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: moderateScale(60),
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: moderateScale(30),
          flex: 1,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
});
