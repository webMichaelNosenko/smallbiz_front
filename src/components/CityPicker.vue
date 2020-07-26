<template>
    <div id="outer-container">
        <div id="plain-text">Вы живете в...</div>
        <label for="city-picker"></label>
        <input v-model="currCity" list="cities" id="city-picker" name="city-picker">
        <datalist id = "cities">
            <option v-for="city in cities" :key="city.id"> {{city.cityName}} </option>
        </datalist>
        <img id="confirm"
             srcset="../../public/confirmButton.jpg 84w ../../public/confirmButtonMobile.jpg 50w"
             v-on:click="confirmPressed"
             sizes="(max-width: 1033px) 50px, 84px"
             alt="Confirm">
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
        display: contents;
        z-index: 0;
    }
    div#plain-text{
        font-size: $pickerSize;
        text-align: center;
        grid-column: 4 / 7;
        grid-row: 5 / 6;
    }
    input#city-picker{
        grid-column: 7 / 10;
        grid-row: 5 / 6;
        height: min-content;
        background-color: #C4C4C4;
        border-style: none;
        font-size: $pickerSize;
    }
    img#confirm{
        grid-column: 6 / 8;
        grid-row: 6 / 7;
        justify-self: center;
    }
    @media only screen and (max-width: 1033px){
        div#outer-container{
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            grid-column: 4 / 10;
            grid-row: 3 / 5;
        }
        div#plain-text{
            justify-self: center;
        }
        input#city-picker{
            justify-self: center;
            margin-bottom: 10%;
            margin-top: 7%;
        }
        img#confirm{
            justify-self: center;
            align-self: center;
            width: min-content;
        }
        div#plain-text, input#city-picker{
            font-size: $mobilePickerSize;
        }
    }
    @media only screen and (max-width: 1033px) and (orientation: landscape) {
        div#plain-text, input#city-picker {
            font-size: $mobilePickerSize - 1vw;
        }
        div#outer-container{
            grid-row: 4 / 6;
        }
        input#city-picker{
            justify-self: center;
            margin-bottom: 7%;
            margin-top: 7%;
        }
        div#plain-text{
            margin-top: 7%;
        }
    }
</style>