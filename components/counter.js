import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Platform} from 'react-native';
import {name as appName} from '../app.json';
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
        if (50 < x && x <= 65){
            return colorArray[1];
        }
        if (65 < x && x <= 75){
            return colorArray[2];
        }
        if (75 < x && x <= 85){
            return colorArray[3];
        }
        if (85 < x && x <=95){
            return colorArray[4];
        }
        if (95 < x && x <= 105){
            return colorArray[5];
        }
        if (105 < x  && x<= 110){
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
        minHeight: '13%',
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