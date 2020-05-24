import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet,} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Protein extends Component{
    constructor(props) {
        super()

    }

    // THis is the area that you put your JS logic for functions and stuff at.



    render(){
        return(
            <View>
                <Text style={styles.titles}>Protein</Text>
                <Text style={styles.subtitles}>How your body uses protein:</Text>
                <View style={styles.paragraph}>
                    <Text style={styles.text}>Protein is an essential ingredient to any part that makes you "you!" Not only is protein used as a building block for your body's physical appearance, but it also keeps your body working, with enzymes. To simplify what enzymes are, they are your body's chemists.</Text>
                    <Text style={styles.text}>Therefore, it goes without saying that you are in <Text style={styles.emphasis}>constant</Text> need for protein. Another great thing about protein, is that your body actually burns calories while breaking it down, with helps with preventing obesity.</Text>
                    <Text style={styles.text}>Protein is found in its greatest quantities in meat, but certain vegetables carry a large percentage of their calories as protein calories.</Text> 
                    <Text style={styles.text}>However, because plant proteins are often not "complete", or <Text style={styles.italicized}>don't contain all 8 or 9 <Text style={styles.italicizedUnderline}>(sources clash about the number)</Text> of the essential amino acids</Text>, it can leave people who follow a vegetarian or vegan diet lacking, which can lead to a variety of problems ranging from hair/skin/nail problems, to <Text style={styles.emphasis}>organ damage</Text> and <Text style={styles.emphasis}>weakened immunity</Text>.</Text>
                </View>
                <Text style={styles.subtitles}>How protein fits into your goal:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Gaining Mass:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to gain lean mass, your protein calories should make up 25-35%% of your total calories. Our algorithm provides you with a protein calorie suggestion of about 30% of your total calories.</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Burning Fat:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}>If you are trying to gain lean mass, your protein calories should make up 40-50% of your total calories. Our algorithm provides you with a protein calorie suggestion of about 45% of your total calories.</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitles}>Foods high in protein:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Good Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Fish</Text>
                            <Text style={styles.italicized}> • Lean, unprocessed red meat</Text>
                            <Text style={styles.italicized}> • Lean poultry</Text>
                            <Text style={styles.italicized}> • Eggs</Text>
                            <Text style={styles.italicized}> • Greek yogurt</Text>
                            <Text style={styles.italicized}> • Nuts and Seeds</Text>
                            <Text style={styles.italicized}> • Dairy</Text>
                            <Text style={styles.italicized}> • Protein shakes</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Bad Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Processed meats</Text>
                            <Text style={styles.italicized}> • Fast food</Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Vegan/Vegetarian Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.italicized}> • Beans and Lentils</Text>
                            <Text style={styles.italicized}> • Quinoa</Text>
                            <Text style={styles.italicized}> • Spinach</Text>
                            <Text style={styles.italicized}> • Broccoli</Text>
                            <Text style={styles.italicized}> • Chia Seed</Text>
                            <Text style={styles.italicized}> • Spirulina</Text>
                            <Text style={styles.italicized}> • Edamame</Text>
                            <Text style={styles.italicized}> • Green peas</Text>
                            <Text style={styles.italicized}> • Amaranth</Text>
                            <Text style={styles.italicized}> • Vegan protein shakes</Text>

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

AppRegistry.registerComponent(appName, () => Protein);