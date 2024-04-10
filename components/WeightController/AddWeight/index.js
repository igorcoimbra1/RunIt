import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { darkTheme } from "../../darkThemePallete";
import TopBar from '../../TopBar';
import { UserController } from '../../users';

export default function AddWeight({ navigation }) {

    const [weight, onChangeWeight] = useState('');

    function addWeightAndReturn(){
        if(!weight || weight === "")return
        UserController.addWeight(weight);
        navigation.navigate("WeightController");
    }

    return (

        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.inputHolder}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWeight}
                    value={weight}
                    keyboardType="numeric"
                    placeholder="KG"
                />
            </View>
            <View style={styles.inputHolder}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={addWeightAndReturn}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        backgroundColor: darkTheme.backgroundColor,
        height: "100%",
        display: "flex",
        flexDirection: "column",

    },
    inputHolder: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "30%",
        width: "100%",
    },
    input: {
        backgroundColor: "white",
        height: 40,
        margin: 7,
        width: "90%",
        borderRadius: 5,
        padding: 5,
        fontSize: 15
    },
    button: {
        backgroundColor: darkTheme.buttonColor,
        width: 250,
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 30
    }
});
