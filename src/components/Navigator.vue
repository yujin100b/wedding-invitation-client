<template>
  <div
    class="navigator"
    @click="toggle = !toggle"
    :class="toggle ? 'active' : ''"
  >
    <img src="../assets/handle.png" />
    <div class="link-list">
      <span
        :class="id == 'reason_invite' ? 'active' : ''"
        @click="scroll('reason_invite')"
        >초대의 사유</span
      >
      <span :class="id == 'hero' ? 'active' : ''" @click="scroll('hero')"
        >서새롬 & 박재용 소개</span
      >
      <span :class="id == 'sustain' ? 'active' : ''" @click="scroll('sustain')"
        >지속가능성과 결혼</span
      >
      <span
        :class="id == 'eventline' ? 'active' : ''"
        @click="scroll('eventline')"
        >행사 일정</span
      >
      <span :class="id == 'rsvp' ? 'active' : ''" @click="scroll('rsvp')"
        >ON/OFF 참석여부</span
      >
      <span :class="id == 'cheer' ? 'active' : ''" @click="scroll('cheer')"
        >결혼에 관한 생각</span
      >
      <span :class="id == 'funding' ? 'active' : ''" @click="scroll('funding')"
        >전통 크라우드 펀딩 & 답례품</span
      >
      <span
        :class="id == 'after_event' ? 'active' : ''"
        @click="scroll('after_event')"
        >결혼 이후</span
      >
      <span
        :class="id == 'committee' ? 'active' : ''"
        @click="scroll('committee')"
        >결혼위원회</span
      >
      <span :class="id == 'credit' ? 'active' : ''" @click="scroll('credit')"
        >크레딧 & 문의</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      id: "",
    };
  },
  methods: {
    scroll(id) {
      this.id = id;
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style>
.navigator {
  background: #ffffff;
  box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px 9px 0px 0px;
  position: fixed;
  bottom: -130px;
  transition: bottom 1s;
  padding-bottom: 1rem;
}
.navigator img {
  padding: 13px;
}
.navigator.active {
  bottom: 0px;
}
.navigator .link-list {
  word-break: keep-all;
}
.navigator span {
  font-weight: 500;
  font-size: 12.5px;
  line-height: 39px;
  margin-left: 5px;
  margin-right: 5px;
  border-bottom: 1px solid #000;
  padding: 10px 0;
}

.navigator span.active {
  background: #bfffff;
}
</style>