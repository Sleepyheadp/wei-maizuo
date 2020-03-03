// pages/index/Banner/Banner.js
import Get from "../../../utils/request/get.js"
//组件中的钩子函数
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    banners:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBanners(){
      Get({
        url: "http://47.96.0.211:9000/db/in_theaters",
        data: {
          limit: 6
        }
      }).then(res => {
        //console.log(res.data)
        this.setData({
          banners:res.data.object_list
        })
      })
    }
  },
  created(){
    this.getBanners()
  }
})
