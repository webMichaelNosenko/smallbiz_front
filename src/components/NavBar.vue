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

<style scoped lang="scss">
    div#NavBar{
        display: inline-flex;
        grid-column: 5 / 9;
        grid-row: 1;
        align-self: center;
        justify-content: center;
    }
    a {
        text-decoration: none;
        color: black;
        font-size: $linkSize;
    }
    @media only screen and (max-width: 1033px){
        div#NavBar{
            grid-column: 3 / 9;
        }
        a {
            font-size: $mobileLinkSize;
        }
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