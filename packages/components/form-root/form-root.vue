<template>
  <el-form :model="data">
    <slot></slot>
    {{ data }}
  </el-form>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { useFormRoot } from './use-form-root'
import { FormRootKey } from './form-root'
import { provide } from 'vue'

const { data, setItem, getItem } = useFormRoot()
provide(FormRootKey, { data, setItem, getItem })
</script>
