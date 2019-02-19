<template>
  <div class="home">
    <div class="content-container">
     <Ranking :userList="userList"/>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    display: block;
    background-color: #453995;

    .content-container {
      width: 100%;
      margin: 0 auto;
      position: absolute;
      top: 50%; 
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
@media only screen and (min-width: 482px) {
  .content-container {
    max-width: 342px;
  }
}

</style>

<script>
import { mapState } from 'vuex'
import Ranking from '@/components/Ranking'

export default {
  name: 'MainView',
  components: {
    Ranking
  },
  computed: {
    ...mapState({
      userList: 'userList'
    })
  },
  mounted: function () {
    this.$store.dispatch('SEARCH_USER_LIST', { })
      .then(res => {
        this.sortByPositive(res.data)
      })
      .catch(err => err)
  },
  methods: {
    async sortByPositive(userList) {
      await userList.map((elem) => {
        this.getPercentages(elem)
      })
      userList = this.sortUsers(userList)
    },
    sortUsers (userList) {
      return userList.sort((a, b) => {
        return (a.positive > b.positive) ? -1 : ((b.positive > a.positive) ? 1 : 0)
      })
    },
    getPercentages (user) {
      const total = user.positive + user.negative
      const positive = Math.floor(user.positive / total * 100)
      const negative = Math.floor(user.negative / total * 100)
      user.positive = positive
      user.negative = negative
      return user
    }
  }
}
</script>
