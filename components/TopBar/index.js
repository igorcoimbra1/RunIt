import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { darkTheme } from "../darkThemePallete";
import { View, Text, TouchableOpacity } from 'react-native';

export default function TopBar(props) {

    const onPress = () => console.log("Clicked!!");

    return (
        <View style={styles.background}>
            {/* <View style={styles.btnHolder}>
                <TouchableOpacity onPress={() => console.log("Clicked")} style={styles.menuButton}>
                    <Ionicons name="menu" size={30} color={darkTheme.fontMainColor} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.titleHolder}>
                <Text style={styles.appTitle} onPress={()=>props.navigation.navigate('MenuPrincipal')}>RUN IT</Text>
            </View>
            <View style={styles.btnHolderRight}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('UserInfo')} style={styles.menuButton}>
                    <Ionicons name="person-circle-outline" size={30} color={darkTheme.fontMainColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}