<template>
	<view class="relative1" :style="'height:'+ screenHeight +'px !important;'">
		<image class="pic_background" src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/beijing.gif"></image>
		<view class="container1">
			<view class="d-flex j-sb flex-wrap" style="margin-top: 150rpx;">
				<view class="a-center j-center d-flex flex-1" @click="chatWithCat">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/chat2.png" mode="widthFix"
						style="width: 170rpx;"></image>
				</view>
				<view class="d-flex a-center j-center flex-1">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/chifan3.png" mode="widthFix"
						style="width: 170rpx;"></image>
				</view>
				<view class="d-flex a-center j-center flex-1">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shujiao2.png" mode="widthFix"
						style="width: 170rpx;"></image>
				</view>
				<view class="d-flex a-center j-center flex-1">
					<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shunmao2.png" mode="widthFix"
						style="width: 170rpx;"></image>
				</view>
			</view>
			<view class="" style="margin-left: 100rpx;margin-top: 300rpx;
			width: 200rpx; height: 200rpx;" @click="enterHouse"></view>
			<tqb-tabbar activeIndex="1" />
		</view>
	</view>
</template>

<script>
	import click from '@/common/click.js'
	export default {
		data() {
			return {
				screenHeight: 0
			}
		},
		onLoad() {
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {

		},
		onBackPress() {

		},
		onHide() {

		},
		methods: {
			enterHouse() {
				click.play_ding()
				uni.switchTab({
					url: '/pages/play/play'
				})
			},
			chatWithCat() {
				click.play_ding()
				uni.navigateTo({
					url: '/pages/chat/chat'
				});
			}
		}
	}
</script>

<style>
	.relative1 {
		min-height: 100%;
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
