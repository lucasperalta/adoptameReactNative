import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {List, Headline, FAB} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const MisMascotas = ({navigation}) => {
  const [mascotas, guardarMascotas] = useState([]);
  const [consultarMascotas, gConsMascotaApi] = useState(true);
  useEffect(() => {
    const obtenerMascotas = async () => {
      try {
        const resultado = await axios.get('http://10.0.2.2:3000/usuarios');
        console.log(resultado.data);
        guardarMascotas(resultado.data);
        console.log('paso por obetener mascotas');
      } catch (error) {
        console.loge(error);
      }
    };
    if (consultarMascotas) {
      obtenerMascotas();
      gConsMascotaApi(false);
    }
  }, [consultarMascotas]);

  return (
    <View>
      <Headline style={globalStyles.titulo}>
        {mascotas.length > 0 ? 'Mis mascotas' : 'Aún no cargaste mascotas'}{' '}
      </Headline>
      <FlatList
        keyExtractor={(mascotas) => mascotas.id.toString()}
        data={mascotas}
        renderItem={({item}) => (
          <List.Item
            title={item.usuario}
            description={item.password}
            onPress={() =>
              navigation.navigate('VerMascota', {item, gConsMascotaApi})
            }
          />
        )}
      />
      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => {
          navigation.navigate('CrearMascota', {gConsMascotaApi});
        }}
      />
    </View>
  );
};

export default MisMascotas;
