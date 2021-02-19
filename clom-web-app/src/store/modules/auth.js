const AUTH_LOGIN = "AUTH_LOGIN";
const AUTH_LOGOUT = "AUTH_LOGOUT";

const account = {
    displayName: "JosephDBX",
    email: "st.joseph.dbx@gmail.com",
    photoURL: "https://picsum.photos/300/300",
    state: true,
}

const roles = [
    {
        name: "Usuario",
        icon: "mdi-badge-account",
        access: [
            { title: "Panel de Usuario", icon: "mdi-view-dashboard", uri: "/user-panel" },
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
            ...account,
            roles
        },
    }),
    mutations: {
        [AUTH_LOGIN](state, credentials) {
            state.authenticated = { ...credentials, roles };
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