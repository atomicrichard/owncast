"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6471],{36471:function(e,t,n){var r,i,a,u;function o(e,t,n){return function(r,i){for(;!r.eol();){if(r.match(t)){i.tokenize=f;break}r.next()}return n&&(i.tokenize=n),e}}function c(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=f,e}}function f(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.sol(),i=e.next();switch(i){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=s,"tag";case"_":if(e.eat("_"))return n(o("strong","__",f));break;case"'":if(e.eat("'"))return n(o("em","''",f));break;case"(":if(e.eat("("))return n(o("link","))",f));break;case"[":return n(o("url","]",f));case"|":if(e.eat("|"))return n(o("comment","||"));break;case"-":if(e.eat("="))return n(o("header string","=-",f));if(e.eat("-"))return n(o("error tw-deleted","--",f));break;case"=":if(e.match("=="))return n(o("tw-underline","===",f));break;case":":if(e.eat(":"))return n(o("comment","::"));break;case"^":return n(o("tw-box","^"));case"~":if(e.match("np~"))return n(o("meta","~/np~"))}if(r)switch(i){case"!":if(e.match("!!!!!")||e.match("!!!!"))return n(c("header string"));if(e.match("!!!"))return n(c("header string"));if(e.match("!!"))return n(c("header string"));else return n(c("header string"));case"*":case"#":case"+":return n(c("tw-listitem bracket"))}return null}function s(e,t){var n=e.next(),r=e.peek();return"}"==n?(t.tokenize=f,"tag"):"("==n||")"==n?"bracket":"="==n?(i="equals",">"==r&&(e.next(),r=e.peek()),/[\'\"]/.test(r)||(t.tokenize=function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=s;break}}return"string"}),"operator"):/[\'\"]/.test(n)?(t.tokenize=function(e,t){for(;!e.eol();)if(e.next()==n){t.tokenize=s;break}return"string"},t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function l(){for(var e=arguments.length-1;e>=0;e--)a.cc.push(arguments[e])}function k(){return l.apply(null,arguments),!0}function d(e,t){var n=a.context&&a.context.noIndent;a.context={prev:a.context,pluginName:e,indent:a.indented,startOfLine:t,noIndent:n}}function g(){a.context&&(a.context=a.context.prev)}function p(e){if("openPlugin"==e){var t;return a.pluginName=r,k(m,(t=a.startOfLine,function(e){return"selfclosePlugin"==e||"endPlugin"==e||"endPlugin"==e&&d(a.pluginName,t),k()}))}if("closePlugin"==e){var n,i=!1;return a.context?(i=a.context.pluginName!=r,g()):i=!0,i&&(u="error"),k((n=i,function(e){return(n&&(u="error"),"endPlugin"==e)?k():l()}))}return"string"==e&&(a.context&&"!cdata"==a.context.name||d("!cdata"),a.tokenize==f&&g()),k()}function m(e){return"keyword"==e?(u="attribute",k(m)):"equals"==e?k(h,m):l()}function h(e){return"keyword"==e?(u="string",k()):"string"==e?k(x):l()}function x(e){return"string"==e?k(x):l()}n.r(t),n.d(t,{tiki:function(){return b}});let b={name:"tiki",startState:function(){return{tokenize:f,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;u=i=r=null;var n=t.tokenize(e,t);if((n||i)&&"comment"!=n)for(a=t;!(t.cc.pop()||p)(i||n););return t.startOfLine=!1,u||n},indent:function(e,t,n){var r=e.context;if(r&&r.noIndent)return 0;for(r&&/^{\//.test(t)&&(r=r.prev);r&&!r.startOfLine;)r=r.prev;return r?r.indent+n.unit:0}}}}]);
//# sourceMappingURL=6471.e9db65d311cc69c6.js.map