const db = wx.cloud.database();
Page({
  data:{
    detail:""
  },
  onLoad(options){
    console.log('详情页接收的id',options)
    let that = this
    wx.cloud.database().collection("userlist").doc(options.id)
    .get()
    .then(res=>{
      console.log("详情页成功",res)
      this.setData({
        detail:res.data
      })
    })
    .catch(res=>{
      console.log("详情页失败",res)
    })
  },
  openExcel(){
    console.log(this.data.detail)
    wx.cloud.downloadFile({
      fileID: this.data.detail.address,
      success:res =>{
        wx.openDocument({
          filePath: res.tempFilePath,
          success:function(res){
            console.log('成功')
          }
        })
      },
      fail:err =>{
      }
    })
  },
  shenhe: function() {
    console.log(this.data.detail._id)
    const ID = this.data.detail._id
    console.log(ID)
    console.log(typeof ID)
    wx.cloud.callFunction({
      name:"shenhe",
      data:{
        id: ID
      },     
    }).then(res =>{
      console.log("改变成功",res)
    })
    .catch(res =>{
      console.log("改变失败",res)
    })
  },
})

