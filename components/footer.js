import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Footer extends Component{
    constructor(props) {
        super()
        this.state = {
            // footerVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.


    render(){
        return(
            <View style={styles.footer}>
                <View style={styles.buttons}>
                    <Button title="Edit Info" color={Colors.footerButtons} onPress={() => this.props.changePage(2)}></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title="FAQs" color={Colors.footerButtons} onPress={() => this.props.changePage(1)}></Button>
                </View>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        marginTop: 20,
        height: 35,
        // borderColor: 'black',
        // borderWidth:1,
        justifyContent: 'space-evenly'


    },
    buttons: {
        // backgroundColor: 'transparent',
        width: '50%',

      },
  });

AppRegistry.registerComponent(appName, () => Footer);