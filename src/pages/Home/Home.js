// @app
import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather'
import {
  useDispatch, useSelector
} from 'react-redux';


const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={{}}>
      <Text>Home</Text>
      <Feather size={20} name="home" color='black' />
      {/* <Entypo size={20} color='black' /> */}


    </View >
  );
};
export default Home;
