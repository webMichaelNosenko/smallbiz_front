<template>
    <div id = "AppSlogan">Лучшее всегда рядом</div>
</template>

<script>
    export default {
        name: "AppSlogan"
    }
</script>

<style scoped lang="scss">
    div#AppSlogan{
        grid-column: 2 / 12;
        grid-row: 2 / 5;
        font-size: $sloganSize; //any variable that goes as $...Size is defined in _variables.scss
        align-self: center;     //(registered in vue config file), and is global
        text-align: center;
        z-index: 0;
    }
    @media only screen and (max-width: 1033px){
        div#AppSlogan{
            font-size: $mobileSloganSize;
            grid-row: 2 / 3;
        }
    }
    @media only screen and (max-width: 1033px) and (orientation: landscape) {
        div#AppSlogan{
            align-self: end;
            font-size: $mobileSloganSize - 1.5vw;
            grid-row: 2 / 4;
        }
    }
</style>