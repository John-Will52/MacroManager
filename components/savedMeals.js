import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SavedMeals extends Component{
    constructor(props) {
        super()
        this.state = {
            // SavedMealsVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    SavedMealsFunction = () => {

        this.setState({SavedMealsVariable:''})
   
     }


    render(){
        return(
            <View>
                <Text>This is your SavedMeals component</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => SavedMeals);