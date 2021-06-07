<template>
  <div id="credit" class="session" ref="credit">
    <p v-if="lang == 'en'">
      Organized by Saerom & Jaeyong <br />
      Supported by families and relatives <br />
      Venue provided by Seoul Metropolitan Government <br />

      Officiator | YANG Dasol <br />
      Songs | SEO Bowon, CHOI Seoha, Roha, and Jeongha <br />
      Dance | KIM Jihyun @인스타, SEO Junghyeon @인스타 <br />
      Standup comedy | Northeastern Asia International Oral Culture Institute
      (줄리아 김, 서정현, 양다솔, 임다운, 정성은, 천다민) @dongbuka_comedy
      <br />

      Cartoon | JEON Ji @hijeonji <br />
      [구조물 미정] <br />
      Dress | dosa @dosaflyingfish dosainc.com <br />

      'The Taste of Life' ice cream | Before It Melts @before.it.melts <br />
      Coffee | El Cafe Roasters @elcaferoasters <br />

      Photo | Lead: Yezoi Hwang @yezoi, Assistants OOO @~, OOO @~. <br />
      Video | [미정] <br />
      Streaming | [미정] <br />

      We would like to thank everyone who helped and influenced us. <br />

      — <br />
      For inquiries, please send an email to:
      sustainable-wedding@saeromsuh.jaeyongpark.net <br />

      — <br />
      Press release [링크] <br />
    </p>
    <p v-else>
      기획 | 서새롬 & 박재용 <br />
      협찬 | 양가 가족 및 친지 <br />
      장소 제공 | 용산가족공원 (서울시 시설관리과) <br />
      플래너 | 루디아 프로젝트 (서울시 지정업체) @ ludia_project <br />
      <br />
      사회 | 양다솔 @ <br />
      축가 | 서보원, 최서하, 최로하, 최정하 <br />
      축무 | 김지현 @ , 서정현 @ <br />
      <br />
      8컷 만화 | 전지 @ hijeonji <br />
      드레스 | dosa @ dosaflyingfish <br />
      <br />
      창작 아이스크림 | 녹기 전에 @ before.it.melts <br />
      커피 케이터링 | 엘카페 @ elcafecoffeeroasters <br />
      구조물 제작 | 김종범 @ rarebike <br />
      <br />
      사진 촬영 | 황예지, OOO, OOO <br />
      @ yezoi, @ , @ <br />
      현장 스트리밍 | <br />
      <br />
      오늘의 저희 두 사람이 있기까지 영향과 도움 주신 모든 분께 감사드립니다.<br />
      <br />
      — <br />
      본 결혼식에 관한 문의는 다음 이메일 주소로 부탁드립니다.
      saeromsuh@jaeyongpark.net
    </p>
  </div>
</template>

<script>
export default {
  props: ["lang"],
};
</script>

<style>
#credit {
  padding: 43px 30px;
  background-color: #d0eec6;
  background-image: url("../assets/bg.png");
}
#credit > p {
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-align: left;
}
</style>