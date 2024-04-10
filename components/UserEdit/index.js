
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import TopBar from '../TopBar';
import { Ionicons } from '@expo/vector-icons';
import { UserController } from '../users';

export default function UserEdit(props) {
    const USER = UserController.loggedUser;
    const [name, onChangeName] = useState(USER.name);
    const [age, onChangeAge] = useState(USER.age);
    const [height, onChangeHeight] = useState(USER.height);
    const [weight, onChangeWeight] = useState(USER.weight);
    const [email, onChangeEmail] = useState(USER.email);
    const [login, onChangeLogin] = useState(USER.login);
    const [password, onChangePassword] = useState('');


    function handleButton(){
        USER.name ? updateUser() : createUser();
    }

    function createUser(){
        if(checkInput()){
            const newUser = {};
            newUser.name = name;
            newUser.age = age;
            newUser.height = height;
            newUser.weight = weight;
            newUser.email = email;
            newUser.login = login;
            newUser.password = password;
            UserController.createNewUser(newUser);
            Alert.alert('Sucesso', 'Usuario criado com sucesso!', [
                { text: 'OK' },
            ]);
            props.navigation.navigate("LoginScreen");
        }else{
            Alert.alert('Faltando Campos', 'Preencha todos os campos para criar seu cadastro', [
                { text: 'OK' },
            ]);
        }

        function checkInput(){
            return name && age && height && weight && email && login && password
        }
    }

    function updateUser() {
        const updatedUser = {
            name: name ? name : USER.name,
            age: age ? age : USER.age,
            height: height ? height : USER.height,
            weight: weight ? weight : USER.weight,
            email: email ? email : USER.email,
            login: login ? login : USER.login,
            password: password ? password : USER.password,
            id: USER.id,
            gymForm: USER.gymForm,
            weightHystory: USER.weightHystory,
            meds: USER.meds,
            frequency: USER.frequency,
        }
        UserController.updateUsers(updatedUser);
        props.navigation.navigate("UserInfo");
    }

    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation} />
            <View style={styles.infoHolder}>
                <Text style={styles.inputText}>Nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder={USER.name}
                    value={name}
                />

                <View style={styles.sameLineInputHolder}>
                    <View style={styles.inputHolder}>
                        <Text style={styles.inputText}>Idade</Text>
                        <TextInput
                            style={styles.inputSameLine}
                            onChangeText={onChangeAge}
                            value={age}
                            placeholder={USER.age}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputHolder}>
                        <Text style={styles.inputText}>Altura</Text>
                        <TextInput
                            style={styles.inputSameLine}
                            onChangeText={onChangeHeight}
                            value={height}
                            placeholder={USER.height}
                        />
                    </View>
                    <View style={styles.inputHolder}>
                        <Text style={styles.inputText}>Peso</Text>
                        <TextInput
                            style={styles.inputSameLine}
                            onChangeText={onChangeWeight}
                            value={weight}
                            placeholder={USER.weight}
                        />
                    </View>


                </View>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder={USER.email}
                />
                <Text style={styles.inputText}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLogin}
                    value={login}
                    placeholder={USER.login}
                />
                <Text style={styles.inputText}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    keyboardType="numeric"
                    placeholder=""
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleButton}>
                        {USER.name ? "Alterar" : "Cadastrar"}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};
