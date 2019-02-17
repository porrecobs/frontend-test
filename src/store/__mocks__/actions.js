const userListFixt = require('../../../matchboxbrasil.json')

export default {
  SEARCH_USER: jest.fn().mockResolvedValue(userListFixt)
}
