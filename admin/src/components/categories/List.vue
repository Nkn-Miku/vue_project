<template>
  <div>
    <h1>分类标签</h1>
    <el-table :data="listData" style="width: 100%">
      <el-table-column prop="_id" label="id" width="350px">
      </el-table-column>
      <el-table-column prop="name" label="分类名称" width="300px">
      </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listData: []
    }
  },
  created () {
    this.getListData()
  },
  methods: {
    async getListData () {
      const res = await this.$http.get('categories')
      this.listData = res.data
    }
  }
}
</script>
