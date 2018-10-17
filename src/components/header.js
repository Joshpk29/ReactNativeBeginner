import React, {Component} from 'react';
import {View, Text, } from 'react-native';


export default class Header extends Component{
    render(){
        return (
            <View>
                  <View style = {styles.container}>
                          <Text style = {styles.Text}>
                              {this.props.Text}
                          </Text>
                  </View>
            </View>
        );
    }
}
const styles ={
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
        alignItems: 'center',
        borderBottomColor: '#aaddad',
        borderBottomWidth: 2
    },
    Text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'Bold',
        margin: 13,
    }
}
