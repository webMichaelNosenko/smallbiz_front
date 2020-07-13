<template>
    <div id="outer-container">
        <div id="plain-text">Вы живете в...</div>
        <label for="city-picker"></label>
        <input list = "cities" id = "city-picker" name = "city-picker">
        <datalist id = "cities">
            <option v-for="city in cities" :key="city.id"> {{city.cityName}} </option>
        </datalist>
    </div>
</template>

<script>
    export default {
        name: "CityPicker",
        data: function () {
            return {
                city: '',
                cities: [
                    {
                        id: 1,
                        cityName: "Volgograd"
                    },
                    {
                        id: 2,
                        cityName: "Moscow"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    div#outer-container{
        grid-column: 6 / 7;
        grid-row: 5;
    }
</style>