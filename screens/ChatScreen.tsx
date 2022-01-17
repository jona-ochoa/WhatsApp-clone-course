import { FlatList, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../Data/ChatRooms';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{ width: '100%' }}
        data={chatRooms}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
