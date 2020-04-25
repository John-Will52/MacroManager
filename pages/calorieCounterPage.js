import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Counter from '../components/counter';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class CalorieCounterPage extends Component{
    constructor(props) {
        super()
        this.state = {
            servings: 0,
            carbInput: 0,
            proteinInput: 0,
            fatInput: 0,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    
    addServings = input =>{
        if(input > 0){
            this.setState({servings: parseInt(input)});
        }
        else{
            this.setState({servings: 0});
        }
    }
    addCarbs = input =>{
        if(input > 0){
            this.setState({carbInput: parseInt(input)});
        }
        else{
            this.setState({carbInput: 0});
        }
    }
    addProteins = input =>{
        if(input > 0){
            this.setState({proteinInput: parseInt(input)});
        }
        else{
            this.setState({proteinInput: 0});
        }
    }
    addFats = input =>{
        if(input > 0){
            this.setState({fatInput: parseInt(input)});
        }
        else{
            this.setState({fatInput: 0});
        }
    }
    clearInputs = () =>{
       this.servingInput.clear();
       this.carbInput.clear();
       this.proteinInput.clear();
       this.fatInput.clear();
       this.setState({
            servings: 0,
            carbInput: 0,
            proteinInput: 0,
            fatInput: 0
       });
    }




    render(){
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.text}>Add the amounts of each in grams</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(servings) => { this.servingInput = servings}} onChangeText={num => this.addServings(num)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                </View>
                <Button ref={this.addCaloriesButton} color={Colors.button1} title="Add Calories" onPress={()=> (this.props.addCalories(this.state.servings, this.state.carbInput, this.state.proteinInput, this.state.fatInput), this.clearInputs())}></Button>
                <View style={styles.counterContainer}>
                    <Counter percentages={this.props.percentOfCarbs}></Counter>
                    <Counter percentages={this.props.percentOfProteins}></Counter>
                    <Counter percentages={this.props.percentOfFats}></Counter>
                    <Counter percentages={this.props.percentOfTotalCalories}></Counter>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={styles.labels}>Carbs</Text>
                    <Text style={styles.labels}>Proteins</Text>
                    <Text style={styles.labels}>Fats</Text>
                    <Text style={styles.labels}>Total</Text>
                </View>
                <Button ref={this.clearButton} color={Colors.button2} title="Clear" onPress={()=> this.props.clear()}></Button>
                <Button title="Save a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
                <Button title="Eat a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
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
        borderWidth: 1,
    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
        marginTop: 20,
    },
    labelContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
        // borderColor: 'black',
        // borderWidth: 2,
    },
    counterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flex: 1,
        height: 350,
        alignItems: 'flex-end',
        marginTop:50,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    text:{
        fontSize: 35,
        textAlign: "center",
    },
    pageContainer:{
        padding: 5,
    },
    labels:{
        color: 'black',
        width: '25%',
        fontSize: 18,
        textDecorationLine: 'underline',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
})

AppRegistry.registerComponent(appName, () => CalorieCounterPage);