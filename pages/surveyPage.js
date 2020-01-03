import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState,StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Question from '../components/question';
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
        }
    }
    setName = input => {
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
        this.setState({height: h});
        this.setState({weight: w});
        if(this.state.units === "Imperial"){
            let weight = parseInt(w);
            let height = parseInt(h);
            let BMI = (703 * weight)/((height)**2);
            let value = parseInt(BMI);
            this.setState({BMI : value});
        }
        else if(this.state.units === "Metric"){
            let weight = parseInt(w);
            let height = parseInt(h);
            let BMI = (weight)/((height/100)**2);
            let value = parseInt(BMI);
            this.setState({BMI : value});
        }
    }
    confirmDetails = input =>{
        if(input == "Yes"){
            return Hooray
        }
        else{
            return Boo
        }
    }

    render(){
        if(this.state.name === null){

            return(
                <>
                <Question asked="What is your name?" testType="Input" buttonPress={this.setName}></Question>
                </>
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
                <Question asked="Are you trying to gain, or lose?" testType="Dilemma" optionOne="Gain" optionTwo="Lose" buttonPress ={this.setGoal}></Question>
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
        else if(this.state.BMI === null){
            
            return(
                <>
                <Question testType="BMI" units={this.state.units} buttonPress = {this.getBMI}></Question>
                <Text>{this.state.BMI} {this.state.height} {this.state.weight}</Text>
                </>
            );   
        }
        else if (this.state.BMI != null){
            
            return(
                <>
                <Question asked="Are these details correct?" testType="Dilemma" optionOne="Yes" optionTwo="No" buttonPress = {this.confirmDetails}></Question>
                <Text>Name: {this.state.name}</Text>
                <Text>Sex: {this.state.sex}</Text>
                <Text>Goal: {this.state.goal} weight</Text>
                <Text>Units: You measure with the {this.state.units} system</Text>
                <Text>Height: {this.state.height}</Text>
                <Text>Weight: {this.state.weight}</Text>
                <Text>Your BMI is: {this.state.BMI}</Text>
                </>
            );   
        }
    }
}

const styles=StyleSheet.create({
    question:{
        flex: 1,
    }

}); 

AppRegistry.registerComponent(appName, () => SurveyPage);