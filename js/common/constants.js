import {Dimensions, StatusBar, Platform} from 'react-native';
import {moderateScale} from './scaling';

const {height, width} = Dimensions.get("window");

export const stringConstants = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
    RED: '#ED615A',
    BLUE: '#4682B4',
    YELLOW: '#a0fd98',
    LIGHT_YELLOW: '#c7ffc2',
    GREEN: '#1F860D',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#767676',
    DARK_GREY: '#353B47',
    ASH: '#BFBFBF',
    ASH_TRANSPARENT: 'rgba(128,128,128,0.6)',
    BASE_LINE_FONT_SIZE: moderateScale(16),
};
