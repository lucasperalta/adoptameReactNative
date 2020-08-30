import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    console.log('dkdkkdks');
    navigation.navigate('CrearMascota');
  };
  return (
    <Button icon="plus-circle" color="#FFF" onPress={() => handlePress()}>
      Ciente
    </Button>
  );
};

export default BarraSuperior;
