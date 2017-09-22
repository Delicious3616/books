<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for = 'todo in todos'>
          <label>
            {{todo.value}}
          </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title:"vue-todos",
      todos:[
        {value:"阅读一本关于前端开发的书6666",done:false},
        {value:"补充范例模板",done:true},
        {value:"阅读一本关于前端开发的书2",done:false}
      ]
    }
  }
}
</script>

<style>

</style>
