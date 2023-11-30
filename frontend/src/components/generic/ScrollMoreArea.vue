<script setup>

    import { ref } from 'vue';


</script> 

<template>
    <div class="scroll-more-area-component">
        <div class="scrollable-area">
            <slot></slot>
        </div>
        <br />
        <div class="scroll-more-indicator">
            Scroll Down to View More Info
        </div>
    </div>
</template>

<style scoped>
    .scroll-more-area-component {
        margin: 10px 0px;
    }

    .scrollable-area {
        max-height: 300px;
        overflow-y: scroll;
    }

    .scroll-more-indicator {
        background-color: rgb(50, 70, 80);
        padding: 5px;
        text-align: center;
        color: white;
        border: 1px solid black;
    }
</style>

