<template>
    <div id = "app-slogan"
         v-bind:class="{'showing-results': this.$store.getters.isShowingResults}">Лучшее всегда рядом</div>
</template>

<script>
    export default {
        name: "AppSlogan",
    }
</script>

<style scoped lang="scss">
    div#app-slogan{
        grid-column: 2 / 12;
        grid-row: 2 / 5;
        font-size: $sloganSize; //any variable that goes as $...Size is defined in _variables.scss
        align-self: center;     //(registered in vue config file), and is global
        text-align: center;
        z-index: 0;
        transition: font-size 1s, transform 1s;
    }
    @media only screen and (max-width: 1033px){
        div#app-slogan{
            font-size: $mobileSloganSize;
            grid-row: 2 / 3;
        }
    }
    @media only screen and (max-width: 1033px) and (orientation: landscape) {
        div#app-slogan{
            align-self: end;
            font-size: $mobileSloganSize - 1.5vw;
            grid-row: 2 / 4;
        }
    }
    #app-slogan.showing-results{
        transform: translateY(calc(#{$oneRow} * -1));
        font-size: 74px;
    }
</style>