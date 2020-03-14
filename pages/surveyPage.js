import React, {Component} from 'react';
import {AppRegistry, View, Text, Alert,StyleSheet, Button, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Question from '../components/question';
import Colors from '../styling/colors'

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SurveyPage extends Component{
    constructor(props) {
        super()
        this.state = {
            name : null,
            sex : null,
            goal : null,
            units:null,
            height : null,
            weight : null,
            BMI : null,
            allottedCarbs : null,
            allottedProteins : null,
            allottedFats : null,
            allottedTotal : null,
        }
    }
    setName = input => {
        if(input === null || input === ''){
            Alert.alert("Error", "Please provide your name.");
            this.setState({name:null});
        }
        this.setState({name:input});
    }
    setSex = input => {
        this.setState({sex:input});
    }
    setGoal = input => {
        this.setState({goal:input});
    }
    selectUnits = input =>{
        this.setState({units:input});
    }
    getBMI = (h, w) =>{
        if(h === NaN || w === NaN || h === null || w === null){
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
                if(this.state.goal === "Lose" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .7)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .6)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .6)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.25)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .4)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.25)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
            }
            else if(this.state.units === "Metric"){
                let weight = parseInt(w);
                let height = parseInt(h);
                let BMI = parseInt((weight)/((height/100)**2));
                this.setState({BMI : BMI});
                let imperialWeight = parseInt(weight * 2.205);
                let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
                if(this.state.goal === "Lose" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .7)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .6)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .6)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.25)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .4)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.5)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.25)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
            }
        }
    }
        
    wrongDetails = () => {
        this.setState({
            name : null,
            sex : null,
            goal : null,
            units:null,
            height : null,
            weight : null,
            BMI : null,})
    }

    render(){
        if(this.state.name === null){

            return(
                <Question style={styles.container} asked="What is your name?" testType="Input" buttonPress={this.setName}></Question>
            );
        }
        else if(this.state.sex === null){
            
            return(
                <>
                <Question asked="Are you Male or Female?" testType="Dilemma" optionOne="Male" optionTwo="Female" buttonPress ={this.setSex}></Question>
                </>
            );   
        }
        else if(this.state.goal === null){
            
            return(
                <>
                <Question asked="Are you trying to GAIN MUSCLE, or LOSE FAT?" testType="Dilemma" optionOne="Gain" optionTwo="Lose" buttonPress ={this.setGoal}></Question>
                </>
            );   
        }
        else if(this.state.units === null){
            
            return(
                <>
                <Question asked="Do you measure with the metric or imperial system?" testType="Dilemma" optionOne="Metric" optionTwo="Imperial" buttonPress = {this.selectUnits}></Question>
                </>
            );   
        }
        else if(this.state.BMI === null || this.state.height === null || this.state.weight === null){
            
            return(
                <>
                <Question testType="BMI" units={this.state.units} buttonPress = {this.getBMI}></Question>
                <Text>{this.state.BMI} {this.state.height} {this.state.weight}</Text>
                </>
            );   
        }
        else if (this.state.BMI != null || this.state.BMI != 'NaN'){
            
            return(
                <>
                
                <ScrollView>
                    <View>
                        <Text style={styles.text}>Is this information correct?</Text>
                        <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button1} title="Yes" onPress={()=>this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI, this.state.allottedCarbs, this.state.allottedProteins, this.state.allottedFats, this.state.allottedTotal)}></Button>
                            </View>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button2} title="No" onPress={()=>this.wrongDetails()}></Button>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.text}>Name: {this.state.name}</Text>
                    <Text style={styles.text}>Sex: {this.state.sex}</Text>
                    <Text style={styles.text}>Goal: {this.state.goal} weight</Text>
                    <Text style={styles.text}>Units: You measure with the {this.state.units} system</Text>
                    <Text style={styles.text}>Height: {this.state.height}</Text>
                    <Text style={styles.text}>Weight: {this.state.weight}</Text>
                    <Text style={styles.text}>BMI: {parseInt(this.state.BMI)}</Text>
                    <Text style={styles.text}>Your recommended carb limit is: {this.state.allottedCarbs} calories or {parseInt(this.state.allottedCarbs / 4)} grams</Text>
                    <Text style={styles.text}>Your recommended protein limit is: {this.state.allottedProteins} calories or {parseInt(this.state.allottedProteins / 4)} grams</Text>
                    <Text style={styles.text}>Your recommended fat limit is: {this.state.allottedFats} calories or {parseInt(this.state.allottedFats / 9)} grams</Text>
                    <Text style={styles.text}>Your recommended daily calorie total is: {this.state.allottedTotal} calories</Text>
                </ScrollView>
                    
                </>
            );   
        }
    }
}

const styles=StyleSheet.create({
    text:{
        fontSize: 30,
        textAlign:'left',  
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    horizontalButtonBox:{
        width:'30%'
    },


}); 

AppRegistry.registerComponent(appName, () => SurveyPage);