import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15,
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    lefContainer: {
        flexDirection: 'row',
    },
    username: {
        fontWeight:'bold',
        fontSize: 20,
        color: '#000',
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        width: 200,
    },
    time: {
        fontSize: 14,
        color: 'grey',
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 50,
    },
})

export default styles;
