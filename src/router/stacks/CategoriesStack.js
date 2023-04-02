import * as React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// import Profile from '../../screens/Main/Profile';
import Categories from '../../pages/Categories/Categories';

const Stack = createNativeStackNavigator();

function CategoriesStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} />
    </Stack.Navigator>
  );  
}

export default CategoriesStack;
