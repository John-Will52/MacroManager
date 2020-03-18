import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Ingredients extends Component{
    constructor(props) {
        super()
        this.state = {
            name: null,
            carbs: null,
            proteins: null,
            fats: null
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.

    addIngredientName = input =>{
        if(input.length > 0){
            this.setState({name: input});
        }
    }
    addIngredientCarbs = input =>{
        if(input > 0){
        this.setState({carbs: parseInt(input)});
        }
    }
    addIngredientProteins = input =>{
        if(input > 0){
        this.setState({proteins: parseInt(input)});
        }
    }
    addIngredientFats = input =>{
        if(input > 0){
        this.setState({fats: parseInt(input)});
        }
    }
    addIngredientServings = input =>{
        if(input > 0){
        this.setState({fats: parseInt(input)});
        }
    }

    render(){
        return(
            <View style={styles.border}>
                <Text>Ingredient {this.props.count}</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.nameInputs} ref={input => { this.ingredientName = input }} onChangeText={name => this.addIngredientName(name)} keyboardType="default" placeholder="Ingredient Name" placeholderTextColor='black'></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.numInputs} ref={input => { this.ingredientCarbs = input }} onChangeText={num => this.addIngredientCarbs(num)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.numInputs} ref={input => { this.ingredientProteins = input }} onChangeText={num => this.addIngredientProteins(num)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.numInputs} ref={input => { this.ingredientFats = input }} onChangeText={num => this.addIngredientFats(num)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.numInputs} ref={input => { this.ingredientServings = input }} onChangeText={num => this.addIngredientServings(num)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    numInputs:{
        width: '25%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 1,
    },
    nameInputs:{
        width: '100%',
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
    border:{
        borderBottomWidth: 2,
        borderBottomColor: "black",
        marginBottom: 10,
        marginTop: 10,
    }

    
})

AppRegistry.registerComponent(appName, () => Ingredients);