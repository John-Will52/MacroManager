import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, SectionList, FlatList, Button, Alert, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';


// AppRegistry is the JS entry point for all ReactNative apps. 
export default class SavedItemsPage extends Component{
    constructor(props) {
        super()

        this.state = {
            item: null,
        }
    }


    // THis is the area that you put your JS logic for functions and stuff at.

    


 
    

    render(){
        if(this.props.itemList.length == 0){
            return(
                <View style={styles.pageContainer}>
                    <View style={styles.savedItemsBox}>
                        <Text style={styles.text}>Click the "Add a Snack or Meal" button to add things that you eat often.</Text>
                    </View>
                    <Button title="Calorie Counters Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    <Button title="Add a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
                </View>
            );
        }
        else{
            return(
                <View style={styles.pageContainer}>
                    <View style={styles.savedItemsBox}>
                        {this.props.itemList}   
                    </View>
                    <Button title="Calorie Counters Page" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    <Button title="Add a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
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
    },
    text:{
        color: 'white',
        fontSize: 30,
        alignSelf: "center",
    }
    
  });

AppRegistry.registerComponent(appName, () => SavedItemsPage);