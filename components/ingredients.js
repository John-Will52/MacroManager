import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Ingredients extends Component{
    constructor(props) {
        super()
        this.state = {
            name: null,
            carbs: 0,
            proteins: 0,
            fats: 0,
            servings: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addIngredientName = input =>{
        if(input.length > 0){
            this.setState({name: input});
        }
    }
    addIngredientCarbs = input =>{
        if(input >= 0  && input != null){
        this.setState({carbs: parseInt(input)});
        }
        else{
            Alert.alert("Error", "Please put a number in the Carbs box.")
        }
    }
    addIngredientProteins = input =>{
        if(input >= 0  && input != null){
        this.setState({proteins: parseInt(input)});
        }
        else{
            Alert.alert("Error", "Please put a number in the Proteins box.")
        }
    }
    addIngredientFats = input =>{
        if(input >= 0 && input != null){
        this.setState({fats: parseInt(input)});
        }
        else{
            Alert.alert("Error", "Please put a number in the Fats box.")
        }
    }
    addIngredientServings = input =>{
        if(input >= 0  && input != null){
        this.setState({servings: parseInt(input)});
        }
        else{
            Alert.alert("Error", "Please put a number in the Servings box.")
        }
    }
 

    render(){
        if(this.props.count == this.props.counter){
            return(
                <View style={styles.border}>
                    <Text>Ingredient {this.props.count}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.nameInputs} ref={input => { this.ingredientName = input }} onChangeText={name => this.addIngredientName(name)} keyboardType="default" placeholder="Ingredient Name" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientCarbs = input }} onChangeText={carbs => this.addIngredientCarbs(carbs)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientProteins = input }} onChangeText={proteins => this.addIngredientProteins(proteins)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientFats = input }} onChangeText={fats => this.addIngredientFats(fats)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientServings = input }} onChangeText={servings => this.addIngredientServings(servings)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Button title="Add Ingredient" color={Colors.button1} onPress={()=> this.props.addCalories(this.state.servings, this.state.carbs, this.state.proteins, this.state.fats)}></Button>
                        <Button title="Submit Meal" color={Colors.button2} onPress={()=> this.props.saveMeal(this.state.servings, this.state.carbs, this.state.proteins, this.state.fats)}></Button>
                    </View>

                </View>
            );
        }
        else{
            return(
                <View style={styles.border}>
                    <Text>Ingredient {this.props.count}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.nameInputs} ref={input => { this.ingredientName = input }} onChangeText={name => this.addIngredientName(name)} keyboardType="default" placeholder="Ingredient Name" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientCarbs = input }} onChangeText={carbs => this.addIngredientCarbs(carbs)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientProteins = input }} onChangeText={proteins => this.addIngredientProteins(proteins)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientFats = input }} onChangeText={fats => this.addIngredientFats(fats)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientServings = input }} onChangeText={servings => this.addIngredientServings(servings)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    </View>
                </View>
            );
        }
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
        justifyContent: 'space-evenly'
    },
    border:{
        borderBottomWidth: 2,
        borderBottomColor: "black",
        marginBottom: 10,
        marginTop: 10,
    },    
})

AppRegistry.registerComponent(appName, () => Ingredients);