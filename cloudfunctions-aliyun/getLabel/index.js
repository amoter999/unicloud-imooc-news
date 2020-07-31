'use strict';
exports.main = async (event, context) => {
  //event为客户端上传的参数
  const db = uniCloud.database();
  let lableCont = db.collection("label");
  let res = lableCont.get();
  //返回数据给客户端
  return res
};
