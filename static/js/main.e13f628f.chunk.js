(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{26:function(n,t,e){"use strict";e.r(t);var i,o,c,r,s,u=e(0),a=e.n(u),f=e(6),d=e.n(f),l=e(7),h=e(8),b=e(1),m=e(5),p=e.n(m),j=function(){function n(){Object(l.a)(this,n),this.endTime=p()().add(2,"hours"),this.timeLeft=p()(this.endTime).diff(p()()),Object(b.m)(this,{timeLeft:b.n,tick:b.f}),this.tick()}return Object(h.a)(n,[{key:"tick",value:function(){var n=this;this.timeLeft=this.timeLeft<=100?0:p()(this.endTime).diff(p()()),this.timeLeft>0&&requestAnimationFrame((function(){return setTimeout((function(){return n.tick()}),10)}))}},{key:"microseconds",get:function(){var n=this.timeLeft%1e3;return n<10?"00".concat(n):n<100?"0".concat(n):n}},{key:"seconds",get:function(){return Math.floor(this.timeLeft/1e3)}},{key:"secondsLeft",get:function(){return this.seconds%60}},{key:"minutes",get:function(){return(this.seconds-this.secondsLeft)/60}},{key:"minutesLeft",get:function(){return this.minutes%60}},{key:"hours",get:function(){return(this.minutes-this.minutesLeft)/60}}]),n}(),x=function(){function n(){Object(l.a)(this,n),this.appModel=new j,Object(b.m)(this,{})}return Object(h.a)(n,[{key:"microseconds",get:function(){return this.appModel.microseconds}},{key:"seconds",get:function(){return this.appModel.secondsLeft>10?this.appModel.secondsLeft:"0".concat(this.appModel.secondsLeft)}},{key:"minutes",get:function(){return this.appModel.minutesLeft>10?this.appModel.minutesLeft:"0".concat(this.appModel.minutesLeft)}},{key:"hours",get:function(){return this.appModel.hours>10?this.appModel.hours:"0".concat(this.appModel.hours)}}]),n}(),O=a.a.createContext(null),g=e(3),k=e(4),y=Object(k.a)(i||(i=Object(g.a)(["\n  body {\n    margin: 0;\n    overflow: hidden;\n  }\n\n  @font-face {\n    font-family: 'Alarm Clock';\n    src: url('./fonts/alarm-clock.woff2') format('woff2'), \n      url('./fonts/alarm-clock.woff') format('woff')\n  }\n\n  @keyframes lines {\n    0% { \n      opacity: 0;\n    }\n    50%  {\n      opacity: .7;\n    }\n    99% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),w=e(16),L=k.b.div(o||(o=Object(g.a)(["\n  font-family: 'Alarm Clock';\n  font-size: 14vw;\n  margin: 0 10px;\n  background-color: #da0000;\n  color: transparent;\n  text-shadow: 4px 4px 3px #ffffff80, 4px 4px 0 #ff000080;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n"]))),v=e(2),M=k.b.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: #000000;\n"]))),A=Object(w.a)((function(){var n=Object(u.useContext)(O);return Object(v.jsxs)(M,{children:[Object(v.jsx)(L,{children:n.hours}),Object(v.jsx)(L,{children:":"}),Object(v.jsx)(L,{children:n.minutes}),Object(v.jsx)(L,{children:":"}),Object(v.jsx)(L,{children:n.seconds}),Object(v.jsx)(L,{children:"."}),Object(v.jsx)(L,{children:n.microseconds})]})})),C=e(17),T=k.b.div(r||(r=Object(g.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 1px;\n  background: blue;\n  transform: rotate(1deg);\n  mix-blend-mode: screen;\n  -webkit-filter: blur(1px);\n  -moz-filter: blur(1px);\n  filter: blur(1px);\n  &:after,\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    mix-blend-mode: screen;\n  }\n  &:after {\n    top: 2px;\n    background: red;\n  }\n  &:before {\n    top: -2px;\n    background: limegreen;\n  }\n"]))),z=Object(k.b)(T)(s||(s=Object(g.a)(["\n  top: ","px;\n  animation: lines ","s infinite;\n"])),(function(n){return n.top}),(function(n){return n.time})),F=function(){var n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=Object(u.useState)(Math.floor(n/10)),e=Object(C.a)(t,2),i=e[0];e[1];return Object(v.jsx)(v.Fragment,{children:Array(i).fill(null).map((function(n,t){return Object(v.jsx)(z,{top:10*t,time:5*Math.random()},t)}))})},H=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(A,{})]})},E=function(){var n=new x;return Object(v.jsxs)(O.Provider,{value:n,children:[Object(v.jsx)(y,{}),Object(v.jsx)(H,{})]})};d.a.render(Object(v.jsx)(E,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e13f628f.chunk.js.map