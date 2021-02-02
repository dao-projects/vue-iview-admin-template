<template>
  <div class="cubes">
    <!--   row, column, z -->
    <div class="cube" data-cube="111">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-z" data-cube="112"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="121">
      <div class="cube-wrap">
        <div class="cube-top"></div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="131">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-z" data-cube="132"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="211">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="111"></div>
          <div class="shadow-y" data-cube="111"></div>
          <div class="shadow-z" data-cube="212"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="221">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="121"></div>
          <div class="shadow-y" data-cube="121"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="231">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="131"></div>
          <div class="shadow-y" data-cube="131"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="311">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="211"></div>
          <div class="shadow-y" data-cube="211"></div>
          <div class="shadow-z" data-cube="312"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="321">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="221"></div>
          <div class="shadow-y" data-cube="221"></div>
          <div class="shadow-z" data-cube="322"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="331">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="231"></div>
          <div class="shadow-y" data-cube="231"></div>
          <div class="shadow-z" data-cube="332"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>

    <!-- top layer -->
    <div class="cube" data-cube="112">
      <div class="cube-wrap">
        <div class="cube-top"></div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="122">
      <div class="cube-wrap">
        <div class="cube-top"></div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="132">
      <div class="cube-wrap">
        <div class="cube-top"></div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="212">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="112"></div>
          <div class="shadow-y" data-cube="112"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="222">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="122"></div>
          <div class="shadow-y" data-cube="122"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="232">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="132"></div>
          <div class="shadow-y" data-cube="132"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="312">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="212"></div>
          <div class="shadow-y" data-cube="212"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="322">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="222"></div>
          <div class="shadow-y" data-cube="222"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="332">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="232"></div>
          <div class="shadow-y" data-cube="232"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>

    <!-- bottom layer -->
    <div class="cube" data-cube="113">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-z" data-cube="111"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="123">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-z" data-cube="121"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="133">
      <div class="cube-wrap">
        <div class="cube-top"></div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="213">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="113"></div>
          <div class="shadow-y" data-cube="113"></div>
          <div class="shadow-z" data-cube="211"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="223">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-y" data-cube="123"></div>
          <div class="shadow-z" data-cube="221"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="233">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-y" data-cube="133"></div>
          <div class="shadow-z" data-cube="231"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="313">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="213"></div>
          <div class="shadow-y" data-cube="213"></div>
          <div class="shadow-z" data-cube="311"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="323">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="223"></div>
          <div class="shadow-y" data-cube="223"></div>
          <div class="shadow-z" data-cube="321"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="cube" data-cube="333">
      <div class="cube-wrap">
        <div class="cube-top">
          <div class="shadow-flip" data-cube="233"></div>
          <div class="shadow-y" data-cube="233"></div>
          <div class="shadow-z" data-cube="331"></div>
        </div>
        <div class="cube-bottom"></div>
        <div class="cube-front-left"></div>
        <div class="cube-front-right"></div>
        <div class="cube-back-left"></div>
        <div class="cube-back-right"></div>
      </div>
    </div>
    <div class="large-shadows">
      <div class="large-shadow" data-cube="113"></div>
      <div class="large-shadow" data-cube="123"></div>
      <div class="large-shadow" data-cube="133"></div>
      <div class="large-shadow" data-cube="213"></div>
      <div class="large-shadow" data-cube="223"></div>
      <div class="large-shadow" data-cube="233"></div>
      <div class="large-shadow" data-cube="313"></div>
      <div class="large-shadow" data-cube="323"></div>
      <div class="large-shadow" data-cube="333"></div>
    </div>
  </div>
</template>
<style scoped>
/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  list-style-type: none;*/
/*}*/
/*html,*/
/*body {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  overflow: hidden;*/
/*}*/

/**,*/
/**:before,*/
/**:after {*/
/*  box-sizing: border-box;*/
/*  position: relative;*/
/*  -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;*/
/*  animation-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;*/
/*}*/

/*body {*/
/*  display: -webkit-box;*/
/*  display: flex;*/
/*  -webkit-box-pack: center;*/
/*  justify-content: center;*/
/*  -webkit-box-align: center;*/
/*  align-items: center;*/
/*  -webkit-transform-style: preserve-3d;*/
/*  transform-style: preserve-3d;*/
/*  -webkit-perspective: 1000px;*/
/*  perspective: 1000px;*/
/*  -webkit-perspective: 600px;*/
/*  perspective: 600px;*/
/*  background: -webkit-gradient(linear, left top, right bottom, from(#a4c5c7), to(#2d3f48));*/
/*  background: linear-gradient(to bottom right, #a4c5c7, #2d3f48);*/
/*  background: -webkit-gradient(linear, left top, right bottom, from(#eec5c7), to(#443f48));*/
/*  background: linear-gradient(to bottom right, #aac5c7, #bb3f48);*/
/*  background: #c6ffdd;*/
/*  background: -webkit-linear-gradient(to top, #f7797d, #fbd786, #c6ffdd);*/
/*  background: linear-gradient(to top left, #f7797d, #fbd786, #c6ffdd);*/
/*  background: #f12711;*/
/*  background: -webkit-linear-gradient(to bottom right, #f5af19, #f12711);*/
/*  background: linear-gradient(to bottom right, #f5af19, #f12711);*/
/*}*/

/*body:hover > label,*/
/*body:hover > input {*/
/*  opacity: 1;*/
/*}*/

label,
#shadows {
  position: fixed;
  top: 2vmin;
  opacity: 0.5;
}

label {
  left: 6vmin;
  color: white;
  font-weight: bold;
}

#shadows {
  left: 2vmin;
}

#shadows:not(:checked) ~ .cubes {
  --shadow-filter: none;
}

.cubes {
  /*width: 64px;*/
  /*height: 64px;*/
  /*-webkit-transform: rotateX(60deg) rotateZ(-45deg);*/
  /*transform: rotateX(60deg) rotateZ(-45deg);*/
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  overflow: visible;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 9000px;
  perspective: 9000px;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  position: absolute;
  bottom: 40%;
}

.cube,
.large-shadow {
  height: 10vmin;
  width: 10vmin;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-transform-origin: center center -0.5vmin;
  transform-origin: center center -0.5vmin;
  position: absolute;
  top: 0;
  left: 0;
}
.cube > .cube-wrap,
.large-shadow > .cube-wrap {
  -webkit-animation: cube 4s infinite both;
  animation: cube 4s infinite both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-transform-origin: center center -0.5vmin;
  transform-origin: center center -0.5vmin;
  will-change: transform;
}
@-webkit-keyframes cube {
  from,
  to,
  20%,
  60% {
    -webkit-animation-timing-function: step-start;
    animation-timing-function: step-start;
    -webkit-transform: none;
    transform: none;
  }
  40% {
    -webkit-transform: rotateY(-1turn);
    transform: rotateY(-1turn);
  }
}
@keyframes cube {
  from,
  to,
  20%,
  60% {
    -webkit-animation-timing-function: step-start;
    animation-timing-function: step-start;
    -webkit-transform: none;
    transform: none;
  }
  40% {
    -webkit-transform: rotateY(-1turn);
    transform: rotateY(-1turn);
  }
}
.cube[data-cube^="1"],
.large-shadow[data-cube^="1"] {
  top: calc(-10vmin - 2px);
  --color-bg-top: #a0ebe8;
  --color-bg-top: #60eb00;
  --color-bg-bottom: #89e4e4;
  --color-bg-bottom: #39e400;
  --color-fl-top: #4eafbc;
  --color-fl-top: #8eaf00;
  --color-fl-bottom: #4eafbc;
  --color-fl-bottom: #8eaf00;
}
.cube[data-cube^="2"],
.large-shadow[data-cube^="2"] {
  --color-bg-top: #89e4e4;
  --color-bg-top: #d900e4;
  --color-bg-bottom: #76dee5;
  --color-bg-bottom: #9600e5;
  --color-fl-top: #43a5b2;
  --color-fl-top: #9300b2;
  --color-fl-bottom: #3d93a9;
  --color-fl-bottom: #3d00a9;
}
.cube[data-cube^="3"],
.large-shadow[data-cube^="3"] {
  top: calc(10vmin + 2px);
  --color-bg-top: #76dee5;
  --color-bg-top: #00dee5;
  --color-bg-bottom: #63d3d4;
  --color-bg-bottom: #00d3d4;
  --color-fl-top: #3d93a9;
  --color-fl-top: #0093a9;
  --color-fl-bottom: #3b8d9f;
  --color-fl-bottom: #008d9f;
}
.cube[data-cube^="11"],
.cube[data-cube^="21"],
.cube[data-cube^="31"],
.large-shadow[data-cube^="11"],
.large-shadow[data-cube^="21"],
.large-shadow[data-cube^="31"] {
  left: calc(-10vmin - 2px);
  --color-fr-top: #2d505f;
  --color-fr-top: #ad5000;
  --color-fr-bottom: #2d4f63;
  --color-fr-bottom: #4d1f00;
}
.cube[data-cube^="12"],
.cube[data-cube^="22"],
.cube[data-cube^="32"],
.large-shadow[data-cube^="12"],
.large-shadow[data-cube^="22"],
.large-shadow[data-cube^="32"] {
  --color-fr-top: #2d4f63;
  --color-fr-top: #6d0063;
  --color-fr-bottom: #2a5262;
  --color-fr-bottom: #2a0062;
}
.cube[data-cube^="13"],
.cube[data-cube^="23"],
.cube[data-cube^="33"],
.large-shadow[data-cube^="13"],
.large-shadow[data-cube^="23"],
.large-shadow[data-cube^="33"] {
  left: calc(10vmin + 2px);
  --color-fr-top: #2a5262;
  --color-fr-top: #0052b2;
  --color-fr-bottom: #2a5467;
  --color-fr-bottom: #002442;
}
.cube[data-cube$="2"],
.large-shadow[data-cube$="2"] {
  -webkit-transform: translateZ(calc(10vmin + 2px));
  transform: translateZ(calc(10vmin + 2px));
}
.cube[data-cube$="3"],
.large-shadow[data-cube$="3"] {
  -webkit-transform: translateZ(calc(-10vmin - 2px));
  transform: translateZ(calc(-10vmin - 2px));
}

.large-shadows {
  -webkit-transform: translateZ(-21vmin);
  transform: translateZ(-21vmin);
}

.large-shadow {
  background: black;
  height: 10vmin;
  width: 10vmin;
  -webkit-transform-origin: top right;
  transform-origin: top right;
  -webkit-animation: large-shadow 4s infinite both;
  animation: large-shadow 4s infinite both;
  -webkit-filter: var(--shadow-filter, blur(3vmin));
  filter: var(--shadow-filter, blur(3vmin));
  opacity: 0.2;
  will-change: transform;
}
@-webkit-keyframes large-shadow {
  from,
  80%,
  to {
    -webkit-transform: scale(1.5, 3);
    transform: scale(1.5, 3);
  }
  20% {
    -webkit-transform: scale(1.5, 2);
    transform: scale(1.5, 2);
  }
  40%,
  60% {
    -webkit-transform: scale(1.5, 5);
    transform: scale(1.5, 5);
  }
  50% {
    -webkit-transform: scale(1, 5);
    transform: scale(1, 5);
  }
}
@keyframes large-shadow {
  from,
  80%,
  to {
    -webkit-transform: scale(1.5, 3);
    transform: scale(1.5, 3);
  }
  20% {
    -webkit-transform: scale(1.5, 2);
    transform: scale(1.5, 2);
  }
  40%,
  60% {
    -webkit-transform: scale(1.5, 5);
    transform: scale(1.5, 5);
  }
  50% {
    -webkit-transform: scale(1, 5);
    transform: scale(1, 5);
  }
}
[class^="cube-"] {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  top: 0;
  left: 0;
}
[class^="cube-"],
[class^="cube-"]:before {
  will-change: transform;
  -webkit-animation: any 4s infinite both;
  animation: any 4s infinite both;
}
[class^="cube-"]:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
}

.cube-top {
  -webkit-animation-name: cube-top;
  animation-name: cube-top;
  overflow: hidden;
}
.cube-top:before,
.cube-top:after {
  will-change: transform;
}
.cube-top:before {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#cbfeff), to(transparent)),
    -webkit-gradient(linear, left top, left bottom, from(var(--color-bg-top)), to(var(--color-bg-bottom)));
  background-image: linear-gradient(to bottom, #cbfeff, transparent),
    linear-gradient(to bottom, var(--color-bg-top), var(--color-bg-bottom));
  background-size: 2px 100%, auto;
  background-repeat: no-repeat;
}
.cube-top:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dff4f0;
  -webkit-animation: cube-top-flash 4s infinite both;
  animation: cube-top-flash 4s infinite both;
}
@-webkit-keyframes cube-top-flash {
  from,
  50%,
  60%,
  to {
    opacity: 0;
  }
  52% {
    opacity: 0.9;
  }
}
@keyframes cube-top-flash {
  from,
  50%,
  60%,
  to {
    opacity: 0;
  }
  52% {
    opacity: 0.9;
  }
}
@-webkit-keyframes cube-top {
  20% {
    -webkit-transform: translateZ(calc(-10vmin + 2vmin));
    transform: translateZ(calc(-10vmin + 2vmin));
  }
  40%,
  60%,
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes cube-top {
  20% {
    -webkit-transform: translateZ(calc(-10vmin + 2vmin));
    transform: translateZ(calc(-10vmin + 2vmin));
  }
  40%,
  60%,
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
.cube-front-left {
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  overflow: hidden;
}
.cube-front-left:before {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(var(--color-fl-top)),
      to(var(--color-fl-bottom))
    ),
    -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.5)), color-stop(60%, transparent));
  background-image: linear-gradient(to bottom, var(--color-fl-top), var(--color-fl-bottom)),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 60%);
  background-size: auto auto 1px 100%;
  background-repeat: no-repeat;
  -webkit-transform-origin: right;
  transform-origin: right;
  -webkit-animation-name: cube-front-left;
  animation-name: cube-front-left;
  will-change: transform;
}
@-webkit-keyframes cube-front-left {
  20% {
    -webkit-transform: scaleX(0.2);
    transform: scaleX(0.2);
  }
  40%,
  60% {
    -webkit-transform: translateX(-8vmin) scaleX(0.2);
    transform: translateX(-8vmin) scaleX(0.2);
  }
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes cube-front-left {
  20% {
    -webkit-transform: scaleX(0.2);
    transform: scaleX(0.2);
  }
  40%,
  60% {
    -webkit-transform: translateX(-8vmin) scaleX(0.2);
    transform: translateX(-8vmin) scaleX(0.2);
  }
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
.cube-front-right {
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
}
.cube-front-right:before {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(var(--color-fr-top)),
    to(var(--color-fr-bottom))
  );
  background-image: linear-gradient(to right, var(--color-fr-top), var(--color-fr-bottom));
  -webkit-transform-origin: top;
  transform-origin: top;
  -webkit-animation-name: cube-front-right;
  animation-name: cube-front-right;
  will-change: transform;
}
@-webkit-keyframes cube-front-right {
  20% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  40%,
  60% {
    -webkit-transform: translateY(8vmin) scaleY(0.2);
    transform: translateY(8vmin) scaleY(0.2);
  }
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes cube-front-right {
  20% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  40%,
  60% {
    -webkit-transform: translateY(8vmin) scaleY(0.2);
    transform: translateY(8vmin) scaleY(0.2);
  }
  80% {
    -webkit-transform: none;
    transform: none;
  }
}
.cube-bottom {
  -webkit-transform: translateZ(-10vmin);
  transform: translateZ(-10vmin);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--color-bg-top)),
    to(var(--color-bg-bottom))
  );
  background-image: linear-gradient(to bottom, var(--color-bg-top), var(--color-bg-bottom));
  -webkit-animation-name: cube-bottom;
  animation-name: cube-bottom;
}
@-webkit-keyframes cube-bottom {
  from,
  20%,
  80%,
  to {
    -webkit-transform: translateZ(calc(-10vmin + 1px)) scale(0.95);
    transform: translateZ(calc(-10vmin + 1px)) scale(0.95);
  }
  40%,
  60% {
    -webkit-transform: translateZ(-2vmin) scale(0.95);
    transform: translateZ(-2vmin) scale(0.95);
  }
}
@keyframes cube-bottom {
  from,
  20%,
  80%,
  to {
    -webkit-transform: translateZ(calc(-10vmin + 1px)) scale(0.95);
    transform: translateZ(calc(-10vmin + 1px)) scale(0.95);
  }
  40%,
  60% {
    -webkit-transform: translateZ(-2vmin) scale(0.95);
    transform: translateZ(-2vmin) scale(0.95);
  }
}
.cube-bottom:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dff4f0;
  background-color: darkblue;
  -webkit-animation: cube-bottom-flash 4s infinite both;
  animation: cube-bottom-flash 4s infinite both;
  will-change: transform;
}
@-webkit-keyframes cube-bottom-flash {
  from,
  40%,
  50%,
  to {
    opacity: 0;
  }
  45% {
    opacity: 0.3;
  }
}
@keyframes cube-bottom-flash {
  from,
  40%,
  50%,
  to {
    opacity: 0;
  }
  45% {
    opacity: 0.3;
  }
}
[class^="shadow"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-filter: var(--shadow-filter, blur(10px));
  filter: var(--shadow-filter, blur(10px));
}
[class^="shadow"],
[class^="shadow"]:before {
  will-change: transform;
}
[class^="shadow"]:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #214354;
  opacity: 0.7;
}

.shadow-y {
  -webkit-animation: shadow-y 4s infinite both;
  animation: shadow-y 4s infinite both;
}
.shadow-y[data-cube^="11"],
.shadow-y[data-cube^="21"] {
  left: 10%;
}
.shadow-y[data-cube^="13"],
.shadow-y[data-cube^="23"] {
  left: -10%;
}
@-webkit-keyframes shadow-y {
  to,
  40%,
  60%,
  80%,
  from {
    -webkit-transform: translateY(-100%) scale(2, 0.75);
    transform: translateY(-100%) scale(2, 0.75);
  }
  20% {
    -webkit-transform: scale(2, 1);
    transform: scale(2, 1);
  }
}
@keyframes shadow-y {
  to,
  40%,
  60%,
  80%,
  from {
    -webkit-transform: translateY(-100%) scale(2, 0.75);
    transform: translateY(-100%) scale(2, 0.75);
  }
  20% {
    -webkit-transform: scale(2, 1);
    transform: scale(2, 1);
  }
}
.shadow-y:before {
  -webkit-animation: shadow-y-inverse 4s infinite both;
  animation: shadow-y-inverse 4s infinite both;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}
@-webkit-keyframes shadow-y-inverse {
  to,
  40%,
  60%,
  80%,
  from {
    opacity: 0.9;
    -webkit-transform: scale(2, 1);
    transform: scale(2, 1);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateY(-100%) scale(2, 0.75);
    transform: translateY(-100%) scale(2, 0.75);
  }
}
@keyframes shadow-y-inverse {
  to,
  40%,
  60%,
  80%,
  from {
    opacity: 0.9;
    -webkit-transform: scale(2, 1);
    transform: scale(2, 1);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateY(-100%) scale(2, 0.75);
    transform: translateY(-100%) scale(2, 0.75);
  }
}
.shadow-flip {
  width: 2vmin;
  height: 50%;
  top: -1vmin;
  left: calc(50% - 1vmin);
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-filter: var(--shadow-filter, blur(1vmin));
  filter: var(--shadow-filter, blur(1vmin));
  -webkit-animation: shadow-flip 4s infinite both;
  animation: shadow-flip 4s infinite both;
  overflow: visible;
}
@-webkit-keyframes shadow-flip {
  from,
  20%,
  40%,
  50%,
  to {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  45% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes shadow-flip {
  from,
  20%,
  40%,
  50%,
  to {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  45% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
.shadow-flip:before {
  -webkit-animation: shadow-flip-inverse 4s infinite both;
  animation: shadow-flip-inverse 4s infinite both;
  -webkit-transform-origin: top center;
  transform-origin: top center;
  opacity: 0;
}
@-webkit-keyframes shadow-flip-inverse {
  from,
  20%,
  40%,
  50%,
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0;
  }
  45% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0.6;
  }
}
@keyframes shadow-flip-inverse {
  from,
  20%,
  40%,
  50%,
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0;
  }
  45% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0.6;
  }
}
.shadow-z {
  -webkit-animation: shadow-z 4s infinite both;
  animation: shadow-z 4s infinite both;
  overflow: visible;
  will-change: transform;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}
.shadow-z[data-cube^="11"] {
  --shadow-z-left: 50%;
  --shadow-z-top: 50%;
}
.shadow-z[data-cube^="21"],
.shadow-z[data-cube^="31"] {
  --shadow-z-left: 50%;
  --shadow-z-top: 0;
}
.shadow-z[data-cube^="32"] {
  --shadow-z-left: 0;
  --shadow-z-top: 0;
  --shadow-x-scale: 2;
}
.shadow-z[data-cube^="33"] {
  --shadow-z-left: -50%;
  --shadow-z-top: 0;
}
@-webkit-keyframes shadow-z {
  from,
  40%,
  60%,
  80%,
  to {
    -webkit-transform: scale(var(--shadow-x-scale), 2);
    transform: scale(var(--shadow-x-scale), 2);
  }
  20% {
    -webkit-transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(calc(var(--shadow-x-scale, 1) / 2), 2);
    transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(calc(var(--shadow-x-scale, 1) / 2), 2);
  }
}
@keyframes shadow-z {
  from,
  40%,
  60%,
  80%,
  to {
    -webkit-transform: scale(var(--shadow-x-scale), 2);
    transform: scale(var(--shadow-x-scale), 2);
  }
  20% {
    -webkit-transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(calc(var(--shadow-x-scale, 1) / 2), 2);
    transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(calc(var(--shadow-x-scale, 1) / 2), 2);
  }
}
.shadow-z:before {
  -webkit-animation: shadow-z-inverse 4s infinite both;
  animation: shadow-z-inverse 4s infinite both;
}
@-webkit-keyframes shadow-z-inverse {
  40%,
  60% {
    -webkit-transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(var(--shadow-x-scale, 1), 2);
    transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top)) scale(var(--shadow-x-scale, 1), 2);
  }
  45% {
    opacity: 0;
  }
  from,
  40%,
  55% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
  from,
  20%,
  80%,
  to {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}
@keyframes shadow-z-inverse {
  40%,
  60% {
    -webkit-transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top))
      scale(var(--shadow-x-scale, 1), 2);
    transform: translateX(var(--shadow-z-left)) translateY(var(--shadow-z-top)) scale(var(--shadow-x-scale, 1), 2);
  }
  45% {
    opacity: 0;
  }
  from,
  40%,
  55% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
  from,
  20%,
  80%,
  to {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}
.cube[data-cube="111"] > .cube-wrap,
.cube[data-cube="111"] > .cube-wrap:before,
.cube[data-cube="111"] > .cube-wrap:after,
.cube[data-cube="111"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="111"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="111"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 88ms;
  animation-delay: 88ms;
}
.cube[data-cube="111"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 88ms;
  animation-delay: 88ms;
}

[class^="shadow-"][data-cube="111"]:before,
.large-shadow[data-cube="111"] {
  -webkit-animation-delay: 88ms;
  animation-delay: 88ms;
}

.cube[data-cube="112"] > .cube-wrap,
.cube[data-cube="112"] > .cube-wrap:before,
.cube[data-cube="112"] > .cube-wrap:after,
.cube[data-cube="112"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="112"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="112"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 143ms;
  animation-delay: 143ms;
}
.cube[data-cube="112"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 143ms;
  animation-delay: 143ms;
}

[class^="shadow-"][data-cube="112"]:before,
.large-shadow[data-cube="112"] {
  -webkit-animation-delay: 143ms;
  animation-delay: 143ms;
}

.cube[data-cube="113"] > .cube-wrap,
.cube[data-cube="113"] > .cube-wrap:before,
.cube[data-cube="113"] > .cube-wrap:after,
.cube[data-cube="113"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="113"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="113"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 230ms;
  animation-delay: 230ms;
}
.cube[data-cube="113"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 230ms;
  animation-delay: 230ms;
}

[class^="shadow-"][data-cube="113"]:before,
.large-shadow[data-cube="113"] {
  -webkit-animation-delay: 230ms;
  animation-delay: 230ms;
}

.cube[data-cube="121"] > .cube-wrap,
.cube[data-cube="121"] > .cube-wrap:before,
.cube[data-cube="121"] > .cube-wrap:after,
.cube[data-cube="121"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="121"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="121"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 201ms;
  animation-delay: 201ms;
}
.cube[data-cube="121"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 201ms;
  animation-delay: 201ms;
}

[class^="shadow-"][data-cube="121"]:before,
.large-shadow[data-cube="121"] {
  -webkit-animation-delay: 201ms;
  animation-delay: 201ms;
}

.cube[data-cube="122"] > .cube-wrap,
.cube[data-cube="122"] > .cube-wrap:before,
.cube[data-cube="122"] > .cube-wrap:after,
.cube[data-cube="122"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="122"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="122"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 220ms;
  animation-delay: 220ms;
}
.cube[data-cube="122"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 220ms;
  animation-delay: 220ms;
}

[class^="shadow-"][data-cube="122"]:before,
.large-shadow[data-cube="122"] {
  -webkit-animation-delay: 220ms;
  animation-delay: 220ms;
}

.cube[data-cube="123"] > .cube-wrap,
.cube[data-cube="123"] > .cube-wrap:before,
.cube[data-cube="123"] > .cube-wrap:after,
.cube[data-cube="123"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="123"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="123"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 208ms;
  animation-delay: 208ms;
}
.cube[data-cube="123"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 208ms;
  animation-delay: 208ms;
}

[class^="shadow-"][data-cube="123"]:before,
.large-shadow[data-cube="123"] {
  -webkit-animation-delay: 208ms;
  animation-delay: 208ms;
}

.cube[data-cube="131"] > .cube-wrap,
.cube[data-cube="131"] > .cube-wrap:before,
.cube[data-cube="131"] > .cube-wrap:after,
.cube[data-cube="131"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="131"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="131"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 215ms;
  animation-delay: 215ms;
}
.cube[data-cube="131"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 215ms;
  animation-delay: 215ms;
}

[class^="shadow-"][data-cube="131"]:before,
.large-shadow[data-cube="131"] {
  -webkit-animation-delay: 215ms;
  animation-delay: 215ms;
}

.cube[data-cube="132"] > .cube-wrap,
.cube[data-cube="132"] > .cube-wrap:before,
.cube[data-cube="132"] > .cube-wrap:after,
.cube[data-cube="132"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="132"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="132"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 126ms;
  animation-delay: 126ms;
}
.cube[data-cube="132"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 126ms;
  animation-delay: 126ms;
}

[class^="shadow-"][data-cube="132"]:before,
.large-shadow[data-cube="132"] {
  -webkit-animation-delay: 126ms;
  animation-delay: 126ms;
}

.cube[data-cube="133"] > .cube-wrap,
.cube[data-cube="133"] > .cube-wrap:before,
.cube[data-cube="133"] > .cube-wrap:after,
.cube[data-cube="133"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="133"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="133"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 234ms;
  animation-delay: 234ms;
}
.cube[data-cube="133"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 234ms;
  animation-delay: 234ms;
}

[class^="shadow-"][data-cube="133"]:before,
.large-shadow[data-cube="133"] {
  -webkit-animation-delay: 234ms;
  animation-delay: 234ms;
}

.cube[data-cube="211"] > .cube-wrap,
.cube[data-cube="211"] > .cube-wrap:before,
.cube[data-cube="211"] > .cube-wrap:after,
.cube[data-cube="211"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="211"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="211"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 142ms;
  animation-delay: 142ms;
}
.cube[data-cube="211"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 142ms;
  animation-delay: 142ms;
}

[class^="shadow-"][data-cube="211"]:before,
.large-shadow[data-cube="211"] {
  -webkit-animation-delay: 142ms;
  animation-delay: 142ms;
}

.cube[data-cube="212"] > .cube-wrap,
.cube[data-cube="212"] > .cube-wrap:before,
.cube[data-cube="212"] > .cube-wrap:after,
.cube[data-cube="212"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="212"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="212"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 78ms;
  animation-delay: 78ms;
}
.cube[data-cube="212"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 78ms;
  animation-delay: 78ms;
}

[class^="shadow-"][data-cube="212"]:before,
.large-shadow[data-cube="212"] {
  -webkit-animation-delay: 78ms;
  animation-delay: 78ms;
}

.cube[data-cube="213"] > .cube-wrap,
.cube[data-cube="213"] > .cube-wrap:before,
.cube[data-cube="213"] > .cube-wrap:after,
.cube[data-cube="213"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="213"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="213"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 158ms;
  animation-delay: 158ms;
}
.cube[data-cube="213"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 158ms;
  animation-delay: 158ms;
}

[class^="shadow-"][data-cube="213"]:before,
.large-shadow[data-cube="213"] {
  -webkit-animation-delay: 158ms;
  animation-delay: 158ms;
}

.cube[data-cube="221"] > .cube-wrap,
.cube[data-cube="221"] > .cube-wrap:before,
.cube[data-cube="221"] > .cube-wrap:after,
.cube[data-cube="221"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="221"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="221"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}
.cube[data-cube="221"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}

[class^="shadow-"][data-cube="221"]:before,
.large-shadow[data-cube="221"] {
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}

.cube[data-cube="222"] > .cube-wrap,
.cube[data-cube="222"] > .cube-wrap:before,
.cube[data-cube="222"] > .cube-wrap:after,
.cube[data-cube="222"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="222"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="222"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 167ms;
  animation-delay: 167ms;
}
.cube[data-cube="222"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 167ms;
  animation-delay: 167ms;
}

[class^="shadow-"][data-cube="222"]:before,
.large-shadow[data-cube="222"] {
  -webkit-animation-delay: 167ms;
  animation-delay: 167ms;
}

.cube[data-cube="223"] > .cube-wrap,
.cube[data-cube="223"] > .cube-wrap:before,
.cube[data-cube="223"] > .cube-wrap:after,
.cube[data-cube="223"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="223"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="223"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}
.cube[data-cube="223"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}

[class^="shadow-"][data-cube="223"]:before,
.large-shadow[data-cube="223"] {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}

.cube[data-cube="231"] > .cube-wrap,
.cube[data-cube="231"] > .cube-wrap:before,
.cube[data-cube="231"] > .cube-wrap:after,
.cube[data-cube="231"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="231"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="231"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 179ms;
  animation-delay: 179ms;
}
.cube[data-cube="231"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 179ms;
  animation-delay: 179ms;
}

[class^="shadow-"][data-cube="231"]:before,
.large-shadow[data-cube="231"] {
  -webkit-animation-delay: 179ms;
  animation-delay: 179ms;
}

.cube[data-cube="232"] > .cube-wrap,
.cube[data-cube="232"] > .cube-wrap:before,
.cube[data-cube="232"] > .cube-wrap:after,
.cube[data-cube="232"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="232"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="232"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 297ms;
  animation-delay: 297ms;
}
.cube[data-cube="232"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 297ms;
  animation-delay: 297ms;
}

[class^="shadow-"][data-cube="232"]:before,
.large-shadow[data-cube="232"] {
  -webkit-animation-delay: 297ms;
  animation-delay: 297ms;
}

.cube[data-cube="233"] > .cube-wrap,
.cube[data-cube="233"] > .cube-wrap:before,
.cube[data-cube="233"] > .cube-wrap:after,
.cube[data-cube="233"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="233"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="233"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 96ms;
  animation-delay: 96ms;
}
.cube[data-cube="233"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 96ms;
  animation-delay: 96ms;
}

[class^="shadow-"][data-cube="233"]:before,
.large-shadow[data-cube="233"] {
  -webkit-animation-delay: 96ms;
  animation-delay: 96ms;
}

.cube[data-cube="311"] > .cube-wrap,
.cube[data-cube="311"] > .cube-wrap:before,
.cube[data-cube="311"] > .cube-wrap:after,
.cube[data-cube="311"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="311"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="311"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 281ms;
  animation-delay: 281ms;
}
.cube[data-cube="311"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 281ms;
  animation-delay: 281ms;
}

[class^="shadow-"][data-cube="311"]:before,
.large-shadow[data-cube="311"] {
  -webkit-animation-delay: 281ms;
  animation-delay: 281ms;
}

.cube[data-cube="312"] > .cube-wrap,
.cube[data-cube="312"] > .cube-wrap:before,
.cube[data-cube="312"] > .cube-wrap:after,
.cube[data-cube="312"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="312"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="312"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}
.cube[data-cube="312"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}

[class^="shadow-"][data-cube="312"]:before,
.large-shadow[data-cube="312"] {
  -webkit-animation-delay: 61ms;
  animation-delay: 61ms;
}

.cube[data-cube="313"] > .cube-wrap,
.cube[data-cube="313"] > .cube-wrap:before,
.cube[data-cube="313"] > .cube-wrap:after,
.cube[data-cube="313"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="313"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="313"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 193ms;
  animation-delay: 193ms;
}
.cube[data-cube="313"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 193ms;
  animation-delay: 193ms;
}

[class^="shadow-"][data-cube="313"]:before,
.large-shadow[data-cube="313"] {
  -webkit-animation-delay: 193ms;
  animation-delay: 193ms;
}

.cube[data-cube="321"] > .cube-wrap,
.cube[data-cube="321"] > .cube-wrap:before,
.cube[data-cube="321"] > .cube-wrap:after,
.cube[data-cube="321"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="321"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="321"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 206ms;
  animation-delay: 206ms;
}
.cube[data-cube="321"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 206ms;
  animation-delay: 206ms;
}

[class^="shadow-"][data-cube="321"]:before,
.large-shadow[data-cube="321"] {
  -webkit-animation-delay: 206ms;
  animation-delay: 206ms;
}

.cube[data-cube="322"] > .cube-wrap,
.cube[data-cube="322"] > .cube-wrap:before,
.cube[data-cube="322"] > .cube-wrap:after,
.cube[data-cube="322"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="322"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="322"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
}
.cube[data-cube="322"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
}

[class^="shadow-"][data-cube="322"]:before,
.large-shadow[data-cube="322"] {
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
}

.cube[data-cube="323"] > .cube-wrap,
.cube[data-cube="323"] > .cube-wrap:before,
.cube[data-cube="323"] > .cube-wrap:after,
.cube[data-cube="323"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="323"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="323"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 288ms;
  animation-delay: 288ms;
}
.cube[data-cube="323"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 288ms;
  animation-delay: 288ms;
}

[class^="shadow-"][data-cube="323"]:before,
.large-shadow[data-cube="323"] {
  -webkit-animation-delay: 288ms;
  animation-delay: 288ms;
}

.cube[data-cube="331"] > .cube-wrap,
.cube[data-cube="331"] > .cube-wrap:before,
.cube[data-cube="331"] > .cube-wrap:after,
.cube[data-cube="331"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="331"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="331"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 184ms;
  animation-delay: 184ms;
}
.cube[data-cube="331"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 184ms;
  animation-delay: 184ms;
}

[class^="shadow-"][data-cube="331"]:before,
.large-shadow[data-cube="331"] {
  -webkit-animation-delay: 184ms;
  animation-delay: 184ms;
}

.cube[data-cube="332"] > .cube-wrap,
.cube[data-cube="332"] > .cube-wrap:before,
.cube[data-cube="332"] > .cube-wrap:after,
.cube[data-cube="332"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="332"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="332"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 95ms;
  animation-delay: 95ms;
}
.cube[data-cube="332"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 95ms;
  animation-delay: 95ms;
}

[class^="shadow-"][data-cube="332"]:before,
.large-shadow[data-cube="332"] {
  -webkit-animation-delay: 95ms;
  animation-delay: 95ms;
}

.cube[data-cube="333"] > .cube-wrap,
.cube[data-cube="333"] > .cube-wrap:before,
.cube[data-cube="333"] > .cube-wrap:after,
.cube[data-cube="333"] > .cube-wrap > [class^="cube-"],
.cube[data-cube="333"] > .cube-wrap > [class^="cube-"]:before,
.cube[data-cube="333"] > .cube-wrap > [class^="cube-"]:after {
  -webkit-animation-delay: 211ms;
  animation-delay: 211ms;
}
.cube[data-cube="333"] > .cube-wrap [class^="shadow-"] {
  -webkit-animation-delay: 211ms;
  animation-delay: 211ms;
}

[class^="shadow-"][data-cube="333"]:before,
.large-shadow[data-cube="333"] {
  -webkit-animation-delay: 211ms;
  animation-delay: 211ms;
}
</style>
