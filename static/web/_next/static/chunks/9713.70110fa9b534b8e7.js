"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9713],{9713:function(e,n,t){function r(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}t.r(n),t.d(n,{sieve:function(){return s}});var i=r("if elsif else stop require"),u=r("true false not");function o(e,n){var t=e.next();if("/"==t&&e.eat("*"))return n.tokenize=l,l(e,n);if("#"===t)return e.skipToEnd(),"comment";if('"'==t)return n.tokenize=function(e,n){for(var r,i=!1;null!=(r=e.next())&&(r!=t||i);)i=!i&&"\\"==r;return i||(n.tokenize=o),"string"},n.tokenize(e,n);if("("==t)return n._indent.push("("),n._indent.push("{"),null;if("{"===t)return n._indent.push("{"),null;if(")"==t&&(n._indent.pop(),n._indent.pop()),"}"===t)return n._indent.pop(),null;if(","==t||";"==t||/[{}\(\),;]/.test(t))return null;if(/\d/.test(t))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==t)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var r=e.current();return"text"==r&&e.eat(":")?(n.tokenize=a,"string"):i.propertyIsEnumerable(r)?"keyword":u.propertyIsEnumerable(r)?"atom":null}function a(e,n){return(n._multiLineString=!0,e.sol())?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=o),"string"):(e.eatSpace(),"#"==e.peek())?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string")}function l(e,n){for(var t,r=!1;null!=(t=e.next());){if(r&&"/"==t){n.tokenize=o;break}r="*"==t}return"comment"}let s={name:"sieve",startState:function(e){return{tokenize:o,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||o)(e,n)},indent:function(e,n,t){var r=e._indent.length;return n&&"}"==n[0]&&r--,r<0&&(r=0),r*t.unit},languageData:{indentOnInput:/^\s*\}$/}}}}]);
//# sourceMappingURL=9713.70110fa9b534b8e7.js.map