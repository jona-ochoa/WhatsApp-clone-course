import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#f1f1f1'
    },
    messageBox:{
        padding: 10,
        borderRadius: 5,
    },
    name:{
        color: Colors.light.tint,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    message:{
        
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
    },
})

export default styles;