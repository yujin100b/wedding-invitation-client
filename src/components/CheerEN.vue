<template>
  <div id="cheer" ref="cheer">
    <div class="cheer-header">
      <p>
        결혼과 삶에 대해 새롬 & 재용에게 <br />
        도움이 될 이야기나 응원을 남겨주시겠어요?
      </p>
    </div>
    <textarea rows="20" cols="22" v-model="cheer_message" />
    <button @click="postCheer">SEND</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cheer_message: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    postCheer() {
      this.$store
        .dispatch("postCheer", {
          name: this.user.name,
          cheer_message: this.cheer_message,
        })
        .then(() => alert("제출 되었습니다!"));
    },
  },
};
</script>

<style>
#cheer {
  background: url(../assets/bg.png);
  background-size: contain;
  padding-top: 41px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  padding-bottom:62px;
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

#cheer textarea{
  opacity: 0.9;
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
</style>