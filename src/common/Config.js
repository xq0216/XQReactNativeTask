
//用于存放一些公共参数，将其暴露在全局作用下

import { Platform, Dimensions } from 'react-native';

const screenW = Dimensions.get('window').width;  
const screenH = Dimensions.get('window').height; 


const Config = {
    width: screenW,
    height: screenH,
    platform: Platform.OS == 'ios' ? "ios" : android
}

global.config = Config;
