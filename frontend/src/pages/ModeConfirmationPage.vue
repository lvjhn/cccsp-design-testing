<script setup>

    import ScrollMoreArea from '../components/generic/ScrollMoreArea.vue';
    import WideButton from '../components/generic/WideButton.vue';
    
    import { useAppStore } from '@/stores/useAppStore.js'; 
    import { isMobile, getPlatformName } from '../helpers/platformDetector';
    import { computed } from 'vue';

    const appStore = useAppStore(); 

    let canContinue = computed(() => {
        return appStore.getMode == getPlatformName();
    });
    
</script> 

<template>
    <div class="mode-confirmation-page center-fixed"> 
        <h1>Mode Confirmation</h1> 

        <div class="mode-selector"> 
            <table class="mode-selector-table">
                <tr>
                    <td>
                        <input 
                            type="radio" 
                            name="mode" 
                            id="mode" 
                            value="web"    
                            v-model="appStore.mode"
                        />
                    </td>
                    <td>
                        I was asked to handle the <b>WEB version</b> of the app.  
                    </td>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="radio" 
                            name="mode" 
                            id="mode" 
                            value="mobile"
                            v-model="appStore.mode"
                        /> 
                    </td>
                    <td>
                        I was asked to handle the <b>MOBILE version</b> of the app.
                    </td>
                </tr>
            </table>
        </div>
        
        <br /> 


        <div v-if="!canContinue" class="error"> 
            You cannot continue because you are not using the correct device. 
            <ul>
                <li>
                    You must use a smartphone or tablet for <b>mobile version</b>.
                </li>
                <li>
                    You must use a desktop PC or laptop PC for <b>web version</b>.
                </li>
            </ul>
            <br />
        </div>

        <!-- Move to Next Page Button-->
        <router-link to="/issues-based-testing">
            <WideButton :isDisabled="!canContinue">
                Go to Issues-Based Testing Phase
            </WideButton>
        </router-link>
    </div>
</template>

<style scoped> 
    .consent-form table tr td {
        font-weight: bold;
        border: 1px solid black;
        padding: 5px;
    }

    .mode-selector-table td {
        border: 1px solid black;
        padding: 5px 10px;
    }

    .error {
        color: red;
        font-weight: bold;
    }
</style>