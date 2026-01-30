<template>
    <div :class="['leaderboard-page', themeStore.theme]">
        <h1>Leaderboard</h1>
        <!--Widgets :^)-->
        <LeaderboardWidget />
        <ToggleThemeWidget />
        <FunnyButtonWidget />
    </div>
</template>
<script setup lang="ts">
    import { useTheme } from "../stores/theme";
    import LeaderboardWidget from "../components/LeaderboardTable.vue";
    import ToggleThemeWidget from "../components/LightDarkToggle.vue";
    import FunnyButtonWidget from "../components/FunnyButton.vue";

    const themeStore = useTheme();
</script>
<style scoped>
    .leaderboard-page {
        text-align: center;
        margin-top: 10px;
    }

    .light {
        background: #ffffff;
        color: #111;
    }

    .dark {
        background: #111;
        color: #ffffff;
    }
</style>