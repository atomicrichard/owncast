"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{70889:function(n,e,t){t.r(e),t.d(e,{cmake:function(){return c}});var i=/({)?[a-zA-Z0-9_]+(})?/;function a(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}let c={name:"cmake",startState:function(){var n={};return n.inDefinition=!1,n.inInclude=!1,n.continueString=!1,n.pending=!1,n},token:function(n,e){var t,c;return n.eatSpace()?null:(t=e,"$"===(c=n.next())?n.match(i)?"variableName.special":"variable":t.continueString?(n.backUp(1),a(n,t)):n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)?(n.backUp(1),"def"):"#"==c?(n.skipToEnd(),"comment"):"'"==c||'"'==c?(t.pending=c,a(n,t)):"("==c||")"==c?"bracket":c.match(/[0-9]/)?"number":(n.eatWhile(/[\w-]/),null))}}}}]);
//# sourceMappingURL=889.8d7ebd841928bce4.js.map