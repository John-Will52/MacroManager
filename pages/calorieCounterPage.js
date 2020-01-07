import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState, TextInput, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Counter from '../components/counter';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class CalorieCounterPage extends Component{
    constructor(props) {
        super()
        this.state = {
            servings: null,
            carbCalorieAmount: null,
            proteinCalorieAmount: null,
            fatCalorieAmount: null,
            totalCalorieAmount: null,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addServings = input =>{
        this.setState({servings: input});
    }
    addCarbs = input =>{
        this.setState({carbCalorieAmount: input});
    }
    addProteins = input =>{
        this.setState({proteinCalorieAmount: input});
    }
    addFats = input =>{
        this.setState({fatCalorieAmount: input});
    }
    addCalories = (servings, carbs, proteins, fats) => {

        this.setState({servings: servings})
        let carbTotal = parseInt(carbs) * parseInt(servings) * 4;
        let proteinTotal = parseInt(proteins) * parseInt(servings) * 4;
        let fatTotal = parseInt(fats) * parseInt(servings) * 9;
        let totalCalories = carbTotal + proteinTotal + fatTotal
        this.setState({
            carbCalorieAmount: carbTotal,
            proteinCalorieAmount: proteinTotal,
            fatCalorieAmount: fatTotal,
            totalCalorieAmount: totalCalories
        })

   
     }


    render(){
        return(
            <View style={styles.pageContainer}>
                <View style={styles.counterContainer}>
                    <Counter calorieType="Carbs"></Counter>
                    <Counter calorieType="Protein"></Counter>
                    <Counter calorieType="Fats"></Counter>
                    <Counter calorieType="Total"></Counter>
                </View>
                <Text style={styles.text}>Add the amounts of each in grams</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs} value={this.state.servings} onChangeText={num => this.addServings(num)} keyboardType="number-pad" placeholder="Servings"></TextInput>
                    <TextInput style={styles.inputs} value={this.state.carbCalorieAmount} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carbs"></TextInput>
                    <TextInput style={styles.inputs} value={this.state.proteinCalorieAmount} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Proteins"></TextInput>
                    <TextInput style={styles.inputs} value={this.state.fatCalorieAmount} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fats"></TextInput>
                </View>
                <Text>{this.state.totalCalorieAmount}+{this.state.carbCalorieAmount}+{this.state.proteinCalorieAmount}+{this.state.fatCalorieAmount}</Text>
                <Button  color="blue" title="Add Calories" onPress={()=> this.addCalories(this.state.servings, this.state.carbCalorieAmount, this.state.proteinCalorieAmount, this.state.fatCalorieAmount)}></Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputs:{
        width: '25%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        height: 250
    },
    counterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        height: 300,
        alignItems: "flex-end",
    },
    text:{
        fontSize: 50,
        textAlign: "center",

    },
    pageContainer:{
        padding: 1,
    }
})

AppRegistry.registerComponent(appName, () => CalorieCounterPage);