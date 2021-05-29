<template>
  <div class="Header">
    <h1>Saerom & Jaeyong</h1>
    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "Arca Majora 3 Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Arca Majora 3 Bold"),
    url("../assets/ArcaMajora3-Bold.woff") format("woff");
}

@font-face {
  font-family: "Arca Majora 3 Heavy";
  font-style: normal;
  font-weight: normal;
  src: local("Arca Majora 3 Heavy"),
    url("../assets/ArcaMajora3-Heavy.woff") format("woff");
}
.Header {
  position: sticky;
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  padding-top: 1px;
  background: #ffffff;
  z-index: 999;
}
.Header h1 {
  font-family: "Arca Majora 3 Bold";
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.05em;
  margin-top: 24px;
  text-align: center;
}
.Header .line {
  position: absolute;
  width: 96%;
  height: 0px;
  left: 50%;
  transform: translateX(-50%);
  top: 85px;
  border: 1px solid #000000;
}
</style>
