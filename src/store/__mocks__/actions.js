/* eslint-disable no-undef */
const userListFixt = require('../../../public/matchboxbrasil.json')

export default {
  SEARCH_USER_LIST: jest.fn().mockResolvedValue(userListFixt)
}
