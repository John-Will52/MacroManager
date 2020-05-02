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
            inputTotal: null,
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
      // inputCheck= () =>{
    //     if(this.state.inputTotal < (this.state.allottedTotal * .9)){
    //         Alert.alert('Warning', 'Your numbers are much lower than recommended by our algorithm. Eating too little can lead to your body "starving" and not shedding weight.', [
    //             {text: "I know what I'm doing."},
    //             {text: 'What do you recommend?'},
    //         ] )
    //     }
    //     else if(this.state.inputTotal > (this.state.allottedTotal * 1.1)){
    //         Alert.alert('Warning', 'Your numbers are much higher than recommended by our algorithm. Eating too much can lead to your body putting on more fat, rather than lean muscle.', [
    //             {text: "I know what I'm doing."},
    //             {text: 'What do you recommend?'},
    //         ] )
    //     }
    //     else{
    //         if(this.state.goal == 'Lose'){
    //             if(this.state.inputCarbs < (this.state.inputTotal * .1)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputProteins < (this.state.inputTotal * .4)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputFats < (this.state.inputTotal * .3)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }    
    //             if(this.state.inputCarbs > (this.state.inputTotal * .3)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputProteins > (this.state.inputTotal * .5)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputFats > (this.state.inputTotal * .4)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //         }
    //         else{
    //             if(this.state.inputCarbs < (this.state.inputTotal * .4)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputProteins < (this.state.inputTotal * .25)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputFats < (this.state.inputTotal * .15)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    
    //             if(this.state.inputCarbs > (this.state.inputTotal * .6)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputProteins > (this.state.inputTotal * .35)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //             if(this.state.inputFats > (this.state.inputTotal * .25)){
    //                 if(this.state.sex === 'Male'){

    //                 }
    //                 else{}
    //             }
    //         }
    //     }    
    // }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Enter the calories that you follow</Text>
                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carb Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Protein Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fat Calories" placeholderTextColor='black'></TextInput>
                    <View style={styles.buttons1}>
                        <Button  color={Colors.button1} title="Check Numbers" onPress={()=> this.inputSum(this.state.inputCarbs, this.state.inputProteins, this.state.inputFats)} disabled={this.allEntries()}></Button>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carb Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Protein Calories" placeholderTextColor='black'></TextInput>
                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fat Calories" placeholderTextColor='black'></TextInput>
                    <View style={styles.buttons1}>
                        <Button  color={Colors.button1} title="Check Numbers" onPress={()=> this.inputSum(this.state.inputCarbs, this.state.inputProteins, this.state.inputFats)} disabled={this.allEntries()}></Button>
                    </View>
                    <Text>{this.state.inputTotal}</Text>
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
    text:{
        fontSize: 30,
        textAlign:'left',  
    },
    
});

AppRegistry.registerComponent(appName, () => ProInput);