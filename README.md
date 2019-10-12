这个demo 完美的展示了 前端主流框架 Vue  的基础知识，包括：
基础指令，声明周期，插件使用，路由，组件基础，组件封装，状态管理，全局变量，全局方法，组件之间方法调用等...

setState (state, obj) {
    Object.assign(state, obj)
}

text: {
    handler (v, o) {
        console.log(v, o);
    },
    immediate: true,   // 刷新加载 立马触发一次 handler
    deep: true        // 可以深度检测到 person 对象的属性值的变化
}

changeText () {
    this.text = Math.floor(Math.random() * 100)
},

filters: {
    upCase: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
},


# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
