import {Platform} from 'react-native';
const Colors = {
    background: '#01012b',
    boxBackground: '#005678',
    borders: '#ff2a6d',
    
    titles:'#d1f7ff',
    subtitles: '#ff2a6d',
    text: '#01012b',
    button: Platform.OS === 'ios' ? 'white' :'#05d9e8',
    button2: Platform.OS === 'ios' ? 'white' :'#ff2a6d',
    navigatingButtons: Platform.OS === 'ios' ? 'white' : '#005678',
    navigatingButtonBackground: Platform.OS === 'ios' ? '#005678' : 'transparent',
    buttonBackground:Platform.OS === 'ios' ?'#05d9e8' : 'transparent',
    buttonBackground2:Platform.OS === 'ios' ?'#ff2a6d' : 'transparent',
    disabledButton:Platform.OS === 'ios' ?'gray' : 'transparent',
    footerButtons:'#d1f7ff'
}

export default Colors;
