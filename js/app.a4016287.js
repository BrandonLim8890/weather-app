(function(e){function t(t){for(var n,o,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/my-project/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"13c3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Weather")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{type:"text",name:"city-input",id:"city-input",autofocus:""},domProps:{value:e.city},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getWeather(t)},input:function(t){t.target.composing||(e.city=t.target.value)}}}),r("br"),r("br"),e.error?r("div",{staticClass:"error"},[e._v("Ensure your city is valid!")]):e._e(),e.weatherData?r("div",{staticClass:"card"},[r("h1",[e._v(e._s(e.weatherData.temp))]),r("h4",[e._v("Feels like "+e._s(e.weatherData.feels_like))]),r("h4",[e._v("Humidity "+e._s(e.weatherData.humidity)+"%")]),r("h4",[e._v("Min: "+e._s(e.weatherData.temp_min)+" / Max: "+e._s(e.weatherData.temp_max))]),r("div",{staticClass:"button_cont",attrs:{align:"center"}},[r("button",{staticClass:"button",class:{active:"metric"==e.units},attrs:{rel:"nofollow noopener"},on:{click:e.changeToMetric}},[e._v("C")]),e._v(" / "),r("button",{staticClass:"button",class:{active:"imperial"==e.units},attrs:{rel:"nofollow noopener"},on:{click:e.changeToImperial}},[e._v("F")])])]):e._e()])},c=[],u=(r("99af"),r("b64b"),r("d3b7"),r("96cf"),r("1da1")),s={name:"Weather",data:function(){return{city:"Singapore",key:"50472ba170497987888106aa81903461",weatherData:"",units:"metric",error:!1}},methods:{getWeather:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.city,"&units=").concat(e.units,"&appid=").concat(e.key),{mode:"cors"});case 3:return r=t.sent,t.next=6,r.json();case 6:for(n=t.sent,e.error=!1,e.weatherData=n.main,a=0,i=Object.keys(e.weatherData);a<i.length;a++)o=i[a],e.weatherData[o]=Math.round(e.weatherData[o]),"humidity"!=o&&(e.weatherData[o]+="°");t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),e.error=!0;case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},changeToMetric:function(){this.units="metric",this.getWeather()},changeToImperial:function(){this.units="imperial",this.getWeather()}}},l=s,p=(r("b051"),r("2877")),f=Object(p["a"])(l,o,c,!1,null,"4249e818",null),h=f.exports,d={name:"App",components:{Weather:h}},v=d,m=(r("034f"),Object(p["a"])(v,a,i,!1,null,null,null)),y=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,r){},b051:function(e,t,r){"use strict";var n=r("13c3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.a4016287.js.map