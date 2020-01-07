import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
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
        units:null,
        height : null,
        weight : null,
        BMI : null,
        carbs : null,
        proteins : null,
        fats : null,
        overallCalories : null
      }
    }

    surveyPageStateTransfer = (n, s, g, u, h, w, BMI) =>{
      this.setState({
        name: n,
        sex: s,
        goal: g,
        units: u,
        height: h,
        weight: w,
        BMI: BMI,
      })
    }

  render(){
    if(this.state.BMI == null){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <SurveyPage transferState={this.surveyPageStateTransfer}></SurveyPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    else if(this.state.BMI != null){
      return(
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <CalorieCounterPage></CalorieCounterPage>
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
