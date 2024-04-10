
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import TopBar from "../TopBar";
import WeightHistory from './WeightHistory';
import { UserController } from '../users';

import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function WeightController({ navigation }) {

    let weightHystory = UserController.loggedUser.weightHystory;
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            weightHystory = UserController.loggedUser.weightHystory;
        }
    }, [isFocused]);

    return (
        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.addButtonHolder}>
                <TouchableOpacity onPress={() => navigation.navigate("AddWeight")} style={styles.mainMenuButton}>
                    <Ionicons name="add-circle-outline" size={40} color={"white"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={weightHystory}
                style={styles.weightItemHolder}
                contentContainerStyle={{
                    flexGrow: 1, justifyContent: 'space-evenly',
                    alignItems: "center"
                }}
                renderItem={({ item }) => {
                    return (
                        <WeightHistory
                            weight={item.weight}
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
