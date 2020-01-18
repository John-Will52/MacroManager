import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';





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
        currentCarbs : null,
        currentProteins : null,
        currentFats : null,
        currentTotal : null,
    }
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
    else if(this.state.allottedTotal != null){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <CalorieCounterPage allottedCarbs={this.state.allottedCarbs} allottedProteins={this.state.allottedProteins} allottedFats={this.state.allottedFats} allottedTotal={this.state.allottedTotal}></CalorieCounterPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
  


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f9a',
    height: '100%'
  },
  
});
