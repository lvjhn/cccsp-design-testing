import { defineStore } from 'pinia';
import { UI_Clickables } from '../assets/data/ui_clickables';
import { ibtFlowMobile, ibtFlowWeb } from '../assets/data/ibt_flow';
import { getPlatformName } from '../helpers/platformDetector';

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const useAppStore = defineStore("app-store", {
    persist: true, 
    state: () => ({
        _init: false,
        uuid: uuidv4(),

        /**
         * Consent Form 
         */
        consentForm : {
            age: 18, 
            gender: "male", 
            course: "", 
            year: 1
        }, 

        /** 
         * Mode
         */
        mode: "mobile", 

        /** 
         * Issues-Based Testing
         */
        ibt: {
            currentPageIndex: 0,
            currentStep: "<start>",
            currentStepNo: 1,
            nextStepEnabled: true,
            pages: {
                web: {}, 
                mobile: {}
            }
        }, 

        scrollTop: 0, 

        /** 
         * Self Report Testing 
         */
        srt: {
            0 : 3, 
            1 : 3, 
            2 : 3, 
            3 : 3, 
            4 : 3, 
            5 : 3, 
            6 : 3, 
            7 : 3, 
            8 : 3, 
            9 : 3
        }
    }),
    getters: {
        getConsentFormInputs(state) {
            return state.consentForm;
        }, 
        getMode(state) {
            return state.mode;
        }
    },
    actions: {
        init() {
            this._init = true;

            if(localStorage.getItem("app-store") != null)   
                return; 

            /** 
             *  Set Up IBT
             */
            for(let pageName in ibtFlowWeb) {
                let context = this.ibt.pages.web; 
                context[pageName] = {
                    ratings : {
                        understandability: 3,
                        intuitiveness: 3
                    },
                    qai : {
                        questions: "", 
                        issues: ""
                    }
                } 
            }

            for(let pageName in ibtFlowMobile) {
                let context = this.ibt.pages.mobile; 
                context[pageName] = {
                    ratings : {
                        understandability: 4,
                        intuiveness: 4
                    }, 
                    qai :  {
                        questions: "", 
                        issues: ""
                    }
                } 
            }
        },

        // Consent Form
        setConsentFormAge(age) {    
            this.consentForm.age = age; 
        },
        setConsentFormGender(gender) {
            this.consentForm.gender = gender; 
        }, 
        setConsentFormCourse(course) {
            this.consentForm.course = course;
        },
        setConsentFormYear(year) {
            this.consentForm.year = year; 
        }, 

        // Mode
        setMode(mode) {
            this.consentForm.mode = mode; 
        }, 

        // IBT 
        gotoNextIBTPage() {
            this.ibt.currentPageIndex += 1;
        }, 
        getCurrentPageName() {
            return (
                Object.keys(UI_Clickables[getPlatformName()])[this.ibt.currentPageIndex]
            );
        }, 
        setCurrentStep(step) {
            console.log("Setting current step to " + step);
            this.ibt.currentStep = step;
        },
        setCurrentStepNo(stepNo) {
            this.ibt.currentStepNo = stepNo;
        },
        setNextStep() {
            this.setCurrentStepNo(this.ibt.currentStepNo + 1);
        },
        resetSteps() {
            this.setCurrentStepNo(1); 
            this.setCurrentStep("<start>");
        },

        /** 
         * Scrolling
         */
        setScrollTop(scrollTop) {
            this.scrollTop = scrollTop;
        }
    }
});
