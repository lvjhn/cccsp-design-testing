import { useAppStore } from "../stores/useAppStore";
import { ibtFlowMobile, ibtFlowWeb } from '../assets/data/ibt_flow';
import { getPlatformName } from "../helpers/platformDetector";


// by convention, composable function names start with "use"
export function useCurrentScreenshot() {
    let appStore = useAppStore();

    return {
        getCurrentPageDescription() {
            let pageName = appStore.getCurrentPageName();


            if(getPlatformName() == "web") {
                return ibtFlowWeb[pageName].description;
            }
            else if(getPlatformName() == "mobile") {
                return ibtFlowMobile[pageName].description;
            }
            else        
                throw Error("Unknown mode.");
        }, 
        getCurrentPageTaskMessage() {
            let pageName = appStore.getCurrentPageName();

            if(getPlatformName() == "web") 
                return ibtFlowWeb[pageName].taskMessage;
            else if(getPlatformName() == "mobile")
                return ibtFlowMobile[pageName].taskMessage;
            else 
                throw Error("Unknown mode.");
        }, 
        shouldRatePage() {
            let pageName = appStore.getCurrentPageName();

            if(getPlatformName() == "web") 
                return ibtFlowWeb[pageName].hasRatings;
            else if(getPlatformName() == "mobile")
                return ibtFlowMobile[pageName].hasRatings;
            else 
                throw Error("Unknown mode.");
        }
    }
}
  