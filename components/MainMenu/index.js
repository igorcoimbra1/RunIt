import React, { useState, Alert } from "react";
import {
    View,
    Button
} from 'react-native';

import styles from "./styles";
import TopBar from "../TopBar";
import MainMenuButton from "../MenuMainButton";

export default function MainMenu({ navigation }) {



    return (
        <View style={styles.background}>
            <TopBar mainScreenButton={() => navigation.navigate('MenuPrincipal')} navigation={navigation} />
            <View style={styles.menuButtonsHolder}>
                <MainMenuButton text="FREQUÊNCIA" icon="analytics-outline" screenRedirect={() => navigation.navigate('Frequency')}/>
                <MainMenuButton text="FICHA" icon="document-outline" screenRedirect={() => navigation.navigate('Ficha')}/>
                <MainMenuButton text="REMÉDIO" icon="medkit-outline" screenRedirect={() => navigation.navigate('Meds')}/>
                <MainMenuButton text="CONTROLE DE PESO" icon="bar-chart-outline" screenRedirect={() => navigation.navigate('WeightController')}/>
            </View>

        </View>
    )
}
