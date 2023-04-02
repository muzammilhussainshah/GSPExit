import * as React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// import Profile from '../../screens/Main/Profile';
import GPSExif from '../../pages/GPSExif/GPSExif';
import MyPlace from '../../pages/MyPlace/MyPlace';

const Stack = createNativeStackNavigator();

function MyPlacesStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MyPlace"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPlace" component={MyPlace} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
    </Stack.Navigator>
  );
}

export default MyPlacesStack;
