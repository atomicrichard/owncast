(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{13882:function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},19013:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(71002),r=n(13882);function i(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,a.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},1469:function(e){var t=Array.isArray;e.exports=t},16791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return n(61407)}])},54615:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var a=n(85893),r=n(58091),i=n(67294),o=n(30744),s=n(23148),l=n(26495),u=n(65400);function d(e){let t={};return e.forEach(e=>{let n=new Date(e.time),a=(0,r.Z)(n,"H:mma");t[a]=e.value}),t}s.kL.register(s.uw,s.WV,s.f$,s.od,s.jn,s.Dx,s.u,s.De);let c=e=>{let{data:t,title:n,color:r,unit:s,dataCollections:c,yFlipped:f,yLogarithmic:p,minYValue:h,yStepSize:g=0}=e,m=[],y=(0,i.useRef)(null);return t&&t.length>0&&m.push({id:n,label:n,backgroundColor:r,borderColor:r,borderWidth:3,data:d(t)}),c.forEach(e=>{m.push({id:e.name,label:e.name,data:d(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,a.jsxs)("div",{className:"line-chart-container",children:[(0,a.jsx)(l.x1,{ref:y,data:{datasets:m},options:{responsive:!0,clip:!1,scales:{y:{type:p?"logarithmic":"linear",reverse:f,min:h,ticks:{stepSize:g},title:{display:!0,text:s}}}},height:"70vh"}),(0,a.jsx)(u.default,{size:"small",onClick:()=>{if(y.current){let e=document.createElement("a");e.download="chart.png",e.href=y.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,a.jsx)(o.default,{}),className:"download-btn"})]})};c.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},53920:function(e,t,n){"use strict";n.d(t,{j:function(){return w}});var a=n(85893),r=n(4863),i=n(65400),o=n(70302),s=n(5789),l=n(55673),u=n(26289),d=n(53740),c=n(5152),f=n.n(c),p=n(41664),h=n.n(p),g=n(67294),m=n(38631);let y=f()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),v=f()(()=>Promise.resolve().then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),w=e=>{let{showTroubleshootButton:t}=e,n=(0,g.useContext)(m.a),{health:c}=n;if(!c)return null;let{healthy:f,healthPercentage:p,message:w,representation:b}=c,x="#3f8600",j="info";return p<80?(x="#cf000f",j="error"):p<30&&(x="#f0ad4e",j="error"),(0,a.jsx)("div",{children:(0,a.jsxs)(o.default,{type:"inner",children:[(0,a.jsxs)(l.Z,{gutter:8,children:[(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(u.Z,{title:"Healthy Stream",value:f?"Yes":"No",valueStyle:{color:x},prefix:f?(0,a.jsx)(y,{}):(0,a.jsx)(v,{})})}),(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(u.Z,{title:"Playback Health",value:p,valueStyle:{color:x},suffix:"%"})})]}),(0,a.jsx)(l.Z,{style:{display:b<100&&0!==b?"grid":"none"},children:(0,a.jsxs)(d.default.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",b,"% of all known players. Other player status is unknown."]})}),(0,a.jsx)(l.Z,{gutter:16,style:{width:"100%",display:w?"grid":"none",marginTop:"10px"},children:(0,a.jsx)(s.Z,{span:24,children:(0,a.jsx)(r.default,{message:w,type:j,showIcon:!0,action:t&&(0,a.jsx)(h(),{passHref:!0,href:"/admin/stream-health",children:(0,a.jsx)(i.default,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})})};w.defaultProps={showTroubleshootButton:!0}},61407:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(55673),i=n(5789),o=n(53740),s=n(74048),l=n(26289),u=n(70302),d=n(4863),c=n(89552),f=n(67294),p=n(5152),h=n.n(p),g=n(81453),m=n(54615),y=n(53920),v=n(34261);let w=h()(()=>n.e(9095).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),b=h()(()=>n.e(7282).then(n.t.bind(n,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),x=h()(()=>n.e(4103).then(n.t.bind(n,74103,23)),{loadableGenerated:{webpack:()=>[74103]},ssr:!1}),j=e=>{let{title:t,description:n}=e;return(0,a.jsxs)("div",{className:"description-box",children:[(0,a.jsx)(o.default.Title,{children:t}),(0,a.jsx)(o.default.Paragraph,{children:n})]})},F=()=>{var e,t,n,p,h,v,F;let[k,S]=(0,f.useState)([]),[C,P]=(0,f.useState)([]),[N,Z]=(0,f.useState)(),[E,T]=(0,f.useState)(),[D,O]=(0,f.useState)([]),[L,R]=(0,f.useState)([]),[A,V]=(0,f.useState)([]),[B,I]=(0,f.useState)([]),[q,_]=(0,f.useState)([]),[M,H]=(0,f.useState)([]),[z,G]=(0,f.useState)([]),[W,Q]=(0,f.useState)([]),[Y,X]=(0,f.useState)(0),U=async()=>{try{let e=await (0,g.rQ)(g.N$);S(e.errors),P(e.qualityVariantChanges),T(e.highestLatency),Z(e.lowestLatency),O(e.medianLatency),R(e.medianSegmentDownloadDuration),V(e.maximumSegmentDownloadDuration),I(e.minimumSegmentDownloadDuration),_(e.minPlayerBitrate),H(e.medianPlayerBitrate),G(e.maxPlayerBitrate),Q(e.availableBitrates),X(e.segmentLength-.3)}catch(e){console.error(e)}};(0,f.useEffect)(()=>{let e=null;return U(),e=setInterval(U,g.NE),()=>{clearInterval(e)}},[]);let $=(0,a.jsxs)("div",{children:[(0,a.jsx)(o.default.Title,{children:"Stream Performance"}),(0,a.jsx)(d.default,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,a.jsx)(c.default,{size:"large",children:(0,a.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null==k?void 0:k.length)||!(null==D?void 0:D.length)||!(null==L?void 0:L.length))return $;let J=[{name:"Errors",color:"#B63FFF",data:k,pointStyle:"crossRot",pointRadius:7},{name:"Quality changes",color:"#2087E2",data:C}],K=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:A},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:L},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:B},{name:"Approximate limit",color:"#003FFF",data:L.map(e=>({time:e.time,value:Y})),pointStyle:"dash",options:{radius:0}}],ee=[{name:"Lowest player speed",color:"#B63FFF",data:q,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:M,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:z,options:{radius:2}}];W.forEach(e=>{ee.push({name:"Available bitrate",color:"#003FFF",data:q.map(t=>({time:t.time,value:e})),options:{radius:0}})});let et=null===(t=ee[0])||void 0===t?void 0:null===(e=t.data[ee[0].data.length-1])||void 0===e?void 0:e.value,en=null===(n=L[L.length-1])||void 0===n?void 0:n.value,ea=W.reduce((e,t)=>e.valueOf()<t.valueOf()?e:t),er=(null===(p=D[D.length-1])||void 0===p?void 0:p.value)||0,ei=(null===(h=E[E.length-1])||void 0===h?void 0:h.value)||0,eo=(null===(v=N[N.length-1])||void 0===v?void 0:v.value)||0,es=(Number(ei)+Number(eo)+Number(er))/3,el=0,eu=(null===(F=J[0])||void 0===F?void 0:F.data.length)||0;if(eu>5){let e=J[0].data.slice(-5);el=e.reduce((e,t)=>e+Number(t.value),0)}else el=J[0].data.reduce((e,t)=>e+Number(t.value),0);let ed=et>0||en>0||el>0,ec=null,ef=null;0!==et&&et<ea&&(ec="One of your viewers is playing your stream at ".concat(et,"kbps, slower than ").concat(ea,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),en>Y&&(ef="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");let ep=el>0?"#B63FFF":"unset",eh={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default.Title,{children:"Stream Performance"}),(0,a.jsx)(o.default.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,a.jsx)(o.default.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,a.jsxs)(s.default,{direction:"vertical",size:"middle",children:[(0,a.jsx)(r.Z,{justify:"space-around",children:(0,a.jsx)(i.Z,{style:{width:"100%"},children:(0,a.jsx)(y.j,{showTroubleshootButton:!1})})}),(0,a.jsxs)(r.Z,{gutter:[16,16],justify:"space-around",style:{display:ed?"flex":"none"},children:[(0,a.jsx)(i.Z,{children:(0,a.jsx)(u.default,{type:"inner",children:(0,a.jsx)("div",{style:eh,children:(0,a.jsx)(l.Z,{title:"Viewer Playback Speed",value:et.toString(),prefix:(0,a.jsx)(x,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),es&&(0,a.jsx)(i.Z,{children:(0,a.jsx)(u.default,{type:"inner",children:(0,a.jsx)("div",{style:eh,children:(0,a.jsx)(l.Z,{title:"Viewer Latency",value:es,prefix:(0,a.jsx)(w,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(u.default,{type:"inner",children:(0,a.jsx)("div",{style:eh,children:(0,a.jsx)(l.Z,{title:"Recent Playback Errors",value:el||0,valueStyle:{color:ep},prefix:(0,a.jsx)(b,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,a.jsxs)(u.default,{children:[(0,a.jsx)(j,{title:"Video Segment Download",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,a.jsx)(o.default.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),ef&&(0,a.jsx)(d.default,{message:"Slow downloads",description:ef,type:"error",showIcon:!0}),(0,a.jsx)(m.k,{title:"Seconds",dataCollections:K,color:"#FF7700",unit:"seconds",yLogarithmic:!0})]}),(0,a.jsxs)(u.default,{children:[(0,a.jsx)(j,{title:"Player Network Speed",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,a.jsx)(o.default.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),ec&&(0,a.jsx)(d.default,{message:"Low bandwidth viewers",description:ec,type:"error",showIcon:!0}),(0,a.jsx)(m.k,{title:"Lowest Player Bitrate",dataCollections:ee,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,a.jsxs)(u.default,{children:[(0,a.jsx)(j,{title:"Errors and Quality Changes",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,a.jsx)(o.default.Paragraph,{})]})}),(0,a.jsx)(m.k,{title:"#",dataCollections:J,color:"#FF7700",unit:""})]}),(0,a.jsxs)(u.default,{children:[(0,a.jsx)(j,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,a.jsx)(m.k,{title:"Seconds",dataCollections:[{name:"Median stream latency",color:"#00FFFF",data:D},{name:"Lowest stream latency",color:"#02FD0D",data:N},{name:"Highest stream latency",color:"#B63FFF",data:E}],color:"#FF7700",unit:"seconds"})]})]})]})};F.getLayout=function(e){return(0,a.jsx)(v.l,{page:e})},t.default=F},60057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(4942),r=n(1413),i=n(97685),o=n(45987),s=n(67294),l=n(81263),u=n(94184),d=n.n(u),c={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:c,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:c,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:c,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:c,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:c,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:c,offset:[0,4],targetOffset:f}},h=n(15105),g=n(75164),m=n(88603),y=h.Z.ESC,v=h.Z.TAB,w=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],b=s.forwardRef(function(e,t){var n,u,c,f,h,b,x,j,F,k,S,C,P,N,Z,E,T=e.arrow,D=void 0!==T&&T,O=e.prefixCls,L=void 0===O?"rc-dropdown":O,R=e.transitionName,A=e.animation,V=e.align,B=e.placement,I=e.placements,q=e.getPopupContainer,_=e.showAction,M=e.hideAction,H=e.overlayClassName,z=e.overlayStyle,G=e.visible,W=e.trigger,Q=void 0===W?["hover"]:W,Y=e.autoFocus,X=(0,o.Z)(e,w),U=s.useState(),$=(0,i.Z)(U,2),J=$[0],K=$[1],ee="visible"in e?G:J,et=s.useRef(null);s.useImperativeHandle(t,function(){return et.current}),c=(u={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:Y}).visible,f=u.setTriggerVisible,h=u.triggerRef,b=u.onVisibleChange,x=u.autoFocus,j=s.useRef(!1),F=function(){if(c&&h.current){var e,t,n,a;null===(e=h.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(a=n.focus)||void 0===a||a.call(n),f(!1),"function"==typeof b&&b(!1)}},k=function(){var e,t,n,a,r=(0,m.tS)(null===(e=h.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return null!=r&&!!r.focus&&(r.focus(),j.current=!0,!0)},S=function(e){switch(e.keyCode){case y:F();break;case v:var t=!1;j.current||(t=k()),t?e.preventDefault():F()}},s.useEffect(function(){return c?(window.addEventListener("keydown",S),x&&(0,g.Z)(k,3),function(){window.removeEventListener("keydown",S),j.current=!1}):function(){j.current=!1}},[c]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},ea=function(){var e=en();return s.createElement(s.Fragment,null,D&&s.createElement("div",{className:"".concat(L,"-arrow")}),e)},er=M;return er||-1===Q.indexOf("contextMenu")||(er=["click"]),s.createElement(l.Z,(0,r.Z)((0,r.Z)({builtinPlacements:void 0===I?p:I},X),{},{prefixCls:L,ref:et,popupClassName:d()(H,(0,a.Z)({},"".concat(L,"-show-arrow"),D)),popupStyle:z,action:Q,showAction:_,hideAction:er||[],popupPlacement:void 0===B?"bottomLeft":B,popupAlign:V,popupTransitionName:R,popupAnimation:A,popupVisible:ee,stretch:(C=e.minOverlayWidthMatchTrigger,P=e.alignPoint,"minOverlayWidthMatchTrigger"in e?C:!P)?"minWidth":"",popup:"function"==typeof e.overlay?ea:ea(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:q}),(Z=(N=e.children).props?N.props:{},E=d()(Z.className,void 0!==(n=e.openClassName)?n:"".concat(L,"-open")),ee&&N?s.cloneElement(N,{className:E}):N))})}},function(e){e.O(0,[2196,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,3068,8091,6300,8531,5283,4261,9774,2888,179],function(){return e(e.s=16791)}),_N_E=e.O()}]);