<template>
  <el-form-item :required="required" :prop="name">
    <comp v-model="itemValue" :placeholder="placeholder"> </comp>
  </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem } from 'element-plus'
import { computed, inject, onMounted, Component } from 'vue'
import { FormRootKey } from './form-root'
const props = withDefaults(
  defineProps<{
    name: string
    required?: boolean
    comp: Component
    placeholder?: string
    option?: {
      label: string
      value: string
    }[]
  }>(),
  { required: false, placeholder: undefined },
)

const itemValue = computed<unknown>({
  get() {
    return getItem(props.name)
  },
  set(value) {
    setItem(props.name, value)
  },
})
const formRoot = inject(FormRootKey)
if (!formRoot) {
  throw new Error('FormRootKey is not provided')
}
const { setItem, getItem } = formRoot
onMounted(() => {
  setItem(props.name, '')
})
</script>
