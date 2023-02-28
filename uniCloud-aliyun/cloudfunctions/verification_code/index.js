'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	try {
		const res = await uniCloud.sendSms({
			appid: '__UNI__AB0AB66',
			smsKey: '9204b6f7a9974bf13a6f26a11e94110e',
			smsSecret: '268a7cee88597b3ab3ac5ed032c09aae',
			phone: '15136125584',
			templateId: '17085', // 请替换为自己申请的模板id
			data: {
				name: '枭云科技',
				code: '123456',
				expMinute: '3',
			}
		})
		// 调用成功，请注意这时不代表发送成功
		return res
	} catch (err) {
		// 调用失败
		console.log(err.errCode)
		console.log(err.errMsg)
		return {
			code: err.errCode,
			msg: err.errMsg
		}
	}
	//返回数据给客户端
	return event
};
