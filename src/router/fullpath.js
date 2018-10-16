const main = (resolve) => require(['../views/index.vue'], resolve);
const roles = resolve => require(['../views/user/roles.vue'], resolve);
const accounts = resolve => require(['../views/user/accounts.vue'],resolve);
import app from '../App.vue';
console.log(app);

export default [{
  path: '/',
  name: '首页',
  component: app,
  children: [{
    path: '/user',
    name: '用户管理',
    meta: {
      name: '用户管理',
      icon: '&#xe62e;'
    },
    component: main,
    children: [{
      path: 'roles',
      name: '角色管理',
      meta : {},
      component: roles
    }, {
      path: 'accounts',
      name: '账号管理',
      meta: {
        name: '账号管理'
      },
      component: accounts
    }]
  }]
}];