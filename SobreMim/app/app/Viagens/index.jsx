import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from "../../components/header"

const viagens = [
  { id: '1', title: 'Hotel Fazzenda Resort | Viagem com a família do meu namorado, um lugar incrível!', year: 2024, image: 'https://images.trvl-media.com/lodging/10000000/9060000/9056000/9055906/d9134afc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' },
  { id: '2', title: 'Rio de Janeiro - Maracanã | Fui sozinha de excurssão apenas pra ver o jogo entre Flamengo x Olimpia pela Libertadores, sensação inesquecível.', year: 2023, image: 'https://i.pinimg.com/736x/6b/35/16/6b3516226d520c1e1f107201927d743b.jpg' },
  { id: '3', title: 'Guarapari - Espírito Santo | Eu e minha família fomos pra ES passar a virada do ano de 2022 para 2023 com os amigos de empresa do meu pai.', year: 2022, image: 'https://www.tiosamimoveis.com.br/wp-content/uploads/2023/11/guarapari-cidade-saude.jpg' },
];

const TelaViagens = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Viagens" voltarPara="/sobre-mim" />
      <FlatList
        data={viagens}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title} - {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '768',
    height: 819,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaViagens;