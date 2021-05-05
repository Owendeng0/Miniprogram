// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  return await cloud.database().collection('userlist').doc(event.id)
  .update({
    data:{
      result: "yes"
    }
  })
  .then(res => {
    console.log('改变成功'.res)
    return res
  })
  .catch(res => {
    console.log('改变失败'.res)
    return res
  })
}