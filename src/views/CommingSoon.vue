<template>
  <div class="home">
    <Header />
    <img class="bird" src="../assets/bird.png" />
    <img class="cat" src="../assets/cat.png" />
    <img class="flower" src="../assets/flower.png" />
    <img class="gift" src="../assets/gift.png" />
    <img class="tree" src="../assets/tree.png" />
    <img class="star" src="../assets/star.png" />

    <div class="letter">
      <h2 v-if="lang=='ko'">서새롬과 박재용의 지속가능한 결혼식에 여러분을 초대합니다!</h2>
      <h2 v-else class="en">
        Saerom & Jaeyong cordially invite you to a sustainable wedding ceremony!
      </h2>

      <p v-if="lang=='ko'">
        일시: 2021년 6월 27일 (일요일)<br />
        장소: 용산가족공원<br />

        식순:<br />
        (1) 벼룩시장 (11~13시)<br />
        (2) 결혼 선언 (13~14시)<br />
        (3) 피로연 (14시~)<br />
      </p>
      <p v-else class="en">
        Date: June 27 (Sunday), 2021<br />
        Venue: Yongsan Family Park, Seoul<br />
        Timeline:<br />
        (1) Flea market (11:00~13:00)<br />
        (2) Wedding ceremony (13:00~14:00)<br />
        (3) After party (14:00~)<br />
      </p>

      <div class="line"></div>
      <p v-if="lang=='ko'" class="open-please">
        초대장을 받으실 성함과 이메일 주소를 남겨주세요.
      </p>
      <p v-else class="open-please en">Please leave your name & email address to receive the main invitation.</p>

      <img class="grass" src="../assets/grass.png" />
    </div>
    <div class="button-wrap">
      <button v-if="lang=='ko'" @click="goEnglish">See in English</button>
      <button v-else @click="goKorean">한글로 보기</button>
      <button v-if="lang=='ko'" @click="goApply">정보 입력하기</button>
      <button v-else @click="goApply">Enter Information</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  props: ["lang"],
  components: {
    Header,
  },
  methods:{
    goKorean() {
       this.$router.push("/?lang=ko")
    },
    goEnglish() {
       this.$router.push("/?lang=en")
    },
    goApply(){
      window.open('https://forms.gle/YtjUWLB5yUt7nbJv9')
    }
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.home {
  position: fixed;
  overflow: scroll;
  width: 100%;
  height: 100%;
  max-height: 896px;
  background-color: #d0eec6;
  background-image: url("../assets/bg.png");
}
.letter {
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  background-image: url("../assets/bg-letter.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 288px;
  margin-top: 160px;
  margin-left: 25px;
  margin-right: 25px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.letter h2 {
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  word-break: keep-all;
}
.letter h2.en {
  font-size: 13px;
}
.letter p {
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 5px 0;
}
.letter p.en{
  font-size: 11px;
}
.letter p.open-please {
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.button-wrap {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 26px;
}
.button-wrap button {
  float: right;
  width: 118px;
  height: 50px;
  background: #bfffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  margin-left: 1rem;
  font-family: "Noto Sans KR";
  font-weight: 900;
  font-size: 13px;
  line-height: 19px;
}
.tree {
  position: absolute;
  left: 61px;
  top: 116px;
}
.bird {
  position: absolute;
  right: 14px;
  top: 105px;
}
.flower {
  position: absolute;
  left: 20px;
  top: 556px;
}
.cat {
  position: absolute;
  left: 150px;
  top: 620px;
}
.star {
  position: absolute;
  right: 14px;
  top: 683px;
}
.gift {
  position: absolute;
  left: 85px;
  top: 748px;
}
.grass {
  position: absolute;
  right: -8px;
  bottom: -25px;
}
.line {
  width: 91px;
  height: 0px;
  border: 1px solid #000000;
}
@media screen and (min-width: 414px) {
  .home {
    width: 414px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #000;
  }
}
</style>
