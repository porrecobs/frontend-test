<template>
  <div class="card-container">
    Profile
    <img class="user-profile_picture" :src="user.picture"/>
    <div class="user-profile_name"> {{ user.name }} </div>
    <div class="user-profile_description"> {{ user.description }} </div>
  </div>
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
  name: 'ProfileCard',
  props: {
    user: {}
  }
}
</script>

