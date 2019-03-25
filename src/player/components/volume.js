import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableHighlight,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome'

function Volume (props){
    return(
        <View>
            <TouchableHighlight
              onPress = { props.onPress }
              style={styles.container}
              underlayColor='#25E030'>
                { props.muted ? (<Icon name="volume-off" size={20} color={"white"}/>)
                :
                 (props.volume === .5 ? 
                ( <Icon name="volume-down" color={"white"} size={20}/>)
                : 
                (<Icon name="volume-up" color={"white"} size={20}/>))
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
        marginHorizontal: 10,
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

export default Volume;