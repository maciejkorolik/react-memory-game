(window["webpackJsonpmemory-game"]=window["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/01.58fe533c.png"},function(n,e,t){n.exports=t.p+"static/media/02.e50aa4b4.png"},function(n,e,t){n.exports=t.p+"static/media/03.25dc39b2.png"},function(n,e,t){n.exports=t.p+"static/media/04.250257ee.png"},function(n,e,t){n.exports=t.p+"static/media/05.e6d21f86.png"},function(n,e,t){n.exports=t.p+"static/media/06.a647bf6d.png"},,,,,,,function(n,e,t){n.exports=t.p+"static/media/Welcome.3b0759d4.png"},function(n,e,t){n.exports=t.p+"static/media/Finish.804e827a.png"},function(n,e,t){n.exports=t.p+"static/media/07.65fe91d4.png"},function(n,e,t){n.exports=t.p+"static/media/08.61528c3b.png"},function(n,e,t){n.exports=t.p+"static/media/09.00cdf2cf.png"},,,function(n,e,t){n.exports=t(39)},,,,,,,,,,,,function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),a=t(16),o=t.n(a),c=t(3),d=t(17);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(t,!0).forEach((function(e){Object(d.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l=function(n,e){switch(e.type){case"SET_GAME_STATE":return u({},n,{gameState:e.payload});case"SET_USER":return u({},n,{user:e.payload});case"SET_LEVEL":return u({},n,{level:e.payload});case"SET_SCORE":return u({},n,{score:e.payload});case"CLEAR_STATE":return m;default:return}},m={gameState:"welcome",user:"",level:"easy",score:0},s=r.a.createContext(m),h=function(n){var e=n.children,t=Object(i.useReducer)(l,m),a=Object(c.a)(t,2),o=a[0],d=a[1];return r.a.createElement(s.Provider,{value:{state:o,dispatch:d}},e)},x=t(1),f=t(2);t(32);function g(){var n=Object(f.a)(['\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: "McLaren", sans-serif;\n  }\n']);return g=function(){return n},n}var b=Object(x.b)(g()),w={white:"#FFFFFF",color1:"#2568EF",color2:"#FF564F",color3:"#FF9B19",darkgray:"#324A58",lightgray:"#aaa",fontSize:{xxs:"1.2rem",xs:"1.8rem",s:"2.5rem",m:"2.8rem",l:"3.5rem",xl:"5rem",xxl:"6rem"}},v=t(20),y=t.n(v);function j(){var n=Object(f.a)(['\n  width: 250px;\n  margin: 0;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  font-family: "McLaren", sans-serif;\n  line-height: 1.5;\n  font-size: 2.5rem;\n  color: ',";\n  border-bottom: 3px solid ",";\n  padding: 7px 0;\n  &:focus {\n    outline: none;\n  }\n  &:invalid {\n    border-bottom: 3px solid ",";\n    color: ",";\n  }\n  &::placeholder {\n    color: ",";\n  }\n\n  @media (min-width: 500px) {\n    width: 300px;\n    font-size: 2.8rem;\n    height: 55px;\n  }\n  @media (min-width: 700px) {\n    width: 300px;\n    font-size: 3.2rem;\n    height: 60px;\n  }\n"]);return j=function(){return n},n}var E=x.d.input(j(),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.color2}),(function(n){return n.theme.color2}),(function(n){return n.theme.lightgray}));function O(){var n=Object(f.a)(['\n  width: auto;\n  min-width: 220px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "McLaren", sans-serif;\n  line-height: 1;\n  font-size: 2.5rem;\n  color: ',";\n  background-color: ",";\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  @media (min-width: 500px) {\n    min-width: 240px;\n    height: 65px;\n  }\n  @media (min-width: 700px) {\n    min-width: 260px;\n    height: 70px;\n    font-size: 3rem;\n  }\n"]);return O=function(){return n},n}var z=x.d.button(O(),(function(n){return n.theme.white}),(function(n){return n.theme.color2}));function S(){var n=Object(f.a)(["\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  z-index: 1;\n  height: 50px;\n  width: 100px;\n  border-radius: 30px;\n  background-color: ",";\n  transition: transform 0.2s ease-out;\n  transform: ",";\n  @media (min-width: 500px) {\n    height: 55px;\n    width: 105px;\n    transform: ",";\n  }\n  @media (min-width: 700px) {\n    height: 60px;\n    width: 110px;\n    transform: ",";\n  }\n  }\n"]);return S=function(){return n},n}function k(){var n=Object(f.a)(["\n  width: 50%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",';\n  font-family: "McLaren", sans-serif;\n  line-height: 1;\n  font-size: 2.5rem;\n  z-index: 2;\n  user-select: none;\n  @media (min-width: 500px) {\n    height: 55px;\n  }\n  @media (min-width: 700px) {\n    height: 60px;\n    font-size: 3rem;\n  }\n']);return k=function(){return n},n}function C(){var n=Object(f.a)(["\n  position: relative;\n  height: 50px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 40px;\n  background-color: ",";\n  border: 3px solid ",";\n  cursor: pointer;\n  @media (min-width: 500px) {\n    height: 55px;\n    width: 210px;\n  }\n  @media (min-width: 700px) {\n    height: 60px;\n    width: 220px;\n  }\n"]);return C=function(){return n},n}var T=function(){var n=Object(i.useContext)(s),e=n.state,t=n.dispatch;return r.a.createElement(F,{onClick:function(){var n="easy"===e.level?"hard":"easy";t({type:"SET_LEVEL",payload:n})}},r.a.createElement(L,{level:e.level}),r.a.createElement(_,null,"easy"),r.a.createElement(_,null,"hard"))},F=x.d.div(C(),(function(n){return n.theme.color1}),(function(n){return n.theme.color3})),_=x.d.div(k(),(function(n){return n.theme.white})),L=x.d.div(S(),(function(n){return n.theme.color3}),(function(n){return"easy"===n.level?"translateX(0)":"translateX(100px)"}),(function(n){return"easy"===n.level?"translateX(0)":"translateX(105px)"}),(function(n){return"easy"===n.level?"translateX(0)":"translateX(110px)"}));function A(){var n=Object(f.a)(["\n  object-fit: contain;\n  height: 150px;\n  @media (min-width: 500px) and (orientation: portrait) {\n    height: 300px;\n  }\n  @media (min-width: 700px) {\n    height: 400px;\n  }\n  @media (min-width: 960px) {\n    height: 600px;\n  }\n"]);return A=function(){return n},n}function M(){var n=Object(f.a)(['\n  font-family: "McLaren", sans-serif;\n  line-height: 1;\n  font-size: 3rem;\n  color: ',";\n  margin-bottom: 10px;\n  @media (min-width: 700px) {\n    font-size: 3.5rem;\n  }\n  @media (min-width: 960px) {\n    font-size: 5rem;\n  }\n  @media (min-width: 1200px) {\n    font-size: 6rem;\n  }\n  @media (min-width: 1440px) {\n    font-size: 7rem;\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(f.a)(["\n  height: 60vh;\n  min-height: 350px;\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 30px 0;\n  align-items: center;\n  @media (min-width: 960px) {\n    align-items: flex-start;\n    height: 100%;\n    max-height: 100%;\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(f.a)(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  max-height: 900px;\n  @media (min-width: 960px) {\n    flex-direction: row;\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  min-height: 568px;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  @media (min-width: 500px) {\n    padding: 25px;\n  }\n  @media (min-width: 700px) {\n    padding: 30px;\n  }\n  @media (min-width: 960px) {\n    padding: 40px;\n  }\n  @media (min-width: 1200px) {\n    padding: 50px;\n  }\n"]);return X=function(){return n},n}var Y=function(){var n=Object(i.useState)(""),e=Object(c.a)(n,2),t=e[0],a=e[1],o=Object(i.useContext)(s).dispatch;return r.a.createElement(D,null,r.a.createElement(G,null,r.a.createElement(U,null,r.a.createElement(B,null,"memory card game"),r.a.createElement(E,{type:"text",placeholder:"Your name",maxlength:"15",value:t,onChange:function(n){n.target.value.length<16?a(n.target.value):alert("please use a shorter name")}}),r.a.createElement(T,null),r.a.createElement(z,{onClick:function(){/\S/.test(t)?(o({type:"SET_USER",payload:t}),o({type:"SET_GAME_STATE",payload:"play"})):alert("please fill your name")}},"play!")),r.a.createElement(H,{src:y.a,alt:"welcome image"})))},D=x.d.div(X(),(function(n){return n.theme.color1})),G=x.d.div(R()),U=x.d.div(P()),B=x.d.h1(M(),(function(n){return n.theme.white})),H=x.d.img(A());function J(){var n=Object(f.a)(["\n      display: none;\n      @media (min-width: 800px) {\n        display: block;\n      }\n    "]);return J=function(){return n},n}function V(){var n=Object(f.a)(["\n      font-size: 2rem;\n      padding: 15px 0;\n      @media (min-width: 500px) {\n        font-size: 2.2rem;\n      }\n      @media (min-width: 700px) {\n        font-size: 2.5rem;\n      }\n      @media (min-width: 1200px) {\n        padding: 20px 0;\n      }\n      @media (min-width: 1440px) {\n        padding: 30px 0;\n      }\n    "]);return V=function(){return n},n}function I(){var n=Object(f.a)(['\n  font-family: "McLaren", sans-serif;\n  margin: 0;\n  line-height: 1;\n  font-size: 2.5rem;\n  color: ',";\n  @media (min-width: 500px) {\n    font-size: 2.8rem;\n  }\n  @media (min-width: 700px) {\n    font-size: 3rem;\n  }\n  @media (min-width: 960px) {\n    font-size: 3.2rem;\n  }\n  @media (min-width: 1200px) {\n    font-size: 3.5rem;\n  }\n  ","\n  ","\n"]);return I=function(){return n},n}var W=x.d.h2(I(),(function(n){return n.theme.color1}),(function(n){return n.small&&Object(x.c)(V())}),(function(n){return n.mobileHidden&&Object(x.c)(J())})),q=t(21),K=t.n(q);function N(){var n=Object(f.a)(["\n  height: 100%;\n  max-height: 200px;\n  object-fit: contain;\n  @media (min-width: 500px) {\n    max-height: 250px;\n  }\n  @media (min-width: 700px) {\n    max-height: 350px;\n  }\n  @media (min-width: 960px) {\n    max-height: 400px;\n  }\n  @media (min-width: 1400px) {\n    max-height: 500px;\n  }\n"]);return N=function(){return n},n}function Q(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  @media (min-width: 500px) {\n    padding: 15px 25px;\n  }\n  @media (min-width: 700px) {\n    padding: 20px 30px;\n  }\n  @media (min-width: 960px) {\n    padding: 25px 40px;\n  }\n  @media (min-width: 1200px) {\n    padding: 30px 50px;\n  }\n"]);return Q=function(){return n},n}var Z=function(){var n=Object(i.useContext)(s),e=n.state,t=n.dispatch;return r.a.createElement($,null,r.a.createElement(nn,{src:K.a}),r.a.createElement(W,null,"Congratulations ",e.user,"!"),r.a.createElement(W,{small:!0},"Your score: ",e.score," moves"),r.a.createElement(z,{onClick:function(){t({type:"CLEAR_STATE"})}},"play again!"))},$=x.d.div(Q(),(function(n){return n.theme.white})),nn=x.d.img(N()),en=t(4);function tn(){var n=Object(f.a)(["\n      background-color: ",";\n      transform: ",";\n    "]);return tn=function(){return n},n}function rn(){var n=Object(f.a)(["\n      background-color: ",";\n      border: 2px solid ",";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transform: ",";\n      img {\n        height: 80%;\n        object-fit: contain;\n      }\n    "]);return rn=function(){return n},n}function an(){var n=Object(f.a)(["\n  position: absolute;\n  cursor: ",";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  transition: transform 0.6s cubic-bezier(0.21, 1.39, 0.49, 1.1),\n    background-color 0.6s ease;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  box-shadow: 0px 1px 8px rgba(37, 104, 239, 0.4);\n  ","\n  ",";\n"]);return an=function(){return n},n}function on(){var n=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n"]);return on=function(){return n},n}var cn=function(n){var e=n.icon,t=n.id,i=n.flippedCards,a=n.hiddenCards,o=n.handleClick,c=!i.includes(t)&&!a.includes(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(dn,{onClick:c?function(){return o(e,t)}:null},r.a.createElement(pn,{front:!0,flipped:i.includes(t)},r.a.createElement("img",{src:e,alt:"icon"})),r.a.createElement(pn,{back:!0,won:a.includes(e),flipped:i.includes(t)})))},dn=x.d.div(on()),pn=x.d.div(an(),(function(n){return n.flipped?"default":"pointer"}),(function(n){return n.front&&Object(x.c)(rn(),(function(n){return n.theme.white}),(function(n){return n.theme.color1}),(function(n){return n.flipped?"rotateY(0deg)":"rotateY(180deg)"}))}),(function(n){return n.back&&Object(x.c)(tn(),(function(n){var e=n.theme;return n.won?e.white:e.color1}),(function(n){return n.flipped?"rotateY(180deg)":"rotateY(0deg)"}))}));function un(){var n=Object(f.a)(["\n  display: grid;\n  /* grid-template-columns: ","; */\n  grid-template-columns: repeat(3, 90px);\n  grid-auto-rows: 90px;\n  grid-gap: 10px;\n  @media (min-width: 400px) {\n   grid-template-columns: repeat(3, 100px);\n  grid-auto-rows: 100px;\n  grid-gap: 15px;\n  }\n  @media (min-width: 500px) {\n    grid-template-columns: repeat(3, 120px);\n  grid-auto-rows: 120px;\n  grid-gap: 20px;\n  }\n  @media (min-width: 700px) {\n    grid-template-columns: repeat(4, 130px);\n  grid-auto-rows: 130px;\n  grid-gap: 20px;\n  }\n  @media (min-width: 960px) {\n    grid-template-columns: ",";\n  grid-auto-rows: 140px;\n  grid-gap: 20px;\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: ",";\n  grid-auto-rows: 145px;\n  grid-gap: 25px;\n  }\n   @media (min-width: 1440px) {\n    grid-template-columns: ",";\n  grid-auto-rows: 170px;\n  grid-gap: 40px;\n  }\n"]);return un=function(){return n},n}var ln=x.d.div(un(),(function(n){return"hard"===n.level?"repeat(6, 170px)":"repeat(4, 170px)"}),(function(n){return"hard"===n.level?"repeat(6, 140px)":"repeat(4, 140px)"}),(function(n){return"hard"===n.level?"repeat(6, 145px)":"repeat(4, 145px)"}),(function(n){return"hard"===n.level?"repeat(6, 170px)":"repeat(4, 170px)"})),mn=t(8),sn=t.n(mn),hn=t(9),xn=t.n(hn),fn=t(10),gn=t.n(fn),bn=t(11),wn=t.n(bn),vn=t(12),yn=t.n(vn),jn=t(13),En=t.n(jn),On=t(22),zn=t.n(On),Sn=t(23),kn=t.n(Sn),Cn=t(24),Tn=t.n(Cn),Fn=t(14),_n=t.n(Fn),Ln=[sn.a,xn.a,gn.a,wn.a,yn.a,En.a,zn.a,kn.a,Tn.a],An=[sn.a,xn.a,gn.a,wn.a,yn.a,En.a],Mn=Ln.reduce((function(n,e){return n.concat([e,e])}),[]),Pn=An.reduce((function(n,e){return n.concat([e,e])}),[]),Rn=_n()(Pn),Xn=_n()(Mn);function Yn(){var n=Object(f.a)(["\n  width: 100%;\n  height: 80px;\n  background-color: ",";\n  border-radius: 20px;\n  box-shadow: 0px 1px 8px rgba(37, 104, 239, 0.4);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  @media (min-width: 500px) {\n    height: 90px;\n    padding: 20px 30px;\n  }\n  @media (min-width: 700px) {\n    height: 100px;\n    padding: 25px 40px;\n  }\n  @media (min-width: 1440px) {\n    height: 140px;\n    padding: 30px 80px;\n  }\n"]);return Yn=function(){return n},n}function Dn(){var n=Object(f.a)(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Dn=function(){return n},n}function Gn(){var n=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n  @media (min-width: 500px) {\n    padding: 15px 25px;\n  }\n  @media (min-width: 700px) {\n    padding: 20px 30px;\n  }\n  @media (min-width: 1200px) {\n    padding: 20px 50px;\n  }\n  @media (min-width: 1440px) {\n    padding: 30px 50px;\n  }\n"]);return Gn=function(){return n},n}var Un=function(){var n=Object(i.useState)([]),e=Object(c.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)([]),d=Object(c.a)(o,2),p=d[0],u=d[1],l=Object(i.useState)([]),m=Object(c.a)(l,2),h=m[0],x=m[1],f=Object(i.useState)(0),g=Object(c.a)(f,2),b=g[0],w=g[1],v=Object(i.useContext)(s),y=v.state,j=v.dispatch,E="hard"===y.level?Xn:Rn,O=function(n,e){if(t.length<2){var i=[].concat(Object(en.a)(t),[e]);a(i);var r=[].concat(Object(en.a)(p),[n]);u(r),2===r.length&&z(r)}},z=function(n){w(b+1);var e=[];setTimeout((function(){n[0]===n[1]&&(e=[].concat(Object(en.a)(h),Object(en.a)(n)),x(e)),a([]),u([]),e.length===E.length&&(j({type:"SET_SCORE",payload:b+1}),j({type:"SET_GAME_STATE",payload:"finished"}))}),1e3)};return r.a.createElement(Bn,null,r.a.createElement(Hn,null,r.a.createElement(Jn,null,r.a.createElement(W,{small:!0},"Level: ",y.level),r.a.createElement(W,{mobileHidden:!0},"memory card game"),r.a.createElement(W,{small:!0},"User: ",y.user)),r.a.createElement(W,{small:!0},"Moves: ",b),r.a.createElement(ln,{level:y.level},E.map((function(n,e){return r.a.createElement(cn,{key:e,id:e,icon:n,flippedCards:t,hiddenCards:h,handleClick:O})})))))},Bn=x.d.div(Gn(),(function(n){return n.theme.white})),Hn=x.d.div(Dn()),Jn=x.d.header(Yn(),(function(n){return n.theme.white})),Vn=function(){var n=Object(i.useContext)(s).state;switch(console.log(n),n.gameState){case"play":return r.a.createElement(Un,null);case"finished":return r.a.createElement(Z,null);default:return r.a.createElement(Y,null)}},In=function(){return r.a.createElement(h,null,r.a.createElement(b,null),r.a.createElement(x.a,{theme:w},r.a.createElement(Vn,null)))};o.a.render(r.a.createElement(In,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.a5ac9514.chunk.js.map