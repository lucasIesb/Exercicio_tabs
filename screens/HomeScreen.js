import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { List, Divider } from 'react-native-paper';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation(); // Obtém a navegação

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View>
      <List.Section>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            onPress={() => navigation.navigate('Comentários', { user })} // Alterado para 'Comentários'
          >
            <List.Item
              title={`${user.firstName} ${user.lastName}`}
              description={`Username: ${user.username}`}
              left={() => <List.Icon icon="account" />}
            />
            <Divider />
          </TouchableOpacity>
        ))}
      </List.Section>
    </View>
  );
};

export default HomeScreen;


