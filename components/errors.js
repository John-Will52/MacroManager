import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class Errors extends Component{
    constructor(props) {
        super()
        this.state = {
            // ErrorsVariable:'it displays by using state.var'
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.errorMessage}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'yellow',
        marginVertical: 5,
        width: '100%'
    }
})

AppRegistry.registerComponent(appName, () => Errors);