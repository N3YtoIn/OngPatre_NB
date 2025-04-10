import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    contain: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35
    },

    logo: {
        height: 200,
        width: 200,
    },

    buttonPress: {
        height: 60,
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        shadowRadius: 30,
    },

    textButton: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
    },

    googleIcon: {
        height: 50,
        width: 50,
        opacity: 0.8,
    },

    textCopyright: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.8,
    },

    footer: {
        top: 23
    },
});
