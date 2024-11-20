<template>
  <transition name="slide">
    <div
      class="fixed-navbar"
      v-show="isFixedBarShow"
    >
      <a
        href="javascript:;"
        class="logo"
      >H</a>
      <div class="fixed-checkInOut nav-item">
        <img
          class="icon-type"
          src="../assets/icon-date.png"
          alt=""
        >
        <VueHotelDatepicker
          :startDate="testStartDate"
          :endDate="testEndDate"
          :placeholder="placeholderCheckIn"
        />
        <img
          class="icon-dropdown"
          src="../assets/icon-arrow-dropdown.png"
          alt=""
        >
      </div>
      <div class="fixed-room nav-item">
        <img
          class="icon-type"
          src="../assets/icon-bed.png"
          alt=""
        >
        <cool-select
          v-model="selected"
          :items="items"
          placeholder="ROOM"
        />
        <img
          class="icon-dropdown"
          src="../assets/icon-arrow-dropdown.png"
          alt=""
        >
      </div>
      <router-link
        to="/reservation"
        class="btn-reserve active"
        :class="{ 'active' : selected !== null}"
      >
        reserve now
      </router-link>

    </div>
  </transition>
</template>

<script>
import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue';
import { CoolSelect } from 'vue-cool-select';

export default {
  name: 'FixedNavBar',
  components: {
    CoolSelect,
    VueHotelDatepicker
  },
  props: {
    placeholderCheckIn: {
      type: String,
      default: 'CHECK-IN & CHECK-OUT'
    }
  },
  data() {
    return {
      isFixedBarShow: false,
      testStartDate: undefined,
      testEndDate: undefined,
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
  },
  methods: {
    setSrcollBarFixed() {
      let scrollTopPos = 200;
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > scrollTopPos) {
          this.isFixedBarShow = true;
        } else {
          this.isFixedBarShow = false;
        }
      });
    }
  },
  mounted() {
    this.setSrcollBarFixed();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

// slide
.slide-enter-active,
.slide-leave-active {
  transform: scaleY(1);
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}

.fixed-navbar {
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 10px #cbd4dc;

  // transform
  transform-origin: top;
  transition: transform 0.3s;
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

.fixed-checkInOut {
  width: 39%;
  height: 72px;
  position: relative;
  .icon-type {
    position: absolute;
    top: 72px / 2 - 13px;
    left: 35px;
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

.fixed-room {
  width: 27.34%;
  height: 72px;
  background-color: #fff;
  position: relative;
  .icon-type {
    position: absolute;
    top: 72px / 2 - 12px;
    left: 31px;
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

.btn-reserve {
  width: 27.4%;
  height: 72px;
  padding: 8px 8px 8px 8px;
  background-color: #569dc3;
  border: solid 1px #569dc3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  pointer-events: none;
  color: #fff;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    background-color: #569dc3;
  }
  &.active {
    cursor: pointer;
    color: #fff;
    background-color: #569dc3;
    pointer-events: auto;
    &:hover {
      cursor: pointer;
      background-color: darken(#569dc3, 15%);
      border: solid 1px darken(#569dc3, 15%);
    }
  }
}
</style>
