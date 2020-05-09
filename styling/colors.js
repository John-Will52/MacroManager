import {Platform} from 'react-native';
const Colors = {
    background: '#00101D',
    boxBackground: '#094C7D',
    borders: '#FD4E4F',

    
    titles:'#FD4E4F',
    subtitles: '#FD4E4F',
    text: '#FD4E4F',
    button: Platform.OS === 'ios' ? 'white' :'#004EF1',
    button2: Platform.OS === 'ios' ? 'white' :'#FD4E4F',
    navigatingButtons: Platform.OS === 'ios' ? 'white' : '#FD4E4F',
    navigatingButtonBackground: Platform.OS === 'ios' ? '#FD4E4F' : 'transparent',
    buttonBackground:Platform.OS === 'ios' ?'#004EF1' : 'transparent',
    buttonBackground2:Platform.OS === 'ios' ?'#FD4E4F' : 'transparent',
    disabledButton:Platform.OS === 'ios' ?'gray' : 'transparent',
    footerButtons:Platform.OS === 'ios' ?'#99F9F3': '#FD4E4F'
}

export default Colors;
