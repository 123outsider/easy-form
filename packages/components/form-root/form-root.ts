import { InjectionKey } from 'vue'
export type FormRootType = {
  data: Record<string, unknown>
  setItem: (key: string, name: unknown) => void
  getItem: (key: string) => unknown
}
export const FormRootKey = Symbol('FormRootKey') as InjectionKey<FormRootType>
