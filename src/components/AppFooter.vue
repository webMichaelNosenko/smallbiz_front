<template>
    <div id = "nextLang" v-on:click = "isRussian = !isRussian"> {{isRussian ? "Rus" : "Eng"}}</div>
</template>

<script>
    export default {
        name: "AppFooter",
        data: function () {
            return {
                isRussian: true
            }

        }
    }
</script>

<style scoped>
    #nextLang:hover {
        color: cornflowerblue;
    }
</style>