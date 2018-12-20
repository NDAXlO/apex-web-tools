webpackJsonp([13],{1202:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1203),c=r(5),i=r(1207),l=(r.n(i),Object(c.b)("market-data-cards")),s=function(e){var t=e.level1,r=e.instruments,a=e.products,c=r.map(function(e){var r=e.InstrumentId,c=t[r];if(!c)return null;var i=e.Product1,s=e.Product2,A=a.find(function(e){return e.ProductId===i}),d=a.find(function(e){return e.ProductId===s});return n.a.createElement("div",{key:r,className:l("card")+" container-with-shadow"},n.a.createElement(o.a,{product1:A,product2:d,level1Data:c}))});return n.a.createElement("div",{className:l()},n.a.createElement("div",{className:l("row")},c))};t.a=s},1203:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),c=r.n(o),i=r(5),l=r(325),s=r(920),A=r(44),d=r(923),m=r(24),u=r(1204),C=r(1205),f=(r.n(C),Object(i.b)("market-data-card")),p=function(e,t){var r=e.product1,a=e.product2,o=e.level1Data,c=o.LastTradedPx,i=o.Rolling24HrVolume,l=o.Rolling24HrPxChange,C=o.SessionHigh,p=o.SessionLow,b=o.BestBid,B=o.BestOffer,_=e.coin,v=Object(u.a)(c,l);return n.a.createElement("div",{className:f()},n.a.createElement("div",{className:f("row")},_?n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{iconFileName:r.iconFileName,size:40}),n.a.createElement("div",{className:f("coins-header-text")},r.ProductFullName+" "+r.ProductSymbol)):n.a.createElement(s.a,{label:r.ProductFullName+" / "+a.ProductFullName,text:r.ProductSymbol+"/"+a.ProductSymbol,customClass:f(),classModifiers:"header"})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:t.t("Last Price"),text:Object(m.b)(c,a.ProductSymbol),customClass:f()}),n.a.createElement(s.a,{label:t.t("24-Hour Change"),text:Object(m.b)(v,a.ProductSymbol),customClass:f(),classModifiers:v.gte(0)?"24h-positive":"24h-negative"})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:t.t("24-Hour Pct Change"),text:Object(m.c)(l),customClass:f(),classModifiers:l>=0?"24h-positive":"24h-negative"}),n.a.createElement(s.a,{label:t.t("24-Hour Vol."),text:Object(m.b)(i,r.ProductSymbol),customClass:f()})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:t.t("24-Hour High"),text:Object(m.b)(C,a.ProductSymbol),customClass:f()}),n.a.createElement(s.a,{label:t.t("24-Hour Low"),text:Object(m.b)(p,a.ProductSymbol),customClass:f()})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:t.t("Bid"),text:Object(m.b)(b,a.ProductSymbol),customClass:f(),classModifiers:"bid"}),n.a.createElement(s.a,{label:t.t("Ask"),text:Object(m.b)(B,a.ProductSymbol),customClass:f(),classModifiers:"ask"})),_&&n.a.createElement("div",{className:f("row")},n.a.createElement("div",{className:f("activity"),onClick:function(){}},"View Activity \u2192"),n.a.createElement("div",{className:f("icons")},n.a.createElement("div",{className:f("icon-container"),onClick:function(){}},n.a.createElement(A.a,{name:"buy",customClass:f("icon")})),n.a.createElement("div",{className:f("icon-container"),onClick:function(){}},n.a.createElement(A.a,{name:"sell",customClass:f("icon")})))))};p.propTypes={level1Data:l.b.isRequired,product1:c.a.object.isRequired,product2:c.a.object.isRequired,coin:c.a.bool},p.contextTypes={t:c.a.func.isRequired},t.a=p},1204:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r(46),n=r.n(a),o=function(e,t){return e=new n.a(e),t=new n.a(t/100),e.times(t.div(t.plus(1)))}},1205:function(e,t,r){var a=r(1206);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(888)(a,n);a.locals&&(e.exports=a.locals)},1206:function(e,t,r){t=e.exports=r(43)(!0),t.push([e.i,".market-data-card{background:var(--component__bg-color);border-radius:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;height:100%}.market-data-card__row{height:6.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-left:2.5rem;border-bottom:1px solid var(--border__color)}.market-data-card__row:last-child{-webkit-box-shadow:none;box-shadow:none;border-bottom:none}.market-data-card__coins-header-text{font-size:2rem;padding-left:1.8rem;margin-right:auto;color:var(--font__color-primary)}.market-data-card__activity{font-size:1.4rem;color:var(--information__color);cursor:pointer}.market-data-card__icon-container{display:inline-block;border:solid 1px var(--border__color);height:4rem;width:4rem;margin-right:1.6rem;cursor:pointer}.market-data-card__icon{margin-left:10px;margin-top:12px;color:var(--font__color-secondary)}.market-data-card__lwt-container{-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:50%}.market-data-card__lwt-label{padding-top:.2rem;font-size:1.1rem;margin:0;color:var(--font__color-secondary)}.market-data-card__lwt-text{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:1.6rem;color:var(--font__color-primary)}.market-data-card__lwt-label--header{color:var(--font__color-secondary)}.market-data-card__lwt-text--header{font-weight:700;font-size:2rem}.market-data-card__lwt-text--bid{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--ask{color:var(--exchange-colors__sell)}.market-data-card__lwt-text--24h-positive{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--24h-negative{color:var(--exchange-colors__sell)}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/MarketDataCardsComponent/MarketDataCardComponent.css"],names:[],mappings:"AAAA,kBACE,sCAAuC,AACvC,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,yBAA0B,AACtB,6BAA8B,AAClC,WAAa,CACd,AAED,uBACE,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,sBAAuB,AACnB,8BAA+B,AACnC,oBAAqB,AACrB,4CAA8C,CAC/C,AAED,kCACE,wBAAyB,AACjB,gBAAiB,AACzB,kBAAoB,CACrB,AAED,qCACE,eAAgB,AAChB,oBAAqB,AACrB,kBAAmB,AACnB,gCAAkC,CACnC,AAED,4BACE,iBAAkB,AAClB,gCAAiC,AACjC,cAAgB,CACjB,AAED,kCACE,qBAAsB,AACtB,sCAAuC,AACvC,YAAa,AACb,WAAY,AACZ,oBAAqB,AACrB,cAAgB,CACjB,AAED,wBACE,iBAAkB,AAClB,gBAAiB,AACjB,kCAAoC,CACrC,AAED,iCACE,kCAAmC,AAC/B,8BAA+B,AACnC,SAAW,CACZ,AAED,6BACE,kBAAoB,AACpB,iBAAkB,AAClB,SAAU,AACV,kCAAoC,CACrC,AAED,4BACE,mBAAoB,AACpB,gBAAiB,AACjB,0BAA2B,AACxB,uBAAwB,AAC3B,iBAAkB,AAClB,gCAAkC,CACnC,AAED,qCACE,kCAAoC,CACrC,AAED,oCACE,gBAAkB,AAClB,cAAgB,CACjB,AAED,iCACE,iCAAmC,CACpC,AAED,iCACE,kCAAoC,CACrC,AAED,0CACE,iCAAmC,CACpC,AAED,0CACE,kCAAoC,CACrC",file:"MarketDataCardComponent.css",sourcesContent:[".market-data-card {\n  background: var(--component__bg-color);\n  border-radius: 1rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 100%;\n}\n\n.market-data-card__row {\n  height: 6.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding-left: 2.5rem;\n  border-bottom: 1px solid var(--border__color);\n}\n\n.market-data-card__row:last-child {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-bottom: none;\n}\n\n.market-data-card__coins-header-text {\n  font-size: 2rem;\n  padding-left: 1.8rem;\n  margin-right: auto;\n  color: var(--font__color-primary);\n}\n\n.market-data-card__activity {\n  font-size: 1.4rem;\n  color: var(--information__color);\n  cursor: pointer;\n}\n\n.market-data-card__icon-container {\n  display: inline-block;\n  border: solid 1px var(--border__color);\n  height: 4rem;\n  width: 4rem;\n  margin-right: 1.6rem;\n  cursor: pointer;\n}\n\n.market-data-card__icon {\n  margin-left: 10px;\n  margin-top: 12px;\n  color: var(--font__color-secondary);\n}\n\n.market-data-card__lwt-container {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  width: 50%;\n}\n\n.market-data-card__lwt-label {\n  padding-top: 0.2rem;\n  font-size: 1.1rem;\n  margin: 0;\n  color: var(--font__color-secondary);\n}\n\n.market-data-card__lwt-text {\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  font-size: 1.6rem;\n  color: var(--font__color-primary);\n}\n\n.market-data-card__lwt-label--header {\n  color: var(--font__color-secondary);\n}\n\n.market-data-card__lwt-text--header {\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.market-data-card__lwt-text--bid {\n  color: var(--exchange-colors__buy);\n}\n\n.market-data-card__lwt-text--ask {\n  color: var(--exchange-colors__sell);\n}\n\n.market-data-card__lwt-text--24h-positive {\n  color: var(--exchange-colors__buy);\n}\n\n.market-data-card__lwt-text--24h-negative {\n  color: var(--exchange-colors__sell);\n}\n"],sourceRoot:""}])},1207:function(e,t,r){var a=r(1208);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(888)(a,n);a.locals&&(e.exports=a.locals)},1208:function(e,t,r){t=e.exports=r(43)(!0),t.push([e.i,".market-data-cards__row{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;max-width:120rem}.market-data-cards__card{width:35rem;height:32rem;margin:0 2rem 4rem;border-radius:1rem;overflow:hidden}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/MarketDataCardsComponent/MarketDataCardsComponent.css"],names:[],mappings:"AAAA,wBACE,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,gBAAkB,CACnB,AAED,yBACE,YAAa,AACb,aAAc,AACd,mBAAyB,AACzB,mBAAoB,AACpB,eAAiB,CAClB",file:"MarketDataCardsComponent.css",sourcesContent:[".market-data-cards__row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  max-width: 120rem;\n}\n\n.market-data-cards__card {\n  width: 35rem;\n  height: 32rem;\n  margin: 0 2rem 4rem 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n"],sourceRoot:""}])},338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),n=r(1202),o=r(924),c=function(e){return{level1:e.level1,instruments:e.instrument.instruments,products:Object(o.d)(e)}};t.default=Object(a.connect)(c)(n.a)},920:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),c=r.n(o),i=r(25),l=r.n(i),s=r(177),A=r.n(s),d=r(315),m=r(938),u=(r.n(m),new A.a({name:"ap-label-with-text",outputIsString:!0})),C=function(e){var t=e.label,r=e.text,a=e.customClass,o=e.classModifiers,c=new A.a({name:a,outputIsString:!0});return n.a.createElement("div",{className:l()(u(),c("lwt-container",o))},n.a.createElement("label",{className:l()("ap--label",u("label"),c("lwt-label",o))},t),n.a.createElement("span",{className:l()(u("text"),c("lwt-text",o)),"data-test":Object(d.a)(e,"label")},r))};C.propTypes={label:c.a.string.isRequired,text:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),customClass:c.a.string,classModifiers:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string),c.a.objectOf(c.a.bool)]),dataTest:c.a.string},C.defaultProps={customClass:"custom-label-with-text"},t.a=C},923:function(e,t,r){"use strict";var a=r(7),n=r(925),o=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(a.connect)(o)(n.a)},924:function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"d",function(){return A}),r.d(t,"c",function(){return d}),r.d(t,"b",function(){return m}),r.d(t,"e",function(){return u});var a=r(108),n=(r.n(a),r(317)),o=function(e){return e.product.products},c=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},l=Object(a.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,r){return e.fetching||t.fetching||r.fetching}),s=Object(a.createSelector)([o,function(e){return e.product.decimalPlaces},c],function(e,t,r){return e.map(function(e){var a=r[e.ProductId];if(!a)return e;var o=t[e.Product],c=Object(n.a)(a,o);return Object.assign({},c,e)})}),A=Object(a.createSelector)([s,i],function(e,t){return e.map(function(e){var r=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,r)})}),d=Object(a.createSelector)([A,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),m=Object(a.createSelector)(A,function(e){return e.filter(function(e){return"-"!==e.Amount})}),u=Object(a.createSelector)(A,function(e){return e.filter(function(e){return"-"===e.Amount})})},925:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),c=r.n(o),i=r(20),l=r(5),s=r(926),A=(r.n(s),Object(l.b)("product-icon")),d=function(e){var t=e.productManifest,r=e.iconFileName,a=e.size,o=void 0===a?48:a,c=e.customClass;return t.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?m(o,r):n.a.createElement("img",{alt:"product icon",height:o+"px",className:c,src:Object(i.a)("/local/product-icons/"+r)}))},m=function(e,t){return n.a.createElement("div",{className:A(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},n.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:c.a.object.isRequired,iconFileName:c.a.string,size:c.a.number},t.a=d},926:function(e,t,r){var a=r(927);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(888)(a,n);a.locals&&(e.exports=a.locals)},927:function(e,t,r){t=e.exports=r(43)(!0),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/common/ProductIcon/ProductIcon.css"],names:[],mappings:"AAAA,uBACE,iDAAkD,AAClD,wCAA0C,CAC3C",file:"ProductIcon.css",sourcesContent:[".product-icon--default {\n  background: var(--product-icon__default-bg-color);\n  color: var(--product-icon__default-color);\n}\n"],sourceRoot:""}])},938:function(e,t,r){var a=r(889);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;r(888)(a,n);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=13.2dfca3db.chunk.js.map