import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, KeyboardAvoidingView, FlatList} from 'react-native';
import {name as appName} from '../app.json';
import SavedItems from '../components/savedItems';
import Colors from '../styling/colors';



// AppRegistry is the JS entry point for all ReactNative apps. 
export default class SavedItemsPage extends Component{
    constructor(props) {
        super()
        this.state={
            type: "All"
        }
    }
  snackListView=()=>{
      if(this.props.snackList.length == 0){
          return(
            <View style={styles.savedItemsBox}>
                <Text style={styles.text}>Save a snack by clicking the "Save" button.</Text>
            </View>
          )
      }
      else{
          return(
            <FlatList data={this.props.snackList} renderItem={({ item }) => <SavedItems id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems>} keyExtractor={item => item.id} horizontal={true}/>
          )
      }
  }
  mealListView=()=>{
      if(this.props.mealList.length == 0){
          return(
            <View style={styles.savedItemsBox}>
                <Text style={styles.text}>Save a meal by clicking the "Save" button.</Text>
            </View>
          )
      }
      else{
          return(

            <FlatList data={this.props.mealList} renderItem={({ item }) => <SavedItems id={item.id} delete={this.deleteItems} areYouSure={this.areYouSure} addItemCalories={this.addItemCalories} carbs={item.carbs} proteins={item.proteins} fats={item.fats} servings={item.servings} name={item.name} item={item.item}></SavedItems>} keyExtractor={item => item.id} horizontal={true}/>
          )
      }
  }


    render(){
        return(
            <KeyboardAvoidingView behavior="position">
                <View style={styles.pageContainer}>
                    <View style={styles.frames}>
                        <Text style={styles.titles}>Your Saved Snacks</Text>
                        {this.snackListView()}
                    </View>
                    <View style={styles.frames}>
                        <Text style={styles.titles}>Your Saved Meals</Text>
                        {this.mealListView()}
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
        
    }
}

const styles = StyleSheet.create({
    pageContainer:{
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    savedItemsBox:{
        // backgroundColor: Colors.boxBackground,
        width: '100%',
        padding: 5,
        borderColor: Colors.borders,
        // borderWidth: 5,
        alignSelf: "center"
    },
    text:{
        color: Colors.text,
        fontSize: 20,
    },
    titles:{
        color: Colors.text,
        fontSize: 30,
    },
    items:{
        flexDirection: 'row',
        width: 300,

    },
    frames:{
        marginBottom: 25
    }
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);