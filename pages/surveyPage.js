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
            level: null,
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
    selectLevel = input =>{
        this.setState({level:input});
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
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.45)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .37)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.12)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.84)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .56)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.45)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.84)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * 1.09)) * 9;
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
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.45)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .37)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.12)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.84)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .56)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.45)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.84)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * 1.09)) * 9;
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
            BMI : null,
        })
    }

    render(){
        if(this.state.name === null){

            return(
                <Question style={styles.container} asked="What is your name?" testType="Input" buttonPress={this.setName} placehold="Name"></Question>
            );
        }
        else if(this.state.sex === null){
            
            return(
                <>
                <Question asked="Are you..." testType="Dilemma" optionOne="Male" optionTwo="Female" stateOptionOne="Male" stateOptionTwo="Female" buttonPress ={this.setSex}></Question>
                </>
            );   
        }
        else if(this.state.goal === null){
            
            return(
                <>
                <Question asked="Are you trying to..." testType="Dilemma" optionOne="Gain Mass" optionTwo="Burn Fat" stateOptionOne="Gain" stateOptionTwo="Lose" buttonPress ={this.setGoal}></Question>
                </>
            );   
        }
        else if(this.state.units === null){
            
            return(
                <>
                <Question asked="Which do you measure with..." testType="Dilemma" optionOne="Metric System" optionTwo="Imperial System" stateOptionOne="Metric" stateOptionTwo="Imperial" buttonPress = {this.selectUnits}></Question>
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
        else if (this.state.level == null){
            return(
                <>
                <Question asked="Do you already follow your own caloric regimen?" testType="Dilemma" optionOne="Yes" optionTwo="No" stateOptionOne="Pro" stateOptionTwo="Noob" buttonPress = {this.selectLevel}></Question>
                </>
            );   
        }
        else if(this.state.level == 'Pro'){    
            return(
                <>
                <ScrollView>
                    <View style={styles.container}>

                    </View>
                </ScrollView>
                    
                </>
            );   
        }
        else if(this.state.level == 'Noob'){    
            return(
                <>
                <ScrollView>
                    <View style={styles.container}>
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
                        <View style={styles.info}>
                            <Text style={styles.text}>Name: {this.state.name}</Text>
                            <Text style={styles.text}>Sex: {this.state.sex}</Text>
                            <Text style={styles.text}>Goal: {this.state.goal} weight</Text>
                            <Text style={styles.text}>Units: You measure with the {this.state.units} system</Text>
                            <Text style={styles.text}>Height: {this.state.height}</Text>
                            <Text style={styles.text}>Weight: {this.state.weight}</Text>
                            <Text style={styles.text}>BMI: {parseInt(this.state.BMI)}</Text>
                            <Text style={styles.text}>Your recommended carb limit is: {this.state.allottedCarbs} calories</Text>
                            <Text style={styles.text}>Your recommended protein limit is: {this.state.allottedProteins} calories</Text>
                            <Text style={styles.text}>Your recommended fat limit is: {this.state.allottedFats} calories</Text>
                            <Text style={styles.text}>Your recommended daily calorie total is: {this.state.allottedTotal} calories</Text>
                        </View>
                    </View>
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
    container: {
        flex: 1,
        padding: 15,
        borderColor: 'black',
        backgroundColor: 'rgb(175,175,175)',
        borderWidth: 3,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 20,
      },
      info:{
        borderColor: 'black',
        backgroundColor: 'rgb(255,255,255)',
        borderWidth: 2,
        width: '95%',
        alignSelf: 'center',
        padding: 5,
        marginTop: 10,
      }


}); 

AppRegistry.registerComponent(appName, () => SurveyPage);