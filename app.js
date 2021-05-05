//app.js
App({
    globalData: {
        ID:''
      },
    onLaunch: function() {
        wx.cloud.init({
            env:"dd-7g2n89nte04f896c"
          })
    },     
})