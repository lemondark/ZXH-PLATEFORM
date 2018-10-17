<style scoped>
.z-body {
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
}
.z-statues-bar {
  margin-bottom: 10px;
}

.z-statues-bar .bread {
  line-height: 40px;
}
.z-head {
  background: #409EFF;
}
.menu {
  margin-top:60px;
  overflow-y: auto;
}
.logo {
  position: fixed;
  width: 270px;
  height:60px;
  text-align: center;
  line-height: 60px;
  font-size: 1.4em;
  text-decoration: none;
  background:#419EFF;
  color:#fff;
}
.usermenu {
  float: right;
  padding: 0 2em;
  color:#fff;
}
.usermenu a {
  text-decoration: none;
  margin: 0 0.2em 0 1em;
  color:inherit;
}
#main {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
<template>
  <el-container class="z-body">
    <el-aside width="270px">
      <a class="logo" >Vue-admin</a>
      <el-menu :default-active="activeMenu" router class="menu">
        <template v-for="(route, index) in menus">
          <template v-if="route.children">
            <el-submenu :key="index" :index="route.name">
              <template slot="title">
                {{route.name}}</template>
              <el-menu-item v-for="(cRoute, cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="'/'+route.route+'/'+cRoute.route"><i class="el-icon-menu"></i>{{cRoute.name}}</el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :route="route" :index="route.name" :key="'nav'+index">{{route.meta.name || route.name}}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="z-head">
        <div class="usermenu" v-if="user.id">
          欢迎您：{{user.name}}
          <!-- <router-link :to="{path: '/'}"><i class="el-icon-location"></i>首页</router-link> -->
          <a href="javascript:;" @click="logout"><i class="el-icon-circle-close"></i>退出</a>
        </div>
      </el-header>
      <el-main>
        <div class="z-statues-bar">
          <el-breadcrumb separator="/" class="bread" id="mybread">
            <el-breadcrumb-item v-for="(item,index) in breadcrumbs" :key="index">
              {{ item.meta.name || item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <template>
          <router-view id="main"></router-view>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import instance from "../api";
import { changePw } from "../api/account";

export default {
  components: {
  },
  data() {
    return {
      user: this.$root.userData,
      menus: this.$root.menuData
    };
  },
  computed: {
    activeMenu: function(){
      //console.log(this.$route);
      return this.$route.name
    },
    breadcrumbs: function(){
      return (this.$route && this.$route.matched) || []
    }
  },
  methods: {
    logout: function() {
      this.$confirm("确定退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      })
        .then(() => {
          this.$emit("logout");
        })
        .catch(() => {});
    }
  },
  created: function() {
    if (!this.user) {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
