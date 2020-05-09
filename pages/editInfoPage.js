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
                    <View style={styles.buttonBackground}>
                        <Button title="Name" color={Colors.button2} onPress={() => {}}></Button>
                    </View>
                    <View style={styles.buttonBackground}>
                        <Button title="Goal" color={Colors.button2} onPress={() => {}}></Button> 
                    </View>
                    <View style={styles.buttonBackground}>
                        <Button title="Recalculate BMI" color={Colors.button2} onPress={() => {}}></Button>
                    </View>
                    <View style={styles.buttonBackground}>
                        <Button title="Change caloric numbers" color={Colors.button2} onPress={() => {}}></Button> 
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        color: Colors.titles,
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 10
    },
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
        borderWidth: 2,
        borderColor: Colors.boxBackground,
        margin: 5,
        width:'60%',
        alignSelf:'center'
    }
})

AppRegistry.registerComponent(appName, () => EditInfoPage);