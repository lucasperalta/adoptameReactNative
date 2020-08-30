import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const Nosotros = ({navigation}) => {
  const volver = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={style.contenedor}>
      <Text>Inicio</Text>
      <Button title="volver" onPress={() => volver()} />
    </View>
  );
};

const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
