import React from 'react';
import { styles } from "./Styles";
import { router } from "expo-router"
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const ForgetPassword = () => {
    return (
        <View style={styles.contain}>
            <Text style={styles.textTitle}>Cadastre-se</Text>

            <View style={styles.containerInput}>
                <Text style={styles.TextTitleInput}>E-mail</Text>
                <TextInput
                    placeholder='Digite E-mail Cadastrado...'
                    placeholderTextColor='#595959'
                    inputMode='email'

                    style={styles.InputBox}
                />
            </View>

            <TouchableOpacity style={styles.ButtonBox}>
                <Text style={[styles.TextTitleInput, {paddingLeft: 0, fontWeight: '500', color:'#262626'}]}>Enviar</Text>
            </TouchableOpacity>


            <View>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
}