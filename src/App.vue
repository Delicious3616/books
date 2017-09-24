<template>
 
<transition name="slide-fade">
      <router-view></router-view>
</transition>
    
    

</template>

<script>
import './assets/todos.less'
import './assets/less/site.less'
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
  .slide-fade-enter-active{
  transition:all .3s ease;
}
.slide-fade-leave-active{
  transition:all .3s cubic-bezier(1.0,0.5,0.8,1.0);
}
.slide-fade-enter,.slide-fade-leave-active{
  transition:tranlateX(-430px);
  opacity:0
}
</style>
