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

    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    userList: Object,
    default: () => ({})
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
    font-weight: bolder;
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
