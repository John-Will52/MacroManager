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
                <Text style={styles.text}>Save a snack by clicking the "Save" button.</Text>
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
      if(this.props.mealList.length == 0){
          return(
            <View style={styles.savedItemsBox}>
                <Text style={styles.text}>Save a meal by clicking the "Save" button.</Text>
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
                <View style={styles.frames}>
                    <Text style={styles.titles}>Your Saved Snacks</Text>
                    {this.snackListView()}
                </View>
                <View style={styles.frames}>
                    <Text style={styles.titles}>Your Saved Meals</Text>
                    {this.mealListView()}
                </View>
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
        fontSize: 20,
    },
    titles:{
        color: Colors.text,
        fontSize: 30,
    },
    items:{
        flexDirection: 'row',
        // width: '45%',
        width: 267,
        // marginHorizontal: 20,
    },
    frames:{
        marginVertical: 25
    }
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);