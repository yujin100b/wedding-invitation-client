<template>
  <div id="committee">
    <div class="committee-header">
      <img src="../assets/leaf-left.png" />
      <h3>결혼식 위원회</h3>
      <img src="../assets/leaf-right.png" />
    </div>

    <div class="committee-body">
      <p>
        결혼은 둘이서만 하는 게 아니라고들 합니다. 결혼을 통해 개인으로서의 두
        사람 뿐 아니라 지금까지의 삶을 통해 쌓아온 '공동체'가 만나기 때문인 듯
        합니다. 그렇다면 단순히 혈연이나 소속을 넘어선 우리의 공동체는
        무엇이어야 할까요? 우리는 10명의 친구들을 이 결혼식의 '위원'으로
        초대하고, 결혼식 전반에 대한 제안과 의견을 구했습니다.
        <br />
        <br />
        <span class="bold">소개합니다! </span>
        <span class="small">(가나다 순)</span>
      </p>
    </div>

    <div class="friends">
      <div v-for="i in 10" :key="i" class="friend">
        <img src="../assets/friends.png" />
        <p class="name">정유진</p>
        <p class="nick">청첩장 개발자</p>
        <p class="desc">인사를 주고 받다가 아는 사이가 되었다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#committee {
    display: none;
}
#committee .committee-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px 0 0px;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
}
#committee .committee-header h3 {
  margin-left: 21px;
  margin-right: 21px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;
}
#committee .committee-body {
  padding: 29px 30px;
  padding-top: 0;
}
#committee .committee-body p {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-align: justify;
}
#committee .committee-body p > span.bold {
  font-weight: 500;
}
#committee .committee-body p > span.small {
  font-size: 11px;
  line-height: 20px;
}
#committee .friends {
  height: 857px;
  padding: 0 10px;
}
#committee .friend {
  float: left;
  width: 114px;
  height: 180px;
  margin-bottom: 29px;
}
#committee .friend:nth-child(3n-1),
#committee .friend:nth-child(3n)
{
    margin-left:3px;
}
#committee .friend p {
  margin: 0;
  padding: 0;
}
.friend .name {
  font-size: 12px;
  line-height: 17px;
  font-weight: 900;
}
.friend .nick {
  font-size: 9.5px;
  line-height: 14px;
  color: #a4a4a4;
}
.friend .desc {
  font-size: 10px;
  line-height: 14px;
  word-break: keep-all;
}
</style>
