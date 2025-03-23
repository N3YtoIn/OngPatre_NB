import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/background.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.contain}>
                <Image
                    source={require('../assets/images/pngs/logo.png')}
                    style={styles.logo}
                />

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>

                <Image 
                    source={require('../assets/images/pngs/google.png')}
                    style={styles.googleIcon}
                />

                <View style={styles.footer}>
                    <Text style={styles.textCopyright}>PATRE | ©</Text>
                    <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    contain: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },

    logo: {
        height: 225,
        width: 225,
    },

    buttonLogin: {
        height: 66,
        width: '80%',
        backgroundColor: 'rgba(158, 199, 223, 0.5)',
        borderRadius: 30,
        justifyContent: 'center',
        shadowRadius: 30,
    },

    buttonRegister: {
        height: 66,
        width: '80%',
        backgroundColor: 'rgba(197, 197, 197, 0.5)',
        borderRadius: 30,
        justifyContent: 'center',
        shadowRadius: 30,
    },

    textButton: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
    },

    googleIcon: {
        height: 70,
        width: 70,
        opacity: 0.8,
    },

    footer: {
        alignItems: 'center',
        marginTop: 20
    },

    textCopyright: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.8,
    },

});
