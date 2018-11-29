import axios from "axios";

const state = () => ({
    list: []
})

const mutations = {
    initial (state, data) {
        state.list = data
    },
    add (state, user) {
        state.list = [...state.list, user]
    }
}

const actions = {
    retrieveToken,
    async add({commit}, user) {
        const res = await axios.post('http://localhost:4000/', {login: user, test: false})

        commit('add', res.data)
    }
}

export { state, mutations, actions };