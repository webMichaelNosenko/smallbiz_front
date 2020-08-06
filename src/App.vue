<template>
    <div id="app">
        <NavBar></NavBar>
        <AppSlogan></AppSlogan>
        <SocialLinks></SocialLinks>
<!--        <keep-alive>-->
            <CityPicker v-if="currPicker === 'CityPicker'" v-on:confirmPressed="onConfirmPressed"></CityPicker>
<!--        </keep-alive>-->
<!--        <keep-alive>-->
            <FieldPicker v-if="currPicker === 'FieldPicker'" v-on:confirmPressed="onConfirmPressed"></FieldPicker>
<!--        </keep-alive>-->
            <GeneralPicker v-if="currPicker === 'GeneralPicker'"></GeneralPicker>
        <AppFooter></AppFooter>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    body{
        margin: 0;
    }
    * {
        font-family: 'Merriweather', serif;
        color: #F1F1F1;
    }
    div#app {
        display: grid;
        grid-template-columns: repeat(12, calc(100% / 12));
        grid-template-rows: repeat(7, calc(100% / 7));
        height: 100vh;
        background-image: url("~@/../public/bgRedGrad.png"), url("~@/../public/bgRed.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-origin: border-box;
        background-color: #C4C4C4;
    }
</style>

<script>
    import AppSlogan from "@/components/AppSlogan";
    import NavBar from "@/components/NavBar";
    import SocialLinks from "@/components/SocialLinks";
    import CityPicker from "@/components/CityPicker";
    import AppFooter from "@/components/AppFooter";
    import FieldPicker from "@/components/FieldPicker";
    import GeneralPicker from "@/components/GeneralPicker";
    export default {
        components: {AppSlogan, NavBar, SocialLinks, CityPicker, FieldPicker, AppFooter, GeneralPicker},
        data: function () {
            return {
                currPicker: 'CityPicker'
            }
        },
        methods: {
            onConfirmPressed: function (nextPicker) {
                console.log(`Event 'confirmPressed' caught: `);
                try {
                    if (nextPicker === undefined) throw 'undefinedNextPicker';
                    console.log(`   picker changed from ${this.currPicker} to ${nextPicker}`);
                    this.currPicker = nextPicker;
                }
                catch(err) {
                    console.log('   Error: trying to change to undefined picker (picker left unchanged)');
                }
            }
        }
    }
</script>