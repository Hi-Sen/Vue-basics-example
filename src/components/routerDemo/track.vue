<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{text}}</p>
    <p>用户 id = {{ $route.params.id }}</p>
    <hr>
    <h3>个人信息</h3>
    <div v-html="InformationText"></div>
  </div>
</template>

<script>
export default {
	name: 'Track',
	data () {
		return {
            msg: '动态路由，命名路由',
            text: '例如：使用场景，用户列表，获取用户个人信息，通过路由动态匹配用户 id ，请求接口，渲染不同个人信息页面',
            InformationText: '暂无个人信息'
		}
    },
    mounted () {
      this.getInformationValue()
    },
    methods: {
        // 根据动态路由 id 获取个人信息
        getInformationValue () {
          return this.$route.params.id == 123 ?
          this.InformationText = '<p>姓名：张三</p><p>性别：男</p>' :
          this.InformationText = '<p>姓名：李梅</p><p>性别：女</p>'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
