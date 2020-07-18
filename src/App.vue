<template>
    <div id="app">
        <NavBar></NavBar>
        <AppSlogan></AppSlogan>
        <SocialLinks></SocialLinks>
        <keep-alive :include="['CityPicker', 'FieldPicker']">
            <component v-bind:is="currPicker" v-on:confirmPressed="onConfirmPressed"/>
        </keep-alive>
        <AppFooter></AppFooter>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    * {
        font-family: 'Merriweather', serif;
    }
    div#app {
        display: grid;
        grid-template-columns: repeat(12, 8.33%);
        grid-template-rows: repeat(7, 14.3%);
        height: 100vh;
    }
</style>

<script>
    import AppSlogan from "@/components/AppSlogan";
    import NavBar from "@/components/NavBar";
    import SocialLinks from "@/components/SocialLinks";
    import CityPicker from "@/components/CityPicker";
    import AppFooter from "@/components/AppFooter";
    import FieldPicker from "@/components/FieldPicker";
    export default {
        components: {AppSlogan, NavBar, SocialLinks, CityPicker, FieldPicker, AppFooter},
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
                    this.currPicker = nextPicker;
                    console.log(`   picker changed from ${this.currPicker} to ${nextPicker}`);
                }
                catch(err) {
                    console.log('   Error: trying to change to undefined picker (picker left unchanged)');
                }
            }
        }
    }
</script>