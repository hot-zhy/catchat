'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	const collection = db.collection('uni-id-users');
	let res = await collection.where({
		token: event.token
	}).remove()
	//返回数据给客户端
	return 1
};
