import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
import Fats from './fats';
import Carbs from './carbs';
import Protein from './protein';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class MacroExplanations extends Component{
    constructor(props) {
        super()
        this.state = {
           macro: null
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    showMacroInfo = () =>{
        if(this.state.macro == "Fats"){
            return(
                <View>
                    <Fats></Fats>
                    <View style={styles.footerButtonContainer}>
                        <View style={styles.footerButton1}>
                            <Button color={Colors.borders} title="Protein" onPress={()=>this.setState({macro:"Protein"})}></Button>
                        </View>
                        <View style={styles.footerButton2}>
                            <Button color={Colors.borders} title="Carbs" onPress={()=>this.setState({macro: "Carbs"})}></Button>
                        </View>
                    </View>
                </View>
            )
        }
        if(this.state.macro == "Carbs"){
            return(
                <View>
                    <Carbs></Carbs>
                    <View style={styles.footerButtonContainer}>
                        <View style={styles.footerButton1}>
                            <Button color={Colors.borders} title="Fats" onPress={()=>this.setState({macro:"Fats"})}></Button>
                        </View>
                        <View style={styles.footerButton2}>
                            <Button color={Colors.borders} title="Protein" onPress={()=>this.setState({macro: "Protein"})}></Button>
                        </View>
                    </View>
                </View>
            )
        }
        if(this.state.macro == "Protein"){
            return(
                <View>
                    <Protein></Protein>
                    <View style={styles.footerButtonContainer}>
                        <View style={styles.footerButton1}>
                            <Button color={Colors.borders} title="Carbs" onPress={()=>this.setState({macro: "Carbs"})}></Button>
                        </View>
                        <View style={styles.footerButton2}>
                            <Button color={Colors.borders} title="Fats" onPress={()=>this.setState({macro:"Fats"})}></Button>
                        </View>
                    </View>
                </View>
            )
        }
        if(this.state.macro == null){
            return(
                <View style={styles.buttonContainer}>
                    <Button color={Colors.borders} title="Fats" onPress={()=>this.setState({macro:"Fats"})}></Button>
                    <Button color={Colors.borders} title="Carbs" onPress={()=>this.setState({macro: "Carbs"})}></Button>
                    <Button color={Colors.borders} title="Protein" onPress={()=>this.setState({macro:"Protein"})}></Button>
                </View>
            )
        }
    }
 


    render(){
        return(
            this.showMacroInfo()
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'flex-start'
    },
    footerButtonContainer:{
        flexDirection:'row',
        alignSelf: 'flex-end',
        width:'100%'
    },
    footerButton1:{
        alignSelf: 'flex-start',
        width:'50%'

    },
    footerButton2:{
        alignSelf: 'flex-end',
        width:'50%'
    },
   
})

AppRegistry.registerComponent(appName, () => MacroExplanations);