import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, SectionList, FlatList, Button, Alert, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';


// AppRegistry is the JS entry point for all ReactNative apps. 
export default class SavedItemsPage extends Component{
    constructor(props) {
        super()

        this.state = {
            item: null,
        }
    }


    // THis is the area that you put your JS logic for functions and stuff at.

    


 
    

    render(){
        return(
            <View>
                {this.props.snackList}
                <Button title="Calorie Counters Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                <Button title="Add a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
            </View>
        );
    }
}


AppRegistry.registerComponent(appName, () => SavedItemsPage);