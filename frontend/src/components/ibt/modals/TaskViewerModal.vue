<script setup> 
    import { useAppStore } from '@/stores/useAppStore.js';
    import { useCurrentScreenshot } from '@/composables/current-screenshot.js';
    import QuestionOrProblems from './QuestionOrProblems.vue';
    import PageRating from './PageRating.vue';
    import ScrollMoreArea from '../../generic/ScrollMoreArea.vue';

    let appStore = useAppStore();
    let currentScreenshot = useCurrentScreenshot();

    let currentPageIndex = appStore.ibt.currentPageIndex;
    let currentPageName = appStore.getCurrentPageName(); 
    let mode = appStore.mode;

   
</script> 

<template> 
    <div class="task-viewer-modal">
        <ScrollMoreArea>
            <h1 style="font-size: 120%;">
                Complete the Instructions Below to Proceed
            </h1>
            <hr />
            
            <h2>Step 1 of 4: Read Page Description</h2>
            <div class="page-description">
                <div class="description">
                    {{ currentScreenshot.getCurrentPageDescription() }}
                </div>
            </div>

            <h2>Step 2 of 4: Rate Page</h2>
            <div class="page-rating">
                View the page on the background and come back here. 
                Rate the page about the aspects 
                below. 

                <div v-if="currentScreenshot.shouldRatePage()">
                    <PageRating />
                </div>
                <div v-else> 
                    <i>You don't have to rate this page.</i>
                </div> 
            </div>

            <h2>Step 3 of 4: Write Questions or Problems (OPTIONAL)</h2>
            <div class="page-rating">
                View the page on the background then come back here. 
                Try to see if you have 
                any questions or issues with how it is designed. If you have
                any, try to write them down on the boxes below. These 
                questions are optional (not required) and can skip them if 
                you want to.
                <QuestionOrProblems />
            </div>


            <h2>Step 4 of 4: Perform Challenge Task</h2>
            <div class="challenge-task"> 
                <b>Performing the task below will continue the activity...</b>
                <br />
                <b>You cannot proceed until you completed the activity below...</b>
                <br /> 
                <br />
                <div class="task">
                    {{ currentScreenshot.getCurrentPageTaskMessage() }}
                </div>
            </div>
            <br /> 
            <br /> 
        </ScrollMoreArea>

    </div>
</template>

<style scoped>
    .task-viewer-modal {
        background-color: white;
    }

    .task-viewer-modal > div > div {
        margin-left: 20px;
    }

    .task-viewer-modal h2 {
        font-size: 115%;
        border-bottom: 1px solid black;
    }

    .task, .description {
        background-color: rgb(234, 234, 234);
        padding: 20px; 
        border-radius: 5px;;
    }
</style>