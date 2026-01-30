<template>
    <button @click="themeStore.toggle">Light/Dark</button>
</template>

<script setup lang="ts">
    import { useTheme } from "../stores/theme";

    const themeStore = useTheme();
</script>

<style scoped>

</style>