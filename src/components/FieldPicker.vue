<template>
    <div id="outer-container">
        <div id="plain-text">Вы хотите...</div>
        <label for="field-picker"></label>
        <input v-model="currField" list = "fields" id = "field-picker" name = "field-picker">
        <datalist id = "fields">
            <option v-for="field in fields" :key="field.id"> {{field.fieldName}} </option>
        </datalist>
        <button type="submit" v-on:click="confirmPressed">My name jef</button>
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
    input#field-picker{
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
        div#plain-text, input#field-picker{
            font-size: $mobilePickerSize;
        }
    }
</style>