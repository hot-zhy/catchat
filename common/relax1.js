const innerAudioContext = uni.createInnerAudioContext();
function play_ding() {
	wx.setInnerAudioOption({
		obeyMuteSwitch: false, //（仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音
		fail: function(e) {
			debug.log('e', e)
		}
	});
	innerAudioContext.play()
	innerAudioContext.src = 'https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/relax1.mp3';
	innerAudioContext.onPlay(() => {
	});
	innerAudioContext.onError((res) => {
	});
	setTimeout(() => {
		innerAudioContext.destroy() // 音效一般为1s，2s后销毁实例
	}, 190000)
}

function stop(){
	innerAudioContext.stop()
}
function pause(){
	innerAudioContext.pause()
}

module.exports = {
	play_ding,stop,pause
}
