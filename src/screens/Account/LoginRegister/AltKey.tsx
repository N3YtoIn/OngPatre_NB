import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TextInput, TouchableOpacity, View, } from 'react-native';

export const AltKey = () => {
    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom: 55}]}>Código Confirmado!!</Text>
            
            <View style={[styles.containerInput, {bottom: 40}]}>
                <Text style={styles.TextTitleInput}>Senha Nova</Text>
                <TextInput
                    placeholder='Altere a senha'
                    placeholderTextColor='#595959'
                    secureTextEntry
                    style={styles.InputBox}
                />
            </View>

            <View style={[styles.containerInput, {bottom: 30}]}>
                <Text style={styles.TextTitleInput}>Confirme a Senha</Text>
                <TextInput
                    placeholder='Confirme a senha'
                    placeholderTextColor='#595959'
                    secureTextEntry
                    style={styles.InputBox}
                />
            </View>

            <TouchableOpacity 
                style={styles.ButtonBox}
                onPress={() => {router.navigate("/loginRegister/keyConfirmed")}}
                >
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
            
            
            <View style={[styles.footer,{paddingBottom: 30}]}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}