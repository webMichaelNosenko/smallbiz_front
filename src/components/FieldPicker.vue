<template>
    <div id="outer-container">
        <div id="plain-text">Вы хотите...</div>
        <label for="field-picker"></label>
        <input v-model="currField" list = "fields" id = "field-picker" name = "field-picker">
        <datalist id = "fields">
            <option v-for="field in fields" :key="field.id"> {{field.fieldName}} </option>
        </datalist>
        <img id="confirm"
             srcset="../../public/confirmButton.jpg 84w, ../../public/confirmButtonMobile.jpg 50w"
             v-on:click="confirmPressed"
             sizes="(max-width: 1033px) 50px, 84px"
             alt="Confirm">
    </div>
</template>

<script>
    export default {
        name: "FieldPicker",
        data: function () {
            return {
                currField: '',
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
        },
        methods: {
            confirmPressed: function () {
                this.$emit('confirmPressed', 'CityPicker');
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
    input#field-picker{
        grid-column: 7 / 10;
        height: min-content;
        background-color: #C4C4C4;
        border-style: none;
        font-size: $pickerSize;
    }
    img#confirm{
        grid-column: 6 / 8;
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
        input#field-picker{
            justify-self: center;
            margin-bottom: 10%;
            margin-top: 7%;
        }
        img#confirm{
            justify-self: center;
            align-self: center;
            width: min-content;
        }
        div#plain-text, input#field-picker{
            font-size: $mobilePickerSize;
        }
    }
    @media only screen and (max-width: 1033px) and (orientation: landscape) {
        div#plain-text, input#field-picker {
            font-size: $mobilePickerSize - 1vw;
        }
        div#outer-container{
            grid-row: 4 / 6;
        }
        input#field-picker{
            justify-self: center;
            margin-bottom: 7%;
            margin-top: 7%;
        }
        div#plain-text{
            margin-top: 7%;
        }
    }
</style>