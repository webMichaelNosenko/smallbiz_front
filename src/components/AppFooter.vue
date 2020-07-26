<template>
    <div id = "next-lang" v-on:click = "isRussian = !isRussian"> {{isRussian ? "Rus" : "Eng"}}</div>
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
    div#next-lang{
        grid-column: 12 / 13;
        grid-row: 7;
        align-self: center;
        justify-self: center;
        font-size: $linkSize;
        z-index: 0;
    }
    div#next-lang:hover {
        color: cornflowerblue;
        cursor: default;
        user-select: none;
    }
    @media only screen and (max-width: 1033px){
        div#next-lang{
            justify-self: center;
            align-self: center;
            font-size: $mobileLinkSize;
            grid-column: 11 / 13;
        }
    }
</style>