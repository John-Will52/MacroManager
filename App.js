import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View, Alert} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';
import AddSnacksAndMealsPage from './pages/addSnacksAndMealsPage';
import SavedItemsPage from './pages/savedItemsPage';
import SavedItems from './components/savedItems';
import NavBar from './components/navBar';
import Footer from './components/footer';
import EditInfoPage from './pages/editInfoPage';
import FAQsPage from './pages/FAQsPage';
import AsyncStorage from '@react-native-community/async-storage';

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
      this.getData();
      
  }

  storeData = async () => {
    try {
      const saveData = JSON.stringify(this.state);
      await AsyncStorage.setItem('state', saveData);

    } 
    catch (e) {
      // saving error
      console.log(e);
    }
  }
  // storeCaloricData = async () => {
  //   try {
  //     const saveData = JSON.stringify(this.state);
  //     await AsyncStorage.setItem('state', saveData);

  //   } 
  //   catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // }

  getData = async () => {
    try {
      const appData = await AsyncStorage.getItem('state');
      const savedState = JSON.parse(appData);
      if(savedState !== null){
        this.setState({...savedState})
      }
    } 
    catch(e) {
      // error reading value
      console.log(e);
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
    this.storeData();
  }
  calorieCounterStateTransfer = (servings, carbs, proteins, fats) => {
    Alert.alert(
      'Calorie Entry',
      `Are these the correct TOTAL amounts?
Fats: ${fats * servings} grams
Carbs: ${carbs * servings} grams
Protein: ${proteins * servings} grams`,
      [
        {text: 'Yes', 
        onPress: () =>{ 
          let addedCarbs= carbs * servings * 4;
          let addedProteins= proteins * servings * 4;
          let addedFats= fats * servings * 9;
          let addedTotal = addedCarbs + addedProteins + addedFats;
          this.setState({
            currentCarbs: this.state.currentCarbs + addedCarbs,
            currentProteins: this.state.currentProteins + addedProteins,
            currentFats: this.state.currentFats + addedFats,
            currentTotal: this.state.currentTotal + addedTotal,
          });
      
          this.percentCalculator(addedCarbs, addedProteins, addedFats, addedTotal);
          this.storeData();
          }
        },
        {
          text: "No",
          onPress: () =>{ this.navigator(0), this.storeData()},
        },
      ],
      {cancelable: false},
    );
  }      

  saveItems = (item) =>{
    this.setState(state =>{
      const savedItems = [...state.savedItems, item];
        return {
          savedItems
        };
    });  
    this.storeData();

  }
  deleteItems = (id) =>{
    let updatedArray = this.state.savedItems.filter((item) =>{
      return item.id != id;
    })
    this.setState({
      savedItems: updatedArray,
    })
    this.storeData();  
  }


  
  // Managed by App.js for navigation and/or verification
  navigator = pageNum =>{
    this.setState({
      pageNumber: pageNum,
    })
    this.storeData();

  }


  areYouSure = (item, name, servings, carbs, proteins, fats) =>{
    if(item == 'Meal' && servings > 1){
      Alert.alert(
        'Alert',
        `Are you sure that you want to eat ${servings} servings of ${name.toLowerCase()}?`,
        [
          {text: 'Yes', onPress: () => {this.addItemCalories(servings, carbs, proteins, fats), this.storeData()}},
          {
            text: "No",
            onPress: () =>{ this.navigator(2), this.storeData()}
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
          {text: 'Yes', onPress: () =>{ this.addItemCalories(servings, carbs, proteins, fats), this.storeData()}},
          {
            text: "No",
            onPress: () =>{ this.navigator(2), this.storeData()},
          },
        ],
        {cancelable: false},
      );
    }  
  }

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
      this.storeData();

    }
    
  }

    percentCalculator = (c, p, f, t) =>{
      this.setState({
        percentOfCarbs: (c/this.state.allottedCarbs) * 100 + this.state.percentOfCarbs,
        percentOfProteins: (p/this.state.allottedProteins) * 100 + this.state.percentOfProteins,
        percentOfFats: (f/this.state.allottedFats) * 100 + this.state.percentOfFats,
        percentOfTotalCalories: (t/this.state.allottedTotal) * 100 + this.state.percentOfTotalCalories,
      });
      this.storeData();
    }

    reset = () =>{ 
      Alert.alert(
        'Reset?',
        `Are you sure that you want to reset your numbers?`,
        [
          {text: 'Yes', onPress: () =>{ this.setState({currentCarbs: 0, currentProteins: 0, currentFats: 0, currentTotal: 0, percentOfCarbs: 0, percentOfProteins: 0, percentOfFats: 0, percentOfTotalCalories: 0}), this.navigator(0), this.storeData()}},
          {
            text: "No",
            onPress: () =>{ this.navigator(0), this.storeData()},
          },
        ],
        {cancelable: false},
      );
    }       


  // Data sent to SavedItemsPage

    list = () => {
      this.storeData();
      return this.state.savedItems.map((item) => {
        return(
          <SavedItems key={item.id}  id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems> 
        );
      });
    };

  //Edit page functions
    nameChange = input =>{
      this.setState({
        name: input
      })
      this.navigator(3);
      this.storeData();
    }
    changeGoal = input =>{
      this.setState({
        goal: input
      })
      this.changeGoalNewNumbers(input);
      this.navigator(3);
      this.storeData();

    }
    changeGoalNewNumbers= newGoal =>{
      let leanBodyMass = parseInt(this.state.weight * ((100 - this.state.BMI)/100));
      if(newGoal === "Lose" && this.state.sex === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * .833)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .65)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();
      }
      if(newGoal === "Lose" && this.state.sex === "Female"){
        let allottedCarbCalories = parseInt((leanBodyMass * 1.11)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.82)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();
      }
      if(newGoal === "Gain" && this.state.sex === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
        let allottedFatCalories = parseInt((leanBodyMass * .56)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();    
      }
      if(newGoal === "Gain" && this.state.sex === "Female"){
        let allottedCarbCalories = parseInt((leanBodyMass * 2.43)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.82)) * 4;
        let allottedFatCalories = parseInt((leanBodyMass * .81)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();
      }
    }
    editBMI = (newHeight, newWeight, newBMI) =>{
      this.setState({
        BMI : parseInt(newBMI),
        weight: parseInt(newWeight),
        height: parseInt(newHeight)
      });
      let leanBodyMass = parseInt(this.state.weight * ((100 - newBMI)/100));
      if(this.state.goal === "Lose" && this.state.sex === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * .833)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .65)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();
      }
      if(this.state.goal === "Lose" && this.state.sex === "Female"){
        let allottedCarbCalories = parseInt((leanBodyMass * 1.11)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.82)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .5)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();          
      }
      if(this.state.goal === "Gain" && this.state.sex === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * 3.125)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.875)) * 4;
        let allottedFatCalories = parseInt((leanBodyMass * .56)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();         
      }
      if(this.state.goal === "Gain" && this.state.sex === "Female"){
        let allottedCarbCalories = parseInt((leanBodyMass * 2.43)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 1.82)) * 4;
        let allottedFatCalories = parseInt((leanBodyMass * .81)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories)})
        this.storeData();
      }
      this.navigator(3);
    }
    changeNumbers = (carbs, protein, fat, errors)=>{
      total = parseInt(carbs) + parseInt(protein) + parseInt(fat);
      if(errors > 0){
          Alert.alert(
              'Warning',
              `Unless you're a professional, and you know EXACTLY what you're doing, your numbers aren't recommended.
Are you sure that you want to use them?`,
              [
                {text: "I know what I'm doing", onPress: () => this.setState({
                  allottedCarbs: parseInt(carbs),
                  allottedProteins: parseInt(protein),
                  allottedFats: parseInt(fat),
                  allottedTotal: total,
                  pageNumber: 3
                }),
                  },
                {
                  text: "No"
                },
              ],
              {cancelable: false},
            );
      }
      else{
          this.setState({
            allottedCarbs: parseInt(carbs),
            allottedProteins: parseInt(protein),
            allottedFats: parseInt(fat),
            pageNumber: 3
          })          
      }
  }
  selectSex = input =>{
    this.setState({
      sex: input
    });
    this.changeGoalNewNumbers(this.state.goal);
    this.storeData();
  }


  render(){
    if(this.state.allottedTotal == null){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SurveyPage transferState={this.surveyPageStateTransfer} changePage={this.navigator}></SurveyPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 0){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic" >
            <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar>
            <CalorieCounterPage clear={this.reset} addCalories={this.calorieCounterStateTransfer} percentOfCarbs={this.state.percentOfCarbs} percentOfProteins={this.state.percentOfProteins} percentOfFats={this.state.percentOfFats} percentOfTotalCalories={this.state.percentOfTotalCalories}></CalorieCounterPage>
            <Footer changePage={this.navigator}></Footer>
          </ScrollView>
        </SafeAreaView>
      );
    }

    if(this.state.allottedTotal != null && this.state.pageNumber === 1){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar>
            <AddSnacksAndMealsPage changePage={this.navigator} saveItem={this.saveItems}></AddSnacksAndMealsPage>
          </ScrollView>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 2){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView>
            <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar>
            <SavedItemsPage changePage={this.navigator} itemList={this.list()}></SavedItemsPage>

          </ScrollView>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 3){
      return(
        <SafeAreaView style={styles.background}>
          <ScrollView>
            <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar>
            <EditInfoPage changeName={this.nameChange} changeGoal={this.changeGoal} editBMI={this.editBMI} changeNumbers={this.changeNumbers} units={this.state.units} sex={this.state.sex} goal={this.state.goal}></EditInfoPage>
            <View style={styles.container}>
              <Text style={styles.text}>Current Name: {this.state.name}</Text>
              <Text style={styles.text}>Current Goal: {this.state.goal}</Text>
              <Text style={styles.text}>Current Height: {this.state.height}</Text>
              <Text style={styles.text}>Current Weight: {this.state.weight}</Text>
              <Text style={styles.text}>Current BMI: {this.state.BMI}</Text>
              <Text style={styles.text}>Current Total Fat Calories: {this.state.allottedFats}</Text>
              <Text style={styles.text}>Current Total Carb Calories: {this.state.allottedCarbs}</Text>
              <Text style={styles.text}>Current Total Protein Calories:  {this.state.allottedProteins}</Text>
              <Text style={styles.text}>Current Total Daily Calories:  {this.state.allottedTotal}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 4){
      return(
        <SafeAreaView style={styles.background}>
          <View>
            <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar>
            <FAQsPage selectSex={this.selectSex}></FAQsPage>
          </View>
        </SafeAreaView>
      );
    }
  }
}
  


const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    height: '100%',
  },
  container:{
    backgroundColor:Colors.boxBackground,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: Colors.borders,
    borderWidth: 2,
    marginTop: 10,
    width: '90%',
    alignSelf: "center",
  },
  text:{
    color: Colors.text,
    fontSize: 20
  }
});
