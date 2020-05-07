import {Platform} from 'react-native';
const Colors = {
    background: 'rgb(0,67,170)',
    text: 'rgb(0,0,0)',
    boxBackground: 'rgb(175,175,175)',

    primary:'#dd523a',
    secondary:'#aa7589',
    tertiary:'black',
    titles:'black',
    subtitles: '#ccc',
    button: Platform.OS === 'ios' ? 'white' :'rgb(77,144,255)',
    button2: Platform.OS === 'ios' ? 'white' :'rgb(26,93,204)',
    buttonBackground:Platform.OS === 'ios' ?'rgb(77,144,255)' : 'transparent',
    buttonBackground2:Platform.OS === 'ios' ?'rgb(26,93,204)' : 'transparent',

    navigatingButtons: Platform.OS === 'ios' ? 'white' : 'transparent',
    disabledButton:Platform.OS === 'ios' ?'gray' : 'transparent',
    navigationButtonBackground:Platform.OS === 'ios' ?'transparent' : 'transparent',
    footerButtons:'rgb(6,43,184)'
    // footerButtons: Platform.OS === 'ios' ? 'rgb(6,43,184)' : 'transparent'
}

export default Colors;
