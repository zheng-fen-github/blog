(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KQm4:function(e,t,s){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.d(t,"a",(function(){return n}))},O2ls:function(e,t,s){"use strict";s.r(t);var n=s("MX0m"),a=s.n(n),o=s("q1tI"),r=s.n(o),i=s("8Kt/"),c=s.n(i),l=s("o0o1"),m=s.n(l),d=r.a.createElement;var u=function(e){var t=e.color,s=e.size,n=t||"#72BDE8";return d("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" content"},d("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" one"}),d("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" two"}),d("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" three"}),d(a.a,{id:"3746841954",dynamic:[s,s,n]},[".content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:".concat(s,"px;height:").concat(s,"px;border-radius:20px;background:").concat(n,";margin:0 6px;}"),".one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}",".two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}",".three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}","@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}"]))},x=r.a.createElement,f=function(e){var t=e.openEvent;Object(o.useEffect)((function(){var e=localStorage.getItem("user-account");e&&(document.querySelector("input[name='account']").value=e,document.querySelector("input[name='password']").focus())}),[]);var s=Object(o.useState)(!1),n=s[0],r=s[1];return x("div",{className:"jsx-1676328697 row m-0"},x("div",{className:"jsx-1676328697 main-root shadow-sm"},x("div",{className:"jsx-1676328697 row"},x("div",{className:"jsx-1676328697 animation col-12 d-flex align-items-center justify-content-center "},n?x(u,{color:"#97cad9"}):x("i",{className:"jsx-1676328697 iconfont icon-suo"})),x("form",{onSubmit:function(e){var s,n,a;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),s=new FormData(e.target),r(!0),o.prev=3,"http://localhost:4040/login",o.next=7,m.a.awrap(fetch("http://localhost:4040/login",{method:"POST",body:s}));case 7:return n=o.sent,o.next=10,m.a.awrap(n.json());case 10:a=o.sent,n.ok?(localStorage.setItem("user-account",s.get("account")),document.documentElement.style.background="#f7f7f7",t(a)):(r(!1),alert(a)),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(3),console.log(o.t0);case 17:case"end":return o.stop()}}),null,null,[[3,14]],Promise)},className:"jsx-1676328697 form-root col-12"},x("h1",{className:"jsx-1676328697 title my-5"},"Login"),x("label",{htmlFor:"account",className:"jsx-1676328697 col-12 h3 my-4"},"Account"),x("input",{type:"text",name:"account",id:"account",autoFocus:!0,required:!0,className:"jsx-1676328697 w-100"}),x("label",{htmlFor:"password",className:"jsx-1676328697 col-12 h3 my-4"},"Password"),x("input",{type:"password",name:"password",id:"password",required:!0,className:"jsx-1676328697 w-100"}),x("button",{type:"submit",className:"jsx-1676328697 my-5 h2 shadow-sm"},"LOGIN")))),x(a.a,{id:"1676328697"},[".main-root.jsx-1676328697{width:480px;position:fixed;top:50%;left:50%;border-radius:20px;overflow:hidden;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:white;}",".animation.jsx-1676328697{height:200px;background:#fafeff;}",".form-root.jsx-1676328697{padding:10%;padding-top:0;}","i.jsx-1676328697{font-size:60px;color:#97cad9;}","input.jsx-1676328697{font-size:3rem;border-radius:20px;border:solid #e5e5e5 2px;padding:1rem;}","label.jsx-1676328697{margin:0;padding:0;color:#d5d6d9;}","button.jsx-1676328697{width:100%;padding:1rem;font-size:3rem;background:#f3fcfe;border:none;color:#97cad9;font-weight:700;border-radius:10px;-webkit-transition:0.2s;transition:0.2s;}","button.jsx-1676328697:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}","h1.jsx-1676328697{color:#97cad9;}"]))},p=r.a.createElement,b=function(e){var t=e.list,s=e.setList,n=Object(o.useRef)(),r=Object(o.useState)(t[0].typeName),i=r[0],c=r[1];Object(o.useEffect)((function(){setTimeout((function(){var e=document.querySelector(".nav .nav-item");e.classList.add("seled"),n.current=e}),200)}),[]);return p("div",{className:"jsx-3310359532 nav row"},p("div",{className:"jsx-3310359532 col-8 m-auto"},p("ul",{className:"jsx-3310359532 row justify-content-center"},p("li",{className:"jsx-3310359532 col-12 title text-center"},p("h1",{className:"jsx-3310359532 component-code-typeName"},i)),t.map((function(e){return p("li",{key:e._id,onClick:function(t){return function(e,t){try{var a=t.target.closest("li");if(!a)return;n.current.classList.remove("seled"),a.classList.add("seled"),n.current=a,c((function(){return a.children[0].textContent})),s(e.typeList)}catch(o){o&&console.log(o)}}(e,t)},className:"jsx-3310359532 col-10 nav-item text-center"},p("h3",{className:"jsx-3310359532"},e.typeName))})))),p(a.a,{id:"3310359532"},[".nav.jsx-3310359532{background:white;}","ul.jsx-3310359532{list-style:none;}","li.jsx-3310359532{padding:2rem;margin:0;-webkit-transition:.4s;transition:.4s;cursor:pointer;margin:4px 0;}","li.seled.jsx-3310359532,li.jsx-3310359532:hover{background:#4b30c3;color:white;}"]))},j=s("KQm4"),h=r.a.createElement,w=function(e){var t=e.selectList,s=Object(o.useState)(""),n=s[0],r=s[1],i=Object(o.useState)([]),c=i[0],l=i[1];Object(o.useEffect)((function(){l(t)}),[t]);var m;return h("div",{className:"jsx-1594687254 row sort ml-4"},h("select",{name:"simple  col-12",ref:function(e){return m=e},className:"jsx-1594687254 component-sort-name"},c&&c.map((function(e,t){return h("option",{value:e,key:t,className:"jsx-1594687254"},e)}))),h("div",{className:"jsx-1594687254 col-12 sortInput px-0"},h("input",{type:"text",name:"sortItem",id:"sortItem",value:n,onChange:function(e){return r(e.target.value)},onInput:function(e){return r(e.target.value)},className:"jsx-1594687254  mt-3"})),h("div",{className:"jsx-1594687254 col-12 px-0 mt-3"},h("button",{onClick:function(){if(""!==n){l((function(e){return[].concat(Object(j.a)(e),[n])})),r("");var e=m;setTimeout((function(){e.value=n}),[100])}},className:"jsx-1594687254"},"Add")),h(a.a,{id:"1594687254"},["select.jsx-1594687254{border:none;width:100%;text-align:center;padding:1rem;font-size:2rem;font-weight:600;}","option.jsx-1594687254{padding:0.5rem;}","input.jsx-1594687254{width:100%;border:none;padding:0.5rem;font-size:2rem;}","button.jsx-1594687254{width:100%;border:none;background:#4b30c3;color:white;padding:0.5rem;font-size:2rem;}"]))},g=r.a.createElement,k=function(){var e=Object(o.useState)(null),t=e[0],s=e[1];return g("div",{className:"jsx-2525806831 col-10 mt-5"},!t&&g("div",{onClick:function(e){e.target.nextElementSibling.click()},className:"jsx-2525806831 load-photo row"}),g("input",{type:"file",name:"photoFile",onChange:function(e){var t=e.target.files[0];try{var n=URL.createObjectURL(t);s(n)}catch(a){console.log(a)}},className:"jsx-2525806831 d-none"}),t&&g("img",{src:t,alt:"code-photo",onDoubleClick:function(e){s(""),e.target.previousElementSibling.value=""},className:"jsx-2525806831"}),g(a.a,{id:"2525806831"},[".load-photo.jsx-2525806831{height:400px;background:#4b30c3;}","img.jsx-2525806831{width:100%;}"]))},y=r.a.createElement,v=function(){Object(o.useEffect)((function(){e()}),[]);var e=function(){var e,t;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return"http://localhost:4040/getComponentList/all",s.next=3,m.a.awrap(fetch("http://localhost:4040/getComponentList/all"));case 3:if(!(e=s.sent).ok){s.next=10;break}return s.next=7,m.a.awrap(e.json());case 7:t=s.sent,i(t),n(t[0].typeList);case 10:case"end":return s.stop()}}),null,null,null,Promise)},t=Object(o.useState)([]),s=t[0],n=t[1],a=Object(o.useState)([]),r=a[0],i=a[1];return y("div",{className:"left-root row justify-content-center"},y("div",{className:"col-6"},r.length>0&&y(b,{list:r,setList:function(e){Array.isArray(e)&&n(e)}})),y("div",{className:"col-4"},y(w,{selectList:s})),y(k,null))},N=r.a.createElement,_=function(e){var t=e.restEvent;return N("form",{onSubmit:function(e){var s,n,a,o,r;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.preventDefault(),s=new FormData(e.target),n=document.querySelector(".component-code-typeName").textContent,a=document.querySelector(".component-sort-name").value,n||a){i.next=6;break}return i.abrupt("return");case 6:return s.append("type",a),i.prev=7,o=document.querySelector('input[name="photoFile"]'),s.append("photoFile",o.files[0]),r="http://localhost:4040/addComponent/"+n,i.next=13,m.a.awrap(fetch(r,{method:"POST",body:s}));case 13:i.sent.ok?t(1):alert("\u6dfb\u52a0\u5931\u8d25"),i.next=20;break;case 17:i.prev=17,i.t0=i.catch(7),console.log(i.t0);case 20:case"end":return i.stop()}}),null,null,[[7,17]],Promise)},className:"jsx-2080292355 row px-0"},N("textarea",{name:"code",id:"code",required:!0,className:"jsx-2080292355 col-10 mx-auto"}),N("input",{type:"text",name:"codeTitle",placeholder:"\u6807\u9898",required:!0,className:"jsx-2080292355 col-6 mx-auto mt-5 text-center"}),N("div",{className:"jsx-2080292355 col-12 mt-5"},N("div",{className:"jsx-2080292355 row justify-content-center"},N("button",{type:"submit  col-auto",className:"jsx-2080292355"},"Commit"))),N(a.a,{id:"2080292355"},["textarea.jsx-2080292355{height:600px;font-size:2rem;font-weight:600;padding:2rem;}","input.jsx-2080292355{padding:1rem 2rem;font-weight:600;font-size:2rem;}","button.jsx-2080292355{border:none;background:#4b30c3;color:white;padding:1rem 2rem;font-weight:600;font-size:2rem;}"]))},E=r.a.createElement,S=function(e){var t=e.rest;return E("div",{className:"jsx-2967817067 add-component-new-root row align-items-center"},E("div",{className:"jsx-2967817067 col-4"},E(v,null)),E("div",{className:"jsx-2967817067 col-8"},E(_,{restEvent:t})),E(a.a,{id:"2967817067"},[".add-component-new-root.jsx-2967817067{position:fixed;width:100%;top:0;right:0;left:0;bottom:0;-webkit-animation:show-jsx-2967817067 1s 1;animation:show-jsx-2967817067 1s 1;background-image:url('greed.jpg');background-size:cover;}","@-webkit-keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"]))},O=r.a.createElement,z=function(e){var t,s=e.setSrc,n=Object(o.useState)(""),r=n[0],i=n[1],c=function(e){i(e.target.value)};return O("div",{className:"jsx-2392000649 row align-content-between h-100"},O("div",{className:"jsx-2392000649 col-12 title d-flex align-items-center p-0"},O("input",{type:"text",name:"photoTitle",placeholder:"title",id:"photoTitle",className:"jsx-2392000649 m-0 p-0 pb-2 text-center"})),O("div",{className:"jsx-2392000649 filebu col-12 p-0"},O("div",{className:"jsx-2392000649 row justify-content-between p-0 m-0 my-5"},O("input",{type:"text",name:"fileName",value:r,onChange:c,onInput:c,id:"fileName",className:"jsx-2392000649 col px-4 py-2"}),O("button",{onClick:function(e){e.preventDefault(),t.click()},className:"jsx-2392000649 col-4 offset-1"},"Load Photo")),O("div",{className:"jsx-2392000649 row justify-content-between p-0 m-0 my-5"},O("input",{type:"text",name:"linkUrl",id:"linkUrl",className:"jsx-2392000649 col px-4 py-2"}),O("button",{onClick:function(e){e.preventDefault(),e.target.previousElementSibling.value=""},className:"jsx-2392000649 col-4 offset-1"},"Clear Link"))),O("input",{type:"file",ref:function(e){return t=e},onChange:function(e){var t=e.target.files[0];try{var n=URL.createObjectURL(t);i(t.name),s(n)}catch(a){console.log(a)}},name:"photofile",id:"photofile",className:"jsx-2392000649 d-none"}),O(a.a,{id:"2392000649"},["input[name='file-text-title'].jsx-2392000649{width:60%;border:none;border-bottom:solid 2px white;}",".title.jsx-2392000649{height:50%;}",".gongneng.jsx-2392000649{height:50%;}","input.jsx-2392000649{background:none;border:solid 2px white;color:black;font-size:3rem;}",".filebu.jsx-2392000649 input.jsx-2392000649{border-radius:6px;}","button.jsx-2392000649{background:white;border:none;font-size:2rem;font-weight:600;padding:0 1.2rem;border-radius:6px;-webkit-transition:background .4s;transition:background .4s;}","button.jsx-2392000649:hover{padding:0 1rem;background:none;border:solid 2px white;color:white;}"]))},C=r.a.createElement,L=function(e){var t=e.file,s=e.clear;return C("div",{className:"jsx-2132967920 col-auto h-100 p-0 position-relative"},C("div",{className:"jsx-2132967920 photo-root"},C("div",{className:"jsx-2132967920 photo-bg"},t&&C("img",{src:t,alt:"newPhoto",className:"jsx-2132967920"}))),C("div",{className:"jsx-2132967920 gongneng-root justify-content-around"},C("div",{className:"jsx-2132967920 delete-photo"},C("i",{onClick:function(){return s()},className:"jsx-2132967920 iconfont icon-trash-"})),C("div",{className:"jsx-2132967920 upload-photo"},C("button",{type:"submit",className:"jsx-2132967920"},C("i",{className:"jsx-2132967920 iconfont icon-cloud-upload"})))),C(a.a,{id:"2132967920"},["img.jsx-2132967920{width:100%;}","button.jsx-2132967920{background:none;border:none;}",".gongneng-root.jsx-2132967920{width:100%;height:100px;position:absolute;bottom:-100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".delete-photo.jsx-2132967920,.upload-photo.jsx-2132967920{height:60px;width:60px;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.4s;transition:.4s;cursor:pointer;}",".delete-photo.jsx-2132967920:hover,.upload-photo.jsx-2132967920:hover{border:solid 2px white;}",".delete-photo.jsx-2132967920:hover>i.jsx-2132967920,.upload-photo.jsx-2132967920:hover i.jsx-2132967920{font-size:40px;}","i.jsx-2132967920{color:white;font-size:20px;-webkit-transition:.2s;transition:.2s;}",".photo-root.jsx-2132967920{width:600px;height:600px;background:white;padding:50px;}",".photo-bg.jsx-2132967920{width:500px;height:500px;background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;}",".photo-bg.jsx-2132967920::-webkit-scrollbar{display:none;}"]))},F=r.a.createElement,P=function(e){var t=e.rest,s=Object(o.useState)(""),n=s[0],i=s[1];return F(r.a.Fragment,null,F("form",{onSubmit:function(e){var s,n,a;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),console.log(e.target.tagName),s=new FormData(e.target),o.prev=3,"http://localhost:4040/addPhoto/photo",o.next=7,m.a.awrap(fetch("http://localhost:4040/addPhoto/photo",{method:"POST",body:s}));case 7:return n=o.sent,o.next=10,m.a.awrap(n.json());case 10:a=o.sent,n.ok?t(3):console.log(a),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(3),console.log(o.t0);case 17:case"end":return o.stop()}}),null,null,[[3,14]],Promise)},className:"jsx-4081032174"},F("div",{className:"jsx-4081032174  row justify-content-center photo-main-root"},F("div",{className:"jsx-4081032174 col-9"},F("div",{className:"jsx-4081032174 row"},F(L,{file:n,clear:function(){return i(null)}}),F("div",{className:"jsx-4081032174 col offset-1"},F(z,{setSrc:i})))))),F(a.a,{id:"4081032174"},[".photo-main-root.jsx-4081032174{margin:0;width:100%;background:#85c0d2;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-4081032174 1s 1;animation:show-jsx-4081032174 1s 1;}","@-webkit-keyframes show-jsx-4081032174{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes show-jsx-4081032174{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"]))},I=r.a.createElement,T=function(){return I("div",{className:"jsx-1564866248 col-4 show"},I("div",{className:"jsx-1564866248 row h-100 justify-content-center align-items-center"},I("div",{className:"jsx-1564866248 show-logo d-flex justify-content-center align-items-center"},I("i",{className:"jsx-1564866248 iconfont icon-video"}))),I(a.a,{id:"1564866248"},[".show.jsx-1564866248{background:black;height:660px;border-radius:20px 0 0 20px;position:relative;}",".show.jsx-1564866248::after{content:'';position:absolute;right:-20px;top:0;bottom:0;left:80%;background:black;}",".show-logo.jsx-1564866248{height:180px;width:180px;background:#4b4b4b;border-radius:20px;}","i.jsx-1564866248{color:white;font-size:90px;}"]))},q=r.a.createElement,D=function(){return q("div",{className:"jsx-602073891 col-4 show"},q(X,null),q("div",{className:"jsx-602073891 row h-100 flex-column justify-content-center align-items-center"},q("div",{className:"jsx-602073891 show-logo d-flex justify-content-center align-items-center"},q("i",{className:"jsx-602073891 iconfont icon-cloud-upload"})),q("h1",{className:"jsx-602073891 my-5"},"Upload a New Video"),q("button",{className:"jsx-602073891"},"Upload a File")),q(a.a,{id:"602073891"},[".show.jsx-602073891{background:white;height:660px;border-radius:20px;position:relative;overflow:hidden;}",".show-logo.jsx-602073891{height:120px;width:120px;background:#e9e9eb;border-radius:20px;}","i.jsx-602073891{color:#9192a4;font-size:90px;}","button.jsx-602073891{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}","button.jsx-602073891:hover{color:black;border:2px solid black;background:none;}"]))},X=function(){return q("div",{className:"jsx-2896574129 col-12 form-root shadow"},q("div",{className:"jsx-2896574129 row h-100 justify-content-center align-content-center"},q("label",{htmlFor:"title",className:"jsx-2896574129 h1 my-4 col-10"},"Video Title"),q("input",{type:"text",name:"title",id:"title",className:"jsx-2896574129 col-10"}),q("label",{htmlFor:"title",className:"jsx-2896574129 h2 my-5 col-10"},"Video Introduction"),q("textarea",{name:"Introduction",id:"Introduction",className:"jsx-2896574129  col-10"}),q("button",{className:"jsx-2896574129 mt-5"},"Upload a File")),q(a.a,{id:"2896574129"},[".form-root.jsx-2896574129{position:absolute;right:0;top:0;bottom:0;left:0;background:white;z-index:3;border-radius:20px;-webkit-transition:.4s;transition:.4s;-webkit-transform:translateX(110%);-ms-transform:translateX(110%);transform:translateX(110%);}","input.jsx-2896574129{font-size:3rem;border-radius:12px;border:solid black 2px;padding:1rem;}","textarea.jsx-2896574129{height:200px;border:solid 2px black;border-radius:12px;font-size:2rem;padding:2rem;}","button.jsx-2896574129{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}","button.jsx-2896574129:hover{color:black;border:2px solid black;background:none;}"]))},A=r.a.createElement,U=function(){return Object(o.useEffect)((function(){}),[]),A(r.a.Fragment,null,A("div",{className:"jsx-1426833608 video-root row justify-content-center"},A(T,null),A(D,null)),A(a.a,{id:"1426833608"},["html.jsx-1426833608{font-size:10px;background:#334a52;}",".video-root.jsx-1426833608{margin:0;width:100%;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-1426833608 1s 1;animation:show-jsx-1426833608 1s 1;}","@-webkit-keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}","@keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}"]))},V=r.a.createElement,Y=function(e){var t=e.selectEv;return V("ul",{onClick:function(e){var s=e.target.closest("li").children[0].textContent;t("Component"===s?1:"Video"===s?2:"Photo"===s&&3)},className:"jsx-3163982633 col-4 sidebar  m-0 p-0"},V("div",{className:"jsx-3163982633 row justify-content-center px-2"},V("li",{className:"jsx-3163982633 col p-4 "},V("h2",{className:"jsx-3163982633 text-center"},"Component")),V("li",{className:"jsx-3163982633 col p-4 "},V("h2",{className:"jsx-3163982633 text-center"},"Video")),V("li",{className:"jsx-3163982633 col p-4 "},V("h2",{className:"jsx-3163982633 text-center"},"Photo"))),V(a.a,{id:"3163982633"},[".sidebar.jsx-3163982633{background:#85c0d2;position:fixed;left:50%;top:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-animation:show-jsx-3163982633 1s 1;animation:show-jsx-3163982633 1s 1;}","@-webkit-keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}","@keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}","ul.jsx-3163982633{list-style:none;color:white;overflow:hidden;}","li.jsx-3163982633{cursor:pointer;}","li.jsx-3163982633:hover{background:#589baf;}"]))},R=r.a.createElement;t.default=function(){var e=Object(o.useState)(""),t=(e[0],e[1]),s=Object(o.useState)(0),n=s[0],i=s[1],l=function(e){i((function(){return 5})),i((function(){return e}))};return R(r.a.Fragment,null,R(c.a,null,R("title",{className:"jsx-1325390890"},"\u540e\u53f0"),R("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous",className:"jsx-1325390890"}),R("link",{rel:"stylesheet",href:"//at.alicdn.com/t/font_1748919_7p01375xskx.css",className:"jsx-1325390890"})),R("div",{className:"jsx-1325390890 container-fluid"},0===n&&R(f,{openEvent:function(e){t(e),i(1)}}),1===n&&R(S,{rest:l}),2===n&&R(U,null),3===n&&R(P,{rest:l}),n>0&&R(Y,{selectEv:function(e){if(!1!==e){var t=3===e?"#85c0d2":2===e?"#334a52":"#f7f7f7";document.documentElement.style.background=t,e!==n&&i(e)}}})),R(a.a,{id:"1325390890"},["*,body{margin:0;padding:0;box-sizing:border-box;}","html{font-size:10px;background:#f7f7f7;background:#383636;-webkit-transition:0.5s;transition:0.5s;}",".container-fluid{padding:0;}"]))}},u6Hu:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s("O2ls")}])}},[["u6Hu",0,2,1,3]]]);