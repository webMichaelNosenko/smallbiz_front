<template>
    <div id = "SocialLinks">
        <a href="https://vk.com/sh_tsquad" class="vk"><img src="../../public/vkLogo.png" alt="VKontakte"></a>
        <a href="#" class="inst"><img src="../../public/instLogo.png" alt="Instagram"></a>
        <a href="#" class="fb"><img src="../../public/fbLogo.png" alt="Facebook"></a>
    </div>
</template>

<script>
    export default {
        name: "SocialLinks"
    }
</script>

<style scoped>
    div#SocialLinks {
        display: flex;
        flex-direction: column;
        grid-column: 1 / 1;
        grid-row: 3 / 5;
        place-self: center;
    }
</style>