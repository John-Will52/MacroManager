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
            carbs: null,
            proteins: null,
            fats: null,
            servings: null,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addIngredientName = input =>{
        if(input.length > 0){
            this.setState({name: input});
        }
    }
    addIngredientCarbs = input =>{
        this.setState({carbs: parseInt(input)});
    }
    addIngredientProteins = input =>{
        this.setState({proteins: parseInt(input)});
    }
    addIngredientFats = input =>{
        this.setState({fats: parseInt(input)});

    }
    addIngredientServings = input =>{
        this.setState({servings: parseInt(input)});
    }
 

    render(){
        if(this.props.count == this.props.counter){
            return(
                <View style={styles.border}>
                    <Text style ={styles.ingredient}>Ingredient {this.props.count}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.nameInputs} ref={input => { this.ingredientName = input }} onChangeText={name => this.addIngredientName(name)} keyboardType="default" placeholder="Ingredient Name" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientFats = input }} onChangeText={fats => this.addIngredientFats(fats)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientCarbs = input }} onChangeText={carbs => this.addIngredientCarbs(carbs)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientProteins = input }} onChangeText={proteins => this.addIngredientProteins(proteins)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientServings = input }} onChangeText={servings => this.addIngredientServings(servings)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.buttons1}>
                            <Button title="Add Ingredient" color={Colors.button} onPress={()=> this.props.addCalories(this.state.servings, this.state.carbs, this.state.proteins, this.state.fats)} disabled={(this.state.name == null || this.state.carbs == null || this.state.fats == null || this.state.proteins == null || this.state.servings == null) ? true : false}></Button>
                        </View>
                        <View style={styles.buttons2}>
                            <Button title="Submit Meal" color={Colors.button} onPress={()=> this.props.areYouSure(this.state.servings, this.state.carbs, this.state.proteins, this.state.fats)} disabled={(this.props.mealCarbs == null || this.props.mealFats == null || this.props.mealProteins == null || this.props.counter < 2) ? true : false}></Button>
                        </View>
                    </View>

                </View>
            );
        }
        else{
            return(
                <View style={styles.border}>
                    <Text style ={styles.ingredient}>Ingredient {this.props.count}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.nameInputs} ref={input => { this.ingredientName = input }} onChangeText={name => this.addIngredientName(name)} keyboardType="default" placeholder="Ingredient Name" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientFats = input }} onChangeText={fats => this.addIngredientFats(fats)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientCarbs = input }} onChangeText={carbs => this.addIngredientCarbs(carbs)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.numInputs} ref={input => { this.ingredientProteins = input }} onChangeText={proteins => this.addIngredientProteins(proteins)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
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
    ingredient:{
        color: Colors.text,
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 5,
        // textDecorationLine: 'underline'
    },
    buttons1:{
        backgroundColor: Colors.buttonBackground,
        width: "40%",
        alignSelf: 'center',
        marginTop: 10,
      },
      buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "40%",
        alignSelf: 'center',
        marginTop: 10,
      },
})

AppRegistry.registerComponent(appName, () => Ingredients);