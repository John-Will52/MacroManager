import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button,} from 'react-native';
import {name as appName} from '../app.json';
import Counter from '../components/counter';
import Colors from '../styling/colors';
import AsyncStorage from '@react-native-community/async-storage';

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class CalorieCounterPage extends Component{
    constructor(props) {
        super()
        this.state = {
            servings: null,
            carbInput: null,
            proteinInput: null,
            fatInput: null,
            displayType: 0,
        }
        this.getData();
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    storeData = async () => {
        try {
          const saveData = JSON.stringify(this.state.displayType);
          await AsyncStorage.setItem('display', saveData);
    
        } 
        catch (e) {
          // saving error
          console.log(e);
        }
      }
    
      getData = async () => {
        try {
          const appData = await AsyncStorage.getItem('display');
          const savedState = JSON.parse(appData);
          if(savedState !== null){
            this.setState({displayType: savedState})
          }
        } 
        catch(e) {
          // error reading value
          console.log(e);
        }
      }
    addServings = input =>{
        if(input != null){
            this.setState({servings: parseInt(input)});
        }
        else{
            this.setState({servings: 0});
        }
    }
    addCarbs = input =>{
        if(input != null){
            this.setState({carbInput: parseInt(input)});
        }
        else{
            this.setState({carbInput: 0});
        }
    }
    addProteins = input =>{
        if(input != null){
            this.setState({proteinInput: parseInt(input)});
        }
        else{
            this.setState({proteinInput: 0});
        }
    }
    addFats = input =>{
        if(input != null){
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
            servings: null,
            carbInput: null,
            proteinInput: null,
            fatInput: null
       });
    }

    allEntries= () =>{
        
        if(this.state.carbInput != null && this.state.proteinInput != null && this.state.fatInput != null && this.state.servings != null){
            return false;
        }
        else{
            return true;
        }
    }
    buttonColor= () =>{
        if(this.allEntries() == true){
            return Colors.disabledButton;
        }
        else{
            return Colors.button;
        }
    }
    display = () =>{
        const displays = ['percents', 'grams', 'calories'];
        this.storeData();
        return displays[this.state.displayType];
    }



    render(){
        return(
            <View style={styles.pageContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>Add the amounts of each</Text>
                    <Text style={styles.subtext}>(<Text style={styles.subtextUnderline}>in grams</Text>)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fats" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carbs" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Proteins" placeholderTextColor='black'></TextInput>
                        <TextInput style={styles.inputs} ref={(servings) => { this.servingInput = servings}} onChangeText={num => this.addServings(num)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    </View>
                    <View style={styles.buttons}>
                        <Button ref={this.addCaloriesButton} color={this.buttonColor()} title="Add Calories" onPress={()=> (this.props.addCalories(this.state.servings, this.state.carbInput, this.state.proteinInput, this.state.fatInput), this.clearInputs())} disabled={this.allEntries()}></Button>
                    </View>
                    <View style={styles.display}>
                        <Button color={Colors.displayButton} title="Display" onPress={() => {(this.state.displayType < 2) ? this.setState({displayType: this.state.displayType + 1}) : this.setState({displayType : 0}), this.storeData}}></Button>
                    </View>
                    <View style={styles.counterContainer}>
                        <Counter displayType={this.display()} remainingCals={this.props.remainingFatCals} remainingGrams={this.props.remainingFatGrams} percentages={this.props.percentOfFats}></Counter>
                        <Counter displayType={this.display()} remainingCals={this.props.remainingCarbCals} remainingGrams={this.props.remainingCarbGrams} percentages={this.props.percentOfCarbs}></Counter>
                        <Counter displayType={this.display()} remainingCals={this.props.remainingProteinCals} remainingGrams={this.props.remainingProteinGrams} percentages={this.props.percentOfProteins}></Counter>
                        <Counter displayType={this.display()} remainingCals={this.props.remainingTotalCals} remainingGrams="N/A" percentages={this.props.percentOfTotalCalories}></Counter>
                    </View>
                    <View style={styles.labelContainer}>
                        <Text style={styles.labels}>Fats</Text>
                        <Text style={styles.labels}>Carbs</Text>
                        <Text style={styles.labels}>Proteins</Text>
                        <Text style={styles.labels}>Total</Text>
                    </View>
                    <View style={styles.buttons2}>
                        <Button ref={this.clearButton} color={Colors.button2} title="Clear" onPress={()=> this.props.clear()} disabled={this.props.percentOfTotalCalories > 0 ? false : true}></Button>
                    </View>
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
        borderWidth: 1,
        color: 'black'

    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
        marginVertical: 10,
    },
    labelContainer:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-evenly'
    },
    counterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flex: 1,
        height: 355,
        alignItems: 'flex-end',
        borderColor: 'white',
        borderWidth: 1,
        borderBottomWidth: 0,
        backgroundColor: '#d1f7ff',

    },
    text:{
        fontSize: 30,
        textAlign: "center",
        color: Colors.titles
    },
    subtext:{
        fontSize: 20,
        textAlign: "center",
        color: 'white',
    },
    subtextUnderline:{
        fontSize: 20,
        textAlign: "center",
        color: 'white',
        textDecorationLine: 'underline'
    },
    labels:{
        color: '#fff',
        width: '25%',
        fontSize: 18,
        textDecorationLine: 'underline',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    buttons:{
        backgroundColor: Colors.buttonBackground,
        width: "40%",
        alignSelf: 'center',
      },
      buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "25%",
        alignSelf: 'center',
      },
      contentContainer:{
          backgroundColor: Colors.boxBackground,
          borderColor:Colors.borders,
          borderWidth: 3,
          padding: 5,
      },
      display:{
          flexDirection: 'row-reverse',
          margin: 0
      }

})

AppRegistry.registerComponent(appName, () => CalorieCounterPage);