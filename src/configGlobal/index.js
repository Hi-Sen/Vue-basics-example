

/**
 * 全局方法，全局变量，
 * 通过 Vue.prototype 暴露出去
 * 使用方式在 main.js 里引入 该JS文件
 * import global from './configGlobal'
 * 然后
 * Vue.prototype.Glo = global
 */

let num = 0;
const config = {
    globalColor:'red',
    // 全局的方法
    setColor () {
        num ++
        console.log('我是全局的方法 '+ num)
    }
}

export default config;