<template>
    <div>
        <h3>{{msg}}</h3>
        <hr>
        <div class="content">
            <h5>直接获取，修改</h5>
            <el-button @click="$store.commit('jian')">-</el-button>
            <span class="number"> {{count}}</span>
            <el-button type="primary"
                       @click="$store.commit('add')">+</el-button>

            <hr>
            <h5>通过mutations 唯一途径修改</h5>
            <el-button @click="jian">-</el-button>
            <span class="number"> {{count}}</span>
            <el-button type="primary"
                       @click="add">+</el-button>
            <hr>

            <h5>通过actions 提交一个 mutations 修改</h5>
            <el-button @click="jianAction">-</el-button>
            <span class="number"> {{count}}</span>
            <el-button type="primary"
                       @click="addAction">+</el-button>
        </div>

        <p>直接获取 vuex 的共享状态值为：{{this.$store.state.count}}</p>
        <p>getters 对象获取：{{getCount}}</p>
        <p>mapState获取 vuex 的共享状态值为：{{count2}}</p>

    </div>
</template>
<script>

// 使用  vuex  里边的 辅助函数，ES6 语法，
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
            msg: 'Vuex 状态管理',
        }
    },
    methods: {
        // ES6 扩展符，意思是调用 sotre 里边 mutations 和 actions  里边的方法
        ...mapMutations(['add', 'jian']),
        ...mapActions(['addAction', 'jianAction']),
    },
    computed: {
        // 同上边解释差不多 
        ...mapGetters(['getCount']),
        count (v, o) {
            return this.$store.getters.getCount;
        },
        ...mapState({
            count2: state => state.count
        })
    }
}
</script>
<style>
.content {
  margin: 40px;
}
.number {
  padding: 0 20px;
}
</style>



