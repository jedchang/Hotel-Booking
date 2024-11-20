<template>
  <div class="reservation">
    <FixedRoomStyle></FixedRoomStyle>
    <section class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="reservation-info">
              <div class="col-md-4">
                <div class="reservation-form">
                  <h3>Reservation information</h3>
                  <form>
                    <div class="form-group">
                      <label
                        for="formGroupName"
                        :class="{'show' : nameColor === true }"
                      ><i class="material-icons">person</i>NAME</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupName"
                        placeholder="Please input your name"
                        @click="showNameColor"
                        @blur="hideNameColor"
                      >
                    </div>
                    <div class="form-group">
                      <label
                        for="formGroupPhone"
                        :class="{'show' : phoneColor === true }"
                      ><i class="material-icons">phone_android</i>PHONE</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupPhone"
                        placeholder="Please input phone number"
                        @click="showPhoneColor"
                        @blur="hidePhoneColor"
                      >
                    </div>
                    <router-link
                      to="/success"
                      class="btn-reserve active"
                    >
                      reserve now
                    </router-link>
                  </form>
                </div>
              </div>

              <div class="col-md-4">
                <div class="reservation-detail">
                  <img
                    src="../assets/reservation-room-img.jpg"
                    alt=""
                    class="room-img"
                  >
                  <div class="room-name">Deluxe single Room</div>
                  <div class="check-in check-date">
                    <img
                      class="icon-type"
                      src="../assets/icon-date.png"
                      alt=""
                    >
                    <p>CHECK-IN</p>
                    <div class="date">2019/8/7</div>
                  </div>
                  <div class="check-out check-date">
                    <img
                      class="icon-type"
                      src="../assets/icon-date.png"
                      alt=""
                    >
                    <p>CHECK-OUT</p>
                    <div class="date">2019/8/12</div>
                  </div>
                  <ul class="price-info">
                    <li class="weekday item">
                      <span class="item">$1,899 × 2 night</span>
                      <span class="reserve-price">$3,798</span>
                    </li>
                    <li class="holiday item">
                      <span class="item">$2,000 × 3 night</span>
                      <span class="reserve-price">$6,000</span>
                    </li>
                    <li class="service item">
                      <span class="item">Service Fee</span>
                      <span class="reserve-price">$1,200</span>
                    </li>
                    <li class="total-price item">
                      <span class="sum-item">TOTAL</span>
                      <span class="sum-price">$10,998</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <div class="footer-info">
                <div class="logo">H</div>
                <div class="copyright">© 2019 HexHotel. All rights reserved.</div>
              </div>
              <p>
                No. 5, Kaokao St., Kaohsiung City 803, Taiwan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import FixedRoomStyle from '@/components/FixedRoomStyle.vue';

export default {
  name: 'reservation',
  components: {
    FixedRoomStyle
  },
  data() {
    return {
      nameColor: false,
      phoneColor: false,
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please enter a name', trigger: 'blur' }
        ],
        phone: [{ required: true, trigger: 'blur' }]
      }
    };
  },
  methods: {
    showNameColor() {
      this.nameColor = true;
    },
    showPhoneColor() {
      this.phoneColor = true;
    },
    hideNameColor() {
      this.nameColor = false;
    },
    hidePhoneColor() {
      this.phoneColor = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

.reservation {
  position: relative;
}

.reservation-info {
  margin-top: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reservation-form {
  h3 {
    width: 218px;
    font-size: 36px;
    font-weight: 700;
    color: #2d3643;
    text-align: left;
  }

  form {
    margin-top: 26px;
    width: 350px;
    label {
      font-size: 16px;
      font-weight: 700;
      color: #2d3643;
      display: flex;
      align-items: center;
      i {
        width: 24px;
        height: 24px;
        color: #2d3643;
        margin-right: 4px;
      }
    }
    label.show {
      color: #569dc3;
      i {
        color: #569dc3;
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

.reservation-detail {
  width: 350px;
  .room-img {
    width: 350px;
    height: 204px;
    border: 1px solid #748290;
    margin-top: -1px;
  }
  .room-name {
    height: 75px;
    background-color: #fff;
    border: 1px solid #748290;
    font-size: 20px;
    font-weight: 700;
    padding: 20px 32px;
    text-align: left;
    color: #2d3643;
    margin-top: -1px;
  }
  .check-date {
    height: 75px;
    background-color: #fff;
    border: 1px solid #748290;
    font-size: 16px;
    padding: 20px 32px;
    text-align: left;
    color: #748290;
    margin-top: -1px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .icon-type {
      width: 24px;
      height: 24px;
    }
    p {
      margin-bottom: 0;
      margin-left: 16px;
    }
    .date {
      position: absolute;
      right: 32px;
      color: #2d3643;
    }
  }
  .price-info {
    list-style: none;
    background-color: #fff;
    border: 1px solid #748290;
    font-size: 14px;
    padding: 20px 32px;
    text-align: left;
    color: #748290;
    margin-top: -1px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 146px;
      left: 50%;
      width: 300px;
      height: 1px;
      background-color: #e4e4e4;
      transform: translateX(-50%);
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      &:nth-child(3) {
        margin-bottom: 48px;
      }
    }
    .sum-item {
      font-size: 16px;
      color: #2d3643;
    }
    .sum-price {
      font-size: 16px;
      color: #2d3643;
      font-weight: 700;
    }
  }
}

footer {
  // position: absolute;
  // bottom: 0;
  margin-top: 96px;
  padding: 0 30px;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #cbd6e0;
    padding: 27px 0;
  }
  .footer-info {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 30px;
      color: #2d3643;
      font-weight: 700;
      font-style: italic;
      position: relative;
      font-size: 22px;
      &:before {
        content: 'H';
        position: absolute;
        top: 0;
        left: 10px;
      }
    }
    .copyright {
      font-size: 16px;
      color: #748290;
    }
  }
}
</style>
