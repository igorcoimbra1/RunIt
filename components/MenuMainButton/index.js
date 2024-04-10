import React, { useState, Alert } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Vibration,
    Pressable,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { darkTheme } from "../darkThemePallete";
import { StyleSheet } from "react-native";
import styles from "./styles";
import TopBar from "../TopBar";

export default function MainMenuButton(props) {



    return (

        <View style={styles.btnBackground}>
            <TouchableOpacity onPress={() => props.screenRedirect()} style={styles.mainMenuButton}>
                <View style={styles.iconHolder}>
                    <Ionicons name={props.icon} size={30} color={"white"} style={styles.icon} />
                </View>
                <View style={styles.textHolder}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}
