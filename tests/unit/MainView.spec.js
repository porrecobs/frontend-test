import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MainView from '@/views/MainView'
import Ranking from '@/components/Ranking'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainView', () => {
  const build = () => {
    const wrapper = shallowMount(MainView, {
      localVue,
      data: () => ({
        userList: {}
      })
    })

    return {
      wrapper,
      ranking: () => wrapper.find(Ranking)
    }
  }

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os componentes filhos', () => {
    const { ranking } = build()

    expect(ranking().exists()).toBe(true)
  })

  it('passa a lista para o componente de ranking', () => {
    const { wrapper, ranking } = build()
    wrapper.setData({
      userList: {
        name: 'Nicolas'
      }
    })

    expect(ranking().vm.userList).toBe(wrapper.vm.userList)
  })
})
