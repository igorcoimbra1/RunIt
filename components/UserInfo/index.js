
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import TopBar from '../TopBar';
import { Ionicons } from '@expo/vector-icons';
import { UserController } from '../users';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function UserInfo(props) {
    let USER = UserController.loggedUser;
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            USER = UserController.loggedUser;
        }
    }, [isFocused]);


    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation} />
            <View style={styles.topHolder}>
                <Ionicons name="person" size={200} color={"white"} style={styles.icon} />
                <TouchableOpacity onPress={() => props.navigation.navigate("UserEdit")} style={styles.mainMenuButton}>
                    <Ionicons name="create" size={40} color={"white"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoHolder}>
                <Text style={styles.text}>{USER.name}</Text>
                <Text style={styles.text}>{USER.age} Anos</Text>
                <Text style={styles.text}>{USER.weight} Kg</Text>
                <Text style={styles.text}>{USER.height} Cm</Text>
                <Text style={styles.text}>{USER.email}</Text>
            </View>
            <TouchableOpacity onPress={logOut} style={styles.logoutButton}>
                <Ionicons name="log-out-outline" size={40} color={"white"} style={styles.icon} />
                <Text style={styles.text}>SAIR</Text>
            </TouchableOpacity>
        </View>
    )


    function logOut() {
        UserController.loggedUser = {};
        props.navigation.navigate("LoginScreen");
    }
};
