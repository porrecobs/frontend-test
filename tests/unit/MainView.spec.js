import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MainView from '@/views/MainView'
import Ranking from '@/components/Ranking'
import initState from '@/store/state'
const userListFixt = require('../../matchboxbrasil.json')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(MainView, {
      localVue,
      store: new Vuex.Store({ state })
    })

    return {
      wrapper,
      ranking: () => wrapper.find(Ranking)
    }
  }

  beforeEach(() => {
    state = { ...initState }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os componentes filhos', () => {
    const { ranking } = build()

    expect(ranking().exists()).toBe(true)
  })

  it('passa a lista para o componente de ranking', () => {
    const { ranking } = build()
    state = { userList: userListFixt }

    expect(ranking().vm.userList).toBe(state.userList)
  })
})
