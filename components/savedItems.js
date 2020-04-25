import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput, Button} from 'react-native';
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
      this.setState({
          eatenServings: servings,
      })
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
                    <TextInput style={styles.numInput} onChangeText={servings => this.eatingServings(servings)} keyboardType="number-pad" placeholder="Servings" placeholderTextColor='black'></TextInput>
                    <Text style={styles.text}>/{this.props.servings}</Text>
                  </View>
                </View>
  
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Carbs: {parseInt(this.props.carbs / this.props.servings)} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Proteins: {parseInt(this.props.proteins / this.props.servings)} grams</Text>
                  </View>
                </View>
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Fats: {parseInt(this.props.fats / this.props.servings)} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Servings: {this.props.servings}</Text>
                  </View>
                </View>
                <Button color={Colors.button1} title={"Add " + this.props.name.toLowerCase()} onPress={()=> this.props.areYouSure(this.props.item, this.props.name,this.state.eatenServings, parseInt(this.props.carbs/ this.props.servings), parseInt(this.props.proteins/ this.props.servings), parseInt(this.props.fats/ this.props.servings))}></Button>
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
                    <Text style={styles.text}>Carbs: {this.props.carbs} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Proteins: {this.props.proteins} grams</Text>
                  </View>
                </View>
                <View style={styles.macroFactsBox}>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Fats: {this.props.fats} grams</Text>
                  </View>
                  <View style={styles.macroFacts}>
                    <Text style={styles.text}>Servings: {this.props.servings}</Text>
                  </View>
                </View>
                <Button color={Colors.button1} title={"Add " + this.props.name.toLowerCase()} onPress={()=> this.props.areYouSure(this.props.item, this.props.name,this.props.servings, this.props.carbs, this.props.proteins, this.props.fats)}></Button>
              </View>
            );
          }
    }
}

const styles = StyleSheet.create({
    itemBox:{
      backgroundColor: 'white',
      width: '80%',
      alignSelf: 'center',
      borderColor: 'black',
      borderWidth: 2,
      marginVertical: 10,
  
    },
    itemName:{
      fontSize: 25,
      fontWeight: 'bold'
    },
    macroFactsBox:{
      width: '50%',
      flexDirection: 'row',
    },
    macroFacts:{
      marginHorizontal: 20,
      marginVertical: 5,
  
    },
    numInput:{
      width: '60%',
      backgroundColor: 'white',
      height: 20,
      borderColor:'black',
      borderWidth: 2,
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
    text:{
        // fontSize: 20,
    }
    
  });
  

AppRegistry.registerComponent(appName, () => SavedItems);