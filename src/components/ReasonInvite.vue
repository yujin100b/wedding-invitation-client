<template>
  <div id="reason_invite" ref="reason_invite">
    <img src="../assets/bg-skyblue.png" />
    <p>
      코로나19로 오프라인 참석이 제한되어 있지만, 인생의 중요한 일을 함께
      나누고자 초대장을 전합니다. - 삶의 다음 장을 시작하는 서새롬 & 박재용 드림
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