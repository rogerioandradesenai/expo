import React from 'react';
// você deve importar a blioteca MapView para poder renderizar mapas
// e a Maker paa pode adicionar marcadores (pontos que indicam uma determinada localização 
// no mapa
import MapView, { Marker } from 'react-native-maps';
// você deve importar Stylesheet para poder estilar os componentes do react
import { StyleSheet, View } from 'react-native';

// função principal que inicia (start) o aplicativo
export default function App() {
  // propriedade initialRegion (Região Incial) define a área do mapa a ser renderizada
  // Unidade em graus, referente a latitude e longitude
  const initialRegion = {
    latitude: 6.841776681,// ponto central em relação latitude
    longitude: 79.869319,// ponto central em relação Logintude
    latitudeDelta: 0.0922,// este dois últimos são a distância a partir do ponto central
    longitudeDelta: 0.0421,// quanto menor mais próximo (zoom in), quanto maior (zoom out)
  };

 // states de marcadores, é um array (indicado pelo uso de [] <colchetes)
 // cada definição entre {} indica um marcador, então temos 2 marcadores
 // o marcador deve ter latitude, longitude, título (quanto para o mouse  e clica mostra)
  const markers = [
    { id: 1, coordinate: { latitude: 6.841776681, longitude: 79.869319 }, title: 'Marcador 1' },
    { id: 2, coordinate: { latitude: 6.842, longitude: 79.87 }, title: 'Marcador 2' }
  ];
// atenção marker.map percorre cada marcador do array. Funciona como um laço de repetição
// e para cada um delete adicionar um marcador (maker) e transfere as informações do
// array para as propriedades do marcador
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          {markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
