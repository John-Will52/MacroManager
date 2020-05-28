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
        const colorArray=['#FF1E01','#FF8703','#F7DB0B','#488D24','#02EEFF','#0234FF','#B001FF'];

        if(x <= 50 || x > 110){
            return colorArray[0];
        }
        else if (x > 50 && x <= 65){
            return colorArray[1];
        }
        else if (x > 65 && x <= 75){
            return colorArray[2];
        }
        else if (x > 75 && x <= 85){
            return colorArray[3];
        }
        else if (x > 85 && x <= 95){
            return colorArray[4];
        }
        else if (x > 95 && x <= 105){
            return colorArray[5];
        }
        else if (x > 105 && x <= 110){
            return colorArray[6];
        }

    }

infoDisplay = () =>{
    if( this.props.displayType == 'percents'){
        return(
            <Text style={styles.labels}>{parseInt(this.props.percentages)}%</Text>
        )
    }
    if(this.props.displayType == 'grams'){
        return(
            <View>
                <Text style={styles.otherLabels}>{this.props.remainingGrams}</Text>
                <Text style={styles.otherLabels}>grams</Text>
            </View>
        )
    }
    if(this.props.displayType == 'calories'){
        return(
            <View>
                <Text style={styles.otherLabels}>{this.props.remainingCals}</Text>
                <Text style={styles.otherLabels}>cals</Text>
            </View>
        )  
    }
}



    
    render(){
        
        return(
            <View>
                <View style={[styles.box, {height: `${parseInt(this.props.percentages)}%`, backgroundColor: this.color(parseInt(this.props.percentages))}]}>
                    {this.infoDisplay()}
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
        minHeight: Platform.OS === 'ios' ? '12%' : '12%',
        maxHeight: '100%',
    },
    labels:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'bottom'
    },
    otherLabels:{
        fontSize: Platform.OS === 'ios' ? 18 : 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'bottom'
    }
})

AppRegistry.registerComponent(appName, () => Counter);