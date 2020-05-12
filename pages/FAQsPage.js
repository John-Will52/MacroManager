import React, {Component} from 'react';
import {AppRegistry, View, Text, Button} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class FAQsPage extends Component{
    constructor(props) {
        super()
        this.state = {
            // FAQsPageVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    FAQsPageFunction = () => {

        this.setState({FAQsPageVariable:''})
   
     }


    render(){
        return(
            <View>
                <Text>This is your FAQsPage component</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => FAQsPage);