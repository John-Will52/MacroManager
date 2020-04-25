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
}

export default Colors;
