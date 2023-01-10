"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9296],{59296:function(e,r,t){function n(e){var r,t,n=e.statementIndent,a=e.jsonld,i=e.json||a,o=e.typescript,u=e.wordCharacters||/[\w$\xa1-\uffff]/,s=function(){function e(e){return{type:e,style:"keyword"}}var r=e("keyword a"),t=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:r,with:r,else:t,do:t,try:t,finally:t,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),f=/[+\-*&%=<>!?|~^@]/,c=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function l(e,n,a){return r=e,t=a,n}function d(e,r){var t=e.next();if('"'==t||"'"==t)return r.tokenize=function(e,r){var n,i=!1;if(a&&"@"==e.peek()&&e.match(c))return r.tokenize=d,l("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=t||i);)i=!i&&"\\"==n;return i||(r.tokenize=d),l("string","string")},r.tokenize(e,r);if("."==t&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return l("number","number");if("."==t&&e.match(".."))return l("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(t))return l(t);if("="==t&&e.eat(">"))return l("=>","operator");if("0"==t&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return l("number","number");if(/\d/.test(t))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),l("number","number");else if("/"==t)return e.eat("*")?(r.tokenize=m,m(e,r)):e.eat("/")?(e.skipToEnd(),l("comment","comment")):r.tokenize==d&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(r.lastType)||"quasi"==r.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-1))?(!function(e){for(var r,t=!1,n=!1;null!=(r=e.next());){if(!t){if("/"==r&&!n)return;"["==r?n=!0:n&&"]"==r&&(n=!1)}t=!t&&"\\"==r}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),l("regexp","string.special")):(e.eat("="),l("operator","operator",e.current()));else if("`"==t)return r.tokenize=p,p(e,r);else if("#"==t&&"!"==e.peek())return e.skipToEnd(),l("meta","meta");else if("#"==t&&e.eatWhile(u))return l("variable","property");else if("<"==t&&e.match("!--")||"-"==t&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),l("comment","comment");else if(f.test(t))return((">"!=t||!r.lexical||">"!=r.lexical.type)&&(e.eat("=")?("!"==t||"="==t)&&e.eat("="):/[<>*+\-|&?]/.test(t)&&(e.eat(t),">"==t&&e.eat(t))),"?"==t&&e.eat("."))?l("."):l("operator","operator",e.current());else if(u.test(t)){e.eatWhile(u);var n=e.current();if("."!=r.lastType){if(s.propertyIsEnumerable(n)){var i=s[n];return l(i.type,i.style,n)}if("async"==n&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return l("async","keyword",n)}return l("variable","variable",n)}}function m(e,r){for(var t,n=!1;t=e.next();){if("/"==t&&n){r.tokenize=d;break}n="*"==t}return l("comment","comment")}function p(e,r){for(var t,n=!1;null!=(t=e.next());){if(!n&&("`"==t||"$"==t&&e.eat("{"))){r.tokenize=d;break}n=!n&&"\\"==t}return l("quasi","string.special",e.current())}function k(e,r){r.fatArrowAt&&(r.fatArrowAt=null);var t=e.string.indexOf("=>",e.start);if(!(t<0)){if(o){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,t));n&&(t=n.index)}for(var a=0,i=!1,s=t-1;s>=0;--s){var f=e.string.charAt(s),c="([{}])".indexOf(f);if(c>=0&&c<3){if(!a){++s;break}if(0==--a){"("==f&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(u.test(f))i=!0;else if(/["'\/`]/.test(f))for(;;--s){if(0==s)return;if(e.string.charAt(s-1)==f&&"\\"!=e.string.charAt(s-2)){s--;break}}else if(i&&!a){++s;break}}i&&!a&&(r.fatArrowAt=s)}}var v={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function y(e,r,t,n,a,i){this.indented=e,this.column=r,this.type=t,this.prev=a,this.info=i,null!=n&&(this.align=n)}var w={state:null,column:null,marked:null,cc:null};function b(){for(var e=arguments.length-1;e>=0;e--)w.cc.push(arguments[e])}function h(){return b.apply(null,arguments),!0}function x(e,r){for(var t=r;t;t=t.next)if(t.name==e)return!0;return!1}function g(r){var t=w.state;if(w.marked="def",t.context){if("var"==t.lexical.info&&t.context&&t.context.block){var n=function e(r,t){if(!t)return null;if(t.block){var n=e(r,t.prev);return n?n==t.prev?t:new A(n,t.vars,!0):null}return x(r,t.vars)?t:new A(t.prev,new z(r,t.vars),!1)}(r,t.context);if(null!=n){t.context=n;return}}else if(!x(r,t.localVars)){t.localVars=new z(r,t.localVars);return}}e.globalVars&&!x(r,t.globalVars)&&(t.globalVars=new z(r,t.globalVars))}function V(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function A(e,r,t){this.prev=e,this.vars=r,this.block=t}function z(e,r){this.name=e,this.next=r}var j=new z("this",new z("arguments",null));function T(){w.state.context=new A(w.state.context,w.state.localVars,!1),w.state.localVars=j}function _(){w.state.context=new A(w.state.context,w.state.localVars,!0),w.state.localVars=null}function $(){w.state.localVars=w.state.context.vars,w.state.context=w.state.context.prev}function E(e,r){var t=function(){var t=w.state,n=t.indented;if("stat"==t.lexical.type)n=t.lexical.indented;else for(var a=t.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;t.lexical=new y(n,w.stream.column(),e,null,t.lexical,r)};return t.lex=!0,t}function O(){var e=w.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function q(e){return function r(t){return t==e?h():";"==e||"}"==t||")"==t||"]"==t?b():h(r)}}function I(e,r){if("var"==e)return h(E("vardef",r),ey,q(";"),O);if("keyword a"==e)return h(E("form"),P,I,O);if("keyword b"==e)return h(E("form"),I,O);if("keyword d"==e)return w.stream.match(/^\s*$/,!1)?h():h(E("stat"),B,q(";"),O);if("debugger"==e)return h(q(";"));if("{"==e)return h(E("}"),_,er,O,$);if(";"==e)return h();if("if"==e)return"else"==w.state.lexical.info&&w.state.cc[w.state.cc.length-1]==O&&w.state.cc.pop()(),h(E("form"),P,I,O,eV);if("function"==e)return h(eT);if("for"==e)return h(E("form"),_,eA,I,$,O);if("class"==e||o&&"interface"==r)return w.marked="keyword",h(E("form","class"==e?e:r),eq,O);if("variable"==e)return o&&"declare"==r?(w.marked="keyword",h(I)):o&&("module"==r||"enum"==r||"type"==r)&&w.stream.match(/^\s*\w/,!1)?(w.marked="keyword","enum"==r)?h(eH):"type"==r?h(e$,q("operator"),eo,q(";")):h(E("form"),ew,q("{"),E("}"),er,O,O):o&&"namespace"==r?(w.marked="keyword",h(E("form"),C,I,O)):o&&"abstract"==r?(w.marked="keyword",h(I)):h(E("stat"),M);return"switch"==e?h(E("form"),P,q("{"),E("}","switch"),_,er,O,O,$):"case"==e?h(C,q(":")):"default"==e?h(q(":")):"catch"==e?h(E("form"),T,N,I,O,$):"export"==e?h(E("stat"),eS,O):"import"==e?h(E("stat"),eW,O):"async"==e?h(I):"@"==r?h(C,I):b(E("stat"),C,q(";"),O)}function N(e){if("("==e)return h(eE,q(")"))}function C(e,r){return W(e,r,!1)}function S(e,r){return W(e,r,!0)}function P(e){return"("!=e?b():h(E(")"),B,q(")"),O)}function W(e,r,t){if(w.state.fatArrowAt==w.stream.start){var n=t?J:H;if("("==e)return h(T,E(")"),Z(eE,")"),O,q("=>"),n,$);if("variable"==e)return b(T,ew,q("=>"),n,$)}var a=t?F:D;return v.hasOwnProperty(e)?h(a):"function"==e?h(eT,a):"class"==e||o&&"interface"==r?(w.marked="keyword",h(E("form"),eO,O)):"keyword c"==e||"async"==e?h(t?S:C):"("==e?h(E(")"),B,q(")"),O,a):"operator"==e||"spread"==e?h(t?S:C):"["==e?h(E("]"),eG,O,a):"{"==e?ee(R,"}",null,a):"quasi"==e?b(U,a):"new"==e?h(function(e){return"."==e?h(t?L:K):"variable"==e&&o?h(ep,t?F:D):b(t?S:C)}):h()}function B(e){return e.match(/[;\}\)\],]/)?b():b(C)}function D(e,r){return","==e?h(B):F(e,r,!1)}function F(e,r,t){var n=!1==t?D:F,a=!1==t?C:S;if("=>"==e)return h(T,t?J:H,$);if("operator"==e)return/\+\+|--/.test(r)||o&&"!"==r?h(n):o&&"<"==r&&w.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?h(E(">"),Z(eo,">"),O,n):"?"==r?h(C,q(":"),a):h(a);if("quasi"==e)return b(U,n);if(";"!=e){if("("==e)return ee(S,")","call",n);if("."==e)return h(Q,n);if("["==e)return h(E("]"),B,q("]"),O,n);if(o&&"as"==r)return w.marked="keyword",h(eo,n);if("regexp"==e)return w.state.lastType=w.marked="operator",w.stream.backUp(w.stream.pos-w.stream.start-1),h(a)}}function U(e,r){return"quasi"!=e?b():"${"!=r.slice(r.length-2)?h(U):h(B,G)}function G(e){if("}"==e)return w.marked="string.special",w.state.tokenize=p,h(U)}function H(e){return k(w.stream,w.state),b("{"==e?I:C)}function J(e){return k(w.stream,w.state),b("{"==e?I:S)}function K(e,r){if("target"==r)return w.marked="keyword",h(D)}function L(e,r){if("target"==r)return w.marked="keyword",h(F)}function M(e){return":"==e?h(O,I):b(D,q(";"),O)}function Q(e){if("variable"==e)return w.marked="property",h()}function R(e,r){if("async"==e)return w.marked="property",h(R);if("variable"==e||"keyword"==w.style){var t;return(w.marked="property","get"==r||"set"==r)?h(X):(o&&w.state.fatArrowAt==w.stream.start&&(t=w.stream.match(/^\s*:\s*/,!1))&&(w.state.fatArrowAt=w.stream.pos+t[0].length),h(Y))}if("number"==e||"string"==e)return w.marked=a?"property":w.style+" property",h(Y);if("jsonld-keyword"==e)return h(Y);if(o&&V(r))return w.marked="keyword",h(R);if("["==e)return h(C,et,q("]"),Y);if("spread"==e)return h(S,Y);else if("*"==r)return w.marked="keyword",h(R);else if(":"==e)return b(Y)}function X(e){return"variable"!=e?b(Y):(w.marked="property",h(eT))}function Y(e){return":"==e?h(S):"("==e?b(eT):void 0}function Z(e,r,t){function n(a,i){if(t?t.indexOf(a)>-1:","==a){var o=w.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),h(function(t,n){return t==r||n==r?b():b(e)},n)}return a==r||i==r?h():t&&t.indexOf(";")>-1?b(e):h(q(r))}return function(t,a){return t==r||a==r?h():b(e,n)}}function ee(e,r,t){for(var n=3;n<arguments.length;n++)w.cc.push(arguments[n]);return h(E(r,t),Z(e,r),O)}function er(e){return"}"==e?h():b(I,er)}function et(e,r){if(o){if(":"==e)return h(eo);if("?"==r)return h(et)}}function en(e,r){if(o&&(":"==e||"in"==r))return h(eo)}function ea(e){if(o&&":"==e)return w.stream.match(/^\s*\w+\s+is\b/,!1)?h(C,ei,eo):h(eo)}function ei(e,r){if("is"==r)return w.marked="keyword",h()}function eo(e,r){return"keyof"==r||"typeof"==r||"infer"==r||"readonly"==r?(w.marked="keyword",h("typeof"==r?S:eo)):"variable"==e||"void"==r?(w.marked="type",h(em)):"|"==r||"&"==r?h(eo):"string"==e||"number"==e||"atom"==e?h(em):"["==e?h(E("]"),Z(eo,"]",","),O,em):"{"==e?h(E("}"),es,O,em):"("==e?h(Z(ed,")"),eu,em):"<"==e?h(Z(eo,">"),eo):"quasi"==e?b(ec,em):void 0}function eu(e){if("=>"==e)return h(eo)}function es(e){return e.match(/[\}\)\]]/)?h():","==e||";"==e?h(es):b(ef,es)}function ef(e,r){return"variable"==e||"keyword"==w.style?(w.marked="property",h(ef)):"?"==r||"number"==e||"string"==e?h(ef):":"==e?h(eo):"["==e?h(q("variable"),en,q("]"),ef):"("==e?b(e_,ef):e.match(/[;\}\)\],]/)?void 0:h()}function ec(e,r){return"quasi"!=e?b():"${"!=r.slice(r.length-2)?h(ec):h(eo,el)}function el(e){if("}"==e)return w.marked="string-2",w.state.tokenize=p,h(ec)}function ed(e,r){return"variable"==e&&w.stream.match(/^\s*[?:]/,!1)||"?"==r?h(ed):":"==e?h(eo):"spread"==e?h(ed):b(eo)}function em(e,r){return"<"==r?h(E(">"),Z(eo,">"),O,em):"|"==r||"."==e||"&"==r?h(eo):"["==e?h(eo,q("]"),em):"extends"==r||"implements"==r?(w.marked="keyword",h(eo)):"?"==r?h(eo,q(":"),eo):void 0}function ep(e,r){if("<"==r)return h(E(">"),Z(eo,">"),O,em)}function ek(){return b(eo,ev)}function ev(e,r){if("="==r)return h(eo)}function ey(e,r){return"enum"==r?(w.marked="keyword",h(eH)):b(ew,et,ex,eg)}function ew(e,r){return o&&V(r)?(w.marked="keyword",h(ew)):"variable"==e?(g(r),h()):"spread"==e?h(ew):"["==e?ee(eh,"]"):"{"==e?ee(eb,"}"):void 0}function eb(e,r){return"variable"!=e||w.stream.match(/^\s*:/,!1)?("variable"==e&&(w.marked="property"),"spread"==e)?h(ew):"}"==e?b():"["==e?h(C,q("]"),q(":"),eb):h(q(":"),ew,ex):(g(r),h(ex))}function eh(){return b(ew,ex)}function ex(e,r){if("="==r)return h(S)}function eg(e){if(","==e)return h(ey)}function eV(e,r){if("keyword b"==e&&"else"==r)return h(E("form","else"),I,O)}function eA(e,r){return"await"==r?h(eA):"("==e?h(E(")"),ez,O):void 0}function ez(e){return"var"==e?h(ey,ej):"variable"==e?h(ej):b(ej)}function ej(e,r){return")"==e?h():";"==e?h(ej):"in"==r||"of"==r?(w.marked="keyword",h(C,ej)):b(C,ej)}function eT(e,r){return"*"==r?(w.marked="keyword",h(eT)):"variable"==e?(g(r),h(eT)):"("==e?h(T,E(")"),Z(eE,")"),O,ea,I,$):o&&"<"==r?h(E(">"),Z(ek,">"),O,eT):void 0}function e_(e,r){return"*"==r?(w.marked="keyword",h(e_)):"variable"==e?(g(r),h(e_)):"("==e?h(T,E(")"),Z(eE,")"),O,ea,$):o&&"<"==r?h(E(">"),Z(ek,">"),O,e_):void 0}function e$(e,r){return"keyword"==e||"variable"==e?(w.marked="type",h(e$)):"<"==r?h(E(">"),Z(ek,">"),O):void 0}function eE(e,r){return("@"==r&&h(C,eE),"spread"==e)?h(eE):o&&V(r)?(w.marked="keyword",h(eE)):o&&"this"==e?h(et,ex):b(ew,et,ex)}function eO(e,r){return"variable"==e?eq(e,r):eI(e,r)}function eq(e,r){if("variable"==e)return g(r),h(eI)}function eI(e,r){return"<"==r?h(E(">"),Z(ek,">"),O,eI):"extends"==r||"implements"==r||o&&","==e?("implements"==r&&(w.marked="keyword"),h(o?eo:C,eI)):"{"==e?h(E("}"),eN,O):void 0}function eN(e,r){return"async"==e||"variable"==e&&("static"==r||"get"==r||"set"==r||o&&V(r))&&w.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(w.marked="keyword",h(eN)):"variable"==e||"keyword"==w.style?(w.marked="property",h(eC,eN)):"number"==e||"string"==e?h(eC,eN):"["==e?h(C,et,q("]"),eC,eN):"*"==r?(w.marked="keyword",h(eN)):o&&"("==e?b(e_,eN):";"==e||","==e?h(eN):"}"==e?h():"@"==r?h(C,eN):void 0}function eC(e,r){if("!"==r||"?"==r)return h(eC);if(":"==e)return h(eo,ex);if("="==r)return h(S);var t=w.state.lexical.prev;return b(t&&"interface"==t.info?e_:eT)}function eS(e,r){return"*"==r?(w.marked="keyword",h(eU,q(";"))):"default"==r?(w.marked="keyword",h(C,q(";"))):"{"==e?h(Z(eP,"}"),eU,q(";")):b(I)}function eP(e,r){return"as"==r?(w.marked="keyword",h(q("variable"))):"variable"==e?b(S,eP):void 0}function eW(e){return"string"==e?h():"("==e?b(C):"."==e?b(D):b(eB,eD,eU)}function eB(e,r){return"{"==e?ee(eB,"}"):("variable"==e&&g(r),"*"==r&&(w.marked="keyword"),h(eF))}function eD(e){if(","==e)return h(eB,eD)}function eF(e,r){if("as"==r)return w.marked="keyword",h(eB)}function eU(e,r){if("from"==r)return w.marked="keyword",h(C)}function eG(e){return"]"==e?h():b(Z(S,"]"))}function eH(){return b(E("form"),ew,q("{"),E("}"),Z(eJ,"}"),O,O)}function eJ(){return b(ew,ex)}return T.lex=_.lex=!0,$.lex=!0,O.lex=!0,{name:e.name,startState:function(r){var t={tokenize:d,lastType:"sof",cc:[],lexical:new y(-r,0,"block",!1),localVars:e.localVars,context:e.localVars&&new A(null,null,!1),indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(t.globalVars=e.globalVars),t},token:function(e,n){if(e.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=e.indentation(),k(e,n)),n.tokenize!=m&&e.eatSpace())return null;var a=n.tokenize(e,n);return"comment"==r?a:(n.lastType="operator"==r&&("++"==t||"--"==t)?"incdec":r,function(e,r,t,n,a){var o=e.cc;for(w.state=e,w.stream=a,w.marked=null,w.cc=o,w.style=r,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():i?C:I)(t,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();if(w.marked)return w.marked;if("variable"==t&&function(e,r){for(var t=e.localVars;t;t=t.next)if(t.name==r)return!0;for(var n=e.context;n;n=n.prev)for(var t=n.vars;t;t=t.next)if(t.name==r)return!0}(e,n))return"variableName.local";return r}}(n,a,r,t,e))},indent:function(r,t,a){if(r.tokenize==m||r.tokenize==p)return null;if(r.tokenize!=d)return 0;var i,o=t&&t.charAt(0),u=r.lexical;if(!/^\s*else\b/.test(t))for(var s=r.cc.length-1;s>=0;--s){var c=r.cc[s];if(c==O)u=u.prev;else if(c!=eV&&c!=$)break}for(;("stat"==u.type||"form"==u.type)&&("}"==o||(i=r.cc[r.cc.length-1])&&(i==D||i==F)&&!/^[,\.=+\-*:?[\(]/.test(t));)u=u.prev;n&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var l=u.type,k=o==l;return"vardef"==l?u.indented+("operator"==r.lastType||","==r.lastType?u.info.length+1:0):"form"==l&&"{"==o?u.indented:"form"==l?u.indented+a.unit:"stat"==l?u.indented+("operator"==r.lastType||","==r.lastType||f.test(t.charAt(0))||/[,.]/.test(t.charAt(0))?n||a.unit:0):"switch"!=u.info||k||!1==e.doubleIndentSwitch?u.align?u.column+(k?0:1):u.indented+(k?0:a.unit):u.indented+(/^(?:case|default)\b/.test(t)?a.unit:2*a.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:i?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}t.r(r),t.d(r,{javascript:function(){return a},json:function(){return i},jsonld:function(){return o},typescript:function(){return u}});let a=n({name:"javascript"}),i=n({name:"json",json:!0}),o=n({name:"json",jsonld:!0}),u=n({name:"typescript",typescript:!0})}}]);
//# sourceMappingURL=9296.38f875e40032c57b.js.map