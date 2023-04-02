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


const GPSExif = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={{}}>
      <Text>GPSExif</Text>

    </View >
  );
};
export default GPSExif;
