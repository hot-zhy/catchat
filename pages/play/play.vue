<template>
	<view class="content relative1" :style="'height:'+ screenHeight +'px !important;'">
		<image class="pic_background" src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/beijing2.gif">
		</image>
		<view class="container1">
			<view class="d-flex">
			<view style="width: 100rpx;" :style="'height:'+screenHeight/2.1+'px !important;'" @click="enterOut"></view>
			<view class="d-flex a-end j-sb w-100 mx-4">
				<view class="" @click="listen">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/listen.png" mode="" style="width: 150rpx;height: 150rpx;"></image>
				</view>
				<view class="" @click="read">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/read.png" mode="" style="width: 150rpx;height: 150rpx;"></image>
				</view>
				<view class="" @click="phone">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/phone.png" mode="" style="width: 150rpx;height: 150rpx;"></image>
				</view>
			</view>
			</view>
			<view class="d-flex j-center" @click="chatWithCat">
				<image :src="image" style="width: 400rpx;height: 320rpx;"></image>
			</view>
		</view>
		<tqb-tabbar activeIndex="0" />
	</view>
</template>

<script>
	import tqbTabbar from '@/components/tqb-tabbar/tqb-tabbar.vue';
	import click from '@/common/click.js';
	export default {
		components: {
			tqbTabbar
		},
		data() {
			return {
				image: 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/bukaixin.png',
				screenHeight: 0
			}
		},
		onShow() {
			this.image = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/xinli.png'
			this.image = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/zisha.png'
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			listen(){
				click.play_ding()
				uni.navigateTo({
					url:'/pages/listen/listen'
				})
			},
			read(){
				click.play_ding()
				uni.navigateTo({
					url:'/pages/read/read'
				})
			},
			phone(){
				click.play_ding()
				uni.navigateTo({
					url:'/pages/phone/phone'
				})
			},
			chatWithCat() {
				uni.navigateTo({
					url: '/pages/chat/chat'
				});
				click.play_ding()
			},
			enterOut() {
				uni.switchTab({
					url: '/pages/index/index'
				})
				click.play_ding()
			}
		}
	}
</script>

<style lang="scss">
	.relative1 {
		width: 100%;
		min-height: 100%;
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
