import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Button} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class NavBar extends Component{
    constructor(props) {
        super()
        this.state = {
            // NavBarVariable:'it displays by using state.var'
        }
    }

    // THis is the area that you put your JS logic for functions and stuff at.
    NavBarFunction = () => {

        this.setState({NavBarVariable:''})
   
     }


    render(){
        if(this.props.currentPage === 0){
            return(
                <View style={styles.navBar}>
                    <View style={styles.buttons}>
                        <Button title="Save a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Eat a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
                    </View>
                </View>
            );
        }
        if(this.props.currentPage === 1){
            return(
                <View style={styles.navBar}>
                    <View style={styles.buttons}>
                        <Button title="Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Eat a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(2)}></Button>
                    </View>
                </View>
            );
        }
        if(this.props.currentPage === 2){
            return(
                <View style={styles.navBar}>
                    <View style={styles.buttons}>
                        <Button title="Save a Snack or Meal" color={Colors.navigatingButtons} onPress={() => this.props.changePage(1)}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    </View>
                </View>
            );
        }
        if(this.props.currentPage === 3){
            return(
                <View style={styles.navBar}>
                    <View style={styles.footerButtons}>
                        <Button title="Back to Calorie Counter" color={Colors.navigatingButtons} onPress={() => this.props.changePage(0)}></Button>
                    </View>
                </View>
            );
        }

        
    }
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2


    },
    buttons: {
        backgroundColor: Colors.navigatingButtonBackground,
        width: '50%',
        // marginTop: 1
        // borderColor: 'black',
        // borderWidth: 1,
        // padding: 5,
      },
      footerButtons: {
        backgroundColor: Colors.navigatingButtonBackground,
        width: '100%',
        // marginTop: 1
        // borderColor: 'black',
        // borderWidth: 1,
        // padding: 5,
      },
  });

AppRegistry.registerComponent(appName, () => NavBar);