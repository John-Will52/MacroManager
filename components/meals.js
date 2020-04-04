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
            ingredientCounter:2,
            mealName: null,
            mealCarbs: 0,
            mealProteins: 0,
            mealFats: 0,
            mealServings: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    MealsFunction = () => {

        this.setState({MealsVariable:''})
   
     }


    render(){
        var recipe = [];
        for(let i=0; i<this.state.ingredientCounter; i++){
            recipe.push(
                <Ingredients key={i} count={i + 1} addIngredientName={this.addIngredientName} addIngredientCarbs={this.addIngredientCarbs} addIngredientProteins={this.addIngredientProteins} addIngredientFats={this.addIngredientFats} addIngredientServings={this.addIngredientServings}></Ingredients>
                )
        }
        return(
            <View style={styles.pageContainer}>
            <Text style={styles.text}>Save a Meal</Text>
            <View style= {styles.mealBox}>
                <TextInput style={styles.nameInputs} ref={input => { this.mealName = input }} onChangeText={name => this.addMealName(name)} keyboardType="default" placeholder="Meal Name" placeholderTextColor='black'></TextInput>
                {recipe}
                <View style={styles.horizontalButtonContainer}>
                    <View style={styles.horizontalButtonBox}>
                        <Button title="+" color={Colors.button1} onPress={()=> this.setState({ingredientCounter: (this.state.ingredientCounter + 1)})}></Button>
                    </View>
                    <View style={styles.horizontalButtonBox}>
                        <Button title="-" color={Colors.button2} onPress={()=>this.setState({ingredientCounter: (this.state.ingredientCounter - 1)})}></Button>
                    </View>
                </View>
                <Button title="Save Meal" color={Colors.operationButtons} onPress={()=>this.saveMeal()}></Button>
            </View>
            <Button title="Return to Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
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

AppRegistry.registerComponent(appName, () => Meals);