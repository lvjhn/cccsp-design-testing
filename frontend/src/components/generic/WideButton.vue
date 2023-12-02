<script setup>

    import { computed, onMounted, ref } from 'vue';

    let props = defineProps(["isDisabled"]);

    let isDisabled = computed(() => props.isDisabled ?? false);

</script> 

<template>
    <button 
        class="wide-button-component" 
        :class="{
            'enabled'  : !isDisabled, 
            'disabled' : isDisabled
        }"
        :disabled="isDisabled"
    >
        <div class="inner-content">
            <slot></slot>
        </div>
    </button>
</template>

<style scoped>
    .wide-button-component {
        width: 100%;
        background-color: rgb(33, 153, 212); 
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: none; 
    }

    .inner-content {
        margin: 10px 20px;
    }

    .wide-button-component.enabled:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    .wide-button-component.enabled:active {
        opacity: 0.95;
    }

    .wide-button-component.disabled {
        opacity: 0.8;
    }

    .wide-button-component[disabled] {
        opacity: 0.8;
        background-color: grey;
    }
</style>

