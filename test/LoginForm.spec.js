import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.vm).toBeTruthy()
  })
})
