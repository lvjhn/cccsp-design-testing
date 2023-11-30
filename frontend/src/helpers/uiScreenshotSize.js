import { getScreenHeight, getScreenWidth } from "./screenSize";

export function defineForMobile() {
    const targetWidth = 420; 
    const baseHeight = 746.67;

    let actualWidth = targetWidth; 
    let actualHeight = baseHeight; 

    let screenWidth = getScreenWidth();

    // handle devices with widths less than target screen size for mobile
    if(screenWidth <= targetWidth) {
        let scaleFactor;

        actualWidth  = screenWidth - 30; 
        scaleFactor = actualWidth / targetWidth;
        actualHeight = baseHeight * scaleFactor;
    } 

    return {
        width  : actualWidth, 
        height : actualHeight
    }
}

export function defineForWeb() {
    return {
        width  : 1024, 
        height : 576
    }; 
}