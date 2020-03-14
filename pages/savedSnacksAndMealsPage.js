import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, SectionList, FlatList} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class SavedSnacksAndMealsPage extends Component{
    constructor(props) {
        super()
        this.state = {
            savedMeals:[],
            savedSnacks:[],
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    addSnacks = (type, name, carbs, proteins, fats, servings) =>{
        let itemType = type;
        let snackName = name;
        let snackCarbs = carbs;
        let snackProteins = proteins;
        let snackFats = fats;
        let snackServings = servings;
  
        this.setState(state =>{
          const savedSnacks = state.savedSnacks.concat(<SavedSnacks itemType={itemType} snackName={snackName} snackCarbs={parseInt(snackCarbs)} snackProteins={parseInt(snackProteins)} snackFats={parseInt(snackFats)} snackServings={parseInt(snackServings)}></SavedSnacks>);
          return {
            savedSnacks,
          };
        })
      }


    render(){
        return(

                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                >
                </FlatList>

        );
    }
}

const styles = StyleSheet.create({
    container:{   
        flex: 1,
        paddingTop: 22
    }
})

AppRegistry.registerComponent(appName, () => SavedSnacksAndMealsPage);