import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, Button, Image, Animated, Easing} from 'react-native';
import {name as appName} from '../app.json';

import Colors from '../styling/colors';


// AppRegistry is the JS entry point for all ReactNative apps. 

export default class LandingPage extends Component{
    constructor(props) {
        super()
        this.state = {
           expansion: new Animated.Value(0),
           fadeIn: new Animated.Value(0),

        }
        this.animation();

    }
    animation = () =>{
        Animated.sequence([
            Animated.timing(this.state.expansion, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.fadeIn,{
                toValue: 1,
                easing: Easing.ease,
                duration: 4000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.expansion, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start();
    }

   



    render(){
        if(!this.props.name){
            return(
                <Animated.View style={[styles.background, {transform:[{scaleX: this.state.expansion, scaleY: this.state.expansion}]}]}>
                    <Animated.Text style={[styles.title, {opacity: this.state.fadeIn}]}>Welcome to Macromanager!</Animated.Text>
                    <Animated.Image style={[styles.logo, {opacity:this.state.fadeIn}]} source={require('../AppIcons/appstore.png')}></Animated.Image>
                    <Animated.Text style={[styles.subtitle, {opacity: this.state.fadeIn}]}>Let's get to work.</Animated.Text>
                </Animated.View>
            );
        }
        else{
            return(
                <Animated.View style={[styles.background, {transform:[{scaleX: this.state.expansion, scaleY: this.state.expansion}]}]}>
                    <Animated.Text style={[styles.title, {opacity: this.state.fadeIn}]}>Welcome back, {this.props.name}!</Animated.Text>
                    <Animated.Image style={[styles.logo, {opacity:this.state.fadeIn}]} source={require('../AppIcons/appstore.png')}></Animated.Image>
                    <Animated.Text style={[styles.subtitle, {opacity: this.state.fadeIn}]}>Let's get back to the grind!</Animated.Text>
                </Animated.View>
            );
        }
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.boxBackground,
        borderColor: Colors.borders,
        borderWidth: 2,
        width: '95%',
        alignSelf: "center",
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginTop: '40%'
    },
    title:{
        fontSize: 50,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
    },
    subtitle:{
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        width: '95%',
        color: 'white',
        fontWeight: '400',
        textDecorationLine: "underline",
        marginTop: 20
    },
    logo:{
        height: 150,
        width:150,
        alignSelf: 'center',
        marginVertical: 20,
        borderColor: Colors.borders,
        borderWidth: 3
    }
})

AppRegistry.registerComponent(appName, () => LandingPage);