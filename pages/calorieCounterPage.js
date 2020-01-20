import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Counter from '../components/counter';
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
    clearInputs = () =>{
        this.servingInput.clear();
        this.carbInput.clear();
        this.proteinInput.clear();
        this.fatInput.clear();
    }
    



    render(){
        return(
            <View style={styles.pageContainer}>
                
                <Text style={styles.text}>Add the amounts of each in grams</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs} ref={input => { this.carbInput = input }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carbs"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.proteinInput = input }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Proteins"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.fatInput = input }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fats"></TextInput>
                    <TextInput style={styles.inputs} ref={input => { this.servingInput = input }} onChangeText={num => this.addServings(num)} keyboardType="number-pad" placeholder="Servings"></TextInput>
                </View>
                <Button  ref={this.addCaloriesButton} color="blue" title="Add Calories" onPress={()=> this.props.addCalories(this.state.servings, this.state.carbInput, this.state.proteinInput, this.state.fatInput)}></Button>
                <View style={styles.counterContainer}>
                    {this.props.children}
                </View>
                <View style={styles.labelContainer}>
                    <Text style={styles.labels}>Carbs</Text>
                    <Text style={styles.labels}>Proteins</Text>
                    <Text style={styles.labels}>Fats</Text>
                    <Text style={styles.labels}>Total</Text>
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
        height: 60,
    },
    labelContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
    },
    counterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flex: 1,
        height: 350,
        alignItems: "flex-end",
        marginTop:50,
        borderColor: 'black',
        borderWidth: 2,
    },
    text:{
        fontSize: 35,
        textAlign: "center",
    },
    pageContainer:{
        padding: 5,
    },
    labels:{
        color: 'white',
        width: '25%',
        fontSize: 18,
        textDecorationLine: 'underline',
        justifyContent: 'space-evenly',
        textAlign: "center",
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
})

AppRegistry.registerComponent(appName, () => CalorieCounterPage);