import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="ios-person" size={28} color="#fff" />
          <Text style={{fontSize:25, color:'#fff'}}>Add iklan</Text>
          <Icon name='ios-menu' size={28} color='#fff'/>
        </View>

        <View style={styles.input}>
          <View>
            <Text style={styles.nameInputText}>Nama kos</Text>
            <TextInput
              style={styles.inputText}
              placeholder='Email'
              underlineColorAndroid='rgba(0,0,0,1)'
              placeholderTextColor='#D5DBDB'
            />
          </View>
          <View>
            <Text>Alamat kos</Text>
            <TextInput
              placeholder='Alamat kos'
              underlineColorAndroid='rgba(0,0,0,1)'
              placeholderTextColor='#D5DBDB'
            />
          </View>

          <View style={styles.kordinat}>
            <View style={styles.kordinatTitik}>
              <TextInput
                placeholder='1312344'
                underlineColorAndroid='rgba(0,0,0,1)'
                placeholderTextColor='#D5DBDB'
              />
            </View>
            <View style={styles.kordinatTitik}>
              <TextInput
                placeholder='634577'
                underlineColorAndroid='rgba(0,0,0,1)'
                placeholderTextColor='#D5DBDB'
              />
            </View>
          </View>

          <View>
            <Text>Pemilik kos</Text>
            <TextInput
              placeholder='Pemilik Kos'
              underlineColorAndroid='rgba(0,0,0,1)'
              placeholderTextColor='#D5DBDB'
            />
          </View>
          <View>
            <Text>No hp pemilik Kos</Text>
            <TextInput
              placeholder='No hp pemilik Kos'
              underlineColorAndroid='rgba(0,0,0,1)'
              placeholderTextColor='#D5DBDB'
            />
          </View>
          <View>
            <Text>Pengelola Kos</Text>
            <TextInput
              placeholder='Pengelola Kos'
              underlineColorAndroid='rgba(0,0,0,1)'
              placeholderTextColor='#D5DBDB'
            />
          </View>
          <View>
              <Text>No Hp Pengelola kos</Text>
              <TextInput
                placeholder='No Hp Pengelola kos'
                underlineColorAndroid='rgba(0,0,0,1)'
                placeholderTextColor='#D5DBDB'
              />
            </View>
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex :1,
    backgroundColor:'#F4F6F6'
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'red',
    paddingHorizontal:10,
    paddingVertical:15
  },
  input:{
    paddingHorizontal:5,
    marginTop:5
  },
  kordinat:{
    flexDirection:'row',
  },
  kordinatTitik:{
    flex:1
  },
  nameInputText:{
    fontSize:16,
    fontWeight:'650'
  },
  inputText:{

  }
})
