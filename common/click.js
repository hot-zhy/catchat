//utils.js

//因为这个音效听起来是叮的声音，所以我取这个函数名，方便记忆音效，找的合适的场景就能想起来。
function play_ding() {
	wx.setInnerAudioOption({
		obeyMuteSwitch: false, //（仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音
		fail: function(e) {
			debug.log('e', e)
		}
	});
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.src = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/click.mp3';
	innerAudioContext.onPlay(() => {
	});
	innerAudioContext.onError((res) => {
	});
	setTimeout(() => {
		innerAudioContext.destroy() // 音效一般为1s，2s后销毁实例
	}, 2000)
}

module.exports = {
	play_ding,
}
