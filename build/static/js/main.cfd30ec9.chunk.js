(this["webpackJsonpholo-schedule-web"]=this["webpackJsonpholo-schedule-web"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),c=n.n(r),i=n(153),s=n(16),o=n(33),u=n(21),l=n(25),j=n.n(l),b=n(4),h=n(135),d=n(137),p=n(139),O=n(140),x=n(35),f=n(154),m=n(141),v=n(142),g=n(143),w=n(144),y=n(145),k=n(146),S=n(76),N=n.n(S),D=n(77),C=n.n(D),I=n(48),L=n.n(I),B=n(49),T=n.n(B),_=n(2),E=240,F=Object(h.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:E,width:"calc(100% - ".concat(E,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:E,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:E,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"center ",padding:e.spacing(0,1)},e.mixins.toolbar),link:{color:e.palette.text.primary,textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none"}}}}));function H(){var e,t,n=F(),r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1];Object(a.useEffect)((function(){j.a.publish("Component","all")}),[]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(d.a,{position:"fixed",className:Object(b.a)(n.appBar,Object(u.a)({},n.appBarShift,i)),children:Object(_.jsxs)(p.a,{children:[Object(_.jsx)(O.a,{color:"inherit",edge:"start",className:Object(b.a)(n.menuButton,Object(u.a)({},n.hide,i)),onClick:function(){j.a.publish("DrawerStatus",!0),o(!0)},children:Object(_.jsx)(N.a,{})}),Object(_.jsx)(x.a,{variant:"h5",noWrap:!0,children:"HoloSchedule"})]})}),Object(_.jsxs)(f.a,{variant:"permanent",className:Object(b.a)(n.drawer,(e={},Object(u.a)(e,n.drawerOpen,i),Object(u.a)(e,n.drawerClose,!i),e)),classes:{paper:Object(b.a)((t={},Object(u.a)(t,n.drawerOpen,i),Object(u.a)(t,n.drawerClose,!i),t))},children:[Object(_.jsx)(m.a,{className:n.toolbar,onClick:function(){j.a.publish("DrawerStatus",!1),o(!1)},children:Object(_.jsx)(v.a,{button:!0,className:n.toolbar,children:Object(_.jsx)(g.a,{children:Object(_.jsx)(C.a,{})})})}),Object(_.jsx)(w.a,{}),Object(_.jsx)(m.a,{children:["Live","Scheduled Lives"].map((function(e,t){return Object(_.jsx)(y.a,{className:n.link,href:"#".concat(e.replaceAll(" ","_").toLowerCase()),children:Object(_.jsxs)(v.a,{children:[Object(_.jsx)(g.a,{children:0===t?Object(_.jsx)(L.a,{}):Object(_.jsx)(T.a,{})}),Object(_.jsx)(k.a,{primary:e})]})},e)}))}),Object(_.jsx)(w.a,{})]})]})}var W=n(152),z=n(11),J=n.n(z),P=n(18),R=n(151),U=n(57),Y=n.n(U),A=n(78),X=n.n(A),Z=n(79),q=n.n(Z),G=n(147),K=n(148),M=n(149),Q=n(150),V=n(155);Y.a.extend(X.a).extend(q.a);var $=Object(h.a)((function(e){return{card:{width:337,"&:hover":{boxShadow:"8px 8px 10px ".concat(e.palette.grey[500])}},title:{textOverflow:"ellipsis"},bold:{fontWeight:"bold"},link:{color:e.palette.text.primary,textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none"}}}})),ee=function(e){var t,n,a=$(),r=Y()(e.start_at),c=e.platform,i=e.room,s=e.cover,o=e.title,u=e.member;switch(c){case"youtube":t="https://youtu.be/".concat(i),n="YouTube";break;case"twitch":t="https://www.twitch.tv/".concat(i),n="Twitch";break;default:t="#",n="Unknow"}return Object(_.jsx)("a",{className:a.link,href:t,target:"_blank",rel:"noreferrer",children:Object(_.jsx)(G.a,{className:a.card,raised:!0,children:Object(_.jsxs)(K.a,{children:[Object(_.jsx)(M.a,{className:a.title,image:s,width:"337",height:"190",component:"img"}),Object(_.jsxs)(Q.a,{children:[Object(_.jsx)(x.a,{variant:"inherit",gutterBottom:!0,noWrap:!0,component:"h2",children:o}),Object(_.jsxs)(R.a,{container:!0,spacing:1,alignItems:"center",children:[Object(_.jsx)(R.a,{item:!0,children:Object(_.jsx)(V.a,{src:u.avatar})}),Object(_.jsxs)(R.a,{item:!0,children:[Object(_.jsxs)(x.a,{className:a.bold,children:[u.name," | ",n]}),Object(_.jsxs)(x.a,{className:a.bold,variant:"body2",color:"textPrimary",children:[r.format("LT")," , ",r.fromNow()]})]})]})]})]})})})},te=n(58),ne=n(80),ae=n.n(ne).a.create({baseURL:"https://holo.dev/api/v1/"}),re=function(){var e=Object(P.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("lives/current");case 2:return t=e.sent,e.abrupt("return",t.data.lives);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(P.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("lives/scheduled");case 2:return t=e.sent,e.abrupt("return",t.data.lives);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(P.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("members");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(P.a)(J.a.mark((function e(){var t,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("channels?limit=100&page=1");case 2:return t=e.sent,e.next=5,ae.get("channels?limit=100&page=2");case 5:return n=e.sent,e.abrupt("return",[].concat(Object(te.a)(t.data.channels),Object(te.a)(n.data.channels)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=Object(h.a)({container:{marginTop:15},item:{marginBottom:20,marginRight:20}}),ue=function(e){var t=oe(),n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)([]),l=Object(s.a)(u,2),j=l[0],b=l[1];function h(e,t){return d.apply(this,arguments)}function d(){return(d=Object(P.a)(J.a.mark((function e(t,n){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){h(i,ie),h(b,se)}),[]),Object(_.jsx)(R.a,{container:!0,justify:"flex-start",className:t.container,children:void 0===e.holoData||0===c.length||0===j.length?Object(_.jsx)(x.a,{variant:"h6",children:"Loading..."}):e.holoData.map((function(e){return Object(_.jsx)(R.a,{item:!0,className:t.item,children:Object(_.jsx)(ee,Object(o.a)(Object(o.a)({},e),{},{member:c.find((function(t){return t.id===j.find((function(t){return t.channel===e.channel})).member_id}))}))},e.id)}))})},le=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],i=function(){var e=Object(P.a)(J.a.mark((function e(t,n){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(e){i(c,re);var t=setInterval((function(){i(c,re)}),6e4);return function(){return clearInterval(t)}}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(R.a,{id:"live",container:!0,direction:"row",alignItems:"center",children:[Object(_.jsx)(L.a,{color:"primary"}),"\xa0",Object(_.jsxs)(x.a,{variant:"h6",color:"primary",children:["Live (",void 0===r?"":r.length,")"]})]}),Object(_.jsx)(w.a,{}),Object(_.jsx)(ue,{holoData:r})]})},je=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],i=function(){var e=Object(P.a)(J.a.mark((function e(t,n){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(e){i(c,ce);var t=setInterval((function(){i(c,ce)}),6e4);return function(){return clearInterval(t)}}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(R.a,{id:"scheduled_lives",container:!0,direction:"row",alignItems:"center",children:[Object(_.jsx)(T.a,{color:"primary"}),"\xa0",Object(_.jsxs)(x.a,{variant:"h6",color:"primary",children:["Scheduled Lives (",void 0===r?"":r.length,")"]})]}),Object(_.jsx)(w.a,{}),Object(_.jsx)(ue,{holoData:r})]})},be=function(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(w.a,{}),Object(_.jsxs)(x.a,{align:"center",variant:"subtitle2",color:"textPrimary",children:["Powered by\xa0",Object(_.jsx)(y.a,{href:"https://github.com/YunzheZJU/non-stop-story",target:"_blank",rel:"noreferrer",children:"Non-stop-story"}),Object(_.jsx)("br",{}),"Discord : NekoChan#2851",Object(_.jsx)("br",{}),Object(_.jsx)(y.a,{href:"https://github.com/NekoChanTaiwan/holo-schedule-web",target:"_blank",rel:"noreferrer",children:"NekoChanTaiwan/holo-schedule-web"})]})]})},he=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){var e=j.a.subscribe("DrawerStatus",(function(e,t){return c(t)}));return function(){return j.a.unsubscribe(e)}}),[]);var i=Object(h.a)((function(e){return{container:{minHeight:"".concat(window.innerHeight,"px"),paddingTop:"".concat(e.mixins.toolbar.minHeight+25,"px"),paddingLeft:r?"260px":"92px",transition:e.transitions.create("padding-left",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}}))();return Object(_.jsxs)(W.a,{className:i.container,maxWidth:"xl",children:[Object(_.jsx)(le,{}),Object(_.jsx)(je,{}),Object(_.jsx)(be,{})]})},de=function(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(i.a,{}),Object(_.jsx)(H,{}),Object(_.jsx)(he,{})]})};c.a.render(Object(_.jsx)(de,{}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.cfd30ec9.chunk.js.map