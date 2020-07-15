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

<style scoped lang="scss">
    div#nextLang{
        grid-column: 12 / 12;
        grid-row: 7;
        place-self: baseline end;
        font-size: $linkSize;
    }
    div#nextLang:hover {
        color: cornflowerblue;
        cursor: default;
        user-select: none;
    }
</style>