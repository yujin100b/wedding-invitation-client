<template>
  <div class="timeline section" ref="timeline">
    <div class="timeline-header">
      <img src="../assets/icon_clock.png" />
      <h3>TIMELINE</h3>
    </div>
    <div class="timeline-body">
      <ul class="timeline-list">
        <!-- Item 1 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">June 11, 2011</span></span
              >
            </div>
            <div class="desc">
              Jaeyong is caught on Saerom's camera during the June 11
              Anti-nuclear March. The two didn't know each other then.
            </div>
          </div>
        </li>

        <!-- Item 2 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">March 14, 2017</span></span
              >
            </div>
            <div class="desc">
              Saerom & Jaeyong shared a public bicycle ride (Ttareungyi) with
              their mutual friend, JEONG Aram after meeting at a bookshop The
              Book Society.
            </div>
          </div>
        </li>

        <!-- Item 3 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">April 6, 2017</span></span
              >
            </div>
            <div class="desc">
              Around 11 p.m., the two discussed 'an unknown invariable X' near
              Jongmyo, a royal shrine with a public park.
            </div>
          </div>
        </li>

        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">March 2019</span></span
              >
            </div>
            <div class="desc">
              Saerom & Jaeyong started to live in the same building, on the
              first and third floors.
            </div>
          </div>
        </li>

        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">January 29, 2021</span></span
              >
            </div>
            <div class="desc">Saerom proposed to Jaeyong.</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style >
.timeline {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding: 45px 17px;
  background-color: #f2f2ed;
}
.timeline .timeline-header {
  position: relative;
}
.timeline-header img {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

.timeline-header h3 {
  margin: 0;
  background: url(../assets/whiteline.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.timeline-body {
  padding-top: 3rem;
}
ul.timeline-list {
  padding: 0;
  margin: 0 auto;
}
.timeline-list li:first-child {
  max-width: 382px;
  height: 122px;
  background-image: url(../assets/timeline1.png);
}
.timeline-list li {
  list-style: none;
  position: relative;
  max-width: 382px;
  height: 108px;
  margin: -14px auto;
  background-size: contain;
  background-repeat: no-repeat;
}

.timeline-list li:nth-child(2) {
  background-image: url(../assets/timeline2.png);
  max-width: 382px;
  height: 113px;
}
.timeline-list li:nth-child(3) {
  background-image: url(../assets/timeline3.png);
  max-width: 382px;
  height: 112px;
}
.timeline-list li:nth-child(4) {
  background-image: url(../assets/timeline4.png);
  max-width: 382px;
  height: 93px;
}
.timeline-list li:nth-child(5) {
  background-image: url(../assets/timeline5.png);
  max-width: 382px;
  height: 93px;
}
.timeline-list li:first-child .event {
  position: absolute;
  top: 24px;
  left: 28%;
}
.timeline-list li .event {
  width: 240px;
  text-align: left;
  position: absolute;
  top: 15px;
  left: 28%;
  font-size: 0.8rem;
}
.timeline-list li .event .time {
  font-weight: bold;
}
</style>