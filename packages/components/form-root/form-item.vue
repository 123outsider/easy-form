<template>
  <el-form-item :label="label" :prop="name">
    <comp v-model="itemValue" :placeholder="placeholder"> </comp>
  </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, FormItemRule } from 'element-plus'
import { computed, inject, onMounted, Component } from 'vue'
import { FormRootKey } from './form-root'
import { Arrayable } from '@easy-form/utils'
const props = withDefaults(
  defineProps<{
    name: string
    required?: boolean
    comp: Component
    placeholder?: string
    label?: string
    role?: Arrayable<FormItemRule>
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
const { setItem, getItem, setRule } = formRoot
onMounted(() => {
  setItem(props.name, '')
  const rules: Array<FormItemRule> = []
  if (props.required) {
    rules.push({ required: true, message: '该字段是必填项' })
  }
  if (props.role) {
    if (!Array.isArray(props.role)) {
      rules.push(props.role)
    } else {
      rules.push(...props.role)
    }
  }
  setRule(props.name, rules)
})
</script>
