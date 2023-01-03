import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
 这里处理vuex的能力，进行全局数据状态的共享
 state: 共享全局数据
 mutation: 用于修改state中的数据，而且只能通过mutation修改数据，注意：mutation只能用于同步修改数据
 action: 用于异步修改全局数据：通过异步调用mutation中的方法，来修改全局数据。
 getter：用于将state属性加工处理后，形成新的属性，类似于vue的计算数据，state属性改变，getter内容也会改变
*/

const store = new Vuex.Store({
    state: {
        count: 0,
        age: 18

    },
    mutations: {
        modCount(state, value) {
            state.count = value;
        },
        modAge(state, value) {
            state.age = value;
        }
    },
    actions: {
        modCountAsync(context, value) {
            setTimeout(() =>{
                context.commit('modCount', value);
            },3000);
        },
        modeAgeAsync(context, value) {
            setTimeout( () => {
                context.commit('modAge', value);
            },3000);
        }
    },
    getters: {
        newAge: state => {
            return "最新的age为：" + state.age
        }
    }
});

export default store;