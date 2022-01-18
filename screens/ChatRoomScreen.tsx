import React from 'react'
import { 
    View,
    ImageBackground, 
    FlatList, 
} from 'react-native'
import BG from '../assets/images/BG.png'
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../Data/Chats'
import ChatMessage from '../components/ChatMessage'
import InputBox from '../components/InputBox'

const ChatRoomScreen = () => {

    const route = useRoute();
    return ( 
        <ImageBackground style={{width:'100%', height:'100%'}} source={BG}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />} 
                inverted  
            />
            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen
