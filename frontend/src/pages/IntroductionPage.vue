<script setup>

    import ScrollMoreArea from '../components/generic/ScrollMoreArea.vue';
    import WideButton from '../components/generic/WideButton.vue';
    
</script> 

<template>
    <div class="introduction-page center-fixed"> 
        <h1>Welcome to CCCSP-DTT!</h1> 

        <ScrollMoreArea>
            <p>
                CCCSP-DTT stands for <b>Calabanga Community College Student Portal 
                Testing Tool</b>. 
            </p>

            <p>
                Through this tool, you will perform an activity 
                where you have to test the <b>blueprint</b> of an <i>unofficial</i> 
                design of the <i>student portal</i> for the school.
            </p>

            <p>
                Please take note that <b>you will not test an actual app</b>. 
                <br /><br />
                Rather,
                you will be asked to: 
                <ul>
                    <li>
                        Complete some tasks where you have to
                        click some areas of the design which will progress
                        the activity. 
                    </li>
                    <li> 
                        Rate the understandability and intuiveness of 
                        the user interface to a designated task.
                    </li>
                </ul>
            </p>

            <p> 
                The activity will take around 10-30 minutes depending on your speed.
            </p>

            <p> 
                Thank you in advance for participating!
            </p>
        </ScrollMoreArea>
        
        <!-- Move to Next Page Button-->
        <router-link to="/consent-form">
            <WideButton>
                Go to Consent Page
            </WideButton>
        </router-link>
    </div>
</template>

<style scoped> 
    
</style>