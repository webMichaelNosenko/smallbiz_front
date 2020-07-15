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

<style scoped lang="scss">
    div#outer-container{
        grid-column: 4 / 10;
        grid-row: 6 / 7;
        display: flex;
    }
    div#plain-text{
        width: max-content;
        font-size: $pickerSize;
        flex-grow: 4;
        text-align: center;

    }
    input#city-picker{
        height: min-content;
        background-color: #C4C4C4;
        border-style: none;
        font-size: $pickerSize;
        width: 36%;
    }
    @media only screen and (max-width: 1033px){
        div#outer-container{
            grid-column: 4 / 10;
            grid-row: 3 / 4;
        }
        div#plain-text, input#city-picker{
            font-size: $mobilePickerSize;
        }
    }
</style>