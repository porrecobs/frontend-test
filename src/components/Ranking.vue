<template>
  <div class="ranking-container">
    <div class="img-container">
      <img src="@/assets/logo_matchbox_amarelo.png"/>
    </div>
    <div class="header">
      <span class="title">
        ranking
      </span>
    </div>
    <div class="content">
      <template v-if="userList.data">
        <div v-for="(user, index) in userList.data">
        <ProfileCard
          :user="user"
          :position="index + 1"
        />
      </div>
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import ProfileCard from '@/components/ProfileCard'

export default {
  name: 'Ranking',
  computed: {
    ...mapState({
      userList: 'userList'
    })
  },
  components: {
    ProfileCard
  },
  created () {
    console.log(this.userList)
  }
}
</script>

<style scoped lang="scss">
.ranking-container {

  .img-container {
    text-align: left;
  }

  .header {
    font-size: 30pt;
    font-weight: 700;
    background-color: #fff;
    border-radius: 5px;
  }

  .content {
    border-radius: 5px;
    background-color: #fff;
    padding: 10px 0px;
    margin: 10px 0;
  }
}
</style>
