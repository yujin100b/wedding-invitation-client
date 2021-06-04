<template>
  <div id="cheer" class="section" ref="cheer">
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
</template>

<script>
export default {};
</script>

<style>
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

</style>