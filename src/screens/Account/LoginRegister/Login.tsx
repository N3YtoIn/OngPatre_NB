import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const Login = () => {
    return (
        <View>
            <Text>Faça Login</Text>

            <View>
                <Text>E-mail</Text>
                <TextInput
                
                />
            </View>

            <View>
                <Text>Senha</Text>
                <TextInput
                
                />
            </View>

            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>

            <Text>esqueceu a senha?</Text>

            <View>
                <Text>PATRE | ©</Text>
                <Text>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>

        </View>
    )
}