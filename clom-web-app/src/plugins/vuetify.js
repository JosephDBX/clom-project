import '@mdi/font/scss/materialdesignicons.scss'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconFont: 'mdi'
    },
    theme: {
        dark: false,
        default: 'light',
        themes: {
            light: {
                primary: colors.blue.darken3,
                secondary: colors.teal.darken3,
                accent: colors.amber.darken3,
                error: colors.red.darken3,
                info: colors.lightBlue.darken3,
                success: colors.lightGreen.darken3,
                warning: colors.amber.darken3,
            },
        },
    },
});