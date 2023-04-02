// @app
import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';

import {
  useDispatch, useSelector
} from 'react-redux';


const MyPlace = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={{}}>
      <Text>MyPlace</Text>

    </View >
  );
};
export default MyPlace;
