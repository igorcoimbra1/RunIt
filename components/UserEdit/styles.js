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
        justifyContent: "flex-start",
        alignItems: "center",
        height: "90%",
        maxHeight: "90%",
    },
    text:{
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        margin: 5
    },
    input:{
        backgroundColor: "white",
        height: 40,
        margin: 7,
        width: "90%",
        borderRadius: 5,
        padding: 5,
        fontSize: 15
    },
    inputSameLine:{
        backgroundColor: "white",
        height: 40,
        width: "90%",
        borderRadius: 5,
        padding: 5,
        fontSize: 15
    },
    sameLineInputHolder:{
        display: "flex",
        flexDirection: "row"
    },
    inputHolder:{
        display: "flex",
        flexDirection: "column",
        width: "30%",
    },
    inputText:{
        color: "white",
        fontSize: 15,
        width: "90%"
    },
    button:{
        backgroundColor: darkTheme.buttonColor,
        width: 250,
        height:50,
        marginTop: 20,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",   
    },
    buttonText:{
        fontSize: 30
    }
});

export default styles;