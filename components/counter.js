import React, {Component} from 'react';
import {AppRegistry, View, Text, Animated, StyleSheet, Platform} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 


export default class Counter extends Component{
    constructor(props) {
        super()
        this.state = {
            color: 'red',
        }
    }

    color = (x) =>{
        const colorArray=['red','orange','green','blue'];

        if(x < 76 || x > 105){
            return colorArray[0];
        }
        else if (x > 75 && x <= 86){
            return colorArray[1];
        }
        else if (x > 85 && x <= 95){
            return colorArray[2];
        }
        else if (x > 95 && x <= 105){
            return colorArray[3];
        }

    }





    
    render(){
        
        return(
            <View>

                <View style={[styles.box, {height: `${parseInt(this.props.percentages)}%`, backgroundColor: this.color(parseInt(this.props.percentages))}]}>
                    <Text style={styles.labels}>{parseInt(this.props.percentages)}%</Text>
                    {/* <Text>{this.color(parseInt(this.props.percentages))}</Text> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        // backgroundColor: 'red',
        width: 85,
        paddingBottom: 20,
        minHeight: Platform.OS === 'ios' ? '12%' : '8%',
        maxHeight: '100%',
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