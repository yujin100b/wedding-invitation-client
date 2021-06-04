<template>
  <div class="invite">
    <Header />
    <Main />

    <div id="introduce">
      <ReasonInvite />
      <div class="divide"></div>
      <Introduce />
      <Timeline />
    </div>

    <div class="divide"></div>

    <Sustain />

    <div class="divide"></div>

    <div id="rsvp" ref="rsvp">
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
        <textarea rows="3" cols="20" placeholder="ex) BTS-BUTTER (가수-곡)" />
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

    <Eventline />

    <Cheer />

    <div class="divide"></div>

    <div id="funding" ref="funding">
      <div>
        <h3>사랑의 리퀘스트</h3>
        <p>
          한국의 유구한 부조 문화는 조선시대까지 거슬러 올라 갑니다. 선조들의
          지혜. 축의금은 새로 시작하는 한 쌍을 위한 일종의 크라우드 펀딩이라 할
          수 있죠. 삶의 다음 장을 시작하는 서새롬 & 박재용의 씨앗 자금 크라우드
          펀딩에 아낌 없이 동참해주세요!
        </p>

        <p class="bold">
          * BTC/ETC 축의금은 2030년까지 'HODL'후 다음 세대를 위해 쓸 계획입니다.
        </p>
        <p class="bold">* 축의금의 일부는 기부 후 내역을 공유하겠습니다.</p>
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

        <div class="송금하기">계좌: 카카오뱅크 7979-23-70356 (서새롬)</div>

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

    <div id="funfacts" ref="funfacts">
      <h3>*Fun Fact*</h3>
      <p>✓ 이 웹 청첩장은 총 [X]회 조회되었습니다.</p>
      <p>
        ✓ 코로나 시국에 맞춰, 참석자 중 [X]%가 온라인 참석을, [X]%는 하이라이트
        비디오만 수령을 합니다.
      </p>
      <p>
        ✓ 본 페이지에 접속 중인 [X]님을 제외하고, 가장 최근 축의금을 낸 분은
        [이XX]님! [X초] 전에 왔다 가셨습니다.
      </p>
      <p>✓ 축의금을 낸 분 중 [김]씨 성을 가진 분이 제일 많네요!</p>
      <p>
        ✓ 축의금 금액은 [6]자리 대가 제일 많고, 가장 많이 낸 사람은 [ 00시 --구 ]
        에 살고 있습니다.
      </p>
      <p>✓ 결혼식 BGM 인기 곡은 [ BTS - BUTTER ] 입니다</p>
    </div>

    <div class="divide"></div>

    <div id="after_event" ref="after_event">
      <h3>결혼식 이후의 계획</h3>
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

    <Committee />
    <Credit />

    <Navigator />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import ReasonInvite from "@/components/ReasonInvite";
import Introduce from "@/components/Introduce";
import Timeline from "@/components/Timeline";
import Sustain from "@/components/Sustain";
import Eventline from "@/components/Eventline";
import Cheer from "@/components/Cheer";
import Committee from "@/components/Committee"
import Credit from "@/components/Credit"
import Navigator from "@/components/Navigator"

export default {
  name: "Invitation",
  components: {
    Header,
    Main,
    ReasonInvite,
    Introduce,
    Timeline,
    Sustain,
    Eventline,
    Cheer,
    Committee,
    Credit,
    Navigator,
  },
};
</script>

<style>
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
#introduce {
  padding: 0;
  padding-top: 14px;
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
  padding: 15px 28px;
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
  background: #ffff00;
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
  padding: 16px 20px;
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

#funding {
  padding: 41px 10px;
  position: relative;
  background: #f2f2ed;
}

#funding h3 {
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 41px;
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
}

#funding p {
  width: 100%;
  max-width: 324px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: justify;
  font-size: 13px;
  margin-bottom: 1rem;
}
#funding p.bold {
  font-weight: bold;
}

#funding .radio-wrap {
  margin-bottom: 5px;
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
  background: #fff;
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
  background: #000;
  color: #fff;
}

#funding .radio-wrap label:not(:last-child) {
  margin-right: 12px;
}

.송금하기 {
  visibility: hidden;
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #6cab6e;
  margin: 0 auto;
  margin-bottom: 13px;
  text-align: left;
  width: 100%;
  max-width: 324px;
}
.송금하기.active {
  visibility: visible;
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

#funding .box-quest {
  background: #fff;
}

#funding .box-quest .left-radio-wrap input {
  background: #f2f2ed;
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

#funfacts{
  background: url(../assets/bg-dot.png);
}

#funfacts p{
  border: 1px dashed #000;
  padding: 5px;
  word-break: keep-all;
}
#funfacts p:nth-child(1){
  margin-bottom: 19px;
}

#funfacts p:nth-child(2){
  margin-bottom: 9px;
}

#funfacts p:nth-child(2){
  margin-bottom: 19px;
}

#funfacts p:nth-child(3){
  margin-bottom: 14px;
}

#funfacts p:nth-child(3){
  margin-bottom: 12px;
}

#funfacts p:nth-child(3n-1){
  background: #D0EEC6;
  margin-left: 34px;
  margin-right: 97px;
}

#funfacts p:nth-child(3n){
  background: #71E097;
  margin-left: 78px;
  margin-right: 9px;
}

#funfacts p:nth-child(3n-2){
  background: #B3EBA0;
  margin-left: 11px;
  margin-right: 76px;
}

#after_event,
#funfacts {
  padding: 21px 10px;
}

#funfacts h3,
#after_event h3 {
  margin-bottom: 41px;
}

#funfacts p,
#after_event p {
  text-align: left;
  font-size: 13px;
}

#after_event h3{
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
}

#after_event{
  background: #f2f2ed;
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

#after_event .box-quest {
  background: #fff;
}

#after_event .box-quest .left-radio-wrap input {
  background: #f2f2ed;
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
