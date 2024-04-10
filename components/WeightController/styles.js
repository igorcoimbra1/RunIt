import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background:{
        width: "100%",
        height: "100%",
        backgroundColor: darkTheme.backgroundColor,
    },
    weightItemHolder:{
        display:"flex",
        height: "80%",
        maxHeight: "80%",
        color: "red"
    },
    addButtonHolder:{
        height: "10%",
        display:"flex",
        justifyContent: "center",
        alignItems: "flex-end"
    }
});

export default styles;