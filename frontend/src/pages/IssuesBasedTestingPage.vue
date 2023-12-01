<script setup>
    import { getPlatformName, isMobile } from '../helpers/platformDetector';
    
    import MobileIBTSection from './IssuesBasedTesting/MobileIBTSection.vue';
    import WebIBTSection from './IssuesBasedTesting/WebIBTSection.vue';
    
</script> 

<template>
    <div class="issues-based-testing-page"> 
        <MobileIBTSection v-if="getPlatformName() == 'mobile'" /> 
        <WebIBTSection v-else-if="getPlatformName() == 'web'" />
    </div>
</template>

<style scoped> 
    
</style>