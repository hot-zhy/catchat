'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	let res = await db.collection('contact_customer_address').get()
	//返回数据给客户端
	return res.data[0].url
};
