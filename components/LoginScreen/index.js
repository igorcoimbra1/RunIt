import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import { UserController } from '../users';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            setPassword('');
            setUsername('');
        }
      }, [isFocused]);


    const handleLogin = () => {
        const user = UserController.users.find(user => user.login === username);
        console.log(user)
        if (!user) {
            callErrorMessage()
        }else{
            if(!password || password.toLowerCase !== user.password.toLowerCase){
                callErrorMessage()
            }else{
                UserController.setloggedUser(user);
                navigation.navigate('MenuPrincipal');
            }
        }

        function callErrorMessage(){
            Alert.alert('Usuário ou Senha não encontrados', 'Verifique os dados de login', [
                { text: 'OK' },
            ]);
        }
    };

    const handleCreateAccount = () => {
        navigation.navigate('UserEdit');
    };

    return (
        <View style={styles.background}>
            <Image source={require('../../assets/Logo.png')} />
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.text}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                <Text style={styles.text}>
                    Criar Acesso
                </Text>
            </TouchableOpacity>
        </View>
    );
};
