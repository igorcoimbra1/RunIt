
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import TopBar from "../TopBar";
import FichaItem from '../FichaItem';
import { UserController } from '../users';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Ficha({navigation}) {

    let gymForm = UserController.loggedUser.gymForm;
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            gymForm = UserController.loggedUser.gymForm;
        }
    }, [isFocused]);

    return (
        <View style={styles.background}>
            <TopBar navigation={navigation} />
            <View style={styles.addButtonHolder}>
                <TouchableOpacity onPress={() => navigation.navigate("AddFichaItem")} style={styles.mainMenuButton}>
                    <Ionicons name="add-circle-outline" size={40} color={"white"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={gymForm}
                style={styles.fichaItemHolder}
                contentContainerStyle={{
                    flexGrow: 1, justifyContent: 'space-evenly',
                    alignItems: "center"
                }}
                renderItem={({ item }) => {
                    return (
                        <FichaItem
                            weight={item.weight}
                            repeatNumber={item.repeatNumber}
                            exerciceName={item.exerciceName}
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
