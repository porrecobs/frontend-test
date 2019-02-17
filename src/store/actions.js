import api from '@/api'

export default {
  // eslint-disable-next-line no-empty-pattern
  SEARCH_USER_LIST ({ commit }, {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const userList = await api.searchUserList()
        commit('SET_USER', userList)
        resolve(userList)
      } catch (err) {
        reject(err)
      }
    })
  }
}
