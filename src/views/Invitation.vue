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

    <div id="introduce">
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
              예술, 이론 서가 '<a href="https://seoul.readingroom.me"
                >서울리딩룸</a
              >'을 운영합니다
            </p>
          </div>
          <div class="jaeyong hero">
            <img src="../assets/frame-circle.png" />
          </div>
        </div>
      </div>

      <div class="timeline section">
        <div class="timeline-header">
          <img src="../assets/icon_clock.png" />
          <h3>TIME LINE</h3>
        </div>
        <div class="timeline-body">
          <Timeline />
        </div>
      </div>
    </div>

    <div id="rsvp">
      <h3>[ ] 님</h3>
      <div class="quest flex">
        <p>결혼식 참석 여부를 알려주세요!</p>
        <div class="radio-wrap">
          <label>
            YES
            <input type="radio" name="attendance" value="Y" />
          </label>
          <label>
            NO
            <input type="radio" name="attendance" value="N" />
          </label>
        </div>
      </div>

      <div class="quest">
        <div class="desc">
          결혼식의 메인이벤트는 생중계합니다. <br />
          결혼식 이후 하이라이트 영상을 받으실 수 있습니다. <br />
          생중계 및 팔로업 정보를 받으실 <br />
          <span>전화번호 & 이메일을 알려주세요!</span>
        </div>
        <div class="textfield-wrap">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="전화번호" />
          <input type="text" placeholder="이메일" />
        </div>
      </div>

      <div class="quest">
        <p>결혼식에 듣고싶은 BGM이 있다면?</p>
        <textarea rows="3" cols="20" />
      </div>

      <div class="quest flex">
        <p>아날로그 청첩장을 받으시겠습니까?</p>
        <div class="radio-wrap">
          <label>
            YES
            <input type="radio" name="get_paper_invitation" value="Y" />
          </label>
          <label>
            NO
            <input type="radio" name="get_paper_invitation" value="N" />
          </label>
        </div>
      </div>

      <div class="quest">
        <p>서새롬 & 박재용의 2세 이름은 무엇이 좋을까요?</p>
        <p class="helper-question">
          아이가 생길 경우 참고할 예정이며, 아이의 이름으로 선정 시 소정의
          상품을 제공합니다!
        </p>
        <textarea rows="3" cols="20" />
      </div>

      <div class="quest flex">
        <p>결혼식 참여 방법을 알려주세요!</p>
        <div class="radio-wrap">
          <label>
            온라인
            <input type="radio" name="method" value="online" />
          </label>
          <label>
            오프라인
            <input type="radio" name="method" value="offline" />
          </label>
        </div>
      </div>

      <div class="quest">
        <p>언제부터 방문하실 계획이신가요?</p>
        <div class="radio-wrap vertical">
          <label>
            <input type="radio" name="event" value="벼룩시장" />
            <span class="custom"></span>
            <span class="event-name">벼룩시장 (11~13시)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
          <label>
            <input type="radio" name="event" value="메인 이벤트" />
            <span class="custom"></span>
            <span class="event-name">메인 이벤트 (13~14시)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
          <label>
            <input type="radio" name="event" value="피로연" />
            <span class="custom"></span>
            <span class="event-name">피로연 (14시~)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
        </div>
      </div>

      <div class="box-quest">
        <p>
          "오프라인 참석자 중 30명에게 일회용 사진기를 맡겨 행사를 기록하려
          합니다. 아날로그 사진기로 기록에 참여해주시겠어요?"
        </p>
        <div class="left-radio-wrap">
          <span>( 00개 남았습니다. }</span>
          <label>
            <input type="radio" name="yes" value="Y" />
            <span class="custom"></span>
            <span class="event-name">네</span>
          </label>
        </div>
      </div>

      <button>SUBMIT</button>
    </div>

    <div id="eventline">
      <div class="eventline-header">
        <h3>EVENT TIMELINE</h3>
      </div>
      <div class="eventline-body">
        <div class="eventline">
          <img src="../assets/event1.png" />
          <p>
            <span>벼룩시장 <span class="timing">(11시~)</span> </span> <br />
            안목 좋기로 소문난 새롬 & 재용의 물건을 GET할 수 있는 절호의 찬스.
            미리 오셔서 인사 나누고 사진도 찍어요!
          </p>
        </div>
        <div class="eventline">
          <img src="../assets/event2.png" />
          <p>
            <span>결혼 선언 <span class="timing">(13시 [GMT 04시, PDT 21시, EDT 00시])</span></span> <br />
            삶의 새로운 장을 시작하는 두 사람을 축복해주세요. 노래와 댄스, 사연
            있는 드레스 경매도 준비되어 있습니다.
          </p>
        </div>
        <div class="eventline">
          <img src="../assets/event3.png" />
          <p>
            <span>피로연 <span class="timing"> (14시~)</span></span> <br />
            새롬 & 재용도 함께 하는 스탠드업 코미디 모임 '동북구연'의 공연과
            함께 파티를!
          </p>
        </div>
      </div>
    </div>
    <div class="divide"></div>

    <div id="sustain" class="section"></div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
export default {
  name: "Invitation",
  components: {
    Header,
    Timeline,
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
  height: auto;
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
  padding: 0;
  padding-top: 14px;
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
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.text-wrap {
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: justify;
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

.timeline {
  padding-top: 3rem;
  background-color: #f2f2ed;
}
.timeline .timeline-header {
  position: relative;
}

.timeline-header img {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

.timeline-header h3 {
  margin: 0;
  background: url(../assets/whiteline.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.timeline-body {
  padding-top: 3rem;
}

#rsvp {
  padding: 30px;
}

#rsvp h3 {
  text-align: left;
  font-weight: bolder;
}
#rsvp .quest {
  margin-bottom: 1rem;
}

#rsvp .quest > p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  text-align: left;
  font-size: 12px;
  line-height: 19px;
  padding-bottom: 0.2rem;
}
#rsvp .quest > p.helper-question {
  font-weight: normal;
  padding-bottom: 0.2rem;
}

#rsvp .quest .desc {
  text-align: left;
  font-size: 12px;
}

#rsvp .quest .desc > span {
  font-weight: bold;
}

#rsvp .textfield-wrap input {
  display: block;
  border: 0;
  border-bottom: 1px solid #000;
  height: 47px;
  width: 100%;
}

#rsvp textarea {
  width: 100%;
  resize: none;
  background: #f2f2ed;
  border: 0;
  border-radius: 0;
}

#rsvp .quest.flex {
  display: flex;
  justify-content: space-between;
}

#rsvp .radio-wrap:not(.vertical) label {
  display: inline-block;
  vertical-align: center;
  text-align: center;
  padding-top: 16px;
  width: 62px;
  height: 50px;
  background: #d0eec6;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;
}
#rsvp .radio-wrap:not(.vertical) label:first-child {
  margin-right: 1rem;
}

#rsvp .radio-wrap:not(.vertical) label.checked {
  /* active style */
}

#rsvp .radio-wrap label input {
  width: 0;
  height: 0;
  margin: 0;
}

#rsvp .radio-wrap.vertical {
  text-align: left;
  padding-top: 1rem;
}

#rsvp .radio-wrap.vertical label {
  display: flex;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 1rem;
  align-items: center;
}

#rsvp .radio-wrap.vertical label .custom {
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 19px;
  background: #c4c4c4;
  border: 1px solid #000000;
  margin-right: 1rem;
}
#rsvp .radio-wrap.vertical label input:checked + .custom {
  background: #bfffff;
}
#rsvp .radio-wrap.vertical label .event-name {
  width: 150px;
}
#rsvp .radio-wrap.vertical label .event-left {
  text-align: left;
}

#rsvp .box-quest {
  background-color: #f2f2ed;
  height: auto;
  padding: 26px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.box-quest p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  text-align: left;
  font-size: 12px;
  line-height: 19px;
  padding-bottom: 1rem;
}
.box-quest .left-radio-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.box-quest label input {
  width: 0;
  height: 0;
  margin: 0;
}
.box-quest label {
  display: flex;
  align-items: center;
}

.box-quest label .custom {
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 19px;
  background: #c4c4c4;
  border: 1px solid #000000;
  margin-right: 1rem;
}
.box-quest label input:checked + .custom {
  background: #bfffff;
}
#rsvp button {
  width: 100%;
  background: #bfffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 15px;
  font-weight: bold;
}

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

#eventline .eventline-body{
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 26px;
}

#eventline .eventline {
  display: flex;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
#eventline .eventline img{
  height: 92px;
}
#eventline .eventline p{
  padding-left: 12px;
}

#eventline .eventline p > span{
  font-weight: bold;
}

#eventline .eventline p span.timing{
  font-size: 10px;
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
