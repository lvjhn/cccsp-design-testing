<script setup> 
   
    import ClickableScreenshot from "./ClickableScreenshot.vue";
    
    import { getScreenshotSource } from "@/assets/data/page_map.js";
    import { isMobile, getPlatformName } from "@/helpers/platformDetector.js"; 
    import { UI_Clickables } from '@/assets/data/ui_clickables.js';
    import { useGenericModal } from "../../composables/generic-modal";

    let modal = useGenericModal();

    let props = defineProps([ 
        "screenshot", 
        "clickable", 
        "hasRatings",
        "nextPage",
        "description", 
        "taskMessage" 
    ]);


</script> 

<template> 
    <div class="web-ibt-screenshot-component">
        <div class="main-screen">   
            <ClickableScreenshot 
                :src="getScreenshotSource(
                    getPlatformName(), 
                    screenshot
                )"
                :mode="getPlatformName()"
                :clickable="UI_Clickables[getPlatformName()][clickable]"
            />  
        </div>
        <div 
            class="floating-action-button"
            @click="modal.toggleModal()"
        > 
            <div class="icon">ℹ</div>
        </div>
        <div 
            class="pointer-to-fab"
        > 
            Click here to {{ modal.isShown.value ? "hide" : "view" }} tasks 
            <span style="font-size: 30px">&rightarrow;</span>
        </div>
    </div>
</template>

<style scoped>
    
    .floating-action-button {
        width: 50px; 
        height: 50px;
        background-color: rgb(150, 170, 180);
        color: white; 
        font-weight: bold;
        border-radius: 50%;
        display: flex; 
        justify-content: center;
        align-items: center;
        position: fixed; 
        bottom: 15px; 
        right: 15px;
        box-shadow: 0px 0px 1px 1px grey;
        font-size: 16px;
        user-select: none;
        z-index: 10;
    }

    .floating-action-button:hover {
        opacity: 0.8;
    }

    .floating-action-button:active {
        opacity: 0.5;
    }

    .pointer-to-fab {
        color: white;
        font-size: 20px;
        font-weight: bold;
        position: fixed;
        right: 70px;
        bottom: 30px;
        z-index: 10;
    }
</style>