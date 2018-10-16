const Mock = require('mockjs');
import mockData from './mockData.js'

// 登录
Mock.mock(/\/api\/user\/login\?*/, 'get', mockData.login);

// 权限
Mock.mock(/\/api\/user\/signIn\?*/, 'get', mockData.signIn);

// 角色
Mock.mock('/api/roles', 'get', mockData.roles);

// 账号
Mock.mock('/api/accounts', 'get', mockData.accounts);