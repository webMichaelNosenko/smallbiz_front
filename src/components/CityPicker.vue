<template>
    <div id="outer-container">
        <div id="plain-text">Вы живете в...</div>
        <label for="city-picker"></label>
        <input v-model="currCity" list = "cities" id = "city-picker" name = "city-picker">
        <datalist id = "cities">
            <option v-for="city in cities" :key="city.id"> {{city.cityName}} </option>
        </datalist>
        <button type="submit" v-on:click="confirmPressed">My name jef</button>
    </div>
</template>

<script>
    export default {
        name: "CityPicker",
        data: function () {
            return {
                currCity: '',
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
                ]
            }
        },
        methods: {
            confirmPressed: function () {
                this.$emit('confirmPressed', 'FieldPicker');
                console.log(`emitted event 'confirmPressed' from ${this.$options.name} to change picker to FieldPicker`);
                //might want to implement an Event Bus at this point
            }
        }
    }
</script>

<style scoped lang="scss">
    div#outer-container{
        grid-column: 4 / 10;
        grid-row: 5 / 7;
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