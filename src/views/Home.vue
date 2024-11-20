<template>
  <div class="home">
    <FixedNavBar></FixedNavBar>
    <section class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner">
              <div class="room-title">
                <h1>HexHotel</h1>
              </div>
              <div class="nav-block">
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
                <div class="room nav-item">
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rooms-recommend">
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h3>Recommend</h3>
                <p>You may be interested in our popular rooms</p>
              </div>
              <div class="rooms-list">
                <!-- <a
                  v-for="room in recommends"
                  :key="room.id"
                  href="javascript:;"
                  class="room-item"
                >
                  <div class="image-wrapper">
                    <img
                      class="room-thumb-img"
                      :src="room.imageUrl"
                      alt=""
                    >
                  </div>
                  <div class="room-name"> {{room.name}} </div>
                  <div class="room-price">$3,350<span class="currency">NTD</span>/<span>night</span></div>
                </a> -->

                <a
                  href="javascript:;"
                  class="room-item"
                >
                  <div class="image-wrapper">
                    <img
                      class="room-thumb-img"
                      src="../assets/twin-room.jpg"
                      alt=""
                    >
                  </div>
                  <div class="room-name">Twin Room</div>
                  <div class="room-price">$3,350<span class="currency">NTD</span>/<span>night</span></div>
                </a>
                <a
                  href="javascript:;"
                  class="room-item"
                >
                  <div class="image-wrapper">
                    <img
                      class="room-thumb-img"
                      src="../assets/double-room.jpg"
                      alt=""
                    >
                  </div>
                  <div class="room-name">Twin Room</div>
                  <div class="room-price">$2,460<span class="currency">NTD</span>/<span>night</span></div>
                </a>
                <a
                  href="javascript:;"
                  class="room-item"
                >
                  <div class="image-wrapper">
                    <img
                      class="room-thumb-img"
                      src="../assets/deluxe-single-room.jpg"
                      alt=""
                    >
                  </div>
                  <div class="room-name">Twin Room</div>
                  <div class="room-price">$1,899<span class="currency">NTD</span>/<span>night</span></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="rooms-ad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="line">
              <div class="title">
                <h3>Reserve the best service</h3>
                <p>over 50,000 commendations from our guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rooms-type">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="rooms-all">
              <div class="rooms-title">
                <div class="room-name">
                  <h3> {{ roomsTilteName[0].name }} </h3>
                  <p> {{ roomsTilteName[0].desc }} </p>
                </div>
                <div class="room-name">
                  <h3> {{ roomsTilteName[1].name }} </h3>
                  <p> {{ roomsTilteName[1].desc }} </p>
                </div>
                <div class="room-name">
                  <h3> {{ roomsTilteName[2].name }} </h3>
                  <p> {{ roomsTilteName[2].desc }} </p>
                </div>
              </div>

              <div class="rooms-info">
                <a
                  href="javascript:;"
                  class="room-item"
                  v-for="room in rooms"
                  :key="room.id"
                  @click.prevent="onRoomClick(room.id)"
                >
                  <div class="image-wrapper">
                    <img
                      class="room-thumb-img"
                      :src="room.imageUrl"
                      alt=""
                    >
                  </div>
                  <div class="room-name"> {{room.name}} </div>
                  <div class="room-price">${{room.normalDayPrice}} <span class="currency">NTD</span>/<span>night</span></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import FixedNavBar from '@/components/FixedNavBar.vue';
import FooterBlock from '@/components/FooterBlock.vue';

// 複製一份放到自己 components 底下才能修改
import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue';
import { CoolSelect } from 'vue-cool-select';

export default {
  name: 'home',
  components: {
    FixedNavBar,
    CoolSelect,
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
      isLoading: false,
      rooms: null, // API 傳回所有房型
      roomsTilteName: [
        {
          name: 'One person',
          desc: 'Enjoy the one and only service'
        },
        {
          name: 'Two people',
          desc: 'The perfect choice for both of you'
        },
        {
          name: 'Family',
          desc: 'Wanna a big room? there you are'
        }
      ],
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
  created() {
    this.isLoading = true;
    this.getRooms();
  },
  methods: {
    getRooms() {
      // 取得所有房型
      axios
        .get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
          // API TOKEN
          headers: {
            Accept: 'application/json',
            // Token 前面需加上 Bearer
            Authorization:
              'Bearer MBSq6sUBHhy1xw20NIg33KIapkVPPcCa1ZfDNtfDlIb1M89p4crXq1SSruNv'
          }
        })
        .then(res => {
          if (res.data.success) {
            console.log('獲取所有房型', res.data);
            // 將資料賦值到 data 中的 roomsInfo
            this.rooms = res.data.items;
          }
        })
        .catch(err => {
          console.log('錯誤!', err);
        });
    },
    onRoomClick(roomId) {
      // 指定 router 轉到 room id
      this.$router.push({ name: 'room', params: { id: roomId } });
    }
  },
  computed: {
    // recommends() {
    //   // 展開運算子
    //   let rooms = [...this.rooms];
    //   // 將原先 6 個房型陣列做隨機亂數 取前 3 個陣列
    //   return rooms.sort(() => Math.random() - 0.5).splice(0, 3);
    // }
  }
};
</script>

<style scoped lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

.home {
  position: relative;
}

.header {
  margin-bottom: 48px;
  padding-top: 64px;
  .banner {
    position: relative;
    z-index: 10;
  }
  .room-title {
    width: 920px;
    height: 352px;
    background: url('../assets/hotel-img.jpg') center top no-repeat;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 57px;
      height: 219px;
      background-color: #ffffff;
    }
    h1 {
      position: relative;
      font-size: 48px;
      font-style: italic;
      font-weight: 700;
      writing-mode: vertical-lr;
      color: #2d3643;
    }
  }
  .nav-block {
    width: 350px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
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
  .room.nav-item {
    margin-top: -1px;
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

.rooms-recommend {
  color: $primaryColor;
  .content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    .title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 24px;
    }
    h3 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
    }
  }

  .rooms-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .room-item {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    color: $primaryColor;
    transition: all 0.4s;
    &:hover {
      text-decoration: none;
      .room-thumb-img {
        transform: scale(1.2);
      }
    }
  }
  // room
  .image-wrapper {
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 240px;
  }
  .room-thumb-img {
    width: 350px;
    height: 240px;
    transition: all 0.4s;
  }
  .room-name {
    font-size: 24px;
    font-weight: 600;
  }
  .room-price {
    font-size: 16px;
    .currency {
      margin-left: 5px;
      margin-right: 3px;
    }
    span {
      margin-left: 2px;
    }
  }
}

.rooms-ad {
  margin-top: 48px;
  margin-bottom: 48px;
  width: 100%;
  height: auto;
  background: url('../assets/hotel-img.jpg') center center no-repeat;
  background-size: cover;
  .line {
    width: 1110px;
    height: 320px;
    margin: 0 auto;
    position: relative;
  }
  .title {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  h3 {
    font-size: 36px;
    color: #2d3643;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: $primaryColor;
    margin-bottom: 32px;
  }
}

.rooms-type {
  .rooms-all {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
  }

  .rooms-title {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .room-name {
      height: 300px;
      margin-bottom: 47px;
      text-align: left;
      &:last-child {
        margin-bottom: 0;
      }
    }
    h3 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
    }
  }

  .rooms-info {
    width: 730px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  // room
  .image-wrapper {
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 240px;
  }
  .room-thumb-img {
    width: 350px;
    height: 240px;
    transition: all 0.4s;
  }
  .room-name {
    font-size: 24px;
    font-weight: 600;
  }
  .room-price {
    font-size: 16px;
    .currency {
      margin-left: 5px;
      margin-right: 3px;
    }
    span {
      margin-left: 2px;
    }
  }

  .room-item {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    color: $primaryColor;
    margin-bottom: 47px;
    transition: all 0.4s;
    &:nth-child(5) {
      margin-bottom: 0;
    }
    &:nth-child(6) {
      margin-bottom: 0;
    }
    &:hover {
      text-decoration: none;
      .room-thumb-img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
