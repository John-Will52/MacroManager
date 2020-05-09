import {Platform} from 'react-native';
const Colors = {
    background: '#021C44',
    text: 'rgb(0,0,0)',
    boxBackground: '#105DFE',
    borders: '#0AD435',

    titles:'black',
    subtitles: '#ccc',
    text: '#fff',
    button: Platform.OS === 'ios' ? 'white' :'#2068BF',
    button2: Platform.OS === 'ios' ? 'white' :'#D43157',
    navigatingButtons: Platform.OS === 'ios' ? 'white' : '#6FE815',
    navigatingButtonBackground: Platform.OS === 'ios' ? '#6FE815' : 'transparent',
    buttonBackground:Platform.OS === 'ios' ?'#2068BF' : 'transparent',
    buttonBackground2:Platform.OS === 'ios' ?'#D43157' : 'transparent',
    disabledButton:Platform.OS === 'ios' ?'gray' : 'transparent',
    footerButtons:'#5019F3'
}

export default Colors;
