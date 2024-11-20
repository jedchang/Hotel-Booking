<template lang="html">
    <div v-if="loading" class="vld-parent">
    <loading 
      :active.sync="isLoading" 
      :can-cancel="true" 
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="Dots"
      :height = "80"
      :width = "80"
      :z-index = "999"
    ></loading>
  </div></div> 

</template>

<script>
export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      loading: false
    };
  },
  mounted() {},
  methods: {
    onCancel() {
      console.log('User cancelled the loader.');
    },
    start() {
      this.isLoading = true;
      this.loading = true;
    },
    finish() {
      this.isLoading = false;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/partial/_header.scss';
</style>
