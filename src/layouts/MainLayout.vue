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

<style>
    div#MainLayout {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(7, 1fr);
    }
</style>