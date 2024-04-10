
import {
    View,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

export default function FichaItem(props) {

    return (
        <View style={styles.background}>
            <View style={styles.textHolder}>
                <Text style={styles.mainText}>
                    {props.exerciceName}
                </Text>
                <Text style={styles.mainText}>
                    {props.repeatNumber} REPETIÇÕES
                </Text>
                <Text style={styles.mainText}>
                <Ionicons name="barbell-outline" size={20} color={"white"} style={styles.icon} />
                     {props.weight} KG
                </Text>
            </View>
        </View>
    )
}
