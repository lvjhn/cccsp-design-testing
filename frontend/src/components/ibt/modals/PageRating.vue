<script setup> 
    import { useAppStore } from "@/stores/useAppStore.js"; 
    import { useCurrentScreenshot } from "@/composables/current-screenshot.js"; 
    import { getPlatformName } from "@/helpers/platformDetector.js";

    let appStore = useAppStore();
    let pageName = appStore.getCurrentPageName();
    let mode = getPlatformName(); 

    console.log(appStore.ibt.pages[mode]);

    let rateModel = appStore.ibt.pages[mode][pageName].ratings;

</script> 

<template> 
    <div class="page-rating-component"> 
        <ul> 
            <li>
                <b>In Terms of Understability</b>
                <br />
                <ul class="rating"> 
                    <li>
                        <input type="radio" v-model="rateModel.understandability" value="5"/>
                        Highly Acceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.understandability" value="4"/> 
                        Acceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.understandability" value="3"/> 
                        Neutral
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.understandability" value="2"/> 
                        Unacceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.understandability" value="1"/> 
                        Highly Unacceptable
                    </li>
                </ul>
            </li>
            <br />
            <li>
                <b>In Terms of Intuitiveness</b>
                <br />
                <ul class="rating"> 
                    <li>
                        <input type="radio" v-model="rateModel.intuitiveness" value="5"/> 
                        Highly Acceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.intuitiveness" value="4"/> 
                        Acceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.intuitiveness" value="3"/> 
                        Neutral
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.intuitiveness" value="2"/> 
                        Unacceptable
                    </li>
                    <li>
                        <input type="radio" v-model="rateModel.intuitiveness" value="1"/> 
                        Highly Unacceptable
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped> 
    .rating li {
        list-style: none;
    }
</style>