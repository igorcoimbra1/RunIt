import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background:{
        width: "100%",
        height: "100%",
        backgroundColor: darkTheme.backgroundColor,
    },
    menuButtonsHolder:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90%"
    }
});

export default styles;