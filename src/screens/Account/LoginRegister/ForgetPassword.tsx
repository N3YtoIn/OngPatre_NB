import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const ForgetPassword = () => {
    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom: 80}]}>Recuperar Senha</Text>

            <View style={[styles.containerInput,{bottom: 20}]}>
                <Text style={styles.TextTitleInput}>E-mail</Text>
                <TextInput
                    placeholder='Digite E-mail Cadastrado...'
                    placeholderTextColor='#595959'
                    inputMode='email'

                    style={styles.InputBox}
                />
            </View>

            <TouchableOpacity 
            style={[styles.ButtonBox, {top: 10}]}
            onPress={() => router.navigate('/loginRegister/confirmCode')}
            >
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>


            <View style={[styles.footer,{paddingTop: 60}]}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}