(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    background-color: rgb(41, 38, 38);\n    font-size: 16px;\n    color: white;\n}\n\nh1,\nh3 {\n    margin-bottom: 10px;\n}\n\n.footer {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.winner svg {\n    width: 40px;\n    height: 20px;\n    margin-top: 5px;\n}\n\n.winner {\n    font-style: italic;\n    display: flex;\n    align-items: center;\n    width: 400px;\n    justify-content: space-between;\n}\n\n.winner-panel {\n    width: 475px;\n    margin: 25px 0 10px 0;\n    border-bottom: 1px solid white;\n}\n\n.none {\n    display: none;\n}\n\n.footer-links {\n    position: absolute;\n    right: 40px;\n}\n\n.car {\n    display: flex;\n    align-items: center;\n}\n\n.car-name {\n    margin-left: 20px;\n}\n\n.car-start,\n.car-stop {\n    margin: 0 5px 20px 5px;\n    border-radius: 2px;\n}\n\n.car-start:hover,\n.car-stop:hover {\n    color:rgb(97, 94, 94);\n}\n\n.car-img {\n    margin-bottom: -10px;\n}\n\n.grey {\n    background-color: gray;\n}\n\n.car-container {\n    border-bottom: 2px dashed white;\n}\n\n.flag {\n    text-align: center;\n    font-size: 30px;\n    position: absolute;\n    right: 14vw;\n}\n\n.rs,\n.git {\n    height: 30px;\n    margin: 5px;\n}\n\n.header,\n.main,\n.footer {\n    margin: 15px;\n}\n\n.main-garage {\n    min-height: 420px;\n}\n\ninput,\nbutton {\n    margin: 5px;\n    padding: 3px;\n    border-radius: 5px;\n    border: none;\n}\n\ninput {\n    outline: none;\n}\n\nbutton {\n    box-shadow: 0 5px 10px 0px rgb(0, 0, 0);\n    cursor: pointer;\n}\n\nbutton:hover {\n    box-shadow: 0 1px 5px 0px rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n}\n\n.garage,\n.winners {\n    background-color:rgba(52, 198, 235, 0.993);\n}\n\n.race,\n.reset,\n.prev,\n.next,\n.win-prev,\n.win-next {\n    background-color:rgba(52, 235, 150, 0.5);\n}\n\n.create,\n.update {\n    position: absolute;\n    left: 250px;\n}\n\n.create,\n.update,\n.generate,\n.select,\n.remove {\n    background-color:rgba(159, 211, 224, 0.7);\n}\n\ninput {\n    background-color: rgb(191, 223, 231);\n}\n\n.set-color {\n    width: 100px;\n    height: 50px;\n    position: absolute;\n    left: 175px;\n    top: 51px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.par {\n    position: absolute;\n    display: none;\n}\n\n.change-color {\n    width: 100px;\n    height: 50px;\n    position: absolute;\n    left: 175px;\n    top: 82px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.input-color,\n.input-color2 {\n    width: 50px;\n    height: 35px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n}\n\n.main-garage {\n    margin: 25px 5px 5px 5px;\n}\n\n@media (min-width: 1150px) {\n    .flag {\n        right: 16vw;\n    }\n}\n\n@media (max-width: 820px) {\n    .car-img svg {\n        height: 35px;\n        margin-left: -20px;\n        margin-bottom: -8px;\n    }\n    \n    .flag {\n        font-size: 20px;\n    }\n}\n\n@media (max-width: 640px) {\n    .flag {\n        right: 13vw;\n        margin-top: 4vw;\n    }\n\n    .car-img svg {\n        height: 30px;\n        margin-left: -30px;\n        margin-bottom: -18px;\n    }\n\n    .main {\n        margin: 15px 5px;\n    }\n    .car-start, .car-stop {\n        margin: 0 5px 30px 5px;\n    }\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},89:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var o=t(379),r=t.n(o),a=t(795),c=t.n(a),i=t(569),s=t.n(i),d=t(565),l=t.n(d),u=t(216),p=t.n(u),m=t(589),g=t.n(m),h=t(28),v={};v.styleTagTransform=g(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),r()(h.Z,v);const f=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var g=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},203:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getWinners=n.driveMode=n.engineStop=n.engineStart=n.deleteCarApi=n.updateCarApi=n.getCar=n.createCarApi=n.getCars=void 0;const{showWinners:r}=t(255);var a,c;!function(e){e.garage="garage",e.engine="engine",e.winners="winners"}(a||(a={})),function(e){e.get="GET",e.post="POST",e.patch="PATCH",e.delete="DELETE",e.put="PUT"}(c||(c={}));const i="http://localhost:3000",s=`${i}/${a.garage}`,d=`${i}/${a.engine}`;n.getCars=()=>o(void 0,void 0,void 0,(function*(){const e=yield fetch(`${i}/garage`),n=yield e.json();console.log(n)})),n.createCarApi=e=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${s}`,{method:`${c.post}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield n.json()})),n.getCar=e=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${s}/${e}`);return yield n.json()})),n.updateCarApi=(e,n)=>o(void 0,void 0,void 0,(function*(){const t=yield fetch(`${s}/${e}`,{method:`${c.put}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return yield t.json()})),n.deleteCarApi=e=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${s}/${e}`,{method:`${c.delete}`});return yield n.json()})),n.engineStart=e=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${d}?id=${e}&status=started`,{method:`${c.patch}`});return yield n.json()})),n.engineStop=e=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${d}?id=${e}&status=stopped`,{method:`${c.patch}`});return yield n.json()})),n.driveMode=e=>o(void 0,void 0,void 0,(function*(){if(200!==(yield fetch(`${d}?id=${e}&status=drive`,{method:`${c.patch}`}).catch()).status)throw new Error("Engine error!");return!0})),n.getWinners=()=>o(void 0,void 0,void 0,(function*(){const e=`${i}/winners`,n=document.querySelector(".winners-count"),t=yield fetch(`${e}`),o=yield t.json();n.innerHTML=`Winners (${o.length})`,o.forEach(((e,n)=>{const t=document.querySelector(`.par-${o[n].id}`).textContent,a=document.querySelector(`.name-${o[n].id}`).innerHTML;r(o[n].id,a,t,o[n].wins,o[n].time)}))}))},752:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getCarsForNext=n.getCarsForHTML=n.stopGo=n.go=void 0,t(89);const{createHTML:r}=t(530),{createColorGenerator:a}=t(530),{addWinner:c}=t(47),{createFooter:i}=t(408),{getWinners:s}=t(203),{renderCar:d}=t(650),{Button:l}=t(407),{Input:u}=t(167),{getRandomColor:p}=t(265),{createCarName:m}=t(265),{getCars:g}=t(203),{getCar:h}=t(203),{createCarApi:v}=t(203),{deleteCarApi:f}=t(203),{engineStart:b}=t(203),{engineStop:y}=t(203),{driveMode:x}=t(203);let L,C;r(),i(),setTimeout((function(){a(),c()}),0);const w=document.querySelector("header"),E=document.querySelector("footer"),M=document.querySelector(".main-create"),T=document.querySelector(".main-update"),S=document.querySelector(".main-generate");new u("input","model",M,"text").createInput(),new u("input","rename",T,"text").createInput(),new l("button","garage",w,"TO GARAGE").createButton(),new l("button","winners",w,"TO WINNERS").createButton(),new l("button","prev",E,"PREV").createButton(),new l("button","next",E,"NEXT").createButton(),new l("button","create",M,"CREATE").createButton(),new l("button","update",T,"UPDATE").createButton(),new l("button","race",S,"RACE").createButton(),new l("button","reset",S,"RESET").createButton(),new l("button","generate",S,"GENERATE CARS").createButton();const $=document.querySelector(".main-garage"),H=document.querySelector(".container"),q=document.querySelector(".cars-count"),_=document.querySelector(".create"),j=document.querySelector(".next"),A=document.querySelector(".prev"),P=document.querySelector(".generate"),B=document.querySelector(".page-number");let N,I=1,O=!1;const k="http://localhost:3000/garage";function F(e,n){const t=document.querySelector(`.img-${C}`);if(!O)return;const o=(performance.now()-e)/n;t.style.transform=`translateX(${77*o}vw)`,o<1&&requestAnimationFrame((()=>F(e,n)))}n.go=e=>o(void 0,void 0,void 0,(function*(){e.classList.add("grey");const n=e.closest(".car-container"),t=null==n?void 0:n.id.slice(2);C=+t,document.getElementById(`stop-${C}`).classList.remove("grey");const{velocity:o,distance:r}=yield b(+t),a=performance.now(),c=r/o;x(+t).then().catch((e=>{O=!1,console.error(e)})),O=!0,requestAnimationFrame((()=>{F(a,c)}))})),n.stopGo=e=>o(void 0,void 0,void 0,(function*(){e.classList.add("grey"),O=!1;const n=e.closest(".car-container"),t=null==n?void 0:n.id.slice(2),o=document.querySelector(".img-"+ +t);yield y(+t),o.style.transform="translateX(0vw)",document.getElementById("start-"+ +t).classList.remove("grey")})),n.getCarsForHTML=(e,n)=>o(void 0,void 0,void 0,(function*(){const t=yield fetch(`${k}?_page=${e}&_limit=${n}`),o=yield t.json(),r=Number(t.headers.get("X-Total-Count"));L=r,q.innerHTML=`Garage (${L})`,o.forEach(((e,n)=>{d(o[n].id,o[n].name,o[n].color)}))})),n.getCarsForNext=(e,n)=>o(void 0,void 0,void 0,(function*(){const t=yield fetch(`${k}?_page=${e}&_limit=${n}`),o=yield t.json();q.innerHTML=`Garage (${L})`,o.forEach(((e,n)=>{d(o[n].id,o[n].name,o[n].color)}))})),$.addEventListener("click",(function(e){const t=e.target;if("remove"===t.className){const e=t.closest(".car-container"),o=null==e?void 0:e.id.slice(2),r=document.getElementById("win-"+ +o);null==r||r.remove(),null==e||e.remove(),L-=1,q.innerHTML=`Garage (${L})`,N=h(+o),f(+o),L%7==0&&(I-=1,H.innerHTML="",B.innerHTML=`Page #${I}`,(0,n.getCarsForNext)(I,7))}})),_.addEventListener("click",(function(){L%7==0&&(H.innerHTML="",I+=1,B.innerHTML=`Page #${I}`,(0,n.getCarsForNext)(I,7));const e=document.querySelector(".model").value,t=document.querySelector(".input-color").value;L+=1,q.innerHTML=`Garage (${L})`,d(L,e,t),v({name:e,color:t,id:L})})),g(),(0,n.getCarsForHTML)(1,7),s(),j.addEventListener("click",(function(){I+=1,H.innerHTML="",q.innerHTML=`Garage (${L})`,B.innerHTML=`Page #${I}`,(0,n.getCarsForHTML)(I,7)})),A.addEventListener("click",(function(){1!==I&&(I-=1,H.innerHTML="",B.innerHTML=`Page #${I}`,(0,n.getCarsForHTML)(I,7))})),P.addEventListener("click",(function(){!function(){for(let e=1;e<=100;e+=1){const e={name:m(),color:p(),id:L+1};v(e),L+=1}H.innerHTML="",B.innerHTML=`Page #${I}`,(0,n.getCarsForNext)(I,7)}()}))},407:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Button=void 0,n.Button=class{constructor(e,n,t,o){this.tag=e,this.class=n,this.par=t,this.text=o}createButton(){const e=document.createElement(this.tag);e.classList.add(this.class),e.textContent=this.text,this.par.appendChild(e)}}},265:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createCarName=n.getRandomColor=void 0,n.getRandomColor=function(){let e="#";for(let n=0;n<6;n+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},n.createCarName=function(){return function(){const e=["Suzuki","Hummer","Reno","Audi","BMW","KIA","Opel","FIAT","Ferrari","Tesla","Jaguar","Skoda"];return e[Math.floor(Math.random()*e.length)]}()+function(){const e=[" Vectra"," Filicia"," K1"," Q3"," I7"," Focus"," Corsa"," 312"," Patrol"," C3"," Roadster"," Semi"];return e[Math.floor(Math.random()*e.length)]}()}},408:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createFooter=void 0,n.createFooter=function(){const e=document.createElement("footer");e.classList.add("footer"),document.body.appendChild(e);const n=document.createElement("div");n.classList.add("footer-links"),e.appendChild(n);const t=document.createElement("a");t.href="https://rs.school/js/",n.appendChild(t);const o=document.createElement("img");o.classList.add("rs"),o.src="https://rollingscopes.com/images/logo_rs_text.svg",o.alt="logo_RSSchool",t.appendChild(o);const r=document.createElement("a");r.href="https://github.com/juliakocur",n.appendChild(r);const a=document.createElement("img");a.classList.add("git"),a.src="https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",a.alt="logo_GITHUB",r.appendChild(a)}},530:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createColorGenerator=n.createHTML=void 0,n.createHTML=function(){const e=document.createElement("header");e.classList.add("header"),document.body.appendChild(e);const n=document.createElement("main");n.classList.add("main"),document.body.appendChild(n);const t=document.createElement("section");t.classList.add("main-creator"),n.appendChild(t);const o=document.createElement("div");o.classList.add("main-create"),t.appendChild(o);const r=document.createElement("div");r.classList.add("main-update"),t.appendChild(r);const a=document.createElement("div");a.classList.add("main-generate"),t.appendChild(a);const c=document.createElement("section");c.classList.add("main-garage"),n.appendChild(c);const i=document.createElement("h1");i.classList.add("cars-count"),c.appendChild(i);const s=document.createElement("h3");s.classList.add("page-number"),c.appendChild(s),s.innerHTML="Page #1";const d=document.createElement("div");d.classList.add("container"),c.appendChild(d);const l=document.createElement("section");l.classList.add("main-winners"),l.classList.add("none"),n.appendChild(l);const u=document.createElement("h1");u.classList.add("winners-count"),l.appendChild(u);const p=document.createElement("h3");p.classList.add("page-number-win"),l.appendChild(p),p.innerHTML="Page #1";const m=document.createElement("div");m.classList.add("winner-panel"),l.appendChild(m),m.innerHTML="Number&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCar&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspName&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWins&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBest&nbsptime(sec)";const g=document.createElement("div");g.classList.add("winner-container"),l.appendChild(g)},n.createColorGenerator=function(){const e=document.querySelector(".main-create"),n=document.querySelector(".main-update"),t=document.createElement("div");t.classList.add("set-color"),e.appendChild(t);const o=document.createElement("div");o.classList.add("colors"),t.appendChild(o);const r=document.createElement("input");r.classList.add("input-color"),r.setAttribute("type","color"),o.appendChild(r);const a=document.createElement("div");a.classList.add("change-color"),n.appendChild(a);const c=document.createElement("div");c.classList.add("colors2"),a.appendChild(c);const i=document.createElement("input");i.classList.add("input-color2"),i.setAttribute("type","color"),c.appendChild(i)}},167:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Input=void 0,n.Input=class{constructor(e,n,t,o){this.tag=e,this.class=n,this.par=t,this.att=o}createInput(){const e=document.createElement(this.tag);e.classList.add(this.class),e.setAttribute("type",this.att),this.par.appendChild(e)}}},342:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});const{go:o}=t(752),{stopGo:r}=t(752),{carImg:a}=t(650),{getCar:c}=t(203),{updateCarApi:i}=t(203),s=document.querySelector(".main-winners"),d=document.querySelector(".main-creator"),l=document.querySelector(".main-garage"),u=document.querySelector("header"),p=document.querySelector("footer");u.addEventListener("click",(function(e){const n=e.target;"garage"===n.className&&(s.classList.add("none"),d.classList.remove("none"),l.classList.remove("none"),p.classList.remove("none")),"winners"===n.className&&(s.classList.remove("none"),d.classList.add("none"),l.classList.add("none"),p.classList.add("none"))}));const m=document.querySelector(".update");let g,h,v=[];l.addEventListener("click",(function(e){const n=e.target;if("select"===n.className){v=[];const e=document.querySelector(".rename");g=n.closest(".car-container");const t=null==g?void 0:g.id.slice(2);v.push(t),console.log(v);const o=document.querySelector(`.name-${t}`).innerHTML;e.value=o;const r=document.querySelector(".input-color2"),a=document.querySelector(`.par-${t}`).textContent;r.value=`${a}`}"car-start"===n.className&&o(n),"car-stop"===n.className&&r(n)})),m.addEventListener("click",(function(){if(null==v||0===v.length)return;const e=v.join(),n=document.querySelector(".rename");document.querySelector(`.name-${e}`).innerHTML=n.value;const t=document.querySelector(".input-color2"),o=document.querySelector(`.img-${e}`),r=t.value;o.innerHTML=a(r),document.querySelector(`.par-${e}`).innerHTML=r,h=c(+e),h.name=n.value,h.color=t.value,t.value="",n.value="",i(+e,h),v=[]}))},47:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addWinner=void 0;const{Button:o}=t(407);n.addWinner=function(){const e=document.querySelector(".main-winners"),n=document.createElement("div");n.classList.add("winner-button"),e.appendChild(n),new o("button","win-prev",n,"PREV").createButton(),new o("button","win-next",n,"NEXT").createButton()}},650:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.renderCar=n.carImg=void 0;const{Button:o}=t(407);n.carImg=e=>`\n <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n   width="100" height="50" viewBox="0 0 1280.000000 640.000000"\n   preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"\n      fill="${e}" stroke="none">\n      <path d="M4235 5299 c-410 -26 -906 -96 -1140 -160 -136 -37 -293 -92 -495\n      -174 -234 -95 -347 -148 -1048 -483 l-272 -131 -438 -56 c-240 -31 -454 -61\n      -474 -66 -88 -23 -148 -157 -183 -409 -16 -117 -35 -427 -35 -595 l-1 -110\n      -32 -20 c-39 -25 -71 -80 -91 -159 -14 -57 -13 -77 9 -296 l24 -235 -30 -43\n      -31 -42 22 -45 c27 -57 125 -148 239 -223 l90 -59 238 -32 c131 -18 443 -62\n      693 -98 250 -36 506 -69 569 -72 l115 -6 12 -50 c7 -27 36 -96 64 -151 197\n      -392 691 -578 1190 -448 270 70 495 240 598 454 l47 97 186 -5 185 -5 33 42\n      33 42 337 -6 c185 -3 838 -10 1451 -15 613 -6 1543 -15 2065 -20 934 -10 952\n      -10 1065 10 63 11 124 22 135 25 17 3 29 -10 65 -73 53 -90 185 -229 279 -292\n      270 -181 643 -244 952 -159 235 64 435 219 545 421 l39 72 135 33 c95 23 254\n      47 540 82 l405 49 216 88 216 87 6 211 c3 126 12 249 22 306 28 157 7 286 -52\n      313 -15 7 -27 24 -33 51 -45 176 -182 437 -288 548 -144 151 -827 325 -1798\n      457 -321 44 -655 82 -929 106 l-179 15 -176 104 c-313 186 -695 393 -1067 579\n      -334 167 -765 368 -843 392 -265 83 -655 134 -1175 155 -288 11 -1831 11\n      -2010 -1z m1300 -191 c3 -13 41 -228 86 -478 51 -288 78 -467 74 -487 -7 -39\n      -44 -70 -93 -79 -20 -4 -257 1 -526 10 -601 20 -1090 38 -1093 40 -5 4 -104\n      888 -100 893 18 17 322 64 572 88 236 22 462 32 792 34 l283 1 5 -22z m942\n      -13 c353 -30 557 -72 834 -170 222 -79 502 -225 714 -373 87 -61 242 -179 249\n      -190 2 -4 -24 -7 -58 -8 -202 -2 -305 -242 -157 -367 l33 -27 -32 0 c-30 0\n      -182 6 -1205 50 -274 12 -475 24 -498 31 -44 15 -112 70 -131 108 -12 23 -228\n      629 -317 890 l-29 84 213 -7 c116 -4 289 -14 384 -21z m-2673 -142 c3 -21 26\n      -209 51 -418 25 -209 46 -389 48 -400 2 -18 -3 -20 -68 -17 -38 1 -216 7 -395\n      12 -179 6 -348 15 -377 21 -93 18 -163 86 -203 196 -55 153 17 248 305 404\n      162 88 381 175 575 228 55 15 58 13 64 -26z m-3343 -833 c114 -78 161 -144\n      194 -270 20 -78 30 -273 21 -401 l-8 -97 -219 -7 c-121 -4 -222 -5 -224 -3 -3\n      2 0 95 5 207 15 324 50 492 117 570 19 23 39 41 44 41 6 0 37 -18 70 -40z\n      m3349 -375 c18 -21 16 -64 -4 -83 -15 -15 -46 -17 -251 -17 -256 0 -267 2\n      -267 59 0 55 4 56 267 56 204 0 245 -2 255 -15z m2894 -71 c20 -19 20 -54 2\n      -80 -13 -18 -30 -19 -233 -22 -134 -2 -229 1 -246 7 -40 15 -54 53 -33 86 l16\n      25 240 0 c204 0 241 -2 254 -16z m5607 -340 c32 -31 76 -80 98 -108 41 -53\n      131 -204 131 -220 0 -9 -876 -3 -886 6 -7 8 132 292 152 309 39 33 69 41 212\n      54 244 21 225 23 293 -41z m-1734 -507 c115 -39 201 -93 285 -177 61 -63 86\n      -97 122 -172 61 -125 79 -213 73 -348 -6 -118 -28 -197 -84 -300 -156 -288\n      -504 -426 -818 -326 -109 35 -196 88 -279 172 -83 82 -136 168 -173 279 -23\n      70 -27 96 -27 210 0 114 4 140 27 210 78 237 273 415 512 469 102 23 268 15\n      362 -17z m-7473 -77 c232 -59 416 -233 493 -465 23 -69 27 -98 27 -205 1 -104\n      -3 -137 -22 -200 -72 -231 -248 -403 -487 -476 -92 -28 -276 -25 -375 5 -300\n      92 -501 361 -500 673 0 107 24 201 76 308 142 286 478 440 788 360z"/>\n    </g>\n  </svg>\n`,n.renderCar=function(e,t,r){const a=document.querySelector(".container"),c=document.createElement("div");c.classList.add("car-container"),c.id=`c-${e}`,a.appendChild(c),new o("button","select",c,"SELECT").createButton(),new o("button","remove",c,"REMOVE").createButton();const i=document.createElement("span");i.classList.add("car-name"),i.classList.add(`name-${e}`),c.appendChild(i),i.innerHTML=t;const s=document.createElement("div");s.classList.add("car"),s.id=`car-${e}`,c.appendChild(s);const d=document.createElement("button");d.classList.add("car-start"),d.id=`start-${e}`,s.appendChild(d),d.innerHTML="A";const l=document.createElement("button");l.classList.add("car-stop"),l.id=`stop-${e}`,s.appendChild(l),l.innerHTML="B",l.classList.add("grey");const u=document.createElement("div");u.classList.add("car-img"),u.classList.add(`img-${e}`),u.innerHTML=(0,n.carImg)(r),s.appendChild(u);const p=document.createElement("p");p.classList.add("par"),p.classList.add(`par-${e}`),p.innerHTML=r,c.appendChild(p);const m=document.createElement("span");m.classList.add("flag"),m.innerHTML="🚩",s.appendChild(m)}},255:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.showWinners=void 0;const{carImg:o}=t(650);n.showWinners=function(e,n,t,r,a){const c=document.querySelector(".winner-container"),i=document.createElement("div");i.classList.add("winner"),i.id=`win-${e}`,c.appendChild(i);const s=document.createElement("div");s.innerHTML=`${e}`;const d=document.createElement("div");d.innerHTML=o(t);const l=document.createElement("div");l.innerHTML=`${n}`;const u=document.createElement("div");u.innerHTML=`${r}`;const p=document.createElement("div");p.innerHTML=`${a}`,i.appendChild(s),i.appendChild(d),i.appendChild(l),i.appendChild(u),i.appendChild(p)}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(89),t(752),t(342)})();