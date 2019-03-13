/* es-lint-disable */
import axios from 'axios'

export default {
  searchUserList () {
    return axios.get('/matchboxbrasil.json')
      .then(res => res.data)
  }
}
