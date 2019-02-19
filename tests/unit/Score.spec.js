import { shallowMount } from '@vue/test-utils'
import Score from '@/components/Score'
const userList = require('../../public/matchboxbrasil.json')

describe('Score', () => {
  let props
  const first = 0
  const last = userList.length

  const build = () => {
    const wrapper = shallowMount(Score, {
      propsData: props
    })

    return {
      wrapper,
      positivo: () => wrapper.find('.positivo'),
      negativo: () => wrapper.find('.negativo')
    }
  }

  beforeEach(() => {
    props = {
      positivo: userList.data[0].positive,
      negativo: userList.data[0].negative
    }
  })

  it('renderiza o componente', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renderiza os principais componentes filhos', () => {
    const { positivo, negativo } = build()

    expect(positivo().exists()).toBe(true)
    expect(positivo().text()).toBe(props.positivo.toString() + '%')

    expect(negativo().exists()).toBe(true)
    expect(negativo().text()).toBe(props.negativo.toString() + '%')
  })
})
