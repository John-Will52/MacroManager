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

    render(){
        if(this.state.name === null){

            return(
                <>
                <Question asked="What is your name?" testType="Input" buttonPress={this.setName}></Question>
                </>
            );
        }
        else if(this.state.name != null && this.state.sex === null){
            
            return(
                <>
                <Question asked="Are you Male or Female?" testType="Dilemma" optionOne="Male" optionTwo="Female" buttonPress ={this.setSex}></Question>
                </>
            );   
        }
        else if(this.state.name != null && this.state.sex != null && this.state.goal === null){
            
            return(
                <>
                <Question asked="Are you trying to gain, or lose?" testType="Dilemma" optionOne="Gain" optionTwo="Lose" buttonPress ={this.setGoal}></Question>
                </>
            );   
        }
        else if(this.state.name != null && this.state.sex != null && this.state.goal != null && this.state.units === null){
            
            return(
                <>
                <Question asked="Metric or Imperial" testType="Dilemma" optionOne="Metric" optionTwo="Imperial" buttonPress = {this.selectUnits}></Question>
                </>
            );   
        }
        else if(this.state.name != null && this.state.sex != null && this.state.goal != null && this.state.units != null){
            
            return(
                <>
                <Question testType="BMI" units={this.state.units}></Question>
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