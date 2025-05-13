import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    contentHeader: {
        position: "static",
        flexDirection: "row",
        width: '90%',
        height: '15%',
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 0,
    },

    headerLogo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        left: 0,
    },
    
    headerUser: {
        height: 70,
        width: 70,
        backgroundColor: '#A4A4A4',
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        right: 0,
    },

    contentPet: {
        width: '100%',
        height: '75%',
        alignItems: "center",
        flexDirection: "column"
    },
    imageBack: {
        height: '100%',
        width: '100%',
    },
    buttonsPass: {
        position: "static",
        width: '100%',
        height: '50%',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: '60%'
    },
    
    buttonsActions: {
        width: '100%',
        height: '50%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "10%"
    },

    buttonArrow: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    navContent:{
        position: "fixed",
        bottom: 0,
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        width: '100%',
        height: '10%',
        backgroundColor: '#9EC7DF'
    }
})