<template>
  <div class="home">
    <div class="content-container">
     <Ranking :msg="Ranking"/>
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
      max-width: 342px;
      margin: 0 auto;
    }
  }
</style>

<script>
import Ranking from '@/components/Ranking'

export default {
  name: 'MainView',
  components: {
    Ranking
  }
}
</script>
