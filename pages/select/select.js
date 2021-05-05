// pages/select/select.js
Page({
  price1: function (e) {
    this.setData({
      place: e.detail.value
    })
  },
  tag1: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  num1: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  title1: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  //上传按钮
  upData: function (e) {
    const db = wx.cloud.database()
    db.collection('userlist').add({
      data:{
        place: this.data.place,
        name: this.data.name,
        title: this.data.title,
        num: this.data.num,
        result:'no'
      },
      success:function(_){
        console.log(_)
        wx.showToast({
          title: '上传成功',
          icon:'none',
          duration:2000
        })
      }, 
        
      fail:err=>{
        console.log(err);
      }
    })
  },
  uploadExcel(){
    console.log("excel")
    wx.chooseMessageFile({
      count: 1,
      type:'all',
    success(res){
      console.log("选择excel成功",res)
      const tempFile = res.tempFiles[0]
      // console.log(tempFilePaths)
      console.log(tempFile.name)
      wx.cloud.uploadFile({
        cloudPath: tempFile.name+".xlsx",//上传至云端的路径
        //cloudPath: "1/"+ tempFile.name+".xlsx",//文件夹处理方法
        filePath: tempFile.path,//小程序临时文件路径
        filename: tempFile.name,
        success(res_){
          console.log(res)
          //返回文件 ID
          console.log("上传excel成功",res)
          let fileID = tempFile.path;
          let filename = tempFile.name;       
          // console.log(db)
          const db = wx.cloud.database();
          const table = db.collection("docs");
          console.log(table)
          table.add({
            data:{
              path:fileID,
              filename:filename,
            },
            success:function(_){
              console.log(_)
              wx.showToast({
                title: '存储成功',
                icon:'none',
                duration:2000
              })
            }, fail: console.error
          })
        },
        fail: console.error,
      })
    }
  })
}
})