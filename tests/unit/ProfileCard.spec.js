import { shallowMount } from '@vue/test-utils'
import ProfileCard from '@/components/ProfileCard'
const userListFixt = require('../../matchboxbrasil')

describe('ProfileCard', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(ProfileCard, {
      propsData: props
    })

    return {
      wrapper,
      picture: () => wrapper.find('.user-profile_picture'),
      name: () => wrapper.find('.user-profile_name'),
      description: () => wrapper.find('.user-profile_description')
    }
  }

  beforeEach(() => {
    props = {
      user: userListFixt.data[0]
    }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os principais componentes', () => {
    const { picture, name, description } = build()

    expect(picture().exists()).toBe(true)
    expect(picture().attributes().src).toBe(props.user.picture)

    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)

    expect(description().exists()).toBe(true)
    expect(description().text()).toBe(props.user.description)
  })
})
