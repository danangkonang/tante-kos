import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Navigasi from '../components/Navigasi';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="ios-person" size={28} color="#fff" />
            <Text style={{fontSize:25, color:'#fff'}}>Tante kos</Text>
          <Icon name='ios-menu' size={28} color='#fff'/>
        </View>
        <Navigasi/>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex :1,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'blue',
    paddingHorizontal:10,
    paddingVertical:18
  }
})
