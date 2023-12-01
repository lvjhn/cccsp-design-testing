<script setup> 
    import { useAppStore } from "@/stores/useAppStore.js"; 
    import { useCurrentScreenshot } from "@/composables/current-screenshot.js"; 
    import { getPlatformName } from "@/helpers/platformDetector.js";

    let appStore = useAppStore();
    let pageName = appStore.getCurrentPageName();
    let mode = getPlatformName(); 

    console.log(appStore.ibt.pages[mode]);

    let qaiModel = appStore.ibt.pages[mode][pageName].qai;

</script> 

<template> 
    <div class="question-or-problems-component"> 
        <br />
        <b>Questions</b>
        <br /> 
        <textarea 
            v-model="qaiModel.questions"
            placeholder="Do you have any questions regarding the page?"
        >
        </textarea>
        <br />
        <b>Issues</b>
        <br />
        <textarea 
            v-model="qaiModel.issues"
            placeholder="Do you have any issues about the page? Are there anything confusing about the page? "
        >
        <br />
        </textarea>
        <br /> 
    </div>
</template>

<style scoped> 
    textarea {
        width: 99%;
        border-radius: 5px; 
        height: 50px;
        overflow-y: scroll;
        padding: 10px;
    }
</style>