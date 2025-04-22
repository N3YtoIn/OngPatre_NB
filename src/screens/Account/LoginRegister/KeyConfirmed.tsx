import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';

export const KeyConfirmed = () => {
    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom: 30}]}>Senha Alterada</Text>
            
            <TouchableOpacity 
                style={[styles.ButtonBox,{width: '55%'}]}
                onPress={() => router.navigate('/loginRegister/login')}
            >
                <Text style={styles.textButton}>Voltar para Login</Text>
            </TouchableOpacity>
            
            
            <View style={[styles.footer,{top: 168}]}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}