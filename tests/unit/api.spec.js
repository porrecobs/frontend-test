import flushPromises from 'flush-promises'
import nock from 'nock'
import api from '@/api'
const userListFixt = require('../../public/matchboxbrasil.json')

describe('api', () => {
  it('procura a lista de usuarios', async () => {
    const request = nock('http://localhost:8080')
      .get('/matchboxbrasil.json')
      .reply(200, userListFixt)

    const result = await api.searchUserList()
    await flushPromises()

    expect(result).toEqual(userListFixt)
    expect(request.isDone()).toBe(true)
  })
})
