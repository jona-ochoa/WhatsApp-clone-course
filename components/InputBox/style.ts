import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginRight: 10,
        borderRadius: 30,
        flex: 1,
        alignItems: 'flex-end',        
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        
    },
    icon:{
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;