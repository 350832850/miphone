<template>
	<div>
		<div class="header" :style="{background:color}">
			<div class="header-logo">
				<img :src="logoP">
			</div>
			<div class="search">
				<a href="javascript:;">
					<span>搜索商品名称</span>
				</a>
			</div>
			<div class="login">登录</div>
		</div>
		<div class="banner swiper-container">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="(v,i) in sliderArr"><img :src="v"></li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
		<div class="section">
			<div class="section1">
				<div class="news">
					<a href="javascript:;">
						<img src="src/img/sczb_ed0a4af.png">
					</a>
				</div>
				<!-- <div class="swiper-news">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide news-title">不止于大！小米Max 2开箱图赏来啦</div>
				    <div class="swiper-slide news-title">高考后暑假怎么过？开始规划吧！</div>
				    <div class="swiper-slide news-title">话高考，看看80、90、00后们怎么说</div>
				  </div>
				</div> -->
				<div class="news-title">不止于大！小米Max 2开箱图赏来啦</div>
			</div>
			<div class="grey"></div>
			<div class="section2">
				<div class="leftB">
					<a href="javascript:;">
						<img src="src/img/2017053016302036020.png">
					</a>
				</div>
				<div class="rightT">
					<a href="javascript:;">
						<img src="src/img/2017053016274130701.png">
					</a>
				</div>
				<div class="rightB">
					<a href="javascript:;">
						<img src="src/img/2017053016272539404.png">
					</a>
				</div>
			</div>
			<div class="section3">
				<div class="miAir">
					<a href="javascript:;">
						<img src="src/img/2017053016263864476.png">
					</a>
				</div>
				<div class="single">
					<a href="javascript:;">
						<img src="src/img/2017053016270888459.png">
					</a>
				</div>
			</div>
			<div class="section4">
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016281124131.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016312797060.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016282583598.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016283836295.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016285125106.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053016321262103.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="section3">
				<div class="miAir">
					<a href="javascript:;">
						<img src="src/img/2017053016275738465.png">
					</a>
				</div>
				<div class="single">
					<a href="javascript:;">
						<img src="src/img/2017053016291249745.png">
					</a>
				</div>
			</div>
			<div class="section4">
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053017363072732.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053017360097445.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053017361650558.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053017364288369.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/73a5b91039cf2d97291948a06c0c4283.jpg">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
					<div class="right">
						<div class="img">
							<a href="javascript:;">
								<img src="src/img/2017053017365460507.png">
							</a>
						</div>
						<div class="txt">
							<a href="javascript:;">
								<h3>小米5c 64GB</h3>
								<h4>又轻又薄的拍照手机</h4>
								<p>￥<b>1499</b></p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="more">
				<a href="javascript">更多新品 ></a>
			</div>
			<div class="section5">
				<div class="listB">
					<a href="javascript:;">
						<img src="src/img/2017053019460519159.png">
					</a>
				</div>
			</div>
			<div class="section6">
				<div class="list">
					<div class="img">
						<a href="javascript:;">
							<img src="src/img/2017053019590629719.png">
						</a>
					</div>
					<div class="txt">
						<a href="javascript:;">
							<h3>米兔智能故事机</h3>
							<h4>海量好故事，智能语音交互，材质安全耐用</h4>
							<p>￥<b>199</b></p>
						</a>
					</div>
				</div>
				<div class="list">
					<div class="txt">
						<a href="javascript:;">
							<h3>米兔智能故事机</h3>
							<h4>海量好故事，智能语音交互，材质安全耐用</h4>
							<p>￥<b>199</b></p>
						</a>
					</div>
					<div class="img">
						<a href="javascript:;">
							<img src="src/img/2017053019584522557.png">
						</a>
					</div>
				</div>
				<div class="list">
					<div class="img">
						<a href="javascript:;">
							<img src="src/img/2017053021121350812.png">
						</a>
					</div>
					<div class="txt">
						<a href="javascript:;">
							<h3>米兔智能故事机</h3>
							<h4>海量好故事，智能语音交互，材质安全耐用</h4>
							<p>￥<b>199</b></p>
						</a>
					</div>
				</div>
			</div>
			<div class="more">
				<a href="javascript">更多米家智能产品 ></a>
			</div>
			<div class="section7">
				<a href="javascript:;">
					<div class="list">
						<div class="goods">
							<img src="src/img/2017053021222534238.png">
						</div>
						<div class="goodsR">
							<img src="src/img/2017053021233475089.png">
						</div>
					</div>
				</a>
				<a href="javascript:;">
					<div class="list">
						<div class="goods">
							<img src="src/img/2017053021232166984.png">
						</div>
						<div class="goodsR">
							<img src="src/img/2017053021221462635.png">
						</div>
					</div>
				</a>
				<a href="javascript:;">
					<div class="list">
						<div class="goods">
							<img src="src/img/2017053021223636534.png">
						</div>
						<div class="goodsR">
							<img src="src/img/2017053021230766780.png">
						</div>
					</div>
				</a>
			</div>
			<div class="likeSign">
				<img src="src/img/e95ade2750a7fde92369b416c7d3176d.jpg">
			</div>
			<div class="lastSection"></div>
		</div>
		<div class="footer">
			<div class="fix-footer">
				<ul>
					<li>
						<a href="javascript:;">
							<div class="home"></div>
							<router-link to="/home">首页</router-link>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="type"></div>
							<router-link to="/type">分类</router-link>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="buycar"></div>
							<router-link to="/buycar">购物车</router-link>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="my"></div>
							<router-link to="/my">我的</router-link>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				color:'',
				s:'',
				logoP:'src/img/logo_e6453b2.png',
				sliderArr:['src/img/2017053010392512577.jpg','src/img/2017053010410643609.jpg','src/img/2017053010412624033.jpg','src/img/2017053010415933828.jpg'],
				newsIndex:0,
				newsArr:['不止于大！小米Max 2开箱图赏来啦','端午小长假，这五个景点值得一去','大家都在找的G20专供毛巾，只要19.9元！'],
				section4Arr:['src/img/2017053010392512577.jpg','src/img/2017053010410643609.jpg','src/img/2017053010412624033.jpg','src/img/2017053010415933828.jpg']
			}
		},
		 methods: {
		   	menu() {
		    	this.s = document.body.scrollTop||document.documentElement.scrollTop;
		    	if(this.s>200){
		    		this.color = 'orange';
		    	}else{
		    		this.color = '';
		    	}
		    }
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay: 3000,
    			direction: 'horizontal',
   				loop: true,
    			pagination: '.swiper-pagination'
    		});
    		window.addEventListener('scroll', this.menu);
   //  		var mySwiper2 = new Swiper('.swiper-news',{
			// 	direction : 'vertical',
			// 	autoplay: 3000,
			// 	loop: true
			// })

		}
	}
</script>
<style>
	.header{
		border-top: 1px solid #b6b4b6;
		position: fixed;
		top: 0;
		left:0;
		width: 100%;
		color: #fff;
		z-index:20;
		display: flex;
		display: -webkit-flex;
		display: box;
    	display: -webkit-box;
    	box-align: center;
        -webkit-box-align: center;
    	box-pack: center;
        -webkit-box-pack: center;
		justify-content:center;
		padding: .15rem 0;
	}
	.header-logo{
		width: 0.5rem;
		height: 0.33rem;
		margin-top: .1rem;
	}
	.header-logo img{
		max-width: 100%;
		height: 100%;
		display: block;
	}
	.search{
		width: 5.2rem;
		height: .51rem;
		line-height: .51rem;
		background: url(../img/search_bfba941.png) no-repeat;
		background-size: 100% 100%;
		border-radius: .04rem .04rem;
		margin-left: .25rem;
		margin-right: .21rem;
	}
	.search a{
		display: block;
		font-size: .25rem;
		color: #b2b2b2;
		padding-left: .6rem;
	}
	.login{
		font-size: .25rem;
		margin-top: .1rem;
	}
	.banner{
		width: 100%;
		max-width: 720px;
		height: 5.12rem;
		max-height: 512px;
	}
	.banner li{
		width: 100%;
		max-width: 720px;
		height: 5.12rem;
		max-height: 512px;
	}
	.banner li img{
		width: 100%;
		height: 100%;
	}
	.section img{width: 100%;}
	.section1{
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		height: .78rem;
		display: box;
   	 	display: -webkit-box;
    	box-align: center;
        -webkit-box-align: center;
    	box-pack: start;
        -webkit-box-pack: start;
	}
	.section1 .news{
		width: 1.5rem;
	}
	.section1 .news-title{
		line-height: .28rem;
		max-width: 5.5rem;
		font-size: .23rem ;
		margin: .25rem 0;
		padding-left: .2rem;
		border-left: 1px solid #b2b2b2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.grey{
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		height: .18rem;
		background: #f5f5f5;
	}
	.section2{
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		height: 5.08rem;
		position: relative;
	}
	.section2 .leftB{
		position: absolute;
		left:0;
		top:0;
		width: 3.58rem;
	}
	.section2 .rightT{
		position: absolute;
		left:3.62rem;
		top:0;
	}
	.section2 .rightB{
		position: absolute;
		left: 3.62rem;
		top: 2.56rem;
	}
	.section3,.section4,.more,.section5,.section6,.section7,.likeSign{
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
	}
	.section3 .miAir{
		width: 100%;
		border-top: .15rem solid #f5f5f5;
		border-bottom: .15rem solid #f5f5f5;
	}
	.section4 .list{
		overflow: hidden;
		margin-top: .02rem;
		width: 100%;
		display: box;
    	display: -webkit-box;
    	box-align: center;
    	-webkit-box-align: center;
    	box-pack: justify;
    	-webkit-box-pack: justify;
	}
	.section4 .list .left{margin-right: .04rem;}
	.section4 .list .left,.section4 .list .right{width: 3.6rem;}
	.section4 .list .txt{
		margin: .27rem 0 .25rem .27rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.section4 .list .txt h3,.section6 .list .txt h3{
		font-size: .25rem;
		color: #272727;
		margin-bottom: .15rem;
	}
	.section4 .list .txt h4,.section6 .list .txt h4{
		font-size: .23rem;
		color: #777;
	}
	.section4 .list .txt p,.section6 .list .txt p{
		font-size: .16rem;
		color: #ff6000;
	}
	.section4 .list .txt p b,.section6 .list .txt p b{
		font-size: .28rem;
		margin-left: .1rem;
	}
	.more{
		text-align: center;
		padding-top: .35rem;
		padding-bottom: .35rem;
	}
	.more a{
		font-size: .27rem;
		color: #676767;
	}
	.section5{
		border-top: .15rem solid #f5f5f5;
	}
	.section6 .list{
		display: box;
    	display: -webkit-box;
    	box-align: center;
    	-webkit-box-align: center;
    	box-pack: justify;
    	-webkit-box-pack: justify;
	}
	.section6 .list .img{
		width: 3.6rem;
	}
	.section6 .list .txt{
		width: 3.6rem;
		box-sizing: border-box;
		white-space: normal;
		padding: .7rem .3rem 1.3rem;
	}
	.section7 .list{
		width: 100%;
		height: 4.8rem;
		position: relative;
		margin-bottom: .02rem;
	}
	.section7 .list .goods{
		position: absolute;
		left:0;
		top:0;
		width: 3.58rem;
	}
	.section7 .list .goodsR{
		position: absolute;
		left:3.62rem;
		top:0;
	}
	.likeSign{margin-bottom: .04rem;}
	.lastSection{height: .89rem;}
	.footer{
		position: fixed;
		left:0;
		bottom:0;
		width: 100%;
		height: .89rem;
		background: #fff;
		z-index: 99;
		border-top: 1px solid #e0e0e0;
	}
	.footer .fix-footer ul{
		display: box;
    	display: -webkit-box;
    	box-align: center;
    	-webkit-box-align: center;
    	box-pack: center;
    	-webkit-box-pack: center;
	}
	.footer .fix-footer ul li{
		box-flex: 1;
		-webkit-box-flex: 1;
		text-align: center;
	}
	.footer .fix-footer ul li router-link{
		color: #ff5722;
		font-size: .2rem;
	}
	.footer .fix-footer ul li div{
		width: .4rem;
    	height: .4rem;
    	margin : .15rem auto 0;
	}
    .footer .fix-footer ul li .home{
    	background: url(../img/spr1_5b2e09c.png) no-repeat 0 -2.4rem;
    	background-size: .4rem 3.2rem;
    }
    .footer .fix-footer ul li .type{
    	background: url(../img/spr1_5b2e09c.png) no-repeat 0 0;
    	background-size: .4rem 3.2rem;
    }
    .footer .fix-footer ul li .buycar{
    	background: url(../img/spr1_5b2e09c.png) no-repeat 0 -0.8rem;
    	background-size: .4rem 3.2rem;
    }
    .footer .fix-footer ul li .my{
    	background: url(../img/spr1_5b2e09c.png) no-repeat 0 -1.6rem;
    	background-size: .4rem 3.2rem;
    }
</style>