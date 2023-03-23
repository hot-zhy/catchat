<template>
	<view class="content">
		<view class="d-flex a-center j-center relative1" :style="'height:'+ screenHeight +'px !important;'">
			<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/bg4.png" class="pic_background" mode=""></image>
			<view class="container1">
				<view class="d-flex a-center j-center" :style="'margin-top:'+ screenHeight/6 +'px !important;'" @click="sets">
					<image :src="avatar" style="width: 100rpx;height:100rpx;border-color: #af4416;border-width: 4upx;border: solid; border-radius: 100%;"></image>
					<view class="head_box_lb">
						<view class="heaD_box_la_1">{{nickname}}</view>
						<view class="heaD_box_la_2" v-if="token != '' && vals">ID：{{vals._id}}</view>
					</view>
				</view>
				<view class="" :style="'margin-top:'+ screenHeight/10 +'px !important;'" style="">
					<view class="d-flex j-sb a-center mx-2" style="">
						<view class="" @click="mySettings">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shezhi.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
						<view class="">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/maoBall.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
						<view class="">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/maomi.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
					</view>
					<view class="d-flex j-sb a-center mx-2">
						<view class="" @click="exchange">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/duihuan.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
						<view class="">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/tongji.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
						<view class="">
							<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/ceshi.png" mode="widthFix" style="width: 180rpx;"></image>
						</view>
					</view>
				</view>
			</view>
		</view>


		<tqb-tabbar activeIndex="2" />
	</view>
</template>

<script>
	import click from '@/common/click.js';
	var that;
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				screenHeight:0,
				arr: [{
					src: 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/yonghuxieyi@2x.png',
					title: '用户协议'
				}, {
					src: 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/yinsizhengce@2x.png',
					title: '隐私政策'
				}, {
					src: 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/lianxiwomen@2x.png',
					title: '联系我们'
				}, {
					src: 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shezhi@2x.png',
					title: '设置'
				}],
				token: '',
				vals: '',
				avatar: '',
				nickname: '',
			}
		},
		onLoad() {
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {
			that = this;
			uni.getStorage({
				key: 'token',
				success: function(res) {
					that.token = res.data;
					that.cent();
				},
				fail() {
					that.token = '';
					that.avatar = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/catt.png';
					that.nickname = '未登录';
				}
			});
		},
		methods: {
			exchange(){
				uni.navigateTo({
					url:'/pages/exchange/exchange'
				})
			},
			mySettings(){
				click.play_ding()
				if (that.token == '') {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
					})
				} else {
					uni.navigateTo({
						url: '/pages/my/set'
					})
				}
			},
			cent() {
				uniCloud.callFunction({
					name: 'cloudd',
					data: {
						token: that.token
					}
				}).then((res) => {
					// console.log(69,res)
					that.vals = res.result.data[0];
					that.avatar = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/bg3.png';
					that.nickname = res.result.data[0].nickname;
				}).catch((err) => {
					console.error(err)
				})
			},
			sets() {
				click.play_ding()
				if (that.token == '') {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
					})
				} else {
					uni.navigateTo({
						url: '/pages/my/set'
					})
				}
			},
			main_bs(i) {
				if (i == 0) {
					uni.navigateTo({
						url: '/pages/my/home'
					})
				} else if (i == 1) {
					uni.navigateTo({
						url: '/pages/my/index'
					})
				} else if (i == 2) {
					uni.navigateTo({
						url: '/pages/my/service'
					})
				} else if (i == 3) {
					if (that.token == '') {
						uni.navigateTo({
							url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
						})
					} else {
						uni.navigateTo({
							url: '/pages/my/set'
						})
					}
				}
			}
		}
	}
</script>

<style>
	@import '@/components/css/my.css';

	body {
		-webkit-font-smoothing: antialiased;
	}

	.border-custom {
		box-shadow:
			inset #221801 0 0 0 1px,
			inset #059c8e 0 0 0 1px,
			inset #0cab9c 0 0 0 2px,
			inset #48e4d6 0 0 0 3px,
			inset #e5f9f7 0 0 0 3.5px,
			inset #bfecf7 0 0 0 5px
	}
	
	.relative1 {

		width: 100%;
		position: relative;
	
	}
	
	
	
	.pic_background {
		height: 100%;
		width: 100%;
		position: absolute;
	
	}
	
	
	
	.container1 {
	
		height: 100%;
	
		width: 100%;
	
		flex-direction: column;
	
		position: absolute;
	
	}
</style>
