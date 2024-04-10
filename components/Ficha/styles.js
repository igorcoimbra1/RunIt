import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background:{
        width: "100%",
        height: "100%",
        backgroundColor: darkTheme.backgroundColor,
    },
    fichaItemHolder:{
        display:"flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
        height: "80%",
        color: "red"
    },
    addButtonHolder:{
        height: "7%",
        display:"flex",
        justifyContent: "center",
        alignItems: "flex-end"
    }
});

export default styles;