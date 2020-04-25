import {Platform} from 'react-native';
const Colors = {
    background: 'rgb(66,133,244)',
    text: 'rgb(0,0,0)',
    boxBackground: 'rgb(175,175,175)',

    primary:'#dd523a',
    secondary:'#aa7589',
    tertiary:'black',
    titles:'black',
    subtitles: '#ccc',
    button1: Platform.OS === 'ios' ? 'white' :'blue',
    button2: Platform.OS === 'ios' ? 'white' : 'red',
    navigatingButtons: Platform.OS === 'ios' ? 'white' : 'purple',
    operationButtons: Platform.OS === 'ios' ? 'white' : 'orange',
    buttonBackground1:Platform.OS === 'ios' ?'blue' : 'transparent',
    buttonBackground2:Platform.OS === 'ios' ?'red' : 'transparent',
    navigationButtonBackground:Platform.OS === 'ios' ?'purple' : 'transparent',
    operationButtonBackground:Platform.OS === 'ios' ?'orange' : 'transparent',
}

export default Colors;
