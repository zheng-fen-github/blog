(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BSzn:function(e,t,n){"use strict";var a=n("o0o1"),r=n.n(a),s=n("MX0m"),o=n.n(s),i=n("q1tI"),c=n.n(i),l=c.a.createElement;t.a=function(e){var t=e.id,n=Object(i.useState)(null),a=n[0],s=n[1],u=Object(i.useState)(!1),f=u[0],m=u[1];Object(i.useEffect)((function(){return d(),function(){m(!0),a&&URL.revokeObjectURL(a)}}),[t]);var d=function(){var e,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e="http://zhengfen.top:4040/"+t,o.next=4,r.a.awrap(fetch(e));case 4:if(!(n=o.sent).ok){o.next=10;break}return o.next=8,r.a.awrap(n.blob());case 8:a=o.sent,f||s(a);case 10:o.next=15;break;case 12:o.prev=12,o.t0=o.catch(0),console.log(o.t0);case 15:case"end":return o.stop()}}),null,null,[[0,12]],Promise)};return l(c.a.Fragment,null,a&&l("img",{src:URL.createObjectURL(a),alt:"\u7167\u7247",className:"jsx-3166343992"}),l(o.a,{id:"3166343992"},["img.jsx-3166343992{width:100%;}"]))}},F9Za:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createElement;t.a=function(e){var t=e.color,n=t||"black";return r("div",{className:"anima col-12 px-0"},r("div",{className:"sanjiaoxing first"}),r("div",{className:"sanjiaoxing last"}),r("div",{className:"sanjiaoxing first"}),r("div",{className:"sanjiaoxing last"}),r("div",{className:"sanjiaoxing first"}),r("div",{className:"sanjiaoxing last"}),r("style",null,"\n                .anima {\n                    display:flex;\n                    justify-content:center;\n                }\n                .sanjiaoxing {\n                    display:inline-block;\n                    width:0;\n                    height:0;\n                    border:solid 20px rgba(0,0,0,0);   \n                    border-bottom:solid 20px ".concat(n,";                              \n                }\n                .first {\n                    transform-origin:100% 100%;\n                    animation:go 2s infinite;                         \n                }\n                .last {\n                    transform-origin:0% 100%;\n                    animation:go2 2s infinite;          \n                }\n                @keyframes go {\n                    0% {\n                        transform: rotate(0deg) translateX(0);                   \n                    }\n                    15% {                          \n                        transform: rotate(90deg) translateX(0);                                                \n                    }\n                    45% {\n                        transform: rotate(90deg) translateY(0);                         \n                    }\n                    55% {\n                        transform: rotate(90deg) translateY(50%);                        \n                    }\n                    85% {\n                        transform: rotate(90deg) translateY(50%);                        \n                    }\n                    100% {\n                        transform: rotate(0deg) translateY(0%);  \n                    }\n                }\n                @keyframes go2 {\n                    0% {\n                        transform: rotate(0deg) translateX(0);  \n                    }\n                    15% {                          \n                        transform: rotate(-90deg) translateX(0);                          \n                    }\n                    45% {\n                        transform: rotate(-90deg) translateX(0);                          \n                    }\n                    55% {\n                        transform: rotate(-90deg) translateY(50%);  \n                    }\n                    85% {\n                        transform: rotate(-90deg) translateY(50%);  \n                    }                    \n                    100% {\n                        transform: rotate(0deg) translateY(0%);  \n                    }\n                }\n            ")))}},"I61+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article-list",function(){return n("K0qR")}])},K0qR:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return O}));var a=n("MX0m"),r=n.n(a),s=n("q1tI"),o=n.n(s),i=n("8Kt/"),c=n.n(i),l=n("nOHt"),u=n.n(l),f=n("TW6/"),m=n("o0o1"),d=n.n(m),p=o.a.createElement,x=function(e){var t=e.setState,n=e.setLoad,a=e.setType,o=e.list,i=e.oldState,c=e.setPage,l=Object(s.useRef)(),u=function(e){var t,n,a;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="http://zhengfen.top:4040/addArticle/gotArticle/type/"+e+"?page=1",r.next=4,d.a.awrap(fetch(t));case 4:return n=r.sent,r.next=7,d.a.awrap(n.json());case 7:return a=r.sent,r.abrupt("return",a);case 11:return r.prev=11,r.t0=r.catch(0),console.log(r.t0),r.abrupt("return",{err:r.t0});case 15:case"end":return r.stop()}}),null,null,[[0,11]],Promise)},f=Object(s.useState)(""),m=f[0],x=f[1],h=function(e){return x(e.target.value)},j=Object(s.useState)(!1),g=j[0],v=j[1];return p("div",{className:"jsx-2872888197 row min-nav-ctn m-0"},p("div",{className:"jsx-2872888197 col-12 .col-md-11 min-nav  p-5 pffset-0 "},p("ul",{onClick:function(e){var r,s,o,f;return d.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(m.prev=0,r=e.target.closest("li")){m.next=4;break}return m.abrupt("return");case 4:if((s=l.current)&&s.classList.remove("seled"),"All"!==(o=r.children[0].textContent)){m.next=12;break}return t(i.data),c(i.count),a(null),m.abrupt("return");case 12:return r.classList.add("seled"),l.current=r,t([]),n(!0),m.next=18,d.a.awrap(u(o));case 18:f=m.sent,Array.isArray(f.data)&&(t(f.data),c(f.count),a(o)),n(!1),m.next=27;break;case 23:m.prev=23,m.t0=m.catch(0),m.t0&&console.log(m.t0),console.log("\u5217\u8868\u5143\u7d20\u6837\u5f0f\u5207\u6362\u5931\u8d25");case 27:case"end":return m.stop()}}),null,null,[[0,23]],Promise)},className:"jsx-2872888197 d-flex m-0"},o.map((function(e,t){return p("li",{key:t,className:"jsx-2872888197"},p("h3",{className:"jsx-2872888197"},e))})),p("li",{className:"jsx-2872888197"},p("h3",{className:"jsx-2872888197"},"All")),p("li",{onClick:function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.stopPropagation(),v(!0);case 2:case"end":return t.stop()}}),null,null,null,Promise)},className:"jsx-2872888197"},p("h3",{className:"jsx-2872888197"},p("i",{className:"jsx-2872888197 iconfont icon-search"}))))),p("div",{className:"jsx-2872888197 "+"searchCtn ".concat(g?"openSearchCtn":"")},p("input",{type:"text",value:m,onInput:h,onChange:h,className:"jsx-2872888197"}),p("button",{type:"button",onClick:function(){var e,r,s;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(""!==m){o.next=2;break}return o.abrupt("return");case 2:return e="http://zhengfen.top:4040/addArticle/gotArticle/search/"+m,t([]),n(!0),o.next=7,d.a.awrap(fetch(e));case 7:return r=o.sent,o.next=10,d.a.awrap(r.json());case 10:s=o.sent,t(s.data),c(s.length),a(""),n(!1),console.log(s);case 16:case"end":return o.stop()}}),null,null,null,Promise)},className:"jsx-2872888197"},"\u641c\u7d22"),p("button",{type:"button",onClick:function(){return v(!1)},className:"jsx-2872888197 close-search"},p("svg",{t:"1591706026501",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3269",width:"20",height:"20",className:"jsx-2872888197"},p("path",{d:"M571.7 514.1l164.9-164.9c16.3-16.3 16.3-43.1 0-59.4-16.3-16.3-43.1-16.3-59.4 0L512.3 454.7 347.4 289.8c-16.3-16.3-43.1-16.3-59.4 0-16.3 16.3-16.3 43.1 0 59.4l164.9 164.9L288 679c-16.3 16.3-16.3 43.1 0 59.4 16.3 16.3 43.1 16.3 59.4 0l164.9-164.9 164.9 164.9c16.3 16.3 43.1 16.3 59.4 0 16.3-16.3 16.3-43.1 0-59.4L571.7 514.1z","p-id":"3270",className:"jsx-2872888197"})))),p(r.a,{id:"2872888197"},[".min-nav.jsx-2872888197{color:white;background:black;position:relative;z-index:10;}",".searchCtn.jsx-2872888197{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:aqua;margin:20px auto 0 auto;box-shadow:0 0 6px rgba(0,0,0,0.1);-webkit-transform:translateY(-200%);-ms-transform:translateY(-200%);transform:translateY(-200%);-webkit-transition:0.5s;transition:0.5s;}",".openSearchCtn.jsx-2872888197{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}",".searchCtn.jsx-2872888197 input.jsx-2872888197{-webkit-flex:1;-ms-flex:1;flex:1;font-size:2rem;padding:1rem;border:2px solid black;}",".searchCtn.jsx-2872888197 button.jsx-2872888197{color:white;background-color:black;border:none;padding:1rem 2rem;text-align:center;}",".searchCtn.jsx-2872888197 .close-search.jsx-2872888197{background-color:white;}",".searchCtn.jsx-2872888197 .close-search.jsx-2872888197:hover{background-color:black;}","@media (max-width:960px){.searchCtn.jsx-2872888197 input.jsx-2872888197{font-size:4rem;}.searchCtn.jsx-2872888197{width:80%;}}","ul.jsx-2872888197{list-style:none;}","li.jsx-2872888197{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:0.4s;transition:0.4s;text-align:center;}","li.jsx-2872888197:hover,li.seled.jsx-2872888197{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}","h3.jsx-2872888197{font-size:2.5rem;text-align:center;}","i.jsx-2872888197{font-size:2.5rem;}","i.active.jsx-2872888197{color:#133d93;}","@media (max-width:980px){.min-nav.jsx-2872888197{-webkit-transform:translateY(00%);-ms-transform:translateY(00%);transform:translateY(00%);}}","@media (max-width:1100px){.search-input.jsx-2872888197 input.jsx-2872888197{font-size:1.2rem;}}","@media (max-width:800px){h3.jsx-2872888197{font-size:2rem;}}","@media (max-width:400px){h3.jsx-2872888197{font-size:1rem;}}"]))},h=n("F9Za"),j=n("BSzn"),g=o.a.createElement,v=function(e){for(var t=e.count,n=e.setState,a=e.type,o=1,i=[o];t>10;)t-=10,i.push(++o);var c=Object(s.useRef)();Object(s.useEffect)((function(){var e=document.querySelector(".page");e.classList.add("current"),c.current=e}),[]);var l=function(e){var t,n,r;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t="http://zhengfen.top:4040/"+"".concat(a?"addArticle/gotArticle/type/"+a+"?page=":"addArticle/gotArticleList/")+e,s.next=4,d.a.awrap(fetch(t));case 4:return n=s.sent,s.next=7,d.a.awrap(n.json());case 7:return r=s.sent,s.abrupt("return",r);case 11:return s.prev=11,s.t0=s.catch(0),console.log(s.t0),s.abrupt("return",{err:s.t0});case 15:case"end":return s.stop()}}),null,null,[[0,11]],Promise)};return g("div",{className:"jsx-961374113 col-6 mx-auto mt-5"},g("div",{onClick:function(e){var t,a,r;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if((t=e.target.closest(".page"))&&!t.classList.contains("current")){s.next=3;break}return s.abrupt("return");case 3:return a=+t.children[0].textContent,s.next=6,d.a.awrap(l(a));case 6:r=s.sent,Array.isArray(r.data)&&(n(r.data),c.current.classList.remove("current"),t.classList.add("current"),c.current=t,document.querySelector(".min-nav").scrollIntoView(!0));case 8:case"end":return s.stop()}}),null,null,null,Promise)},className:"jsx-961374113 row justify-content-center"},i.map((function(e,t){return g("div",{key:t,className:"jsx-961374113 col-auto page  mx-2"},g("h2",{className:"jsx-961374113"}," ",e," "))}))),g(r.a,{id:"961374113"},[".page.jsx-961374113{border:solid #4f738d 2px;color:#4f738d;width:60px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}",".page.jsx-961374113:hover,.page.current.jsx-961374113{background:#4f738d;color:white;}","h2.jsx-961374113{font-weight:700;}","@media (max-width:600px){.page.jsx-961374113{width:40px;height:40px;}}"]))},b=o.a.createElement,w=function(e){var t=e.content,n=String(new Date(Number(t.createTime))),a=t.ArticleContent.find((function(e){return"photo"===e.type})),s=a?a.filePath:null;return b("div",{className:"jsx-4228235842 col-12 "},b("div",{className:"jsx-4228235842 row"},b("div",{className:"jsx-4228235842 col-8"},b("h4",{className:"jsx-4228235842 type"},t.ArticleType),b("h3",{className:"jsx-4228235842 title my-5"},b("a",{href:"/article?id="+t._id,target:"_blank",className:"jsx-4228235842"},t.ArticleTitle)),b("h4",{className:"jsx-4228235842 create-time"},n.slice(0,10)+","+n.slice(10,15))),b("div",{className:"jsx-4228235842 col-4"},b("div",{className:"jsx-4228235842 row align-items-center h-100"},b(j.a,{id:"addArticle/gotArticlePhoto/"+s})))),b(r.a,{id:"4228235842"},[".col-12.jsx-4228235842{border-bottom:2px solid #eaeaea;padding-bottom:5rem;}","img.jsx-4228235842{width:100%;}","a.jsx-4228235842{color:#4f738d;}","a.jsx-4228235842:hover{color:#e65e2c;}","h3.jsx-4228235842{font-size:3rem;}","h4.jsx-4228235842{font-size:2rem;margin:1rem 0;color:#878c8b;}"]))},y=function(e){var t=e.setState,n=e.type,a=e.state,s=e.loading,o=e.count;return b("div",{className:"jsx-3390328514 row m-0 article-list-root"},a.map((function(e){return b("div",{key:e._id,className:"jsx-3390328514 col-12 col-md-10 mx-auto my-5"},b(w,{content:e}))})),0===a.length&&b("div",{className:"jsx-3390328514 col-12 col-md-10 mx-auto  my-5 not-article-container"},b("div",{className:"jsx-3390328514 row justify-content-center align-items-center"},s?b(h.a,null):b("h1",{className:"jsx-3390328514 col-auto"}," \u6ca1\u6709\u76f8\u5173\u6587\u7ae0 "))),o>10&&b(v,{type:n,count:o,setState:t}),b(r.a,{id:"3390328514"},[".not-article-container.jsx-3390328514 .row.jsx-3390328514{height:50vh;}"]))},N=o.a.createElement,k=function(){var e=Object(s.useState)(!1),t=e[0],n=e[1];return Object(s.useEffect)((function(){window.innerHeight>document.documentElement.offsetHeight&&n(!0)}),[]),N("footer",{className:"jsx-3239006060 "+"row mx-0 p-0 ".concat(t?"bottom":"")},N("div",{className:"jsx-3239006060 col-12 py-5 mx-0 text-center"},N("h3",{className:"jsx-3239006060"},"2020 Have a good night")),N(r.a,{id:"3239006060"},["footer.jsx-3239006060{background:#326fa0;color:white;margin-top:10%;width:100%;padding-bottom:20vh;}",".bottom.jsx-3239006060{position:fixed;bottom:0;left:0;z-index:100;}","h3.jsx-3239006060{font-size:2rem;}"]))},S=o.a.createElement,O=!0;t.default=function(e){var t=e.data,n=e.list,a=e.count;Object(s.useEffect)((function(){t||u.a.push("/500")}),[]);var i=Object(s.useState)(!1),l=i[0],m=i[1];u.a.events.on("routeChangeStart",(function(){m(!0)}));var d,p,h,j=Object(s.useState)(t),g=j[0],v=j[1],b=Object(s.useState)({data:t,count:a}),w=b[0],N=(b[1],Object(s.useState)(!1)),O=N[0],C=N[1],z=Object(s.useState)(a),P=z[0],E=z[1],A=Object(s.useState)(null),L=A[0],Y=A[1];return S(o.a.Fragment,null,S(c.a,null,S("title",{className:"jsx-2182261789"},"Article"),S("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous",className:"jsx-2182261789"}),S("link",{rel:"stylesheet",href:"//at.alicdn.com/t/font_1748919_piihixc593j.css",className:"jsx-2182261789"}),S("link",{rel:"icon",href:"/logo.jpg",type:"image/x-icon",className:"jsx-2182261789"})),S("div",{className:"jsx-2182261789 container-fluid"},S("nav",{className:"jsx-2182261789 row mx-0"},S("div",{className:"jsx-2182261789 col-12 px-0"},S(f.a,null,S("img",{src:"article-list-bg.jpg",alt:"bg",className:"jsx-2182261789"})))),S(x,(h=E,(p="setPage")in(d={setState:v,setType:Y,setPage:E,setLoad:C,list:n,oldState:w})?Object.defineProperty(d,p,{value:h,enumerable:!0,configurable:!0,writable:!0}):d[p]=h,d)),S(y,{state:g,type:L,setState:v,loading:O,count:P}),S(k,null),l&&S("div",{className:"jsx-2182261789 loadAnima"}," ")),S(r.a,{id:"2182261789"},["*,body{margin:0;padding:0;box-sizing:border-box;}","img{width:100%;height:auto;}","html{font-size:10px;}",".container-fluid{padding:0;overflow-x:hidden;}","@media (max-width:600px){html{font-size:6px;}}","@media (max-width:400px){html{font-size:5px;}}"]))}},"TW6/":function(e,t,n){"use strict";var a=n("MX0m"),r=n.n(a),s=n("q1tI"),o=n.n(s),i=n("YFqc"),c=n.n(i),l=n("nOHt"),u=o.a.createElement;t.a=function(e){var t=Object(l.useRouter)().asPath,n=Object(s.useState)(t)[0];return u("div",{className:"jsx-211519462 nav row mx-0"},u("div",{className:"jsx-211519462 col-12 px-0 img-ctn"},e.children),u("div",{className:"jsx-211519462 content col-12 mx-0"},u("div",{className:"jsx-211519462 min-nav row align-items-center justify-content-center"},u("div",{className:"jsx-211519462 col-12 col-sm-10 "},u("ul",{className:"jsx-211519462 d-flex row justify-content-center"},u("li",{className:"jsx-211519462 "+(("/"==n?"liSeled":null)||"")},u(c.a,{href:"/"},u("h3",{className:"jsx-211519462"},"Home"))),u("li",{className:"jsx-211519462 "+(("/photo"==n?"liSeled":null)||"")},u(c.a,{href:"/photo"},u("h3",{className:"jsx-211519462"},"Photo"))),u("li",{className:"jsx-211519462 "+(("/article-list"==n?"liSeled":null)||"")},u(c.a,{href:"/article-list"},u("h3",{className:"jsx-211519462"},"Article"))),u("li",{className:"jsx-211519462 "+(("/component"==n?"liSeled":null)||"")},u(c.a,{href:"/component"},u("h3",{className:"jsx-211519462"},"Component")))))),e.title),u(r.a,{id:"211519462"},[".nav.jsx-211519462{position:relative;}",".img-ctn.jsx-211519462{z-index:999;}",".content.jsx-211519462{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1000;}",".min-nav.jsx-211519462{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}","ul.jsx-211519462{width:100%;list-style:none;margin:0;z-index:1000;}","li.jsx-211519462{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;z-index:1000;}","li.jsx-211519462:hover,.liSeled.jsx-211519462{background:rgba(255,255,255,0.3);}","@media (max-width:960px){.min-nav.jsx-211519462>div.jsx-211519462{margin:2rem;}}","@media (max-width:360px){li.jsx-211519462{margin:0.4rem;}}"]))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),s=n("a1gu"),o=n("Nsbk"),i=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,m=u(n("q1tI")),d=n("QmWs"),p=n("g/15"),x=l(n("nOHt"));function h(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var j=new Map,g=window.IntersectionObserver,v={};function b(){return f||(g?f=new g((function(e){e.forEach((function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),j.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){i(l,e);var t,n=(t=l,function(){var e,n=o(t);if(c()){var a=o(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return s(this,e)});function l(e){var t;return a(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,a=null;return function(r,s){if(a&&r===t&&s===n)return a;var o=e(r,s);return t=r,n=s,a=o,o}}((function(e,t){return{href:h(e),as:t?h(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),o=s.href,i=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,d.resolve)(c,o),i=i?(0,d.resolve)(c,i):o,e.preventDefault();var l=t.props.scroll;null==l&&(l=i.indexOf("#")<0),x.default[t.props.replace?"replace":"push"](o,i,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return r(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,r=(0,d.resolve)(e,n);return[r,a?(0,d.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),j.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}j.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();x.default.prefetch(t[0],t[1],e).catch((function(e){0})),v[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var s=m.Children.only(t),o={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(o.href=r||a),m.default.cloneElement(s,o)}}]),l}(m.Component);t.default=w}},[["I61+",0,2,1,3,4]]]);