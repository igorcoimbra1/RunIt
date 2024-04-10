import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "90%"
    },
    button:{
        height: 50,
        margin: 12,
        padding: 10,
        minWidth: "90%",
        backgroundColor: darkTheme.buttonColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    },
    text:{
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default styles;