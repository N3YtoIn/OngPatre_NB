import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const Login = () => {
    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom:80}]}>Login</Text>

            <View style={[styles.containerInput,{bottom: 25}]}>
                <Text style={styles.TextTitleInput}>E-mail</Text>
                <TextInput
                    placeholder='Digite seu e-mail...'
                    placeholderTextColor='#595959'
                    inputMode='email'

                    style={styles.InputBox}
                />
            </View>

            <View style={[styles.containerInput,{bottom: 25}]}>
                <Text style={styles.TextTitleInput}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha...'
                    placeholderTextColor='#595959'
                    secureTextEntry

                    style={styles.InputBox}
                />
            </View>

            <TouchableOpacity style={styles.ButtonBox}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <Text 
            style={[styles.ForgetPassword,{top: 25}]}
            onPress={() => router.navigate('/loginRegister/forgetPassword')}
            >esqueceu a senha?</Text>

            <View style={styles.footer}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}