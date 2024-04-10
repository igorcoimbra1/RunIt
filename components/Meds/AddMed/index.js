import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    CheckBox
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { darkTheme } from "../../darkThemePallete";
import TopBar from '../../TopBar';
import { UserController } from '../../users';
import CheckBoxGroup from 'react-native-checkbox-group';

export default function AddMed({ navigation }) {

    const [time, onChangeTime] = useState('');
    const [type, onChangeType] = useState('');
    const [dose, onChangeDose] = useState('');
    const [date, onChangeDate] = useState('');

    const options = [
        { label: 'Seg', value: 'Seg' },
        { label: 'Ter', value: 'Ter' },
        { label: 'Qua', value: 'Qua' },
        { label: 'Qui', value: 'Qui' },
        { label: 'Sex', value: 'Sex' },
        { label: 'Sab', value: 'Sab' },
        { label: 'Dom', value: 'Dom' },
    ];


    function addMedAndReturn() {
        if (!time || !distancy || !kcal) return
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
                    onChangeText={onChangeType}
                    value={time}
                    placeholder="Tipo"
                />
            </View>
            <View style={styles.inputHolder}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={addMedAndReturn}>
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
