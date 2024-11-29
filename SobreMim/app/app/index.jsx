import React from 'react';
import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header.js';

const TelaInicio = () => {
    return (
        <View style={styles.container}>
            <Header title="Sobre Mim" voltarPara="./" />
            <View style={styles.content}>
                <Image
                    source={require("../assets/images/luiza.jpeg")}
                    style={styles.profileImage}
                />
                <Text style={styles.welcomeText}>Bem-vindo ao meu app!</Text>
                <Text style={styles.descriptionText}>
                    Meu nome é Luiza Hieger da Silva, tenho 17 anos e estudo Desenvolvimento de Sistemas no SENAI. 
                    Moro com meus pais, meus 2 irmãos e tenho 5 cachorrinhas. 
                    Namoro há quase 1 ano e meus planos pro futuro consistem em morar junto com ele, cursar Direito e ter estabilidade financeira.
                </Text>
                <Link href="/sobremim/comidas">
                    <Pressable style={styles.Button} >MINHAS COMIDAS FAVORITAS</Pressable>
                </Link>
                <Link href="/sobremim/viagens">
                    <Pressable style={styles.Button} >MINHAS MELHORES VIAGENS</Pressable>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 200,
        height: 300,
        marginBottom: 20,
        borderRadius: 50
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 10,
    }, 
    Button:{marginBottom:10,width:400,backgroundColor:"#87ceeb"}
});

export default TelaInicio;