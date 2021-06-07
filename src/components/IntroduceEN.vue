<template>
  <div class="introduce" id="hero" ref="hero">
    <div class="flex">
      <div>
        <h3 class="hero-name">SUH Saerom</h3>
        <div class="saerom hero">
          <img src="../assets/frame-circle.png" />
        </div>
      </div>
      <div class="saerom text-wrap">
        <p>
          A warm, positive person who loves cute, adorable things. Saerom takes
          courage to 'do' this wedding to live a life of her own. She spent her
          teenage years and early twenties at Haja Center, an alternative
          education institution in Seoul, and later worked in the culture and
          arts field as a member of the Factory Collective. With ideas and
          concerns regarding harmonious life and growth, Saerom recently
          launched Saerom Care Works. @saerom.care.works
        </p>
      </div>
    </div>
    <div class="flex">
      <div class="jaeyong text-wrap">
        <p>
          Expresses and translates thoughts, ideas, actions, and languages.
          Jaeyong has been working in the contemporary art scene in Korea and
          beyond. As his name (Jae(才) means 'to use' and Yong(用) means
          'talent') implies, he is reflecting on how to live a life that is more
          useful and beneficial for him and others. Currently, Jaeyong runs
          Seoul Reading Room, a contemporary art and theories library.
          [seoul.readingroom.me](http://seoul.readingroom.me)
        </p>
      </div>
      <div>
        <h3 class="hero-name">PARK Jaeyong</h3>
        <div class="jaeyong hero">
          <img src="../assets/frame-circle.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#introduce .introduce {
  background-color: #f2f2ed;
}
.introduce {
  margin: 0;
  padding: 45px 17px;
}
.introduce h3 {
  margin: 33px;
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
}
.hero-name {
  background-position: top;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
}
.introduce .flex {
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.text-wrap {
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: left;
  letter-spacing: 0.03em;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 350;
  font-size: 11.5px;
  line-height: 18px;
}
.text-wrap.saerom {
  padding-left: 0.8rem;
  text-align: left;
}
.text-wrap.jaeyong {
  padding-right: 1rem;
}
.text-wrap a {
  font-weight: bold;
  color: black;
}
.hero {
  width: 169px;
  height: 169px;
  border-radius: 169px;
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
  width: 169px;
  border-radius: 169px;
}
</style>