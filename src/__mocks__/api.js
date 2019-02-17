/* eslint-disable no-undef */
const userListFixture = require('../../matchboxbrasil.json')

export default {
  searchUserList: jest.fn().mockResolvedValue(userListFixture)
}
