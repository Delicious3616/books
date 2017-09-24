<template>
  <div id="app">

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/todos.less'
import './assets/site.less'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

export default {
  name: 'app',
  data () {
    return {
      title:"vue-todos",
      todos:[
        {value:"阅读一本关于前端开发的书",done:false,created:Date.now()},
        {value:"补充范例模板",done:true,created:Date.now()+300000},
        {value:"阅读一本关于前端开发的书",done:false,created:Date.now()-300000}
      ]
    }
  },
  filters:{
    date(val){
      return moment(val).calendar()
    }
  }
}
</script>

<style>

</style>
