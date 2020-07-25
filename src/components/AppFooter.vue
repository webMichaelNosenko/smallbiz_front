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
        grid-column: 12 / 13;
        grid-row: 7;
        align-self: center;
        justify-self: center;
        font-size: $linkSize;
        z-index: 0;
    }
    div#nextLang:hover {
        color: cornflowerblue;
        cursor: default;
        user-select: none;
    }
    @media only screen and (max-width: 1033px){
        div#nextLang{
            justify-self: center;
            align-self: center;
            font-size: $mobileLinkSize;
            grid-column: 11 / 13;
        }
    }
</style>