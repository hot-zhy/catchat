<template>
	<view>
		<uni-nav-bar :fixed="true" :leftIcon="true" status-bar background-color="#FEE2D5" left-text="返回" title="寻求帮助" @clickLeft="naviback">
		
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				naviback(){
					uni.navigateBack({
						delta:1
					})
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
