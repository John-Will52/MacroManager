import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState, Button, TextInput, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Question extends Component{
    constructor(props) {
        super()
        this.state = {
            // var:'it displays by using state.var'
        }
    }
    render(){
        if(this.props.multipleChoice === "true"){
            return(
                <View>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <Button style={styles.button} title={this.props.optionOne}></Button>
                    <Button style={styles.button} title={this.props.optionTwo}></Button>
                </View>
            )
        }else{
            return(
                <View>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            )
        }  
    }
}
const styles=StyleSheet.create({
    input:{
        backgroundColor: "white",
        height: 30,
        borderColor:'black',
        borderWidth: 2,
    },
    text:{
        fontSize: 36,
        textDecorationLine: 'underline',
        textAlign:'center',  
    },
    button:{
        backgroundColor: 'black',
    }
}); 

AppRegistry.registerComponent(appName, () => Question);