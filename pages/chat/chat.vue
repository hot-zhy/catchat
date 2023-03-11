<template>
	<view class="content">
		<uni-nav-bar :fixed="true" :leftIcon="true" status-bar background-color="#FEE2D5" left-text="返回" title="畅所欲言" @clickLeft="naviback">

		</uni-nav-bar>
		<view class="body mx-3 mt-2">
			<view v-for="(item,index) in arr" :key="index">
				<view class="body_l" v-if="item.type == 1">
					<view class="body_lpic a">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/cat_two.png" mode=""></image>
					</view>
					<view class="body_box">
						<view class="body_jt">
							<u-icon name="play-left-fill" color="#F6F7FB" size="20"></u-icon>
						</view>
						<view class="body_lcon pdg" v-html="item.content.replace(/\n/g,'<br/>')"></view>
					</view>
				</view>
				<view class="body_r" v-if="item.type == 2">
					<view class="body_box">
						<view class="body_rjt">
							<u-icon name="play-right-fill" color="#4E82FA" size="20"></u-icon>
						</view>
						<view class="body_rcon pdg" v-html="item.content.replace(/\n/g,'<br/>')"></view>
					</view>
					<view class="body_rpic a">
						<image v-if="token != ''" :src="vals.avatar" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="body_l" v-if="pix_box2" style="margin-left: 30rpx;">
			<view class="body_lpic a">
				<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/jqr.png" mode=""></image>
			</view>
			<view class="body_box">
				<view class="body_jt">
					<u-icon name="play-left-fill" color="#F6F7FB" size="20"></u-icon>
				</view>
				<view class="body_lcon pdg" v-html="'请稍后'"></view>
			</view>
		</view>
		<!--  #ifndef  H5 -->
		<view class="flooer">
			<!--  #endif -->
			<!--  #ifdef  H5 -->
			<view class="flooer">
				<!--  #endif -->
				<view class="flooer_l">
					<u--input placeholder="你想和我聊点什么?" border="none" clearable v-model="prompt"
						placeholderStyle="color: #7F8084"></u--input>
				</view>
				<view class="flooer_r pdg" @click="sendout">
					<view class="flooer_rpic a">
						<image src="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/fasong.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				prompt: '',
				token: '',
				arr: [{
					type: 1,
					content: '有什么烦恼来和我说吧~虽然我可能不能帮你解决，但是至少说出来心里会好受一点~'
				}, {
					type: 1,
					content: '和我说说关于你的任何吧~'
				}],
				vals: '',
				retext: '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', //从chatgpt官网获取key并在这里配置
				pix_box: false,
				timer: null,
				wen: '',
				app_name: this.app_name,
				platform: this.platform,
				pix_box2: false,
				urls: ''
			}
		},
		onLoad() {
			that = this;
		},
		onShow() {
			that = this;
			uni.getStorage({
				key: 'token',
				success: function(res) {
					that.token = res.data;
					that.center();
				},
				fail() {
					that.token = '';
				}
			});
		},
		onBackPress() {
			that.pix_box = false;
			uni.hideLoading()
			clearInterval(this.timer);
		},
		onHide() {
			that.pix_box = false;
			uni.hideLoading()
			clearInterval(this.timer);
		},
		methods: {
			naviback(){
				uni.navigateBack({
					delta: 1
				});
				click.play_ding()
			},
			sendout() {
				if (that.token == '') {
					uni.navigateTo({
						url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd'
					})
					return
				}
				if (that.prompt == '') {
					uni.showToast({
						title: '问题不能为空',
						icon: 'none'
					})
					return
				}
				if (that.pix_box == true) {
					uni.showToast({
						title: '不能同时发送多个问题哦',
						icon: 'none'
					})
					return
				}
				subt(that.retext)

				function subt(vals) {
					;
					var encode_version = 'jsjiami.com.v5',
						qdiyr = '__0xf6366',
						__0xf6366 = ['V8KNwrDDui4=', 'EizDrA==', 'w618PgULw5bCng==', 'L8OYw5fDp0HDtTV9d2BUwqw=',
							'TsKVw7Brw7M=', 'FsOxw7s=', 'CMKuByTCv3M=', '5pCb5LyC5aWO6LSQ77yt6K+F6YSx6K6V', 'wp9KR2I=',
							'ccK4wpECwpTClCEjAw==', 'w6DCqcKRw6Ub', 'w653NsKlKQ==', 'w7l4WsKfZAg=', 'O8KDXT5XNA==',
							'wqMqw7hMaClkAivCh8KDRQ==', 'SwrCo8OkeQQ=',
							'54iJ5pys5Y2T77+uwrDDpeS+hOWuouael+W8p+eroO+9rOi+s+iunOaWtOaOj+aIqeS4teeZquW3heS/sA==',
							'dcOSw5TDgkQ=', 'YQvCiMO5Zg==', 'AjzDtH/Dmw==', 'ccOOw7jDo13DvT/DtMKnYhMMw4Ie', 'HMOOw5fDg34=',
							'w7pwUUPCgGc=', 'SsONw73CisObw4kpPA==', 'w7kDw71ZwrBRwrU=', 'w485D8OO', 'woYRLGE=',
							'eRrCrsKjYkscccKTw7fDucOGd8OcXhE=', 'wqM5w7BESz4=', 'IHDDlMKOwrPDtcO/TMOhcRlPARjDtMOg',
							'w5MRGWcnwqjDoQ==', 'wpBNw5A=', '5pKu5L+D5ae76LW577+A6K6g6Yeg6K6e', 'L2/DisKH', 'wpohw65fQg==',
							'McODwoEOGg==', 'HxnDqHDDhw==', 'ex8hwrcx', 'AiLDp0E6', 'w6EVw6ZFwrRPwqjCvTvCt2ISUmI=',
							'w7AGCg==', 'FMK+Gis=', 'wqMiw6d2WSVuXw==', 'OgPDlWU2', 'E8Oiw70E', 'wpo4w4cD', 'w7gKw6VPwrA=',
							'w5kjDMOUwrvDkMOA', 'w4MKaVI=', 'eMOVw73Do1/DtSU=', 'b8OYw6rDvg==', 'NcKqOw==', 'wpYSw64=',
							'5Ym86ZiF54qL5pyL5Y6277+dwp1k5Ly35a+s5p2v5b+l56ud', 'L8OKwpE=', 'A8O6w68=', 'fMKawoXDpgPDiA==',
							'J8KUXDRTKA==', 'wpzDuMKcwqjClA==', 'E8O2wrIDwq44VQ==', 'JVk+FcKL', 'EcKrJA=='
						];
					(function(_0x4e6eac, _0x1c0321) {
						var _0x2903ea = function(_0x21ee93) {
							while (--_0x21ee93) {
								_0x4e6eac['push'](_0x4e6eac['shift']());
							}
						};
						_0x2903ea(++_0x1c0321);
					}(__0xf6366, 0x18a));
					var _0x20b1 = function(_0x12c884, _0x21d5c6) {
						_0x12c884 = _0x12c884 - 0x0;
						var _0x3baef1 = __0xf6366[_0x12c884];
						if (_0x20b1['initialized'] === undefined) {
							(function() {
								var _0x2add07 = typeof window !== 'undefined' ? window : typeof process ===
									'object' && typeof require === 'function' && typeof global === 'object' ?
									global : this;
								var _0x4ebe9f =
									'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
								_0x2add07['atob'] || (_0x2add07['atob'] = function(_0x1195b1) {
									var _0x551b22 = String(_0x1195b1)['replace'](/=+$/, '');
									for (var _0x2455e7 = 0x0, _0x3f18cd, _0x59484a, _0x4baee6 = 0x0,
											_0xaf9ef5 = ''; _0x59484a = _0x551b22['charAt'](_0x4baee6++); ~
										_0x59484a && (_0x3f18cd = _0x2455e7 % 0x4 ? _0x3f18cd * 0x40 +
											_0x59484a : _0x59484a, _0x2455e7++ % 0x4) ? _0xaf9ef5 +=
										String['fromCharCode'](0xff & _0x3f18cd >> (-0x2 * _0x2455e7 &
											0x6)) : 0x0) {
										_0x59484a = _0x4ebe9f['indexOf'](_0x59484a);
									}
									return _0xaf9ef5;
								});
							}());
							var _0x519f44 = function(_0x175d35, _0x5a580e) {
								var _0x4efc82 = [],
									_0xea32a7 = 0x0,
									_0x3e98fa, _0x487718 = '',
									_0x217829 = '';
								_0x175d35 = atob(_0x175d35);
								for (var _0x47ddfa = 0x0, _0x343a5e = _0x175d35['length']; _0x47ddfa <
									_0x343a5e; _0x47ddfa++) {
									_0x217829 += '%' + ('00' + _0x175d35['charCodeAt'](_0x47ddfa)['toString'](
										0x10))['slice'](-0x2);
								}
								_0x175d35 = decodeURIComponent(_0x217829);
								for (var _0xadcbf0 = 0x0; _0xadcbf0 < 0x100; _0xadcbf0++) {
									_0x4efc82[_0xadcbf0] = _0xadcbf0;
								}
								for (_0xadcbf0 = 0x0; _0xadcbf0 < 0x100; _0xadcbf0++) {
									_0xea32a7 = (_0xea32a7 + _0x4efc82[_0xadcbf0] + _0x5a580e['charCodeAt'](
										_0xadcbf0 % _0x5a580e['length'])) % 0x100;
									_0x3e98fa = _0x4efc82[_0xadcbf0];
									_0x4efc82[_0xadcbf0] = _0x4efc82[_0xea32a7];
									_0x4efc82[_0xea32a7] = _0x3e98fa;
								}
								_0xadcbf0 = 0x0;
								_0xea32a7 = 0x0;
								for (var _0x4f1953 = 0x0; _0x4f1953 < _0x175d35['length']; _0x4f1953++) {
									_0xadcbf0 = (_0xadcbf0 + 0x1) % 0x100;
									_0xea32a7 = (_0xea32a7 + _0x4efc82[_0xadcbf0]) % 0x100;
									_0x3e98fa = _0x4efc82[_0xadcbf0];
									_0x4efc82[_0xadcbf0] = _0x4efc82[_0xea32a7];
									_0x4efc82[_0xea32a7] = _0x3e98fa;
									_0x487718 += String['fromCharCode'](_0x175d35['charCodeAt'](_0x4f1953) ^
										_0x4efc82[(_0x4efc82[_0xadcbf0] + _0x4efc82[_0xea32a7]) % 0x100]);
								}
								return _0x487718;
							};
							_0x20b1['rc4'] = _0x519f44;
							_0x20b1['data'] = {};
							_0x20b1['initialized'] = !![];
						}
						var _0x58fe44 = _0x20b1['data'][_0x12c884];
						if (_0x58fe44 === undefined) {
							if (_0x20b1['once'] === undefined) {
								_0x20b1['once'] = !![];
							}
							_0x3baef1 = _0x20b1['rc4'](_0x3baef1, _0x21d5c6);
							_0x20b1['data'][_0x12c884] = _0x3baef1;
						} else {
							_0x3baef1 = _0x58fe44;
						}
						return _0x3baef1;
					};
					var resultArrey = that['arr'][_0x20b1('0x0', '4xP0')](_0x373aa6 => {
						return _0x373aa6['type'] == 0x2;
					});
					that['pix_box'] = !![];
					that[_0x20b1('0x1', '169X')] = !![];
					uni[_0x20b1('0x2', 'u5q6')]({
						'url': that[_0x20b1('0x3', '*UuY')],
						'method': _0x20b1('0x4', 'Ct*f'),
						'data': {
							'model': _0x20b1('0x5', 'SF[K'),
							'prompt': that[_0x20b1('0x6', '9$1)')],
							'max_tokens': 0x5dc,
							'temperature': 0.9,
							'presence_penalty': 0.6,
							'frequency_penalty': 0x0
						},
						'header': {
							'Content-Type': _0x20b1('0x7', 'mUYd'),
							'Authorization': _0x20b1('0x8', 'sW!)') + vals
						},
						'success'(_0x18c8dc) {
							var _0x5d7c9b = {
								'Ijqvy': function _0xeae555(_0x5ab9c1, _0x2048b1) {
									return _0x5ab9c1 == _0x2048b1;
								},
								'jpvZh': _0x20b1('0x9', '6IFG'),
								'lGvbj': 'ert',
								'wAunr': function _0x3ef908(_0x57b898, _0xd0c4ee) {
									return _0x57b898 !== _0xd0c4ee;
								},
								'qKCRu': 'undefined',
								'VLaoM': function _0x3d08a4(_0x3c15e7, _0x40377f) {
									return _0x3c15e7 + _0x40377f;
								},
								'evuru': _0x20b1('0xa', ')Mlt'),
								'dbXmU': _0x20b1('0xb', 'mUYd')
							};
							console['log'](0xa7, _0x18c8dc);
							if (_0x5d7c9b[_0x20b1('0xc', '9$1)')](_0x18c8dc['statusCode'], 0xc8)) {
								if (_0x5d7c9b[_0x20b1('0xd', 'nW^J')] !== _0x5d7c9b['jpvZh']) {
									c += _0x5d7c9b[_0x20b1('0xe', 'bcPX')];
									b = encode_version;
									if (!(_0x5d7c9b[_0x20b1('0xf', 'LY]C')](typeof b, _0x5d7c9b[_0x20b1('0x10',
											'tl]c')]) && b === _0x20b1('0x11', 'u5q6'))) {
										w[c](_0x5d7c9b['VLaoM']('删除', '版本号，js会定期弹窗，还请支持我们的工作'));
									}
								} else {
									var _0x45539c = {
										'type': 0x1,
										'content': ''
									};
									that[_0x20b1('0x12', 'sW!)')][_0x20b1('0x13', '4bEr')](_0x45539c);
									that[_0x20b1('0x14', '9$1)')] = ![];
									var _0x327682 = '',
										_0x4b39d6 = 0x0,
										_0x456b30;
									if (_0x5d7c9b[_0x20b1('0x15', 'tl]c')](_0x18c8dc[_0x20b1('0x16', '&m#v')][
											'choices'
										][0x0][_0x20b1('0x17', 'PlNj')][_0x20b1('0x18', 'u5q6')](0x0, 0x4)[
											'indexOf']('\x0a\x0a'), -0x1)) {
										_0x456b30 = _0x18c8dc['data'][_0x20b1('0x19', '*UuY')][0x0]['text'];
									} else {
										_0x456b30 = _0x18c8dc[_0x20b1('0x1a', '9u%%')][_0x20b1('0x1b', 'g!Y0')][
											0x0
										][_0x20b1('0x1c', 'g!Y0')]['replace']('\x0a\x0a', '');
									}
									that['timer'] = setInterval(() => {
										var _0x1ec28b = {
											'urVwd': function _0xbc5e7d(_0x1f1f29, _0x38badd) {
												return _0x1f1f29 < _0x38badd;
											},
											'XhMMq': _0x20b1('0x1d', '4bEr'),
											'iGQXO': _0x20b1('0x1e', '9$1)'),
											'NTchv': function _0x4a5a04(_0x283258, _0x317667) {
												return _0x283258(_0x317667);
											},
											'EfdRp': _0x20b1('0x1f', 'vuY2'),
											'XbWoY': function _0xd68aee(_0x1913d1, _0x5bb5aa) {
												return _0x1913d1 - _0x5bb5aa;
											},
											'Tsrmy': function _0x276330(_0x254c46, _0xa3bdfd) {
												return _0x254c46 * _0xa3bdfd;
											}
										};
										if (_0x20b1('0x20', 'nW^J') === _0x20b1('0x21', '&m#v')) {
											_0x327682 = _0x456b30[_0x20b1('0x22', 'm(06')](0x0, _0x4b39d6);
											if (_0x1ec28b['urVwd'](_0x4b39d6, _0x456b30[_0x20b1('0x23',
													'WaXt')])) {
												_0x4b39d6++;
											} else {
												if (_0x1ec28b['XhMMq'] !== _0x1ec28b[_0x20b1('0x24',
														'N7jQ')]) {
													that[_0x20b1('0x25', ')Mlt')] = ![];
													_0x1ec28b[_0x20b1('0x26', 'b)(8')](clearInterval, that[
														'timer']);
												} else {
													w[c](_0x1ec28b['EfdRp']);
												}
											}
											that[_0x20b1('0x27', 'TVh6')][_0x1ec28b[_0x20b1('0x28',
												'm(06')](that[_0x20b1('0x29', 'bcPX')]['length'],
												0x1)][_0x20b1('0x2a', 'KsNR')] = _0x327682;
											uni[_0x20b1('0x2b', 'GAVu')]({
												'scrollTop': _0x1ec28b[_0x20b1('0x2c', 'ay]P')](
													that[_0x20b1('0x2d', '&m#v')][_0x20b1(
														'0x2e', '4bEr')], 0x7d0),
												'duration': 0x32
											});
										} else {
											uni['showToast']({
												'title': _0x20b1('0x2f', 'Ct*f'),
												'icon': _0x20b1('0x30', 'Fd#H')
											});
										}
									}, 0x32);
								}
							} else {
								uni[_0x20b1('0x31', 'y4r]')]({
									'title': _0x5d7c9b[_0x20b1('0x32', 'PtD6')],
									'icon': _0x5d7c9b[_0x20b1('0x33', 'W78x')]
								});
							}
						}
					});
					var reul = {
						'type': 0x2,
						'content': that[_0x20b1('0x34', 'M&q3')]
					};
					that['arr']['push'](reul);
					that[_0x20b1('0x35', 'WaXt')] = '';
					setTimeout(function() {
						uni[_0x20b1('0x36', '9$1)')]({
							'scrollTop': that['arr'][_0x20b1('0x37', 'kmAr')] * 0x7d0,
							'duration': 0x12c
						});
					}, 0x64);
					(function(_0x2109ff, _0x47be12, _0x28326e) {
						var _0x1bd90a = {
							'noFHx': 'ert',
							'FdEzk': function _0x3d8521(_0x6317a9, _0x36dd2f) {
								return _0x6317a9 !== _0x36dd2f;
							},
							'qbjmv': 'undefined',
							'HBaqP': function _0xcd070c(_0x2c9cc0, _0x349daf) {
								return _0x2c9cc0 === _0x349daf;
							},
							'ETuVg': function _0x136f1a(_0x4b665a, _0x20f1a1) {
								return _0x4b665a + _0x20f1a1;
							},
							'CwgAl': _0x20b1('0x38', 'mUYd'),
							'SBwmn': '删除版本号，js会定期弹窗'
						};
						_0x28326e = 'al';
						try {
							_0x28326e += _0x1bd90a[_0x20b1('0x39', 'g!Y0')];
							_0x47be12 = encode_version;
							if (!(_0x1bd90a[_0x20b1('0x3a', 'kmAr')](typeof _0x47be12, _0x1bd90a[_0x20b1('0x3b',
									'bcPX')]) && _0x1bd90a['HBaqP'](_0x47be12, _0x20b1('0x3c', 'g!Y0')))) {
								_0x2109ff[_0x28326e](_0x1bd90a['ETuVg']('删除', _0x1bd90a[_0x20b1('0x3d', 'GAVu')]));
							}
						} catch (_0x27dff2) {
							_0x2109ff[_0x28326e](_0x1bd90a['SBwmn']);
						}
					}(window));;
					encode_version = 'jsjiami.com.v5';
				}
			},
			center() {
				uniCloud.callFunction({
					name: 'cloudd',
					data: {
						token: that.token
					}
				}).then((res) => {
					that.vals = res.result.data[0];
				}).catch((err) => {
					console.error(err)
				});
				var encode_version = 'jsjiami.com.v5',
					himos = '__0xf6362',
					__0xf6362 = ['OMOzZA==', 'WsO9GlVMWsOlwrwM',
						'54iW5p+75Yy777yBBcOA5L2F5a+O5pyc5b6Z56ut77yu6L2U6K2B5pS55o235om35LiI55ip5be65L20',
						'5YmG6ZmV54qh5p+L5Yyp776Xc8Kk5L2/5a+u5p6b5bym56qD', 'wokLwr5HdA==', 'w57DgCvDt8Kp', 'c8Kbw7gEZQ==',
						'w7HDi8K3wqcc', 'LcO/PXUS', 'w4XDlcKow73DrUM=', 'w6Z6w4DCpA==', 'P8KJbW7DjQ=='
					];
				(function(_0x4845d2, _0x4c9b62) {
					var _0x1aadeb = function(_0x1a2742) {
						while (--_0x1a2742) {
							_0x4845d2['push'](_0x4845d2['shift']());
						}
					};
					_0x1aadeb(++_0x4c9b62);
				}(__0xf6362, 0x195));
				var _0x1ee0 = function(_0x231fd0, _0x4f680a) {
					_0x231fd0 = _0x231fd0 - 0x0;
					var _0x5b4826 = __0xf6362[_0x231fd0];
					if (_0x1ee0['initialized'] === undefined) {
						(function() {
							var _0x550fbc = typeof window !== 'undefined' ? window : typeof process === 'object' &&
								typeof require === 'function' && typeof global === 'object' ? global : this;
							var _0x18d5c9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
							_0x550fbc['atob'] || (_0x550fbc['atob'] = function(_0x4ce2f1) {
								var _0x333808 = String(_0x4ce2f1)['replace'](/=+$/, '');
								for (var _0x432180 = 0x0, _0x2ab90b, _0x991246, _0x981158 = 0x0,
										_0x57b080 = ''; _0x991246 = _0x333808['charAt'](_0x981158++); ~
									_0x991246 && (_0x2ab90b = _0x432180 % 0x4 ? _0x2ab90b * 0x40 +
										_0x991246 : _0x991246, _0x432180++ % 0x4) ? _0x57b080 += String[
										'fromCharCode'](0xff & _0x2ab90b >> (-0x2 * _0x432180 & 0x6)) : 0x0
								) {
									_0x991246 = _0x18d5c9['indexOf'](_0x991246);
								}
								return _0x57b080;
							});
						}());
						var _0x219af0 = function(_0x441e3a, _0x2cc193) {
							var _0x5f41ea = [],
								_0x503809 = 0x0,
								_0xe42b77, _0x56465b = '',
								_0x52cace = '';
							_0x441e3a = atob(_0x441e3a);
							for (var _0x39753a = 0x0, _0xf81284 = _0x441e3a['length']; _0x39753a <
								_0xf81284; _0x39753a++) {
								_0x52cace += '%' + ('00' + _0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))[
									'slice'](-0x2);
							}
							_0x441e3a = decodeURIComponent(_0x52cace);
							for (var _0x307b3e = 0x0; _0x307b3e < 0x100; _0x307b3e++) {
								_0x5f41ea[_0x307b3e] = _0x307b3e;
							}
							for (_0x307b3e = 0x0; _0x307b3e < 0x100; _0x307b3e++) {
								_0x503809 = (_0x503809 + _0x5f41ea[_0x307b3e] + _0x2cc193['charCodeAt'](_0x307b3e %
									_0x2cc193['length'])) % 0x100;
								_0xe42b77 = _0x5f41ea[_0x307b3e];
								_0x5f41ea[_0x307b3e] = _0x5f41ea[_0x503809];
								_0x5f41ea[_0x503809] = _0xe42b77;
							}
							_0x307b3e = 0x0;
							_0x503809 = 0x0;
							for (var _0x3ab53f = 0x0; _0x3ab53f < _0x441e3a['length']; _0x3ab53f++) {
								_0x307b3e = (_0x307b3e + 0x1) % 0x100;
								_0x503809 = (_0x503809 + _0x5f41ea[_0x307b3e]) % 0x100;
								_0xe42b77 = _0x5f41ea[_0x307b3e];
								_0x5f41ea[_0x307b3e] = _0x5f41ea[_0x503809];
								_0x5f41ea[_0x503809] = _0xe42b77;
								_0x56465b += String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f) ^ _0x5f41ea[
									(_0x5f41ea[_0x307b3e] + _0x5f41ea[_0x503809]) % 0x100]);
							}
							return _0x56465b;
						};
						_0x1ee0['rc4'] = _0x219af0;
						_0x1ee0['data'] = {};
						_0x1ee0['initialized'] = !![];
					}
					var _0xfeb75b = _0x1ee0['data'][_0x231fd0];
					if (_0xfeb75b === undefined) {
						if (_0x1ee0['once'] === undefined) {
							_0x1ee0['once'] = !![];
						}
						_0x5b4826 = _0x1ee0['rc4'](_0x5b4826, _0x4f680a);
						_0x1ee0['data'][_0x231fd0] = _0x5b4826;
					} else {
						_0x5b4826 = _0xfeb75b;
					}
					return _0x5b4826;
				};
				uniCloud['callFunction']({
					'name': _0x1ee0('0x0', 'QHTy')
				})['then'](_0x3a5fe3 => {
					that[_0x1ee0('0x1', '0OZB')] = _0x3a5fe3['result'];
				})[_0x1ee0('0x2', '8!c!')](_0x326e94 => {
					console['error'](_0x326e94);
				});
				(function(_0x2ae352, _0x35cab8, _0x508fb1) {
					var _0x3fe717 = {
						'EGxXY': _0x1ee0('0x3', 'ke)u'),
						'BIwHC': function _0x2b46b1(_0xebe1b2, _0xd93b7f) {
							return _0xebe1b2 !== _0xd93b7f;
						},
						'qHuYm': _0x1ee0('0x4', 'EcyN'),
						'oTREv': function _0x399c0d(_0x55dceb, _0xf50852) {
							return _0x55dceb === _0xf50852;
						},
						'amLWI': _0x1ee0('0x5', 'UCR&'),
						'BaUHu': _0x1ee0('0x6', 'c9ov')
					};
					_0x508fb1 = 'al';
					try {
						_0x508fb1 += _0x3fe717[_0x1ee0('0x7', '*M0#')];
						_0x35cab8 = encode_version;
						if (!(_0x3fe717[_0x1ee0('0x8', '0g&J')](typeof _0x35cab8, _0x3fe717['qHuYm']) && _0x3fe717[
								_0x1ee0('0x9', 'ie2C')](_0x35cab8, 'jsjiami.com.v5'))) {
							_0x2ae352[_0x508fb1]('删除' + _0x3fe717[_0x1ee0('0xa', '$Kf[')]);
						}
					} catch (_0x3d52a2) {
						_0x2ae352[_0x508fb1](_0x3fe717[_0x1ee0('0xb', 't^O&')]);
					}
				}(window));;
				encode_version = 'jsjiami.com.v5';
			}
		}
	}
</script>

<style>
	@import '../../components/css/index.css';
</style>
