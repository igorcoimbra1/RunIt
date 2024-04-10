import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainMenuButton from "./components/MenuMainButton"; 
import MainMenu from './components/MainMenu';
import Ficha from './components/Ficha';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import UserEdit from './components/UserEdit';
import UserInfo from './components/UserInfo';
import WeightController from './components/WeightController';
import AddWeight from './components/WeightController/AddWeight';
import AddFichaItem from './components/Ficha/AddFichaItem';
import Frequency from './components/Frequency';
import AddFrequency from './components/Frequency/AddFrequency';
import Meds from './components/Meds';
import AddMed from './components/Meds/AddMed';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MenuPrincipal" component={MainMenu} />
        <Stack.Screen options={{ headerShown: false }} name="Ficha" component={Ficha} />
        <Stack.Screen options={{ headerShown: false }} name="UserInfo" component={UserInfo} />
        <Stack.Screen options={{ headerShown: false }} name="UserEdit" component={UserEdit} />
        <Stack.Screen options={{ headerShown: false }} name="WeightController" component={WeightController} />
        <Stack.Screen options={{ headerShown: false }} name="AddWeight" component={AddWeight} />
        <Stack.Screen options={{ headerShown: false }} name="AddFichaItem" component={AddFichaItem} />
        <Stack.Screen options={{ headerShown: false }} name="Frequency" component={Frequency} />
        <Stack.Screen options={{ headerShown: false }} name="AddFrequency" component={AddFrequency} />
        <Stack.Screen options={{ headerShown: false }} name="Meds" component={Meds} />
        <Stack.Screen options={{ headerShown: false }} name="AddMed" component={AddMed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
