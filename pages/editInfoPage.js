import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class EditInfoPage extends Component{
    constructor(props) {
        super()
        this.state = {
            // EditInfoPageVariable:'it displays by using state.var'
        }
    }



    render(){
        return(
            <View>
                <Text style={styles.title}>What would you like to edit?</Text>
                <View>
                    <Button title="Name" onPress={() => {}}></Button>
                    <Button title="Goal" onPress={() => {}}></Button>
                    <Button title="Recalculate BMI" onPress={() => {}}></Button>
                    <Button title="Change caloric numbers" onPress={() => {}}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        color: Colors.titles,
    }
})

AppRegistry.registerComponent(appName, () => EditInfoPage);