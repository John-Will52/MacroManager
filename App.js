import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View, Alert} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';
import AddSnacksAndMealsPage from './pages/addSnacksAndMealsPage';
import SavedItemsPage from './pages/savedItemsPage';
import SavedItems from './components/savedItems';
import Colors from './styling/colors';

export default class App extends Component{
  constructor(props) {
      super()
      this.state = {
        name : null,
        sex : null,
        goal : null,
        units : null,
        height : null,
        weight : null,
        BMI : null,
        allottedCarbs : null,
        allottedProteins : null,
        allottedFats : null,
        allottedTotal : null,
        currentCarbs : 0,
        currentProteins : 0,
        currentFats : 0,
        currentTotal : 0,
        percentOfCarbs: 0,
        percentOfProteins: 0,
        percentOfFats: 0,
        percentOfTotalCalories: 0,
        pageNumber: 0,
        savedItems:[],
        
    }
  }
  // Sending information to App.js for central management
    
  surveyPageStateTransfer = (n, s, g, u, h, w, BMI, carbs, proteins, fats, total) =>{
    this.setState({
      name: n,
      sex: s,
      goal: g,
      units: u,
      height: h,
      weight: w,
      BMI: BMI,
      allottedCarbs: carbs,
      allottedProteins: proteins,
      allottedFats: fats,
      allottedTotal: total,
    })
  }
  calorieCounterStateTransfer = (servings, carbs, proteins, fats) => {
    let addedCarbs= carbs * servings * 4;
    let addedProteins= proteins * servings * 4;
    let addedFats= fats * servings * 9;
    let addedTotal = addedCarbs + addedProteins + addedFats;
    this.setState({
      currentCarbs: this.state.currentCarbs + addedCarbs,
      currentProteins: this.state.currentProteins + addedProteins,
      currentFats: this.state.currentFats + addedFats,
      currentTotal: this.state.currentTotal + addedTotal,
    })
    
    this.percentCalculator(addedCarbs, addedProteins, addedFats, addedTotal);
  }
  saveItems = (item) =>{
    this.setState(state =>{
      const savedItems = [...state.savedItems, item];
        return {
          savedItems
        };
    });  
  }
  deleteItems = (id) =>{
    let updatedArray = this.state.savedItems.filter((item) =>{
      return item.id != id;
    })
    this.setState({
      savedItems: updatedArray,
    })
  
  }

  
  // Managed by App.js for navigation and/or verification
  navigator = pageNum =>{
    this.setState({
      pageNumber: pageNum,
    })
  }


  areYouSure = (item, name, servings, carbs, proteins, fats) =>{
    if(item == 'Meal' && servings > 1){
      Alert.alert(
        'Alert',
        `Are you sure that you want to eat ${servings} servings of ${name.toLowerCase()}?`,
        [
          {text: 'Yes', onPress: () => this.addItemCalories(servings, carbs, proteins, fats)},
          {
            text: "No",
            onPress: () => this.navigator(2),
          },
        ],
        {cancelable: false},
      );
    }
    else{
      Alert.alert(
        'Alert',
        `Are you sure that you want to eat ${name.toLowerCase()}?`,
        [
          {text: 'Yes', onPress: () => this.addItemCalories(servings, carbs, proteins, fats)},
          {
            text: "No",
            onPress: () => this.navigator(2),
          },
        ],
        {cancelable: false},
      );
    }  
  }

  // Data sent to CalorieCounterPage

  addItemCalories = (servings, carbs, proteins, fats) => {
    
    if(servings == null){
      Alert.alert("Error", "Please provide provide the amount of servings that you will be eating.");
    }
    else{
      let addedCarbs= carbs * servings * 4;
      let addedProteins= proteins * servings * 4;
      let addedFats= fats * servings * 9;
      let addedTotal = addedCarbs + addedProteins + addedFats;
      this.setState({
        currentCarbs: this.state.currentCarbs + addedCarbs,
        currentProteins: this.state.currentProteins + addedProteins,
        currentFats: this.state.currentFats + addedFats,
        currentTotal: this.state.currentTotal + addedTotal,
      })
      this.percentCalculator(addedCarbs, addedProteins, addedFats, addedTotal);
      this.navigator(0);
    }
    
  }

    percentCalculator = (c, p, f, t) =>{
      this.setState({
        percentOfCarbs: (c/this.state.allottedCarbs) * 100 + this.state.percentOfCarbs,
        percentOfProteins: (p/this.state.allottedProteins) * 100 + this.state.percentOfProteins,
        percentOfFats: (f/this.state.allottedFats) * 100 + this.state.percentOfFats,
        percentOfTotalCalories: (t/this.state.allottedTotal) * 100 + this.state.percentOfTotalCalories,
      })
    }

    reset = () =>{
      this.setState({
        currentCarbs: 0,
        currentProteins: 0,
        currentFats: 0,
        currentTotal: 0,
        percentOfCarbs: 0,
        percentOfProteins: 0,
        percentOfFats: 0,
        percentOfTotalCalories: 0,
      })
    }

  // Data sent to SavedItemsPage

    list = () => {
      return this.state.savedItems.map((item) => {
        return(
          <SavedItems key={item.id}  id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems> 
        );
      });
    };


  render(){
    if(this.state.allottedTotal == null){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SurveyPage transferState={this.surveyPageStateTransfer}></SurveyPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else if(this.state.allottedTotal != null && this.state.pageNumber === 0){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" >
            <CalorieCounterPage clear={this.reset} changePage={this.navigator} addCalories={this.calorieCounterStateTransfer} percentOfCarbs={this.state.percentOfCarbs} percentOfProteins={this.state.percentOfProteins} percentOfFats={this.state.percentOfFats} percentOfTotalCalories={this.state.percentOfTotalCalories}></CalorieCounterPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    // Change the "Save Items" parts BACK to "Save Snacks/Meals" They must be handled differently
    else if(this.state.allottedTotal != null && this.state.pageNumber === 1){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <AddSnacksAndMealsPage saveItem={this.saveItems} changePage={this.navigator}></AddSnacksAndMealsPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else if(this.state.allottedTotal != null && this.state.pageNumber === 2){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView>
            <SavedItemsPage itemList={this.list()} changePage={this.navigator}></SavedItemsPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
  


const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    height: '100%'
  },
});
