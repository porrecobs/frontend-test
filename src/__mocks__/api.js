/* eslint-disable no-undef */
const userListFixture = require('../../public/matchboxbrasil.json')

export default {
  searchUserList: jest.fn().mockResolvedValue(userListFixture)
}
