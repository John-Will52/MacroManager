import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button, Alert, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import Errors from '../components/errors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class EditInfoPage extends Component{
    constructor(props) {
        super()
        this.state = {
            name: null,
            feet: null,
            inches: null,
            weight: null,
            BMI:null,
            inputCarbs: null,
            inputProteins: null,
            inputFats: null,
            focus: null,
            goal: null,
            allottedFats: null,
            allottedCarbs: null,
            allottedProteins: null,
            allottedTotal: null,
        }
    }
    setName = input => {
        if(input === null){
            Alert.alert("Error", "Please provide your name.");
            this.setState({name:null});
        }
        else{
            this.setState({name:input});
        }
    }
    changeName = () =>{
        if(this.state.name == null){
            return this.props.name;
        }
        else{
            return this.state.name;
        }
    }
    setGoal = input =>{
        if(this.state.BMI == null){
            if(this.props.units === "Imperial"){
                let weight = this.props.weight;
                let BMI = this.props.BMI;
                let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
                if(input === "Lose" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                }
                if(input === "Lose" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    
                }
                if(input === "Gain" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    
                }
                if(input === "Gain" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                }
            }
            if(this.props.units === "Metric"){
                let weight =this.props.weight;
                let BMI = this.props.BMI;
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(input === "Lose" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                }
                if(input === "Lose" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    
                }
                if(input === "Gain" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    
                }
                if(input === "Gain" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                }
            }

        }
        else{
            if(this.props.units === "Imperial"){
                let weight = this.state.weight;
                let BMI = this.state.BMI;
                let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
                if(input === "Lose" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                }
                if(input === "Lose" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                    
                }
                if(input === "Gain" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                    
                }
                if(input === "Gain" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                }
            }
            if(this.props.units === "Metric"){
                let weight = this.state.weight;
                let BMI = this.state.BMI;
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(input === "Lose" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                }
                if(input === "Lose" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                    
                }
                if(input === "Gain" && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                    
                }
                if(input === "Gain" && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({goal: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null});
                }
            }
        }
    }
    changeGoal = () =>{
        if(this.state.goal == null){
            return this.props.goal
        }
        else{
            return this.state.goal;
        }
    }

    getFeet = input =>{
        let inchConversion = parseInt(input) * 12;
        this.setState({feet: inchConversion});
    }
    getInches = input =>{
        if(0 <= input < 12){
            this.setState({inches: parseInt(input)});
        }
        else{
            this.inchInput.clear();
            this.setState({inches: null});
            Alert.alert('Error', "11 inches is the max that you can put here. If 12+ inches are needed, add an additional foot.");

        }
    }
    newHeight= () =>{
        if(this.state.height == null){
            return this.props.height;
        }
        else{
            return this.state.height;
        }
    }

    getWeight = input =>{
        this.setState({weight: input});
    }

    newWeight = () =>{
        if(this.state.weight == null){
            return this.props.weight;
        }
        else{
            return this.state.weight;
        }
    }
    editBMI = (h, w) =>{
        if(h == NaN || w == NaN || h === null || w === null){
            Alert.alert("Error", "You must provide your height and weight to calculate your BMI.");
            this.setState({height: null, weight: null});
        }
        else{

            this.setState({height: parseInt(h), weight: parseInt(w)});
            if(this.state.units === "Imperial"){
                let weight = parseInt(w);
                let height = parseInt(h);
                let BMI = parseInt((703 * weight)/((height)**2));
                this.setState({BMI : BMI});
                let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
                if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
            }
            if(this.state.units === "Metric"){
                let weight = parseInt(w);
                let height = parseInt(h);
                let BMI = parseInt((weight)/((height/100)**2));
                this.setState({BMI : BMI});
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
            }
        }
    }

    newBMI = () =>{
        if(this.state.BMI == null){
            return parseInt(this.props.BMI);
        }
        else{
            return parseInt(this.state.BMI);
        }
    }
    newCarbs= () =>{
        if(this.state.allottedCarbs == null && this.state.inputCarbs == null){
            return parseInt(this.props.allottedCarbs);
        }
        if(this.state.allottedCarbs == null && this.state.inputCarbs != null){
            return parseInt(this.state.inputCarbs);
        }
        if(this.state.allottedCarbs != null && this.state.inputCarbs == null){
            return parseInt(this.state.allottedCarbs);
        }
    }
    newFats= () =>{
        if(this.state.allottedFats == null && this.state.inputFats == null){
            return parseInt(this.props.allottedFats);
        }
        if(this.state.allottedFats == null && this.state.inputFats != null){
            return parseInt(this.state.inputFats);
        }
        if(this.state.allottedFats != null && this.state.inputFats == null){
            return parseInt(this.state.allottedFats);
        }
    }
    newProteins= () =>{
        if(this.state.allottedProteins == null && this.state.inputProteins == null){
            return parseInt(this.props.allottedProteins);
        }
        if(this.state.allottedProteins == null && this.state.inputProteins != null){
            return parseInt(this.state.inputProteins);
        }
        if(this.state.allottedProteins != null && this.state.inputProteins == null){
            return parseInt(this.state.allottedProteins);
        }

    }
    newTotal= () =>{
        let total = this.state.inputFats + this.state.inputProteins + this.state.inputCarbs;
        if(this.state.inputCarbs != null && this.state.inputProteins != null && this.state.inputFats != null){
            return parseInt(total);
        }
        else if(this.state.allottedTotal != null){
            return parseInt(this.state.allottedTotal);
        }
        else{
            return parseInt(this.props.allottedTotal)
        }
    }
      
      
      changeNumbers = (carbs, protein, fat, errors)=>{
        total = parseInt(carbs) + parseInt(protein) + parseInt(fat);
        if(errors > 0){
            Alert.alert(
                'Warning',
                `Unless you're a professional, and you know EXACTLY what you're doing, your numbers aren't recommended.
  Are you sure that you want to use them?`,
                [
                  {text: "I know what I'm doing", onPress: () => this.setState({
                    allottedCarbs: parseInt(carbs),
                    allottedProteins: parseInt(protein),
                    allottedFats: parseInt(fat),
                    allottedTotal: total,
                  }),
                    },
                  {
                    text: "No"
                  },
                ],
                {cancelable: false},
              );
        }
        else{
            this.setState({
              allottedCarbs: parseInt(carbs),
              allottedProteins: parseInt(protein),
              allottedFats: parseInt(fat),
              allottedTotal: total,
            })          
        }
    }


// ///////////////////////////////////////////////////////////////////////////////////////////

    
    

    BMIEntries= () =>{
        
        if((this.state.inches != null && this.state.feet != null && this.state.weight != null) || (this.state.height != null && this.state.weight != null)){
            return false;
        }
        else{
            return true;
        }
    }
    
    macroEntries= () =>{
        
        if(this.carbInput != null && this.proteinInput != null && this.fatInput != null){
            return false;
        }
        else{
            return true;
        }
    }
    addCarbs = input => {
        this.setState({
            inputCarbs: parseInt(input),
            allottedCarbs: null
        })
    }
    addProteins = input => {
        this.setState({
            inputProteins: parseInt(input),
            allottedProteins: null
        })
    }
    addFats = input => {
        this.setState({
            inputFats: parseInt(input),
            allottedFats: null
        })
    }

    inputCheck = () =>{
        let total = this.state.inputCarbs + this.state.inputProteins + this.state.inputFats;
        // Error array to show where the problem is. This function will return this array
        let errors = [];

        if(this.state.inputCarbs != null && this.state.inputProteins != null && this.state.inputFats != null){

            if(total < (this.props.allottedTotal * .75)){
                errors.push(`Your total entered calories, ${total}, is at least 25% under your recommended total. You should only do this if you're a professional Bodybuilder trying to cut. I would recommend ${this.props.allottedTotal} total calories`);
                return errors;

            }
            if(total > (this.props.allottedTotal * 1.25)){
                errors.push(`Your total entered calories, ${total}, is at least 25% over your recommended total. You should only do this if you're a professional Bodybuilder trying to bulk. I would recommend ${this.props.allottedTotal} total calories`);
                return errors;
            }
            if((this.props.goal == "Gain" && this.state.goal == null) || this.state.goal =='Gain'){
                
                if((this.state.inputCarbs < (this.props.allottedTotal * .4)) || (this.state.inputCarbs > (this.props.allottedTotal * .6))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(this.props.allottedTotal * .4)} and ${parseInt(this.props.allottedTotal * .6)}`)
                }
                if((this.state.inputProteins < (this.props.allottedTotal * .25)) || (this.state.inputProteins > (this.props.allottedTotal * .35))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(this.props.allottedTotal * .25)} and ${parseInt(this.props.allottedTotal * .35)}`)
                }
                if((this.state.inputFats < (this.props.allottedTotal * .15)) || (this.state.inputFats > (this.props.allottedTotal * .25))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(this.props.allottedTotal * .15)} and ${parseInt(this.props.allottedTotal * .25)}`)    
                }

                return errors
            }
            if((this.props.goal == "Lose" && this.state.goal == null) || this.state.goal =='Lose'){
                if((this.state.inputCarbs < (this.props.allottedTotal * .1)) || (this.state.inputCarbs > (this.props.allottedTotal * .3))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(this.props.allottedTotal * .1)} and ${parseInt(this.props.allottedTotal * .3)}`)
                }
                if((this.state.inputProteins < (this.props.allottedTotal * .4)) || (this.state.inputProteins > (this.props.allottedTotal * .5))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(this.props.allottedTotal * .4)} and ${parseInt(this.props.allottedTotal * .5)}`)
                }
                if((this.state.inputFats < (this.props.allottedTotal * .3)) || (this.state.inputFats > (this.props.allottedTotal * .4))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(this.props.allottedTotal * .3)} and ${parseInt(this.props.allottedTotal * .4)}`)    
                }
                return errors;
            }
            
        }
            return errors;
    }

    list = () => {
        return this.inputCheck().map((error, index) => {
          return(
            <Errors key={index} errorMessage={error}></Errors> 
          );
        });
    };

    phaseButtons = () =>{
        if((this.state.goal == null &&  this.props.goal == 'Lose') || this.state.goal == 'Lose'){
            return(
                <View style={styles.phaseButtonsContainer}>
                    <View style={styles.phaseButtons2}>
                        <Button color={Colors.button2} title="1" onPress={()=>{this.phaseNumbers(1)}}></Button>
                    </View>
                    <View style={styles.phaseButtons2}>
                        <Button color={Colors.button2} title="2" onPress={()=>{this.phaseNumbers(2)}}></Button>
                    </View>
                    <View style={styles.phaseButtons2}>
                        <Button color={Colors.button2} title="3" onPress={()=>{this.phaseNumbers(3)}}></Button>
                    </View>
                </View>
            )
        }
        if((this.state.goal == null &&  this.props.goal == 'Gain') || this.state.goal == 'Gain'){
            return(
                <View style={styles.phaseButtonsContainer}>
                    <View style={styles.phaseButtons}>
                        <Button color={Colors.button} title="1" onPress={()=>{this.phaseNumbers(1)}}></Button>
                    </View>
                    <View style={styles.phaseButtons}>
                        <Button color={Colors.button} title="2" onPress={()=>{this.phaseNumbers(2)}}></Button>
                    </View>
                    <View style={styles.phaseButtons}>
                        <Button color={Colors.button} title="3" onPress={()=>{this.phaseNumbers(3)}}></Button>
                    </View>
                </View>
            )
         }
    }

    phaseNumbers = num =>{
        if(this.state.BMI == null){
            if(this.props.units == "Imperial"){
                let weight = this.props.weight;
                let BMI = this.props.BMI;
                let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
                if(num == 1){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 2){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.2)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.158)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .642)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .459)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.296)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .816)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.817)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.692)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.245)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.969)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .622)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 3){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.042)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .408)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .735)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.449)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.143)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .684)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
            }
            if(this.props.units == "Metric"){
                let weight =this.props.weight;
                let BMI = this.props.BMI;
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(num == 1){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 2){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.2)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.158)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .642)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .459)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.296)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .816)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.817)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.692)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.245)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.969)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .622)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 3){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.042)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .408)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .735)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.449)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.143)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .684)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
            }
        }
        else{
            if(this.props.units == "Imperial"){
                let weight = this.state.weight;
                let BMI = this.state.BMI;
                let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
                if(num == 1){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 2){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.2)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.158)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .642)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .459)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.296)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .816)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.817)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.692)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.245)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.969)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .622)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 3){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.042)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .408)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .735)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.449)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.143)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .684)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
            }
            if(this.props.units == "Metric"){
                let weight =this.state.weight;
                let BMI = this.state.BMI;
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(num == 1){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 2){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.2)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.158)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .642)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .459)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.296)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .816)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.817)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.692)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.245)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.969)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .622)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
                if(num == 3){
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 1.042)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                    if(((this.props.goal === "Lose" && this.state.goal ==null) || this.state.goal == 'Lose') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * .408)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.041)) * 4;
                        let allottedFatCalories =  parseInt((leanBodyMass * .735)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Male"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .558)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                        
                    }
                    if(((this.props.goal === "Gain" && this.state.goal ==null) || this.state.goal == 'Gain') && this.props.sex === "Female"){
                        let allottedCarbCalories = parseInt((leanBodyMass * 2.449)) * 4;
                        let allottedProteinCalories = parseInt((leanBodyMass * 2.143)) * 4;
                        let allottedFatCalories = parseInt((leanBodyMass * .684)) * 9;
                        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), inputCarbs: null, inputProteins: null, inputFats:null})
                    }
                }
            }
        }
        
        
        
        
        
        
    }

    page = () =>{
        if(this.state.focus == 'Name'){
            return(
                
                    <View style={styles.editArea}>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.focus}>
                                <Text style={styles.text}>Change your name.</Text>
                                <TextInput style={styles.input} ref={(name) => { this.nameInput = name }} onChangeText={(name)=>{this.setName(name)}} placeholder="Name" placeholderTextColor='black' keyboardType="default"></TextInput>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                            </View>
                            <View style={styles.buttonBackground}>
                                    <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                
            );
        }
        else if(this.state.focus == 'Goal'){
            if((this.props.goal == 'Gain' && this.state.goal == null) || this.state.goal == 'Gain'){
                return(
                    <View style={styles.editArea}>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.buttonBackground}>
                                <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                            </View>
                            <View style={styles.focus}>
                                <Text style={styles.text}>Change your goal.</Text>
                                <View style = {styles.buttons2}>
                                    <Button color={Colors.button2} title="Lose" onPress={()=>this.setGoal('Lose')}></Button>
                                </View>
                        </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                );
            }
            if((this.props.goal == 'Lose' && this.state.goal == null) || this.state.goal == 'Lose'){
                return(
                    <View style={styles.editArea}>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.buttonBackground}>
                                <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                            </View>
                            <View style={styles.focus}>
                                <Text style={styles.text}>Change your goal.</Text>
                                <View style = {styles.buttons}>
                                    <Button color={Colors.button} title="Gain" onPress={()=>this.setGoal('Gain')}></Button>                
                                </View>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                );
            }
            
        }
        else if(this.state.focus == 'BMI'){
            if(this.props.units == "Imperial"){
                return(
                    
                        <View style={styles.editArea}>
                            <Text style={styles.title}>What would you like to edit?</Text>
                            <View>
                                <View style={styles.buttonBackground}>
                                    <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                                </View>
                                <View style={styles.buttonBackground}>
                                    <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                                </View>
                                <View style={styles.focus}>
                                    <Text style={styles.BMIText}>Enter your current height and weight.</Text>
                                    <Text style={styles.smallText}>Height</Text>
                                    <View style={styles.vertAlign}>
                                        <TextInput style={styles.imperialNumInput} ref={(feet) => { this.footInput = feet }} onChangeText= {(feet) =>{this.getFeet(feet)}} placeholder ="Feet" placeholderTextColor='black' keyboardType="number-pad" maxLength={1} ></TextInput>
                                        <TextInput style={styles.imperialNumInput} ref={(inches) => { this.inchInput = inches }} onChangeText= {(inches) =>{this.getInches(inches)}} placeholder ="Inches" placeholderTextColor='black' keyboardType="number-pad" maxLength={2}></TextInput>
                                    </View>
                                    <View>
                                        <Text style={styles.smallText}>Weight</Text>
                                        <View style={styles.vertAlign}>
                                            <TextInput style={styles.numInput} ref={(weight) => { this.weightInput = weight }} onChangeText={text => {this.setState({weight: parseInt(text)})}} placeholder="Lbs." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.BMIbuttons}>
                                        <Button color={Colors.button} title="Get BMI" onPress={ () => this.editBMI((parseInt(this.state.feet) + parseInt(this.state.inches)), parseInt(this.state.weight))} disabled={this.BMIEntries()}></Button>
                                    </View>
                                </View>
                                <View style={styles.buttonBackground}>
                                    <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                                </View>
                                <View style={styles.buttonBackground}>
                                    <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                                </View>
                            </View>
                        </View>
                    
                );
            }
            else{
                return(
                    <View style={styles.editArea}>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.buttonBackground}>
                                <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                            </View>
                            <View style={styles.focus}>
                                <Text style={styles.BMIText}>Enter your current height and weight.</Text>
                                <Text style={styles.smallText}>Height</Text>
                                <View style={styles.vertAlign}>
                                    <TextInput style={styles.numInput} ref={(cm) => { this.cmInput = cm }} onChangeText={text => this.metricGetHeight(text)} placeholder="cm." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                                </View>
                                <View>
                                    <Text style={styles.smallText}>Weight</Text>
                                    <View style={styles.vertAlign}>
                                        <TextInput style={styles.numInput} ref={(weight) => { this.weightInput = weight }} onChangeText={text => this.getWeight(text)}placeholder="kg." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.BMIbuttons}>
                                    <Button color={Colors.button} title="Get BMI" onPress={() =>this.editBMI(parseInt(this.state.height), parseInt(this.state.weight))} disabled={this.BMIEntries()}></Button>
                                </View>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                );
            }
            
        }
        else if(this.state.focus == 'Phases'){
            return(
                <View style={styles.editArea}>
                    <Text style={styles.title}>What would you like to edit?</Text>
                    <View>

                        <View style={styles.buttonBackground}>
                            <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                        </View>

                        <View style={styles.buttonBackground}>
                            <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                        </View>

                        <View style={styles.buttonBackground}>
                            <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                        </View>

                        <View style={styles.focus}>
                            <Text style={styles.text}>Change your numbers by selecting your next phase</Text>
                            {this.phaseButtons()}
                        </View>

                        <View style={styles.buttonBackground}>
                            <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                        </View>

                    </View>
                </View>
            );
        }
        else if(this.state.focus == 'Numbers'){
            return(
                
                    <View style={styles.editArea}>
                    <Text style={styles.title}>What would you like to edit?</Text>
                    <View>
                        <View style={styles.buttonBackground}>
                            <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                                <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                        </View>
                        <View style={styles.focus}>
                            <Text style={styles.text}>Enter your own calorie amounts that you want to follow</Text>
                            <View style={styles.numbersContainer}>
                                <View style={styles.numbersInputContainer}>
                                    <Text style={styles.numbersText}>Fats</Text>
                                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fat Calories" placeholderTextColor='black' maxLength={4}></TextInput>
                                    <Text style={styles.numbersText}>Carbs</Text>                       
                                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carb Calories" placeholderTextColor='black' maxLength={4}></TextInput>
                                    <Text style={styles.numbersText}>Proteins</Text>
                                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Protein Calories" placeholderTextColor='black' maxLength={4}></TextInput>
                                </View>
                                <View style={styles.numbersInputContainer}>
                                    {this.list()}
                                </View> 
                                </View>
                            </View>
                        </View>
                    </View>
                
            );
        }
        else{
            return(
                <View style={styles.editArea}>
                    <Text style={styles.title}>What would you like to edit?</Text>
                    <View>
                        <View style={styles.buttonBackground}>
                            <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Change your phase" color={Colors.button2} onPress={() => this.setState({focus: 'Phases'})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                        </View>
                    </View>
                </View>
            );
        }
    }

    behavior=()=>{
        if(Platform.OS == "ios"){
            return "position"
        }
        else{
            return "padding"
        }
    }


    render(){
        return(
            <View style={styles.page}>
                <KeyboardAvoidingView  behavior={this.behavior()}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Please click the button below to submit your changes.</Text>
                        <Text style={styles.tableText}>• Current Name: {this.changeName()}</Text>
                        <Text style={styles.tableText}>• Current Goal: {this.changeGoal()}</Text>
                        <Text style={styles.tableText}>• Height: {this.newHeight()}</Text>
                        <Text style={styles.tableText}>• Weight: {this.newWeight()}</Text>
                        <Text style={styles.tableText}>• BMI: {this.newBMI()}</Text>
                        <Text style={styles.tableText}>• Current Daily Fat Calories: {this.newFats()}</Text>
                        <Text style={styles.tableText}>• Current Daily Carb Calories: {this.newCarbs()}</Text>
                        <Text style={styles.tableText}>• Current Daily Protein Calories:  {this.newProteins()}</Text>
                        <Text style={styles.tableText}>• Current Total Daily Calories:  {this.newTotal()}</Text>
                        <View style={styles.submitButtonBackground}>
                            <Button title="Submit Changes" color={Colors.button} onPress={() => this.props.editedInfo(this.changeName(), this.changeGoal(), this.newHeight(), this.newWeight(), this.newBMI(),this.newFats(), this.newCarbs(), this.newProteins(), this.newTotal(), this.list().length)}></Button> 
                        </View>
                        {this.page()}
                    </View>
                </KeyboardAvoidingView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    page:{
        // height: '90%',
    },
    editArea:{
        backgroundColor: Colors.background,
        // backgroundColor: '#d1f7ff',
        marginTop: 10,
        padding: 5,
        borderColor: Colors.borders,
        borderWidth:2
    },
    title:{
        color: Colors.titles,
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
        borderWidth: 2,
        borderColor: Colors.boxBackground,
        margin: 5,
        width:'60%',
        alignSelf:'center'
    },
    submitButtonBackground:{
        backgroundColor: Colors.buttonBackground,
        borderWidth: 2,
        borderColor: Colors.boxBackground,
        margin: 5,
        width:'60%',
        alignSelf:'center'
    },
    input:{
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        width: '60%',
        alignSelf: 'center',
        color: 'black'

    },
    smallText:{
        fontSize: 20,
        color: Colors.subtitles,
    },
    numInput:{
        width: 150,
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        color: 'black'

    },
    imperialNumInput:{
        width: 70,
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        marginRight: 10,
        color: 'black'

    },
    verticalButtonBox:{
        width:'100%'
    },
    verticalButtonContainer:{
        justifyContent:'space-between',
        width:'40%',
        alignItems: 'flex-end',
    },
    horizontalButtonBox:{
        width:'30%'
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    vertAlign:{
        flexDirection:'row',
        width:'40%',
        justifyContent:'space-between'
    },
    buttons:{
        backgroundColor: Colors.buttonBackground,
        width: "30%",
        alignSelf: 'center',
        marginTop: 10,
    },
    BMIbuttons:{
        backgroundColor: Colors.buttonBackground,
        width: "50%",
        alignSelf: 'center',
        marginTop: 10,
    },
    buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "30%",
        alignSelf: 'center',
        marginTop: 10,
    },
    buttons1:{
        backgroundColor: Colors.buttonBackground,
        width: "90%",
        alignSelf: 'center',
        marginTop: 10,
      },
    inputs:{
        width: '90%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        marginVertical: 1,
        color: 'black'

    },
    inputError:{
        width: '90%',
        backgroundColor: 'yellow',
        height: 50,
        borderColor:'red',
        borderWidth: 2,
    },
    text:{
        fontSize: 20,
        textAlign:'center',
        marginBottom: 10,
        color: Colors.titles
    },
    numbersText:{
        fontSize: 20,
        alignSelf:'flex-start',
        marginStart: 15,
        color: Colors.titles
    },
    BMIText:{
        fontSize: 20,
        textAlign:'center',
        marginBottom: 10,
        color: Colors.titles
    },
    numbersInputContainer:{
        width:'50%',
        alignItems: 'center',

    },
    numbersContainer: {
        flexDirection:'row',
        justifyContent:'space-around'

    },
    focus:{
        backgroundColor:Colors.boxBackground,
        width: '90%',
        borderColor: Colors.borders,
        borderWidth: 2,
        margin: 5,
        padding: 5,
        alignSelf: 'center'
    },
    container:{
        backgroundColor:Colors.boxBackground,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: Colors.borders,
        borderWidth: 2,
        width: '100%',
        alignSelf: "center",
      },
      tableText:{
        color: Colors.text,
        fontSize: 20
      },
      phaseButtonsContainer:{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          marginBottom: 20,
      },

      phaseButtons: {
        backgroundColor:Colors.buttonBackground,
        width: '10%',
      },
      phaseButtons2: {
        backgroundColor:Colors.buttonBackground2,
        width: '10%',
      },

})

AppRegistry.registerComponent(appName, () => EditInfoPage);