import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About Us'
    }
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: () => import('../views/CreateAcct.vue'),
    meta: {
      title: 'Create Account'
    }
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import('../views/Admin/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/admin-register',
    name: 'admin-register',
    component: () => import('../views/Admin/Register.vue'),
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/account-list',
    name: 'account-list',
    component: () => import('../views/Admin/AccountList.vue'),
    meta: {
      title: 'Account-list'
    },
    beforeEnter: (_, _2, next) => {
      // Check if the user is authenticated
      if (store.state.isAuthenticated) {
        // User is authenticated, proceed to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page
        next({ name: 'admin-login' });
      }
    },
  },
  {
    path: '/customer-form/:accountId',
    name: 'customer-form',
    component: () => import('../views/Admin/CustomerForm.vue'),
    meta: {
      title: 'Customer-form'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
