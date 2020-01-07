import React, {Component} from 'react';
import {AppRegistry, View, Text, Animated, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Counter extends Component{
    constructor(props) {
        super()
        this.state = {
            h: '35%',
            color: 'green',
            percent: 35
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    exampleFunction = () => {

        this.setState({exampleVariable:''})
   
     }

    
    render(){
        return(
            <View>
                <View style={[styles.box, {height: this.state.percent, backgroundColor: this.state.color}]}>
                    <Text style={styles.labels}>{this.state.percent}%</Text>
                </View>
                <Text style={styles.labels}>{this.props.calorieType}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        height: 100,
        backgroundColor: 'white',
        width: 75,
    },
    labels:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'bottom'
    }
})

AppRegistry.registerComponent(appName, () => Counter);