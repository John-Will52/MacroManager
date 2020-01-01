import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Example extends Component{
    constructor() {
        super()
        this.state = {
            // var:'it displays by using state.var'
        }
    }
    render(){
        return(
            <View>
                <Text>This is your Example component</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => Example);