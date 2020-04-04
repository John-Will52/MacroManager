import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Ingredients from './ingredients';
import Colors from '../styling/colors';

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Snacks extends Component{
    constructor(props) {
        super()
        this.state = {
            snackName: null,
            snackCarbs: 0,
            snackProteins: 0,
            snackFats: 0,
            snackServings: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addSnackName = input =>{
        if(input.length > 0){
        this.setState({snackName: input})
        }
    }
    addSnackCarbs = input =>{
        if(input > 0){
        this.setState({snackCarbs: parseInt(input)})
        }
    }
    addSnackProteins = input =>{
        if(input > 0){
        this.setState({snackProteins: parseInt(input)})
        }
    }
    addSnackFats = input =>{
        if(input > 0){
        this.setState({snackFats: parseInt(input)})

}    }
    addSnackServings = input =>{
        if(input > 0){
        this.setState({snackServings: parseInt(input)})
        }
    }


    render(){
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.text}>Save a Snack</Text>
                <View style={styles.mealBox}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.nameInputs} ref={input => { this.snackName = input }} onChangeText={name => this.addSnackName(name)} keyboardType="default" placeholder="Snack Name" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numInputs} ref={input => { this.snackCarbs = input }} onChangeText={num => this.addSnackCarbs(num)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.snackProteins = input }} onChangeText={num => this.addSnackProteins(num)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.snackFats = input }} onChangeText={num => this.addSnackFats(num)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.snackServings = input }} onChangeText={num => this.addSnackServings(num)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    </View>
                    <Button title="Save Snack" color={Colors.operationButtons} onPress={()=>this.props.saveItem(this.state.snackName, this.state.snackCarbs, this.state.snackProteins, this.state.snackFats, this.state.snackServings)}></Button>
                </View>
                <Text>{this.state.snackName}</Text>
                <Text>{this.state.snackCarbs}</Text>
                <Text>{this.state.snackProteins}</Text>
                <Text>{this.state.snackFats}</Text>
                <Text>{this.state.snackServings}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 35,
        textAlign: "center",
    },
    nameInputs:{
        width: '100%',
        backgroundColor: 'white',
        height: 60,
        borderColor:'black',
        borderWidth: 1,
    },
    pageContainer:{
        padding: 5,
    },
    mealBox:{
        borderWidth: 5,
    },
    horizontalButtonBox:{
        width:'30%'
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    numInputs:{
        width: '25%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 1,
    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
        padding: 5,
    },
    split:{
        marginTop: 20,
    }
})

AppRegistry.registerComponent(appName, () => Snacks);