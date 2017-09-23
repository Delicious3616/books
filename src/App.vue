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
      </li>
    </ul>
  </div>
</template>

<script>
import './assets/todos.less'
import './assets/site.less'
export default {
  name: 'app',
  data () {
    return {
      title:"vue-todos",
      todos:[
        {value:"阅读一本关于前端开发的书888",done:false},
        {value:"补充范例模板",done:true},
        {value:"阅读一本关于前端开发的书2",done:false}
      ]
    }
  }
}
</script>

<style>

</style>
