import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet,} from 'react-native';
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
  


    render(){
        if(this.props.itemList.length == 0){
            return(
                <View style={styles.pageContainer}>
                    <View style={styles.savedItemsBox}>
                        <Text style={styles.text}>Go to the "Save a Snack or Meal" page to add foods that you eat often.</Text>
                    </View>
                </View>
            );
        }
        else{
            return(
                <View style={styles.pageContainer}>
                    <View style={styles.buttonContainer}>
                    </View>
                    {this.props.itemList}   
                </View>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    pageContainer:{
        padding: 10,
    },
    savedItemsBox:{
        backgroundColor: Colors.boxBackground,
        width: '100%',
        padding: 5,
        borderColor: Colors.borders,
        borderWidth: 5
    },
    text:{
        color: Colors.text,
        fontSize: 25,
        textAlign: "center",
    },
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);