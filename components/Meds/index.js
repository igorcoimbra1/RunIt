
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import TopBar from "../TopBar";
import MedItem from './MedItem';
import { UserController } from '../users';

import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Meds({ navigation }) {

    let meds = UserController.loggedUser.meds;
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            meds = UserController.loggedUser.meds;
        }
    }, [isFocused]);

    function AlertInConstruction(){
        Alert.alert('Erro!', 'Pagina em Contrução', [
            { text: 'OK' },
        ]);
    }

    return (
        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.addButtonHolder}>
                <TouchableOpacity onPress={AlertInConstruction} style={styles.mainMenuButton}>
                    <Ionicons name="add-circle-outline" size={40} color={"white"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={meds}
                style={styles.frequencyItemHolder}
                contentContainerStyle={{
                    flexGrow: 1, justifyContent: 'space-evenly',
                    alignItems: "center"
                }}
                renderItem={({ item }) => {
                    return (
                        <MedItem
                            type={item.type}
                            time={item.time}
                            dose={item.dose}
                            date={item.date}
                        />
                    )
                }}
                keyExtractor={(item, index) => {
                    return index
                }}
            />
        </View>
    )

}
