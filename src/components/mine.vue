<template>
  <div style="height:100%">
    <div class="page-personal-center" data-log="个人中心">
      <div class="hd">
        <div class="user">
          <div class="img nologin"></div>
          <div class="name">登录/注册</div>
        </div>
      </div>
      <div class="a1">
        <a href="javascript:;" class="bill"><cite>我的订单</cite>
          <div class="span more">全部订单</div>
        </a>
        <ul class="nav">
          <li class="dfk">
            <a href="javascript:;">
              <div class="icon"></div>
              <span>待付款</span>
            </a>
          </li>
          <li class="dah">
            <a href="javascript:;">
              <div class="icon"></div>
              <span>待收货</span>
            </a>
          </li>
          <li class="thx">
            <a href="javascript:;">
              <div class="icon"></div>
              <span>退换修</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="items">
        <ul>
          <li class="i-wallet">
            <a href="javascript:;"><cite>我的优惠</cite></a>
          </li>
        </ul>
        <ul>
          <li class="i-service">
            <a href="javascript:;"><cite>服务中心</cite></a>
          </li>
          <li class="i-mihome">
            <a href="javascript:;"><cite>小米之家</cite></a>
          </li>
        </ul>
        <ul>
          <li class="i-setting">
            <a href="javascript:;"><cite>设置</cite></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="fix-footer">
        <ul>
          <li>
            <a href="javascript:;">
              <router-link to="/home">
                <div class="home"></div>
                首页
              </router-link>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <router-link to="/type">
                <div class="type"></div>
                分类
              </router-link>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <router-link to="/buycar">
                <div class="buycar"></div>
                购物车
              </router-link>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <router-link to="/mine">
                <div class="my"></div>
                我的
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .page-personal-center {
    background: #f5f5f5;
    min-height: 100%;
    padding-bottom: 1rem;
  }

  .page-personal-center .hd {
    background: url(../../static/img/bg_0425a88.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: .32rem 0;
  }

  .page-personal-center .hd .user {
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: start;
    -webkit-box-pack: start;
  }

  .page-personal-center .hd .user .img.nologin {
    border: 0;
    background: url(../../static/img/avatar_e29d6cb.png) no-repeat;
    background-size: 100% auto;
  }

  .page-personal-center .hd .user .img {
    margin: 0 .16rem 0 .32rem;
    width: .96rem;
    min-width: .96rem;
    height: .96rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid rgba(255, 255, 255, .4);
  }

  .page-personal-center .hd .user .name {
    color: #fff;
    font-size: .24rem;
  }

  .page-personal-center .a1 {
    background: #fff;
    overflow: hidden;
  }

  .page-personal-center .a1 a.bill {
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    padding-right: .56rem;
    height: .8rem;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    position: relative;
    color: rgba(0, 0, 0, .54);
  }

  .page-personal-center .a1 a.bill cite {
    font-size: .28rem;
    padding: 0 0 0 .32rem;
    color: rgba(0, 0, 0, .87);
  }

  .page-personal-center .a1 a.bill .span {
    font-size: .24rem;
  }

  .page-personal-center .a1 a.bill .span::after {
    content: "";
    position: absolute;
    right: .32rem;
    top: 50%;
    width: .2rem;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0, -50%, 0) rotateZ(135deg);
    -webkit-transform: translate3d(0, -50%, 0) rotateZ(135deg);
  }
  .page-personal-center .a1 .nav {
    display: box;
    display: -webkit-box;
    box-align: stretch;
    -webkit-box-align: stretch;
    box-pack: justify;
    -webkit-box-pack: justify;
    padding: 0 .8rem;
  }
  .page-personal-center .a1 .nav li {
    display: box;
    display: -webkit-box;
    box-align: stretch;
    -webkit-box-align: stretch;
    box-pack: justify;
    -webkit-box-pack: justify;
    text-align: center;
    font-size: .24rem;
    color: rgba(0,0,0,.87);
  }
  .page-personal-center .a1 .nav li a {
    padding: .4rem 0;
    position: relative;
    display: block;
  }
  .page-personal-center .a1 .nav li a .icon {
    width: .48rem;
    height: .48rem;
    background: url(../../static/img/nav-1_f74ca94.png) no-repeat center 0;
    background-size: 100% auto;
    margin: 0 auto .16rem;
  }
  .page-personal-center .items {
    margin-top: .16rem;
  }
  .page-personal-center .items ul {
    background: #fff;
    margin-bottom: .16rem;
  }
  .page-personal-center .items ul li.i-wallet {
    background-image: url(../../static/img/i-wallet_13a8fda.png);
  }
  .page-personal-center .items ul li.i-service {
    background-image: url(../../static/img/i-wallet_13a8fda.png);
  }
  .page-personal-center .items ul li.i-mihome {
    background-image: url(../../static/img/i-wallet_13a8fda.png);
  }
  .page-personal-center .items ul li.i-setting {
    background-image: url(../../static/img/i-wallet_13a8fda.png);
  }
  .page-personal-center .items ul li>a {
    display: block;
    padding-right: .56rem;
    padding-left: 1.12rem;
    height: 1.04rem;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
  }
  .page-personal-center .items ul li {
    position: relative;
    color: rgba(0,0,0,.54);
    background: no-repeat .32rem center;
    background-size: .48rem auto;
    border-bottom: 1px solid rgba(0,0,0,.15);
  }
  .page-personal-center .items ul li::after {
    content: "";
    position: absolute;
    right: .32rem;
    top: 50%;
    width: .2rem;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotateZ(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotateZ(135deg);
  }
  .page-personal-center .items ul li>a {
    display: block;
    padding-right: .56rem;
    padding-left: 1.12rem;
    height: 1.04rem;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
  }
  .page-personal-center .items ul li>a cite {
    font-size: .28rem;
    color: rgba(0,0,0,.87);
  }
</style>
