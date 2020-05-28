import React, {Component} from 'react';
import {AppRegistry, KeyboardAvoidingView,} from 'react-native';
import {name as appName} from '../app.json';
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
        let now = new Date();
        let id = now.toString();

        if(this.state.item == 'Meal'){
            newItem={
                id: id,
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
                id: id,
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
                id: id,
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
                <Question testType="Dilemma" asked="Which are you saving?" optionOne="Snack" optionTwo="Meal" stateOptionOne="Snack" stateOptionTwo="Meal" buttonPress ={this.setItemType}></Question>
            );
        }
        else if(this.state.item === "Meal"){
            return(
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={120}>
                    <Meals saveItem={this.saveItem}></Meals>
                </KeyboardAvoidingView>
            );
        }
        else if(this.state.item === "Snack"){
            return(
                <Snacks saveItem={this.saveItem}></Snacks>
            ); 
        }
    }
}

AppRegistry.registerComponent(appName, () => AddSnacksAndMealsPage);