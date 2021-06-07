<template>
  <div id="top" class="section" ref="top">
    <img src="../assets/main.png" />
    <p>
      Sustainable Wedding <br />
      June 27, 2021 (Sunday) <br />
      Yongsan Family Park <br />
      Seoul, South Korea<br />
    </p>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
#top {
  width: 100%;
  height: auto;
  position: relative;
}
#top img {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
#top p {
  position: absolute;
  left: 55px;
  top: 55px;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: left;
  word-break: keep-all;
  width: 248px;
  margin: 0;
}
</style>