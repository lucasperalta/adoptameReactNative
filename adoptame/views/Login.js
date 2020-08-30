import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Dialog,
  Paragraph,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const Login = ({navigation}) => {
  const crearUsuario = () => {
    navigation.navigate('CrearUsuario');
  };
  const logIn = async () => {
    if (usuario === '' || password === '') {
      ingresarAlerta(true);
      return;
    }
    const postUsuarios = {usuario, password};
    console.log(postUsuarios);
    //'http://10.0.2.2:8090/adoptame/mobile/ingresarMobile',
    try {
      const resultado = await axios.post(
        'http://10.0.2.2:8090/adoptame/mobile/ingresarMobile',
        postUsuarios,
      );
      console.log(resultado);
      if (resultado === null) {
        ingresarAlerta(true);
        return;
      }
      navigation.navigate('MisMascotas');
    } catch (error) {
      console.log(error);
    }
  };
  const [usuario, guardarEmail] = useState('');
  const [password, guardarPass] = useState('');
  const [alerta, ingresarAlerta] = useState(false);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}> Bienvenido!</Headline>
      <TextInput
        label="E-Mail"
        value={usuario}
        onChangeText={(texto) => guardarEmail(texto)}
        style={style.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={(texto) => guardarPass(texto)}
        style={style.input}
      />

      <Button mode="contained" onPress={() => logIn()}>
        Ingresar
      </Button>
      <Button onPress={() => crearUsuario()}>Nueva Cuenta</Button>

      <Portal>
        <Dialog visible={alerta}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => ingresarAlerta(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});
export default Login;
