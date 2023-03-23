<template>
	<view class="content relative1" :style="'height:'+ screenHeight +'px !important;'">
		<image class="pic_background" src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/beijing2.gif">
		</image>
		<view class="container1">
			<view class="d-flex">
				<!-- 门 -->
			<view style="width: 100rpx;" :style="'height:'+screenHeight/2.1+'px !important;'" @click="enterOut"></view>
			<view class="w-100">
				<!-- 毛球 -->
				<view style="width: 80rpx"
				:style="'margin-top:'+screenHeight/40+'px !important;'+'margin-left:'+screenHeight/80+'px !important'" @click="showModal">
					<view class="d-flex">
						<image src="/static/fish.png" mode="" style="width: 80rpx;height: 80rpx;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;"></image>
					</view>
					<view class="d-flex j-center">
						{{fishCount}}
					</view>
				</view>
				<!-- 四个 -->
				<view class="d-flex a-end j-sb w-100 mb-2" :style="'height:'+screenHeight/2.9+'px !important;'">
					<view class="a-center j-center d-flex flex-1" @click="chatWithCat">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/chat2.png" mode="widthFix"
							style="width: 150rpx;"></image>
					</view>
					<view class="d-flex a-center j-center flex-1" @click="eat">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/chifan3.png" mode="widthFix"
							style="width: 150rpx;"></image>
					</view>
					<view class="d-flex a-center j-center flex-1" @click="sleep">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shujiao2.png" mode="widthFix"
							style="width: 150rpx;"></image>
					</view>
					<view class="d-flex a-center j-center flex-1" @click="smooth">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shunmao2.png" mode="widthFix"
							style="width: 150rpx;"></image>
					</view>
				</view>
				<view style="margin-top: 100rpx;margin-left: 100rpx;">
					<image :src="selectedAnimation" mode="" style="width: 300rpx;height: 300rpx;"></image>
				</view>
				<image v-if="isShowFish" src="/static/fish.png" mode="" :animation="animationData" style="width: 100rpx;height: 100rpx;margin-top: 90rpx;"></image>
			</view>
			</view>
		</view>
		<wyb-modal
		  ref="modal"
		  :show-title="false"
		  cancel-text="关闭"
		  confirm-text="去兑换"
		  :custom="true"
		  :height="500"
		  @confirm="onConfirmClick"
		>
		  <view class="">
		    <view class="font-lg font-weight mb-4 mt-4 text-center mx-4"
		      >这是你获得的小鱼干~</view
		    >
			<view class="d-flex a-center j-center">
				<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/play_ball.png" style="width: 200rpx;height: 200rpx;"></image>
			</view>
		    <view class="text-center font-md mx-5 mt-2" style="line-height: 1.5"
		      >用它可以兑换猫咪的服装和食物哦~</view
		    >
		    <view class="d-flex a-center w-100 j-center font-md ml-1 mt-3">{{
		      catName
		    }}</view>
		  </view>
		</wyb-modal>
		<tqb-tabbar activeIndex="0" />
	</view>
</template>

<script>
	import tqbTabbar from '@/components/tqb-tabbar/tqb-tabbar.vue';
	import click from '@/common/click.js';
	import wybModal from "@/components/third-party/wyb-modal/wyb-modal.vue";
	export default {
		components: {
			tqbTabbar,wybModal
		},
		data() {
			return {
				screenHeight: 0,
				selectedAnimation:"/static/eatCat2.gif",
				animationData: {},
				isShowFish:true,
				fishCount:44
			}
		},
		onShow() {
			this.image = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/xinli.png'
			this.image = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/zisha.png'
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
			this.selectedAnimation='/static/cat-init.gif'
		},
		methods: {
			onConfirmClick() {
				uni.navigateTo({
					url:'/pages/exchange/exchange'
				})
			},
			showModal(){
				this.$refs.modal.showModal() // 显示
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
			},
			eat(){
				var animation = uni.createAnimation({
					duration: 3000,
					timingFunction: 'ease-in-out'
				})
				this.animation = animation
				animation.scale(1.5, 1.5).translateY(-300).rotate(30).step()
				
				this.animationData = animation.export()
				
				setTimeout(function() {
					animation.translate(30).step()
					this.animationData = animation.export()
				}.bind(this), 3000)
				setTimeout(function(){
					this.isShowFish=false
				}.bind(this),6000)
				this.selectedAnimation='/static/eatCat2.gif'
				this.fishCount=this.fishCount+1
			},
			sleep(){
				var animation = uni.createAnimation({
					duration: 3000,
					timingFunction: 'ease-in-out'
				})
				this.animation = animation
				animation.scale(1.5, 1.5).translateY(-300).rotate(30).step()
				
				this.animationData = animation.export()
				
				setTimeout(function() {
					animation.translate(30).step()
					this.animationData = animation.export()
				}.bind(this), 3000)
				setTimeout(function(){
					this.isShowFish=false
				}.bind(this),6000)
				this.fishCount=this.fishCount+1
				this.selectedAnimation='/static/lazy-cat2.gif'
			},
			smooth(){
				var animation = uni.createAnimation({
					duration: 3000,
					timingFunction: 'ease-in-out'
				})
				this.animation = animation
				animation.scale(1.5, 1.5).translateY(-300).rotate(30).step()
				
				this.animationData = animation.export()
				
				setTimeout(function() {
					animation.translate(30).step()
					this.animationData = animation.export()
				}.bind(this), 3000)
				setTimeout(function(){
					this.isShowFish=false
				}.bind(this),6000)
				this.fishCount=this.fishCount+1
				uni.setStorageSync('FishCount',this.fishCount)
				this.selectedAnimation='/static/smooth-cat.gif'
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
