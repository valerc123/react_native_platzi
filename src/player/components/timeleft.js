import React from 'react';
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

  function TimeLeft (props){
      return(
        <View>
            <Text style={styles.timer}>
            {props.currentTime}/{props.duration}
            </Text>
        </View>
      )
  }

  const styles = StyleSheet.create({
    timer: {
      color: 'white',
      fontSize: 16 ,
      fontWeight: 'bold'
    }
  })
  export default TimeLeft