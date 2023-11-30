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
        <slot></slot>
    </button>
</template>

<style scoped>
    .wide-button-component {
        width: 100%;
        background-color: black; 
        color: white;
        border-radius: 5px;
        border: none; 
        padding: 10px 20px;
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
</style>

