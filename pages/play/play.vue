<template>
	<view class="content">
		<uni-nav-bar :fixed="true" status-bar background-color="#FEE2D5">
			<block>
				<view class="d-flex a-center">
					<view class="left d-flex">
						<image src="/static/cat_two.png" mode="widthFix" style="width: 100rpx"></image>
					</view>
					<view style="margin-left: 40rpx; font-size: 40rpx;font-weight: 600;">喵喵玩</view>
				</view>
			</block>
		</uni-nav-bar>
		
		<scroll-view class="scroll-view_H" scroll-x="true" >
			<view class="scroll-view-item_H btnn btnn--stripe">
				<view class="">
					<view class="font-weight">喂猫猫吃饭</view>
					<image src="/static/eat3.png" mode="widthFix" style="width: 150rpx;"></image>
				</view>
			</view>
			<view class="scroll-view-item_H btnn btnn--stripe">
				<view class="">
					<view class="font-weight">猫咪睡觉</view>
					<image src="/static/relax.png" mode="widthFix" style="width: 150rpx;"></image>
				</view>
			</view>
			<view class="scroll-view-item_H btnn btnn--stripe">
				<view class="">
					<view class="font-weight">猫咪晒太阳</view>
					<image src="/static/sun.png" mode="widthFix" style="width: 150rpx;"></image>
				</view>
			</view>
		</scroll-view>

		<tqb-tabbar activeIndex="0" />
	</view>
</template>

<script>
	import tqbTabbar from '@/components/tqb-tabbar/tqb-tabbar.vue'
	import UniNavBar from "@/components/third-party/uni-ui/uni-nav-bar/uni-nav-bar.vue";
	export default {
		components: {
			tqbTabbar,
			UniNavBar
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 300rpx;
		margin-left: 10rpx;
		margin-top: 20rpx;
		text-align: center;
		font-size: 36rpx;
		border-radius: 50rpx;
		margin-right: 10rpx;
	}

	.border-item {
		border-width: 5upx;
		border-color: chocolate;
		border-style: solid;
	}


	$color-gray: #510f01;
	$color-black: #000;
	$stripe-height: 7px;
	$btnn-color: $color-gray;
	$btnn-background: #000;
	$btnn-color-hover: #000;
	$btnn-background-hover: $color-gray;
	$border-color: $color-gray;
	$border-color-hover: $color-black;

	@mixin reset-button {
		overflow: visible;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		font: inherit;
		line-height: normal;
		cursor: pointer;
		-moz-user-select: text;

		&:-moz-focus-inner {
			padding: 0;
			border: 0;
		}
	}

	@keyframes stripe-slide {
		0% {
			background-position: 0% 0;
		}

		100% {
			background-position: 100% 0;
		}
	}

	.btnn {
		@include reset-button;
		text-decoration: none;
		margin-left: 10rpx;
		margin-top: 20rpx;
		text-transform: uppercase;
		padding: 16px 36px 22px;
		background-image: url('https://th.bing.com/th/id/OIP.QOOKgvmo0LkOnfQYGe3j0gHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7');
		color: $btnn-color;
		border: 7rpx solid $border-color;
		border-radius: 35rpx;
		margin-bottom: 16px;
		transition: all .5s ease;

		&--stripe {
			overflow: hidden;
			position: relative;

			&:after {
				content: '';
				display: block;
				height: $stripe-height;
				width: 100%;
				background-image: repeating-linear-gradient(45deg,
						$border-color,
						$border-color 1px,
						transparent 2px,
						transparent 5px);
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
				border-top: 1px solid $border-color;
				position: absolute;
				left: 0;
				bottom: 0;
				background-size: $stripe-height $stripe-height;
			}

			&:hover {
				background-color: $btnn-background-hover;
				color: $btnn-color-hover;
				border-color: $border-color-hover;

				&:after {
					background-image: repeating-linear-gradient(45deg,
							$btnn-color-hover,
							$btnn-color-hover 1px,
							transparent 2px,
							transparent 5px);
					border-top: 1px solid $border-color-hover;
					animation: stripe-slide 12s infinite linear forwards;
				}
			}
		}

		&--large {
			width: 50%;
		}

		&--radius {
			border-radius: 36px;
		}
	}
</style>
