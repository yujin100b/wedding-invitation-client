<template>
  <div class="invite">
    <Header />
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>

  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Invitation",
  components: {
    Header,
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
  background-color: #d0eec6;
  background-image: url("../assets/bg.png");
}
.invite h1{
  font-size: 50px;;
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
