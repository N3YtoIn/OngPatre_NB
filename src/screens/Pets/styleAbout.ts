import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#9EC7DF"
    },
    box: {
        height: '90%',
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        alignItems: "center"
    },
    BoxImg: {
        height: "40%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1f1f1f',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    ImageBox: {
        height: 200,
        width: 200,
        borderRadius: '100%',
    },

    nameFont: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#ffffff'
    },

    nameDesc: {
        fontSize: 17,
        color: '#ffffff'
    },

    BoxDesc: {
        height: '60%',
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
    },
    TextBox:{
        height: '20%',
        width: '100%',
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 10
    },
    TextFont: {
        fontSize: 23,   
        fontWeight: "500",
    },
    Text:{
        fontSize: 25,
        
    }
})