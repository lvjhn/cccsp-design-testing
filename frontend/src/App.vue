<script setup>
  import TaskViewerModal from './components/ibt/modals/TaskViewerModal.vue';
  import { defineForMobile } from './helpers/uiScreenshotSize';
  import { useGenericModal } from '@/composables/generic-modal.js'
  import GenericModal from './components/generic-modal/GenericModal.vue';
  import { ref } from 'vue';

  let modal = useGenericModal();

  modal.setModal(TaskViewerModal, {});

  let imagesLoaded = ref(0);   
  let mobileImages = []; 
  let webImages = []; 

  for(let i = 1; i <= 20; i++) {
    mobileImages.push("/images/ui-screenshots/mobile/mobile(" + i + ").png")
  }

  for(let i = 1; i <= 15; i++) {
    webImages.push("/images/ui-screenshots/web/web(" + i + ").png")
  }


  let imagesToLoad = mobileImages.length + webImages.length;

  function preloadImages(urls, allImagesLoadedCallback){
      var loadedCounter = 0;
      var toBeLoadedNumber = urls.length;
      urls.forEach(function(url){
        preloadImage(url, function(){
            loadedCounter++;
                console.log('Number of loaded images: ' + loadedCounter);
          if(loadedCounter == toBeLoadedNumber){
            allImagesLoadedCallback();
          }
          imagesLoaded.value += 1;
        });
      });

      function preloadImage(url, anImageLoadedCallback){
          var img = new Image();
          img.onload = anImageLoadedCallback;
          img.src = url;
      }
  }



  preloadImages([
    ...mobileImages, 
    ...webImages
  ], function(){
      console.log('All images were loaded');
  });

</script>

<template>
  <div class="app-component"> 
    <div class="center-fixed loading-screen" v-if="imagesLoaded < imagesToLoad"> 
      <h1>Loading...</h1>
      Please wait while we are preloading images... 
      <br />
      This will make the activity experience smoother later.
      <br /><br />
      <b>Images Loaded</b>: {{ imagesLoaded }} of {{ imagesToLoad }}
    </div>
    <div v-else>
      <router-view />
    </div>
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
