// pages/mulu/mulu.js
Page({
  data:{
    datalist:[],
    selectArray: [{
      "id": "1",
      "text": "全部文件"}, 
      {"id": "2",
      "text": "我的文件"
    }]
  },
  //获取云数据库数据
  getData(){
    let that = this
   wx.cloud.callFunction({
name:"getList",
success(res){
console.log("请求云函数成功",res)
that.setData({
  datalist:res.result.data
})
},
fail(res){
console.log("请求云函数失败",res)
}
   })
  },
  getOwnData(){
    let that = this
    wx.cloud.callFunction({
  name:"getownList",
  success(res){
  console.log("请求云函数成功",res)
  that.setData({
   datalist:res.result.data
 })
 },
 fail(res){
 console.log("请求云函数失败",res)
 }
    })
  },
onLoad(options){
  this.getData(options.data)
},
  //跳转到详情页
  goDetail(event){
console.log("点击获取的数据",event.currentTarget.dataset.item._id)
wx.navigateTo({
  url: '/pages/detail/detail?id=' + event.currentTarget.dataset.item._id,
})
  }
})