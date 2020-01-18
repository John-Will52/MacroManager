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
            percentOfCarbs: 0,
            percentOfProteins: 0,
            percentOfFats: 0,
            percentOfTotalCalories: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addServings = input =>{
        this.setState({servings: parseInt(input)});
        // this.servingInput.clear();
    }
    addCarbs = input =>{
        this.setState({carbInput: parseInt(input)});
        // this.carbInput.clear();
    }
    addProteins = input =>{
        this.setState({proteinInput: parseInt(input)});
        // this.proteinInput.clear();
    }
    addFats = input =>{
        this.setState({fatInput: parseInt(input)});
        // this.fatInput.clear();
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
                <Button  ref={this.addCaloriesButton} color="blue" title="Add Calories" onPress={()=> this.props.addCalories(this.state.servings, this.state.carbInput, this.state.proteinInput, this.state.fatInput)}></Button>
                <View>
                    <Text>{this.state.servings}({this.state.carbInput}+{this.state.proteinInput}+{this.state.fatInput})</Text>
                    <Text>{this.state.carbCalorieAmount}+{this.state.proteinCalorieAmount}+{this.state.fatCalorieAmount} = {this.state.totalCalorieAmount}</Text>
                    <Text style={styles.text}>{this.props.carbPercentage}+{this.props.proteinPercentage}+{this.props.fatPercentage} = {this.props.totalPercentage}</Text>
                </View>
                <View>
                    <Text>Visual evidence of data being passed</Text>
                    <Text>{this.props.carbPercentage}</Text>
                    <Text>{this.props.proteinPercentage}</Text>
                    <Text>{this.props.fatPercentage}</Text>
                    <Text>{this.props.totalPercentage}</Text>
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