<script setup>
  import TaskViewerModal from './components/ibt/modals/TaskViewerModal.vue';
  import { defineForMobile } from './helpers/uiScreenshotSize';
  import { useGenericModal } from '@/composables/generic-modal.js'
  import GenericModal from './components/generic-modal/GenericModal.vue';

  let modal = useGenericModal();

  modal.setModal(TaskViewerModal, {});

</script>

<template>
  <div class="app-component"> 
    <router-view />
  </div>
  <GenericModal />
</template>

<style scoped>
  .modal-dimmer {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.9;
    position: fixed;
    top: 0px;
    left: 0px;
  }
</style>
