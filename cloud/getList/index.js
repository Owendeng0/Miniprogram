// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"dd-7g2n89nte04f896c"
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("userlist").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })
}