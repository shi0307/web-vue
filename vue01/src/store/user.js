/*
    这里存放vuex的modules部分，模块化使用vuex能力
*/

const state = {
    name: 'xiaoming'
}

const mutations = {
    modName: (state, val) => {
        state.name = val;
    }
}

const actions = {
    modNameAsync: ({commit}, val) => {
        setTimeout(() => {
            commit('modName', val)
        }, 2000);
    }
}

const getters = {
    newName: (state) => {
        return '最新的name:' + state.name;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}