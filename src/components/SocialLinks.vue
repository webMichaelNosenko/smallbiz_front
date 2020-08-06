<template>
    <div id = "social-links">
        <a href="https://vk.com/sh_tsquad" class="vk">
            <img
                src="../../public/vkWhite.svg"
                alt="VKontakte"
            >
        </a>
        <a href="#" class="inst">
            <img
                src="../../public/instWhite.svg"
                alt="Instagram"
            >
        </a>
        <a href="#" class="fb">
            <img
                src="../../public/fbWhite.svg"
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
    .vk > img, .inst > img, .fb > img { //fucking retard, i wrote this as .vk, .inst, .fb > img
        height: 60px;                   //AND THE > SELECTOR ONLY APPLIED TO FB
        width: 60px;                    //ah, the pain
        flex-grow: 1;
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
            margin-right: calc(100vw / 24);
        }
        /*a.vk {*/
        /*    align-self: end;*/
        /*}*/
        /*a.inst {*/
        /*    align-self: end;*/
        /*}*/
        /*a.fb {*/
        /*    align-self: end;*/
        /*}*/
        /*a.vk, a.inst{*/
        /*    margin-right: 10px;*/
        /*}*/
        .fb > img {
            height: 24px;
            width: 24px;
        }
        .vk > img {
            height: 24px;
            width: 24px;
        }
        .inst > img {
            height: 24px;
            width: 24px;
        }
    }

</style>