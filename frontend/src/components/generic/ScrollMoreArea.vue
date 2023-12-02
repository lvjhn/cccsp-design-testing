<script setup>

    import { onMounted, ref } from 'vue';
    import { useAppStore } from '../../stores/useAppStore';

    let appStore = useAppStore();
    let scroll = ref(null);

    onMounted(() => {

        scroll.value.scrollTo(0, appStore.scrollTop);

        scroll.value.addEventListener("scroll", event => {
            appStore.setScrollTop(scroll.value.scrollTop);
        }, { passive: true });

    });

</script> 

<template>
    <div class="scroll-more-area-component">
        <div class="scrollable-area" ref="scroll">
            <div class="content"> 
                <slot></slot>
            </div>
        </div>
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
        overflow-x: hidden;
        border: 1px solid black;
        padding: 20px;
    }

    .scroll-more-indicator {
        background-color: rgb(234, 234, 234);
        padding: 5px;
        text-align: center;
        color: black;
        border: 1px solid black;
        font-weight: bold;
    }

    .content {
        width: 98%;
    }
</style>

