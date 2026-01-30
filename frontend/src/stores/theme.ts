import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', () => {
    const theme = ref("light")

    const toggle = () => {
        theme.value = theme.value === "light" ? "dark" : "light"; 
        console.log("beep");
    }

    return { theme, toggle }
})