
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import TopBar from "../TopBar";
import FrequencyHistory from './FrequencyHistory';
import { UserController } from '../users';

import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Frequency({ navigation }) {

    let frequencyHistory = UserController.loggedUser.frequency;
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            frequencyHistory = UserController.loggedUser.frequency;
        }
    }, [isFocused]);

    return (
        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.addButtonHolder}>
                <TouchableOpacity onPress={() => navigation.navigate("AddFrequency")} style={styles.mainMenuButton}>
                    <Ionicons name="add-circle-outline" size={40} color={"white"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={frequencyHistory}
                style={styles.frequencyItemHolder}
                contentContainerStyle={{
                    flexGrow: 1, justifyContent: 'space-evenly',
                    alignItems: "center"
                }}
                renderItem={({ item }) => {
                    return (
                        <FrequencyHistory
                            type={item.type}
                            time={item.time}
                            distancy={item.distancy}
                            kcal={item.kcal}
                            date={item.date}
                        />
                    )
                }}
                keyExtractor={(item, index) => {
                    return index
                }}
            />
            {/* </View> */}
        </View>
    )

}
