<script setup>

    import ScrollMoreArea from '../components/generic/ScrollMoreArea.vue';
    import WideButton from '../components/generic/WideButton.vue';
    import { SUS_Questions } from "@/assets/data/sus_questions.js";

    import { useAppStore } from '../stores/useAppStore';
    
    let appStore = useAppStore();

</script> 

<template>
    <div class="introduction-page center-fixed"> 
        <h1>Self Report Testing Page</h1> 
        On a scale of 1 to 5, rate the design you have just seen based 
        on the questions below.
        <ScrollMoreArea>
            <table>
                <tr> 
                    <th class="question">Question</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr> 
                    <th class="question" style="text-align: left; padding: 20px;">  
                    <b>(1)</b> - Strongly Disagree 
                        &nbsp; &nbsp;
                    <b>(5)</b> - Strongly Agree  
                    </th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                </tr>
                <tr v-for="question, index in SUS_Questions">
                    <td class="question">{{ SUS_Questions[index] }}</td>
                    <td class="rating-1"><input type="radio" value="1" v-model="appStore.srt[index]" /></td>
                    <td class="rating-2"><input type="radio" value="2" v-model="appStore.srt[index]" /></td>
                    <td class="rating-3"><input type="radio" value="3" v-model="appStore.srt[index]" /></td>
                    <td class="rating-4"><input type="radio" value="4" v-model="appStore.srt[index]" /></td>
                    <td class="rating-5"><input type="radio" value="5" v-model="appStore.srt[index]" /></td>
                </tr>
            </table>
        </ScrollMoreArea>
        
        <!-- Move to Next Page Button-->
        <router-link to="/summary">
            <WideButton>
                Go to Summary Page
            </WideButton>
        </router-link>
    </div>
</template>

<style scoped> 
    table td, table th {
        margin: 0px; 
        padding: 5px;
        border: 1px solid black;
    }
   
</style>