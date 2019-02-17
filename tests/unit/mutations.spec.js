import mutations from '@/store/mutations'
import initState from '@/store/state'
const userList = require('../../matchboxbrasil.json')

describe('mutations', () => {
  let state

  beforeEach(() => {
    state = { ...initState }
  })

  it('procura uma lista de usuarios', () => {
    const expectedResult = userList

    mutations.SET_USER_LIST(state, expectedResult)

    expect(state.userList).toEqual(expectedResult)
    expect(state.userList).not.toBe(expectedResult)
  })
})
