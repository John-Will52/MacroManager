import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Animated, Easing, Button} from 'react-native';
import {name as appName} from '../app.json';

import Colors from '../styling/colors';


// AppRegistry is the JS entry point for all ReactNative apps. 

export default class LandingPage extends Component{
    constructor(props) {
        super()
        this.state = {
           expansion: new Animated.Value(0),
           fadeIn: new Animated.Value(0),
           buttonFadeIn: new Animated.Value(0),

        }
        this.animation();
    }
    animation = () =>{
        Animated.sequence([
            Animated.timing(this.state.expansion,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.fadeIn,{
                toValue: 1,
                easing: Easing.ease,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.buttonFadeIn,{
                toValue: 1,
                easing: Easing.ease,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start();
    }

    outro = () =>{
        Animated.timing(this.state.expansion, 
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
    }
   



    render(){
            return(
                <Animated.View style={[styles.background, {transform:[{scaleX: this.state.expansion, scaleY: this.state.expansion}]}]}>
                    <Animated.Text style={[styles.title, {opacity: this.state.fadeIn}]}>Welcome back, {this.props.name}!</Animated.Text>
                    <Animated.Image style={[styles.logo, {opacity:this.state.fadeIn}]} source={require('../AppIcons/appstore.png')}></Animated.Image>
                    <Animated.Text style={[styles.subtitle, {opacity: this.state.fadeIn}]}>Let's get back to the grind!</Animated.Text>
                    <Animated.View style={[styles.button, {opacity: this.state.buttonFadeIn}]}>
                        <Button title="Let's get back to it!" color={Colors.button2} onPress={()=> {this.outro(), this.props.nextPage(0)}}></Button>
                    </Animated.View>
                </Animated.View>
            );
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
        marginTop: '30%'
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
    },
    initialButton:{
        backgroundColor:Colors.buttonBackground2,
        width: 125,
        alignSelf: 'center',
        marginTop: 15

    },
    button:{
        backgroundColor:Colors.buttonBackground2,
        width: 175,
        alignSelf: 'center',
        marginTop: 15

    }
})

AppRegistry.registerComponent(appName, () => LandingPage);