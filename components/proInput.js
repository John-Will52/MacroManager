import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class ProInput extends Component{
    constructor(props) {
        super()
        this.state = {
            inputCarbs: null,
            inputProteins: null,
            inputFats: null,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    allEntries= () =>{
        
        if(this.carbInput != null && this.proteinInput != null && this.fatInput != null){
            return false;
        }
        else{
            return true;
        }
    }
    addCarbs = input => {
        this.setState({
            inputCarbs: parseInt(input)
        })
    }
    addProteins = input => {
        this.setState({
            inputProteins: parseInt(input)
        })
    }
    addFats = input => {
        this.setState({
            inputFats: parseInt(input)
        })
    }
    suggestion = input =>{
        this.carbInput = input * .3;
        this.proteinInput = input * .3;
        this.fatInput = input * .3;

    }

    inputSum = () =>{
        if(this.carbInput != null && this.proteinInput != null && this.fatInput != null){
            const total = this.state.inputCarbs + this.state.inputProteins + this.state.inputFats;
            return total
        }
    }

    inputCheck = () =>{
        let total = this.state.inputCarbs + this.state.inputProteins + this.state.inputFats;
        // Error array to show where the problem is. This function will return this array
        let errors = [];

        if(this.state.inputCarbs != null && this.state.inputProteins != null && this.state.inputFats != null){

            if(total < (this.props.recommendedTotal * .9)){
                errors.push("The total calories that you entered are at least 10% under your recommended total. You should only do this if you're a professional Bodybuilder trying to cut.")
                errors.push(`I would recommend ${this.props.recommendedTotal}`)
            }
            if(total > (this.props.recommendedTotal * 1.1)){
                errors.push("The total calories that you entered are at least 10% over your recommended total. You should only do this if you're a professional Bodybuilder trying to bulk.")
                errors.push(`I would recommend ${this.props.recommendedTotal}`)  
            }
            if(this.props.goal == "Gain"){
                
                if((this.state.inputCarbs < (total * .4)) || (this.state.inputCarbs > (total * .6))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(total * .4)} and ${parseInt(total * .6)}`)
                }
                if((this.state.inputProteins < (total * .25)) || (this.state.inputProteins > (total * .35))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(total * .25)} and ${parseInt(total * .35)}`)
                }
                if((this.state.inputFats < (total * .15)) || (this.state.inputFats > (total * .25))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(total * .15)} and ${parseInt(total * .25)}`)
                    
                }
            }
            if(this.props.goal == "Lose"){
                if((this.state.inputCarbs < (total * .1)) || (this.state.inputCarbs > (total * .3))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(total * .1)} and ${parseInt(total * .3)}`)
                }
                if((this.state.inputProteins < (total * .4)) || (this.state.inputProteins > (total * .5))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(total * .4)} and ${parseInt(total * .5)}`)
                }
                if((this.state.inputFats < (total * .3)) || (this.state.inputFats > (total * .4))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(total * .3)} and ${parseInt(total * .4)}`)    
                }
            }
            
        }
            return errors;
    }

    list = () => {
        return this.inputCheck().map((error, index) => {
          return(
            <Text style={styles.errorMessages} key={index}>* {error}</Text> 
          );
        });
      };


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Enter the calories that you follow</Text>
                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carb Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Protein Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fat Calories" placeholderTextColor='black'></TextInput>

                    <View style={styles.buttons1}>
                        <Button  color={Colors.button1} title="Check Numbers" onPress={()=> this.inputSum} disabled={this.allEntries()}></Button>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    {this.list()}
                </View> 
            </View>
       
        );
    }
}

const styles=StyleSheet.create({

    inputContainer:{
        width:'50%',
        alignItems: 'center',

    },
    container: {
        flexDirection:'row',
        justifyContent:'space-around'

    },
    buttons1:{
        backgroundColor: Colors.buttonBackground1,
        width: "90%",
        alignSelf: 'center',
        marginTop: 10,
      },
      inputs:{
        width: '70%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 1,
    },
    inputError:{
        width: '70%',
        backgroundColor: 'yellow',
        height: 50,
        borderColor:'red',
        borderWidth: 2,
    },
    text:{
        fontSize: 30,
        textAlign:'left',  
    },
    errorMessages:{
        color: 'red',
        fontSize: 10,
        fontWeight: 'bold',

    }
    
});

AppRegistry.registerComponent(appName, () => ProInput);