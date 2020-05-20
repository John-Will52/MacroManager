import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class FAQ extends Component{
    constructor(props) {
        super()
        this.state = {
            // FAQVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    content = () => {
        if(this.props.questionNumber == 1){
            return(
                <Text style={styles.text}>1</Text>
            );
        }
        if(this.props.questionNumber == 2){
            return(
                <Text style={styles.text}>2</Text>
            );
        }
        if(this.props.questionNumber == 3){
            return(
                <Text style={styles.text}>3</Text>
            );
        }
        if(this.props.questionNumber == 4){
            return(
                <Text style={styles.text}>4</Text>
            );
        }
        if(this.props.questionNumber == 5){
            return(
                <Text style={styles.text}>5</Text>
            );
        }
        if(this.props.questionNumber == 6){
            return(
                <Text style={styles.text}>6</Text>
            );
        }
        if(this.props.questionNumber == 7){
            return(
                <Text style={styles.text}>7</Text>
            );
        }
        if(this.props.questionNumber == 8){
            return(
                <Text style={styles.text}>8</Text>
            );
        }
   
     }


    render(){
        return(
            <View style={styles.content}>
                <View style={styles.buttonBackground}>
                    <Button title="Close"color={Colors.button2} onPress={()=> this.props.return()}></Button>
                </View>
                <ScrollView>
                    {this.content()}
                </ScrollView>  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
        width:'100%',
        alignSelf:'center'
    },
    content:{
        // backgroundColor: Colors.boxBackground,
        backgroundColor: '#d1f7ff',
        flex: 1
    },
    text:{
        fontSize: 30
    }
})


AppRegistry.registerComponent(appName, () => FAQ);