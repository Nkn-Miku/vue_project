<template>
  <div>
    <h1>分类标签</h1>
    <el-table :data="listData" style="width: 100%">
      <el-table-column prop="_id" label="id" width="350px">
      </el-table-column>
      <el-table-column prop="parent.name" label="上级分类" width="300px">
      </el-table-column>
      <el-table-column prop="name" label="分类名称" width="300px">
      </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
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
      const res = await this.$http.get('rest/categories')
      this.listData = res.data
    },
    remove (row) {
      this.$confirm(`是否确定要删除文章"${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/categories/${row._id}`)
        console.log(res)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getListData()
      })
    }
  }
}
</script>
