<template>
  <div id="committee" ref="committee">
    <div class="committee-header">
      <img src="../assets/leaf-left.png" />
      <h3>Marriage Council</h3>
      <img src="../assets/leaf-right.png" />
    </div>

    <div class="committee-body">
      <p>
        It is said that a wedding is not just about the two people getting
        married. The reason might be that a wedding connects different
        'communities' that have been accumulated through the lives of the two
        people. Then, what should be a community that goes beyond family ties
        and social affiliations? We have invited our friends as 'council
        members' for this wedding, sharing the process and asked for comments
        and suggestions.

        <br />
        <br />
        <span class="bold">Let us introduce our dear friends!</span>
        <span class="small">(가나다 순)</span>
      </p>
    </div>

    <div class="friends">
      <div class="friend">

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
#committee .friend:nth-child(3n) {
  margin-left: 3px;
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
