import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HP, colors, appIcons } from '../../utilities';
import { View, Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

// Bottom Tabs Screens
import HomeStack from '../stacks/HomeStack';
// import LocationStack from '../stacks/LocationStack';
// import CameraStack from '../stacks/CameraStack';
// import EventStack from '../stacks/EventStack';
// import ProfileStack from '../stacks/ProfileStack';
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import CategoriesStack from '../stacks/CategoriesStack';
import MoreStack from '../stacks/ProfileStack';
import GPSExifStack from '../stacks/GPSExifStack';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
import MyPlacesStack from '../stacks/MyPlacesStack';
// import { RFPercentage } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

// const styles = StyleSheet.create({
//   labelStyle: {
//     fontSize: 16,
//     color: 'yellow',
//     fontWeight: 'bold'
//   }
// });

export default BottomTabs = ({ params, navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, presentation: 'fullScreenModal' }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        // activeTintColor: Colors.primary,
        // activeTintColor: colors.p1,
        // inactiveTintColor: 'pink',
        // inactiveTintColor: colors.g5,
        labelPosition: 'below-icon',


        tabStyle: {
          // height: RFPercentage(5),

          height: Platform.OS === 'android' ? RFPercentage(7) : RFPercentage(6),
          // backgroundColor:null,
          backgroundColor: Colors.white,
          // margin: 1
          // backgroundColor: 'black',
          // margin:5
        },
        // tabBarLabelStyle: {
        //   fontSize: 16,
        //   color: 'red',
        //   fontWeight: 'bold'
        // }
      }}>
      <Tab.Screen
        component={HomeStack}
        name={'Home'}
        // tan
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Entypo size={RFPercentage(3)} name="home" color={focused ? Colors.primary : Colors.black} />
            // <Image source={appIcons.home} style={styles.iconStyle} />
          ),
        }}
      />
      <Tab.Screen
        component={MyPlacesStack}
        name={'MyPlace'}
        options={{
          tabBarLabel: 'My Place',
          // tabBarLabelStyle: {
          //   fontSize: RFPercentage(2)
          // },
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name='map-marker-alt' size={RFPercentage(2.5)} color={focused ? Colors.primary : Colors.black} />
            // <></>
            // <Image source={appIcons.profile} style={styles.iconStyle} />
          ),
        }}
      />
      <Tab.Screen
        component={CategoriesStack}
        name={'Categories'}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ focused }) => (
            // <FontAwesome5 />
            <MaterialIcons name='category' size={RFPercentage(3)} color={focused ? Colors.primary : Colors.black} />

            // <Image source={appIcons.profile} style={styles.iconStyle} />
          ),
        }}
      />
      <Tab.Screen
        component={GPSExifStack}
        name={'GPSExif'}
        options={{
          tabBarLabel: 'GPSExif',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name='crosshairs-gps' size={RFPercentage(3)} color={focused ? Colors.primary : Colors.black} />
          //   <Image source={appIcons.profile} style={styles.iconStyle} />
          ),
        }}
      />
      <Tab.Screen
        component={MoreStack}
        name={'More'}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ focused }) => (

            <Feather name='more-horizontal' size={RFPercentage(4)} color={focused ? Colors.primary : Colors.black} />

            // <Image source={appIcons.profile} style={styles.iconStyle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
    bottom: Platform.OS === 'android' ? 5 : 1,
  },
  iconStyle1: {
    width: 30,
    height: 35,
    bottom: Platform.OS === 'android' ? 5 : 1,
  },
  iconContainer: {
    width: 65,
    height: 65,
    bottom: '30%',
    borderWidth: 5,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: 'rgba(222,222,222,0.1)',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  iconStyle2: {
    width: 25,
    height: 25,
  },
});
