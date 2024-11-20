<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');

// Material design icons
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryColor;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
