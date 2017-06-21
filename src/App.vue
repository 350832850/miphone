<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  html, body {
    font-family: Arial, Verdana, Sans-serif;
    height: 100%;
  }

  #app {
    height: 100%;
    position: relative;
    width: 100%;
    max-width: 720px;
    margin: 0 auto
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .89rem;
    background: #fff;
    z-index: 99;
    border-top: 1px solid #e0e0e0;
  }

  .footer .fix-footer ul {
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: center;
    -webkit-box-pack: center;
  }

  .footer .fix-footer ul li {
    box-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
  }

  .footer .fix-footer ul li router-link {
    color: #ff5722;
    font-size: .2rem;
  }

  .footer .fix-footer ul li div {
    width: .4rem;
    height: .4rem;
    margin: .15rem auto 0;
  }

  .footer .fix-footer ul li .home {
    background: url(../static/img/spr1_5b2e09c.png) no-repeat 0 -2.4rem;
    background-size: .4rem 3.2rem;
  }

  .footer .fix-footer ul li .type {
    background: url(../static/img/spr1_5b2e09c.png) no-repeat 0 0;
    background-size: .4rem 3.2rem;
  }

  .footer .fix-footer ul li .buycar {
    background: url(../static/img/spr1_5b2e09c.png) no-repeat 0 -0.8rem;
    background-size: .4rem 3.2rem;
  }

  .footer .fix-footer ul li .my {
    background: url(../static/img/spr1_5b2e09c.png) no-repeat 0 -1.6rem;
    background-size: .4rem 3.2rem;
  }
  cite{font-style: normal;}
</style>
