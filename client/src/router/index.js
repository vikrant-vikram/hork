import Vue from 'vue'
import Router from 'vue-router'

import Classes from '@/components/Classes'
import ContactUs from '@/components/ContactUs'
import Home from '@/components/Home'
import Homework from '@/components/Homework'
import HomeworkDetails from '@/components/HomeworkDetails'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Register from '@/components/Register'
import Subjects from '@/components/Subjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: Subjects
    },
    {
      path: 'homework',
      name: 'homework',
      component: Homework
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'Register',
      component: Register
    }
  ]
})
