<template>
  <div class="app-container">
<!--    <img src="./assets/logo.png">-->
    <mt-header fixed title="HL">VueTestPro</mt-header>
<!--    <mt-Header>VueTestPro</mt-Header>-->
    <nav>
      <router-link to="home">
        <span>首页</span>
      </router-link>
      <router-link to="member">
        <span>会员</span>
      </router-link>
      <router-link to="shopping">
        <span>购物车</span>
      </router-link>
      <router-link to="search">
        <span>搜索</span>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

  import { Toast } from "mint-ui";
export default {
    data(){
        return{
            newsList: []
        };
    },
    created(){
      this.func();
    },
    methods:{
        func(){
            this.$http.get('').then(result =>{
                if (result.body.status === 0){
                    this.newsList = result.body.message;
                  Toast('1');
                }else {
                  Toast('2');
                }
            })
        }
    },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .app-container{
    margin-top: 40px;
  }

  .v-enter,
  .v-leave-to{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>
