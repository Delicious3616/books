<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li v-for = '(todo,index) in todos' 
      :class="{'checked':todo.done}"
      :id="index">
          <label>
            {{index+1}}.{{todo.value}}
          </label>
          <time>{{todo.created | date}}</time>
      </li>
    </ul>

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
