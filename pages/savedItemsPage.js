import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
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
                <Text style={styles.text}>Click the "Save" button to save a snack.</Text>
            </View>
          )
      }
      else{
          return(
            <ScrollView horizontal={true} style={styles.savedItemsBox}>
                <View style={styles.items}>
                    {this.props.snackList}
                </View>
            </ScrollView>
          )
      }
  }
  mealListView=()=>{
      if(this.props.snackList.length == 0){
          return(
            <View style={styles.savedItemsBox}>
                <Text style={styles.text}>Click the "Save" button to save a meal.</Text>
            </View>
          )
      }
      else{
          return(

            <ScrollView horizontal={true} style={styles.savedItemsBox}>
                <View style={styles.items}>
                    {this.props.mealList}
                </View>
            </ScrollView>
          )
      }
  }


    render(){
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.text}>Your Saved Snacks</Text>
                {this.snackListView()}
                <Text style={styles.text}>Your Saved Meals</Text>
                {this.mealListView()}
            </View>
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
    },
    text:{
        color: Colors.text,
        fontSize: 25,
    },
    items:{
        flexDirection: 'row',
        width: '65%',
        // marginHorizontal: 20,
    },
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);