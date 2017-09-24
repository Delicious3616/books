<template>
  <div id="app">
    <div class="tabs">
      <ul>
        
          <router-link :to="{name:'Home'}" tag="li">
            <div>
              <img src="./assets/images/home.svg">
              <div>首页</div>
            </div>
          </router-link>
                
        
          <router-link :to="{name:'Explorer'}" tag="li">
            <div>
              <img src="./assets/images/category.svg">
              <div>分类</div>
            </div>
          </router-link>
           
        
          <router-link :to="{name:'Cart'}" tag="li">
            <div>
              <img src="./assets/images/cart.svg">
              <div>购物车</div>
            </div>
          </router-link>
               
        
          <router-link :to="{name:'Me'}" tag="li">
            <div>
              <img src="./assets/images/me.svg">
              <div>我</div>
            </div>
          </router-link>
   
        
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>
