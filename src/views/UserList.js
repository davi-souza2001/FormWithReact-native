import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { Avatar, ListItem, Button, Icon } from 'react-native-elements';


import users from "../data/users";

export default function UserList(props) {

    function confirmUserDeletion(user) {
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress() {
                    console.warn("Delete " + user.id)
                }
            },
            {
                text: "Não"
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate("UserForm", user)}>
                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => { confirmUserDeletion(user) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList keyExtractor={user => user.id.toString()} data={users} renderItem={getUserItem} />
        </View>
    )
}