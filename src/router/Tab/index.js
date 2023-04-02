import {
  NavigationContainer,
  // useNavigationContainerRef,
} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
// import LevelScreen from '../../pages/LevelScreen/LevelScreen';
import Splash from '../../pages/Splash/Splash';
// import MainScreen from '../../pages/MainScreen/MainScreen';
// import HelpScreen from '../../pages/HelpScreen/HelpScreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// import analytics from '@react-native-firebase/analytics';
import { useRef } from 'react';
import BottomTabs from './BottomTabs';


export default function Navigation() {
  return (
    <NavigationContainer
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const AppStack = createStackNavigator();
// const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='App'
    >
      <AppStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name={'App'}
        component={BottomTabs}
      />
      {/* <AppStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name={'App'}
        component={BottomTabs}
      /> */}
      <AppStack.Screen name="Splash" component={Splash} />
    </AppStack.Navigator>
  );
}
