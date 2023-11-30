
/** 13 pages */
let webPages = {
    "login-page-cleared" : 1,
    "login-page" : 2,
    "profile" : 3, 
    "subjects" : 4, 
    "subject-details--current" : 5, 
    "weekly-schedule" : 7, 
    "academic-calendar" : 8, 
    "grades-current" : 9, 
    "grades-previous" : 10, 
    "subject-offerings" : 11, 
    "history" : 12, 
    "subject-details--past" : 6,
    "curriculum" :  13,
    "notifications" : 14 
};

/** 19 pages */
let mobilePages = {
    "login-page-cleared" : 1,
    "login-page" : 2, 
    "sidebar" : 3, 
    "profile--academic-information" : 4, 
    "profile--personal-information" : 5, 
    "subjects" : 6,
    "weekly-schedule" : 7, 
    "subject-details--current:general-info" : 8,
    "subject-details--current:section" : 9, 
    "subject-details--current:summary" : 10, 
    "subject-details--past:general-info" : 11, 
    "academic-calendar" : 12, 
    "grades--current" : 14, 
    "grades--previous" : 13,
    "subject-offerings--hidden-search-filters" : 15, 
    "subject-offerings--shown-search-filters" : 16, 
    "history" : 17, 
    "curriculum" : 18, 
    "notifications--configuration" : 19,
    "notifications--contact-settings" : 20 
};

const getScreenshotSource = (mode, page) => {
    let source;

    if(mode == "WEB") {
        source = "/images/ui-screenshots/web/web(" + webPages[page] + ").png"
    } else if (mode == "MOBILE") {
        source = "/images/ui-screenshots/mobile/mobile(" + mobilePages[page] + ").png"
    } else {
        throw Error("Unknown mode `" + mode + "`")
    }

    return source; 
}

export { webPages, mobilePages, getScreenshotSource };