import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import axios from 'axios';

const SettingsScreen = ({ route }) => {
  const user = route.params.user;
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    const fetchUserComments = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        const comments = response.data.posts.filter(post => post.userId === user.id);
        setUserComments(comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchUserComments();
  }, [user]);

  return (
    <View>
      <List.Section>
        <List.Subheader>User ID: {user.id}</List.Subheader>
        {userComments.length > 0 ? (
          userComments.map(comment => (
            <List.Item
              key={comment.id}
              title={comment.title}
              description={comment.body}
              left={() => <List.Icon icon="comment" />}
            />
          ))
        ) : (
          <Text>Nao a comentarios por enquanto.</Text>
        )}
      </List.Section>
    </View>
  );
};

export default SettingsScreen;
