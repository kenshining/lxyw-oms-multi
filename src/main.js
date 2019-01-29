import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 引入国际化支持，默认使用简体中文
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n)
Vue.use(ElementUI, { ElementLocale })
//自定义样式
import './element-variables.scss'
/**
 * 
 * hidden-xs-only - 当视口在 xs 尺寸时隐藏
 * hidden-sm-only - 当视口在 sm 尺寸时隐藏
 * hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
 * hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
 * hidden-md-only - 当视口在 md 尺寸时隐藏
 * hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
 * hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
 * hidden-lg-only - 当视口在 lg 尺寸时隐藏
 * hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
 * hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
 * hidden-xl-only - 当视口在 xl 尺寸时隐藏
 */
import 'element-ui/lib/theme-chalk/display.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
