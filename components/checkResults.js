import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';

// AppRegistry is the JS entry point for all ReactNative apps. 

export default class CheckResults extends Component{
    constructor(props) {
        super()

    }



    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Is this information correct?</Text>
                    <View style={styles.horizontalButtonContainer}>
                        {this.props.children}
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Name: {this.props.name}</Text>
                    <Text style={styles.text}>Sex: {this.props.sex}</Text>
                    <Text style={styles.text}>Goal: {this.props.goal} weight</Text>
                    <Text style={styles.text}>Units: You measure with the {this.props.units} system</Text>
                    <Text style={styles.text}>Height: {this.props.height}</Text>
                    <Text style={styles.text}>Weight: {this.props.weight}</Text>
                    <Text style={styles.text}>BMI: {parseInt(this.props.BMI)}</Text>
                    <Text style={styles.text}>Daily carb calories:</Text>
                    <Text style={styles.numbers}> - {this.props.allottedCarbs} calories</Text>
                    <Text style={styles.text}>Daily protein calories:</Text>
                    <Text style={styles.numbers}> - {this.props.allottedProteins} calories</Text>
                    <Text style={styles.text}>Daily fat calories:</Text>
                    <Text style={styles.numbers}> - {this.props.allottedFats} calories</Text>
                    <Text style={styles.text}>Daily calorie total is:</Text>
                    <Text style={styles.numbers}> - {this.props.allottedTotal} calories</Text>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    text:{
        fontSize: 30,
        textAlign:'left',
        color: Colors.text,
    },
    title:{
        fontSize: 30,
        textAlign:'left',
        color: Colors.titles,
    },
    numbers:{
        fontSize: 25,
        textAlign:'left',
        fontWeight: 'bold',
        color: Colors.text
    },
    info:{
        borderColor: Colors.borders,
        backgroundColor: 'white',
        borderWidth: 2,
        width: '95%',
        alignSelf: 'center',
        padding: 5,
        marginTop: 10,
      },
    horizontalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    horizontalButtonBox:{
        width:'30%'
    },
    container: {
        flex: 1,
        padding: 15,
        borderColor: Colors.borders,
        backgroundColor: Colors.boxBackground,
        borderWidth: 3,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 20,
      },

    


}); 

AppRegistry.registerComponent(appName, () => CheckResults);