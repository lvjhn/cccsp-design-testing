import { getScreenHeight, getScreenWidth } from "./screenSize";

export function defineForMobile() {
    const baseWidth = 281; 
    const baseHeight = 500;

    let actualWidth = baseWidth; 
    let actualHeight = baseHeight; 

    let screenWidth = getScreenWidth();

    // handle devices with widths less than target screen size for mobile
    if(screenWidth <= 420) {
        actualWidth  = 300; 
        actualHeight = 533;
    } else {
        actualWidth  = 420; 
        actualHeight = 746;
    }

    return {
        width  : actualWidth, 
        height : actualHeight,
        offsetX : actualWidth / baseWidth,   
        offsetY : actualHeight / baseHeight,
        scaleFactorX : actualWidth / baseWidth,
        scaleFactorY : actualHeight / baseHeight
    }
}

export function defineForWeb() {
    return {
        width  : 1024, 
        height : 576 * 0.9  
    }; 
}

