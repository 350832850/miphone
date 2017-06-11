<template>
  <div id="app">
    <headerCom></headerCom>
  </div>
</template>

<script>
  import jqCom from './js/jquery-1.7.2.min.js';
  import swiperCom from './js/swiper-3.4.2.min.js';
  import commonCom from './js/common.js';
  import headerCom from './component/header.vue';

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components:{headerCom}
  }
</script>
<style lang="scss">
  @import './css/base.css';
  @import './css/swiper-3.4.2.min.css';
  html,body{font-family:Arial,Verdana,Sans-serif;}
</style>
