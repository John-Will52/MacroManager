import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import Ingredients from '../components/ingredients';
import Question from '../components/question';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class AddSnacksAndMealsPage extends Component{
    constructor(props) {
        super()
        this.state = {
            item: null,
            ingredientCounter:2,
            snackName: null,
            snackCarbs: null,
            snackProteins: null,
            snackFats: null,
            snackServings: null,
            mealName: null,
            mealCarbs: null,
            mealProteins: null,
            mealFats: null,
            mealServings: null,
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addMealName = input =>{
        this.setState({
            mealName: input
        })
    }
    setItemType = input => {
        this.setState({item:input});
    }
    saveSnack = () =>{
        Alert.alert("Save Snack worked!", "Just a temporary test function for this button's functionality.")

    }
    saveMeal = () =>{
        Alert.alert("Save Meal worked!", "Just a temporary test function for this button's functionality.")

    }
    addSnackName = input =>{
        this.setState({snackName: input})
    }
    addSnackCarbs = input =>{
        this.setState({snackCarbs: parseInt(input)})
    }
    addSnackProteins = input =>{
        this.setState({snackProteins: parseInt(input)})
    }
    addSnackFats = input =>{
        this.setState({snackFats: parseInt(input)})
    }
    addSnackServings = input =>{
        this.setState({snackServings: parseInt(input)})
    }


    render(){
        if(this.state.item === null){

            return(
                <View>
                    <Question testType="Dilemma" asked="Are you saving a snack item, or a meal?" optionOne="Snack" optionTwo="Meal" buttonPress ={this.setItemType}></Question>
                    <Button title="Return to Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                </View>

            );
        }
        else if(this.state.item === "Meal"){
            var recipe = [];
            for(let i=0; i<this.state.ingredientCounter; i++){
                recipe.push(
                    <Ingredients key={i} count={i + 1}></Ingredients>
                    )
            }
            return(
                <View style={styles.pageContainer}>
                <Text style={styles.text}>Save a Meal</Text>
                <View style= {styles.mealBox}>
                    <TextInput style={styles.nameInputs} ref={input => { this.mealName = input }} onChangeText={name => this.addMealName(name)} keyboardType="default" placeholder="Meal Name"></TextInput>
                    {recipe}
                    <View style={styles.horizontalButtonContainer}>
                        <View style={styles.horizontalButtonBox}>
                            <Button title="+" color={Colors.button1} onPress={()=> this.setState({ingredientCounter: (this.state.ingredientCounter + 1)})}></Button>
                        </View>
                        <View style={styles.horizontalButtonBox}>
                            <Button title="-" color={Colors.button2} onPress={()=>this.setState({ingredientCounter: (this.state.ingredientCounter - 1)})}></Button>
                        </View>
                    </View>
                    <Button title="Save Meal" color={Colors.operationButtons} onPress={()=>this.saveMeal()}></Button>
                </View>
                <Button title="Return to Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
            </View>
            );
        }
        else if(this.state.item === "Snack"){
            return(
                <View style={styles.pageContainer}>
                    <Text style={styles.text}>Save a Snack</Text>
                    <View style={styles.mealBox}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.nameInputs} ref={input => { this.snackName = input }} onChangeText={name => this.addSnackName(name)} keyboardType="default" placeholder="Snack Name"></TextInput>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.numInputs} ref={input => { this.snackCarbs = input }} onChangeText={num => this.addSnackCarbs(num)} keyboardType="number-pad" placeholder="Carbs"></TextInput>
                            <TextInput style={styles.numInputs} ref={input => { this.snackProteins = input }} onChangeText={num => this.addSnackProteins(num)} keyboardType="number-pad" placeholder="Proteins"></TextInput>
                            <TextInput style={styles.numInputs} ref={input => { this.snackFats = input }} onChangeText={num => this.addSnackFats(num)} keyboardType="number-pad" placeholder="Fats"></TextInput>
                            <TextInput style={styles.numInputs} ref={input => { this.snackServings = input }} onChangeText={num => this.addSnackServings(num)} keyboardType="number-pad" placeholder="Servings"></TextInput>
                        </View>
                        <Button title="Save Snack" color={Colors.operationButtons} onPress={()=>this.props.saveSnack(this.state.item, this.state.snackName, this.state.snackCarbs, this.state.snackProteins, this.state.snackFats, this.state.snackServings)}></Button>
                        

                    </View>
                    <Button title="Return to Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
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
})

AppRegistry.registerComponent(appName, () => AddSnacksAndMealsPage);