(this["webpackJsonpkyugyo-front"]=this["webpackJsonpkyugyo-front"]||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(29),c=a(11),l=a.n(c),m=a(14),s=a(5),o=a(10),u=a.n(o),i=(a(56),a(7)),d=function(){return n.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg px-3 px-5 kyg-navbar shadow justify-content-between"},n.createElement(i.a,{to:"/kyugyo-front",className:"h2 my-3 text-white"},"\u4f11\u696d.com"),n.createElement("div",{className:"text-right text-white"},"\u4f11\u696d\u4e2d\u306e\u5e97\u306e\u60c5\u5831\u5171\u6709\u30b5\u30a4\u30c8"))},p=a(8),E=function(e){var t=e.kyugyo,a="/kyugyo-front/kyugyos/".concat(t.id);return n.createElement(i.a,{to:a},n.createElement("div",{className:"flex-fill text-white kg-post-box"},n.createElement("div",null,"\u5e97\u540d\uff1a",t.storeName),n.createElement("div",null,"\u4f4f\u6240\uff1a",t.address),n.createElement("div",null,"\u5e97\u8217URL\uff1a",t.hpUrl),n.createElement("div",null,"\u66f4\u65b0\u65e5\u6642\uff1a",t.updatedAt),n.createElement("div",{className:"border border-white text-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0 kg-kyugyo-button"},t.isClosed?"\u4f11\u696d\u4e2d":"\u958b\u696d\u4e2d")))},y=function(e){var t=e.kyugyos;e.setKyugyos;return Object(n.useEffect)((function(){console.log("\u78ba\u8a8d")}),[]),n.createElement(n.Fragment,null,n.createElement("ul",{className:"list-unstyled px-sm-5"},t.map((function(e,t){return n.createElement("li",{className:"h4 border border-white py-4 px-3 px-md-5"},n.createElement(E,{kyugyo:e}))}))))},b="https://kyugyo-back.herokuapp.com",h="".concat(b,"/api/kyugyos"),f=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(h);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),n.createElement(n.Fragment,null,n.createElement(i.a,{to:"/kyugyo-front/post",className:"text-white"},"\u4f11\u696d\u60c5\u5831\u3092\u6295\u7a3f\u3059\u308b"),n.createElement(y,{kyugyos:r.reverse()}))},v=function(e){var t=e.kyugyos,a=e.match.params.id,r=t.find((function(e){return a===e.id}));return n.createElement(n.Fragment,null,n.createElement("h2",{className:"text-white mb-4"},"\u5e97\u8217\u60c5\u5831"),void 0!==r&&n.createElement("div",{className:"flex-fill text-white kg-font-size ml-4"},n.createElement("div",{className:"kg-kyugyo-button text-center border border-white h3 text-white rounded-pill text-nowrap mx-auto p-2 p-sm-3 my-3 my-sm-5 w-25"},r.isClosed?"\u4f11\u696d\u4e2d":"\u958b\u696d\u4e2d"),n.createElement("div",{className:"h3 border border-white mb-3 py-4 px-5"},"\u5e97\u540d\uff1a",r.storeName),n.createElement("div",{className:"h3 border border-white mb-3 py-4 px-5"},"\u4f4f\u6240\uff1a",r.address),n.createElement("div",{className:"border border-white mb-3 py-4 px-5"},"\u30a2\u30af\u30bb\u30b9\uff1a",r.access),n.createElement("div",{className:"border border-white mb-3 py-4 px-5"},n.createElement("h3",null,"\u5e97\u8217URL"),r.hpUrl),n.createElement("div",{className:"kg-misc-box border border-white mb-3 pt-4 pb-5 px-5"},n.createElement("h3",null,"\u5099\u8003"),r.misc),n.createElement("div",{className:"border border-white py-4 px-5"},n.createElement("div",null,"\u66f4\u65b0\u65e5\u6642\uff1a",r.updatedAt),n.createElement("div",null,"\u4f5c\u6210\u65e5\u6642\uff1a",r.createdAt))))},g=function(){return n.createElement("div",null,n.createElement("div",{className:"text-white"},n.createElement("h1",null,"\u4f11\u696d.com\u306b\u3064\u3044\u3066"),n.createElement("p",null,"\u4f11\u696d.com(\u4ee5\u4e0b\u3001\u5f53\u30b5\u30a4\u30c8)\u306b\u8a2a\u554f\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u5f53\u30b5\u30a4\u30c8\u306f\u958b\u767a\u4e2d\u306e\u305f\u3081\u3001\u307e\u305f\u958b\u767a\u8005\u304c\u672a\u719f\u306a\u305f\u3081\u69d8\u3005\u306a\u8106\u5f31\u6027\u53ca\u3073\u4e0d\u4fbf\u3055\u3092\u591a\u304f\u62b1\u3048\u3066\u3044\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u30c7\u30fc\u30bf\u5165\u529b\u306e\u5834\u9762\u306b\u304a\u3044\u3066\u306f\u30c0\u30df\u30fc\u30c7\u30fc\u30bf\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u4f7f\u7528\u304f\u3060\u3055\u3044\u3002\u4eee\u306b\u60c5\u5831\u6f0f\u6d29\u306a\u3069\u304c\u767a\u751f\u3057\u3066\u969b\u306b\u751f\u3058\u305f\u88ab\u5bb3\u7b49\u306b\u5bfe\u3059\u308b\u8cac\u4efb\u306f\u7f6e\u3044\u304b\u306d\u307e\u3059\u3002 \u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002")))},x=a(32),k=a.n(x)()(),N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(s.a)(c,2),m=l[0],o=l[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),p=d[0],E=d[1],y=Object(n.useState)(""),b=Object(s.a)(y,2),f=b[0],v=b[1],g=Object(n.useState)(""),x=Object(s.a)(g,2),N=x[0],w=x[1];return n.createElement("div",{className:"text-center"},n.createElement("div",{className:"text-white h3"},"\u4f11\u696d\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),n.createElement("form",{className:"border border-white p-4"},n.createElement("div",{className:"p-4"},n.createElement("label",{className:"text-white"},"\u5e97\u306e\u540d\u524d"),n.createElement("input",{type:"text",name:"storeName",onChange:function(e){r(e.target.value)}})),n.createElement("div",{className:"p-4"},n.createElement("label",{className:"text-white"},"\u4f4f\u6240"),n.createElement("input",{type:"text",name:"address",onChange:function(e){o(e.target.value)}})),n.createElement("div",{className:"p-4"},n.createElement("label",{className:"text-white"},"\u30a2\u30af\u30bb\u30b9"),n.createElement("input",{type:"text",name:"access",onChange:function(e){E(e.target.value)}})),n.createElement("div",{className:"p-4"},n.createElement("label",{className:"text-white"},"\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u7b49\u306eURL"),n.createElement("input",{type:"text",name:"hpUrl",onChange:function(e){v(e.target.value)}})),n.createElement("div",{className:"p-4"},n.createElement("label",{className:"text-white"},"\u5099\u8003"),n.createElement("input",{type:"text",name:"misc",onChange:function(e){w(e.target.value)}})),n.createElement("button",{onClick:function(e){var t={storeName:a,misc:N,address:m,access:p,hpUrl:f};u.a.post(h,t).then((function(e){k.push("/kyugyo-front")})),e.preventDefault()},className:"btn btn-outline-light"},"\u6295\u7a3f\u3059\u308b")))},w=function(){return n.createElement(n.Fragment,null,n.createElement(N,null))},j=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(h);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),n.createElement("div",{className:"bg-dark pb-5"},n.createElement(p.b,{history:k},n.createElement(d,null),n.createElement("div",{className:"w-100 mx-auto my-4 px-sm-5"},n.createElement(p.c,null,n.createElement(p.a,{exact:!0,path:"/kyugyo-front",render:function(){return n.createElement(f,{kyugyos:a})}}),n.createElement(p.a,{path:"/kyugyo-front/about",render:function(){return n.createElement(g,null)}}),n.createElement(p.a,{path:"/kyugyo-front/post",render:function(){return n.createElement(w,null)}}),n.createElement(p.a,{path:"/kyugyo-front/kyugyos/:id",render:function(e){var t=e.match;return n.createElement(v,{kyugyos:a,match:t})}})),n.createElement(i.a,{to:"/kyugyo-front/about",className:"text-white"},"\u4f11\u696d.com\u306b\u3064\u3044\u3066"))))};r.render(n.createElement(n.StrictMode,null,n.createElement(j,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a6a77787.chunk.js.map