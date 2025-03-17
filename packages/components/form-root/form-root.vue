<template>
  <el-form
    ref="form"
    :rules="rules"
    :model="data"
    :validate-on-rule-change="false"
  >
    <slot></slot>
    {{ data }}
  </el-form>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { useFormRoot } from './use-form-root'
import { FormRootKey } from './form-root'
import { provide, ref } from 'vue'
const form = ref<InstanceType<typeof ElForm>>()
const { data, rules, getRules, setRule, setItem, getItem } = useFormRoot()
provide(FormRootKey, { data, rules, setItem, getItem, getRules, setRule })
</script>
