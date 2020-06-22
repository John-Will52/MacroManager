import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SavedItems extends Component{
    constructor(props) {
        super()
        this.state = {
            eatenServings: null,
        }
    }

    
    eatingServings= servings =>{
      const theseServings = parseInt(servings);
      if(servings){
        if(theseServings > this.props.servings){
          Alert.alert(
            'Error',
            "You can't submit more servings than this meal offers",
            [
              {text: 'Okay', onPress: () => {this.setState({eatenServings: null}); this.servingsInput.clear();}},
            ],
            {cancelable: false},
          );
        }
        else if(theseServings <= 0){
          Alert.alert(
            'Error',
            "You must add at least 1 serving",
            [
              {text: 'Okay', onPress: () => {this.setState({eatenServings: null}); this.servingsInput.clear();}},
            ],
            {cancelable: false},
          );
        }
        else{
          this.setState({
            eatenServings: theseServings
          });
        }
        
      }
      else{
        this.setState({
          eatenServings: null
        })
      }
    }

    // THis is the area that you put your JS logic for functions and stuff at.

    render(){
        if(this.props.item == 'Meal' && this.props.servings > 1){
            return (
              <View style={styles.itemBox}>
                  <Text style={styles.text}>Item type: {this.props.item}</Text>
                <View style ={styles.mealHeader}>
                  <Text style={styles.itemName}>{this.props.name}</Text>
                  <View style={styles.servingInfo}>
                    <TextInput style={styles.numInput} ref={(servings) => { this.servingsInput = servings }} onChangeText={servings => this.eatingServings(servings)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    <Text style={styles.text}> /{this.props.servings}</Text>
                  </View>
  
                </View>
  
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Fat: {parseInt(this.props.fats / this.props.servings) * ((this.state.eatenServings == null) ? 1 : this.state.eatenServings)} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Protein: {parseInt(this.props.proteins / this.props.servings) * ((this.state.eatenServings == null) ? 1 : this.state.eatenServings)} grams</Text>
                  </View> 
                </View>
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Carbs: {parseInt(this.props.carbs / this.props.servings) * ((this.state.eatenServings == null) ? 1 : this.state.eatenServings)} grams</Text>
                  </View>  
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Servings: {this.props.servings}</Text>
                  </View>
                </View>
                <View style={styles.buttonBox}>
                  <View style={styles.buttons1}>
                    <Button color={Colors.button} title={"Add"} onPress={()=> this.props.areYouSure(this.props.item, this.props.name,this.state.eatenServings, parseInt(this.props.carbs/ this.props.servings), parseInt(this.props.proteins/ this.props.servings), parseInt(this.props.fats/ this.props.servings))}></Button>
                  </View>
                  <View style={styles.buttons2}>
                    <Button color={Colors.button2} title={"Delete"} onPress={()=> this.props.delete(this.props.id)}></Button>
                  </View>
                </View>
              </View>
            );
          }
          else{
            return (
              <View style={styles.itemBox}>
                <Text style={styles.text}>Item type: {this.props.item}</Text>
                <Text style={styles.itemName}>{this.props.name}</Text>
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Fat: {this.props.fats} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Protein: {this.props.proteins} grams</Text>
                  </View>
                  
                </View>
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Carbs: {this.props.carbs} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Servings: {this.props.servings}</Text>
                  </View>
                </View>
                <View style={styles.buttonBox}>
                  <View style={styles.buttons1}>
                    <Button color={Colors.button} title={"Add"} onPress={()=> this.props.areYouSure(this.props.item, this.props.name,this.props.servings, this.props.carbs, this.props.proteins, this.props.fats)}></Button>
                  </View>
                  <View style={styles.buttons2}>
                  <Button color={Colors.button2} title={"Delete"} onPress={()=> this.props.delete(this.props.id)}></Button>
                  </View>
                </View>
              </View>
            );
          }
    }
}

const styles = StyleSheet.create({
    itemBox:{
      backgroundColor: Colors.boxBackground,
      width: '100%',
      alignSelf: 'center',
      borderColor: Colors.borders,
      borderWidth: 5,
      marginRight: 10,
      padding: 5,
      borderRadius: 10

  
    },
    itemName:{
      fontSize: 30,
      fontWeight: 'bold',
      color: Colors.subtitles
    },
    macroFactsBox:{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',


    },
    macroFacts:{
      marginHorizontal: 5,
      marginVertical: 5,
      width: '45%',
  
    },
    numInput:{
      width: '60%',
      backgroundColor: 'white',
      height: 35,
      borderColor:'black',
      borderWidth: 2,
      color: 'black'

    },
    mealHeader:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    servingInfo:{
        width: '40%',
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    buttons1:{
      backgroundColor: Colors.buttonBackground,
      width: "30%",
      alignSelf: 'center',
      marginTop: 10,
    },
    buttons2:{
      backgroundColor: Colors.buttonBackground2,
      width: "30%",
      alignSelf: 'center',
      marginTop: 10,
    },
    buttonBox:{
      flexDirection:'row',
      justifyContent: 'space-evenly'
    },
    text:{
      fontSize: 20,
      color: 'white'
    } 
  });
  

AppRegistry.registerComponent(appName, () => SavedItems);