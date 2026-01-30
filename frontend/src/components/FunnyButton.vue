<template>
    <button @click="funnyButtonActivate">Funny Button</button>
</template>

<script setup lang="ts">

    const funnyButtonActivate = () => {
        window.open("https://www.youtube.com/watch?v=8D4WZmyyx_k");
    }
</script>

<style scoped>

</style>