<template>
	<view>
		<uni-nav-bar :fixed="true" :leftIcon="true" status-bar background-color="#FEE2D5" left-text="返回" title="每日一文" @clickLeft="naviback">
		
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			naviback(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>

</style>
