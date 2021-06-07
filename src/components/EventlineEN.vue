<template>
  <div id="eventline" ref="eventline">
    <div class="eventline-header">
      <h3>EVENT TIMELINE</h3>
    </div>
    <div class="eventline-body">
      <div class="eventline">
        <img src="../assets/event1.png" />
        <p>
          <span>Flea Market <span class="timing">11 a.m.~</span> </span>
          If you know Saerom & Jaeyong, you know they have a sense of taste.
          Come visit the flea market to get items from around the world they
          used to keep as singles. Share greetings and take photos with the
          couple!
        </p>
      </div>
      <div class="eventline">
        <img src="../assets/event2.png" />
        <p>
          <span
            >Marriage Announcement
            <span class="timing"
              >1 p.m.
              <span style="font-size: 12px; font-weight: 500"
                >[GMT 4 a.m. / PDT 9 p.m. / EDT 0 a.m.]</span
              ></span
            ></span
          >
          Congratulate and cheer Saerom & Jaeyong for their fresh start of the
          second chapter. There will be songs, dances, and an auction of a
          special wedding dress from the UK.
        </p>
      </div>
      <div class="eventline">
        <img src="../assets/event3.png" />
        <p>
          <span>After Party <span class="timing">2 p.m.~</span></span>
          Party like it's 2021. There will be a standup comedy gig (Saerom &
          Jaeyong will also perform).
        </p>
      </div>
      <span class="ice-cream"
        >* Ice cream and coffee: A special 'taste of life' ice cream will be
        served. There will also be coffee.</span
      >
      <button class="map" @click="goTomap">오시는 길 >></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTomap() {
      window.open("http://kko.to/nvygjskDB");
    },
  },
};
</script>

<style>
#eventline {
  padding-top: 45px;
  padding-bottom: 75px;
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
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 29px;
}

#eventline .eventline-body > p {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
}

#eventline .eventline {
  display: flex;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
}
#eventline .eventline img {
  height: 92px;
}
#eventline .eventline p {
  padding-left: 12px;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
}

#eventline .eventline p > span {
  display: block;
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 15px;
}

#eventline .eventline span.ice-cream {
  font-weight: normal;
  display: block;
  padding:10px 0;
  
}

#eventline .eventline p span.timing {
  font-size: 13px;
  line-height: 17px;
  color: #6cab6e;
  font-weight: 900;
}
.map {
  cursor: pointer;
  float: right;
  border: none;
  background: url(../assets/curlyline-yy.png);
  background-size: 138px;
  background-repeat: no-repeat;
  background-position: center;
  font-weight: bolder;
  font-size: 15px;
  line-height: 50px;
}
</style>
