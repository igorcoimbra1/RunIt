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

export default function AddFrequency({ navigation }) {

    const [time, onChangeTime] = useState('');
    const [distancy, onChangeDistancy] = useState('');
    const [kcal, onChangeKcal] = useState('');

    function addFrequencyAndReturn(){
        if(!time || !distancy || !kcal)return
        UserController.addFrequency({
            time: time,
            distancy: distancy,
            kcal: kcal
        });
        navigation.navigate("Frequency");
    }

    return (

        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.inputHolder}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTime}
                    value={time}
                    keyboardType="numeric"
                    placeholder="Tempo (s)"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDistancy}
                    value={distancy}
                    keyboardType="numeric"
                    placeholder="Distancia (km)"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeKcal}
                    value={kcal}
                    keyboardType="numeric"
                    placeholder="Kcal"
                />
            </View>
            <View style={styles.inputHolder}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={addFrequencyAndReturn}>
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
