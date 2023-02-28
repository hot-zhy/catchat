<template>
	<view class="content">
		<view class="d-flex a-center j-center"
			style="background-image: url('https://th.bing.com/th/id/R.2992d5c09a20eae598efdd78c47f3199?rik=o1%2bD0mtFKwoEhQ&riu=http%3a%2f%2fimg.sccnn.com%2fbimg%2f338%2f52472.jpg&ehk=tpCGjcoL%2fsSkeuD9ID%2bMP3BZqK7pPp5r1gvz0cN8BLM%3d&risl=&pid=ImgRaw&r=0');height: 600rpx;background-size: 400rpx;">
			<view class="d-flex a-center j-center" @click="sets">
				<image :src="avatar" mode="widthFix" style="width: 150rpx;border-color: #af4416;border-width: 4upx;border: solid; border-radius: 100%;"></image>
				<view class="head_box_lb">
					<view class="heaD_box_la_1">{{nickname}}</view>
					<view class="heaD_box_la_2" v-if="token != '' && vals">ID：{{vals._id}}</view>
				</view>
			</view>
		</view>

		<view class="d-flex a-center j-center" style="margin-top: -80rpx;">
			<view class="ml-2 border-custom px-3 py-3"
				style="width: 200rpx;border-radius: 30rpx;background-color: #f0c170;">
				<view class="d-flex a-center j-center">
					<image src="/static/ball.png" mode="widthFix" style="width: 60rpx;"></image>
				</view>
				<view class="d-flex a-center j-center" style="font-size: 30rpx;">毛球24个</view>
			</view>
			<view class="ml-2 mr-2 text-center border-custom px-5 py-3" style="width: 450rpx;border-radius: 30rpx;
			background-color:#f0caff;">
				进入猫咪世界
			</view>
		</view>
		<view class="content d-flex j-center a-center mt-3" style="z-index: 1000;">
			<view class="d-flex">
				<view class=" p-3" style="border-radius: 30rpx;">
					<view class="d-flex a-center j-center">
						<image src="/static/clothes.png" style="width: 50rpx;height: 50rpx;"></image>
					</view>
					<view class="">我的装扮</view>
				</view>
				<view class=" p-3 mx-3" style="border-radius: 30rpx;">
					<view class="d-flex a-center j-center">
						<image src="/static/food.png" style="width: 50rpx;height: 50rpx;"></image>
					</view>
					<view class="">我的食物</view>
				</view>
				<view class=" p-3" style="border-radius: 30rpx;">
					<view class="d-flex a-center j-center">
						<image src="/static/catt.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
					<view class="">我的猫猫</view>
				</view>
			</view>
		</view>
		<view class="content d-flex j-center a-center" style="z-index: 1000;">
			<view class="d-flex mt-2">
				<view class=" p-3" style="border-radius: 30rpx;">
					<view class="d-flex a-center j-center">
						<image src="/static/sleep.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
					<view class="">我的作息</view>
				</view>
				<view class=" p-3 mx-3" style="border-radius: 30rpx;">
					<view class="d-flex a-center j-center">
						<image src="/static/night.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
					<view class="">夜间模式</view>
				</view>
				<view class=" p-3" style="border-radius: 30rpx;" @click="mySettings">
					<view class="d-flex a-center j-center">
						<image src="/static/setting.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
					<view class="">我的设置</view>
				</view>
			</view>
		</view>

		<tqb-tabbar activeIndex="2" />
	</view>
</template>

<script>
	var that;
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				arr: [{
					src: '../../static/yonghuxieyi@2x.png',
					title: '用户协议'
				}, {
					src: '../../static/yinsizhengce@2x.png',
					title: '隐私政策'
				}, {
					src: '../../static/lianxiwomen@2x.png',
					title: '联系我们'
				}, {
					src: '../../static/shezhi@2x.png',
					title: '设置'
				}],
				token: '',
				vals: '',
				avatar: '',
				nickname: '',
			}
		},
		onLoad() {

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
					that.avatar = '/static/head.png';
					that.nickname = '未登录';
				}
			});
		},
		methods: {
			mySettings(){
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
					that.avatar = res.result.data[0].avatar;
					that.nickname = res.result.data[0].nickname;
				}).catch((err) => {
					console.error(err)
				})
			},
			sets() {
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
			inset #0cab9c 0 0 0 6px,
			inset #48e4d6 0 0 0 7px,
			inset #e5f9f7 0 0 0 8px,
			inset #bfecf7 0 0 0 9px
	}
</style>
