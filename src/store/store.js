import Vuex from 'vuex';
import Vue from 'vue';
//Loading Vuex
Vue.use(Vuex);
//Creating the store, which will be imported from main js
export default new Vuex.Store({
    state: {
        showingResults: false,
        city: '',
        field: ''
    },
    getters: {
        isShowingResults: state => state.showingResults,
        getCity: state => state.city,
        getField: state => state.field
    },
    mutations: {
        changeShowingResults (state) {
            state.showingResults = !state.showingResults;
        },
        changeCity (state, newCity) {
            state.city = newCity;
        },
        changeField (state, newField) {
            state.field = newField;
        }
    },
    actions: {
        changeShowingResults (context) {
            context.commit('changeShowingResults');
            this.$emit('changedShowingResults');
        },
        changeCity (context, newCity) {
            context.commit('changeCity', newCity);
        },
        changeField (context, newField) {
            context.commit('changeField', newField);
        }
    }
})