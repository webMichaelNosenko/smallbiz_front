<template>
    <div id = "NavBar">
<!--        Class bindings fuck up if the variable type is string instead of boolean-->
<!--        WHY CANT IT RESOLVE THE FUCKIN FILE. Tried to use v-bind:src and had a heart attack in rage-->

        <img src="../../public/burgerMenu.png"
             class="burger"
             v-if="mobile && logoIsBlack"
             v-on:click="burgerPressed"
             alt="Confirm">
<!--        FIX THIS ABSOLUTE GARBAGE OMFG-->
        <img src="../../public/burgerMenuWhite.png"
             class="burger"
             v-if="mobile && !logoIsBlack"
             v-on:click="burgerPressed"
             alt="Confirm">

            <div v-bind:class="{'mobile-bar': mobile, 'desktop-bar': !mobile, 'is-toggled': menuIsOpen}">
                <div class="mobile-options"
                     v-bind:class="{'unwrap': menuIsOpen}"
                     v-if="mobile">
                    <a href="#" class="account">Аккаунт</a>
                    <a href="#" class="contacts">Контакты</a>
                    <a href="#" class="authors">Авторы</a>
                </div>
            </div>
    </div>
</template>

<script>
    import myUtils from "@/utils/myUtils";
    export default {
        name: "NavBar",
        data: function(){
            return {
                mobile: false, //MUST be a boolean, since class binding does not work properly with strings
                menuIsOpen: false,
                logoIsBlack: true
            }
        },
        methods: {
            burgerPressed: function () {
                this.menuIsOpen = !(this.menuIsOpen);
                this.logoIsBlack = !(this.logoIsBlack);
                console.log(`menuIsOpen set to ${this.menuIsOpen}`);
            }
        },
        created: function () {
            this.mobile = myUtils.isMobile(); //should not call isMobile from every component,
            console.log(`Device type is ${this.mobile ? 'mobile' : 'desktop'}`);//must send data from parent on init (async?)
        }
    }
</script>

<style scoped lang="scss">
    div#NavBar{
        display: contents;
    }

    div.desktop-bar{
        display: inline-flex;
        grid-column: 5 / 9;
        grid-row: 1;
        align-self: center;
        justify-content: center;
        z-index: 0;

        a {
            text-decoration: none;
            color: black;
            font-size: $linkSize;

            &.account{
                margin-right: 9%;
            }
            &.contacts{
                 margin-right: 9%;
             }
            &.account:hover, &.contacts:hover, &.authors:hover {
                color: cornflowerblue;
                cursor: default;
                user-select: none;
            }
        }
    }
    .burger{
        width: max-content;
        z-index: 10;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        align-self: center;
        margin-left: calc(100vw / 24);
    }
    .mobile-bar {
        grid-column: 1 / 5;
        grid-row: 1 / 7;
        z-index: 5;
        width: 0;
        height: 100vh;
        background-color: black;
        transition: width 0.25s ease-out 0s;
    }
    .mobile-bar.is-toggled{
        width: 100%;
    }
    .mobile-options{
        opacity: 0;

    }
    .mobile-options.unwrap {
        transition: opacity 0.25s ease-out 0s;
        opacity: 1;
        display: flex;
        flex-flow: column;
        margin-top: calc(100vh / 7);
        height: available;
        justify-content: center;
    }
    a {
        font-size: $mobileLinkSize;
        color: #C4C4C4;
        margin-bottom: calc(100vh / 14);
        margin-left: calc(100vw / 24);
        text-decoration: none;
    }
    @media only screen and (orientation: landscape) {
         .mobile-options > a{
            font-size: $mobileLinkSize - 1vw;
        }
    }
</style>