import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View, Alert, Button} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';
import AddSnacksAndMealsPage from './pages/addSnacksAndMealsPage';
import SavedItemsPage from './pages/savedItemsPage';
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
    navigator = pageNum =>{
      this.setState({
        pageNumber: pageNum,
      })
    }

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

    addItemCalories = (servings, carbs, proteins, fats) => {
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

    percentCalculator = (c, p, f, t) =>{
      this.setState({
        percentOfCarbs: (c/this.state.allottedCarbs) * 100 + this.state.percentOfCarbs,
        percentOfProteins: (p/this.state.allottedProteins) * 100 + this.state.percentOfProteins,
        percentOfFats: (f/this.state.allottedFats) * 100 + this.state.percentOfFats,
        percentOfTotalCalories: (t/this.state.allottedTotal) * 100 + this.state.percentOfTotalCalories,
      })
    }
    saveItems = (item) =>{
      this.setState(state =>{
        const savedItems = [...state.savedItems, item];
        return {
          savedItems
        };
      });  
    }
    
    list = () => {
      return this.state.savedItems.map((element, index) => {
        return (
          <View key={index} style={styles.itemBox}>
            <Text>Item type: {element.item}</Text>
            <Text style={styles.itemName}>{element.name}</Text>
            <View style={styles.macroFactsBox}>
              <View style={styles.macroFacts}>
                <Text>Carbs: {element.carbs} grams</Text>
              </View>
              <View style={styles.macroFacts}>
                <Text>Proteins: {element.proteins} grams</Text>
              </View>
            </View>
            <View style={styles.macroFactsBox}>
              <View style={styles.macroFacts}>
                <Text>Fats: {element.fats} grams</Text>
              </View>
              <View style={styles.macroFacts}>
                <Text>Servings: {element.servings}</Text>
              </View>
            </View>
            <Button color={Colors.button1} title="+" onPress={()=> this.addItemCalories(element.servings, element.carbs, element.proteins, element.fats)}></Button>
          </View>
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
            <CalorieCounterPage changePage={this.navigator} addCalories={this.calorieCounterStateTransfer} percentOfCarbs={this.state.percentOfCarbs} percentOfProteins={this.state.percentOfProteins} percentOfFats={this.state.percentOfFats} percentOfTotalCalories={this.state.percentOfTotalCalories}></CalorieCounterPage>
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
          <View>
            <SavedItemsPage itemList={this.list()} changePage={this.navigator}></SavedItemsPage>
          </View>
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

  }
  
});
