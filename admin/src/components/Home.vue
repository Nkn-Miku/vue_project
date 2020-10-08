<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <!-- 左侧菜单开始 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/article/createArticle">新建文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧菜单结束 -->

      <!-- 右侧内容开始 -->
      <el-container>
        <!-- 右侧头部区域开始 -->
        <el-header style="text-align: right; font-size: 12px">
          <!-- 登录信息 -->
          <span>同志酱</span>
          <!-- 下拉退出菜单 -->
          <el-dropdown>
            <i class="el-icon-setting" style="margin-left: 10px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a>退出</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!-- 右侧头部区域结束 -->

        <!-- 右侧具体内容 -->
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
      <!-- 右侧内容结束 -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #69a8e7;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
