<script setup>
    import MobileIBTScreenshot from "@/components/ibt/MobileIBTScreenshot.vue";
    import { computed, ref } from "vue";

    import { useAppStore } from "../../stores/useAppStore";
    import { ibtFlowMobile } from "../../assets/data/ibt_flow";

    let appStore = useAppStore();

    let currentPageIndex = 
        computed(() => appStore.ibt.currentPageIndex); 
    let currentPageName = 
        computed(() => Object.keys(ibtFlowMobile)[currentPageIndex.value])

</script> 

<template>
    <div class="mobile-ibt-section"> 
        <div class="mobile-ibt-section-ui-screenshot">
            <MobileIBTScreenshot v-bind="{ 
                ...ibtFlowMobile[currentPageName], 
                clickable: currentPageName
            }"/>
        </div>
    </div>
</template>

<style scoped> 
    .center-fixed {
        background: transparent;
        border: none;
    }
</style>