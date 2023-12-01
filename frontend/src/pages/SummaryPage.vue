<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    
    let status = ref('sending');


    onMounted(async () => {
        async function submit() {
            status.value = "sending";
            setTimeout(async () => {
                let data = JSON.parse(localStorage.getItem("app-store")); 
                const response = 
                    axios.post("https://lvjhn98.pythonanywhere.com/submit", data)
                        .catch(e => {
                            status.value = 'retrying';
                            setTimeout(submit, 3000);
                        })
                        .then(res => {
                            if(res.data) status.value = "submitted";
                        });
            }, 3000);

        }

        await submit();
    });
</script> 

<template>
    <div class="summary-page center-fixed"> 
        <h1>You have finished the activity.</h1>
        Thank you very much for participating!<br />
        Please <b>do not yet leave this page</b> and 
        wait until your responses are recorded...  

        <br /><br />
        
        <table class="sending" v-if="status == 'sending'"> 
                <tr> 
                    <th>Status</th>
                    <td style="background-color: yellow; color: black;">
                        Sending Results to Server 
                        <br />
                        (Do Not Leave Yet)
                    </td>
                </tr>
        </table>

        <table class="submitted" v-if="status == 'submitted'"> 
                <tr> 
                    <th>Status</th>
                    <td style="background-color: green; color: white;">
                        Successfuly Submitted Results
                        <br />
                        (You May Now exit this Page)
                    </td>
                </tr>
        </table>

        <table class="retrying" v-if="status == 'retrying'"> 
                <tr> 
                    <th>Status</th>
                    <td style="background-color: red; color: white">
                        Failed... Retrying 
                        <br />
                        (Do Not Leave Yet)
                    </td>
                </tr>
        </table>
    </div>
</template>

<style scoped> 
    table td, table th {
        border: 1px solid black;
        padding: 10px;
        font-weight: bold;
    }
</style>