<template>
    <div id="outer-container">
        <div class="plain-text">В</div>
        <label for="general-city-picker"></label>
        <input v-model="currCity"
               list="cities"
               class = "general-picker"
               name="general-city-picker"
               id="general-city-picker">
        <datalist id = "cities">
            <option v-for="city in cities" :key="city.id"> {{city.cityName}} </option>
        </datalist>
        <div class="plain-text"> в сфере </div>
        <label for="general-field-picker"></label>
        <input v-model="currField"
               list = "fields"
               class = "general-picker"
               name = "general-field-picker"
               id="general-field-picker">
        <datalist id = "fields">
            <option v-for="field in fields" :key="field.id"> {{field.fieldName}} </option>
        </datalist>
        <div class="plain-text"> для Вас трудятся </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralPicker",
        data: function () {
            return {
                currCity: this.$store.getters.getCity,
                currField: this.$store.getters.getField,
                city: '',
                cities: [
                    {
                        id: 1,
                        cityName: "Волгоград"
                    },
                    {
                        id: 2,
                        cityName: "Москва"
                    }
                ],
                field: '',
                fields: [
                    {
                        id: 1,
                        fieldName: 'все и сразу!'
                    },
                    {
                        id: 2,
                        fieldName: 'прическу'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    div#outer-container{
        display: inline-flex;
        flex-wrap: wrap;
        grid-row: 3 / 5;
        grid-column: 5 / 9;
        z-index: 0;
    }
    div.plain-text{
        font-size: $linkSize;
    }
    input.general-picker{
        height: min-content;
        background-color: #B51919;
        border-style: none;
        font-size: $linkSize;
    }
</style>