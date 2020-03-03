export default (data,url)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}