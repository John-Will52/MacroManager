import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Ingredients from './ingredients';
import Colors from '../styling/colors';

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Meals extends Component{
    constructor(props) {
        super()
        this.state = {
            ingredientCounter:1,
            name: null,
            carbs: null,
            proteins: null,
            fats: null,
            servings:null,

        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addMealName = input => {
        this.setState({
            name: input,
        });
    }
    addMealServings = input => {
        this.setState({
            servings: input,
        });
    }
    
    addIngredients = (servings, carbs, proteins, fats) => {
        if(servings == null || carbs == null || proteins == null || fats == null || servings == NaN || carbs == NaN || proteins == NaN || fats == NaN){
            Alert.alert("Error", "Please provide numerical values for every field.");
        }
        else{
            let addedCarbs= carbs * servings;
            let addedProteins= proteins * servings;
            let addedFats= fats * servings;

            this.setState({
                carbs: this.state.carbs + addedCarbs,
                proteins: this.state.proteins + addedProteins,
                fats: this.state.fats + addedFats,
                ingredientCounter: this.state.ingredientCounter + 1,
            })
        }
        
        
     }

     areYouSure = (servings, carbs, proteins, fats) =>{
        if(this.state.servings > 1){
          Alert.alert(
            'Alert',
            `Is your ${this.state.name.toLowerCase()}'s information correct?
It has in total: 
    ${this.state.carbs + (carbs * servings)} grams of carbs, 
    ${this.state.proteins + (proteins * servings)} grams of protein, and 
    ${this.state.fats + (fats * servings)} grams of fat.
And, per serving:
    ${parseInt((this.state.carbs + (carbs * servings))/this.state.servings)} grams of carbs, 
    ${parseInt((this.state.proteins + (proteins * servings))/this.state.servings)} grams of protein, and 
    ${parseInt((this.state.fats + (fats * servings))/this.state.servings)} grams of fat.`,
            [
              {text: 'Yes', onPress: () => this.saveMeal(servings, carbs, proteins, fats)},
              {
                text: "No",
                // onPress: () => this.props.navigator(1),
              },
            ],
            {cancelable: false},
          );
        }
        else{
          Alert.alert(
            'Alert',
            `Is your ${this.state.name.toLowerCase()}'s information correct?`,
            [
              {text: 'Yes', onPress: () => this.saveMeal(servings, carbs, proteins, fats)},
              {
                text: "No",
                // onPress: () => this.props.navigator(1),
              },
            ],
            {cancelable: false},
          );
        }
        
      }

     saveMeal = (servings, carbs, proteins, fats) => {
        if(this.state.name == null){
            Alert.alert("Error", "What is this meal called?");
        }
        else if(this.state.name.length < 2){
            Alert.alert("Error", "Meal name must be at least 2 characters long?");
        }
        else if(this.state.servings == null || this.state.servings.length < 1){
            Alert.alert("Error", "How many servings does this meal make?");
        }
        else if(this.state.servings < 1){
            Alert.alert("Error", "Servings must be at least 1.");
        }
        else{
            let addedCarbs= carbs * servings;
            let addedProteins= proteins * servings;
            let addedFats= fats * servings;

            this.setState({
                carbs: this.state.carbs + addedCarbs,
                proteins: this.state.proteins + addedProteins,
                fats: this.state.fats + addedFats,
            })      
    // Change the "Save Items" parts BACK to "Save Snacks/Meals" They must be handled differently

            return this.props.saveItem(this.state.name, this.state.carbs, this.state.proteins, this.state.fats, this.state.servings);
        }
        

     }


    render(){
        var recipe = [];
        for(let i=0; i<this.state.ingredientCounter; i++){
            recipe.push(
                <Ingredients key={i} count={i + 1} areYouSure={this.areYouSure} counter={this.state.ingredientCounter} addCalories={this.addIngredients} saveMeal={this.saveMeal} mealCarbs= {this.state.carbs} mealProteins= {this.state.proteins} mealFats= {this.state.fats} mealName= {this.state.name} mealServings={this.state.servings}></Ingredients>
                )
        }
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.text}>Save a Meal</Text>
                <View style= {styles.mealBox}>
                    <Text style={styles.mealInfo}> Meal information</Text>
                    <View style={styles.mealHeader}>
                        <TextInput style={styles.nameInputs} onChangeText={name => this.addMealName(name)} keyboardType="default" placeholder="Meal Name" placeholderTextColor='black' minLength={3}></TextInput>
                        <TextInput style={styles.numInputs} onChangeText={name => this.addMealServings(name)} keyboardType="number-pad" minLength={1} maxLength={2} placeholder="Total Servings" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style = {styles.ingredientBox}>
                        {recipe}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 35,
        textAlign: "center",
        color: Colors.titles
    },
    nameInputs:{
        width: '70%',
        backgroundColor: 'white',
        borderColor:'black',
        borderWidth: 1,
    },
    pageContainer:{
        padding: 5,
    },
    mealBox:{
        borderWidth: 3,
        backgroundColor: Colors.boxBackground,
        padding: 5,
        borderColor: Colors.borders
    },
    mealHeader:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
    mealInfo:{
        color: Colors.subtitles,
        fontWeight: 'bold',
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom: 5,
    },
    ingredientBox:{
        padding: 10,
    }
})

AppRegistry.registerComponent(appName, () => Meals);