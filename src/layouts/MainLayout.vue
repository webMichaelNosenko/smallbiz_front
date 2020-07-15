<template>
    <div id="MainLayout">
        <slot name = "header"></slot>
        <slot name = "main"></slot>
        <slot name = "footer"></slot>
    </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style lang="scss">

    div#MainLayout {
        display: grid;
        grid-template-columns: repeat(12, 8.33%);
        grid-template-rows: repeat(7, 14.3%);
        height: 100vh;
    }
</style>