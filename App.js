import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';
import SavedMealsPage from './pages/savedMealsPage';
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

    percentCalculator = (c, p, f, t) =>{
        this.setState({
          percentOfCarbs: (c/this.state.allottedCarbs) * 100 + this.state.percentOfCarbs,
          percentOfProteins: (p/this.state.allottedProteins) * 100 + this.state.percentOfProteins,
          percentOfFats: (f/this.state.allottedFats) * 100 + this.state.percentOfFats,
          percentOfTotalCalories: (t/this.state.allottedTotal) * 100 + this.state.percentOfTotalCalories,
        })
    }

    


  render(){
    if(this.state.allottedTotal == null){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <SurveyPage transferState={this.surveyPageStateTransfer}></SurveyPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else if(this.state.allottedTotal != null && this.state.pageNumber === 0){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <CalorieCounterPage changePage={this.navigator} addCalories={this.calorieCounterStateTransfer} percentOfCarbs={this.state.percentOfCarbs} percentOfProteins={this.state.percentOfProteins} percentOfFats={this.state.percentOfFats} percentOfTotalCalories={this.state.percentOfTotalCalories}></CalorieCounterPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else if(this.state.allottedTotal != null && this.state.pageNumber === 1){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <SavedMealsPage changePage={this.navigator}></SavedMealsPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
  


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
    height: '100%'
  },
  
});
