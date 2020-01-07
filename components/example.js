import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState} from 'react-native';
import {name as appName} from './app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Example extends Component{
    constructor(props) {
        super()
        this.state = {
            // exampleVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    exampleFunction = () => {

        this.setState({exampleVariable:''})
   
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