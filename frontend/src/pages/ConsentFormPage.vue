<script setup>

    import ScrollMoreArea from '../components/generic/ScrollMoreArea.vue';  
    import WideButton from '../components/generic/WideButton.vue';

    import { useAppStore } from '@/stores/useAppStore.js'; 

    const appStore = useAppStore(); 
    
</script> 

<template>
    <div class="consent-form-page center-fixed"> 
        <h1>Consent Form</h1> 
        
        <ScrollMoreArea>
            <p>
                By participating in this activity, you hereby understand that 
                we will not collect any <b>personally identifiable information 
                (PII)</b>.
            </p>
            
            <p>
                We will just collect relevant statistical details about 
                you such as your <i>age</i>, <i>gender</i>, <i>course</i>, and 
                <i>year</i>.
            </p>

            <p> 
                <div class="consent-form"> 
                    <table>
                        <tr>
                            <td class="field">Age</td>
                            <td>
                                <input 
                                    type="number" 
                                    value="18"
                                    v-model="appStore.consentForm.age"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td class="field">Gender</td>
                            <td>
                                <input 
                                    type="radio" 
                                    id="gender" 
                                    name="gender"
                                    value="male" 
                                    v-model="appStore.consentForm.gender" 
                                /> 
                                    Male 

                                <input 
                                    type="radio" 
                                    id="gender" 
                                    name="gender" 
                                    value="female" 
                                    v-model="appStore.consentForm.gender"
                                /> 
                                    Female
                            </td>
                        </tr>
                        <tr>
                            <td class="field">Course</td>
                            <td>
                                <input 
                                    type="text" 
                                    value="" 
                                    v-model="appStore.consentForm.course"
                                />
                            </td>
                        </tr><tr>
                            <td class="field">Year Level</td>
                            <td>
                                <input 
                                    type="number" 
                                    value="1" 
                                    v-model="appStore.consentForm.year"
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                
                <p>
                    Thank you very much for sharing these info!
                </p>
                <p>
                    Such info will help a lot in getting more insights about 
                    your feedback later on the
                    design! 
                </p> 
            </p>
        </ScrollMoreArea>

        <!-- Move to Next Page Button-->
        <router-link to="/mode-confirmation">
            <WideButton>
                Go to Mode Confirmation Page
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
</style>