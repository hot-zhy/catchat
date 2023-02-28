'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	const collection = db.collection('uni-id-users');
	let res = await collection.where({
		token: event.token
	}).get()
	if(res.data[0].nickname == undefined){
		var mobile = res.data[0].mobile,avatar = 'http://ch.yunbiji.cloud/assets/img/avatar.png',free_num = 0,finish_time = '',type = 1;
		res.data[0].nickname = mobile;
		res.data[0].avatar = avatar;
		res.data[0].free_num = free_num;
		res.data[0].finish_time = finish_time;
		res.data[0].type = type;
		let res2 = await collection.doc(res.data[0]._id).updateAndReturn({
			nickname:mobile,
			avatar:avatar,
			free_num:free_num,
			finish_time:finish_time,
			type:type
		});
	}
	//返回数据给客户端
	return res
};
