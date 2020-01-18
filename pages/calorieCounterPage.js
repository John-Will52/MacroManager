import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Counter from '../components/counter';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class CalorieCounterPage extends Component{
    constructor(props) {
        super()
        this.state = {
            servings: null,
            carbInput: null,
            proteinInput: null,
            fatInput: null,
            carbCalorieAmount: 0,
            proteinCalorieAmount: 0,
            fatCalorieAmount: 0,
            totalCalorieAmount: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addServings = input =>{
        this.setState({servings: parseInt(input)});
    }
    addCarbs = input =>{
        this.setState({carbInput: parseInt(input)});
    }
    addProteins = input =>{
        this.setState({proteinInput: parseInt(input)});
    }
    addFats = input =>{
        this.setState({fatInput: parseInt(input)});
    }
    addCalories = (servings, carbs, proteins, fats) => {
        if(servings === null || carbs === null || proteins === null || fats === null){
            this.servingInput = 0;
            this.carbInput = 0;
            this.proteinInput = 0;
            this.fatInput = 0;
        }
        else{

            let addedCarbs= carbs * servings * 4;
            let addedProteins= proteins * servings * 4;
            let addedFats= fats * servings * 9;
            let totalCalories = addedCarbs + addedProteins + addedFats;
            this.setState({
                carbCalorieAmount: this.state.carbCalorieAmount + addedCarbs,
                proteinCalorieAmount: this.state.proteinCalorieAmount + addedProteins,
                fatCalorieAmount: this.state.fatCalorieAmount + addedFats,
                totalCalorieAmount: this.state.totalCalorieAmount + totalCalories,
                servings: 0,
                carbInput: null,
                proteinInput: null,
                fatInput: null,
            })
            this.servingInput.clear();
            this.carbInput.clear();
            this.proteinInput.clear();
            this.fatInput.clear();


        }
    }
    percentageCalculator = () =>{

    }


    render(){
        return(
            <View style={styles.pageContainer}>
                <View style={styles.counterContainer}>
                    <Counter calorieType="Carbs"  currentAmounts={this.state.carbCalorieAmount}></Counter>
                    <Counter calorieType="Proteins" currentAmounts={this.state.proteinCalorieAmount}></Counter>
                    <Counter calorieType="Fats"  currentAmounts={this.state.fatCalorieAmount}></Counter>
                    <Counter calorieType="Total" total={this.state.totalCalorieAmount}></Counter>
                </View>
                <Text style={styles.text}>Add the amounts of each in grams</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs} ref={input => { this.servingInput = input }} onChangeText={num => this.addServings(num)} keyboardType="number-pad" placeholder="Servings"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.carbInput = input }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carbs"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.proteinInput = input }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Proteins"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.fatInput = input }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fats"></TextInput>
                </View>
                <Button  ref={this.addCaloriesButton} color="blue" title="Add Calories" onPress={()=> this.addCalories(this.state.servings, this.state.carbInput, this.state.proteinInput, this.state.fatInput)} disabled={false}></Button>
                <View>
                    <Text>{this.state.servings}({this.state.carbInput}+{this.state.proteinInput}+{this.state.fatInput})</Text>
                    <Text>{this.state.carbCalorieAmount}+{this.state.proteinCalorieAmount}+{this.state.fatCalorieAmount} = {this.state.totalCalorieAmount}</Text>
                </View>
                <View>
                    <Text>Visual evidence of data being passed</Text>
                    <Text>{this.props.allottedCarbs}</Text>
                    <Text>{this.props.allottedProteins}</Text>
                    <Text>{this.props.allottedFats}</Text>
                    <Text>{this.props.allottedTotal}</Text>
                </View>
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
        height: 60
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