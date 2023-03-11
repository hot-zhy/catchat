<script>
	import initApp from '@/common/appInit.js';
	import openApp from '@/common/openApp.js';
	// #ifdef H5
	openApp() //创建在h5端全局悬浮引导用户下载app的功能
	// #endif
	import checkIsAgree from '@/pages/uni-agree/utils/uni-agree.js';
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	export default {
		globalData: {
			searchText: '',
			appVersion: {},
			config: {},
			$i18n: {},
			$t: {}
		},
		onLaunch: function() {
			console.log('App Launch')
			// uni.setStorage({
			// 	key: 'token',
			// 	data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2Y1ZTExZDA5ZTI5ODdjZWU5YjJjNjMiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sInVuaUlkVmVyc2lvbiI6IjEuMC4xMyIsImlhdCI6MTY3NzEyNDE5MCwiZXhwIjoxNjc3MTMxMzkwfQ.zLonqELT1NisDdM9B0nu3w80i89nY0b4AzEsxzofLf0',
			// 	success: function () {
			// 		console.log('success');
			// 	}
			// });


			this.globalData.$i18n = this.$i18n
			this.globalData.$t = str => this.$t(str)
			initApp();
			uniIdPageInit()

			// #ifdef APP-PLUS
			//checkIsAgree(); APP端暂时先用原生默认生成的。目前，自定义方式启动vue界面时，原生层已经请求了部分权限这并不符合国家的法规
			// #endif

			// #ifdef H5
			// checkIsAgree(); // 默认不开启。目前全球，仅欧盟国家有网页端同意隐私权限的需要。如果需要可以自己去掉注视后生效
			// #endif

			// #ifdef APP-PLUS
			//idfa有需要的用户在应用首次启动时自己获取存储到storage中
			/*var idfa = '';
			var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
			if(plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')){
				var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
				idfa = plus.ios.invoke(identifier, 'UUIDString');
				plus.ios.deleteObject(identifier);
			}
			plus.ios.deleteObject(manager);
			console.log('idfa = '+idfa);*/
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import '@/common/common.css';

	page,
	body {
		background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/sakura.png');
		background-size: cover;
		box-sizing: border-box;
	}

	.pix_box {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
	}

	.one {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.two {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.pdg {
		width: fit-content;
	}

	.a {
		position: relative;
	}

	.a image {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.showt {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.2);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.showt_box {
		width: 520rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		overflow: hidden;
	}

	.showt_title {
		font-size: 34rpx;
		font-weight: 500;
		color: #333333;
		padding: 60rpx 30rpx;
		text-align: center;
		margin: auto;
	}

	.showt_btn {
		width: 100%;
		height: 88rpx;
		border-top: 1rpx solid rgba(0, 0, 0, 0.12);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.showt_btn view {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		font-weight: 500;
	}

	.showt_btnl {
		color: #999999;
		border-right: 1rpx solid rgba(0, 0, 0, 0.12);
		margin-left: -1rpx;
	}

	.custom {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100000;
	}

	.custom_box {
		width: 520rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
	}

	.custom_title {
		font-size: 34rpx;
		font-weight: 500;
		color: #333333;
		padding: 60rpx 30rpx;
		line-height: 42rpx;
		text-align: center;
	}

	.custom_btn {
		width: 100%;
		height: 88rpx;
		border-top: 1rpx solid rgba(0, 0, 0, 0.12);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.custom_btn view {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		font-weight: 500;
	}

	.custom_btn_l {
		color: #999999;
		margin-left: -1rpx;
		border-right: 1rpx solid rgba(0, 0, 0, 0.12);
	}

	.custom_btn_r {
		color: #23A0F0;
	}
</style>
