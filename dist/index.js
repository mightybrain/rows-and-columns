(()=>{"use strict";var t={912:(t,e,i)=>{i.d(e,{Z:()=>_});var s=i(537),n=i.n(s),a=i(645),o=i.n(a),r=i(667),h=i.n(r),l=new URL(i(225),i.b),c=o()(n()),d=h()(l);c.push([t.id,"@font-face{font-family:'Nunito';src:url("+d+") format('woff2');font-weight:900;font-style:#000}body{position:fixed;top:0;left:0;display:flex;justify-content:center;width:100%;height:100%;margin:0;padding:0;overflow:hidden;background-color:#1d3753}","",{version:3,sources:["webpack://./src/assets/styles/index.styl"],names:[],mappings:"AAAA,WACE,oBAAY,CACZ,2DAAqC,CACrC,eAAY,CACZ,eAAW,CAEb,KACE,cAAS,CACT,KAAI,CACJ,MAAK,CACL,YAAQ,CACR,sBAAgB,CAChB,UAAM,CACN,WAAO,CACP,QAAO,CACP,SAAQ,CACR,eAAS,CACT,wBAAiB",sourcesContent:["@font-face\r\n  font-family 'Nunito'\r\n  src url('../fonts/Nunito-Black.woff2') format('woff2')\r\n  font-weight 900\r\n  font-style black\r\n\r\nbody\r\n  position fixed\r\n  top 0\r\n  left 0\r\n  display flex\r\n  justify-content center\r\n  width 100%\r\n  height 100%\r\n  margin 0\r\n  padding 0\r\n  overflow hidden\r\n  background-color #1D3753\r\n\t\t\t"],sourceRoot:""}]);const _=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,s,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var r=0;r<this.length;r++){var h=this[r][0];null!=h&&(o[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);s&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},537:t=>{t.exports=function(t){var e=t[1],i=t[3];if(!i)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),a="/*# ".concat(n," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function i(t){for(var i=-1,s=0;s<e.length;s++)if(e[s].identifier===t){i=s;break}return i}function s(t,s){for(var a={},o=[],r=0;r<t.length;r++){var h=t[r],l=s.base?h[0]+s.base:h[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var _=i(d),g={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==_)e[_].references++,e[_].updater(g);else{var u=n(g,s);s.byIndex=r,e.splice(r,0,{identifier:d,updater:u,references:1})}o.push(d)}return o}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var a=s(t=t||[],n=n||{});return function(t){t=t||[];for(var o=0;o<a.length;o++){var r=i(a[o]);e[r].references--}for(var h=s(t,n),l=0;l<a.length;l++){var c=i(a[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=h}}},569:t=>{var e={};t.exports=function(t,i){var s=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},37:t=>{var e,i=(e=[],function(t,i){return e[t]=i,e.filter(Boolean).join("\n")});function s(t,e,s,n){var a;if(s)a="";else{a="",n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}")}if(t.styleSheet)t.styleSheet.cssText=i(e,a);else{var r=document.createTextNode(a),h=t.childNodes;h[e]&&t.removeChild(h[e]),h.length?t.insertBefore(r,h[e]):t.appendChild(r)}}var n={singleton:null,singletonCounter:0};t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.singletonCounter++,i=n.singleton||(n.singleton=t.insertStyleElement(t));return{update:function(t){s(i,e,!1,t)},remove:function(t){s(i,e,!0,t)}}}},225:(t,e,i)=>{t.exports=i.p+"fonts/Nunito-Black.woff2"}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={id:s,exports:{}};return t[s](a,a.exports,i),a.exports}i.m=t,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.b=document.baseURI||self.location.href,i.nc=void 0,(()=>{var t=i(379),e=i.n(t),s=i(37),n=i.n(s),a=i(569),o=i.n(a),r=i(565),h=i.n(r),l=i(216),c=i.n(l),d=i(912),_={};_.setAttributes=h(),_.insert=o().bind(null,"head"),_.domAPI=n(),_.insertStyleElement=c(),e()(d.Z,_),d.Z&&d.Z.locals&&d.Z.locals;class g{constructor(){this._assets={},this._loaded=0}load(){return new Promise((t=>{g.data.length||t(),g.data.forEach((e=>{const i=e.fileName.split(".").pop();g.imagesTypes.includes(i)&&this._loadImage(e,t),g.soundsTypes.includes(i)&&this._loadSound(e,t)}))}))}_increaseLoaded(t){this._loaded+=1,this._loaded===g.data.length&&t()}_loadImage(t,e){const i=new Image;i.addEventListener("load",(()=>{this._assets[t.fileName]=i,this._increaseLoaded(e)})),i.src=t.file}get(t){return this._assets[t]}static imagesTypes=["png"];static data=[]}const u=JSON.parse('{"L":[{"map":[[3,3,3,3],[3,10,10,3],[3,10,10,3],[3,3,3,3]]},{"map":[[5,3,3,5],[3,5,5,3],[3,5,5,3],[5,3,3,5]]},{"map":[[3,6,6,3],[6,3,3,6],[6,3,3,6],[3,6,6,3]]},{"map":[[3,3,5,3],[3,9,5,5],[9,9,9,3],[9,9,3,3]]},{"map":[[3,4,4,3],[4,4,4,6],[4,6,6,6],[3,6,6,3]]},{"map":[[3,5,5,3],[7,9,5,5],[7,7,7,5],[7,7,7,3]]},{"map":[[10,10,10,5],[4,3,3,5],[4,3,3,5],[4,7,7,7]]},{"map":[[7,7,7,7],[9,7,7,9],[10,9,9,10],[10,10,10,10]]},{"map":[[5,7,7,5],[7,9,9,7],[7,9,9,7],[5,7,7,5]]},{"map":[[10,10,10,7],[5,10,7,7],[5,5,4,7],[5,4,4,4]]},{"map":[[3,3,7,3,3],[3,3,9,3,7],[7,3,10,4,9],[9,4,10,6,10],[10,6,10,6,10]]},{"map":[[3,7,3,7,3],[7,9,9,9,7],[7,9,10,9,7],[3,7,9,7,3],[3,3,7,3,3]]},{"map":[[5,10,10,10,10],[5,10,5,5,10],[5,10,10,5,10],[5,5,5,5,10],[10,10,10,10,10]]},{"map":[[5,5,5,5,5],[5,6,4,6,5],[5,4,6,4,5],[5,6,4,6,5],[5,5,5,5,5]]},{"map":[[7,7,5,7,7],[7,9,9,9,7],[5,9,10,9,5],[7,9,9,9,7],[7,7,5,7,7]]},{"map":[[3,3,5,5,3,3],[3,3,8,5,5,3],[3,8,8,8,8,3],[3,8,8,8,8,3],[3,3,8,8,3,3],[3,3,3,8,3,3]]},{"map":[[3,7,7,7,3,3],[3,7,10,7,3,3],[3,7,7,7,5,3],[3,3,5,5,3,3],[3,3,3,5,3,3],[3,3,3,5,5,3]]},{"map":[[3,7,7,10,10,3],[3,7,7,10,10,3],[3,7,9,9,10,3],[3,10,9,9,7,3],[3,10,10,7,7,3],[3,3,10,7,3,3]]},{"map":[[3,4,3,4,3,4],[4,6,4,6,4,6],[6,3,6,3,6,3],[3,4,3,4,3,4],[4,6,4,6,4,6],[6,3,6,3,6,3]]},{"map":[[4,4,4,7,9,10],[4,4,4,7,9,9],[6,4,4,4,7,7],[6,6,4,4,4,4],[6,6,6,4,4,6],[4,4,4,4,6,6]]},{"map":[[7,7,9,9,7,7],[7,9,10,10,9,7],[9,10,10,10,10,9],[9,10,10,10,10,9],[7,9,10,10,9,7],[7,7,9,9,7,7]]},{"map":[[4,4,6,10,9,10],[4,6,6,10,10,10],[6,6,10,10,9,5],[10,10,10,10,5,5],[10,9,10,5,5,5],[10,10,5,5,5,5]]},{"map":[[6,4,4,4,4,4],[6,4,6,6,6,6],[6,4,6,4,4,6],[6,4,6,6,4,6],[6,4,4,4,4,6],[6,6,6,6,6,6]]},{"map":[[3,7,9,9,7,3],[7,9,10,10,9,7],[9,10,5,5,10,9],[10,5,6,6,5,10],[5,6,4,4,6,5],[6,4,8,8,4,6]]},{"map":[[5,5,5,5,5,7],[10,10,10,10,5,7],[10,4,3,3,5,7],[10,4,3,3,5,7],[10,4,7,7,7,7],[10,4,4,4,4,4]]},{"map":[[3,3,3,3,3,3,5],[3,3,3,3,3,5,5],[5,3,3,3,5,5,5],[5,5,3,5,5,5,3],[5,5,5,5,5,3,3],[3,5,5,5,3,3,3],[3,3,5,3,3,3,3]]},{"map":[[3,3,10,10,10,3,3],[3,10,3,10,3,10,3],[10,10,3,10,3,10,10],[10,10,10,10,10,10,10],[10,10,10,3,10,10,10],[3,10,10,3,10,10,3],[3,3,10,10,10,3,3]]},{"map":[[3,3,3,5,3,3,3],[3,3,5,5,10,3,3],[3,3,4,5,5,3,3],[3,5,5,5,5,7,3],[3,10,5,4,5,5,3],[3,5,5,5,5,5,3],[3,3,3,9,3,3,3]]},{"map":[[3,3,3,3,3,3,3],[3,6,6,4,6,4,3],[6,6,4,6,3,6,4],[3,6,6,4,6,4,3],[3,3,6,6,4,3,3],[3,3,3,6,3,3,3],[3,3,3,3,3,3,3]]},{"map":[[3,3,3,4,3,3,3],[3,3,4,7,7,3,3],[3,7,7,7,4,7,3],[3,10,9,9,9,9,3],[3,3,10,9,9,3,3],[3,3,10,9,9,3,3],[3,3,3,10,3,3,3]]},{"map":[[3,3,3,9,3,3,3],[3,3,10,9,9,3,3],[3,5,7,5,9,9,3],[3,10,10,10,7,9,9],[5,10,5,10,10,10,3],[10,7,10,3,3,3,3],[10,3,3,3,3,3,3]]},{"map":[[9,10,9,3,9,9,9],[10,3,9,3,9,3,10],[9,9,9,10,9,10,10],[3,3,10,3,9,3,3],[9,9,9,9,9,10,9],[9,3,10,3,10,3,9],[9,10,10,3,9,9,9]]},{"map":[[7,7,3,3,3,7,7],[3,7,7,10,7,7,3],[3,3,10,10,10,3,3],[3,10,10,10,9,9,3],[3,10,10,9,9,10,3],[3,10,9,9,10,10,3],[3,3,9,10,10,3,3]]},{"map":[[3,3,3,3,7,7,7],[8,8,8,3,7,10,7],[8,10,9,9,9,7,7],[8,8,9,10,9,5,3],[5,7,7,7,9,3,5],[3,7,10,7,5,3,3],[3,7,7,7,3,3,3]]},{"map":[[3,3,3,7,3,3,10],[10,3,7,7,3,3,3],[3,3,7,9,7,3,3],[3,7,9,10,9,7,3],[7,9,10,10,9,7,3],[7,7,10,10,10,9,3],[7,9,10,10,10,9,7]]},{"map":[[5,10,5,5,5,5,5],[10,7,10,5,5,10,5],[5,10,5,5,10,7,10],[5,5,5,5,5,10,5],[5,5,5,10,5,5,5],[5,5,10,7,10,5,5],[5,5,5,10,5,5,5]]},{"map":[[4,6,5,5,5,5,10],[5,5,4,10,5,5,5],[5,6,5,5,5,10,5],[5,4,6,4,5,5,5],[5,5,4,4,6,5,10],[10,5,5,6,4,6,5],[5,5,10,4,6,4,4]]},{"map":[[5,5,5,5,5,5,5],[5,6,4,6,4,6,5],[5,4,6,4,5,4,5],[5,6,5,6,4,6,5],[5,4,6,4,6,4,5],[5,6,4,6,5,6,5],[5,5,5,5,5,5,5]]},{"map":[[10,5,5,5,5,5,5],[10,5,10,10,10,10,5],[10,5,10,5,5,10,5],[10,5,10,10,5,10,5],[10,5,5,5,5,10,5],[10,10,10,10,10,10,5],[5,5,5,5,5,5,5]]},{"map":[[7,9,9,9,4,4,4],[7,7,7,10,7,10,10],[4,4,4,10,7,7,10],[5,4,9,10,7,5,10],[5,5,9,10,5,5,5],[5,7,9,9,4,4,4],[7,7,7,10,10,10,4]]}]}');class p{constructor({assets:t}){this._assets=t,this._level=15,this._gold=0}increaseLevel(){const t=this._level+1;u.L[t]?this._level=t:this._level=0}resetLevel(){this._level=0}setLevel(t){this._level=t}getLevel(){return this._level}}class m{static rect(t,e,i,s,n,a,o=1){t.globalAlpha=o,t.fillStyle=a,t.fillRect(e,i,s,n),t.globalAlpha=1}static roundedRect(t,e,i,s,n,a,o,r=1){t.globalAlpha=r,t.fillStyle=o,t.beginPath(),t.moveTo(e,i+a),t.arcTo(e,i+n,e+a,i+n,a),t.arcTo(e+s,i+n,e+s,i+n-a,a),t.arcTo(e+s,i,e+s-a,i,a),t.arcTo(e,i,e,i+a,a),t.fill(),t.globalAlpha=1}static stroke(t,e,i){t.strokeStyle=i,t.lineWidth=e,t.stroke()}static text(t,e,i,s,n,a){t.fillStyle=a,t.font=`${n}px Nunito`,t.fillText(s,e,i)}}class v{static grass={id:1,key:"#4DAF34"};static blueDeep={id:2,key:"#1D3753"};static blueNight={id:3,key:"#234368"};static blue={id:4,key:"#4A5AEC"};static green={id:5,key:"#73AE37"};static sea={id:6,key:"#4BD5F5"};static red={id:7,key:"#D74E23"};static purple={id:8,key:"#E436EE"};static orange={id:9,key:"#FF891C"};static yellow={id:10,key:"#FFC530"};static white={id:11,key:"#FFFFFF"};static softGrass={id:12,key:"#5DBB46"}}class f{static calcTextMetrics(t,e,i){t.font=`${i}px Nunito`;const{width:s,actualBoundingBoxAscent:n,actualBoundingBoxDescent:a}=t.measureText(e);return{textWidth:s,textHeight:n+a}}}class y{constructor({position:t,size:e,label:i}){this._position=t,this._size=e,this._label=i}render(t){m.roundedRect(t,this._position.x,this._position.y,this._size.width,this._size.height,y.radius,v.blueNight.key);const{textWidth:e}=f.calcTextMetrics(t,this._label,y.fontSize),i=this._position.x+this._size.width/2-e/2,s=this._position.y+this._size.height/2+y.fontSize/3;m.text(t,i,s,this._label,y.fontSize,v.white.key)}isPressed(t){return t.x>this._position.x&&t.x<this._position.x+this._size.width&&t.y>this._position.y&&t.y<this._position.y+this._size.height}static fontSize=32;static radius=37;static horizontalPadding=40}class C{constructor({canvas:t,assets:e,state:i,sceneManager:s}){this._canvas=t,this._assets=e,this._state=i,this._sceneManager=s,this._levelCounter=this._state.getLevel(),this._startButton=null,this._initButton()}update(t){}render(t){m.rect(t,0,0,this._canvas.width,this._canvas.height,v.blueDeep.key),this._renderTitle(t),this._renderLevelCounter(t),this._startButton.render(t)}_renderTitle(t){C.title.split(" ").forEach(((e,i)=>{const{textWidth:s}=f.calcTextMetrics(t,e,C.titleFontSize),n=this._canvas.width/2-s/2,a=C.titlePositionY+i*C.titleLineHeight+C.titleFontSize;m.text(t,n,a,e,C.titleFontSize,v.white.key)}))}_renderLevelCounter(t){const{textWidth:e}=f.calcTextMetrics(t,C.levelCounterHint,C.levelCounterHintFontSize),i=this._canvas.width/2-e/2,s=C.levelCounterHintPositionY+C.levelCounterHintFontSize;m.text(t,i,s,C.levelCounterHint,C.levelCounterHintFontSize,v.yellow.key);const n=this._levelCounter+1,{textWidth:a}=f.calcTextMetrics(t,n,C.levelCounterFontSize),o=this._canvas.width/2-a/2,r=C.levelCounterPositionY+C.levelCounterFontSize;m.text(t,o,r,n,C.levelCounterFontSize,v.yellow.key)}handleClick({position:t}){this._startButton.isPressed(t)&&this._sceneManager.showCoreScene()}handleStartDragging(){}handleDragging(){}handleEndDragging(){}_initButton(){this._startButton=new y({position:{x:this._canvas.width/2-C.startButtonWidth/2,y:C.startButtonPositionY},size:{width:C.startButtonWidth,height:C.buttonsHeight},label:"Играть"})}static title="Colored Tiles";static titleFontSize=96;static titleLineHeight=100;static titlePositionY=329;static levelCounterHint="Уровень:";static levelCounterHintFontSize=48;static levelCounterHintPositionY=609;static levelCounterFontSize=96;static levelCounterPositionY=667;static startButtonPositionY=843;static startButtonWidth=194;static buttonsHeight=74}class w{constructor({color:t,size:e,position:i}){this._color=t,this._size=e,this._position=i,this._opacity=1,this._scaleFactor=1}render(t){const e=this._size.width*this._scaleFactor,i=this._size.height*this._scaleFactor,s=this._position.x-(e-this._size.width)/2,n=this._position.y-(i-this._size.height)/2,a=w.radius*this._scaleFactor;m.roundedRect(t,s,n,e,i,a,this._color.key,this._opacity)}getScaleFactor(){return this._scaleFactor}setScaleFactor(t){this._scaleFactor=t}getPosition(){return this._position}setPosition(t){this._position=t}getColor(){return this._color}getOpacity(){return this._opacity}setOpacity(t){this._opacity=t}static radius=30;static colors=[v.blueNight,v.blue,v.green,v.sea,v.red,v.purple,v.orange,v.yellow]}class x{constructor({map:t}){this._map=t,this._columnWidth=0,this._rowHeight=0,this._setMetrics()}render(t){this._map.forEach(((e,i)=>{e.forEach(((e,s)=>{const n=x.positionX+(this._columnWidth+x.gap)*s,a=x.positionY+(this._rowHeight+x.gap)*i,o=w.colors.find((t=>t.id===e));m.roundedRect(t,n,a,this._columnWidth,this._rowHeight,x.tileRadius,o.key)}))}))}_setMetrics(){const t=this._map[0].length,e=this._map.length;this._columnWidth=(x.width-x.gap*(t-1))/t,this._rowHeight=(x.height-x.gap*(e-1))/e}static width=194;static height=194;static positionX=253;static positionY=40;static gap=2;static tileRadius=10}class S{constructor({map:t}){this._map=t}isMatch(t){return t.every(((t,e)=>t.every(((t,i)=>t.getTile().getColor().id===this._map[e][i]))))}getMapLengths(){return{x:this._map[0].length,y:this._map.length}}getColorsCounters(){const t=this._map.flat();return Array.from(new Set(t)).map((e=>({color:w.colors.find((t=>t.id===e)),counter:t.filter((t=>t===e)).length})))}}class T{constructor({coords:t}){this._coords=t,this._tile=null,this._detachedTile=null}render(t){this._tile&&this._tile.render(t)}setTile(t){this._tile=t;const e=this._detachedTile;return this._detachedTile=null,this._tile!==e}getTile(){return this._tile}detachTile(){const t=this._tile;return this._detachedTile=t,this._tile=null,t}getCoords(){return this._coords}}class D{static getRandomFromRange(t,e){return t===e?t:t+Math.round(Math.random()*(e-t))}}class P{constructor({tile:t,delay:e=0}){this._tile=t,this._delay=e,this._startTime=null,this._finished=!1}update({timestamp:t}){if(this._finished)return;null===this._startTime&&(this._startTime=t+this._delay);const e=t-this._startTime;if(e<0)return;let i=1;if(e<P.duration){const t=e/P.duration;i=Math.pow(1-t,2)*P.path[0]+2*(1-t)*t*P.path[1]+Math.pow(t,2)*P.path[2]}else this._finished=!0;this._tile.setScaleFactor(i)}isFinished(){return this._finished}static duration=1e3;static path=[1,.6,1]}class A{static ysdk=null;static player=null;static async initYSDK(){return YaGames.init().then((t=>{A.ysdk=t,t.features.LoadingAPI?.ready(),console.log("Yandex SDK initialized")})).catch((t=>{console.log("Ошибка при инициализации YSDK")}))}static async initPlayer(){return A.ysdk.getPlayer({scopes:!1}).then((t=>{A.player=t,console.log("Player initialized"),console.log(A.player)})).catch((t=>{console.log("Ошибка при инициализации объекта Player")}))}static async savePlayerStats(t){return A.player.setStats(t).then((()=>{console.log("Player data is saved")})).catch((t=>{console.log("Ошибка при сохранении данных игрока")}))}static async getPlayerStats(){return A.player.getStats().then((t=>(console.log("Получены сохраненные данные игрока"),console.log(t),t))).catch((t=>{console.log("Ошибка при получении данных игрока")}))}}class M{constructor({canvas:t,assets:e,state:i,sceneManager:s,levelController:n}){this._canvas=t,this._assets=e,this._state=i,this._sceneManager=s,this._levelController=n,this._columnWidth=0,this._rowHeight=0,this._maxOutOfBoundsX=0,this._maxOutOfBoundsY=0,this._setMetrics(),this._map=[],this._setMap(),this._setTiles(),this._animations=[],this._startDraggingPosition=null,this._startDraggingCoords=null,this._prevDraggingPosition=null,this._draggingAxis=null,this._detachedTiles=[],this._levelComplete=!1,this._movesCounter=0}update(t){this._animations.forEach((e=>e.update(t))),this._animations=this._animations.filter((t=>!t.isFinished()))}render(t){this._map.forEach((e=>{e.forEach((e=>e.render(t)))})),this._detachedTiles.forEach((e=>e.render(t)))}handleStartDragging({position:t}){!this._levelComplete&&this._isFieldIncludesPosition(t)&&(this._startDraggingPosition=t,this._startDraggingCoords=this.getCoordsByPosition(t),this._prevDraggingPosition=t)}handleDragging({position:t}){this._startDraggingPosition&&this._startDraggingCoords&&(this._draggingAxis||this._setDraggingAxis(t),this._detachedTiles.length||this._detachTiles(),"x"===this._draggingAxis?this._moveRow(t):this._moveColumn(t),this._prevDraggingPosition=t)}_setDraggingAxis(t){const e=this._startDraggingPosition.x-t.x,i=this._startDraggingPosition.y-t.y;this._draggingAxis=Math.abs(e)>Math.abs(i)?"x":"y"}handleEndDragging(t){if(!this._detachedTiles.length)return;const e=this._draggingAxis;this._detachedTiles.sort(((t,i)=>t.getPosition()[e]-i.getPosition()[e]));let i=!1;"x"===e?this._map[this._startDraggingCoords.y].forEach((t=>{const e=this._attachFirstDetachedTileToCell(t);i=i||e})):this._map.forEach((t=>{const e=t[this._startDraggingCoords.x],s=this._attachFirstDetachedTileToCell(e);i=i||s})),i&&(this._movesCounter+=1),this._startDraggingPosition=null,this._startDraggingCoords=null,this._prevDraggingPosition=null,this._draggingAxis=null,this._handleDraggingResult()}_attachFirstDetachedTileToCell(t){const e=t.getCoords(),i=this._detachedTiles.shift(),s=this.getPositionByCoords(e);return i.setPosition(s),i.setOpacity(1),t.setTile(i)}async _handleDraggingResult(){this._levelComplete=this._levelController.isMatch(this._map),this._levelComplete&&(await this._savePlayerStats(),this._startLevelCompliteAnimation(),setTimeout((()=>{this._sceneManager.showResultScene(this._movesCounter)}),1500))}async _savePlayerStats(){const t=this._state.getLevel()+1;await A.savePlayerStats({level:t})}_startLevelCompliteAnimation(){this._map.forEach(((t,e)=>{t.forEach(((t,e)=>{const i=t.getTile(),s=new P({tile:i,delay:0});this._animations.push(s)}))}))}_detachTiles(){this._detachedTiles="x"===this._draggingAxis?this._map[this._startDraggingCoords.y].map((t=>t.detachTile())):this._map.map((t=>t[this._startDraggingCoords.x].detachTile()))}_moveRow(t){const e=t.x-this._prevDraggingPosition.x;this._detachedTiles.forEach((t=>{const i=t.getPosition(),s={x:i.x+e,y:i.y};e<0&&s.x<M.positionX-this._maxOutOfBoundsX?s.x+=this._detachedTiles.length*(this._columnWidth+M.gap):e>0&&s.x+this._columnWidth>M.positionX+M.width+this._maxOutOfBoundsX&&(s.x-=this._detachedTiles.length*(this._columnWidth+M.gap));let n=1;s.x<M.positionX?n=1-(M.positionX-s.x)/this._maxOutOfBoundsX:s.x+this._columnWidth>M.positionX+M.width&&(n=1-(s.x+this._columnWidth-(M.positionX+M.width))/this._maxOutOfBoundsX),t.setOpacity(n),t.setPosition(s)}))}_moveColumn(t){const e=t.y-this._prevDraggingPosition.y;this._detachedTiles.forEach((t=>{const i=t.getPosition(),s={x:i.x,y:i.y+e};e<0&&s.y<M.positionY-this._maxOutOfBoundsY?s.y+=this._detachedTiles.length*(this._rowHeight+M.gap):e>0&&s.y+this._rowHeight>M.positionY+M.height+this._maxOutOfBoundsY&&(s.y-=this._detachedTiles.length*(this._rowHeight+M.gap));let n=1;s.y<M.positionY?n=1-(M.positionY-s.y)/this._maxOutOfBoundsY:s.y+this._rowHeight>M.positionY+M.height&&(n=1-(s.y+this._rowHeight-(M.positionY+M.height))/this._maxOutOfBoundsY),t.setOpacity(n),t.setPosition(s)}))}getCoordsByPosition(t){return{x:Math.floor((t.x-M.positionX)/(M.gap+this._columnWidth)),y:Math.floor((t.y-M.positionY)/(M.gap+this._rowHeight))}}getPositionByCoords(t){return{x:M.positionX+t.x*(M.gap+this._columnWidth),y:M.positionY+t.y*(M.gap+this._rowHeight)}}_getCellByCoords(t){return this._map[t.y][t.x]}_isFieldIncludesPosition(t){return t.x>M.positionX&&t.x<M.positionX+M.width&&t.y>M.positionY&&t.y<M.positionY+M.height}_setMetrics(){const{x:t,y:e}=this._levelController.getMapLengths();this._columnWidth=(M.width-M.gap*(t-1))/t,this._rowHeight=(M.height-M.gap*(e-1))/e,this._maxOutOfBoundsX=(M.gap+this._columnWidth)/2,this._maxOutOfBoundsY=(M.gap+this._rowHeight)/2}_setMap(){const{x:t,y:e}=this._levelController.getMapLengths();for(let i=0;i<e;i++){const e=[];for(let s=0;s<t;s++){const t=new T({coords:{x:s,y:i}});e.push(t)}this._map.push(e)}}_setTiles(){let t=this._levelController.getColorsCounters();this._map.forEach((e=>{e.forEach((e=>{const i=e.getCoords();t=t.filter((t=>t.counter));const s=D.getRandomFromRange(0,t.length-1),n=t[s];n.counter-=1;const a=this._createTile(i,n.color);e.setTile(a)}))})),this._levelController.isMatch(this._map)&&this._setTiles()}_createTile(t,e){const i=this.getPositionByCoords(t),s={width:this._columnWidth,height:this._rowHeight};return new w({color:e,size:s,position:i})}static width=662;static height=662;static positionX=19;static positionY=294;static gap=10}class O{constructor({canvas:t,assets:e,state:i,sceneManager:s}){this._canvas=t,this._assets=e,this._state=i,this._sceneManager=s,this._level=u.L[i.getLevel()],this._levelPreview=new x({map:this._level.map}),this._levelController=new S({map:this._level.map}),this._field=new M({canvas:this._canvas,assets:this._assets,state:this._state,sceneManager:this._sceneManager,levelController:this._levelController})}update(t){this._field.update(t)}render(t){m.rect(t,0,0,this._canvas.width,this._canvas.height,v.blueDeep.key),this._levelPreview.render(t),this._field.render(t)}handleClick({position:t}){}handleStartDragging(t){this._field.handleStartDragging(t)}handleDragging(t){this._field.handleDragging(t)}handleEndDragging(t){this._field.handleEndDragging(t)}}class F{constructor({canvas:t,assets:e,state:i,sceneManager:s,movesCounter:n}){this._canvas=t,this._assets=e,this._state=i,this._sceneManager=s,this._movesCounter=n,this._continueButton=null,this._initButton()}update(t){}render(t){m.rect(t,0,0,this._canvas.width,this._canvas.height,v.blueDeep.key),this._renderTitle(t),this._renderMovesCounter(t),this._continueButton.render(t)}_renderTitle(t){F.title.split(" ").forEach(((e,i)=>{const{textWidth:s}=f.calcTextMetrics(t,e,F.titleFontSize),n=this._canvas.width/2-s/2,a=F.titlePositionY+i*F.titleLineHeight+F.titleFontSize;m.text(t,n,a,e,F.titleFontSize,v.white.key)}))}_renderMovesCounter(t){const{textWidth:e}=f.calcTextMetrics(t,F.movesCounterHint,F.movesCounterHintFontSize),i=this._canvas.width/2-e/2,s=F.movesCounterHintPositionY+F.movesCounterHintFontSize;m.text(t,i,s,F.movesCounterHint,F.movesCounterHintFontSize,v.yellow.key);const{textWidth:n}=f.calcTextMetrics(t,this._movesCounter,F.movesCounterFontSize),a=this._canvas.width/2-n/2,o=F.movesCounterPositionY+F.movesCounterFontSize;m.text(t,a,o,this._movesCounter,F.movesCounterFontSize,v.yellow.key)}handleClick({position:t}){this._continueButton.isPressed(t)&&(this._state.increaseLevel(),this._sceneManager.showCoreScene())}handleStartDragging(){}handleDragging(){}handleEndDragging(){}_initButton(){this._continueButton=new y({position:{x:this._canvas.width/2-F.continueButtonWidth/2,y:F.continueButtonPositionY},size:{width:F.continueButtonWidth,height:F.buttonsHeight},label:"Следующий уровень"})}static title="Уровень пройден!";static titleFontSize=72;static titleLineHeight=76;static titlePositionY=318;static movesCounterHint="Ходов:";static movesCounterHintFontSize=48;static movesCounterHintPositionY=530;static movesCounterFontSize=96;static movesCounterPositionY=584;static continueButtonPositionY=765;static continueButtonWidth=420;static buttonsHeight=74}class B{constructor({canvas:t,assets:e,state:i}){this._canvas=t,this._assets=e,this._state=i,this._currentScene=null,this._futureScene=null,this._transitionOverlayOffsetX=1}update(t){this._currentScene&&this._currentScene.update(t),this._futureScene?this._updateSceneOut(t):this._transitionOverlayOffsetX<=0&&this._updateSceneIn(t)}_updateSceneOut({prevFrameDuration:t}){this._currentScene&&0!==this._transitionOverlayOffsetX?this._transitionOverlayOffsetX=Math.max(this._transitionOverlayOffsetX-t/B.transitionDuration,0):(this._currentScene=this._futureScene,this._futureScene=null)}_updateSceneIn({prevFrameDuration:t}){this._transitionOverlayOffsetX=Math.max(this._transitionOverlayOffsetX-t/B.transitionDuration,-1),-1===this._transitionOverlayOffsetX&&(this._transitionOverlayOffsetX=1)}render(t){this._currentScene&&this._currentScene.render(t),1!==this._transitionOverlayOffsetX&&this._renderTransitionOverlay(t)}_renderTransitionOverlay(t){const e=this._canvas.width*this._transitionOverlayOffsetX;m.rect(t,e,0,this._canvas.width,this._canvas.height,v.blueDeep.key)}_getScenesCommonProps(){return{canvas:this._canvas,assets:this._assets,state:this._state,sceneManager:this}}_isInTransition(){return this._futureScene||1!==this._transitionOverlayOffsetX}handleClick(t){this._isInTransition()||this._currentScene&&this._currentScene.handleClick(t)}handleStartDragging(t){this._isInTransition()||this._currentScene&&this._currentScene.handleStartDragging(t)}handleDragging(t){this._isInTransition()||this._currentScene&&this._currentScene.handleDragging(t)}handleEndDragging(t){this._isInTransition()||this._currentScene&&this._currentScene.handleEndDragging(t)}showOpenScene(){this._futureScene=new C(this._getScenesCommonProps())}showCoreScene(){this._futureScene=new O(this._getScenesCommonProps())}showResultScene(t){this._futureScene=new F({...this._getScenesCommonProps(),movesCounter:t})}static transitionDuration=300}class b{constructor({ctx:t,canvas:e,sceneManager:i}){this._canvas=e,this._ctx=t,this._sceneManager=i}render(){this._clear(),this._renderScene()}_clear(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}_renderScene(){this._sceneManager.render(this._ctx)}}class E{constructor(t){this._canvas=t,this._ctx=t.getContext("2d"),this._setRenderSize(),this._assets=new g,this._state=new p({assets:this._assets}),this._sceneManager=new B({canvas:this._canvas,assets:this._assets,state:this._state}),this._renderer=new b({canvas:this._canvas,ctx:this._ctx,sceneManager:this._sceneManager}),this._prevTimestamp=null,this._draggingStarted=!1,this._addEventHandlers(),this._startGame()}async _startGame(){await this._assets.load(),await this._loadPlayerStats(),this._sceneManager.showOpenScene(),requestAnimationFrame((t=>{this._gameLoop(t)}))}async _loadPlayerStats(){const{level:t}=await A.getPlayerStats();t&&this._state.setLevel(t)}_gameLoop(t){requestAnimationFrame((t=>{this._gameLoop(t)}));const e=t-(this._prevTimestamp||t),i=e/1e3;this._sceneManager.update({delta:i,prevFrameDuration:e,timestamp:t}),this._prevTimestamp=t,this._renderer.render()}_addEventHandlers(){this._canvas.addEventListener("click",(t=>this._handleClick(t))),this._canvas.addEventListener("mousedown",(t=>this._handleStartDragging(t))),window.addEventListener("mousemove",(t=>this._handleDragging(t))),window.addEventListener("mouseup",(t=>this._handleEndDragging(t))),this._canvas.addEventListener("touchstart",(t=>this._handleStartDragging(t))),window.addEventListener("touchmove",(t=>this._handleDragging(t))),window.addEventListener("touchend",(t=>this._handleEndDragging(t))),window.addEventListener("resize",(()=>this._setRenderSize()))}_handleClick(t){const{clientX:e,clientY:i}=t,s=this._transformClickPosition({x:e,y:i});this._sceneManager.handleClick({position:s})}_handleStartDragging(t){this._draggingStarted=!0;const{clientX:e,clientY:i}=t.touches?.[0]||t,s=this._transformClickPosition({x:e,y:i});this._sceneManager.handleStartDragging({position:s})}_handleEndDragging(t){this._draggingStarted=!1;const{clientX:e,clientY:i}=t.touches?.[0]||t,s=this._transformClickPosition({x:e,y:i});this._sceneManager.handleEndDragging({position:s})}_handleDragging(t){if(!this._draggingStarted)return;const{clientX:e,clientY:i}=t.touches?.[0]||t,s=this._transformClickPosition({x:e,y:i});this._sceneManager.handleDragging({position:s})}_transformClickPosition({x:t,y:e}){return t-=this._canvas.getBoundingClientRect().left,t*=this._canvas.width/parseFloat(this._canvas.style.width),e-=this._canvas.getBoundingClientRect().top,{x:t,y:e*=this._canvas.height/parseFloat(this._canvas.style.height)}}_setRenderSize(){const t=document.documentElement.clientWidth,e=document.documentElement.clientHeight;let i=this._canvas.width/this._canvas.height,s=e,n=s*i;n>t&&(i=this._canvas.height/this._canvas.width,n=t,s=n*i),this._canvas.style.width=n+"px",this._canvas.style.height=s+"px"}}addEventListener("DOMContentLoaded",(async()=>{await A.initYSDK(),await A.initPlayer(),new E(document.getElementById("colored-tiles"))}))})()})();
//# sourceMappingURL=index.js.map