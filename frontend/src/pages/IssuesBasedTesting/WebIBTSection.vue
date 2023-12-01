<script setup>
    import WebIBTScreenshot from "@/components/ibt/WebIBTScreenshot.vue";
    import { computed, ref } from "vue";

    import { useAppStore } from "../../stores/useAppStore";
    import { ibtFlowWeb } from "../../assets/data/ibt_flow";

    let appStore = useAppStore();

    let currentPageIndex = 
        computed(() => appStore.ibt.currentPageIndex); 
    let currentPageName = 
        computed(() => Object.keys(ibtFlowWeb)[currentPageIndex.value])

</script> 

<template>
    <div class="mobile-ibt-section"> 
        <div class="mobile-ibt-section-ui-screenshot">
            <WebIBTScreenshot v-bind="{ 
                ...ibtFlowWeb[currentPageName], 
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