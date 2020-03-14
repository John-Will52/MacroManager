import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SavedSnacks extends Component{
    constructor(props) {
        super()
        this.state = {
            carbs: this.props.snackCarbs,
            proteins: this.props.snackProteins,
            fats: this.props.snackFats,
            servings: this.props.snackServings,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    SavedSnacksFunction = () => {

        this.setState({SavedSnacksVariable:''})
   
     }


    render(){
        return(
            <View>
                <Text>{this.props.snackName}</Text>
                <Text>{this.props.snackCarbs}</Text>
                <Text>{this.props.snackProteins}</Text>
                <Text>{this.props.snackFats}</Text>
                <Text>{this.props.snackServings}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => SavedSnacks);