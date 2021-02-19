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
                primary: colors.blue.darken1,
                secondary: colors.teal.darken1,
                accent: colors.amber.darken1,
                error: colors.red.darken1,
                info: colors.cyan.darken1,
                success: colors.lightGreen.darken1,
                warning: colors.amber.darken1,
            },
            dark: {
                primary: colors.blue.darken4,
                secondary: colors.teal.darken4,
                accent: colors.amber.darken4,
                error: colors.red.darken4,
                info: colors.cyan.darken4,
                success: colors.lightGreen.darken4,
                warning: colors.amber.darken4,
            },
        },
    },
});