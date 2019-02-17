/* eslint-disable no-undef */
const userListFixt = require('../../../matchboxbrasil.json')

export default {
  SEARCH_USER_LIST: jest.fn().mockResolvedValue(userListFixt)
}
