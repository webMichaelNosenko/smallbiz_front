<template>
    <div id = "NavBar">
        <a href="#" class="account">Аккаунт</a>
        <a href="#" class="contacts">Контакты</a>
        <a href="#" class="authors">Авторы</a>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    div#NavBar{
        grid-column: 5 / 8;
        grid-row: 1;
        place-self: center;
    }
    a.account{
        margin-right: 10%;
    }
    a.account:hover, a.contacts:hover, a.authors:hover {
        color: cornflowerblue;
        cursor: default;
        user-select: none;
    }
    a.contacts{
        margin-right: 10%;
    }

</style>