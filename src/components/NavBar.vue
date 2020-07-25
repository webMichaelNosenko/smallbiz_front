<template>
    <div id = "NavBar">
<!--        Class bindings fuck up if the variable type is string instead of boolean-->
        <img id="burger"
             v-if="mobile"
             src="../../public/burgerMenu.png"
             v-on:click="burgerPressed"
             alt="Confirm">
<!--        <transition name="slide">-->
            <div v-bind:class="{MobileBar: mobile, DesktopBar: !mobile, isToggled: menuIsOpen}">
                <div class="mobile-options"
                     v-if="mobile">
<!--                     v-bind:class="{isToggled: menuIsOpen}">-->
                    <!--v-show="menuIsOpen"-->
                    <a href="#" class="account" v-bind:class="{unwrap:menuIsOpen}">Аккаунт</a>
                    <a href="#" class="contacts" v-bind:class="{unwrap:menuIsOpen}">Контакты</a>
                    <a href="#" class="authors" v-bind:class="{unwrap:menuIsOpen}">Авторы</a>
                </div>
            </div>
<!--        </transition>-->
    </div>
</template>

<script>
    import myUtils from "@/utils/myUtils";
    export default {
        name: "NavBar",
        data: function(){
            return {
                mobile: false, //MUST be a boolean, since class binding does not work properly with strings
                menuIsOpen: false
            }
        },
        methods: {
            burgerPressed: function () {
                this.menuIsOpen = !(this.menuIsOpen);
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

    div.DesktopBar{
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
    #burger{
        width: max-content;
        z-index: 10;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: center;
        align-self: center;
        margin-left: 25px;
    }
    //My retard levels are through the roof with all this nesting ngl
    //The issue is that the text appears BEFORE the menu finishes its transition (MtF)
    .MobileBar{
        grid-column: 1 / 5;
        grid-row: 1 / 7;
        z-index: 5;
        width: 0;
        height: 100vh;
        background-color: cornflowerblue;
        transition: width 0.25s ease-out 0s;
        .mobile-options{
            display: none;
            //& > a {
            //    width: 0;
            //}
        }

        &.isToggled{
            width: 100%;
            & > .mobile-options{
                display: flex;
                flex-flow: column;
                margin-top: calc(100vh / 7);
                height: available;
                justify-content: center;
                & > a{
                    font-size: $mobileLinkSize;
                    width: 0;
                    transition: width 5s ease-out 0s;
                    margin-bottom: calc(100vh / 7);
                    &.unwrap{
                        width: max-content;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
            @media only screen and (orientation: landscape) {
                & > .mobile-options > a{
                    font-size: $mobileLinkSize - 1vw;
                }
            }
        }
    }
</style>