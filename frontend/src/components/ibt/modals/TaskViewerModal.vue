<script setup> 
    import { useAppStore } from '@/stores/useAppStore.js';
    import { useCurrentScreenshot } from '@/composables/current-screenshot.js';
    import QuestionOrProblems from './QuestionOrProblems.vue';
    import PageRating from './PageRating.vue';
    import ScrollMoreArea from '../../generic/ScrollMoreArea.vue';
    import { getPlatformName } from '../../../helpers/platformDetector';
    import { ibtFlowMobile, ibtFlowWeb } from '../../../assets/data/ibt_flow';
    import WideButton from '../../generic/WideButton.vue';
    import { useRouter } from 'vue-router';
    import { useGenericModal } from '@/composables/generic-modal.js'
    import { computed, ref } from 'vue';

    let modal = useGenericModal();

    let appStore = useAppStore();
    let currentScreenshot = useCurrentScreenshot();

    let currentPageIndex = appStore.ibt.currentPageIndex;
    let currentPageName = appStore.getCurrentPageName(); 
    let mode = appStore.mode;

    let currentStep = computed(() => appStore.ibt.currentStep);
    let nextStepEnabled = computed(() => appStore.ibt.nextStepEnabled);
    let stepNo = computed(() => appStore.ibt.currentStepNo); 

    let maxIndex; 

    if(getPlatformName() == "mobile") {
        maxIndex = Object.keys(ibtFlowMobile).length;
    } else if (getPlatformName() == "web") {
        maxIndex = Object.keys(ibtFlowWeb).length;
    }

    let maxSteps = computed(() => {
        if(currentScreenshot.shouldRatePage()) {
            return 4; 
        } else {
            return 2;
        }
    });

    let router = useRouter();

    function gotoNextPhase() {
        modal.hideModal();  
        router.push("/self-report-testing");
    }

    function handleNextStep() {
        let hasRatings = currentScreenshot.shouldRatePage(); 
        let currentStep = appStore.ibt.currentStep; 

        if(currentStep == '<start>') {
            if(hasRatings) {
                appStore.setCurrentStep('rate-page');
            }
            else {
                appStore.setCurrentStep('perform-challenge-task')
            }
            appStore.setNextStep();
        }
        else if(currentStep == 'rate-page') {
            appStore.setCurrentStep('write-questions-or-issues');
            appStore.setNextStep();
        }
        else if(currentStep == 'write-questions-or-issues') {
            appStore.setCurrentStep('perform-challenge-task');
            appStore.setNextStep(); 
        }

    }
    
</script> 

<template> 
    <div class="task-viewer-modal">
        <div class="main-content" v-if="currentPageIndex < (maxIndex - 1)">
            <ScrollMoreArea>
                <h1 class="task-modal-title"> 
                    Task {{  currentPageIndex + 1 }} of {{ maxIndex }}
                </h1>
                <div 
                    class="step" 
                    v-if="currentStep == 'read-page-description' || 
                          currentStep == '<start>'">
                    <h2>Step {{ stepNo }} of {{  maxSteps }}: Read Page Description</h2>
                    <div class="page-description">
                        <div 
                            class="description" 
                            v-html="currentScreenshot.getCurrentPageDescription()"
                        >   
                        </div>
                    </div>
                </div>

                <div class="step" v-if="currentStep == 'rate-page'">
                    <h2>Step {{ stepNo }} of {{  maxSteps }}: Rate Page</h2>
                    <div class="page-rating">
                        View the page on the background and come back here. 
                        Rate the page about the aspects 
                        below. 
                        <PageRating />
                    </div>
                </div>

                <div class="step" v-if="currentStep == 'write-questions-or-issues'">
                    <h2>Step {{ stepNo }} of {{  maxSteps }}: Write Questions or Problems (OPTIONAL)</h2>
                    <div class="page-rating">
                        <QuestionOrProblems />
                    </div>
                </div>

                <div class="step" v-if="currentStep == 'perform-challenge-task'">
                    <h2>Step {{ stepNo }} of {{  maxSteps }}: Perform Challenge Task</h2>
                    <div class="challenge-task"> 
                        <b>Performing the task below will continue the activity...</b>
                        <br />
                        <b>You cannot proceed until you completed the activity below...</b>
                        <br /> <br />
                        <div class="task" v-html="currentScreenshot.getCurrentPageTaskMessage()">
                        </div>
                    </div>
                </div>
            
                
            </ScrollMoreArea>

            <WideButton    
                :disabled="!nextStepEnabled" @click="handleNextStep()"
                v-if="stepNo < maxSteps"
            >
                Proceed to Next Step
            </WideButton>
        </div>
        <div class="completed" v-else> 
            <h1>You have finished all tasks!</h1>
            <WideButton @click="gotoNextPhase()">
                Click Here to Proceed to Next Phase
            </WideButton>
        </div>


    </div>
</template>

<style scoped>
    .task-viewer-modal {
        background-color: white;
    }

    .task-viewer-modal > div > div {
    }

    .task-viewer-modal h2 {
        font-size: 115%;
        border-bottom: 1px solid black;
    }

    .task, .description {
        background-color: rgb(234, 234, 234);
        padding: 20px; 
        border-radius: 5px;
    }   

    .completed {
        text-align: center;
    }

    .task-modal-title {
        font-size: 150%;
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 5px solid black;
    }
    
</style>