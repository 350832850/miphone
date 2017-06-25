<template>
  <div>
    <div class="page-category" data-log="商品分类">
      <div class="page-category-wrap">
        <div class="type-header">
          <div class="left">
            <a class="home">
              <img src="../../static/img/icon_back_n.png" class="ib">
            </a>
          </div>
          <div class="tit">
            <h2 data-log="HEAD-标题-商品分类">
              <span class="title">商品分类</span>
            </h2>
          </div>
          <div class="right">
            <a href="javascript:;">
              <div class="icon iconfont">&#xe62a;</div>
            </a>
          </div>
        </div>
        <div class="list-wrap">
          <div class="js-list-item category0">
            <div class="f-list">
              <div v-for="(val, key) in jsonL">
                <div :class="`section ${ key}`">
                  <div class="cells_auto_fill">
                    <div data-index="0" class="body" style="width: 5rem; height: 2rem;">
                      <div class="items J_linksign-customize" style="width: 5rem; height: 2rem;">
                        <a :name="key" class="exposure" href="javascript:;" v-for="(v, i) in val.ad">
                          <div class="img">
                            <img class="lazy" data-src="" :src="v.img"
                                 style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-for="(valu, inde) in val.list">
                  <div class="section">
                    <div name="m1" class="category_title">
                      <span>{{valu.title}}</span>
                    </div>
                  </div>
                  <div class="section">
                    <div class="category_group">
                      <div class="box">
                        <div class="product" v-for="(value, index) in valu.productList">
                          <a class="exposure" href="javascript:;">
                            <div class="img">
                              <img class="big lazy" data-src=""
                                   :src="value.img"
                                   style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                            </div>
                            <div class="name"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-navbar" :style="{top:top + 'rem'}">
          <ul>
            <li v-for="(v, i) in listNav" @click="addClass(v.ky)" :class="v.ky==iNow?'active':''">
              <a :href="`#${v.ky}`"><span>{{v.name}}</span></a></li>
          </ul>
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
    </div>
  </div>
</template>
<script>
  import {listNav, jsonL} from '../../static/js/data.js'
  import $ from 'jquery'
  export default{
    data () {
      return {
        s: '',
        offsetTop: 0,
        top: '',
        iNow: 'new',
        listNav,
        jsonL
      }
    },
    mounted () {
      this.scroll()
      let _this = this
      $('.page-category .page-category-wrap').on('scroll', function () {
        _this.scroll()
      })
    },
    methods: {
      scroll () {
        this.s = $('.page-category .page-category-wrap').scrollTop()
        if (this.s === 0) {
          this.top = 0.84
        }
        if (this.s >= 89) {
          this.top = 0
        }
      },
      addClass (ky) {
        this.iNow = ky
      }
    }
  }
</script>
<style>
  .scrollToTop {
    transform: translateY(0)
  }
  .page-category .page-category-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
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

  .page-category .list-wrap {
    margin-left: 1.52rem;
    padding: 2px .32rem;
    overflow: hidden;
  }

  .page-category .list-navbar {
    position: fixed;
    top: .84rem;
    bottom: .8rem;
    width: 1.52rem;
    margin-top: 1px;
    z-index: 90;
    border-right: 1px solid #efefef;
    overflow: hidden;
  }

  .page-category .list-navbar > ul {
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -.3rem;
    padding: .2rem .3rem .2rem 0;
    background: #fefefe;
    overflow-y: auto;
  }

  .page-category .list-navbar > ul li {
    font-size: .34rem;
    height: .9rem;
    line-height: .9rem;
    overflow: hidden;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: transform .1s linear;
    transform-origin: center center;
    transform: scale(0.76);
    -webkit-transition: -webkit-transform .1s linear;
    -webkit-transform-origin: center center;
    -webkit-transform: scale(0.76);
  }

  .page-category .list-navbar > ul li.active {
    transform: scale(1);
    -webkit-transform: scale(1);
  }

  .page-category .list-navbar > ul li.active a{
    color: #fb7d34;
  }

  .f-list .cells_auto_fill .items img {
    width: 100%;
  }

  .f-list .category_group .product .img img {
    width: 100%;
  }

  .f-list .category_title {
    background: #fff;
    font-size: .28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
  }

  .f-list .category_title span {
    position: relative;
  }

  .f-list .category_title span::before, .f-list .category_title span::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: .4rem;
    border-top: 1px solid #e0e0e0;
    transform: translate3d(-150%, -50%, 0);
    -webkit-transform: translate3d(-150%, -50%, 0);
  }

  .f-list .category_title span::after {
    left: auto;
    right: 0;
    transform: translate3d(150%, -50%, 0);
    -webkit-transform: translate3d(150%, -50%, 0);
  }

  .f-list .category_group .product {
    float: left;
    width: 33.33333%;
    text-align: center;
    margin-top: .2rem;
    margin-bottom: .3rem;
    overflow: hidden;
  }

  .f-list .category_group .product .img {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    background: #FFF;
    overflow: hidden;
  }

  .f-list .category_group .product .name {
    margin-top: .28rem;
    white-space: nowrap;
    font-size: .23rem;
    color: rgba(0, 0, 0, .54);
  }

  .f-list .name {
    font-size: .28rem;
    color: rgba(0, 0, 0, .87);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .f-list .category_group .box {
    width: 100%;
    overflow: hidden;
  }
</style>
