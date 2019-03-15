import React from 'react';
import { 
    StyleSheet,
    ProgressBarAndroid
 } from 'react-native';

 function ProgressBar(props){
     return(
            <ProgressBarAndroid
              color="#25E030" 
              indeterminate={false}
              styleAttr="Horizontal"
              progress={props.progress}
              style={styles.progressBarAndroid}/>
     )
 }
 const styles = StyleSheet.create({
    progressBarAndroid: {
      width: '50%'
    }
  })
 export default ProgressBar;