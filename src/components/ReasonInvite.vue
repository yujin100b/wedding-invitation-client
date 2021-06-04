<template>
  <div class="reason_invite">
    <img src="../assets/bg-skyblue.png" />
    <p>
      동명이 형, 자주 만날 기회는 없지만 항상 감사한 마음입니다. 먼 곳에 있고
      코로나19로 참석 인원도 제한되어 있지만, 인생의 중요한 일을 꼭 알리고
      싶었습니다^^ - 재용 드림
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.reason_invite {
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
.reason_invite img {
  display: inline-block;
  max-width: 100%;
  margin: 0 auto;
}
.reason_invite p {
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