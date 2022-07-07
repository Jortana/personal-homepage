// import { Navigate } from 'react-router-dom'

// import Login from '../pages/Login'
// import Pages from '../pages/Pages'

// const element = [
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/pages',
//     element: <Pages />
//   },
//   {
//     path: '/',
//     element: <Navigate to="/pages" />
//   }
// ]

// export default element

const routes = [
  {
    path: '/',
    redirect: '/pages'
  },
  {
    path: '/pages',
    component: () => import('../pages/Pages'),
    meta: {
      title: '导航',
      needLogin: true
    }
  },
  {
    path: '/login',
    component: () => import('../pages/Login'),
    meta: {
      title: '登录',
      needLogin: false
    }
  }
]

export default routes
