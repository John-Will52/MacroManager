import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import FAQ from '../components/FAQ';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class FAQsPage extends Component{
    constructor(props) {
        super()
        this.state = {
            focus: null
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    nullifyQuestion = () =>{
        this.setState({
            focus: null
        })
    }
    page = () =>{
        if(this.state.focus == null){
            return(
                <View>
                    <Text style={styles.title}>FAQ Page</Text>
                    <View>
                        <View style={styles.buttonBackground}>
                            <Button title="How does this app work?" color={Colors.button2} onPress={() => this.setState({focus: 1})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="How do the macronutrients affect body composition?" color={Colors.button2} onPress={() => this.setState({focus: 2})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Why does the app require the information that it asks for?" color={Colors.button2} onPress={() => this.setState({focus: 3})}></Button>
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="What should I expect from using this app?" color={Colors.button2} onPress={() => this.setState({focus: 4})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Is any of my information recorded, or sent anywhere else?" color={Colors.button2} onPress={() => this.setState({focus: 5})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="Can I use the recommended calorie amounts without exercising?" color={Colors.button2} onPress={() => this.setState({focus: 6})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="If I want to lose weight, why does it seem that the app wants me to eat so much?" color={Colors.button2} onPress={() => this.setState({focus: 7})}></Button> 
                        </View>
                        <View style={styles.buttonBackground}>
                            <Button title="I identify as transgender, should I have picked what I identify as, or what I was born as?" color={Colors.button2} onPress={() => this.setState({focus: 8})}></Button> 
                        </View>
                    </View>
                </View>
            );
        }
        else{
            return(
                <View>
                    <Text style={styles.title}>FAQ Page</Text>
                    <View style = {styles.window}>
                        <FAQ return={this.nullifyQuestion} questionNumber={this.state.focus}></FAQ>
                    </View>
                </View>
            )
        }
        
    }


    render(){
        return(
            this.page()
        );
    }
}

const styles = StyleSheet.create({
    title:{
        color: Colors.titles,
        fontSize: 30,
        alignSelf: 'center',
        marginVertical: 10
    },
    buttonBackground:{
        backgroundColor: Colors.buttonBackground2,
        borderWidth: 2,
        borderColor: Colors.boxBackground,
        margin: 5,
        width:'90%',
        alignSelf:'center'
    },
    window:{
        width: '90%',
        height: '86%',
        borderColor: Colors.borders,
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 10
    },
})

AppRegistry.registerComponent(appName, () => FAQsPage);