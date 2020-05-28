import React, {Component} from 'react';
import {AppRegistry, View, Text, Alert,StyleSheet, Button, ScrollView,} from 'react-native';
import {name as appName} from '../app.json';
import Question from '../components/question';
import Colors from '../styling/colors';
import ProInput from '../components/proInput';
import CheckResults from '../components/checkResults';

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
        else{
            this.setState({name:input});
        }
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
    addCarbs= input =>{
        this.setState({
            inputCarbs: parseInt(input)
        })
    }
    addProteins= input =>{
        this.setState({
            inputProteins: parseInt(input)
        })
    }
    addFats= input =>{
        this.setState({
            inputFats: parseInt(input)
        })
    }
    inputSum = (carbs, protein, fats) =>{
        let total = parseInt(carbs) + parseInt(protein) + parseInt(fats);
        this.setState({
            inputTotal: total
        })
    }
  

    allEntries= () =>{
        
        if(this.carbInput != null && this.proteinInput != null && this.fatInput != null){
            return false;
        }
        else{
            return true;
        }
    }



    getBMI = (h, w) =>{
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
                if(this.state.goal === "Lose" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
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
                    let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
                if(this.state.goal === "Lose" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
                    let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Male"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                    
                }
                if(this.state.goal === "Gain" && this.state.sex === "Female"){
                    let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
                    let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
                    let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
                    let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
                    this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
                }
            }
        }
    }

    submitInputCalories = (carbs, protein, fat, errors)=>{
        total = parseInt(carbs) + parseInt(protein) + parseInt(fat);
        if(errors > 0){
            Alert.alert(
                'Warning',
                `Unless you're a professional, and you know EXACTLY what you're doing, your numbers aren't recommended.
Are you sure that you want to use them?
(You can change them later.)`,
                [
                  {text: "I know what I'm doing", onPress: () => this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI, parseInt(carbs), parseInt(protein), parseInt(fat), total)
                    },
                  {
                    text: "No",
                    onPress: () => Alert.alert(
                        "Notice",
                        `Would you like to use the numbers that I recommended for you as a reference?
Carbs: ${this.state.allottedCarbs} calories,
Protein: ${this.state.allottedProteins} calories,
Fat: ${this.state.allottedFats} calories,
Total: ${this.state.allottedTotal} calories`,
                        [
                            {text:'Yes', onPress: () => this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI, this.state.allottedCarbs, this.state.allottedProteins, this.state.allottedFats, this.state.allottedTotal)},
                            {text: "No, I'll try again."}
                        ],
                        {cancelable: false},
                    )

                  },
                ],
                {cancelable: false},
              );
        }
        else{
            this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI, parseInt(carbs), parseInt(protein), parseInt(fat), total);
            this.props.changePage(0);
            
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
            level: null,
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
                <Question asked={`Hello ${this.state.name}! 
Which are you?`} testType="Dilemma" optionOne="Male" optionTwo="Female" stateOptionOne="Male" stateOptionTwo="Female" buttonPress ={this.setSex}></Question>
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
                <Question asked="Which do you measure with?" testType="Dilemma" optionOne="Metric System" optionTwo="Imperial System" stateOptionOne="Metric" stateOptionTwo="Imperial" buttonPress = {this.selectUnits}></Question>
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
                        <ProInput submit={this.submitInputCalories} goal={this.state.goal} sex={this.state.sex} recommendedTotal={this.state.allottedTotal} recommendedCarbs={this.state.allottedCarbs} recommendedProteins={this.state.allottedProteins} recommendedFats={this.state.allottedFats}></ProInput>
                    </View>
                </ScrollView>
                    
                </>
            );   
        }
        else if(this.state.level == 'Noob'){    
            return(
                <>
                <ScrollView>
                    <CheckResults name={this.state.name} sex={this.state.sex} goal={this.state.goal} units={this.state.units} height={this.state.height} weight={this.state.weight} BMI={parseInt(this.state.BMI)} allottedCarbs={this.state.allottedCarbs} allottedProteins={this.state.allottedProteins} allottedFats={this.state.allottedFats} allottedTotal={this.state.allottedTotal}>
                        <View style={styles.horizontalButtonBox}>
                            <View style={styles.buttons1}>
                                <Button color={Colors.button} title="Yes" onPress={()=>this.props.transferState(this.state.name, this.state.sex, this.state.goal, this.state.units, this.state.height, this.state.weight, this.state.BMI, this.state.allottedCarbs, this.state.allottedProteins, this.state.allottedFats, this.state.allottedTotal)}></Button>
                            </View>
                        </View>
                        <View style={styles.horizontalButtonBox}>
                            <View style={styles.buttons2}>
                                <Button color={Colors.button2} title="No" onPress={()=>this.wrongDetails()}></Button>
                            </View>
                        </View>
                    </CheckResults>
                </ScrollView>
                    
                </>
            );   
        }
    }
}

const styles=StyleSheet.create({
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
        borderColor: Colors.borders,
        backgroundColor: Colors.boxBackground,
        borderWidth: 3,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 20,
      },
      buttons1:{
        backgroundColor: Colors.buttonBackground,
        width: "75%",
        alignSelf: 'center',
        marginTop: 10,
      },
      buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "75%",
        alignSelf: 'center',
        marginTop: 10,
      },
      navigationButtons:{
        backgroundColor: Colors.navigatingButtonBackground,
        width: "55%",
        alignSelf: 'center',
        marginTop: 10,
      },
      inputs:{
        width: '25%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 1,
        color: 'black'
    },
}); 

AppRegistry.registerComponent(appName, () => SurveyPage);