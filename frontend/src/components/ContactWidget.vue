<template>
    <section class="counter">
        <h2>Contact Us!</h2>
        <input type="text" id="contact-message" ref="messageInput"/>
        <button @click="submit">Submit!</button>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const messageInput = ref<HTMLInputElement | null>(null);

    const submit = () => {
        console.log(messageInput.value?.value);
    }
</script>

<style scoped>
</style>

