export default {
	login: {
		token: 'roottoken'
	},
	signIn: {
		id: '2c9180895e172348015e1740805d000d',
		menus: [{
			id: '2c9180895e13261e015e13469b7e0000',
			name: '用户管理',
			parent_id: null,
			route: 'user'
		}, {
			id: '2c9180895e13261e015e13469b7e0023',
			name: '角色管理',
			parent_id: '2c9180895e13261e015e13469b7e0000',
			route: 'roles'
		}, {
			id: '2c9180895e13261e015e1346d40a0001',
			name: '账户管理',
			parent_id: '2c9180895e13261e015e13469b7e0000',
			route: 'accounts'
		}],
		name: '管理端',
		resources: [{
			id: '2c9180895e172348015e1740805d000d',
			method: 'GET',
			name: '账号-获取',
			summary: null,
			url: '/accounts'
		}, {
			id: '2c9180895e172348015e1740c30f000e',
			method: 'DELETE',
			name: '账号-删除',
			summary: null,
			url: '/account/**'
		}, {
			id: '2c9180895e172348015e1741148a000f',
			method: 'PUT',
			name: '账号-修改',
			summary: null,
			url: '/account/**'
		}, {
			id: '2c9180895e172348015e1840b98f0013',
			method: 'POST',
			name: '账号-分配角色',
			summary: null,
			url: '/account/*/roles'
		}, {
			id: '2c9180895e172348015e173cd55f0009',
			method: 'GET',
			name: '角色-获取',
			summary: null,
			url: '/roles'
		}, {
			id: '2c9180895e172348015e173e83ac000a',
			method: 'DELETE',
			name: '角色-删除',
			summary: null,
			url: '/role/**'
		}, {
			id: '2c9180895e172348015e173eb9a4000b',
			method: 'PUT',
			name: '角色-修改',
			summary: null,
			url: '/role/**'
		}, {
			id: '2c9180895e172348015e173f2fcc000c',
			method: 'POST',
			name: '角色-添加',
			summary: null,
			url: '/role'
		}, {
			id: '4028811a5e1820d9015e1824acf20000',
			method: 'GET',
			name: '登录',
			summary: null,
			url: '/signin'
		}]
	},
	roles: [{
		creation_time: 1502890405000,
		id: '4028b8815de94deb015de9883c400007',
		name: 'client',
		summary: '企业管理员',
		timestamp: 1508392476000
	}, {
		creation_time: 1502890405000,
		id: '4028b8815de94deb015de9883c400007',
		name: 'client',
		summary: '企业管理员',
		timestamp: 1508392476000
	}, {
		creation_time: 1502890405000,
		id: '4028b8815de94deb015de9883c400007',
		name: 'client',
		summary: '企业管理员',
		timestamp: 1508392476000
	}],
	accounts: [{
		id: '2c9180875ec73eec015ecaf458900002',
		name: 'client',
		roles: [{name: '客户', timestamp: 1503647021000},{name: '管理员', timestamp: 1503647021000}],
		suspended: true,
		timestamp: 1510557178000
	}, {
		id: '2c9180875ec73eec015ecaf458900002',
		name: 'client1',
		roles: [{name: '客户', timestamp: 1503647021000}],
		suspended: false,
		timestamp: 1510557178000
	}]
}