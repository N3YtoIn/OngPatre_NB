import React, { useState } from 'react';
import { styles } from "./Styles";
import { Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { router } from 'expo-router';

export const ConfirmCode = () => {

    const [code, setCode] = useState(["","","","","",""]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <View style={styles.contain}>
            <Text style={[styles.textTitle,{bottom: 80}]}>Confirme o Código</Text>

            <View style={styles.codeBox}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        maxLength={1}
                        keyboardType='numeric'
                    />
                ))}
            </View>


            <TouchableOpacity style={[styles.ButtonBox, {top: 35}]}>
                <Text style={styles.textButton}
                onPress={() => {router.navigate("/loginRegister/altKey")}}
                >Confirmar</Text>
            </TouchableOpacity>


            <View style={[styles.footer,{paddingTop: 78}]}>
                <Text style={styles.textCopyright}>PATRE | ©</Text>
                <Text style={styles.textCopyright}>DESENVOLVIDO POR ESTUDANTES | UNIFECAF</Text>
            </View>
        </View>
    )
};

export default ConfirmCode