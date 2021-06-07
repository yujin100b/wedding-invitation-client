<template>
  <div id="reason_invite" ref="reason_invite">
    <img src="../assets/bg-skyblue.png" />
    <p>
      We would like to share this invitation with you, although off-line
      participation is limited due to COVID-19 restrictions. - Saerom & Jaeyong
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
#reason_invite {
  position: relative;
  font-family: Noto Sans KR;
  height: 124px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  width: fit-content;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 14px;
  align-items: center;
  justify-content: center;
}
#reason_invite img {
  display: inline-block;
  max-width: 100%;
  margin: 0 auto;
}
#reason_invite p {
  position: absolute;
  width: 95%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: justify;
  margin: 0;
  padding: 20px;
  font-size: 14.5px;
  line-height: 22px;
}
</style>