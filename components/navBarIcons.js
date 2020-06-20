import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import {name as appName} from '../app.json';
import Colors from '../styling/colors';
// AppRegistry is the JS entry point for all ReactNative apps. 

export default class NavBarIcons extends Component{
    constructor(props) {
        super()
        this.state = {
        }
    }



    render(){
        return(
            <View style={styles.navBar}>
                <TouchableHighlight style={this.props.currentPage == 0 ? selected.navBox : styles.navBox} activeOpacity={.25} underlayColor={Colors.background} onPress={() => this.props.changePage(0)}>
                    <View>
                        <Image style={styles.icon} source={this.props.currentPage == 0 ? require('../AppIcons/countersSelectedIcon.png') : require('../AppIcons/countersUnselectedIcon.png')}></Image>
                        <Text style={this.props.currentPage == 0 ? selected.caption : styles.caption}>Counters</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={this.props.currentPage == 1 ? selected.navBox : styles.navBox} activeOpacity={.25} underlayColor={Colors.background} onPress={() => this.props.changePage(1)}>
                    <View>
                        <Image style={styles.icon} source={this.props.currentPage == 1 ? require('../AppIcons/saveMealSelectedIcon.png') : require('../AppIcons/saveMealUnselectedIcon.png')}></Image>
                        <Text style={this.props.currentPage == 1 ? selected.caption : styles.caption}>Save</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={this.props.currentPage == 2 ? selected.navBox : styles.navBox} activeOpacity={.25} underlayColor={Colors.background} onPress={() => this.props.changePage(2)}>
                    <View>
                        <Image style={styles.icon} source={this.props.currentPage == 2 ? require('../AppIcons/eatMealSelectedIcon.png') : require('../AppIcons/eatMealUnselectedIcon.png')}></Image>
                        <Text style={this.props.currentPage == 2 ? selected.caption : styles.caption}>Eat</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={this.props.currentPage == 3? selected.navBox : styles.navBox} activeOpacity={.25} underlayColor={Colors.background} onPress={() => this.props.changePage(3)}>
                    <View>
                        <Image style={styles.icon} source={this.props.currentPage == 3 ? require('../AppIcons/editSelectedIcon.png') : require('../AppIcons/editUnselectedIcon.png')}></Image>
                        <Text style={this.props.currentPage == 3 ? selected.caption : styles.caption}>Edit</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={this.props.currentPage == 4 ? selected.navBox : styles.navBox} activeOpacity={.25} underlayColor={Colors.background} onPress={() => this.props.changePage(4)}>
                    <View>
                        <Image style={styles.icon} source={this.props.currentPage == 4 ? require('../AppIcons/questionSelectedIcon.png') : require('../AppIcons/questionUnselectedIcon.png')}></Image>
                        <Text style={this.props.currentPage == 4 ? selected.caption : styles.caption}>FAQs</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )

        
    }
}

const styles = StyleSheet.create({
    navBar:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        justifyContent:'flex-end',


    },
    navBox:{
        backgroundColor: '#d1f7ff',
        width: '20%',
        alignContent: 'center',
        padding: 5,
        borderRadius: 10,
    },
    icon:{
        height: 45,
        width: 45,
        alignSelf: 'center'
    },
    caption:{
        alignSelf: 'center'

    }
  });
  const selected = StyleSheet.create({
    navBar:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '100%',
        borderRadius: 10,
        justifyContent:'flex-end',


    },
    navBox:{
        // backgroundColor: Colors.boxBackground,
        backgroundColor: Colors.background,
        width: '20%',
        alignContent: 'center',
        padding: 5,


        
    },
    icon:{
        height: 45,
        width: 45,
        alignSelf: 'center'
    },
    caption:{
        alignSelf: 'center',
        color: Colors.borders


    }
  });

AppRegistry.registerComponent(appName, () => NavBarIcons);