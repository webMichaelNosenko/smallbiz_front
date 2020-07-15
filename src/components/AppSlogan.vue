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
        font-size: $sloganSize;
        align-self: center;
        text-align: center;
    }
    @media only screen and (max-width: 1033px){
        div#AppSlogan{
            font-size: $mobileSloganSize;
            grid-row: 2 / 3;
        }
    }
</style>