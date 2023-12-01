<script setup>
    import { useGenericModal } from '@/composables/generic-modal.js'; 
    import { computed } from 'vue';

    let modal = useGenericModal(); 

</script> 

<template> 
    {{ isShown }}
    <div 
        class="generic-modal"
        v-if="modal.isShown.value"
    > 
        <div class="modal-dimmer"></div>
        <div class="modal-content center-fixed">
            <component 
                :is="modal.component.value" 
                v-bind="modal.props.value"
            />
        </div>
    </div> 
</template> 

<style scoped> 
    .generic-modal .modal-dimmer {
        position: fixed;
        top: 0px; 
        left: 0px; 
        width: 100%;
        height: 100%; 
        background-color: black;
        opacity: 0.9;
        z-index: 1;
    } 

    .generic-modal .modal-content {
        z-index: 2;
    }


</style>