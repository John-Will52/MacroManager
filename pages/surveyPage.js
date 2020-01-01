import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState,StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
import Question from '../components/question';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SurveyPage extends Component{
    constructor(props) {
        super()
        this.state = {
            // var:'it displays by using state.var'
        }
    }
    render(){
        return(
            <>
                <Question asked="What is your name?" testType="Input"></Question>
                <Question asked="Are you Male or Female?" testType="Dilemma" optionOne="Male" optionTwo="Female"></Question>
                <Question asked="Are you trying to gain, or lose?" testType="Dilemma" optionOne="Gain" optionTwo="Lose"></Question>
                <Question testType="BMI"></Question>
            </>
        );
    }
}
const styles=StyleSheet.create({
    question:{
        flex: 1,
    }

}); 

AppRegistry.registerComponent(appName, () => SurveyPage);