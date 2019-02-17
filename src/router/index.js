import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index'),
      redirect:"/doctorOrder",
      children:[
        //医嘱
        {
          path: '/doctorOrder',
          name: 'doctorOrder',
          component: () => import('@/components/doctorOrder/index'),
        },
      ]
    },


  ]
})
