"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6443],{96443:function(e,n,t){t.r(n),t.d(n,{toml:function(){return r}});let r={name:"toml",startState:function(){return{inString:!1,stringType:"",lhs:!0,inArray:0}},token:function(e,n){if(n.inString||'"'!=e.peek()&&"'"!=e.peek()||(n.stringType=e.peek(),e.next(),n.inString=!0),e.sol()&&0===n.inArray&&(n.lhs=!0),n.inString){for(;n.inString&&!e.eol();)e.peek()===n.stringType?(e.next(),n.inString=!1):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return n.lhs?"property":"string"}if(n.inArray&&"]"===e.peek())return e.next(),n.inArray--,"bracket";if(n.lhs&&"["===e.peek()&&e.skipTo("]"))return e.next(),"]"===e.peek()&&e.next(),"atom";if("#"===e.peek())return e.skipToEnd(),"comment";if(e.eatSpace());else if(n.lhs&&e.eatWhile(function(e){return"="!=e&&" "!=e}))return"property";else if(n.lhs&&"="===e.peek())e.next(),n.lhs=!1;else{if(!n.lhs&&e.match(/^\d\d\d\d[\d\-\:\.T]*Z/)||!n.lhs&&(e.match("true")||e.match("false")))return"atom";if(!n.lhs&&"["===e.peek())return n.inArray++,e.next(),"bracket";if(!n.lhs&&e.match(/^\-?\d+(?:\.\d+)?/))return"number";e.eatSpace()||e.next()}return null},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=6443.94c41747a1e3b316.js.map