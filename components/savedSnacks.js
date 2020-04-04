import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SavedItems extends Component{
    constructor(props) {
        super()
        this.state = {
            item: this.props.itemType,
            carbs: this.props.carbs,
            proteins: this.props.proteins,
            fats: this.props.fats,
            servings: this.props.servings,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.

    render(){
        return(
            <View>
                <Text>{this.props.itemType}</Text>
                <Text>{this.props.name}</Text>
                <Text>{this.props.carbs}</Text>
                <Text>{this.props.proteins}</Text>
                <Text>{this.props.fats}</Text>
                <Text>{this.props.servings}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => SavedItems);