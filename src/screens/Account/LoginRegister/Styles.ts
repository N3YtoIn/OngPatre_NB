import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const styles = StyleSheet.create({

    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    textTitle: {
        fontSize: 50,
        fontWeight: 500,
    },

    containerInput: {
        width:'80%',
    },

    TextTitleInput: {
        fontSize: 17,
        paddingBottom: 1,
        paddingLeft: 10
    },

    InputBox: {
        height: 45,
        borderRadius: 15,
        borderWidth: 1.3,
        paddingLeft: 9
    },

    ForgetPassword: {
        fontSize: 15,
        color: '#595959',
        textDecorationLine: "underline",
    },

    ButtonBox: {
        backgroundColor: '#9EC7DF',
        height: 50,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },



    textCopyright: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.8,
    },

});
