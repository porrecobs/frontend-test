<template>
  <div class="card-container">
    <div class="card-content">
      <div class="avatar-container">
        <img class="user-profile_picture" :src="user.picture"/>
        <span class="badge"> {{ position }}</span>
      </div>
      <div class="info-container">
        <div class="info">
          <span class="user-profile_name">
            {{ user.name }}
          </span>
          <span class="user-profile_description">
            {{ user.description }}
          </span>
        </div>
      </div>
    </div>
    <Score
      :positivo="user.positive"
      :negativo="user.negative"
      class="score"
    />
  </div>
</template>
<style scoped lang="scss">
.card-container {
  max-height: 80px;
  height: 80px;
  border: 1px solid transparent;
  position: relative;

  .card-content {
    display: table;
    width: calc(100% - 30px);
    height: 66px;
    margin: 8px 15px;
  }

  .avatar-container {
    float: left;
    position: relative;

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid #707070;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      padding: 5px;
      background-color: #fff;
      font-size: 14px;
      font-weight: bold;
      color: #707070;
    }
  }

  .info-container {
    width: calc(100% - 81px);
    display: block;
    float: left;
    height: 66px;
  }

  .info {
    display: table-cell;
    vertical-align: middle;
    height: 66px;
    text-align: left;
    padding-left: 20px;
  }

  .user-profile_picture {
    float: left;
    border-radius: 50%;
    border: 4px solid #6bbef1;
    width: 58px;
  }
  .user-profile_name {
    display: table-cell;
    vertical-align:middle;
    font-weight: 600;
    color: #272727;
    font-size: 18px;
  }
  .user-profile_description {
    color: #909090;
    font-size: 12px;
    font-weight: 600;
  }

  .score {
    display: none;
    position: absolute;
    z-index: 999;
  }

  &:hover, &:active {
    background-color: #1cbcb4;

    .user-profile_name {
      color: #fff;
    }

    .user-profile_description {
      color: #330d0e;
    }

    .user-profile_picture {
      border-color: #fff;
    }

    .score {
      display: block;
      right: 0;
    }
  }
}
@media screen and (min-width: 672px) {
  .score {
    left: calc(100% + 7px);
    top: 50%;
    transform: translate(0%,-50%);
  }
  
}
</style>
<script>
import Score from '@/components/Score'

export default {
  name: 'ProfileCard',
  components: {
    Score
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    },
    position: {
      default: () => ({})
    }
  }
}
</script>
