import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import Question from '../components/question';
import Meals from '../components/meals';
import Snacks from '../components/snacks';


// AppRegistry is the JS entry point for all ReactNative apps. 

export default class AddSnacksAndMealsPage extends Component{
    constructor(props) {
        super()
        this.state = {
            item: null,
        }
    }


    setItemType = input => {
        this.setState({item:input});
    }

    saveItem = (itemName, itemCarbs, itemProteins, itemFats, itemServings) =>{
        if(this.state.item == 'Meal'){
            newItem={
                item: this.state.item,
                name: itemName,
                carbs: itemCarbs,
                proteins: itemProteins,
                fats: itemFats,
                servings: itemServings
            }
            return (
                this.props.saveItem(newItem),
                this.props.changePage(2)
            );
        }
        if(this.state.item == 'Meal' && itemServings > 1){
            newItem={
                item: this.state.item,
                name: itemName,
                carbs: itemCarbs / itemServings,
                proteins: itemProteins / itemServings,
                fats: itemFats / itemServings,
                servings: itemServings
            }
            return (
                this.props.saveItem(newItem),
                this.props.changePage(2)
            );
        }
        if(this.state.item == 'Snack'){
            newItem={
                item: this.state.item,
                name: itemName,
                carbs: itemCarbs,
                proteins: itemProteins,
                fats: itemFats,
                servings: itemServings
            }
            return (
                this.props.saveItem(newItem),
                this.props.changePage(2)
            );
        }

        
    }

    
    
 
    

    render(){
        if(this.state.item === null){

            return(
                <View>
                    <View style={styles.split}>
                        <Question testType="Dilemma" asked="Which are you saving?" optionOne="Snack" optionTwo="Meal" stateOptionOne="Snack" stateOptionTwo="Meal" buttonPress ={this.setItemType}></Question>
                    </View>
                    <View style={styles.split}>
                        <Button title="Calorie Counters Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                        <Button title="Saved Snacks and Meals" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
                    </View>
                </View>

            );
        }
        else if(this.state.item === "Meal"){
            return(
                <View>
                    <Meals saveItem={this.saveItem}>
                        <Button title="Calorie Counter Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                        <Button title="Saved Snacks and Meals" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
                    </Meals>
                </View>
            );
        }
        else if(this.state.item === "Snack"){
            return(
                <View>
                    <Snacks saveItem={this.saveItem}></Snacks>
                    <Button title="Calorie Counters Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    <Button title="Saved Snacks and Meals" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
                </View>
            ); 
        }
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 35,
        textAlign: "center",
    },
    nameInputs:{
        width: '100%',
        backgroundColor: 'white',
        height: 60,
        borderColor:'black',
        borderWidth: 1,
    },
    pageContainer:{
        padding: 5,
    },
    mealBox:{
        borderWidth: 5,
    },
    horizontalButtonBox:{
        width:'30%'
    },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    numInputs:{
        width: '25%',
        backgroundColor: 'white',
        height: 50,
        borderColor:'black',
        borderWidth: 1,
    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        height: 60,
        padding: 5,
    },
    split:{
        marginTop: 20,
    }
})

AppRegistry.registerComponent(appName, () => AddSnacksAndMealsPage);