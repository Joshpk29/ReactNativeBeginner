import React, {Component} from 'react';
import {Text,View,Image,TouchableWithoutFeedback,} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class Photo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.conatiner}>
                <View>
                    <Image/>
                    <Text>userName</Text>
                </View>
                <View>
                    <Image/>
                </View>
                <View>
                    <TouchableWithoutFeedback>
                        <Ionicon name="aperture"
                                 size={30}/>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <Text>
                        userName
                    </Text>
                    <Text>
                        Comment
                    </Text>
                </View>
            </View>

        );
    }
}
    const styles ={
        container: {
            backgroundColor: '#ffffff',
            padding: 10
        }
}