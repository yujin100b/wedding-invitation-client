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
    <div class="divide"></div>

    <div id="sustain" class="section">
      <h3>지속가능성과 결혼</h3>
      <p>
        오랫동안 예견된 재앙이 실제로 일어난 지금, 비혼주의자 두 명이 결혼을
        결심했습니다. 비록 인류와 지구가 종말을 향해 한 걸음씩 다가가고 있을지
        모르지만, 여전히 더 나은 세상을 위해 노력하는 사람들이 있다는 걸 다음
        세대에 전하고 싶습니다. 누구의 아들, 누구의 딸로서만이 아니라 온전한 두
        개인이자 여러분의 동료, 친구로서 치르는 결혼입니다.
      </p>

      <p>
        결혼식은 서울시가 시민들에게 무상 대여하는 공원에서 치릅니다. 의상은
        평소 입고 싶었던 브랜드의 아이템을 중고로 샀습니다. 한 번만 쓰고 버릴
        물건이나 기물은 가능한 줄였습니다.
      </p>

      <p>
        저희의 노력이 완벽할 수는 없습니다. 그럼에도 이 결혼을 통해 관계의 지속,
        삶의 지속, 이야기의 지속, 환경과 세계의 지속 가능성을 함께 고민하고
        싶습니다. 무엇보다, 우리가 직면한 현재 안에서 미래를 상상했으면 합니다.
      </p>
    </div>

    <div class="divide"></div>

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
            <span
              >결혼 선언
              <span class="timing"
                >(13시 [GMT 04시, PDT 21시, EDT 00시])</span
              ></span
            >
            <br />
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
        <p>
          6월 27일에만 맛볼 수 있는 '생애주기별 인생의 맛'을 담은 아이스크림과
          특별한 커피를 제공합니다.
        </p>
      </div>
    </div>

    <div class="divide"></div>

    <div id="cheer" class="section">
      <div class="cheer-header">
        <h3>정유진님</h3>
        <p>
          결혼을 앞둔 두 사람에게 <br />
          도움이 될 이야기나 응원을 남겨주시겠어요?
        </p>
      </div>
      <textarea rows="20" cols="22" />
      <button>SUBMIT</button>
      <img src="../assets/saerom_jaeyong.png" />
    </div>

    <div id="funding">
      <div>
        <h3>"사랑의 리퀘스트"</h3>
        <p>
          한국의 유구한 부조 문화는 조선시대까지 거슬러 올라 갑니다. 선조들의
          지혜. 축의금은 새로 시작하는 한 쌍을 위한 일종의 크라우드 펀딩이라 할
          수 있죠. 삶의 다음 장을 시작하는 서새롬 & 박재용의 씨앗 자금 크라우드
          펀딩에 아낌 없이 동참해주세요!
        </p>

        <p>
          * BTC/ETC 축의금은 2030년까지 'HODL'후 다음 세대를 위해 쓸 계획입니다.
        </p>
        <p>* 축의금의 일부는 기부 후 내역을 공유하겠습니다.</p>
        <div class="radio-wrap">
          <label>
            송금하기
            <input type="radio" name="payment_method" value="송금하기" />
          </label>
          <label>
            페이팔
            <input type="radio" name="payment_method" value="페이팔" />
          </label>
          <label>
            BTC/ETC
            <input type="radio" name="payment_method" value="BTC/ETC" />
          </label>
        </div>

        <div class="textfield-wrap">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="축의금 금액" />
          <div class="dropdown">
            <button class="dropbtn">축의금을 어디에 쓸까요?</button>
            <div id="myDropdown" class="dropdown-content">
              <label>
                <input type="radio" name="how_to_use" value="Y" />
                <span class="custom"></span>
                <span class="event-name">혼수 및 주거환경 개선</span>
              </label>
              <label>
                <input type="radio" name="how_to_use" value="Y" />
                <span class="custom"></span>
                <span class="event-name">국내외 친지 방문 경비</span>
              </label>
              <label>
                <input type="radio" name="how_to_use" value="Y" />
                <span class="custom"></span>
                <span class="event-name">아이를 위해 쓰기</span>
              </label>
              <label>
                <input type="radio" name="how_to_use" value="Y" />
                <span class="custom"></span>
                <span class="event-name">HODL (2030년까지)</span>
              </label>
              <label>
                <input type="radio" name="how_to_use" value="Y" />
                <span class="custom"></span>
                <span class="event-name">어디든 필요한 곳에</span>
              </label>
            </div>
          </div>
          <input
            type="text"
            placeholder="오프라인 불참시 답례품 수령을 위한 주소를 알려주세요."
          />
        </div>

        <div class="box-quest">
          <p>
            "새롬 & 재용 인생의 중요한 순간을 알리는 소식지를 받아보시겠어요?"
          </p>
          <div class="left-radio-wrap">
            <label>
              <input type="radio" name="subscribe" value="Y" />
              <span class="custom"></span>
              <span class="event-name">네</span>
            </label>
            <input type="text" placeholder="이메일" />
          </div>
        </div>

        <button class="pay">SUBMIT</button>
      </div>
    </div>

    <div id="funfacts">
      <h3>Fun Facts</h3>
      <p>이 웹 청첩장은 총 [X]회 조회되었습니다.</p>
      <p>
        코로나 시국에 맞춰, 참석자 중 [X]%가 [온라인] 참석을, [X]%는 [하이라이트
        비디오만 수령]을 합니다.
      </p>
      <p>
        본 페이지에 접속 중인 [X]님을 제외하고, 가장 최근 축의금을 낸 분은
        [이XX]님! [X초] 전에 왔다 가셨습니다.
      </p>
      <p>축의금을 낸 분 중 [김]씨 성을 가진 분이 제일 많네요!</p>
      <p>
        축의금 금액은 [6]자리 대가 제일 많고, 가장 많이 낸 사람은 [ 00시 --구 ]
        에 살고 있습니다.
      </p>
      <p>결혼식 BGM 인기 곡은 [ BTS - BUTTER ] 입니다</p>
    </div>

    <div id="after_event">
      <h3>결혼 이후 계획은 어떻게 되나요?</h3>
      <p>
        제주도로 열흘 동안 여행을 떠납니다. 두 사람 모두 운전면허를 따서 돌아올
        계획이에요. 이후 종로구 청운동의 보금자리에서 내집 마련의 꿈을 품고
        생활을 이어갈 예정입니다. 올해 하반기는 지속 가능성을 화두로 일하고
        생활하고자 합니다.
      </p>
      <div class="box-quest">
        <p>
          "서새롬 & 박재용의 결혼식 이후의 일상을 알리는 소식지를
          받아보시겠어요?"
        </p>
        <div class="left-radio-wrap">
          <label>
            <input type="radio" name="subscribe" value="Y" />
            <span class="custom"></span>
            <span class="event-name">네</span>
          </label>
          <input type="text" placeholder="이메일" />
        </div>
      </div>
      <button>SUBMIT</button>
    </div>
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
  padding: 30px 10px;
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
  font-size: 13px;
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

textarea {
  width: 100%;
  resize: none;
  background: #f2f2ed;
  border: 0;
  border-radius: 0;
  padding: 10px;
  box-sizing: border-box;
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
  display: none;
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

.box-quest {
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
  display: none;
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

.box-quest .left-radio-wrap input {
  width: 200px;
  height: 28px;
  border: 0;
  border-bottom: 1px solid #000000;
  background: #ffffff;
  padding-left: 10px;
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

#eventline .eventline-body {
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 26px;
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
  align-items: center;
  margin-bottom: 25px;
}
#eventline .eventline img {
  height: 92px;
}
#eventline .eventline p {
  padding-left: 12px;
}

#eventline .eventline p > span {
  font-weight: bold;
}

#eventline .eventline p span.timing {
  font-size: 10px;
}

#sustain {
  padding-top: 41px;
  padding-left: 10px;
  padding-right: 10px;
}
#sustain h3 {
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 41px;
}

#sustain p {
  text-align: justify;
}
#cheer {
  background: url(../assets/bg.png);
  background-size: contain;
  padding-top: 41px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

#cheer .cheer-header {
  padding-left: 1rem;
}

#cheer h3 {
  margin: 0;
  width: 100%;
  text-align: left;
}

#cheer p {
  margin-top: 10px;
  margin-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 13px;
}

#cheer button {
  width: 100%;
  background: #bfffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 15px;
  font-weight: bold;
  margin-top: 21px;
}

#cheer img {
  position: absolute;
  bottom: 78px;
  right: 122px;
}

#funding {
  padding: 41px 10px;
  position: relative;
}

#funding h3 {
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 41px;
}

#funding p {
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: justify;
  font-size: 13px;
  margin-bottom: 1rem;
}

#funding .radio-wrap {
  margin-bottom: 25px;
}
#funding .radio-wrap input {
  display: none;
}

#funding .radio-wrap label {
  display: inline-block;
  vertical-align: center;
  text-align: center;
  padding-top: 16px;
  width: 100px;
  height: 50px;
  background: #f2f2ed;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;

  font-family: Noto Sans KR;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #000000;
}

#funding .radio-wrap label.active {
  /* active style */
}

#funding .radio-wrap label:not(:last-child) {
  margin-right: 12px;
}

#funding .textfield-wrap input,
#funding .textfield-wrap button {
  display: block;
  border: 0;
  border-bottom: 1px solid #000;
  height: 47px;
  width: 100%;
  padding-left: 1rem;
  text-align: left;
  background: none;
  box-sizing: border-box;
}

#funding button.pay {
  width: 100%;
  background: #bfffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 15px;
  font-weight: bold;
}

#after_event, #funfacts{
  padding: 21px 10px;
}

#funfacts h3,
#after_event h3{
  margin-bottom: 41px;
}

#funfacts p,
#after_event p{
  text-align: left;
  font-size: 13px;
}

#after_event button {
  width: 100%;
  background: #bfffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 15px;
  font-weight: bold;
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
