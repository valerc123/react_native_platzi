import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableHighlight,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome'

function PlayPause (props){
    return(
        <View>
            <TouchableHighlight 
                onPress={props.onPress}
                style={styles.container}
                underlayColor='#25E030'
                hitSlop={{ // "aura" del boton
                    left:10,
                    top:10,
                    right:10,
                    bottom: 10
                }}
            >
                {
                    props.paused ? <Icon name="play" size={20} style={styles.button}/> : <Icon name="pause" size={20} style={styles.button}/>
                }
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'green'
    },
    button:{
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    }
})
export default PlayPause;