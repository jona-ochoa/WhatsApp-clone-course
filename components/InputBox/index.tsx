import { 
    FontAwesome5, 
    MaterialCommunityIcons,
    Entypo,
    Fontisto, 
} from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    View, 
    TextInput,
    TouchableOpacity, 
} from 'react-native';
import styles from './style'

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    };

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)
        setMessage('')
    };

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey' />
                <TextInput 
                    placeholder='Type a Message'
                    placeholderTextColor={'grey'}                    
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo style={styles.icon} name='attachment' size={24} color='grey' />
                {!message && <Fontisto style={styles.icon} name='camera' size={24} color='grey' />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}> 
                    {!message 
                        ? <MaterialCommunityIcons style={styles.icon} name='microphone' size={28} color='white' />
                        : <MaterialCommunityIcons style={styles.icon} name='send' size={28} color='white' />
                    }
                    
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox
