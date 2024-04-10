import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({
    mainMenuButton:{
        backgroundColor: darkTheme.buttonColor,
        width: 250,
        height:100,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        
    },
    btnBackground:{
        width: "100%",
        height:130,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    background:{
        width: "100%",
        height: "100%",
        backgroundColor: darkTheme.backgroundColor
    },
    text:{
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    icon:{
        
    },
    iconHolder:{
        width: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textHolder:{
        width: "80%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;