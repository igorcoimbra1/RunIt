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

export default function AddFichaItem({ navigation }) {

    const [weight, onChangeWeight] = useState('');
    const [exerciceName, onChangeName] = useState('');
    const [repeatNumber, onChangeRepeatNumber] = useState('');

    function addFichaItemAndReturn(){
        if(!weight || !exerciceName || !repeatNumber)return
        const fichaItem = {
            weight: weight,
            exerciceName: exerciceName.toUpperCase(),
            repeatNumber: repeatNumber
        };
        UserController.addFichaItem(fichaItem);
        navigation.navigate("Ficha");
    }

    return (

        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.inputHolder}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={exerciceName}
                    placeholder="Nome do Exercicio"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWeight}
                    value={weight}
                    keyboardType="numeric"
                    placeholder="Peso"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRepeatNumber}
                    value={repeatNumber}
                    keyboardType="numeric"
                    placeholder="Repetições"
                />
            </View>
            <View style={styles.inputHolder}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={addFichaItemAndReturn}>
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
        height: "42%",
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
