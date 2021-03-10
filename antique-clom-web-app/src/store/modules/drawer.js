const SET_DRAWER_STATE = "SET_DRAWER_STATE";

export const drawer = {
    state: () => ({
        drawer: true
    }),
    mutations: {
        [SET_DRAWER_STATE](state, payload) {
            state.drawer = payload;
        }
    },
    actions: {
        toggleDrawer({ commit, getters }) {
            commit(SET_DRAWER_STATE, !getters.drawer);
        },
        setDrawer({ commit }, payload) {
            commit(SET_DRAWER_STATE, payload);
        }
    },
    getters: {
        drawer({ drawer }) {
            return drawer;
        }
    }
};