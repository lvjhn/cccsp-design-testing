<script setup>
    import { ref } from 'vue';
    import { defineForMobile, defineForWeb } from '../../helpers/uiScreenshotSize';
    import { useAppStore } from '../../stores/useAppStore';

    let appStore = useAppStore();

    let props = defineProps([ 
        "src", 
        "mode",
        "clickable", 
        "nextScreenshot"
    ])

    let screenshotWidth = ref(0); 
    let screenshotHeight = ref(0); 
    let screenshotOffsetX = ref(1);
    let screenshotOffsetY = ref(1);
    let screenshotScaleFactorX = ref(1);
    let screenshotScaleFactorY = ref(1);

    if(props.mode == "mobile") {
        const { 
            width, height, offsetX, offsetY,
            scaleFactorX, scaleFactorY
        } = defineForMobile(); 
        
        screenshotWidth = width; 
        screenshotHeight = height; 
        
        screenshotOffsetX = offsetX;
        screenshotOffsetY = offsetY;
        
        screenshotScaleFactorX = scaleFactorX;
        screenshotScaleFactorY = scaleFactorY;
    
    } else if (props.mode == "web") {
        const { width, height } = defineForWeb(); 
        screenshotWidth = width; 
        screenshotHeight = height; 
    
        screenshotOffsetX = 1;
        screenshotOffsetY = 0.9;
        
        screenshotScaleFactorX = 1;
        screenshotScaleFactorY = 1;
    
    } else {
        alert("Unknown mode.")
    }

    function handleInvalidAreaClicked() {
       alert('Invalid area clicked/tapped for task. You can still try again.');
    }
    
    function handleCorrectAreaClicked() {
       console.log("Correct area clicked!");
       appStore.gotoNextIBTPage();
    }
    
</script> 

<template> 
    <div class="clickable-screenshot-component ">
        <div class="screenshot center-fixed">
            <img 
                :src="src" 
                :width="screenshotWidth" 
                :height="screenshotHeight"
                @click="handleInvalidAreaClicked()"
            />
        </div>
        <div 
            class="overlay center-fixed"
            :style="{
                'background-color' : 'transparent', 
                'width' : screenshotWidth + 'px',
                'height'  : screenshotHeight + 4 + 'px'
            }"    
        > 
            <div 
                class="clickable"
                :style="{
                    'opacity' : 0.8, 
                    'marginLeft' : (clickable[0] * screenshotOffsetX) + 'px',
                    'marginTop' : (clickable[1] * screenshotOffsetY) + 'px', 
                    'width' : (clickable[2] * screenshotScaleFactorX) + 'px', 
                    'height' : (clickable[3] * screenshotScaleFactorY) + 'px'   
                }"

                @click="handleCorrectAreaClicked()"
            > 
                &nbsp; 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .center-fixed {
        background-color: transparent;
        border: none;
        padding: 0px;
        margin: 0px;
        width: auto;
        height: auto;
        max-height: 100%;
    }

   

   
</style>