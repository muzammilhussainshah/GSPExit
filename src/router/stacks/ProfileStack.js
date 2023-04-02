import * as React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// import Profile from '../../screens/Main/Profile';
import More from '../../pages/More/More';

const Stack = createNativeStackNavigator();

function MoreStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="More" component={More} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
    </Stack.Navigator>
  );
}

export default MoreStack;
