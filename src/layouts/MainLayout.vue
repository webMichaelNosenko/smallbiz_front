<template>
    <div id="MainLayout">
        <header>
            <slot name = "header"></slot>
        </header>
        <main>
            <slot name = "main"></slot>
        </main>
        <footer>
            <slot name = "footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
    div#MainLayout {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: auto;
    }
</style>