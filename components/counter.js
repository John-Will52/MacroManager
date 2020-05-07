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

    color = () =>{
            if(this.props.percentages < 76){
                color = 'red';
            }
            else if(76 <= this.props.percentages <= 89){
                color = 'orange';
            }
            else if(90 <= this.props.percentages <= 95){
                color = 'yellow';
            }
            else if(96 <= this.props.percentages <= 105){
                color = 'green';
            }
            else{
                color = Colors.background;
            }

        return color;
    }





    
    render(){
        
        return(
            <View>
                <View style={[styles.box, {height: `${parseInt(this.props.percentages)}%`, backgroundColor: this.color()}]}>
                    <Text style={styles.labels}>{parseInt(this.props.percentages)}%</Text>
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
        maxHeight: '100%'
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