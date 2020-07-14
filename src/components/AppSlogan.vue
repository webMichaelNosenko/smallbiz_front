<template>
    <div id = "AppSlogan">Лучшее всегда рядом</div>
</template>

<script>
    export default {
        name: "AppSlogan"
    }
</script>

<style scoped>
    div#AppSlogan{
        grid-column: 4 / 10;
        grid-row: 3 / 5;
        font-size: calc(60px + 1vw);
        align-self: center;
        text-align: center;
    }
</style>