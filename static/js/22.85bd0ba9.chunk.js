webpackJsonp([22,16,24],{1027:function(e,t,o){var n=o(1028);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(682)(n,a);n.locals&&(e.exports=n.locals)},1028:function(e,t,o){t=e.exports=o(27)(!1),t.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:-webkit-linear-gradient(#5576fa,#5576fa),-webkit-linear-gradient(191deg,#658dfa,#3e56f8);background-image:-o-linear-gradient(#5576fa,#5576fa),-o-linear-gradient(191deg,#658dfa,#3e56f8);background-image:linear-gradient(#5576fa,#5576fa),linear-gradient(259deg,#658dfa,#3e56f8);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:37px auto 0;-ms-flex-negative:0;flex-shrink:0;-ms-flex:1 1 auto;flex:1 1 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:3rem}",""])},1029:function(e,t,o){var n=o(1030);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(682)(n,a);n.locals&&(e.exports=n.locals)},1030:function(e,t,o){t=e.exports=o(27)(!1),t.push([e.i,".component-row-single{border-radius:1rem;overflow:hidden}.component-row-single:not(:last-of-type){margin-bottom:4rem}",""])},1164:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(80),i=o(1165),c=(o.n(i),function(e){var t=Object(r.b)("component-row-dual",e.customClass);return a.a.createElement("div",{className:t()},a.a.createElement("div",{className:t("component-container-left")+" container-with-shadow"},e.component1),a.a.createElement("div",{className:t("component-container-right")+" container-with-shadow"},a.a.createElement("div",{className:t("component-container-right-content")},e.component2)))});t.a=c},1165:function(e,t,o){var n=o(1166);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(682)(n,a);n.locals&&(e.exports=n.locals)},1166:function(e,t,o){t=e.exports=o(27)(!1),t.push([e.i,".component-row-dual{display:-ms-flexbox;display:flex}.component-row-dual__component-container-left{width:67%;margin-right:3%;border-radius:1rem}.component-row-dual__component-container-right{width:30%}",""])},1167:function(e,t,o){var n=o(1168);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(682)(n,a);n.locals&&(e.exports=n.locals)},1168:function(e,t,o){t=e.exports=o(27)(!1),t.push([e.i,".dual-header-dashboard-layout__top-row{height:60rem;margin-bottom:4rem}.dual-header-dashboard-layout__top-row__component-container-left{background:var(--component__bg-color)}.dual-header-dashboard-layout__top-row__component-container-right{overflow:auto;border-radius:1rem;background:var(--component__bg-color)}.dual-header-dashboard-layout__top-row__component-container-right-content{height:100%;overflow:auto}.dual-header-dashboard-layout__bottom-row{border-radius:1rem}.dual-header-dashboard-layout__bottom-row__component-container-100{overflow:hidden;border-radius:1rem;background-color:var(--component__bg-color)}",""])},145:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(80),i=o(1029),c=(o.n(i),function(e){var t=Object(r.b)("component-row-single",e.customClass);return a.a.createElement("div",{className:t()},a.a.createElement("div",{className:t("component-container-100")},e.component))});t.default=c},274:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(80),i=o(1027),c=(o.n(i),o(831)),d=Object(r.b)("dual-fluid-header-fixed-content-layout"),l=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d("accent-bar")}),a.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),a.a.createElement("div",{className:d("fixed-container")},e.children),a.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(c.a)(l)},284:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(80),i=o(274),c=o(1164),d=o(145),l=o(1167),u=(o.n(l),o(831)),s=Object(r.b)("dual-header-dashboard-layout"),m=function(e){return a.a.createElement(i.default,{headerSecondary:e.headerSecondary,footer:e.footer},a.a.createElement(d.default,{customClass:s("notification-row")+" container-with-shadow",component:e.notificationComponent}),a.a.createElement(c.a,{customClass:s("top-row"),component1:e.component1,component2:e.component2}),a.a.createElement(d.default,{customClass:s("bottom-row")+" container-with-shadow",component:e.component3}))};t.default=Object(u.a)(m)},831:function(e,t,o){"use strict";function n(e){var t=function(t){var o=t.isAuthenticated,n=t.location,a=t.pendingAuth,i=t.redirectFromLogin;return a?r.a.createElement(l.a,null):o?r.a.createElement(e,t):(i(n),r.a.createElement(c.c,{to:Object(u.a)("/login")}))},o=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(d.h)(t))}}};return Object(i.connect)(o,n)(t)}var a=o(0),r=o.n(a),i=o(7),c=o(29),d=o(84),l=o(266),u=o(20);t.a=n}});