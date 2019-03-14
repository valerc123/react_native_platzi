import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableHighlight,
   ProgressBarAndroid
 } from 'react-native';

 function ProgressBar(props){
     return(
         <View>
            <ProgressBarAndroid
              color="#25E030" 
              indeterminate={false}
              styleAttr="Horizontal"
              progress={props.progress}
              animating={true}
              style={styles.progressBarAndroid}/>
         </View>
     )
 }
 const styles = StyleSheet.create({
    progressBarAndroid: {
      width: 240
    }
  })
 export default ProgressBar;