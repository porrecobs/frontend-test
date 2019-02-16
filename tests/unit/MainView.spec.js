import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MainView from '@/views/MainView'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainView', () => {
  const build = () => {
    const wrapper = shallowMount(MainView, {
      localVue
    })

    return {
      wrapper
    }
  }

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
