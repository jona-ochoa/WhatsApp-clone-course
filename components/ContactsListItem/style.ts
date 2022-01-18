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
        fontSize: 18,
        color: '#000',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 30,
    },
    status:{
        color: 'grey',
    },
})

export default styles;
