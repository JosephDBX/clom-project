const AUTH_LOGIN = "AUTH_LOGIN";
const AUTH_LOGOUT = "AUTH_LOGOUT";

const account = {
    uid: "",
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
        account,
        roles
    }),
    mutations: {
        [AUTH_LOGIN](state, account) {
            state.account = { ...account };
            state.roles = roles;
        },
        [AUTH_LOGOUT](state) {
            state.account = null;
            this.roles = [];
        }
    },
    actions: {
        login({ commit }, credentials) {
            commit(AUTH_LOGIN, {
                ...credentials
            });
        },
        logout({ commit }) {
            commit(AUTH_LOGOUT);
        }
    },
    getters: {
        account({ account }) {
            return account;
        },
        roles({ roles }) {
            return roles;
        },
    }
};