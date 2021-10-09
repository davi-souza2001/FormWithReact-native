import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, SafeAreaView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import UserList from "./views/UserList";
import UserForm from "./views/UseForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
        <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {return{title: "Users list", headerRight: () => (<Button onPress={() => navigation.navigate("UserForm")}type="clear" icon={<Icon name="add" size={25} color="white"/>}/>)}}}/>
        <Stack.Screen name="UserForm" component={UserForm} options={{title: "Users form"}}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
}

