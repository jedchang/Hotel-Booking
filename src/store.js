/**
 *
 * 還不清楚 vuex 之間傳遞資料，尚未使用!!!!
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // data
  state: {
    rooms: null
  },
  // 實際操作狀態，更改 state 資料，建議大寫
  mutations: {
    UPDATEROOM(state, payload) {
      state.rooms = payload;
    }
  },
  // 操作行為。透過 dispatch 執行 action，提交 mutation，並處理非同步操作
  actions: {
    getRooms(context, payload) {
      // 取得所有房型
      axios
        .get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
          // API TOKEN
          headers: {
            Accept: 'application/json',
            // Token 前面需加上 Bearer
            Authorization: 'Bearer MBSq6sUBHhy1xw20NIg33KIapkVPPcCa1ZfDNtfDlIb1M89p4crXq1SSruNv'
          }
        })
        .then(res => {
          if (res.data.success) {
            console.log('成功獲取API', res.data);
            // 將資料賦值到 data 中的 roomsInfo
            // this.rooms = res.data.items;
            context.commit('UPDATEROOM', res.data.items);
          }
        })
        .catch(err => {
          console.log('錯誤!', err);
        });
    }
  }
});
