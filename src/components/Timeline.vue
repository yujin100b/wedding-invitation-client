<template>
  <div class="timeline section" ref="timeline">
    <div class="timeline-header">
      <img src="../assets/icon_clock.png" />
      <h3>TIME LINE</h3>
    </div>
    <div class="timeline-body">
      <ul class="timeline-list">
        <!-- Item 1 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">2011년 6월 11일</span></span
              >
            </div>
            <div class="desc">
              영등포에서 열린 '6.11 탈핵 행진'에서 촬영을 맡았던 서새롬의
              카메라에 박재용이 포착되다.
            </div>
          </div>
        </li>

        <!-- Item 2 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">2017년 3월 14일 </span></span
              >
            </div>
            <div class="desc">
              뮤추얼 프렌드인 정아람과 '더북소사이어티'에서 만나 함께 '따릉이'를
              타다.
            </div>
          </div>
        </li>

        <!-- Item 3 -->
        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">2017년 4월 6일</span></span
              >
            </div>
            <div class="desc">
              밤 11시경, 종묘 인근에서 따릉이를 타던 중 '미지의 상수 x'에 관해
              논의하다.
            </div>
          </div>
        </li>

        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">2019년 3월</span></span
              >
            </div>
            <div class="desc">한 건물의 1층과 3층에 살기 시작하다.</div>
          </div>
        </li>

        <li>
          <div class="event">
            <div class="flag-wrapper">
              <span class="time-wrapper"
                ><span class="time">2021년 1월 29일</span></span
              >
            </div>
            <div class="desc">서새롬, 박재용에게 프로포즈하다.</div>
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