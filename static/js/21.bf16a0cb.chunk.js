webpackJsonp([21],{1173:function(e,t,n){var a=n(1174);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!1};i.transform=void 0;n(667)(a,i);a.locals&&(e.exports=a.locals)},1174:function(e,t,n){t=e.exports=n(20)(!1),t.push([e.i,".single-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:-webkit-linear-gradient(#5576fa,#5576fa),-webkit-linear-gradient(191deg,#658dfa,#3e56f8);background-image:-o-linear-gradient(#5576fa,#5576fa),-o-linear-gradient(191deg,#658dfa,#3e56f8);background-image:linear-gradient(#5576fa,#5576fa),linear-gradient(259deg,#658dfa,#3e56f8);width:100%;-ms-flex-negative:0;flex-shrink:0}.single-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:37px auto 0;-ms-flex:1 1 auto;flex:1 1 auto}.single-fluid-header-fixed-content-layout__footer{margin-top:3rem}",""])},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),r=n(239),o=n(1173),c=(n.n(o),n(818)),d=Object(r.b)("single-fluid-header-fixed-content-layout"),l=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:d("accent-bar")}),i.a.createElement("div",{className:d("fixed-container")},e.children),i.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(c.a)(l)},818:function(e,t,n){"use strict";function a(e){var t=function(t){var n=t.isAuthenticated,a=t.location,i=t.pendingAuth,o=t.redirectFromLogin;return i?r.a.createElement(l.a,null):n?r.a.createElement(e,t):(o(a),r.a.createElement(c.c,{to:Object(u.a)("/login")}))},n=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},a=function(e){return{redirectFromLogin:function(t){return e(Object(d.h)(t))}}};return Object(o.connect)(n,a)(t)}var i=n(0),r=n.n(i),o=n(6),c=n(44),d=n(124),l=n(243),u=n(42);t.a=a}});