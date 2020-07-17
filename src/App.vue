<template>
    <div id="app">
        <MainLayout>
            <template v-slot:header>
                <NavBar></NavBar>
            </template>
            <template v-slot:main>
                <AppSlogan></AppSlogan>
                <SocialLinks></SocialLinks>
            </template>
            <template v-slot:picker>
                <component v-bind:is="currPicker" v-on:confirmPressed="onConfirmPressed"></component>
            </template>
            <template v-slot:footer>
                <AppFooter></AppFooter>
            </template>
        </MainLayout>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    * {
        font-family: 'Merriweather', serif;
    }
</style>

<script>
    import MainLayout from "@/layouts/MainLayout";
    import AppSlogan from "@/components/AppSlogan";
    import NavBar from "@/components/NavBar";
    import SocialLinks from "@/components/SocialLinks";
    import CityPicker from "@/components/CityPicker";
    import AppFooter from "@/components/AppFooter";
    import FieldPicker from "@/components/FieldPicker";
    export default {
        components: {MainLayout, AppSlogan, NavBar, SocialLinks, CityPicker, FieldPicker, AppFooter},
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