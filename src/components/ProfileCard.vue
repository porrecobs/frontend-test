<template>
  <div class="card-container">
    Profile
  </div>
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
  name: 'ProfileCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

