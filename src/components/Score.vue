<template>
  <div class="container-score">
    <div class="board">
      <div class="container">
        <div class="head">
          GOSTAM
        </div>
        <div class="positivo">
          {{ positivo }}%
        </div>
      </div>
      <div class="divider"></div>
      <div class="container">
        <div class="head">
          Não Gostam
        </div>
        <div class="negativo">
          {{ negativo }}%
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-score {
  border-radius: 5px;
  max-width: 158px;
  position: absolute;
  width: 100%;

  .board {
    border-radius: 5px;
    overflow: hidden;

    .container {
      float: left;
      background-color: #fff;
      text-align: center;

      .head {
        color: #f8f7f7;
        background-color: #df595d;
        font-weight: 600;
        font-size: 10px;
        text-transform: uppercase;
        padding: 5px 10px;
      }

      .positivo, .negativo {
        color: #909090;
        font-weight: 700;
        font-size: 24px;
      }
    }

    .divider {
      width: 1px;
      height: 49px;
      background: #000;
      float: left;
    }
  }
}
@media screen and (min-width: 672px) {
  .container-score {
    &:before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      right: 100%;
      top: 24px;
      border: 6px solid transparent;
      border-right: 5px solid #fff;
    }
  }
}
</style>
<script>
export default {
  name: 'Score',
  props: {
    positivo: {
      type: Number,
      default: () => ({})
    },
    negativo: {
      type: Number,
      default: () => ({})
    }
  }
}
</script>
