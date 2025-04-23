import React from 'react';
import LoginScreen from '@/app/loginRegister/login';
import RegisterScreen from '@/app/loginRegister/register';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

export const Home_Login = () => {
    return (
        <ImageBackground
            source={require('@/assets/images/backgrounds/background.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.contain}>
                <Image
                    source={require('@/assets/images/pngs/patreLogo.png')}
                    style={styles.logo}
                />

                <TouchableOpacity 
                style={[styles.buttonPress, {backgroundColor: 'rgba(158, 199, 223, 0.5)',}]}
                onPress={() => router.navigate('/loginRegister/login')}
                >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.buttonPress, {backgroundColor: 'rgba(197, 197, 197, 0.5)',}]}
                onPress={() => router.navigate('/loginRegister/register')}
                >
                    <Text style={styles.textButton}>Cadastrar-se</Text>
                </TouchableOpacity>

                <Image
                    source={require('@/assets/images/pngs/google.png')}
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

