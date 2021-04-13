import React from 'react';
import { View, 
  Text,
  StyleSheet
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>header</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex :1,
    justifyContent :'center',
    alignItems :'center'
  },
    
})
export default Header;
