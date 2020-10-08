<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
          :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'create',
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
      parents: []
    }
  },
  created () {
    this.getParents()
    this.id && this.getData()
  },
  methods: {
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`categories/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/categories', this.model)
      }
      console.log(res)
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '成功'
      })
    },
    async getData () {
      const res = await this.$http.get(`categories/${this.id}`)
      this.model = res.data
    },
    async getParents () {
      const res = await this.$http.get('categories')
      console.log(res)
      this.parents = res.data
    }
  }
}
</script>
