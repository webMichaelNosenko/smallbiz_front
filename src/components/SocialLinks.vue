<template>
    <div id = "social-links">
        <a href="https://vk.com/sh_tsquad" class="vk">
            <img
                srcset="../../public/vkLogo.png 43w ../../public/vkLogoMobile.png 24w"
                sizes="(max-width: 1033px) 24px, 43px"
                alt="VKontakte"
            >
        </a>
        <a href="#" class="inst">
            <img
                srcset="../../public/instLogo.png 43w ../../public/instLogoMobile.png 24w"
                sizes="(max-width: 1033px) 24px, 43px"
                alt="Instagram"
            >
        </a>
        <a href="#" class="fb">
            <img
                srcset="../../public/fbLogo.png 43w ../../public/fbLogoMobile.png 24w"
                sizes="(max-width: 1033px) 24px, 43px"
                alt="Facebook"
            >
        </a>
    </div>
</template>

<script>
    export default {
        name: "SocialLinks"
    }
</script>

<style scoped lang="scss">
    div#social-links {
        display: flex;
        flex-direction: column;
        grid-column: 1 / 1;
        grid-row: 3 / 5;
        place-self: center;
    }
    a {
         margin-bottom: 15px;
     }
    @media only screen and (max-width: 1033px) {
        div#social-links {
            display: flex;
            flex-direction: row;
            grid-column: 9 / 13;
            grid-row: 1;
            place-self: center;
            width: 100%;
            justify-content: center;
        }
        a {
            max-width: 100%;
            max-height: 100%;
            margin-bottom: 0;
        }
        a.vk, a.inst{
            margin-right: 10px;
        }
    }

</style>