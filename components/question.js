import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState, Button, TextInput, StyleSheet, Platform} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors'
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Question extends Component{
    constructor(props) {
        super()
        this.state = {
            // var:'it displays by using state.var'
        }
    }
    render(){
        if(this.props.testType === "Dilemma"){
            return(
                <View>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button1} title={this.props.optionOne}></Button>
                            </View>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button2} title={this.props.optionTwo}></Button>
                            </View>
                        </View>
                </View>
            )
        }
        else if(this.props.testType === "Input"){
            return(
                <View>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <TextInput style={styles.input} keyboardType="default"></TextInput>
                    <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button1} title="Submit"></Button>
                            </View>
                    </View>
                </View>
            )
        } 
        else if(this.props.testType === "BMI"){
            return(
                <View>
                    <Text style={styles.text}>Let's get your BMI</Text>
                    <Text style={styles.smallText}>Height</Text>
                    <View style={styles.vertAlign}>
                        <TextInput style={styles.numInput} keyboardType="number-pad"></TextInput>
                        <View style={styles.verticalButtonContainer}>
                            <View style={styles.verticalButtonBox}>
                                <Button color={Colors.button1} title="inches (in.)"></Button>
                            </View>
                            <View style={styles.verticalButtonBox}>
                                <Button color={Colors.button2} title="centimeters (cm.)"></Button>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.smallText}>Weight</Text>
                        <View style={styles.vertAlign}>
                            <TextInput style={styles.numInput} keyboardType="decimal-pad"></TextInput>
                            <View style={styles.verticalButtonContainer}>
                                <View style={styles.verticalButtonBox}>
                                    <Button color={Colors.button1} title="pounds (lbs.)"></Button>
                                </View>
                                <View style={styles.verticalButtonBox}>
                                    <Button color={Colors.button2} title="kilograms (kg.)"></Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }  
    }
}
const styles=StyleSheet.create({
    input:{
        backgroundColor: 'white',
        height: 30,
        borderColor:'black',
        borderWidth: 2,
    },
    text:{
        fontSize: 50,
        textDecorationLine: 'underline',
        textAlign:'center',  
    },
    smallText:{
        fontSize: 30,
        textDecorationLine: 'underline',
    },
    numInput:{
        width: 100,
        backgroundColor: 'white',
        height: 30,
        borderColor:'black',
        borderWidth: 2,
    },
    verticalButtonBox:{
        width:'100%'
    },
    verticalButtonContainer:{
        justifyContent:'space-between',
        width:'40%',
        alignItems: 'flex-end',
    },
    horizontalButtonBox:{
        width:'30%'
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    vertAlign:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    }

}); 

AppRegistry.registerComponent(appName, () => Question);