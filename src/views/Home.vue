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
      <h2>[유진][님]께,</h2>

      <p>
        2021년 6월 27일(일) 치러질 [박재용], [서새롬]의 결혼식을 위해
        [유진][님]을 위해 쓴 초대장을 전합니다. 저희 두 사람은 팬데믹의 시대에
        '지속가능성'을 고민하며 결혼을 결심했습니다.
      </p>

      <div class="line"></div>
      <p class="open-please">
        아래 버튼을 눌러 [유진][님]에게만 전하는 맞춤 청첩장을 열어주세요!
        [유진][님]을 위한 이 초대장은 [박재용]이 작성했습니다.
      </p>

      <img class="grass" src="../assets/grass.png" />
    </div>
    <div class="button-wrap">
      <button>OPEN</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.home {
  position: fixed;
  overflow: hidden;
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
  padding: 22px;
  box-sizing: border-box;
}
.letter h2 {
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
.letter p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
}
.letter p.open-please {
  font-size: 14px;
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
  left: 284px;
  top: 105px;
}
.flower {
  position: absolute;
  left: 20px;
  top: 556px;
}
.cat {
  position: absolute;
  left: 163px;
  top: 620px;
}
.star {
  position: absolute;
  left: 352px;
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
  }
}
</style>
