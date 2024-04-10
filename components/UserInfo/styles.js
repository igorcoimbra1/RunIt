import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({

    background:{
        width: "100%",
        height: "100%",
        backgroundColor: darkTheme.backgroundColor,
    },
    topHolder:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: "45%"
    },
    infoHolder:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height: "35%"
    },
    text:{
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        margin: 5
    },
    logoutButton:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    }
});

export default styles;