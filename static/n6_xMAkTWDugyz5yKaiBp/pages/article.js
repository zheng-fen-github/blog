(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8oUA":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article",function(){return n("HvHe")}])},BSzn:function(e,t,n){"use strict";var s=n("o0o1"),a=n.n(s),o=n("MX0m"),r=n.n(o),i=n("q1tI"),c=n.n(i),l=c.a.createElement;t.a=function(e){var t=e.id,n=Object(i.useState)(null),s=n[0],o=n[1],m=Object(i.useState)(!1),u=m[0],f=m[1];Object(i.useEffect)((function(){return d(),function(){f(!0),s&&URL.revokeObjectURL(s)}}),[t]);var d=function(){var e,n,s;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="http://localhost:4040/"+t,r.next=4,a.a.awrap(fetch(e));case 4:if(!(n=r.sent).ok){r.next=10;break}return r.next=8,a.a.awrap(n.blob());case 8:s=r.sent,u||o(s);case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0);case 15:case"end":return r.stop()}}),null,null,[[0,12]],Promise)};return l(c.a.Fragment,null,s&&l("img",{src:URL.createObjectURL(s),alt:"\u7167\u7247",className:"jsx-3166343992"}),l(r.a,{id:"3166343992"},["img.jsx-3166343992{width:100%;}"]))}},HvHe:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return S}));var s=n("MX0m"),a=n.n(s),o=n("q1tI"),r=n.n(o),i=n("8Kt/"),c=n.n(i),l=n("nOHt"),m=n.n(l),u=n("TW6/"),f=n("BSzn"),d=r.a.createElement,h=function(e){var t=e.ArticleAuthor,n=e.ArticleTitle,s=e.ArticleAuthorPhoto,o=e.createTime,r=e.comment,i=String(new Date(Number(o))).slice(0,15);return d("div",{className:"jsx-1553952906 row author mx-0"},d("div",{className:"jsx-1553952906 col-10 offset-1"},d("div",{className:"jsx-1553952906 row"},d("div",{className:"jsx-1553952906 col-12 col-ls-6"},d("h3",{className:"jsx-1553952906 my-5"},"AUTHOR"),d("div",{className:"jsx-1553952906 author-message d-flex align-items-around"},d("div",{className:"jsx-1553952906 author-photo-cts"},d(f.a,{id:"addArticle/gotArticlePhoto/"+s})),d("div",{className:"jsx-1553952906 message ml-4 d-flex flex-column justify-content-around"},d("h2",{className:"jsx-1553952906"},t),d("h3",{className:"jsx-1553952906 "},n)))),d("div",{className:"jsx-1553952906 col-6 col-ls-3 "},d("h3",{className:"jsx-1553952906 my-0 mt-5 my-ls-5 mt-ls-0"},"PUBLISHED"),d("h2",{className:"jsx-1553952906 "},d("i",{className:"jsx-1553952906"}),i)),d("div",{className:"jsx-1553952906 col-6 col-ls-3"},d("h3",{className:"jsx-1553952906 my-0 mt-5 my-ls-5 mt-ls-0"},"CINNEBTS"),d("h2",{className:"jsx-1553952906"},d("i",{className:"jsx-1553952906"}),r.length," comments")))),d(a.a,{id:"1553952906"},[".author.jsx-1553952906{margin-top:10rem;padding-bottom:8rem;border-bottom:2px solid #eaeaea;}",".author-photo-cts.jsx-1553952906{height:80px;width:80px;}","@media (max-width:860px){.message.jsx-1553952906 h3.jsx-1553952906{line-height:1.1;}.author.jsx-1553952906{margin-top:4rem;}}"]))},p=r.a.createElement,x=function(e){var t=e.content,n=Object(o.useState)(!1),s=n[0],i=n[1];Object(o.useEffect)((function(){return i(!0)}),[]);return p("div",{className:"jsx-2470536694 row Content mx-0 justify-content-center"},p("div",{className:"jsx-2470536694 col-10 col-ls-6 "},t.map((function(e){return"text"===e.type?p("div",{key:e.key,className:"jsx-2470536694 row content-item"},p("h3",{className:"jsx-2470536694"},e.value)):p(r.a.Fragment,{key:e.key},p("div",{className:"jsx-2470536694 row content-item-title justify-content-center"},p("h3",{className:"jsx-2470536694 title "},e.title)),p("div",{className:"jsx-2470536694 row photo"},p(f.a,{id:"addArticle/gotArticlePhoto/"+e.filePath})))})),p("div",{className:"jsx-2470536694 row align-items-center"},p("h2",{className:"jsx-2470536694"},"Share"),p("h3",{style:{left:"-10000px"},className:"jsx-2470536694 share-dom position-fixed"},s&&window.origin+window.history.state.url),p("div",{className:"jsx-2470536694"},p("i",{onClick:function(){var e=document.querySelector(".share-dom");if(e){var t=new Range;t.setStart(e,0),t.setEnd(e,1),document.getSelection().removeAllRanges(),document.getSelection().addRange(t),document.execCommand("Copy"),document.getSelection().removeAllRanges(),alert("\u590d\u5236\u6210\u529f")}},className:"jsx-2470536694 iconfont mx-4 icon-attach"})))),p(a.a,{id:"2470536694"},[".Content.jsx-2470536694{margin-top:10rem;border-bottom:2px solid #eaeaea;}",".content-item.jsx-2470536694{margin-bottom:5rem;}",".content-item-title.jsx-2470536694{margin-bottom:3rem;}","h2.jsx-2470536694{font-size:3rem;line-height:2;}","h3.jsx-2470536694{font-size:2.5rem;line-height:2;}","i.jsx-2470536694{color:white;font-size:2rem;padding:0.5rem;background:#3a5999;border-radius:50%;cursor:pointer;}",".title.jsx-2470536694{font-size:4rem;font-weight:700;}",".photo.jsx-2470536694{margin-bottom:3rem;}"]))},j=r.a.createElement,g=function(e){var t=e.message,n=e.linkList;return j("div",{className:"row about m-0 p-0 justify-content-center"},j("div",{className:"col-10 col-ls-6 "},j("div",{className:"row"},j("div",{className:"col-12"},j("h3",{className:"my-4"},"ABOUT ARTICLE")),j("div",{className:"col-12"},j("h4",null,t)),j("div",{className:"col-12"},j("div",{className:"row"},n.map((function(e,t){return j("h5",{className:"my-4 col-auto",key:t},j("a",{href:e.link,target:"_blank"},e.linkTitle))})))))),j("style",null,"\n                .about {\n                    border-bottom:2px solid #eaeaea;\n                    padding:10rem 0;\n                }\n                h3 {\n                   font-size:2.5rem;\n                   line-height:2;\n               }\n               h4 {\n                   font-size:2rem;\n                   line-height:1.5;\n               }\n               h5 {\n                   cursor:pointer;\n                   font-size:1.8rem;\n                   color:#7bbcfc;\n                   line-height:1.5;\n               }\n            "))},v=n("o0o1"),b=n.n(v),N=r.a.createElement,w=function(e){var t=e.message,n=e.id;Object(o.useEffect)((function(){var e=localStorage.getItem("user-id"),t=localStorage.getItem("user-name");e||(console.log("one"),e="youke"+Date.now(),localStorage.setItem("user-id",e)),t||(console.log("one"),t="\u6e38\u5ba2"+String(Date.now()).slice(-5),localStorage.setItem("user-name",t)),i(t)}),[]);var s=Object(o.useState)(null),r=s[0],i=s[1],c=function(e){var t=e.target.value;i(t),localStorage.setItem("user-name",r)},l=Object(o.useState)(t.slice(0,3)),m=l[0],u=l[1],f=m.map((function(e){return N("div",{className:"col-12",key:e.createTime},N("div",{className:"row"},N("h3",null,e.username+" : "+e.message)))}));return N("form",{onSubmit:function(e){var t,s,a,o;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.preventDefault(),t=new FormData(e.target),s="http://localhost:4040/addArticle/articleComment/"+n,r.next=6,b.a.awrap(fetch(s,{method:"POST",body:t}));case 6:if(!(a=r.sent).ok){r.next=14;break}return r.next=10,b.a.awrap(a.json());case 10:o=r.sent,u(o),r.next=16;break;case 14:alert("\u6dfb\u52a0\u51fa\u9519\uff0c\u670d\u52a1\u5668\u53bb\u770b\u59b9\u5b50\u4e86\u3002"),console.log(error);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(0),console.log(r.t0);case 21:case"end":return r.stop()}}),null,null,[[0,18]],Promise)},className:"jsx-2920962868 row comment m-0 p-0 justify-content-center"},N("div",{className:"jsx-2920962868 col-10 col-lg-8 "},N("div",{className:"jsx-2920962868 row justify-content-between "},N("h2",{className:"jsx-2920962868 comment-item m-0 py-3"},t.length," Comments"),N("input",{type:"text",name:"username",value:r||"",onInput:c,onChange:c,id:"username",className:"jsx-2920962868 px-4 usename text-center"})),N("div",{className:"jsx-2920962868 row mt-5 align-items-center"},N("img",{src:"images/site_05.jpg",alt:"",className:"jsx-2920962868 col-auto"}),N("textarea",{type:"text",name:"message",id:"comment",onInput:function(e){var t=e.target;t.style.height=t.scrollHeight>t.offsetHeight?t.scrollHeight+10+"px":t.offsetHeight+"px"},className:"jsx-2920962868 col px-4 py-2"}),N("button",{type:"submit",className:"jsx-2920962868"},N("i",{className:"jsx-2920962868 iconfont icon-cloud-upload col-auto"}))),N("div",{style:{padding:"20px 80px"},className:"jsx-2920962868 row comment-list justify-content-center align-items-center position-relative"},t.length>0?f:N("h3",{className:"jsx-2920962868"}," Be the first to comment\u3002 "),N("h4",{onClick:function(){return u(t)},className:"jsx-2920962868 position-absolute look-more"},"look more"))),N(a.a,{id:"2920962868"},[".comment.jsx-2920962868{padding:10rem 0;}","h2.jsx-2920962868{font-weight:700;}",".look-more.jsx-2920962868{right:70px;top:10px;color:#007bff;cursor:pointer;}","i.jsx-2920962868{font-size:40px;cursor:pointer;-webkit-transition:.2s;transition:.2s;}","i.jsx-2920962868:hover{color:#007bff;}",".col-8.jsx-2920962868>.row.jsx-2920962868:nth-child(1){border-bottom:2px solid #eaeaea;}","img.jsx-2920962868{height:40px;border-radius:50%;}",".comment-item.jsx-2920962868{border-bottom:2px solid black;position:relative;top:2px;}",".comment-list.jsx-2920962868{min-height:20vh;border-bottom:2px solid #eaeaea;}","input.jsx-2920962868,textarea.jsx-2920962868{font-size:2rem;font-weight:500;}","input[name='username'].jsx-2920962868{border:none;}","button.jsx-2920962868{background:none;border:none;}"]))},y=n("NVzp"),k=r.a.createElement,S=!0;t.default=function(e){var t=e.data,n=function(){var e=document.documentElement.style;window.innerWidth<960?e.fontSize="6px":e.fontSize="10px"};Object(o.useEffect)((function(){t||m.a.replace("/404"),n(),window.addEventListener("resize",(function(){n()}))}),[]);var s=Object(o.useState)(t),i=s[0],l=(s[1],Object(o.useState)(!1)),f=l[0],d=l[1];return m.a.events.on("routeChangeStart",(function(e){d(!0)})),k(r.a.Fragment,null,k(c.a,null,k("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous",className:"jsx-2939975863"}),k("link",{rel:"stylesheet",href:"//at.alicdn.com/t/font_1748919_piihixc593j.css",className:"jsx-2939975863"}),k("link",{rel:"icon",href:"/logo.jpg",type:"image/x-icon",className:"jsx-2939975863"}),k("title",{className:"jsx-2939975863"}," \u6587\u7ae0 ")),k("div",{className:"jsx-2939975863 container-fluid"},k("nav",{className:"jsx-2939975863"},k(u.a,null,k("img",{src:"article-bg.jpg",alt:"bg",className:"jsx-2939975863"}))),i&&k(r.a.Fragment,null,k(h,t),k(x,{content:t.ArticleContent}),k(g,{linkList:t.ArticleAboutLink,message:t.ArticleAboutIntroduction}),k(w,{message:t.comment,id:t._id}),k(y.a,null)),f&&k("div",{className:"jsx-2939975863 loadAnima"}," ")),k(a.a,{id:"2958252256"},[".loadAnima.jsx-2939975863{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-2939975863 2s 10;animation:Loading-jsx-2939975863 2s 10;z-index:9999;}","@-webkit-keyframes Loading-jsx-2939975863{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}","@keyframes Loading-jsx-2939975863{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}"]),k(a.a,{id:"680210942"},["*,body{margin:0;padding:0;box-sizing:border-box;}","html{font-size:10px;}",".container-fluid{padding:0;}"]))}},NVzp:function(e,t,n){"use strict";var s=n("MX0m"),a=n.n(s),o=n("q1tI"),r=n.n(o).a.createElement;t.a=function(){return r("footer",{className:"jsx-932745928 row mx-0 "},r("div",{className:"jsx-932745928 col-12 py-5 m-0 text-center"},r("h3",{className:"jsx-932745928"},"2020 Have a good night")),r(a.a,{id:"932745928"},["footer.jsx-932745928{background:rgba(0,0,0,0.8);color:white;margin-top:10%;}","h3.jsx-932745928{font-size:2rem;}"]))}},"TW6/":function(e,t,n){"use strict";var s=n("MX0m"),a=n.n(s),o=n("q1tI"),r=n.n(o),i=n("YFqc"),c=n.n(i),l=n("nOHt"),m=r.a.createElement;t.a=function(e){var t=Object(l.useRouter)().asPath,n=Object(o.useState)(t)[0];return m("div",{className:"jsx-211519462 nav row mx-0"},m("div",{className:"jsx-211519462 col-12 px-0 img-ctn"},e.children),m("div",{className:"jsx-211519462 content col-12 mx-0"},m("div",{className:"jsx-211519462 min-nav row align-items-center justify-content-center"},m("div",{className:"jsx-211519462 col-12 col-sm-10 col-lg-6"},m("ul",{className:"jsx-211519462 d-flex row"},m("li",{className:"jsx-211519462 "+(("/"==n?"liSeled":null)||"")},m(c.a,{href:"/"},m("h3",{className:"jsx-211519462"},"Home"))),m("li",{className:"jsx-211519462 "+(("/photo"==n?"liSeled":null)||"")},m(c.a,{href:"/photo"},m("h3",{className:"jsx-211519462"},"Photo"))),m("li",{className:"jsx-211519462 "+(("/article-list"==n?"liSeled":null)||"")},m(c.a,{href:"/article-list"},m("h3",{className:"jsx-211519462"},"Article"))),m("li",{className:"jsx-211519462 "+(("/component"==n?"liSeled":null)||"")},m(c.a,{href:"/component"},m("h3",{className:"jsx-211519462"},"Component")))))),e.title),m(a.a,{id:"211519462"},[".nav.jsx-211519462{position:relative;}",".img-ctn.jsx-211519462{z-index:999;}",".content.jsx-211519462{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1000;}",".min-nav.jsx-211519462{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}","ul.jsx-211519462{width:100%;list-style:none;margin:0;z-index:1000;}","li.jsx-211519462{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;z-index:1000;}","li.jsx-211519462:hover,.liSeled.jsx-211519462{background:rgba(255,255,255,0.3);}","@media (max-width:960px){.min-nav.jsx-211519462>div.jsx-211519462{margin:2rem;}}","@media (max-width:360px){li.jsx-211519462{margin:0.4rem;}}"]))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var s=n("lwsE"),a=n("W8MJ"),o=n("a1gu"),r=n("Nsbk"),i=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),m=n("284h");t.__esModule=!0,t.default=void 0;var u,f=m(n("q1tI")),d=n("QmWs"),h=n("g/15"),p=l(n("nOHt"));function x(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var j=new Map,g=window.IntersectionObserver,v={};function b(){return u||(g?u=new g((function(e){e.forEach((function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),j.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){i(l,e);var t,n=(t=l,function(){var e,n=r(t);if(c()){var s=r(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return o(this,e)});function l(e){var t;return s(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,s=null;return function(a,o){if(s&&a===t&&o===n)return s;var r=e(a,o);return t=a,n=o,s=r,r}}((function(e,t){return{href:x(e),as:t?x(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,s=n.nodeName,a=n.target;if("A"!==s||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),r=o.href,i=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var c=window.location.pathname;r=(0,d.resolve)(c,r),i=i?(0,d.resolve)(c,i):r,e.preventDefault();var l=t.props.scroll;null==l&&(l=i.indexOf("#")<0),p.default[t.props.replace?"replace":"push"](r,i,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,s=t.as,a=(0,d.resolve)(e,n);return[a,s?(0,d.resolve)(e,s):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),j.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}j.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();p.default.prefetch(t[0],t[1],e).catch((function(e){0})),v[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),s=n.href,a=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),r={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(r.href=a||s),f.default.cloneElement(o,r)}}]),l}(f.Component);t.default=N}},[["8oUA",0,2,1,3,4]]]);