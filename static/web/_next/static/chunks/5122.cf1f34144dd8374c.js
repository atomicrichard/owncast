"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5122],{5122:function(e,O,t){t.r(O),t.d(O,{completeFromSchema:function(){return W},xml:function(){return C},xmlLanguage:function(){return w}});var n=t(53105),l=t(35524);let a=null,r=null,s=0;function o(e,O){var t;let n=e.pos+O;if(r==e&&s==n)return a;for(;9==(t=e.peek(O))||10==t||13==t||32==t;)O++;let l="";for(;;){let o=e.peek(O);if(!(45==o||46==o||58==o||o>=65&&o<=90||95==o||o>=97&&o<=122||o>=161))break;l+=String.fromCharCode(o),O++}return r=e,s=n,a=l||null}function y(e,O){this.name=e,this.parent=O,this.hash=O?O.hash:0;for(let t=0;t<e.length;t++)this.hash+=(this.hash<<4)+e.charCodeAt(t)+(e.charCodeAt(t)<<8)}let i=new n.IK({start:null,shift:(e,O,t,n)=>1==O?new y(o(n,1)||"",e):e,reduce:(e,O)=>11==O&&e?e.parent:e,reuse(e,O,t,n){let l=O.type.id;return 1==l||13==l?new y(o(n,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),p=new n.Jq((e,O)=>{if(60==e.next){if(e.advance(),47==e.next){e.advance();let t=o(e,0);if(!t)return e.acceptToken(5);if(O.context&&t==O.context.name)return e.acceptToken(2);for(let n=O.context;n;n=n.parent)if(n.name==t)return e.acceptToken(3,-2);e.acceptToken(4)}else if(33!=e.next&&63!=e.next)return e.acceptToken(1)}},{contextual:!0});function $(e,O){return new n.Jq(t=>{for(let n=0,l=0;;l++){if(t.next<0){l&&t.acceptToken(e);break}if(t.next==O.charCodeAt(n)){if(++n==O.length){l>=O.length&&t.acceptToken(e,1-O.length);break}}else n=t.next==O.charCodeAt(0)?1:0;t.advance()}})}let c=$(35,"-->"),S=$(36,"?>"),u=$(37,"]]>"),m=(0,l.Gv)({Text:l.pJ.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":l.pJ.angleBracket,TagName:l.pJ.tagName,"MismatchedCloseTag/Tagname":[l.pJ.tagName,l.pJ.invalid],AttributeName:l.pJ.attributeName,AttributeValue:l.pJ.attributeValue,Is:l.pJ.definitionOperator,"EntityReference CharacterReference":l.pJ.character,Comment:l.pJ.blockComment,ProcessingInst:l.pJ.processingInstruction,DoctypeDecl:l.pJ.documentMeta,Cdata:l.pJ.special(l.pJ.string)}),f=n.WQ.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:i,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[m],skippedNodes:[0],repeatNodeCount:8,tokenData:"IX~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O*l!O!P$n!P!Q,{!Q![$n![!].e!]!^$n!^!_1v!_!`Cz!`!aDm!a!bE`!b!c$n!c!}.e!}#P$n#P#QFx#Q#R$n#R#S.e#S#T$n#T#o.e#o%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U$n4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^VOp(sqs(sst)ht!](s!^;'S(s;'S;=`)b<%lO(s~(vVOp(sqs(st!](s!]!^)]!^;'S(s;'S;=`)b<%lO(s~)bOW~~)eP;=`<%l(s~)kTOp)zq!])z!^;'S)z;'S;=`*f<%lO)z~)}UOp)zq!])z!]!^*a!^;'S)z;'S;=`*f<%lO)z~*fOX~~*iP;=`<%l)zZ*sYVP{WOr$nrs%_sv$nw}$n}!O+c!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ+jYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a,Y!a;'S$n;'S;=`&e<%lO$nZ,cW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n]-SYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-r!a;'S$n;'S;=`&e<%lO$n]-{WdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_.p!O`S^QVP{WOr$nrs%_sv$nw}$n}!O.e!O!P.e!P!Q$n!Q![.e![!].e!]!^$n!^!_%y!_!c$n!c!}.e!}#R$n#R#S.e#S#T$n#T#o.e#o$}$n$}%O.e%O%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U.e4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Je$n$Je$Jg.e$Jg$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$n_1sP;=`<%l.eX1{W{WOq%yqr2esv%yw!a%y!a!bCd!b;'S%y;'S;=`&_<%lO%yX2j]{WOr%ysv%yw}%y}!O3c!O!f%y!f!g4e!g!}%y!}#O9t#O#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX3hV{WOr%ysv%yw}%y}!O3}!O;'S%y;'S;=`&_<%lO%yX4UT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX4jV{WOr%ysv%yw!q%y!q!r5P!r;'S%y;'S;=`&_<%lO%yX5UV{WOr%ysv%yw!e%y!e!f5k!f;'S%y;'S;=`&_<%lO%yX5pV{WOr%ysv%yw!v%y!v!w6V!w;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!{%y!{!|6q!|;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!r%y!r!s7]!s;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!g%y!g!h7w!h;'S%y;'S;=`&_<%lO%yX7|X{WOr7wrs8isv7wvw8iw!`7w!`!a9W!a;'S7w;'S;=`9n<%lO7wP8lTO!`8i!`!a8{!a;'S8i;'S;=`9Q<%lO8iP9QOiPP9TP;=`<%l8iX9_TiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX9qP;=`<%l7wX9yX{WOr%ysv%yw!e%y!e!f:f!f#V%y#V#W=t#W;'S%y;'S;=`&_<%lO%yX:kV{WOr%ysv%yw!f%y!f!g;Q!g;'S%y;'S;=`&_<%lO%yX;VV{WOr%ysv%yw!c%y!c!d;l!d;'S%y;'S;=`&_<%lO%yX;qV{WOr%ysv%yw!v%y!v!w<W!w;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!c%y!c!d<r!d;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!}%y!}#O=^#O;'S%y;'S;=`&_<%lO%yX=eT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX=yV{WOr%ysv%yw#W%y#W#X>`#X;'S%y;'S;=`&_<%lO%yX>eV{WOr%ysv%yw#T%y#T#U>z#U;'S%y;'S;=`&_<%lO%yX?PV{WOr%ysv%yw#h%y#h#i?f#i;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#T%y#T#U<r#U;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#c%y#c#d@l#d;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#V%y#V#WAW#W;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#h%y#h#iAr#i;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#m%y#m#nB^#n;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#d%y#d#eBx#e;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#X%y#X#Y7w#Y;'S%y;'S;=`&_<%lO%yXCkT!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZDTWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_DvW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZEgYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aFV!a;'S$n;'S;=`&e<%lO$nZF`W!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGPYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QGo#Q;'S$n;'S;=`&e<%lO$nZGvYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aHf!a;'S$n;'S;=`&e<%lO$nZHoWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[p,c,S,u,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});var g=t(59119);function d(e,O){let t=O&&O.getChild("TagName");return t?e.sliceString(t.from,t.to):""}function P(e,O){let t=O&&O.firstChild;return t&&"OpenTag"==t.name?d(e,t):""}function _(e){for(let O=e&&e.parent;O;O=O.parent)if("Element"==O.name)return O;return null}class h{constructor(e,O,t){this.attrs=O,this.attrValues=t,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map(e=>({label:e,type:"text"})):[]}}let v=/^[:\-\.\w\u00b7-\uffff]*$/;function T(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function b(e){return"string"==typeof e?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function W(e,O){let t=[],n=[],l=Object.create(null);for(let a of O){let r=T(a);t.push(r),a.global&&n.push(r),a.values&&(l[a.name]=a.values.map(b))}let s=[],o=[],y=Object.create(null);for(let i of e){let p=n,$=l;i.attributes&&(p=p.concat(i.attributes.map(e=>"string"==typeof e?t.find(O=>O.label==e)||{label:e,type:"property"}:(e.values&&($==l&&($=Object.create($)),$[e.name]=e.values.map(b)),T(e)))));let c=new h(i,p,$);y[c.name]=c,s.push(c),i.top&&o.push(c)}o.length||(o=s);for(let S=0;S<s.length;S++){let u=e[S],m=s[S];if(u.children)for(let f of u.children)y[f]&&m.children.push(y[f]);else m.children=s}return e=>{var O;let{doc:t}=e.state,a=function(e,O){var t;let n=(0,g.qz)(e).resolveInner(O,-1),l=null;for(let a=n;!l&&a.parent;a=a.parent)("OpenTag"==a.name||"CloseTag"==a.name||"SelfClosingTag"==a.name||"MismatchedCloseTag"==a.name)&&(l=a);if(l&&(l.to>O||l.lastChild.type.isError)){let r=l.parent;if("TagName"==n.name)return"CloseTag"==l.name||"MismatchedCloseTag"==l.name?{type:"closeTag",from:n.from,context:r}:{type:"openTag",from:n.from,context:_(r)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:l};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:l};let s=n==l||"Attribute"==n.name?n.childBefore(O):n;return(null==s?void 0:s.name)=="StartTag"?{type:"openTag",from:O,context:_(r)}:(null==s?void 0:s.name)=="StartCloseTag"&&s.to<=O?{type:"closeTag",from:O,context:r}:(null==s?void 0:s.name)=="Is"?{type:"attrValue",from:O,context:l}:s?{type:"attrName",from:O,context:l}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:O,context:n.parent};for(;n.parent&&n.to==O&&!(null===(t=n.lastChild)||void 0===t?void 0:t.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:O,context:"Element"==n.name?n:_(n)}:null}(e.state,e.pos);if(!a||"tag"==a.type&&!e.explicit)return null;let{type:r,from:i,context:p}=a;if("openTag"==r){let $=o,c=P(t,p);if(c){let S=y[c];$=(null==S?void 0:S.children)||s}return{from:i,options:$.map(e=>e.completion),validFor:v}}if("closeTag"==r){let u=P(t,p);return u?{from:i,to:e.pos+(">"==t.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(O=y[u])||void 0===O?void 0:O.closeNameCompletion)||{label:u+">",type:"type"}],validFor:v}:null}if("attrName"==r){let m=y[d(t,p)];return{from:i,options:(null==m?void 0:m.attrs)||n,validFor:v}}if("attrValue"==r){let f,h;let T=(h=(f=p&&p.getChildren("Attribute").find(e=>e.from<=i&&e.to>=i))&&f.getChild("AttributeName"))?t.sliceString(h.from,h.to):"";if(!T)return null;let b=y[d(t,p)],W=((null==b?void 0:b.attrValues)||l)[T];return W&&W.length?{from:i,to:e.pos+('"'==t.sliceString(e.pos,e.pos+1)?1:0),options:W,validFor:/^"[^"]*"?$/}:null}{if("tag"!=r)return null;let w=P(t,p),C=y[w],V=[],x=p&&p.lastChild;w&&(!x||"CloseTag"!=x.name||d(t,x)!=w)&&V.push(C?C.closeCompletion:{label:"</"+w+">",type:"type",boost:2});let X=V.concat(((null==C?void 0:C.children)||(p?s:o)).map(e=>e.openCompletion));if(p&&(null==C?void 0:C.text.length)){let Q=p.firstChild;Q.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(Q.to,e.pos))&&(X=X.concat(C.text))}return{from:i,options:X,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}}}let w=g.qp.define({name:"xml",parser:f.configure({props:[g.uj.add({Element(e){let O=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(O?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit}),g.x0.add({Element(e){let O=e.firstChild,t=e.lastChild;return O&&"OpenTag"==O.name?{from:O.to,to:"CloseTag"==t.name?t.from:e.to}:null}})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function C(e={}){return new g.ri(w,w.data.of({autocomplete:W(e.elements||[],e.attributes||[])}))}}}]);
//# sourceMappingURL=5122.cf1f34144dd8374c.js.map