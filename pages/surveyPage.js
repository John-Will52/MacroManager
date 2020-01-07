import React, {Component} from 'react';
import {AppRegistry, View, Text, AppState,StyleSheet, Button, ScrollView} from 'react-native';
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
        this.setState({height: parseInt(h)});
        this.setState({weight: parseInt(w)});
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
                
                <ScrollView>
                    <View>

                        <Text style={styles.text}>Is this information correct?</Text>
                        <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <Button color={Colors.button1} title="Yes" onPress={()=>this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI)}></Button>
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
                    <Text style={styles.text}>Your BMI is: {this.state.BMI}</Text>
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