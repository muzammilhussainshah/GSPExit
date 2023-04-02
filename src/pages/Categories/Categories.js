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


const Categories = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={{}}>
      <Text>Categories</Text>

    </View >
  );
};
export default Categories;
