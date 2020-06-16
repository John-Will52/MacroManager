import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
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
                    {this.props.children}
                    <View style={styles.savedItemsBox}>
                        <Text style={styles.text}>Go to the "Save a Snack or Meal" page to add foods that you eat often.</Text>
                    </View>
                    <Text style={styles.OR}>...OR...</Text>
                    <View style={styles.savedItemsBox}>  
                        <Text style={styles.text}>If you know that you should have something saved, try pressing the filter buttons.</Text>
                    </View>
                </View>
            );
        }
        else{
            return(
                <View style={styles.pageContainer}>
                    <View style={styles.buttonContainer}>
                        {this.props.children}
                    </View>
                    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0}>

                        {this.props.itemList}
                    </KeyboardAvoidingView>
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
        borderWidth: 5,
    },
    text:{
        color: Colors.text,
        fontSize: 25,
        textAlign: "center",
    },
    OR:{
        color: Colors.text,
        fontSize: 35,
        textAlign: "center",
        marginVertical: 10
    },
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);