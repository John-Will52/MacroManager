import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet,} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Carbs extends Component{
    constructor(props) {
        super()

    }

    // THis is the area that you put your JS logic for functions and stuff at.



    render(){
        return(
            <View>
                <Text style={styles.titles}>Carbs</Text>
                <Text style={styles.subtitles}>How your body uses carbs:</Text>
                <View style={styles.paragraph}>
                    <Text style={styles.text}>Carbs are your body's version of gasoline. They give your body the energy it needs to do everything from working out, to sitting at work or school. Carbs are necessary for life, but they often are consumed in excess, which leads to people building body fat.</Text>
                    <Text style={styles.text}>Carbs are meant to power us through our daily lives, but many of us eat foods that are very high in them, and lead very sedentary lives, that keep us from burning them off. This combination can lead to a variety of diseases including diabetes and obesity. It is very important to monitor your carb intake, while trying not to cut them out of your diet entirely.</Text>
                    <Text style={styles.text}>In today's environment, sugar comes in many forms, and with many names, such as:</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.italicizedUnderline}> - corn syrup</Text>
                        <Text style={styles.italicizedUnderline}> - high-fructose corn syrup</Text>
                        <Text style={styles.italicizedUnderline}> - agave</Text>
                        <Text style={styles.italicizedUnderline}> - honey</Text>
                        <Text style={styles.italicizedUnderline}> - most ingredients ending in -ose (like fructose, glucose, galactose, lactose)</Text>
                    </View>
                    <Text style={styles.text}>Your body tends to treat all of these the same, when it comes to digestion.</Text>
                    <Text style={styles.text}>Along with that, there are artificial sweeteners that make claims to providing "0 calories", but come with their own risks. Unless you have dietary restrictions that require you to limit your sugar consumption, <Text style={styles.emphasis}>and you have a doctor's recommendation</Text>, you should avoid these as much as possible.</Text>
                    <View style={styles.paragraph}>
                        <Text style={styles.boldItalicizedUnderline}>A note about the "good" and "bad" sources:</Text>
                            <Text style={styles.text}>Even though we have listed some "good" and "bad" sources, the standards that are used to consider a carb source "good" are:</Text> 
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> - well-balanced with the other macronutrients</Text>
                            <Text style={styles.italicized}> - low on added sugars</Text>
                            <Text style={styles.italicized}> - are complex carbs</Text>
                            <Text style={styles.italicized}> - they come with some nutritional value</Text> 
                        </View>
                        <Text style={styles.text}>This doesn't mean that we are recommending you against the "bad" sources, the bad sources will more than likely include all the snacks that we all love. We recommend that your are mindful of how much of the "bad" sources that you eat, and make sure to balance their intake with your other macronutrients.</Text>
                    </View>
                </View>
                <Text style={styles.subtitles}>How carbs fit into your goal:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Gaining Mass:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to gain lean mass, your carb calories should make up 40-60% of your total calories. This, of course, comes with the condition of working out. The large percentage of carbs, along with workouts (usually weightlifting) should allow you to stack muscle pretty quickly. Our algorithm provides you with a carb calorie suggestion of about 50% of your total calories. By doing this, it gives you enough room to change your numbers to fine-tune your needs, as well as giving you some space for error (going too far over or under your recommended daily amounts) without causing too much damage to your progress.</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Burning Fat:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to burn fat, your carb calories should make up 10-30% of your total calories. This is meant to give your body enough energy to do its usual activities, without making you feel lethargic and worn-out. Our algorithm povides you with a carb calorie suggestion of about 20% of your total calories. By doing this, it gives you enough room to change your numbers to fine-tune your needs, as well as giving you some space for error (going too far over or under your recommended daily amounts) without causing too much damage to your progress.</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitles}>Foods high in carbs:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Good Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Fruits and Vegetables</Text>
                            <Text style={styles.italicized}> • Quinoa</Text>
                            <Text style={styles.italicized}> • Oats</Text>
                            <Text style={styles.italicized}> • Buckwheat (it is gluten-free)</Text>
                            <Text style={styles.italicized}> • Sweet Potatoes</Text>
                            <Text style={styles.italicized}> • Beets</Text>
                            <Text style={styles.italicized}> • Beans</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Bad Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Processed foods</Text>
                            <View style={styles.paragraph}>
                                <Text style={styles.italicized}>    - Toaster pastries</Text>
                                <Text style={styles.italicized}>    - Chips</Text>
                                <Text style={styles.italicized}>    - Cakes</Text>
                                <Text style={styles.italicized}>    - Ice cream</Text>
                                <Text style={styles.italicized}>    - Candy</Text>
                            </View>
                            <Text style={styles.italicized}> • Rice</Text>
                            <Text style={styles.italicized}> • Corn</Text>
                            <Text style={styles.italicized}> • Sugary drinks</Text>
                            <View style={styles.paragraph}>
                                <Text style={styles.italicized}>    - Sodas</Text>
                                <Text style={styles.italicized}>    - Juices</Text>
                            </View>
                            <Text style={styles.italicized}> • Flour noodles</Text>
                            <Text style={styles.italicized}> • Bread</Text>

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
    text:{
        fontSize: 20,
        marginVertical: 2,
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
    italicized:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
    },
    italicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '300',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    boldItalicizedUnderline:{
        fontSize: 20,
        marginVertical: 2,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',

    },
})

AppRegistry.registerComponent(appName, () => Carbs);