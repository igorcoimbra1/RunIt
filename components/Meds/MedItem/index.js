
import {View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { darkTheme } from "../../darkThemePallete";


export default function MedItem(props) {

    return (
        <View style={styles.background}>
            <View style={styles.textHolder}>
                <Text style={styles.mainText}>
                    {props.type}
                </Text>
                <Text style={styles.mainText}>
                    {props.date}
                </Text>
                <Text style={styles.mainText}>
                    {props.time}
                </Text>
                <Text style={styles.mainText}>
                    {props.dose}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    background:{
        backgroundColor: darkTheme.buttonColor,
        width: 250,
        height:150,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10 
    },
    textHolder:{
        display: "flex",
        alignItems: "center",
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
