<template>
	<view class="content">
		<!-- <view class="head" :style="{'padding-top':statusBarHeight * 2 + 'rpx'}">关于我们
			<view class="back" @click="back">
				<view class="back_pic a"><image src="../../static/fanhui@2x.png" mode=""></image></view>
			</view>
		</view>
		<view :style="{'height':statusBarHeight * 2 + 88 + 'rpx'}"></view> -->
		<view :style="{'height':1 + 'rpx'}"></view>
		<view class="main" v-if="arr">
			<view class="main_box" v-for="(item,index) in arr" :key="index">
				<view class="main_head">
					<view class="main_head_l">{{item.title}}</view>
					<view class="main_con" style="margin-top: 0;font-size: 28rpx;"><text :selectable="true">{{item.number}}</text></view>
				</view>
			</view>
			<view class="main_box">
				<view class="main_head">
					<view class="main_head_l">版本号</view>
					<view class="main_con" style="margin-top: 0;font-size: 28rpx;"><text :selectable="true">V 1.0.0</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	export default{
		data(){
			return{
				statusBarHeight:'',
				arr:'',
				version_nums:''
			}
		},
		onLoad() {
			that = this;
			that.version_nums = that.version_num;
			uni.getSystemInfo({
				success(e) {
					that.statusBarHeight = e.statusBarHeight;
				}
			})
			that.center();
		},
		methods:{
			back(){
				uni.navigateBack({
					
				})
			}, 
			center(){
				uniCloud.callFunction({
					name: 'cloudc'
				}).then((res) => {
					console.log(57,res)
					that.arr = res.result.data;
				}).catch((err) => {
					console.error(err)
				})
			}
		}
	}
</script>

<style>
	@import '../../components/css/news.css';
</style>
