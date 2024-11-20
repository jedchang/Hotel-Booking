<template>
  <div class="room">
    <FixedRoomStyle></FixedRoomStyle>
    <section class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="room-info">
              <div class="room-title">
                <!-- <h1>Deluxe Single Room</h1> -->
                <h1> {{ roomDetail.name }} </h1>
              </div>
              <div class="img-wrap">
                <img
                  src="../assets/main-deluxe-single-room.jpg"
                  alt=""
                  class="main-img"
                >
                <div class="type-price">weekday price</div>
                <div class="photo-list">
                  <a href="javascript:;">
                    <img
                      src="../assets/sub-deluxe-double-room.jpg"
                      alt=""
                      class="sub-img"
                    >
                  </a>
                  <a href="javascript:;">
                    <img
                      src="../assets/sub-deluxe-single-room.jpg"
                      alt=""
                      class="sub-img"
                    >
                  </a>
                  <a href="javascript:;">
                    <img
                      src="../assets/sub-double-room.jpg"
                      alt=""
                      class="sub-img"
                    >
                  </a>
                </div>
              </div>
              <div class="nav-block">
                <div class="room-price">$3,899<span class="currency">NTD</span><span>/ night</span></div>
                <div class="type-price">holiday price - $2,000 NTD / night</div>
                <div class="check-in-out nav-item">
                  <img
                    class="icon-type"
                    src="../assets/icon-date.png"
                    alt=""
                  >
                  <VueHotelDatepicker
                    :startDate="testStartDate"
                    :endDate="testEndDate"
                    :mobile="'mobile'"
                    :placeholder="placeholderCheckIn"
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
                >
                  reserve now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="room-description">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <h3>Description</h3>
              <p>1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²</p>
              <p>Deluxe Single Room is only reserved for one guest. There is a bedroom with a small double size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>
              <p>Check-in is from 3pm to 7pm</p>
              <p>Check-out is before 11am</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="room-amenities">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <h3>Amenities</h3>
              <ul class="amenities-list">
                <li class="item"><i class="material-icons">wifi</i>Wi-Fi</li>
                <li class="item show"><i class="material-icons">tv</i>Television</li>
                <li class="item"><i class="material-icons">landscape</i>Great View</li>
                <li class="item"><i class="material-icons">restaurant</i>Breakfast</li>
                <li class="item"><i class="material-icons">ac_unit</i>Air Conditioner</li>
                <li class="item"><i class="material-icons">smoke_free</i>Smoke Free</li>
                <li class="item"><i class="material-icons">local_bar</i>Mini Bar</li>
                <li class="item"><i class="material-icons">kitchen</i>Refrigerator</li>
                <li class="item"><i class="material-icons">child_care</i>Child-Friendly</li>
                <li class="item"><i class="material-icons">room_service</i>Room Service</li>
                <li class="item"><i class="material-icons">weekend</i>Sofa</li>
                <li class="item"><i class="material-icons">pets</i>Pet-Friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <section class="room-availability">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <h3>Availability</h3>
              <VueHotelDatepicker
                :startDate="testStartDate"
                :endDate="testEndDate"
                :placeholder="placeholderCheckIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import FixedRoomStyle from '@/components/FixedRoomStyle.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue';

export default {
  name: 'room',
  components: {
    FixedRoomStyle,
    VueHotelDatepicker,
    FooterBlock
  },
  props: {
    placeholderCheckIn: {
      type: String,
      default: 'CHECK-IN & CHECK-OUT'
    }
  },
  data() {
    return {
      roomDetail: null, // API 單一房型
      testStartDate: undefined,
      testEndDate: undefined
    };
  },
  created() {
    this.getRoomDetail();
  },
  methods: {
    getRoomDetail() {
      // 單一房型細節 後面要帶入 roomId
      axios
        .get(
          // 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + roomId,
          'https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu',
          {
            // API TOKEN
            headers: {
              Accept: 'application/json',
              // Token 前面需加上 Bearer
              Authorization:
                'Bearer MBSq6sUBHhy1xw20NIg33KIapkVPPcCa1ZfDNtfDlIb1M89p4crXq1SSruNv'
            }
          }
        )
        .then(res => {
          if (res.data.success) {
            console.log('獲取單一房型', res.data);
            // 將資料賦值到 data 中的 roomsInfo
            this.roomDetail = res.data.room;
          }
        })
        .catch(err => {
          console.log('錯誤!', err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

.room {
  position: relative;
}

.header {
  .room-info {
    width: 1110px;
    margin-top: 111px;
    display: flex;
    height: 590px;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 2;
  }
  .room-title {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 49px;
      height: 370px;
      background-color: #fff;
      z-index: 5;
    }
    h1 {
      display: block;
      position: relative;
      font-size: 36px;
      font-style: italic;
      font-weight: 700;
      writing-mode: vertical-lr;
      color: #2d3643;
      z-index: 5;
      width: 100%;
      height: 370px;
    }
  }
  .img-wrap {
    position: absolute;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    .type-price {
      font-size: 16px;
      text-transform: uppercase;
      width: 22px;
      height: 142px;
      writing-mode: vertical-lr;
      background-color: #748290;
      color: #fff;
      text-align: center;
    }
    .photo-list {
      width: 512px;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      position: relative;
      text-decoration: none;
      transition: all 0.4s;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 160px;
        height: 94px;
        transition: all 0.4s;
        background-color: transparent;
      }
      &:hover {
        &:before {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .nav-block {
    width: 350px;
    // position: absolute;
    // top: 24%;
    // right: 0;
    position: fixed;
    top: 253px;
    right: 275px;
    z-index: 10;
    text-align: right;
    .room-price {
      font-size: 24px;
      font-weight: 700;
      color: #2d3643;
      display: inline-block;
      .currency {
        font-size: 24px;
        margin-left: 5px;
        margin-right: 3px;
      }
      span {
        margin-left: 2px;
        font-size: 16px;
      }
    }
    .type-price {
      font-size: 14px;
      color: #748290;
      display: inline-block;
      margin-bottom: 24px;
    }
    .check-in-out {
      position: relative;
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

    .btn-reserve {
      width: 350px;
      height: 72px;
      padding: 8px 8px 8px 8px;
      border: solid 1px #569dc3;
      display: flex;
      margin-top: -1px;
      background-color: #dedede;
      color: #c2c5c7;
      pointer-events: none;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.4s;
      &:hover {
        background-color: #ced0d3;
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
  }
}

.room-description {
  margin-top: 48px;
  .content {
    width: 540px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3643;
    margin-bottom: 24px;
  }
  p {
    font-size: 16px;
    color: #748290;
    &:nth-child(4) {
      margin-bottom: 0px;
    }
  }
}

.room-amenities {
  margin-top: 48px;
  margin-bottom: 48px;
  .content {
    width: 540px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3643;
    margin-bottom: 24px;
  }
  .amenities-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 540px;
    flex-wrap: wrap;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 155px;
    height: 24px;
    margin-bottom: 24px;
    color: #e3e6e9;
    .material-icons {
      width: 24px;
      height: 24px;
      margin-right: 16px;
      color: #e3e6e9;
    }
  }
  .item.show {
    color: #748290;
    .material-icons {
      color: #748290;
    }
  }
}

.room-availability {
  margin-bottom: 48px;
  .content {
    width: 540px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3643;
    margin-bottom: 24px;
  }
}
</style>