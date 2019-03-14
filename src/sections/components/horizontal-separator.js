import React from 'react';
import { View} from 'react-native';

function Hseparator (props){
    return(
        <View style={styles.separator}>
         {/* <Text>Esto es un separador</Text> */}
        </View>
    )
}
const styles = {
    separator: {
        marginHorizontal: 5,
        flex: 1
    }
}
export default Hseparator;