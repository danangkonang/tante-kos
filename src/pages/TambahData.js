import React, { 
    Component,
    StyleSheet
} from 'react';

import { View } from 'react-native';

export default class TambahData extends Component {
  render() {
    return (
        <View style={styles.container} >
          <Text>hellow</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'red',
        flex :1,
        justifyContent :'center',
        alignItems :'center'
    }
})