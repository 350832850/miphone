<template>
  <div>
    <div class="cart-index">
      <div class="type-header">
        <div class="left">
          <a class="home">
            <img src="../../static/img/icon_back_n.png" class="ib">
          </a>
        </div>
        <div class="tit">
          <h2 data-log="HEAD-标题-商品分类">
            <span class="title">购物车</span>
          </h2>
        </div>
        <div class="right">
          <a href="javascript:;">
            <div class="icon iconfont">&#xe62a;</div>
          </a>
        </div>
      </div>
      <div class="cart-index-wrap">
        <div class="nologin">
          <a href="javascript:;"><span>登录后享受更多优惠</span><em>去登录</em></a>
        </div>
        <div class="noitems grey">
          <a href="javascript:;"><span>购物车还是空的</span><em>去逛逛</em></a>
        </div>
        <div class="list-recommend">
          <div>
            <div class="recommend-title">为你推荐</div>
          </div>
        </div>
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
  export default{}
</script>
<style>
  .page-category .page-category-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding-bottom: 1.2rem;
  }

  .type-header {
    display: box;
    display: -webkit-box;
    height: .84rem;
    box-align: center;
    -webkit-box-align: center;
    padding: 0 .2rem;
    background: #f2f2f2;
    position: relative;
    border-bottom: 1px solid #eee;
  }

  .type-header .left .ib {
    width: .44rem;
    height: .44rem;
  }

  .type-header .tit {
    -webkit-box-flex: 1;
    box-flex: 1;
    width: 100%;
  }

  .type-header .tit h2 {
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: .84rem;
  }

  .type-header .tit span {
    font-size: .3rem;
    color: #666;
    font-weight: 400;
  }

  .type-header .right a {
    display: inline-block;
    margin-left: .2rem;
    width: .44rem;
    height: .44rem;
  }

  .type-header .right a .iconfont {
    font-size: .44rem;
  }

  .type-header .right .icon {
    color: #999;
  }

  .cart-index-wrap .nologin > a {
    height: 1.04rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    padding: 0 .56rem 0 .32rem;
    position: relative;
    color: rgba(0, 0, 0, .54);
  }

  .cart-index-wrap .nologin > a span {
    font-size: .32rem;
    color: rgba(0, 0, 0, .87);
    display: block;
  }

  .cart-index-wrap .nologin > a em {
    font-size: .24rem;
  }

  .cart-index {
    background: #FFF;
  }

  .cart-index-wrap .nologin > a::after {
    content: "";
    position: absolute;
    right: .32rem;
    top: 50%;
    width: .18rem;
    height: .18rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0, -50%, 0) rotateZ(135deg);
    -webkit-transform: translate3d(0, -50%, 0) rotateZ(135deg);
  }

  .cart-index-wrap .noitems{
    background: #ebebeb;
  }

  .cart-index-wrap .noitems .grey > a {
    height: 1.04rem;
  }

  .cart-index-wrap .noitems > a {
    display: block;
    height: 1.44rem;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: center;
    -webkit-box-pack: center;
    font-size: .24rem;
  }

  .cart-index-wrap .noitems > a span {
    display: block;
    line-height: .8rem;
    background: url(../../static/img/cartnull_0de91f1.png) no-repeat 0 center;
    background-size: auto 100%;
    padding: 0 .16rem 0 .96rem;
    color: rgba(0, 0, 0, .27);
  }

  .cart-index-wrap .noitems > a em {
    display: block;
    border: 1px solid rgba(0, 0, 0, .15);
    box-sizing: border-box;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    color: rgba(0, 0, 0, .87);
  }

  .list-recommend .recommend-title {
    height: .8rem;
    line-height: .8rem;
    background: #fff;
    font-size: .3rem;
    padding: 0 .32rem;
  }
</style>
