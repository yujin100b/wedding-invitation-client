<template>
  <div class="invite">
    <Header />
    <div id="top" class="section">
      <img src="../assets/main.png" />
      <p>
        2021년 6월 27일, 용산가족공원에서 열릴<br />
        서새롬 & 박재용의 결혼식에 [정유진][님]을 초대합니다.
      </p>
    </div>
    <div id="introduce" class="section">
      <div class="reason_invite">
        <img src="../assets/bg-skyblue.png" />
        <p>
          동명이 형, 자주 만날 기회는 없지만 항상 감사한 마음입니다. 먼 곳에
          있고 코로나19로 참석 인원도 제한되어 있지만, 인생의 중요한 일을 꼭
          알리고 싶었습니다^^ - 재용 드림
        </p>
      </div>
      <div class="divide"></div>
      <div class="introduce">
        <h3>서새롬 / 박재용</h3>
        <div class="flex">
          <div class="saerom hero">
            <img src="../assets/frame-circle.png" />
          </div>
          <div class="saerom text-wrap">
            <p>
              새롬님은 이따금씩 연희동 작업실에서 뵈었던 분이에요 만날 때마다
              미소로 인사해주셨었는데 요가클래스를 할 때는 엄청난 카리스마로 제
              다리를 찢게 해주셨답니다.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="jaeyong text-wrap">
            <p>
              재용님은 조곤조곤한 어조를 가지고 계시지만 누구보다 열정넘치는
              클라이언트 입니다. 이렇게 컨텐츠가 풍부한 클라이언트는 처음이에요!
              아무쪼록 재미있게 작업하고 있습니다
            </p>
          </div>
          <div class="jaeyong hero">
            <img src="../assets/frame-circle.png" />
          </div>
        </div>
      </div>

      <div class="timeline">
        <h3>TIME LINE</h3>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Invitation",
  components: {
    Header,
  },
};
</script>

<style scoped>
.invite {
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  max-height: 896px;
}
.invite h1 {
  font-size: 50px;
}
#top {
  width: 100%;
  height: fit-content;
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

#introduce {
  padding-top: 37px;
}

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
  margin-bottom: 37px;
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

#introduce .introduce {
  background-color: #f2f2ed;
}
.introduce {
  margin: 0;
  padding: 45px 10px;
}
.introduce h3 {
  padding-bottom: 33px;
}
.introduce .flex {
  display: flex;
}

.text-wrap {
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: left;
  word-break: keep-all;
}
.text-wrap.saerom {
  padding-left: 1rem;
}
.text-wrap.jaeyong {
  padding-right: 1rem;
}

.hero {
  width: 190px;
  height: 190px;
  border-radius: 190px;
}
.hero.saerom {
  background-image: url(../assets/saerom.png);
  background-position: center;
  background-size: contain;
}
.hero.jaeyong {
  background-image: url(../assets/jaeyong.png);
  background-position: center;
  background-size: contain;
}
.hero img {
  width: 190px;
  border-radius: 190px;
}

.timeline{
  background-color: #f2f2ed;
}
.timeline h3 {
  margin: 0;
  padding-top: 33px;
  padding-bottom: 33px;
}

@media screen and (min-width: 415px) {
  .invite {
    width: 414px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
