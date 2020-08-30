import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Login from './views/Login';
import CrearUsuario from './views/CrearUsuario';
import DetallesCliente from './views/DetallesCliente';
import BarraSuperior from './components/ui/Barra';
import MisMascotas from './views/MisMascotas';
import CrearMascota from './views/CrearMascota';
import VerMascota from './views/VerMascota';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Strack = createStackNavigator();

//Defino el tema

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    prymary: '#177472',
    accent: '#0655BF',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Strack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Strack.Screen
              name="Inicio"
              component={Inicio}
              options={{title: 'Componente Principal'}}
            />
            <Strack.Screen
              name="Nosotros"
              component={Nosotros}
              options={{title: 'Compsonente Principal'}}
            />
            <Strack.Screen name="Login" component={Login} />
            <Strack.Screen
              name="CrearUsuario"
              component={CrearUsuario}
              options={{
                title: 'Nueva cuenta',
                headerTitleAlign: 'center',
              }}
            />
            <Strack.Screen
              name="DetallesCliente"
              component={DetallesCliente}
              options={{
                title: 'Detalles Cliente',
                headerTitleAlign: 'center',
              }}
            />
            <Strack.Screen
              name="MisMascotas"
              component={MisMascotas}
              //options={({navigation, route}) => ({
              //headerLeft: (props) => (
              //  <BarraSuperior
              //    {...props}
              //    navigation={navigation}
              //    route={route}
              //  />
              // ),
              //})}
            />
            <Strack.Screen name="CrearMascota" component={CrearMascota} />
            <Strack.Screen
              name="VerMascota"
              component={VerMascota}
              options={{
                title: 'Detalles Cliente',
                headerTitleAlign: 'center',
              }}
            />
          </Strack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
