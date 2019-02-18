import { shallowMount } from '@vue/test-utils'
import Ranking from '@/components/Ranking'
import ProfileCard from '@/components/ProfileCard'
const userListFixt = require('../../public/matchboxbrasil.json')

describe('Ranking', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(Ranking, {
      propsData: props
    })

    return {
      wrapper,
      ProfileCard: () => wrapper.find(ProfileCard)
    }
  }

  beforeEach(() => {
    props = {
      userList: userListFixt
    }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os componentes filhos', () => {
    const { ProfileCard } = build()

    expect(ProfileCard().exists()).toBe(true)
  })
})
