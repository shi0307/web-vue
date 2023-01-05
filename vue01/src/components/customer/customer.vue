<template>
  <div>
    <span>全局共享的数据count值为：{{$store.state.count}}</span>
    <br>
    <el-button type="primary" @click="modCount(20)">修改count值为20</el-button>
    <el-button type="primary" @click="modCountAsync(50)">3秒后修改count值为50</el-button>
    <br>
    <span>全局共享的数据age值为：{{age}}</span>
    <br>
    <el-button type="primary" @click="modAge(25)">修改age值为25</el-button>
    <el-button type="primary" @click="modeAgeAsync(60)">3秒后修改age值为60</el-button>
    <br>
    <span>{{$store.getters.newAge}}</span>
    <br>
    <span>{{newAge}}</span>
    <br>
    <span>全局共享数据name值：{{$store.state.user.name}}</span>
    <br>
    <el-button type="primary" @click="modModuleName('xiaohong')">修改name值</el-button>
    <br>
    <span>全局共享name: {{name}} + {{newName}}</span>
    <br>
    <el-button type="primary" @click="modName('xiaohei')">修改name值</el-button>
    <br>
    <el-button type="primary" @click="modNameAsync('xiaobai')">2秒修改name值</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    name: 'customer',
    data() {
        return {}
    },
    computed: {
        ...mapState({
            age: state => state.age
        }),
        ...mapState('user', ['name']),
        ...mapGetters(['newAge']),
        ...mapGetters('user',['newName']),
    },
    methods: {
        modCount(val) {
            this.$store.commit('modCount', val);
        },
        modCountAsync(val) {
            this.$store.dispatch('modCountAsync', val);
        },
        modModuleName(val) {
            // user模块下的mutations方法前面，需要加/user
            this.$store.commit('user/modName', val);
        },
        ...mapMutations(['modAge']),
        ...mapMutations('user', ['modName']),
        ...mapMutations({
            modName(commit,val) {
                commit('user/modName', val);
            }
        }),
        ...mapActions(['modeAgeAsync']),
        ...mapActions({
            modNameAsync: 'user/modNameAsync'
        }),
        ...mapActions('user', ['modNameAsync']),
    }
}
</script>

<style>

</style>