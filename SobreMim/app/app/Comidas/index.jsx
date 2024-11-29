import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from "../../components/header"

const comidas = [
  { title: 'Morango', image: 'https://www.ceasa-ce.com.br/wp-content/uploads/sites/87/2019/09/morango.jpg' },
  { title: 'Toicinho do Céu', image: 'https://receitatodahora.com.br/wp-content/uploads/2024/07/toucinho-do-ceu-2707-1024x683.jpg' },
  { title: 'Churrasco', image: 'https://static.itdg.com.br/images/auto-auto/d137908679db9d310c65dc6423513bcc/churrasco-barato.jpg' },
  { title: 'Feijoada', image: 'https://www.gastronomia.com.br/wp-content/uploads/2024/01/comida-com-f-feijoada-falafel-fondue-e-muito-mais.jpg' },

];

const TelaComidas = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Comidas" voltarPara="/sobre-mim" />
      <ScrollView>
        {comidas.map((comida, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: comida.image }} style={styles.image} />
            <Text style={styles.title}>{comida.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 710,
    height: 790,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default TelaComidas;