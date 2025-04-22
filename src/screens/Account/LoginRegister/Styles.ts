import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    contain: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    textTitle: {
        fontSize: 50,
        fontWeight: 500,
        textAlign: 'center',
    },

    containerInput: {
        width:'80%',
    },

    TextTitleInput: {
        fontSize: 17,
        paddingLeft: 7, 
        paddingBottom: 2,
        fontWeight: 500
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
    textButton:{
        fontSize: 17,
        color: "#262626",
        fontWeight: 500,
        textAlign: "center"
    },

    textCopyright: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.8,
    },

    footer: {
        top: 60
    },
    
    codeBox: {
        flexDirection: "row",
        height: 50,
        width: '100%',
        justifyContent: "center",
        gap: 10
    },

    input: {
        width: 30,
        borderBottomWidth: 1.8,
        textAlign: 'center',
        fontSize: 25,
    }
});
