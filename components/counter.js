import React, {Component} from 'react';
import {AppRegistry, View, Text, Animated, StyleSheet, Platform} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Counter extends Component{
    constructor(props) {
        super()
        this.state = {
            percent: "0%",
        }
    }

    
    render(){
        
        return(
            <View>
                <View style={[styles.box, {height: `${parseInt(this.props.percentages)}%`}, {maxHeight: '100%'}]}>
                    <Text style={styles.labels}>{parseInt(this.props.percentages)}%</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: 'red',
        width: 85,
        paddingBottom: 20,
        minHeight: Platform.OS === 'ios' ? '12%' : '0%',
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