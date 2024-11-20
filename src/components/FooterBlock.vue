<template>
  <section class="footer-map">
    <div class="container-fluid">
      <div class="row">
        <img
          class="map-img"
          src="../assets/footer-map.jpg"
          alt=""
        >
        <div class="copyright">
          <p>© 2019 HexHotel. All rights reserved.</p>
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  name: 'FooterBlock',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map-img {
  width: 100%;
  height: auto;
  background: url('../assets/footer-map.jpg') center center no-repeat;
  background-size: cover;
}
.copyright {
  width: 1110px;
  padding: 16px 0;
  margin: 0 auto;
  text-align: left;
  p {
    font-size: 16px;
    margin-bottom: 0;
  }
}
</style>
