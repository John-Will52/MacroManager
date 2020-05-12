import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button} from 'react-native';
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
            inputCarbs: null,
            inputProteins: null,
            inputFats: null,
            focus: null
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
    getFeet = input =>{
        let inchConversion = parseInt(input) * 12;
        this.setState({feet: inchConversion});
    }
    getInches = input =>{
        if(input < 12){
            this.setState({inches: parseInt(input)});
        }
        else{
            this.inchInput.clear();
            this.setState({inches: null});
            Alert.alert('Error', "11 inches is the max that you can put here. If 12+ inches are needed, add an additional foot.");

        }
    }
    getWeight = input =>{
        this.setState({weight: input});
    }

    BMIEntries= () =>{
        
        if((this.state.inches != null && this.state.feet != null && this.state.weight != null) || (this.state.height != null && this.state.weight != null)){
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
            if(this.props.units === "Imperial"){
                let weight = parseInt(w);
                let height = parseInt(h);
                let BMI = parseInt((703 * weight)/((height)**2));
                return BMI
                
            }
            else if(this.props.units === "Metric"){
                let weight = parseInt(w);
                let height = parseInt(h);
                let BMI = parseInt((weight)/((height/100)**2));
                return BMI   
            }
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
            inputCarbs: parseInt(input)
        })
    }
    addProteins = input => {
        this.setState({
            inputProteins: parseInt(input)
        })
    }
    addFats = input => {
        this.setState({
            inputFats: parseInt(input)
        })
    }
    suggestion = input =>{
        this.carbInput = input * .3;
        this.proteinInput = input * .3;
        this.fatInput = input * .3;

    }

    inputSum = () =>{
        if(this.carbInput != null && this.proteinInput != null && this.fatInput != null){
            const total = this.state.inputCarbs + this.state.inputProteins + this.state.inputFats;
            return total
        }
    }

    inputCheck = () =>{
        let total = this.state.inputCarbs + this.state.inputProteins + this.state.inputFats;
        // Error array to show where the problem is. This function will return this array
        let errors = [];

        if(this.state.inputCarbs != null && this.state.inputProteins != null && this.state.inputFats != null){

            if(total < (this.props.recommendedTotal * .9)){
                errors.push(`Your total entered calories, ${total}, is at least 10% under your recommended total. You should only do this if you're a professional Bodybuilder trying to cut. I would recommend ${this.props.recommendedTotal} total calories`);
                return errors;

            }
            if(total > (this.props.recommendedTotal * 1.1)){
                errors.push(`Your total entered calories, ${total}, is at least 10% over your recommended total. You should only do this if you're a professional Bodybuilder trying to bulk. I would recommend ${this.props.recommendedTotal} total calories`);
                return errors;
            }
            if(this.props.goal == "Gain"){
                
                if((this.state.inputCarbs < (total * .4)) || (this.state.inputCarbs > (total * .6))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(total * .4)} and ${parseInt(total * .6)}`)
                }
                else if((this.state.inputProteins < (total * .25)) || (this.state.inputProteins > (total * .35))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(total * .25)} and ${parseInt(total * .35)}`)
                }
                else if((this.state.inputFats < (total * .15)) || (this.state.inputFats > (total * .25))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(total * .15)} and ${parseInt(total * .25)}`)    
                }

                return errors
            }
            if(this.props.goal == "Lose"){
                if((this.state.inputCarbs < (total * .1)) || (this.state.inputCarbs > (total * .3))){
                    errors.push(`For your goal, and the total calories that you want to eat, your carb calories should be between ${parseInt(total * .1)} and ${parseInt(total * .3)}`)
                }
                else if((this.state.inputProteins < (total * .4)) || (this.state.inputProteins > (total * .5))){
                    errors.push(`For your goal, and the total calories that you want to eat, your protein calories should be between ${parseInt(total * .4)} and ${parseInt(total * .5)}`)
                }
                else if((this.state.inputFats < (total * .3)) || (this.state.inputFats > (total * .4))){
                    errors.push(`For your goal, and the total calories that you want to eat, your fat calories should be between ${parseInt(total * .3)} and ${parseInt(total * .4)}`)    
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
    page = () =>{
        if(this.state.focus == 'Name'){
            return(
                <View>
                    <Text style={styles.title}>What would you like to edit?</Text>
                    <View>
                        <View style={styles.focus}>
                            <Text style={styles.text}>Change your name.</Text>
                            <TextInput style={styles.input} ref={(name) => { this.nameInput = name }} onChangeText={(name)=>{this.setName(name)}} placeholder="Name" placeholderTextColor='black' keyboardType="default"></TextInput>
                            <View style = {styles.buttons}>
                                <Button color={Colors.button} title="Submit" onPress={()=>this.props.changeName(this.state.name)}></Button>
                            </View>
                        </View>

                        <View style={styles.buttonBackground}>
                            <Button title="Goal" color={Colors.button2} onPress={() => this.setState({focus: 'Goal'})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                        </View>
                    </View>
                </View>
            );
        }
        else if(this.state.focus == 'Goal'){
            if(this.props.goal == 'Gain'){
                return(
                    <View>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.buttonBackground}>
                                <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                            </View>
                            <View style={styles.focus}>
                                <Text style={styles.text}>Change your goal.</Text>
                                <View style = {styles.buttons2}>
                                    <Button color={Colors.button2} title="Lose" onPress={()=>this.props.changeGoal('Lose')}></Button>
                                </View>
                        </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                );
            }
            if(this.props.goal == 'Lose'){
                return(
                    <View>
                        <Text style={styles.title}>What would you like to edit?</Text>
                        <View>
                            <View style={styles.buttonBackground}>
                                <Button title="Name" color={Colors.button2} onPress={() => this.setState({focus: 'Name'})}></Button>
                            </View>
                            <View style={styles.focus}>
                                <Text style={styles.text}>Change your goal.</Text>
                                <View style = {styles.buttons}>
                                    <Button color={Colors.button} title="Gain" onPress={()=>this.props.changeGoal('Gain')}></Button>                
                                </View>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Recalculate BMI" color={Colors.button2} onPress={() => this.setState({focus: 'BMI'})}></Button>
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
                    <View>
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
                                    <Button color={Colors.button} title="Submit" onPress={ () => this.props.editBMI((parseInt(this.state.feet) + parseInt(this.state.inches)), parseInt(this.state.weight), this.getBMI((parseInt(this.state.feet) + parseInt(this.state.inches)), parseInt(this.state.weight)))} disabled={this.BMIEntries()}></Button>
                                </View>
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
                    <View>
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
                                    <Button color={Colors.button} title="Submit" onPress={() =>this.props.editBMI(parseInt(this.state.height), parseInt(this.state.weight), this.getBMI(parseInt(this.cmInput), parseInt(this.weightInput)))} disabled={this.BMIEntries()}></Button>
                                </View>
                            </View>
                            <View style={styles.buttonBackground}>
                                <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                            </View>
                        </View>
                    </View>
                );
            }
            
        }
        else if(this.state.focus == 'Numbers'){
            return(
                <View>
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
                            <Text style={styles.text}>Enter the calorie amounts that you follow</Text>
                            <View style={styles.numbersContainer}>
                                <View style={styles.numbersInputContainer}>
                                    <TextInput style={styles.inputs} ref={(carbs) => { this.carbInput = carbs }} onChangeText={num => this.addCarbs(num)} keyboardType="number-pad" placeholder="Carb Calories" placeholderTextColor='black' maxLength={4}></TextInput>
                                    <TextInput style={styles.inputs} ref={(proteins) => { this.proteinInput = proteins }} onChangeText={num => this.addProteins(num)} keyboardType="number-pad" placeholder="Protein Calories" placeholderTextColor='black' maxLength={4}></TextInput>
                                    <TextInput style={styles.inputs} ref={(fats) => { this.fatInput = fats }} onChangeText={num => this.addFats(num)} keyboardType="number-pad" placeholder="Fat Calories" placeholderTextColor='black' maxLength={4}></TextInput>

                                    <View style={styles.buttons1}>
                                        <Button  color={Colors.button} title="Use These Numbers" onPress={()=> this.props.changeNumbers(this.state.inputCarbs, this.state.inputProteins, this.state.inputFats, this.list().length)} disabled={this.macroEntries()}></Button>
                                    </View>
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
                <View>
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
                            <Button title="Change caloric numbers" color={Colors.button2} onPress={() => this.setState({focus: 'Numbers'})}></Button> 
                        </View>
                    </View>
                </View>
            );
        }
    }


    render(){
        return(
            this.page()
        );
    }
}

const styles = StyleSheet.create({
    title:{
        color: Colors.titles,
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 10
    },
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
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
        alignSelf: 'center'
    },
    smallText:{
        fontSize: 30,
        color: Colors.subtitles,
    },
    numInput:{
        width: 150,
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
    },
    imperialNumInput:{
        width: 70,
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        marginRight: 10,
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

    navigationButtons:{
        backgroundColor: Colors.navigatingButtonBackground,
        width: "70%",
        alignSelf: 'center',
        marginTop: 10,
      },
    container:{
        width: '70%',
        alignSelf: "center",

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
        marginVertical: 1
    },
    inputError:{
        width: '90%',
        backgroundColor: 'yellow',
        height: 50,
        borderColor:'red',
        borderWidth: 2,
    },
    text:{
        fontSize: 30,
        textAlign:'center',
        marginBottom: 15,
        color: Colors.titles
    },
    BMIText:{
        fontSize: 30,
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
        borderColor: 'white',
        borderWidth: 2,
        margin: 5,
        padding: 5
    },

})

AppRegistry.registerComponent(appName, () => EditInfoPage);