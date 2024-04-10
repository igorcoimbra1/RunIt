import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background:{
        backgroundColor: darkTheme.buttonColor,
        width: 250,
        height:100,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10 
    },
    textHolder:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginLeft: 15
    },
    mainText:{
        fontSize:18,
        color: "white"
    }
});

export default styles;