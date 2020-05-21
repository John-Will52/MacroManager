import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Fats extends Component{
    constructor(props) {
        super()

    }

    // THis is the area that you put your JS logic for functions and stuff at.


    render(){
        return(
            <View>
                <Text>This is your Fats component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    subtitles:{
        fontSize: 30,
        textDecorationLine: 'underline',
        marginBottom: 5,

    },
    text:{
        fontSize: 20,
        marginVertical: 2,
    },
    paragraph:{
        paddingHorizontal: 10,
        marginVertical: 5
    },
    emphasis:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        
    },
    italicized:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
    },
    italicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    boldItalicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',

    },
})

AppRegistry.registerComponent(appName, () => Fats);