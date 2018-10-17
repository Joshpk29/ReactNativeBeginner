import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Photo from './src/components/Photo';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header Text = "Code-ify"/>
        <Photo />
      </View>
    );
  }
}
