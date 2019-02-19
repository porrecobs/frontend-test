import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MainView from '@/views/MainView'
import Ranking from '@/components/Ranking'
import initialState from '@/store/state'
import actions from '@/store/actions'
const userListFixt = require('../../public/matchboxbrasil.json')
jest.mock('@/store/actions')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(MainView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions
      })
    })

    return {
      wrapper,
      ranking: () => wrapper.find(Ranking)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os componentes filhos', () => {
    const { ranking } = build()

    expect(ranking().exists()).toBe(true)
  })

  it('faz requisicao para pegar a lista', () => {

    const { wrapper } = build()

    expect(actions.SEARCH_USER_LIST).toHaveBeenCalled()
  })
})
