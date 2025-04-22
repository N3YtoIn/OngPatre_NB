import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const Register = () => {
    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom: 10}]}>Cadastre-se</Text>

            <View style={[styles.containerInput, {bottom: 15}]}>
                <Text style={styles.TextTitleInput}>Nome</Text>
                <TextInput
                    placeholder='Seu nome...'
                    placeholderTextColor='#595959'
                    inputMode='text'
                    maxLength={50}

                    style={styles.InputBox}
                />
            </View>

            <View style={[styles.containerInput, {bottom: 15}]}>
                <Text style={styles.TextTitleInput}>Telefone</Text>
                <TextInput
                    placeholder='Digite seu telefone...'
                    placeholderTextColor='#595959'
                    inputMode='tel'
                    maxLength={11}
                    keyboardType='numeric'

                    style={styles.InputBox}
                />
            </View>

            <View style={[styles.containerInput, {bottom: 15}]}>
                <Text style={[styles.TextTitleInput]}>E-mail</Text>
                <TextInput
                    placeholder='Digite seu e-mail...'
                    placeholderTextColor='#595959'
                    inputMode='email'

                    style={styles.InputBox}
                />
            </View>

            <View style={[styles.containerInput, {bottom: 15}]}>
                <Text style={styles.TextTitleInput}>Senha</Text>
                <TextInput
                    placeholder='Digite uma senha...'
                    placeholderTextColor='#595959'
                    secureTextEntry

                    style={styles.InputBox}
                />
            </View>

            <TouchableOpacity style={[styles.ButtonBox,{bottom:10}]}>
                <Text style={styles.textButton}>Registrar</Text>
            </TouchableOpacity>


            <View style={{bottom: 8}}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}