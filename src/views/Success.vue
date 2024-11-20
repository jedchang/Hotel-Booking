<template>
  <div class="reservation-success">
    <FixedRoomStyle></FixedRoomStyle>
    <section class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="reservation-info">
              <div class="reservation-form">
                <h3>Reservation received!</h3>
                <ul class="form-style">
                  <li class="block">
                    <p class="item">GUEST</p>
                    <p class="txt">Annalise Parisian</p>
                  </li>
                  <li class="block">
                    <p class="item">PHONE</p>
                    <p class="txt">Annalise Parisian</p>
                  </li>
                  <li class="block">
                    <p class="item">ROOM</p>
                    <p class="txt">Deluxe Single Room / 5 Nights</p>
                  </li>
                  <li class="block">
                    <p class="item">CHECK-IN</p>
                    <p class="txt">2019/8/7</p>
                  </li>
                  <li class="block">
                    <p class="item">CHECK-OUT</p>
                    <p class="txt">2019/8/12</p>
                  </li>
                </ul>

                <div class="btn-group">
                  <router-link
                    to="/reservation"
                    class="btn btn-edit active"
                  >
                    EDIT RESERVATION
                  </router-link>
                  <router-link
                    to="/"
                    class="btn btn-home active"
                  >
                    HOMEPAGE
                  </router-link>
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
  name: 'success',
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

.success {
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

  .form-style {
    margin-top: 48px;
    width: 730px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 730px;
    padding-bottom: 16px;
    &:first-child {
      padding-top: 16px;
      border-top: 1px solid #e3e6e9;
    }
    &:nth-child(2) {
      border-bottom: 1px solid #e3e6e9;
    }
    &:nth-child(3) {
      padding-top: 16px;
      border-bottom: 1px solid #e3e6e9;
    }
    &:nth-child(4) {
      padding-top: 16px;
    }
    &:nth-child(5) {
      border-bottom: 1px solid #e3e6e9;
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 16px;
      color: #2d3643;
      margin-bottom: 0;
    }
    .item {
      font-weight: 700;
    }
  }

  .btn-group {
    margin-top: 48px;
    width: 730px;
    .btn {
      width: 350px;
      height: 72px;
      line-height: 72px;
      border-radius: 0px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
    .btn-edit {
      color: #748290;
      background-color: #fff;
      border: 1px solid #748290;
      &:hover {
        background-color: darken(#fff, 15%);
        border: solid 1px darken(#748290, 15%);
      }
    }
    .btn-home {
      color: #fff;
      background-color: #569dc3;
      border: 1px solid #569dc3;
      &:hover {
        background-color: darken(#569dc3, 15%);
        border: solid 1px darken(#569dc3, 15%);
      }
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
