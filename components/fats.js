import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet,} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Fats extends Component{
    constructor(props) {
        super()

    }

    // THis is the area that you put your JS logic for functions and stuff at.


    render(){
        return(
            <View>
                <Text style={styles.titles}>Fats</Text>
                <Text style={styles.subtitles}>How your body uses fat:</Text>
                <View style={styles.paragraph}>
                    <Text style={styles.text}>Fats are an essential part of your diet because they are used build some very important parts of your body's functions, such as your hormones; or down to the cellular level, your cell membranes. It is important that you have enough fat in your diet to allow your body maintain its hormonal functions; some of which include managing your metabolism, and your weight.</Text>
                    <Text style={styles.text}>Oftentimes, people misassociate weight gain to an excess of fat in their diet, but fat is actually good for weight management! As a matter of fact, a diet that is lacking in fats, and high in fats can result in greater rates of obesity.</Text>
                    <Text style={styles.text}>Diets that don't have enough fat can lead to problems like:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.italicized}> - increased risk for heart disease</Text>
                        <Text style={styles.italicized}> - vitamin deficiencies</Text>
                        <Text style={styles.italicized}> - excessive appetite</Text>
                        <Text style={styles.italicized}> - mood problems</Text>
                    </View>
                    <Text style={styles.text}>With the exception of the heart disease risk, all of the other mentioned symptoms are closely associated to hormonal imbalances.</Text>
                    <Text style={styles.text}>There are many vitamins <Text style={styles.italicized}>(A, D, E, and K, to name a few)</Text> that depend on fat to be absorbed into the body for use. Your endocrine system, <Text style={styles.italicized}>or hormonal system</Text>, manages your appetite with a variety of hormones that allow various organs to communicate with each other, including:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.italicized}> - the brain</Text>
                        <Text style={styles.italicized}> - the thyroid</Text>
                        <Text style={styles.italicized}> - the stomach</Text>
                    </View>
                    <Text style={styles.text}>If the body doesn't have the "ingredients" to make the hormoes, this causes a disturbance in communication, which could lead to mismanagement of weight and body composition.</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.boldItalicizedUnderline}>A note about the "good" and "bad" sources:</Text>
                        <Text style={styles.text}>Even though we have listed some "good" and "bad" sources, the standards that are used to consider a fat source "good" are:</Text> 
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> - vegetable-sourced,</Text>
                            <Text style={styles.italicized}> - unsaturated</Text>
                            <Text style={styles.italicized}> - are considered "heart-healthy"</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitles}>How fats fit into your goal:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Gaining Mass:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to gain lean mass, your fat calories should make up 15-25% of your total calories. Our algorithm provides you with a fat calorie suggestion of about 20% of your total calories.</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Burning Fat:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to burn fat, your fat calories should make up 30-40% of your total calories. Our algorithm povides you with a fat calorie suggestion of about 35% of your total calories.</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitles}>Foods high in fat:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Good Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Vegetable oils</Text>
                            <Text style={styles.italicized}> • Dairy</Text>
                            <Text style={styles.italicized}> • Nuts and Seeds</Text>
                            <Text style={styles.italicized}> • Fish</Text>
                            <Text style={styles.italicized}> • Lean Poultry</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Bad Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Beef and pork <Text style={styles.italicizedUnderline}>(in large quantities)</Text></Text>
                            <Text style={styles.italicized}> • Lard</Text>
                            <Text style={styles.italicized}> • Shortening</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    titles:{
        fontSize: 30,
        textDecorationLine: 'underline',
        marginBottom: 5,
        alignSelf: 'center'

    },
    subtitles:{
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom: 5,
        marginLeft: 10

    },
    paragraph:{
        width: '90%',
        marginBottom: 10,
        alignSelf: 'center'
    },
    emphasis:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        
    },
    text:{
        fontSize: 20,
        marginVertical: 2,
        lineHeight: 30
    },
    italicized:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
        lineHeight: 25

    },
    italicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        lineHeight: 25

    },
    boldItalicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',

    },
})

AppRegistry.registerComponent(appName, () => Fats);