import flushPromies from 'flush-promises'
import api from '@/api'
import actions from '@/store/actions'
const userListFixt = require('../../matchboxbrasil.json')
jest.mock('@/api')

describe('store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('procura lista de usuarios', async () => {
    await actions.SEARCH_USER_LIST({ commit }, {})
    await flushPromies()

    expect(api.searchUserList).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith('SET_USER', userListFixt)
  })
})
