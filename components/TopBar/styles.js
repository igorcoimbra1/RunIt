import { StyleSheet } from "react-native";
import { darkTheme } from "../darkThemePallete";
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "10%",
        backgroundColor: "#2d2d30",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    appTitle:{
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
        color: darkTheme.fontMainColor
    },
    menuButton: {

    },
    btnHolder:{
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "15%",
        position: "absolute",
        left: 15,
        zIndex: 99
    },
    btnHolderRight:{
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "15%",
        position: "absolute",
        left: 15,
        zIndex: 99
    },
    titleHolder: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: 5,
        position: "absolute",
    }
});

export default styles;


