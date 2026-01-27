<template>
    <div class="landing-page">
        <h1>Cool Game :D</h1>
        <p>Best game ever!</p>

        <!--Widgets :^)-->
        <CounterWidget/>
        <LeaderboardWidget/>
    </div>
</template>

<script setup lang="ts">
    import CounterWidget from "../components/CounterWidget.vue";
    import LeaderboardWidget from "../components/LeaderboardSummary.vue";
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 10px;
    }
</style>