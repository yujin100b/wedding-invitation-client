<template>
  <div id="app">
    <router-view class="mobile" />
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.section {
  height: 100%;
  background-color: #fff;
}
.divide {
  width: 96%;
  height: 0px;
  margin: 0 auto;
  border: 1px solid #000000;
}

@media screen and (min-width: 414px) {
  .mobile {
    border: 2px solid #000;
  }
}
</style>
