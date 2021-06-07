<template>
  <div class="invite">
    <Header />
    <MainEN />

    <div id="introduce">
      <ReasonInviteEN />
      <div class="divide"></div>
      <IntroduceEN />
      <TimelineEN />
    </div>

    <div class="divide"></div>

    <SustainEN />

    <div class="divide"></div>

    <EventlineEN />

    <div class="divide"></div>

    <div id="rsvp" ref="rsvp">
      <div class="quest flex">
        <p>Will you attend the event off-line?</p>
        <div class="radio-wrap">
          <label :class="rsvp.attend_yn == 'Y' ? 'active' : ''">
            YES
            <input
              type="radio"
              name="attendance"
              value="Y"
              v-model="rsvp.attend_yn"
            />
          </label>
          <label :class="rsvp.attend_yn == 'N' ? 'active' : ''">
            NO
            <input
              type="radio"
              name="attendance"
              value="N"
              v-model="rsvp.attend_yn"
            />
          </label>
        </div>
      </div>

      <div class="quest">
        <div class="desc">
          The main event will be streamed live. <br />
          We will also send you a highlight of the event.. <br />
          To receive a link to a live streaming and follow up, <br />
          <span>please leave an email address!</span>
        </div>
        <div class="textfield-wrap">
          <input
            type="text"
            placeholder="이름"
            v-model="rsvp.name"
            @change="commitName"
          />
          <input type="text" placeholder="전화번호" v-model="rsvp.phone" />
          <input type="text" placeholder="이메일" v-model="rsvp.email" />
        </div>
      </div>

      <div class="quest">
        <p>Please recommend any music for the wedding!</p>
        <textarea
          rows="3"
          cols="20"
          placeholder="ex) BTS-BUTTER (가수-곡)"
          v-model="rsvp.bgm"
        />
      </div>

      <div class="quest">
        <p>Recommend a name for Saerom & Jaeyong's future baby!</p>
        <textarea rows="3" cols="20" v-model="rsvp.junior_name" />
      </div>

      <div class="quest flex" v-if="rsvp.attend_yn == 'Y'">
        <p>결혼식 참여 방법을 알려주세요!</p>
        <div class="radio-wrap">
          <label :class="rsvp.method == 'online' ? 'active' : ''">
            온라인
            <input
              type="radio"
              name="method"
              value="online"
              v-model="rsvp.method"
            />
          </label>
          <label :class="rsvp.method == 'offline' ? 'active' : ''">
            오프라인
            <input
              type="radio"
              name="method"
              value="offline"
              v-model="rsvp.method"
            />
          </label>
        </div>
      </div>

      <div
        class="quest"
        v-if="rsvp.attend_yn == 'Y' && rsvp.method == 'offline'"
      >
        <p>언제부터 방문하실 계획이신가요?</p>
        <div class="radio-wrap vertical">
          <label>
            <input
              type="radio"
              name="event"
              value="벼룩시장"
              v-model="rsvp.attend_time"
            />
            <span class="custom"></span>
            <span class="event-name">벼룩시장 (11~13시)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
          <label>
            <input
              type="radio"
              name="event"
              value="메인 이벤트"
              v-model="rsvp.attend_time"
            />
            <span class="custom"></span>
            <span class="event-name">메인 이벤트 (13~14시)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
          <label>
            <input
              type="radio"
              name="event"
              value="피로연"
              v-model="rsvp.attend_time"
            />
            <span class="custom"></span>
            <span class="event-name">피로연 (14시~)</span>
            <span class="event-left">00 석이 남았습니다</span>
          </label>
        </div>
      </div>

      <div
        class="box-quest"
        v-if="rsvp.attend_yn == 'Y' && rsvp.method == 'offline'"
      >
        <p>
          "오프라인 참석자 중 30명에게 일회용 사진기를 맡겨 행사를 기록하려
          합니다. 아날로그 사진기로 기록에 참여해주시겠어요?"
        </p>
        <div class="left-radio-wrap">
          <span>( 00개 남았습니다. }</span>
          <label>
            <input type="button" @click="toggle" />
            <span
              class="custom"
              :class="rsvp.offline_camera_yn == 'Y' ? 'active' : ''"
            ></span>
            <span class="event-name">네</span>
          </label>
        </div>
      </div>

      <button @click="postAttend">SUBMIT</button>
    </div>

    <div class="divide"></div>

    <Cheer />

    <div class="divide"></div>

    <div id="funding" ref="funding">
      <div>
        <h3>The Request of Love</h3>
        <p>
          In Korea, the culture of mutual support for life events traces back to
          the 15th century. One might say that Koreans have been practicing
          solidarity through their self-organized crowd funding culture. Now,
          please join us for a crowd funding for the kickstart of a newly-wed
          couple!
        </p>
        <p>
          You can send cryptocurrency as well as fiat currency. Are you curious
          about the future in ten years? If you send BTC & ETH, we will 'HODL'
          it until 2030 and publish the results. We will also donate a portion
          of your support.
        </p>

        <!-- <p class="bold">
          * BTC/ETC 축의금은 2030년까지 'HODL'후 다음 세대를 위해 쓸 계획입니다.
        </p>
        <p class="bold">* 축의금의 일부는 기부 후 내역을 공유하겠습니다.</p> -->
        <div class="radio-wrap">
          <label :class="payment_method == '송금하기' ? 'active' : ''">
            송금하기
            <input
              type="radio"
              name="payment_method"
              value="송금하기"
              v-model="payment_method"
            />
          </label>
          <label :class="payment_method == '페이팔' ? 'active' : ''">
            PAYPAL
            <input
              type="radio"
              name="payment_method"
              value="페이팔"
              v-model="payment_method"
              @click="payment = '페이팔'"
            />
          </label>
          <label :class="payment_method == 'BTC/ETC' ? 'active' : ''">
            BTC/ETC
            <input
              type="radio"
              name="payment_method"
              value="BTC/ETC"
              v-model="payment_method"
            />
          </label>
        </div>

        <div v-if="payment_method == '송금하기'" class="송금하기">
          계좌: 카카오뱅크 7979-23-70356 (서새롬)
        </div>
        <div v-if="payment_method == '송금하기'" class="payment-wrap">
          <span>축의금 전달 방법</span>
          <div class="payment">
            <label>
              <input
                type="radio"
                name="payment"
                value="카카오페이"
                v-model="funding.payment"
              />
              <span class="custom"></span>
              <span class="event-name">카카오페이</span>
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="송금"
                v-model="funding.payment"
                @click="() => settingCopyText('송금')"
              />
              <span class="custom"></span>
              <span class="event-name">송금하기</span>
            </label>
          </div>
        </div>
        <div v-if="payment_method == 'BTC/ETC'" class="payment-wrap">
          <span>축의금 전달 방법</span>
          <div class="payment">
            <label>
              <input
                type="radio"
                name="payment"
                value="BTC"
                v-model="funding.payment"
                @click="() => settingCopyText('BTC')"
              />
              <span class="custom"></span>
              <span class="event-name">BTC</span>
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="ETC"
                v-model="funding.payment"
                @click="() => settingCopyText('ETC')"
              />
              <span class="custom"></span>
              <span class="event-name">ETC</span>
            </label>
          </div>
        </div>

        <div class="textfield-wrap">
          <input
            id="description"
            type="text"
            placeholder="name"
            v-model="funding.name"
          />
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            v-model="funding.amount"
          />
          <div class="dropdown">
            <button class="dropbtn" @click="showdropdown = !showdropdown">
              {{ how_to_spendText }}
            </button>
            <div
              id="myDropdown"
              class="dropdown-content"
              v-if="showdropdown == true"
              v-click-outside="onClickOutside"
            >
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="혼수 및 주거환경 개선"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name">Improve living condition</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="국내외 친지 방문 경비"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name"
                  >Visit relatives in Korea & overseas</span
                >
              </label>
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="아이를 위해 쓰기"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name">Keep it for the child(ren)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="배움을 위해 쓰기"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name">Learn new things</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="HODL (2030년까지)"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name">HODL (until 2030)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="how_to_spend"
                  value="어디든 필요한 곳에"
                  v-model="funding.how_to_spend"
                />
                <span class="custom"></span>
                <span class="event-name">Use for yourselves</span>
              </label>
            </div>
          </div>
          <input
            type="text"
            placeholder="our address to receive our gift"
            v-model="funding.address"
          />
        </div>

        <div class="box-quest">
          <p>
            Would you like to get updates on Saerom & Jaeyong's key life moments
            in the coming years?
          </p>
          <div class="left-radio-wrap">
            <label>
              <input
                type="button"
                @click="() => subscribeToggle('중요한 순간')"
              />
              <span
                class="custom"
                :class="
                  subscriber.where_to_regist == '중요한 순간' ? 'active' : ''
                "
              ></span>
              <span class="event-name">네</span>
            </label>
            <input
              type="text"
              placeholder="이메일"
              v-model="subscriber.email"
            />
          </div>
        </div>

        <input class="copy" v-model="copy_string" v-show="false" />

        <button
          v-if="this.payment_method == '페이팔'"
          class="pay"
          @click="showPaypal"
        >
          SUBMIT
        </button>

        <button
          v-else
          class="pay"
          @click="postFunding"
          v-clipboard:copy="copy_string"
        >
          SUBMIT
        </button>
      </div>
    </div>

    <div class="divide"></div>

    <div id="funfacts" ref="funfacts">
      <h3>FUN FACT</h3>
      <p>
        ✓ The e-invitation for this 'sustainable wedding' is accessed a total of
        {{ funfact.hit }}times.
      </p>
      <p>
        ✓ Due to COVID-19,{{ funfact.online }}% of participants will join
        online, {{ funfact.highlight }}% chose to receive the highlight video
        only.
      </p>

      <p>
        ✓ Beside the current visitor, the last person who sent support is
        {{ funfact.recent_name }} who visited the e-invitation
        {{ funfact.recent_time }}seconds ago.
      </p>
      <p>
        ✓ The person who sent the biggest support lives in {{ funfact.max_amount_addr }}.
      </p>
      <p>✓ The most requested song for the wedding BGM is{{ funfact.max_count_bgm }}.</p>
    </div>

    <div class="divide"></div>

    <div id="after_event" ref="after_event">
      <h3>After the Wedding</h3>
      <p>
        Saerom & Jaeyong will take a vacation in Jeju Island. There's one thing
        the two will do: getting a driver's license. With their first driver's
        license but without a car, the two will continue to live in their place
        in Cheongun-dong, Seoul, with a dream to secure stability of housing one
        day. For the rest of the year, Saerom & Jaeyong will reflect on the
        concept of sustainability in both work and life. Let's hope to hear news
        about a new baby sometime next year!
      </p>
      <div class="box-quest">
        <p>
          Would you like to get updates on Saerom & Jaeyong's life after the wedding?
        </p>
        <div class="left-radio-wrap">
          <label>
            <input
              type="button"
              @click="() => subscribeToggle('결혼식 이후의 소식')"
            />
            <span
              class="custom"
              :class="
                subscriber.where_to_regist == '결혼식 이후의 소식'
                  ? 'active'
                  : ''
              "
            ></span>
            <span class="event-name">네</span>
          </label>
          <input type="text" placeholder="이메일" v-model="subscriber.email" />
        </div>
      </div>
      <button @click="postSubscriber">SUBMIT</button>
    </div>

    <div class="divide"></div>

    <CommitteeEN />
    <Credit :lang="'en'" />

    <Navigator />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MainEN from "@/components/MainEN";
import ReasonInviteEN from "@/components/ReasonInviteEN";
import IntroduceEN from "@/components/IntroduceEN";
import TimelineEN from "@/components/TimelineEN";
import SustainEN from "@/components/SustainEN";
import EventlineEN from "@/components/EventlineEN";
import Cheer from "@/components/Cheer";
import CommitteeEN from "@/components/CommitteeEN";
import Credit from "@/components/Credit";
import Navigator from "@/components/Navigator";
import vClickOutside from "v-click-outside";
import { mapState } from "vuex";
// import PayPal from 'vue-paypal-checkout'

export default {
  name: "Invitation",
  components: {
    Header,
    MainEN,
    ReasonInviteEN,
    IntroduceEN,
    TimelineEN,
    SustainEN,
    EventlineEN,
    Cheer,
    CommitteeEN,
    Credit,
    Navigator,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      rsvp: {
        attend_yn: "",
        method: "",
        name: "",
        phone: "",
        email: "",
        bgm: "",
        get_paper_invitation: "",
        junior_name: "",
        attend_time: "",
        offline_camera_yn: "N",
      },
      offline_camera_yn_flag: false,
      showdropdown: false,
      payment_method: "송금하기",
      copy_string: "",
      funding: {
        payment: "",
        how_to_spend: [],
        name: "",
        amount: "",
        address: "",
      },
      subscriber_toggle: false,
      subscriber: {
        name: "",
        email: "",
        where_to_regist: "",
      },
      funfact: {},
    };
  },
  mounted() {
    this.getFunfact();
  },
  computed: {
    ...mapState(["user"]),
    how_to_spendText() {
      if (this.funding.how_to_spend.length > 0)
        return this.funding.how_to_spend.join(", ");
      else return "Please select the use of your support (multiple choice)";
    },
  },
  methods: {
    setInitialData() {},
    commitName(e) {
      this.$store.commit("SET_NAME", e.target.value);
    },
    toggle() {
      this.offline_camera_yn_flag = !this.offline_camera_yn_flag;
      if (this.offline_camera_yn_flag) {
        this.rsvp.offline_camera_yn = "Y";
      } else {
        this.rsvp.offline_camera_yn = "N";
      }
    },
    subscribeToggle(where) {
      this.subscriber_toggle = !this.subscriber_toggle;
      if (this.subscriber_toggle) {
        this.subscriber.where_to_regist = where;
      } else {
        this.subscriber.where_to_regist = "";
      }
    },
    onClickOutside() {
      this.showdropdown = false;
      const modal = window.document.querySelector("#smart-button-container");
      modal.style.display = "none";
    },
    postAttend() {
      this.$store.dispatch("postAttend", this.rsvp).then(() => {
        alert("제출 되었습니다!");
        this.setInitialData();
      });
    },
    settingCopyText(payment) {
      if (payment == "송금") {
        this.copy_string = "카카오뱅크 7979-23-70356 서새롬";
      } else if (payment == "BTC") {
        this.copy_string = "14zM717FC59NhypkbzfsvmAd9FTicXUL49";
      } else if (payment == "ETC") {
        this.copy_string = "0xa4f29ad904B90bB57743546b27019d580452B358";
      }
    },
    postFunding() {
      this.$copyText(this.copy_string);
      this.$store
        .dispatch("postFunding", {
          ...this.funding,
          how_to_spend: this.funding.how_to_spend.join(","),
        })
        .then(() => {
          if (this.funding.payment == "카카오페이") {
            window.open("https://qr.kakaopay.com/281006011000012382661631");
          } else if (this.funding.payment == "송금") {
            alert("계좌 정보가 클립보드에 복사되었습니다!");
          } else if (this.funding.payment == "BTC") {
            alert("BTC 전자 지갑 정보가 클립보드에 복사되었습니다!");
          } else if (this.funding.payment == "ETC") {
            alert("ETC 전자 지갑 정보가 클립보드에 복사되었습니다!");
          }
        });
      if (this.subscriber.where_to_regist.length > 0) {
        this.postSubscriber();
      }
    },
    onCopy: function (e) {
      alert("You just copied the following text to the clipboard: " + e.text);
    },
    onError: function (e) {
      alert("Failed to copy the text to the clipboard");
      console.log(e);
    },
    postSubscriber() {
      this.$store.dispatch("postSubscriber", this.subscriber).then(() => {
        if (this.subscriber.where_to_regist == "결혼식 이후의 소식") {
          alert("등록 되었습니다!");
          this.subscriber = {
            name: this.$store.state.user.name,
            email: "",
            where_to_regist: "",
          };
        }
      });
    },
    showPaypal() {
      if (this.subscriber.where_to_regist.length > 0) {
        this.postSubscriber();
      }
      if (this.funding.amount.length > 0 && this.funding.name.length > 0) {
        const modal = window.document.querySelector("#smart-button-container");
        modal.style.display = "block";
        this.$store.dispatch("postFunding", {
          ...this.funding,
          how_to_spend: this.funding.how_to_spend.join(","),
        });
      }
    },
    getFunfact() {
      this.$store.dispatch("getFunFact").then((res) => {
        this.funfact = res.data.r;
      });
    },
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
  margin-left: 15px;
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
  margin-left: 15px;
}
#rsvp .quest > p.helper-question {
  font-weight: normal;
  padding-bottom: 0.2rem;
}

#rsvp .quest .desc {
  text-align: left;
  font-size: 12px;
  padding: 15px;
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

#rsvp .radio-wrap label.active {
  background: #000;
  color: #fff;
}

#rsvp .radio-wrap.vertical {
  text-align: left;
  padding-top: 1rem;
  margin-left: 15px;
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
.box-quest label .custom.active {
  background: #bfffff;
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
  padding-top: 61px;
  position: relative;
  background: #f2f2ed;
}

#funding h3 {
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
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

#funding .payment-wrap {
  display: flex;
  align-items: center;
  height: 47px;
  border-bottom: 1px solid #000;
  font-size: 13px;
  padding-left: 1rem;
  justify-content: space-between;
}

#funding .payment {
  display: flex;
}

#funding .payment label {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

#funding .payment label input {
  width: 0;
  height: 0;
  margin: 0;
  display: none;
}

#funding .payment .custom {
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 19px;
  background: #c4c4c4;
  border: 1px solid #000000;
  margin-right: 0.5rem;
}

#funding .payment label input:checked + .custom {
  background: #ffff00;
}

.송금하기 {
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #6cab6e;
  margin: 0 auto;
  margin-bottom: 19px;
  text-align: left;
  width: 100%;
  max-width: 324px;
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

#funfacts {
  background: url(../assets/bg-dot.png);
}

#funfacts p {
  border: 1px solid #000;
  padding: 10px 15px;
  word-break: keep-all;
}
#funfacts p:nth-child(1) {
  margin-bottom: 19px;
}

#funfacts p:nth-child(2) {
  margin-bottom: 9px;
}

#funfacts p:nth-child(2) {
  margin-bottom: 19px;
}

#funfacts p:nth-child(3) {
  margin-bottom: 14px;
}

#funfacts p:nth-child(3) {
  margin-bottom: 12px;
}

#funfacts p:nth-child(3n-1) {
  background: #d0eec6;
  margin-left: 34px;
  margin-right: 97px;
}

#funfacts p:nth-child(3n) {
  background: #71e097;
  margin-left: 78px;
  margin-right: 9px;
}

#funfacts p:nth-child(3n-2) {
  background: #b3eba0;
  margin-left: 11px;
  margin-right: 76px;
}

#after_event,
#funfacts {
  padding: 21px 10px;
}
#after_event {
  padding: 41px 10px;
}

#funfacts h3 {
  margin-bottom: 41px;
}

#after_event h3 {
  margin-bottom: 30px;
}
#funfacts p,
#after_event p {
  text-align: left;
  font-size: 13px;
}

#after_event p {
  padding: 0 20px;
}

#after_event h3 {
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
}

#after_event {
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
