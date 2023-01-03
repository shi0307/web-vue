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
    <el-span>{{$store.getters.newAge}}</el-span>
    <br>
    <el-span>{{newAge}}</el-span>
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
        ...mapState(['age']),
        ...mapGetters(['newAge']),
    },
    methods: {
        modCount(val) {
            this.$store.commit('modCount', val);
        },
        modCountAsync(val) {
            this.$store.dispatch('modCountAsync', val);
        },
        ...mapMutations(['modAge']),
        ...mapActions(['modeAgeAsync']),
    }
}
</script>

<style>

</style>