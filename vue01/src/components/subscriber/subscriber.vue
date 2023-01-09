<template>
  <div>
    <span class="component-subs-span"> 设置Axios 基础能力</span>
    <br>
    <div class="component-subs-div">
        <el-button type="primary" @click="commonGet">Get请求</el-button>
        <br>
        <br>
        <el-button type="primary" @click="commonPost">Post请求</el-button>
        <br>
        <br>
        <el-button type="primary" @click="commonAxiosGet">直接Get请求</el-button>
        <br>
        <br>
        <el-button type="primary" @click="commonServiceGet">封装Get请求</el-button>
        <br>
        <br>
        <el-button type="primary" @click="commonServicePost">封装Post请求</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import querystring from 'querystring'
import { getMethod, postMethod} from '@/axios/api/index.js'

export default {
    name: 'scriber',
    data() {
        return {
            
        }
    },
    methods: {
        async commonGet() {
            const { data: res} = await axios.get('http://192.168.1.5:8081/get', { params: { age: 18} })
            console.log(res);
        },
        async commonPost() {
            const {data: res} = await axios.post('http://192.168.1.5:8081/post', querystring.stringify({ age: 18}) );
            console.log(res);
        },
        async commonAxiosGet() {
            const {data: res} = await axios({
                method: 'get',
                url: 'http://192.168.1.5:8081/get',
                params: {
                    age: 18
                }
            })
            console.log(res);
        },
        async commonServiceGet() {
            const {data: res} = await getMethod({age: 18});
            console.log(res);
        },
        async commonServicePost() {
            const {data: res} = await postMethod({name: 'xiaoming'});
            console.log(res);
        }
    
    }
}
</script>

<style scoped>
.component-subs-span {
    text-align: center;
    margin: 30px;
    padding: 30px;
}
.component-subs-div {
    margin: 15px;
    padding: 10px;
}
</style>>
