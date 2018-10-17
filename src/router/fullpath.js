const main = (resolve) => require(['../views/index.vue'], resolve);
const roles = resolve => require(['../views/user/roles.vue'], resolve);
const accounts = resolve => require(['../views/user/accounts.vue'],resolve);

export default [{
  path: '/',
  name: '首页',
  component: main,
  children: [{
    path: '/user/roles',
    name: '角色管理',
    component: roles
  }, {
    path: '/user/accounts',
    name: '账号管理',
    component: accounts
  }]
}];