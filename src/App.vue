<template>
    <div id="app">
        <MainLayout>
            <template v-slot:header>
                <NavBar></NavBar>
            </template>
            <template v-slot:main>
                <AppSlogan></AppSlogan>
                <SocialLinks></SocialLinks>
                <CityPicker></CityPicker>
            </template>
            <template v-slot:footer>
                <AppFooter></AppFooter>
            </template>
        </MainLayout>
    </div>
</template>

<style lang="scss">

</style>

<script>
    import MainLayout from "@/layouts/MainLayout";
    import AppSlogan from "@/components/AppSlogan";
    import NavBar from "@/components/NavBar";
    import SocialLinks from "@/components/SocialLinks";
    import CityPicker from "@/components/CityPicker";
    import AppFooter from "@/components/AppFooter";
    export default {
        components: {MainLayout, AppSlogan, NavBar, SocialLinks, CityPicker, AppFooter}
    }
</script>