(this.webpackJsonpmffais=this.webpackJsonpmffais||[]).push([[0],{10:function(e,t,a){e.exports={button:"Notifications_button__z4FVz","google-play":"Notifications_google-play__1uUWd","app-store":"Notifications_app-store__noAo0","vertical-align":"Notifications_vertical-align__2mUA3","float-right":"Notifications_float-right__2-BFm",borderBottom:"Notifications_borderBottom__2UdAg",notifications:"Notifications_notifications__3e6uY",phoneImgForDesktop:"Notifications_phoneImgForDesktop__1H86O",smiley:"Notifications_smiley__1xZg2",phoneBr:"Notifications_phoneBr__2OTAg",phoneImgForMobile:"Notifications_phoneImgForMobile__10fT8"}},18:function(e,t,a){e.exports={button:"Footer_button__1_Y36","google-play":"Footer_google-play__3a9Fg","app-store":"Footer_app-store__3ZRlj","vertical-align":"Footer_vertical-align__1BIOW","float-right":"Footer_float-right__3xGpE",nav:"Footer_nav__3OxV3",contactInfo:"Footer_contactInfo__1RXnA",subFooter:"Footer_subFooter__1-Kir",contactSupport:"Footer_contactSupport__37aQc",footerLogoWrapper:"Footer_footerLogoWrapper__2AQjZ"}},19:function(e,t,a){e.exports={button:"HowMuchToSpend_button__3DJUv","google-play":"HowMuchToSpend_google-play__1BI2h","app-store":"HowMuchToSpend_app-store__2L4MU","vertical-align":"HowMuchToSpend_vertical-align__1Z9en","float-right":"HowMuchToSpend_float-right__2zNJt",howMuchToSpend:"HowMuchToSpend_howMuchToSpend__36Eec",phone:"HowMuchToSpend_phone__3AkKH",star1:"HowMuchToSpend_star1__yS5iq",star2:"HowMuchToSpend_star2__bB0K2",howMuchToSave:"HowMuchToSpend_howMuchToSave__3BsFi"}},20:function(e,t,a){e.exports={button:"Navbar_button__1tTsh","google-play":"Navbar_google-play__1V9KN","app-store":"Navbar_app-store__dc8zb","vertical-align":"Navbar_vertical-align__3kD21","float-right":"Navbar_float-right__2gfSI",nav:"Navbar_nav__1i_Ws",navPlaceholder:"Navbar_navPlaceholder__zkVAO",links:"Navbar_links__HuWhj",home:"Navbar_home__2-ppi",features:"Navbar_features__2AGy0",moneyFlow:"Navbar_moneyFlow__iSje8"}},21:function(e,t,a){e.exports={button:"FeatureCard_button__1k68x","google-play":"FeatureCard_google-play__20KmE","app-store":"FeatureCard_app-store__3SA-w","vertical-align":"FeatureCard_vertical-align__1PTpw","float-right":"FeatureCard_float-right__3SvWL",textBox:"FeatureCard_textBox__22IAm",colWithImg:"FeatureCard_colWithImg__12LpK"}},22:function(e,t,a){e.exports={button:"PrivacyAndTerms_button__34Ijf","google-play":"PrivacyAndTerms_google-play__7dpBE","app-store":"PrivacyAndTerms_app-store__1bmQg","vertical-align":"PrivacyAndTerms_vertical-align__37HzH","float-right":"PrivacyAndTerms_float-right__23Kqr",header:"PrivacyAndTerms_header__33oeO",title:"PrivacyAndTerms_title__1nM9g",content:"PrivacyAndTerms_content__JiH2d"}},28:function(e,t,a){e.exports={button:"Features_button__1MUGn","google-play":"Features_google-play__3eB_M","app-store":"Features_app-store__DH6V4","vertical-align":"Features_vertical-align__2zkoL","float-right":"Features_float-right__1ydYa",header:"Features_header__3cmpD",featureCard:"Features_featureCard__2Vz-i"}},34:function(e,t,a){e.exports={button:"Banner_button__1a3y5","google-play":"Banner_google-play__naPGk","app-store":"Banner_app-store__3592u","vertical-align":"Banner_vertical-align__2G6pS","float-right":"Banner_float-right__38EHw",banner:"Banner_banner__3zeKu"}},4:function(e,t,a){e.exports={button:"MoneyFlow_button__3PGRV","google-play":"MoneyFlow_google-play__2EgR7","app-store":"MoneyFlow_app-store__20cHC","vertical-align":"MoneyFlow_vertical-align__2-7GQ","float-right":"MoneyFlow_float-right__3XqHY",moneyFlow:"MoneyFlow_moneyFlow__2OjPQ",header:"MoneyFlow_header__3WDjg",mobile:"MoneyFlow_mobile__1vogv",nonMobile:"MoneyFlow_nonMobile__211lB",cards:"MoneyFlow_cards__1LUKF",circle:"MoneyFlow_circle__3iZqS",col:"MoneyFlow_col__2HvKo",card:"MoneyFlow_card__HB_fK",grayText:"MoneyFlow_grayText__5b45l",cardTopText:"MoneyFlow_cardTopText__IdbB4",row:"MoneyFlow_row__3Np47",money:"MoneyFlow_money__17pYb",received:"MoneyFlow_received__1BX4I"}},40:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(25),o=a.n(c),s=a(31),n=a(29),r=a(1),i=a(17),l=a(2),j=a(32),d=a.n(j),_=(a(40),a(41),a(42),a(13)),h=a(14),b=a(16),p=a(15),m=a(20),u=a.n(m),g=a(8),x=a(0),O=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(_.a)(this,a);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={viewing:"home"},e.onScroll=function(t){var a,c,o=e.props,s=o.featuresRef,n=o.moneyFlowRef,r=null===s||void 0===s||null===(a=s.current)||void 0===a?void 0:a.offsetTop,i=null===n||void 0===n||null===(c=n.current)||void 0===c?void 0:c.offsetTop;window.pageYOffset+100>i?e.setState({viewing:"moneyFlow"}):window.pageYOffset+50>r?e.setState({viewing:"features"}):e.setState({viewing:"home"})},e.render=function(){var t=e.state.viewing;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("nav",{className:u.a.nav,children:[Object(x.jsxs)(g.a,{to:"/#",children:[Object(x.jsx)("img",{src:"/img/logo.svg"}),Object(x.jsx)("img",{src:"/img/logo-phone.svg"})]}),Object(x.jsxs)("div",{className:"".concat(u.a.links," ").concat(u.a[t]),children:[Object(x.jsx)(g.a,{to:"/#features",children:"Features"}),Object(x.jsx)(g.a,{to:"/#moneyFlow",children:"Money flow"})]}),Object(x.jsx)(w,{text:"Get the App"})]}),Object(x.jsx)("div",{className:u.a.navPlaceholder})]})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}}]),a}(r.Component),f=a(18),v=a.n(f),y=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:v.a.subFooter,children:[Object(x.jsx)("h4",{children:"Give it a try!"}),Object(x.jsxs)("div",{className:v.a.footerLogoWrapper,children:[Object(x.jsx)(w,{}),Object(x.jsx)(N,{})]}),Object(x.jsx)("h4",{children:"Have any questions?"}),Object(x.jsx)("a",{className:"button ".concat(v.a.contactSupport),target:"_blank",href:"mailto: support@mffais.com",children:"Contact support"})]}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:v.a.nav,children:[Object(x.jsx)(g.a,{to:"/#",children:Object(x.jsx)("img",{src:"/img/logo.svg"})}),Object(x.jsx)(g.a,{to:"/#features",children:"Features"}),Object(x.jsx)(g.a,{to:"/#moneyFlow",children:"Money flow"}),Object(x.jsx)(g.a,{to:"/privacy-policy/#",children:"Privacy Policy"}),Object(x.jsx)(g.a,{to:"/terms-and-conditions/#",children:"Terms and conditions"})]}),Object(x.jsxs)("div",{className:v.a.contactInfo,children:[Object(x.jsx)("p",{children:"2436 E 4th Street, Ste #336"}),Object(x.jsx)("p",{children:"Long Beach, CA 90814"}),Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"mailto:support@mffais.com",children:"support@mffais.com"})}),Object(x.jsx)("p",{children:"844-463-3247 / 844-4-MFFAIS (USA)"})]})]})]})},w=function(e){var t=e.text,a="https://play.google.com/store/apps/details?id=com.mffais.app";return t?Object(x.jsx)("a",{className:"button",target:"_blank",href:a,children:t}):Object(x.jsx)("a",{target:"_blank",href:a,children:Object(x.jsx)("img",{src:"/img/google-play.png",className:"google-play"})})},N=function(e){var t=e.text,a="https://apps.apple.com/hr/app/mffais/id1574144672";return t?Object(x.jsx)("a",{className:"button",target:"_blank",href:a,children:t}):Object(x.jsx)("a",{target:"_blank",href:a,children:Object(x.jsx)("img",{src:"/img/app-store.png",className:"app-store"})})},F=function(e){var t=e.className;return Object(x.jsx)("div",{className:t,children:Object(x.jsx)("img",{src:"/img/star.svg",style:t?{width:"100%"}:{}})})},M=a(21),T=a.n(M);function k(e){var t=e.title,a=e.text,c=e.text2,o=e.imgUrl;return e.imgIsLeft?Object(x.jsxs)("div",{className:"grid-two opposite",children:[Object(x.jsx)("div",{className:"col ".concat(T.a.colWithImg),children:Object(x.jsx)("img",{src:o})}),Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:T.a.textBox,children:[Object(x.jsx)("h2",{children:t}),Object(x.jsx)("p",{children:a}),c&&Object(x.jsx)("p",{children:c})]})})]}):Object(x.jsxs)("div",{className:"grid-two",children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:T.a.textBox,children:[Object(x.jsx)("h2",{children:t}),Object(x.jsx)("p",{children:a})]})}),Object(x.jsx)("div",{className:"col ".concat(T.a.colWithImg),children:Object(x.jsx)("img",{src:o})})]})}var S=a(34),B=a.n(S),H=function(){return Object(x.jsxs)("div",{className:"".concat(B.a.banner," flex-container"),children:[Object(x.jsx)("img",{src:"/img/cash-flow.svg"}),Object(x.jsx)("h3",{children:"Track your cash flow and get an insight into future spending and savings."})]})},A=a(22),I=a.n(A),C=function(e){var t=e.data,a=e.title;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("section",{className:I.a.header,children:Object(x.jsx)("h2",{children:a})}),Object(x.jsx)("section",{className:I.a.content,children:t.map((function(e,t){return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:I.a.title,children:e.title}),e.text.map((function(e,a){return Object(x.jsx)("p",{children:e},"text".concat(t,"-").concat(a))}))]},"group".concat(t))}))})]})},P=a(9),D=a.n(P),E=function(){return Object(x.jsxs)("section",{id:"home",className:"grid-two-even ".concat(D.a.home),children:[Object(x.jsxs)("div",{className:"col ".concat(D.a.col),children:[Object(x.jsxs)("div",{className:D.a.makeEndsMeet,children:[Object(x.jsx)("img",{src:"/img/make-ends-meet.svg"}),Object(x.jsx)(F,{className:D.a.mobileStar})]}),Object(x.jsxs)("p",{children:["Mffais helps you track cash ",Object(x.jsx)("br",{className:D.a.phoneBr}),"flow and ",Object(x.jsx)("br",{}),"provides insight into ",Object(x.jsx)("br",{className:D.a.phoneBr}),"future spending ",Object(x.jsx)("br",{}),"and savings."]}),Object(x.jsx)(w,{}),Object(x.jsx)(N,{})]}),Object(x.jsxs)("div",{className:"col ".concat(D.a.imgCol),children:[Object(x.jsx)("img",{className:D.a.phone,src:"/img/home-phone.svg"}),Object(x.jsx)("img",{className:D.a.phone,src:"/img/home-phone-without-stars.svg"})]})]})},R=a(30),W=a(28),U=a.n(W),L=[{title:"Setup your Mffais account",text:"Enter your bank balance and add all future incomes and expenses.",imgUrl:"/img/illustration-1.svg"},{title:"Focus on your future",text:"Mffais will calculate your future money flow 365 days in advance.",text2:"We will tell you your lowest balance and how much money you\u2019ll have after a year.",imgUrl:"/img/illustration-2.svg"},{title:"Clear your transactions",text:"After transactions clear your bank account, make sure to clear them from Mffais as well.",imgUrl:"/img/illustration-3.svg"}],K=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.featuresRef;return Object(x.jsxs)("section",{id:"features",ref:e,children:[Object(x.jsxs)("div",{className:U.a.header,children:[Object(x.jsx)("h1",{children:"Features"}),Object(x.jsx)(F,{}),Object(x.jsxs)("h2",{children:["Track your cash flow and get an insight into ",Object(x.jsx)("br",{}),"future spending and savings"]})]}),L.map((function(e,t){return Object(x.jsx)("div",{className:U.a.featureCard,children:Object(x.jsx)(k,Object(R.a)(Object(R.a)({},e),{},{imgIsLeft:t%2==1}))},"featureCard".concat(t))}))]})}}]),a}(r.Component),z=a(4),G=a.n(z),V=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.moneyFlowRef;return Object(x.jsxs)("section",{id:"moneyFlow",className:G.a.moneyFlow,ref:e,children:[Object(x.jsxs)("div",{className:G.a.header,children:[Object(x.jsx)("h1",{children:"Money flow"}),Object(x.jsxs)("div",{className:G.a.nonMobile,children:[Object(x.jsx)("p",{children:"A single place where users can edit and checkout"}),Object(x.jsx)("p",{children:"their future transactions - up to a year in the future."}),Object(x.jsx)("p",{children:"Due transactions are marked automatically to reduce cognitive load."})]}),Object(x.jsx)("div",{className:G.a.mobile,children:Object(x.jsxs)("p",{children:["A single place where users ",Object(x.jsx)("br",{}),"can edit and check out their ",Object(x.jsx)("br",{}),"future transactions \u2014 up to a ",Object(x.jsx)("br",{}),"year in the future. ",Object(x.jsx)("br",{}),"Due transactions are marked ",Object(x.jsx)("br",{}),"automatically to reduce ",Object(x.jsx)("br",{}),"cognitive load."]})})]}),Object(x.jsxs)("div",{className:"grid-two-even ".concat(G.a.cards),children:[Object(x.jsx)(Y,{}),Object(x.jsx)(Y,{isCardSecond:!0}),Object(x.jsx)("div",{className:G.a.circle})]})]})}}]),a}(r.Component),Y=function(e){var t=e.isCardSecond,a=function(e,t,a,c){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return Object(x.jsxs)("div",{className:G.a.row,children:[Object(x.jsx)("span",{children:o&&Object(x.jsx)("img",{src:"/img/check.svg"})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("img",{src:"/img/".concat(e,".svg")})," ",t]}),Object(x.jsx)("p",{className:G.a.grayText,children:a})]}),Object(x.jsxs)("div",{className:G.a.money,children:[Object(x.jsx)("p",{children:c}),o&&Object(x.jsx)("p",{className:G.a.received,children:"Received"})]})]})};return Object(x.jsx)("div",{className:"".concat(G.a.col," col"),children:Object(x.jsxs)("div",{className:G.a.card,children:[Object(x.jsxs)("p",{className:G.a.cardTopText,children:[Object(x.jsx)("span",{children:"Dec 4 - Dec 5"}),Object(x.jsx)("span",{children:"$1,100.00"})]}),a("up","Paycheck","Dec 4th, Mon","$500.00",!!t),a("down","Paycheck","Dec 10th, Tue","-$400.00"),Object(x.jsx)("p",{className:G.a.grayText,children:"Period total $100.00"})]})})},Z=a(19),q=a.n(Z),J=function(){return Object(x.jsx)("section",{className:q.a.howMuchToSpend,children:Object(x.jsxs)("div",{className:"grid-three",children:[Object(x.jsxs)("div",{className:"col-text-with-image",children:[Object(x.jsx)(F,{className:q.a.star1}),Object(x.jsxs)("h3",{children:["Mffais tells ",Object(x.jsx)("br",{}),"you how much ",Object(x.jsx)("br",{}),"to spend..."]})]}),Object(x.jsx)("div",{className:"".concat(q.a.phone," col"),children:Object(x.jsx)("img",{src:"/img/how-much-to-spend.svg"})}),Object(x.jsxs)("div",{className:"col-text-with-image",children:[Object(x.jsx)(F,{className:q.a.star2}),Object(x.jsx)("div",{className:q.a.howMuchToSave,children:Object(x.jsxs)("h3",{className:"float-right",children:["...or how much ",Object(x.jsx)("br",{}),"to save to stay ",Object(x.jsx)("br",{}),"in the black"]})})]})]})})},Q=a(10),$=a.n(Q),X=function(){return Object(x.jsxs)("div",{className:$.a.borderBottom,children:[Object(x.jsx)("section",{className:$.a.notifications,children:Object(x.jsxs)("div",{className:"grid-three",children:[Object(x.jsx)("div",{className:"".concat($.a.phoneImgForDesktop," col"),children:Object(x.jsx)("img",{src:"/img/notifications-1.svg"})}),Object(x.jsx)("div",{className:"".concat($.a.phoneImgForDesktop," col"),children:Object(x.jsx)("img",{src:"/img/notifications-2.svg"})}),Object(x.jsx)("div",{className:"col-text-with-image",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"float-right",children:[Object(x.jsx)("div",{className:$.a.smiley,children:Object(x.jsx)("img",{src:"/img/smiley.svg"})}),Object(x.jsxs)("h3",{children:["Due date ",Object(x.jsx)("br",{className:$.a.phoneBr}),"notifications ",Object(x.jsx)("br",{}),"help ",Object(x.jsx)("br",{className:$.a.phoneBr}),"you stay ",Object(x.jsx)("br",{}),"on top of ",Object(x.jsx)("br",{className:$.a.phoneBr}),"your ",Object(x.jsx)("br",{}),"cash flow"]})]})})})]})}),Object(x.jsxs)("div",{className:"".concat($.a.phoneImgForMobile," col"),children:[Object(x.jsx)("img",{src:"/img/notifications-1.svg"}),Object(x.jsx)("img",{src:"/img/notifications-2.svg"})]})]})},ee=function(){var e=Object(r.useRef)(),t=Object(r.useRef)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{featuresRef:e,moneyFlowRef:t}),Object(x.jsx)(E,{}),Object(x.jsx)(K,{featuresRef:e}),Object(x.jsx)(J,{}),Object(x.jsx)(V,{moneyFlowRef:t}),Object(x.jsx)(X,{}),Object(x.jsx)(H,{})]})};function te(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],c=t[1],j=Object(r.useState)([]),d=Object(n.a)(j,2),_=d[0],h=d[1],b=function(e,t){fetch("/data/".concat(e,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,a.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(r.useEffect)((function(){b("privacy-policy",c),b("terms-and-conditions",h)}),[]),Object(x.jsxs)(i.a,{children:[Object(x.jsxs)(l.c,{children:[Object(x.jsxs)(l.a,{path:"/privacy-policy",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{data:a,title:"Mffais Privacy Policy"})]}),Object(x.jsxs)(l.a,{path:"/terms-and-conditions",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{data:_,title:"Mffais Terms and Conditions"})]}),Object(x.jsx)(l.a,{path:"/",children:Object(x.jsx)(ee,{})})]}),Object(x.jsx)(y,{})]})}d.a.render(Object(x.jsx)(te,{}),document.getElementById("root"))},9:function(e,t,a){e.exports={button:"Home_button__18Ysc","google-play":"Home_google-play__3oPEB","app-store":"Home_app-store__1OZ-v","vertical-align":"Home_vertical-align__1MsOB","float-right":"Home_float-right__3U41Z",home:"Home_home__3M0iR",makeEndsMeet:"Home_makeEndsMeet__3sAbq",phoneBr:"Home_phoneBr__3VDez",imgCol:"Home_imgCol__2Idms",phone:"Home_phone__3E2A3",mobileStar:"Home_mobileStar__245sE",col:"Home_col__3kOo4"}}},[[52,1,2]]]);
//# sourceMappingURL=main.cd556dfe.chunk.js.map