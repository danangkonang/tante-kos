import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Home extends Component {
  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
        />
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container :{
    flex :1,
  }
});
