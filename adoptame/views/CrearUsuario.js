import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const CrearUsuario = () => {
  const leerNmbre = () => {
    console.log('escribiendo...');
  };

  const guardarUsuario = () => {
    console.log('escribiendo...');
  };
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}> Nueva cuenta</Headline>
      <TextInput
        label="Nombre"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />
      <TextInput
        label="Apellido"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />
      <TextInput
        label="Teléfono"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />
      <TextInput
        label="E-Mail"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />
      <TextInput
        label="Contraseña"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />
      <TextInput
        label="Repetir contraseña"
        onChangeText={() => leerNmbre()}
        style={style.input}
      />

      <Button mode="contained" onPress={() => guardarUsuario()}>
        Crear
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});
export default CrearUsuario;
