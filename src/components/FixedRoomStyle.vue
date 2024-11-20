<template>
  <transition name="slide">
    <div class="fixed-room-style">
      <div class="container-full">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <router-link
                to="/"
                class="logo"
              >
                H
              </router-link>
              <div class="room-style nav-item">
                <img
                  class="icon-type"
                  src="../assets/icon-bed.png"
                  alt=""
                >
                <cool-select
                  v-model="selected"
                  :items="items"
                  placeholder="ROOM STYLE"
                />
                <img
                  class="icon-dropdown"
                  src="../assets/icon-arrow-dropdown.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { CoolSelect } from 'vue-cool-select';

export default {
  name: 'FixedRoomStyle',
  components: {
    CoolSelect
  },
  data() {
    return {
      selected: null,
      items: [
        'Single Room',
        'Deluxe Single Room',
        'Double Room',
        'Deluxe Double Room',
        'Twin Room',
        'Deluxe Twin Room'
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

.fixed-room-style {
  // display: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 5px #cbd4dc;
  height: 72px;
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: #fff;
}

.container-full {
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 6.25%;
  height: 72px;
  background-color: #2d3643;
  border-bottom: solid 1px #2d3643;
  text-decoration: none;
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  position: relative;
  transition: all 0.4s;
  &:before {
    content: 'H';
    position: absolute;
    top: 0;
    left: 12px;
  }
  &:hover {
    color: $secondaryColor;
  }
}

.nav-item {
  position: relative;
  width: 350px;
  height: 72px;
  .icon-type {
    position: absolute;
    top: 23px;
    left: 32px;
    width: 24px;
    height: 24px;
    z-index: 10;
  }
  .icon-dropdown {
    position: absolute;
    top: 23px;
    right: 32px;
    width: 24px;
    height: 24px;
    z-index: 10;
  }
}

.fixed-checkInOut {
  width: 39%;
  height: 72px;
  position: relative;
  // &:after {
  //   position: absolute;
  //   content: '';
  //   top: 0;
  //   right: 0;
  //   background-color: #cbd4dc;
  //   width: 1px;
  //   height: 72px;
  // }
  .icon-type {
    position: absolute;
    top: 24px;
    left: 24px;
    z-index: 10;
    width: 24px;
    height: 24px;
  }
  .icon-dropdown {
    position: absolute;
    top: 24px;
    right: 32px;
    z-index: 10;
    width: 24px;
    height: 24px;
  }
}

.room {
  width: 27.34%;
}

.btn-reserve {
  width: 27.34%;
  height: 72px;
  background-color: #569dc3;
  border-bottom: solid 1px #569dc3;
}
</style>
