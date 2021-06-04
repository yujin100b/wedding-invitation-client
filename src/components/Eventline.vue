<template>
  <div id="eventline" ref="eventline">
    <div class="eventline-header">
      <h3>EVENT TIMELINE</h3>
    </div>
    <div class="eventline-body">
      <div class="eventline">
        <img src="../assets/event1.png" />
        <p>
          <span>벼룩시장 <span class="timing">(11시~)</span> </span>
          안목 좋기로 소문난 새롬 & 재용의 물건을 GET할 수 있는 절호의 찬스.
          미리 오셔서 인사 나누고 사진도 찍어요!
        </p>
      </div>
      <div class="eventline">
        <img src="../assets/event2.png" />
        <p>
          <span
            >결혼 선언
            <span class="timing"
              >(13시 [GMT 04시, PDT 21시, EDT 00시])</span
            ></span
          >
          삶의 새로운 장을 시작하는 두 사람을 축복해주세요. 노래와 댄스, 사연
          있는 드레스 경매도 준비되어 있습니다.
        </p>
      </div>
      <div class="eventline">
        <img src="../assets/event3.png" />
        <p>
          <span>피로연 <span class="timing"> (14시~)</span></span> 
          새롬 & 재용도 함께 하는 스탠드업 코미디 모임 '동북구연'의 공연과 함께
          파티를!
          <span class="ice-cream"
            >6월 27일에만 맛볼 수 있는 '생애주기별 인생의 맛'을 담은
            아이스크림과 특별한 커피를 제공합니다.</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#eventline {
  padding-top: 45px;
  padding-bottom: 45px;
}

#eventline h3 {
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
}

#eventline .eventline-header {
  position: relative;
  background: url(../assets/curlyline.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 69px;
}

#eventline .eventline-body {
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 29px;
}

#eventline .eventline-body > p {
  font-size: 14px;
  text-align: left;
}

#eventline .eventline {
  display: flex;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 27px;
}
#eventline .eventline img {
  height: 92px;
}
#eventline .eventline p {
  padding-left: 12px;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
}

#eventline .eventline p > span {
  display: block;
  font-weight: bold;
  padding-bottom: 5px;
}

#eventline .eventline p > span.ice-cream {
  font-weight: normal;
  display: block;
  padding-top: 10px;
}

#eventline .eventline p span.timing {
  font-size: 0.65rem;
  line-height: 17px;
  color: #6cab6e;
}
</style>
