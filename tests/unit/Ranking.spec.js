import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Ranking from '@/components/Ranking'
import ProfileCard from '@/components/ProfileCard'
import initState from '@/store/state'
const userListFixt = require('../../public/matchboxbrasil.json')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Ranking', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(Ranking, {
      localVue,
      store: new Vuex.Store({
        state
      })
    })

    return {
      wrapper,
      profileCard: () => wrapper.find(ProfileCard)
    }
  }

  beforeEach(() => {
    state = { ...initState }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
