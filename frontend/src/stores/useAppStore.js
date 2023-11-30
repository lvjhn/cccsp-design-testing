import { defineStore } from 'pinia'; 

export const useAppStore = defineStore("app-store", {
    persist: true, 
    state: () => ({
        _init: false,

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
        mode: "mobile"
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

    


    }
});
