const AUTH_LOGIN = "AUTH_LOGIN";
const AUTH_LOGOUT = "AUTH_LOGOUT";

const roles = [
    {
        name: "Paciente",
        icon: "mdi-badge-account",
        access: [
        ],
    },
    {
        name: "Administrador",
        icon: "mdi-account-lock",
        access: [
            { title: "Gestionar Áreas", icon: "mdi-book-multiple", uri: "/administrator/areas" },
            { title: "Neva Área", icon: "mdi-book-plus", uri: "/administrator/areas/create" },
        ],
    },
];

export const auth = {
    state: () => ({
        authenticated: {
            email: "test@gmail.com",
            roles
        },
    }),
    mutations: {
        [AUTH_LOGIN](state, credentials) {
            state.authenticated = { ...credentials };
        },
        [AUTH_LOGOUT](state) {
            state.authenticated = null;
        }
    },
    actions: {
        login({ commit }, credentials) {
            commit(AUTH_LOGIN, {
                ...credentials,
                roles
            });
        },
        logout({ commit }) {
            commit(AUTH_LOGOUT);
        }
    },
    getters: {
        authenticated({ authenticated }) {
            return authenticated;
        },
    }
};