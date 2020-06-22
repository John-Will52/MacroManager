import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Alert, Button,} from 'react-native';
import SurveyPage from './pages/surveyPage';
import CalorieCounterPage from './pages/calorieCounterPage';
import AddSnacksAndMealsPage from './pages/addSnacksAndMealsPage';
import SavedItemsPage from './pages/savedItemsPage';
import SavedItems from './components/savedItems';
import NavBarIcons from './components/navBarIcons';


import EditInfoPage from './pages/editInfoPage';
import FAQsPage from './pages/FAQsPage';
import LandingPage from './pages/landingPage';
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
      listFilter: 'Any',
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

  getData = async () => {
    try {
      const appData = await AsyncStorage.getItem('state');
      const savedState = JSON.parse(appData);
      if(savedState !== null){
        this.setState({...savedState, pageNumber:5})
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
    this.navigator(0);
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

    snackList = () => {
        return this.state.savedItems.filter((item) => {return item.item == 'Snack';}).map((item) => {
          return(
            <SavedItems key={item.id}  id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems> 
          );
        }); 
    };
    mealList = () => {
      return this.state.savedItems.filter((item) => {return item.item == 'Meal';}).map((item) => {
        return(
          <SavedItems key={item.id}  id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems>
        );
      });  
    };

  //Edit page functions
  submitEditedInfo = (name, goal, height, weight, BMI, fats, carbs, proteins, total, errors) =>{
    const currentFats = this.state.currentFats;
    const currentCarbs = this.state.currentCarbs;
    const currentProteins = this.state.currentProteins;
    const currentTotal = this.state.currentTotal;

    if(errors > 0){
      Alert.alert(
        'Alert',
        `You have ${errors} errors in your calorie numbers, are you sure that you want to make these changes anyway?`,
        [
          {text: 'Yes', onPress: () => {this.setState({
            name: name,
            goal: goal,
            height: height,
            weight: weight,
            BMI: BMI,
            allottedFats: parseInt(fats),
            allottedCarbs: parseInt(carbs),
            allottedProteins: parseInt(proteins),
            allottedTotal: parseInt(total),
            percentOfCarbs: (currentCarbs/parseInt(carbs)) * 100,
            percentOfProteins: (currentProteins/parseInt(proteins)) * 100,
            percentOfFats: (currentFats/parseInt(fats)) * 100,
            percentOfTotalCalories: (currentTotal/parseInt(total)) * 100,
          }),
          this.navigator(0),
          this.storeData()}},
          {
            text: "No",
            onPress: () =>{this.navigator(3), this.storeData()}
          },
        ],
        {cancelable: false},
      );
    }
    else{
      Alert.alert(
        'Alert',
        `Are you sure that you want to make these changes?`,
        [
          {text: 'Yes', onPress: () => {this.setState({
            name: name,
            goal: goal,
            height: height,
            weight: weight,
            BMI: BMI,
            allottedFats: parseInt(fats),
            allottedCarbs: parseInt(carbs),
            allottedProteins: parseInt(proteins),
            allottedTotal: parseInt(total),
            percentOfCarbs: (currentCarbs/parseInt(carbs)) * 100,
            percentOfProteins: (currentProteins/parseInt(proteins)) * 100,
            percentOfFats: (currentFats/parseInt(fats)) * 100,
            percentOfTotalCalories: (currentTotal/parseInt(total)) * 100,
          }),
          this.navigator(0),
          this.storeData()}},
          {
            text: "No",
            onPress: () =>{this.navigator(3), this.storeData()}
          },
        ],
        {cancelable: false},
      );
    }
  }

    
  selectSex = input =>{
    const currentFats = this.state.currentFats;
    const currentCarbs = this.state.currentCarbs;
    const currentProteins = this.state.currentProteins;
    const currentTotal = this.state.currentTotal;
    const weight = this.state.weight;
    const BMI = this.state.BMI;
   
    if(this.state.units === "Imperial"){
      let leanBodyMass = parseInt(weight * ((100 - BMI)/100));
      if(this.state.goal === "Lose" && input === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})
      }
      if(this.state.goal === "Lose" && input === "Female"){
          let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
          let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})

      }
      if(this.state.goal === "Gain" && input === "Male"){
          let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
          let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories),percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})

      }
      if(this.state.goal === "Gain" && input === "Female"){
          let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
          let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})
      }
    }
    if(this.state.units === "Metric"){
      let imperialWeight = parseInt(weight * 2.205);
      let leanBodyMass = parseInt(imperialWeight * ((100 - BMI)/100));
      if(this.state.goal === "Lose" && input === "Male"){
        let allottedCarbCalories = parseInt((leanBodyMass * 1.3)) * 4;
        let allottedProteinCalories = parseInt((leanBodyMass * 2.342)) * 4;
        let allottedFatCalories =  parseInt((leanBodyMass * .692)) * 9;
        let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
        this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})
      }
      if(this.state.goal === "Lose" && input === "Female"){
          let allottedCarbCalories = parseInt((leanBodyMass * .51)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 2.551)) * 4;
          let allottedFatCalories =  parseInt((leanBodyMass * .898)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})

      }
      if(this.state.goal === "Gain" && input === "Male"){
          let allottedCarbCalories = parseInt((leanBodyMass * 2.608)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 1.567)) * 4;
          let allottedFatCalories = parseInt((leanBodyMass * .458)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories),percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})

      }
      if(this.state.goal === "Gain" && input === "Female"){
          let allottedCarbCalories = parseInt((leanBodyMass * 2.041)) * 4;
          let allottedProteinCalories = parseInt((leanBodyMass * 1.786)) * 4;
          let allottedFatCalories = parseInt((leanBodyMass * .467)) * 9;
          let allottedTotalCalories = allottedCarbCalories + allottedProteinCalories + allottedFatCalories;
          this.setState({sex: input, allottedCarbs: parseInt(allottedCarbCalories), allottedProteins: parseInt(allottedProteinCalories), allottedFats: parseInt(allottedFatCalories), allottedTotal: parseInt(allottedTotalCalories), percentOfCarbs: (currentCarbs/allottedCarbCalories) * 100, percentOfProteins: (currentProteins/allottedProteinCalories) * 100, percentOfFats: (currentFats/allottedFatCalories) * 100, percentOfTotalCalories: (currentTotal/allottedTotalCalories) * 100,})
      }
    }
        this.navigator(0);
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
          {/* <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar> */}
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <CalorieCounterPage clear={this.reset} addCalories={this.calorieCounterStateTransfer} percentOfCarbs={this.state.percentOfCarbs} percentOfProteins={this.state.percentOfProteins} percentOfFats={this.state.percentOfFats} percentOfTotalCalories={this.state.percentOfTotalCalories} remainingCarbCals={this.state.allottedCarbs - this.state.currentCarbs} remainingProteinCals={this.state.allottedProteins - this.state.currentProteins} remainingFatCals={this.state.allottedFats - this.state.currentFats} remainingTotalCals={this.state.allottedTotal - this.state.currentTotal} remainingCarbGrams={(this.state.allottedCarbs - this.state.currentCarbs)/4} remainingProteinGrams={(this.state.allottedProteins - this.state.currentProteins)/4} remainingFatGrams={(this.state.allottedFats - this.state.currentFats)/9} remainingTotalCals={this.state.allottedTotal - this.state.currentTotal}></CalorieCounterPage>
          </ScrollView>
          <NavBarIcons currentPage={this.state.pageNumber} changePage={this.navigator}></NavBarIcons>
        </SafeAreaView>
      );
    }

    if(this.state.allottedTotal != null && this.state.pageNumber === 1){
      return(
        <SafeAreaView style={styles.background}>
          {/* <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar> */}
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <AddSnacksAndMealsPage changePage={this.navigator} saveItem={this.saveItems}></AddSnacksAndMealsPage>
          </ScrollView>
          <NavBarIcons currentPage={this.state.pageNumber} changePage={this.navigator}></NavBarIcons>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 2){
      return(
        <SafeAreaView style={styles.background}>
          {/* <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar> */}
          <ScrollView>
            <SavedItemsPage changePage={this.navigator} snackList={this.snackList()} mealList={this.mealList()}>
              <View style={styles.filters}>
                <Button title="All" color={Colors.filter} onPress={()=>{this.setState({listFilter: 'Any'})}}></Button>
                <Button title="Snacks" color={Colors.filter} onPress={()=>{this.setState({listFilter: 'Snack'})}}></Button>
                <Button title="Meals" color={Colors.filter} onPress={()=>{this.setState({listFilter: 'Meal'})}}></Button>
              </View>
            </SavedItemsPage>
          </ScrollView>
          <NavBarIcons currentPage={this.state.pageNumber} changePage={this.navigator}></NavBarIcons>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 3){
      return(
        <SafeAreaView style={styles.background}>
          {/* <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar> */}
          <View>
            <EditInfoPage editedInfo={this.submitEditedInfo} units={this.state.units} sex={this.state.sex} goal={this.state.goal} name={this.state.name} BMI={this.state.BMI} height={this.state.height} weight={this.state.weight} allottedFats={this.state.allottedFats} allottedCarbs={this.state.allottedCarbs} allottedProteins={this.state.allottedProteins} allottedTotal={this.state.allottedTotal}></EditInfoPage>
          </View>
          <NavBarIcons currentPage={this.state.pageNumber} changePage={this.navigator}></NavBarIcons>
        </SafeAreaView>
      );
    }
    if(this.state.allottedTotal != null && this.state.pageNumber === 4){
      return(
        <SafeAreaView style={styles.background}>
          <View>
            {/* <NavBar currentPage={this.state.pageNumber} changePage={this.navigator}></NavBar> */}
            <FAQsPage sex={this.state.sex} selectSex={this.selectSex}></FAQsPage>
          </View>
          <NavBarIcons currentPage={this.state.pageNumber} changePage={this.navigator}></NavBarIcons>
        </SafeAreaView>
      );
    }
    if(this.state.pageNumber == 5 && this.state.allottedTotal != null){
      return(
        <SafeAreaView style={styles.background}>
          <LandingPage name={this.state.name} nextPage={this.navigator}></LandingPage>
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
  filters:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});