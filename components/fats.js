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
                    <Text style={styles.text}></Text>
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
                            <Text style={styles.text}></Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Burning Fat:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}></Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitles}>Foods high in fat:</Text>
                <View style={styles.paragraph}>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Good Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}></Text>
                        </View>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.emphasis}>Bad Sources:</Text>
                        <View style={styles.paragraph}>
                            <Text style={styles.text}></Text>
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

AppRegistry.registerComponent(appName, () => Fats);