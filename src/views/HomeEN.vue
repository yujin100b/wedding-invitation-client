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
      <!-- <h2>{{user.name}}{{user.honor}}께,</h2> -->
      <p>
        Hello, <br />
        Saerom & Jaeyong cordially invite you to a sustainable wedding
        ceremony to take place on June 27, 2021 (Sunday). <br />
        We decided to take on
        a marriage in this time of pandemic, reflecting on sustainability.<br />
      </p>

      <div class="line"></div>
      <p class="open-please">Click the button below to open the invitation!</p>

      <img class="grass" src="../assets/grass.png" />
    </div>
    <div class="button-wrap">
      <button @click="$router.push(`/EN/open`)">OPEN</button>
      <button @click="$router.push(`/KO/open`)">초대장 열기</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Home",
  props: ["code"],
  data() {
    return {
      user: {
        name: "피카츄",
        honor: "님",
        invitee: "박재용, 서새롬",
        email: "",
        phone: "",
        message: `안녕하세요! 저희 두 사람은 팬데믹의 시대에 '지속가능성'을 고민하며 결혼을 결심했습니다.
      코로나19로 참석 인원도 제한되어 있지만, 인생의 중요한 일을 꼭 알리고
      싶었습니다. - 삶의 다음 장을 시작하는 서새롬 & 박재용 드림 `,
      },
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.getLetter();
    this.hit();
  },
  computed: {
    couple() {
      if (this.user.invitee == "박재용") {
        return "박재용, 서새롬";
      } else if (this.user.invitee == "서새롬") {
        return "서새롬, 박재용";
      } else return "박재용, 서새롬";
    },
  },
  methods: {
    hit() {
      this.$store.dispatch("hit");
    },
    getLetter() {
      if (this.code) {
        this.$store.dispath("getLetterbyCode", this.code).then((res) => {
          this.user = res.data;
          this.$store.commit("SET_USER", res.data);
        });
      } else {
        this.$store.commit("SET_USER", this.user);
      }
    },
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
  }
}
</style>
