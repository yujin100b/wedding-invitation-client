<template>
<div class="introduce">
        <h3>서새롬 / 박재용</h3>
        <div class="flex">
          <div class="saerom hero">
            <img src="../assets/frame-circle.png" />
          </div>
          <div class="saerom text-wrap">
            <p>
              귀여운 것을 좋아하는, 다정하고 낙천적인 사람. 나답게 살고싶어
              용기있게 이 '결혼'에 도전합니다. '하자센터'에서 지역 사회와 생태
              활동으로 10대와 20대 초반을, 이후 '팩토리 콜렉티브' 멤버로 문화
              예술계에서 일했습니다. 조화로운 삶과 성장을 고민하며 최근 '<a
                href="https://www.instagram.com/saerom.care.works"
                >새롬케어웍스</a
              >'를 열었습니다.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="jaeyong text-wrap">
            <p>
              생각과 행동, 언어를 표현하고, 번역하는 사람. 약 10년 넘게 국내외의
              현대미술계를 중심으로 활동해왔습니다. 한자 이름(재주 '재', 쓸
              '용')처럼 스스로를 보다 이롭게 쓸 방법을 고민 중입니다. 동시대
              예술, 이론 서가 <a href="https://seoul.readingroom.me"
                >'서울리딩룸'</a
              >을 운영합니다
            </p>
          </div>
          <div class="jaeyong hero">
            <img src="../assets/frame-circle.png" />
          </div>
        </div>
      </div>
    
</template>

<script>
export default {
    
}
</script>

<style>
#introduce .introduce {
  background-color: #f2f2ed;
}
.introduce {
  margin: 0;
  padding: 45px 17px;
}
.introduce h3 {
  margin: 33px;
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
}
.introduce .flex {
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.text-wrap {
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.03em;
}
.text-wrap.saerom {
  padding-left: .8rem;
  text-align: left;
}
.text-wrap.jaeyong {
  padding-right: 1rem;
}
.text-wrap a{
    font-weight: bold;
    color: black;
}
.hero {
  width: 169px;
  height: 169px;
  border-radius: 169px;
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
  width: 169px;
  border-radius: 169px;
}
</style>