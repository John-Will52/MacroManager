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
            allottedCarbs : null,
            allottedProteins : null,
            allottedFats : null,
            allottedTotal : null,
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
        this.setState({height: parseInt(h), weight: parseInt(w)});
        if(this.state.units === "Imperial"){
            let weight = parseInt(w);
            let height = parseInt(h);
            let BMI = (703 * weight)/((height)**2);
            this.setState({BMI : parseInt(BMI)});
            let leanBodyMass = weight * ((100 - BMI)/100);
            if(this.state.goal === "Lose" && this.state.sex === "Male"){
                let allottedCarbGrams = leanBodyMass * .7;
                let allottedProteinGrams = leanBodyMass * 1.5;
                let allottedFatGrams =  leanBodyMass * .5;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})
            }
            if(this.state.goal === "Lose" && this.state.sex === "Female"){
                let allottedCarbGrams = leanBodyMass * .6;
                let allottedProteinGrams = leanBodyMass * 1.5;
                let allottedFatGrams =  leanBodyMass * .6;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})

            }
            if(this.state.goal === "Gain" && this.state.sex === "Male"){
                let allottedCarbGrams = leanBodyMass * 2;
                let allottedProteinGrams = leanBodyMass * 1.25;
                let allottedFatGrams = leanBodyMass * .4;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})

            }
            if(this.state.goal === "Gain" && this.state.sex === "Female"){
                let allottedCarbGrams = leanBodyMass * 1.5;
                let allottedProteinGrams = leanBodyMass * 1.25;
                let allottedFatGrams = leanBodyMass * .5;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})
            }
        }
        else if(this.state.units === "Metric"){
            let weight = parseInt(w);
            let height = parseInt(h);
            let BMI = (weight)/((height/100)**2);
            this.setState({BMI : parseInt(BMI)});
            let imperialWeight = weight * 2.20462262185;
            let leanBodyMass = imperialWeight * ((100 - BMI)/100);
            if(this.state.goal === "Lose" && this.state.sex === "Male"){
                let allottedCarbGrams = leanBodyMass * .7;
                let allottedProteinGrams = leanBodyMass * 1.5;
                let allottedFatGrams =  leanBodyMass * .5;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})
            }
            if(this.state.goal === "Lose" && this.state.sex === "Female"){
                let allottedCarbGrams = leanBodyMass * .6;
                let allottedProteinGrams = leanBodyMass * 1.5;
                let allottedFatGrams =  leanBodyMass * .6;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})

            }
            if(this.state.goal === "Gain" && this.state.sex === "Male"){
                let allottedCarbGrams = leanBodyMass * 2;
                let allottedProteinGrams = leanBodyMass * 1.25;
                let allottedFatGrams = leanBodyMass * .4;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})

            }
            if(this.state.goal === "Gain" && this.state.sex === "Female"){
                let allottedCarbGrams = leanBodyMass * 1.5;
                let allottedProteinGrams = leanBodyMass * 1.25;
                let allottedFatGrams = leanBodyMass * .5;
                let allottedTotalCalories = (allottedCarbGrams * 4) + (allottedProteinGrams * 4) + (allottedFatGrams *9);
                this.setState({allottedCarbs: parseInt(allottedCarbGrams), allottedProteins: parseInt(allottedProteinGrams), allottedFats: parseInt(allottedFatGrams), allottedTotal: parseInt(allottedTotalCalories)})
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
                    <Text style={styles.text}>BMI: {this.state.BMI}</Text>
                    <Text style={styles.text}>Your recommended carb limit is: {this.state.allottedCarbs} grams</Text>
                    <Text style={styles.text}>Your recommended protein limit is: {this.state.allottedProteins} grams</Text>
                    <Text style={styles.text}>Your recommended fat limit is: {this.state.allottedFats} grams</Text>
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