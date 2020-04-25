import React, {Component} from 'react';
import {AppRegistry, View, Text, Alert, Button, TextInput, StyleSheet, Platform} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors'
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Question extends Component{
    constructor(props) {
        super()
        this.state = {
            input : null,
            height: 0,
            weight: null,
            inches:null,
            feet:null,
            BMI: null
        }
    }

    getInput = input =>{
        if(input.length < 1){
        }
        else{
            this.setState({input: input});
        }
    }
    metricGetHeight = input =>{
        if(input.length < 1){
        }
        else{
            this.setState({height: input});
        } 
    }
    getWeight = input =>{
        if(input.length < 1){
        }
        else{
            this.setState({weight: input});
        }
    }
    render(){
        if(this.props.testType === "Dilemma"){
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <View style = {styles.buttons1}>
                                    <Button color={Colors.button1} title={this.props.optionOne} onPress={()=>this.props.buttonPress(this.props.stateOptionOne)}></Button>
                                </View>
                            </View>
                            <View style={styles.horizontalButtonBox}>
                                <View style = {styles.buttons2}>
                                    <Button color={Colors.button2} title={this.props.optionTwo} onPress={()=>this.props.buttonPress(this.props.stateOptionTwo)}></Button>
                                </View>
                            </View>
                        </View>
                </View>
            )
        }
        else if(this.props.testType === "Input"){
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.asked}</Text>
                    <TextInput style={styles.input} value={this.state.input} onChangeText={text => this.getInput(text)} placeholder={this.props.placehold} placeholderTextColor='black' keyboardType="default"></TextInput>
                    <View style={styles.horizontalButtonContainer}>
                            <View style={styles.horizontalButtonBox}>
                                <View style = {styles.operationButtons}>
                                    <Button color={Colors.operationButtons} title="Submit" onPress={()=>this.props.buttonPress(this.state.input)}></Button>
                                </View>
                            </View>
                    </View>
                </View>
            )
        } 
        else if(this.props.testType === "BMI" && this.props.units ==="Metric"){
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>Let's get your BMI</Text>
                    <Text style={styles.smallText}>Height</Text>
                    <View style={styles.vertAlign}>
                        <TextInput style={styles.numInput} value={this.state.height} onChangeText={text => this.metricGetHeight(text)} placeholder="cm." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                        <View style={styles.BMIbuttons}>
                            <Button color={Colors.button1} title="Submit" onPress={() =>this.props.buttonPress(this.state.height, this.state.weight)}></Button>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.smallText}>Weight</Text>
                        <View style={styles.vertAlign}>
                            <TextInput style={styles.numInput} value={this.state.weight} onChangeText={text => this.getWeight(text)}placeholder="kg." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                        </View>
                    </View>
                </View>
            )
        }  
        else if(this.props.testType === "BMI" && this.props.units ==="Imperial"){
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>Let's get your BMI</Text>
                    <Text style={styles.smallText}>Height</Text>
                    <View style={styles.vertAlign}>
                        <TextInput style={styles.imperialNumInput} value={this.state.feet} onChangeText= {(feet) =>{this.setState({height: (parseInt(this.state.height) + (parseInt(feet) * 12))})}} placeholder ="Feet" placeholderTextColor='black' keyboardType="number-pad" maxLength={1} ></TextInput>
                        <TextInput style={styles.imperialNumInput}  value={this.state.inches} onChangeText= {(inches) =>{this.setState({height : (parseInt(this.state.height) + parseInt(inches))})}} placeholder ="Inches" placeholderTextColor='black' keyboardType="number-pad" maxLength={2}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.smallText}>Weight</Text>
                        <View style={styles.vertAlign}>
                            <TextInput style={styles.numInput} onChangeText={text => {this.setState({weight: parseInt(text)})}} placeholder="Lbs." placeholderTextColor='black' keyboardType="number-pad" maxLength={3}></TextInput>
                        </View>
                    </View>
                    <View style={styles.BMIbuttons}>
                        <Button color={Colors.button1} title="Submit" onPress={ () => this.props.buttonPress(this.state.height, this.state.weight)}></Button>
                    </View>
                </View>
            )
        }  
    }
}
const styles=StyleSheet.create({
    input:{
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center'
    },
    text:{
        fontSize: 50,
        textDecorationLine: 'underline',
        textAlign:'center',
        color: Colors.text,
    },
    smallText:{
        fontSize: 30,
        color: Colors.text,
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
    container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-evenly',
        height: 400,
        borderColor: 'black',
        backgroundColor: 'rgb(175,175,175)',
        borderWidth: 3,
        width: '95%',
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 25,
      },
      buttons1:{
        backgroundColor: Colors.buttonBackground1,
        width: "70%",
        alignSelf: 'center',
        marginTop: 10,
      },
      BMIbuttons:{
        backgroundColor: Colors.buttonBackground1,
        width: "25%",
        alignSelf: 'center',
        marginTop: 10,
      },
      buttons2:{
        backgroundColor: Colors.buttonBackground2,
        width: "72%",
        alignSelf: 'center',
        marginTop: 10,
      },

      navigationButtons:{
        backgroundColor: Colors.navigationButtonBackground,
        width: "60%",
        alignSelf: 'center',
        marginTop: 10,
      },
      operationButtons:{
        backgroundColor: Colors.operationButtonBackground,
        width: "70%",
        alignSelf: 'center',
        marginTop: 10,
      }
    

}); 

AppRegistry.registerComponent(appName, () => Question);