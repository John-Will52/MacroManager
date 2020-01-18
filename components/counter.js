import React, {Component} from 'react';
import {AppRegistry, View, Text, Animated, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Counter extends Component{
    constructor(props) {
        super()
        this.state = {
            percent: '45%',
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    percentCalculator = () => {
        let heightPercent = this.props.currentAmounts/this.props.allottedAmounts;
        this.setState({percent: parseInt(heightPercent)});
   
     }

    
    render(){
        return(
            <View>
                <View style={[styles.box, {height: this.state.percent}]}>
                    <Text style={styles.labels}>{this.state.percent}</Text>
                </View>
                <Text style={styles.labels}>{this.props.calorieType}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        height: 100,
        backgroundColor: 'red',
        width: 75,
        paddingBottom: 20,
    },
    labels:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'bottom'
    }
})

AppRegistry.registerComponent(appName, () => Counter);