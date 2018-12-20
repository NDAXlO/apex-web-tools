webpackJsonp([25,41],{1047:function(e,n,t){"use strict";function o(e){var n=function(n){var t=n.shouldRedirect,o=n.redirectLocation;return n.isAuthenticated?Object(c.a)()?r.a.createElement(e,n):t?r.a.createElement(s.c,{to:{pathname:o.pathname,search:o.search}}):r.a.createElement(s.c,{to:Object(l.a)(d.b.path+"?default=redirect")}):r.a.createElement(e,n)},t=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(t,null)(n)}var a=t(0),r=t.n(a),i=t(7),s=t(34),l=t(20),c=t(1048),d=t(112);n.a=o},1048:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t(327),a=function(){return!!Object(o.a)()||(!!Object(o.c)()||void 0)}},1049:function(e,n,t){"use strict";function o(e){var n=0;if(!e||e.length<5)return n;for(var t={},o=0;o<e.length;o++)t[e[o]]=(t[e[o]]||0)+1,n+=5/t[e[o]];var a={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},r=0;for(var i in a)r+=a[i];return n+=10*(r-1),Math.min(4,parseInt(n/20,10))}n.a=o},1050:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),s=t.n(i),l=t(1051),c=t(1),d=t.n(c),A=t(173),m=t(321),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),f=function(e){function n(){o(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={txnState:"",title:""},e}return r(n,e),u(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)("txnState"),n=Object(m.a)("id")&&Object(m.a)("resourcePath")&&Object(m.a)("resourcePath").includes("payment"),t=void 0;(n||"1"===e)&&(t="Deposit pending",this.setState(function(){return{txnState:1,title:t}}),this.props.openModal()),"2"===e&&(t="Deposit succesfull",this.setState(function(){return{txnState:e,title:t}}),this.props.openModal()),"3"===e&&(t="Deposit error",this.setState(function(){return{txnState:e,title:t}}),this.props.openModal())}},{key:"render",value:function(){var e=this.props,n=e.close,t=e.isOpen,o=this.state,a=o.txnState,r=o.title;return a?s.a.createElement(A.a,{isOpen:t,title:this.context.t(r),close:function(){return n()}},s.a.createElement(l.a,{txnState:a})):null}}]),n}(s.a.Component);f.propTypes={isOpen:d.a.bool,close:d.a.func.isRequired,openModal:d.a.func.isRequired},f.contextTypes={t:d.a.func.isRequired},n.a=f},1051:function(e,n,t){"use strict";var o=t(0),a=t.n(o),r=t(1),i=t.n(r),s=function(e,n){var t=e.txnState,o={1:{status:"pending",firstLine:n.t("Your deposit is being processed."),secondLine:n.t("Your account balance will be updated soon.")},2:{status:"successful",firstLine:n.t("Your deposit was successfull."),secondLine:n.t("Your account balance will be updated soon.")},3:{status:"failed",firstLine:n.t("There was a problem with your deposit."),secondLine:n.t("Please try again or contact an administrator.")}};return a.a.createElement("div",null,a.a.createElement("div",null,o[t].firstLine),a.a.createElement("div",null,o[t].secondLine))};s.propTypes={txnState:i.a.string.isRequired},s.contextTypes={t:i.a.func.isRequired},n.a=s},1069:function(e,n,t){var o=t(1356);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;t(888)(o,a);o.locals&&(e.exports=o.locals)},1353:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t(1354),a=t(1357),r=t(1359),i=t(893),s={VerifyEmailContainer:o.a,ResetPasswordNoAuthFormContainer:a.a,ConfirmWithdrawContainer:r.a,DepositConfirmationContainer:i.default}},1354:function(e,n,t){"use strict";var o=t(7),a=t(1355),r=t(190),i=t(321),s=function(e){var n=e.apiProcessing.processingVerifyEmail,t=e.verifyEmail;return{processingVerifyEmail:n,message:t.message,error:t.error}},l=function(e){var n=Object(i.a)("d1"),t=Object(i.a)("UserId"),o=Object(i.a)("verifycode");return{fetchConfirmEmail:function(){return e(Object(r.c)({verifycode:o,userid:t,d1:n}))}}};n.a=Object(o.connect)(s,l)(a.a)},1355:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),s=t.n(i),l=t(34),c=t(1),d=t.n(c),A=t(310),m=t(953),u=t(5),f=t(20),p=t(1069),b=(t.n(p),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),_=Object(u.b)("standalone-modal"),C=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),b(n,[{key:"componentDidMount",value:function(){this.props.fetchConfirmEmail()}},{key:"render",value:function(){var e=this.context,n=this.props,t=n.processingVerifyEmail,o=n.message,a=n.error;return s.a.createElement("div",{className:""+_("wrapper")},s.a.createElement(m.a,{customClass:_("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+_("container")},s.a.createElement("div",{className:""+_("body")},s.a.createElement("div",{className:""+_("body-text")},e.t(o))),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+_("footer")},a?s.a.createElement(l.a,{to:Object(f.a)("/problem-logging-in"),className:_("btn","subtractive")},e.t("Problem with verification?")):s.a.createElement(l.a,{to:Object(f.a)("/login"),className:_("btn","additive")},e.t("Login")))),s.a.createElement(A.a,{isVisible:t,text:"Verifying your email address"})))}}]),n}(s.a.Component);C.defaultProps={fetchConfirmEmail:function(){},processingVerifyEmail:!0,message:"",error:!1},C.propTypes={fetchConfirmEmail:d.a.func.isRequired,processingVerifyEmail:d.a.bool.isRequired,message:d.a.string,error:d.a.bool},C.contextTypes={t:d.a.func.isRequired},n.a=C},1356:function(e,n,t){n=e.exports=t(43)(!0),n.push([e.i,".standalone-modal__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background:var(--standalone-modal__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-modal__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-modal__logo-color)}.standalone-modal__container{margin:auto;width:var(--standalone-modal__container-width);min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--standalone-modal__container-bg-color);-webkit-box-shadow:var(--standalone-modal__container-box-shadow);box-shadow:var(--standalone-modal__container-box-shadow)}.standalone-modal__header{height:6.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-modal__font-color);background:var(--standalone-modal__header-bg-color);padding-left:2.8rem;-webkit-box-shadow:var(--standalone-modal__body-box-shadow);box-shadow:var(--standalone-modal__body-box-shadow)}.standalone-modal__header-text{font-size:1.6rem;color:var(--font__color-primary)}.standalone-modal__body{height:14rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-modal__font-color);background:var(--standalone-modal__body-bg-color);padding-left:2.8rem;padding-right:2.8rem;-webkit-box-shadow:var(--standalone-modal__body-box-shadow);box-shadow:var(--standalone-modal__body-box-shadow)}.standalone-modal__body-text{font-size:1.45rem;color:var(--font__color-primary)}.standalone-modal__success{padding:1rem}.standalone-modal__btn{font-size:1.1rem;display:inline-block;height:3.2rem;line-height:3.2rem;border-radius:2px;text-align:center;cursor:pointer;padding:0 1rem;border:1px solid transparent;color:var(--font__color-primary);white-space:nowrap}.standalone-modal__btn--subtractive{background:var(--danger__bg-color)}.standalone-modal__btn--subtractive:hover{background:var(--danger__bg-color--hover)}.standalone-modal__btn--subtractive:focus{background:var(--danger__bg-color--focus);border:solid 1px var(--danger__border-color--focus)}.standalone-modal__btn--additive{background:var(--success__bg-color)}.standalone-modal__btn--additive:hover{background:var(--success__bg-color--hover)}.standalone-modal__btn--additive:focus{background:var(--success__bg-color--focus);border:solid 1px var(--success__border-color--focus)}.standalone-modal__error{color:var(--danger__color)}.standalone-modal__terms-text{margin:1rem 0;line-height:1.45;color:var(--font__color-secondary)}.standalone-modal__input-box{-ms-flex-direction:column;flex-direction:column;height:3rem}.standalone-modal__information-text{margin-bottom:2.8rem;font-size:1.4rem;color:var(--font__color-secondary)}.standalone-modal__password-strength{color:var(--information__color)}.standalone-modal__footer{height:6.2rem;margin:0 2.8rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:solid 1px var(--border__color)}.standalone-modal__footer-separator{width:0;height:2rem;border-right:solid 1px var(--border__color);margin:0 1.5rem}.standalone-modal__form{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin:2.75rem}.standalone-modal__btn{width:var(--standalone-modal__btn-width);height:var(--standalone-modal__btn-height)}.standalone-modal__separator{margin:0 0 2.5rem;display:block;border-top:solid 1px var(--border__color)}.standalone-modal__auto-tab-input,.standalone-modal__radio-list{margin-bottom:2.5rem}@media (max-width:576px){.standalone-modal__wrapper{-ms-flex-pack:start;justify-content:flex-start}.standalone-modal__container{width:100%;font-size:1.3rem;-webkit-box-shadow:initial;box-shadow:none;margin:initial}.standalone-modal__logo{-ms-flex-item-align:start;align-self:flex-start;position:static;top:auto;left:auto}}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/styles/components/common/StandaloneModal.css"],names:[],mappings:"AAAA,2BACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,eAAgB,AAChB,gBAAiB,AACjB,qDAAsD,AACtD,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,eAAiB,CAClB,AAED,wBACE,cAAe,AACf,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,yCAA2C,CAC5C,AAED,6BACE,YAAa,AACb,+CAAgD,AAChD,+BAAgC,AAChC,4BAA6B,AAC7B,uBAAwB,AACxB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,uDAAwD,AACxD,iEAAkE,AAC1D,wDAA0D,CACnE,AAED,0BACE,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,0CAA2C,AAC3C,oDAAqD,AACrD,oBAAqB,AACrB,4DAA6D,AACrD,mDAAqD,CAC9D,AAED,+BACE,iBAAkB,AAClB,gCAAkC,CACnC,AAED,wBACE,aAAc,AACd,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,0CAA2C,AAC3C,kDAAmD,AACnD,oBAAqB,AACrB,qBAAsB,AACtB,4DAA6D,AACrD,mDAAqD,CAC9D,AAED,6BACE,kBAAmB,AACnB,gCAAkC,CACnC,AAED,2BACE,YAAc,CACf,AAED,uBACE,iBAAkB,AAClB,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,eAAgB,AAChB,6BAA8B,AAC9B,iCAAkC,AAClC,kBAAoB,CACrB,AAED,oCACE,kCAAoC,CACrC,AAED,0CACE,yCAA2C,CAC5C,AAED,0CACE,0CAA2C,AAC3C,mDAAqD,CACtD,AAED,iCACE,mCAAqC,CACtC,AAED,uCACE,0CAA4C,CAC7C,AAED,uCACE,2CAA4C,AAC5C,oDAAsD,CACvD,AAED,yBACE,0BAA4B,CAC7B,AAED,8BACE,cAAe,AACf,iBAAkB,AAClB,kCAAoC,CACrC,AAED,6BACE,0BAA2B,AAC3B,sBAAuB,AACvB,WAAa,CACd,AAED,oCACE,qBAAsB,AACtB,iBAAkB,AAClB,kCAAoC,CACrC,AAED,qCACE,+BAAiC,CAClC,AAED,0BACE,cAAe,AACf,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,yCAA2C,CAC5C,AAED,oCACE,QAAS,AACT,YAAa,AACb,4CAA6C,AAC7C,eAAiB,CAClB,AAED,wBACE,oBAAqB,AACjB,YAAa,AACjB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,cAAgB,CACjB,AAED,uBACE,yCAA0C,AAC1C,0CAA4C,CAC7C,AAED,6BACE,kBAAqB,AACrB,cAAe,AACf,yCAA2C,CAC5C,AAMD,gEACE,oBAAsB,CACvB,AAED,yBACE,2BACE,oBAAqB,AACjB,0BAA4B,CACjC,AACD,6BACE,WAAY,AACZ,iBAAkB,AAClB,2BAA4B,AACpB,gBAAoB,AAC5B,cAAgB,CACjB,AACD,wBACE,0BAA2B,AACvB,sBAAuB,AAC3B,gBAAkB,AAClB,SAAa,AACb,SAAc,CACf,CACF",file:"StandaloneModal.css",sourcesContent:[".standalone-modal__wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: var(--standalone-modal__wrapper-bg-image);\n  max-height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  overflow-y: auto;\n}\n\n.standalone-modal__logo {\n  margin: 2.8rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: var(--standalone-modal__logo-color);\n}\n\n.standalone-modal__container {\n  margin: auto;\n  width: var(--standalone-modal__container-width);\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: var(--standalone-modal__container-bg-color);\n  -webkit-box-shadow: var(--standalone-modal__container-box-shadow);\n          box-shadow: var(--standalone-modal__container-box-shadow);\n}\n\n.standalone-modal__header {\n  height: 6.4rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: var(--standalone-modal__font-color);\n  background: var(--standalone-modal__header-bg-color);\n  padding-left: 2.8rem;\n  -webkit-box-shadow: var(--standalone-modal__body-box-shadow);\n          box-shadow: var(--standalone-modal__body-box-shadow);\n}\n\n.standalone-modal__header-text {\n  font-size: 1.6rem;\n  color: var(--font__color-primary);\n}\n\n.standalone-modal__body {\n  height: 14rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: var(--standalone-modal__font-color);\n  background: var(--standalone-modal__body-bg-color);\n  padding-left: 2.8rem;\n  padding-right: 2.8rem;\n  -webkit-box-shadow: var(--standalone-modal__body-box-shadow);\n          box-shadow: var(--standalone-modal__body-box-shadow);\n}\n\n.standalone-modal__body-text {\n  font-size: 1.45rem;\n  color: var(--font__color-primary);\n}\n\n.standalone-modal__success {\n  padding: 1rem;\n}\n\n.standalone-modal__btn {\n  font-size: 1.1rem;\n  display: inline-block;\n  height: 3.2rem;\n  line-height: 3.2rem;\n  border-radius: 2px;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 1rem;\n  border: 1px solid transparent;\n  color: var(--font__color-primary);\n  white-space: nowrap;\n}\n\n.standalone-modal__btn--subtractive {\n  background: var(--danger__bg-color);\n}\n\n.standalone-modal__btn--subtractive:hover {\n  background: var(--danger__bg-color--hover);\n}\n\n.standalone-modal__btn--subtractive:focus {\n  background: var(--danger__bg-color--focus);\n  border: solid 1px var(--danger__border-color--focus);\n}\n\n.standalone-modal__btn--additive {\n  background: var(--success__bg-color);\n}\n\n.standalone-modal__btn--additive:hover {\n  background: var(--success__bg-color--hover);\n}\n\n.standalone-modal__btn--additive:focus {\n  background: var(--success__bg-color--focus);\n  border: solid 1px var(--success__border-color--focus);\n}\n\n.standalone-modal__error {\n  color: var(--danger__color);\n}\n\n.standalone-modal__terms-text {\n  margin: 1rem 0;\n  line-height: 1.45;\n  color: var(--font__color-secondary);\n}\n\n.standalone-modal__input-box {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 3rem;\n}\n\n.standalone-modal__information-text {\n  margin-bottom: 2.8rem;\n  font-size: 1.4rem;\n  color: var(--font__color-secondary);\n}\n\n.standalone-modal__password-strength {\n  color: var(--information__color);\n}\n\n.standalone-modal__footer {\n  height: 6.2rem;\n  margin: 0 2.8rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  border-top: solid 1px var(--border__color);\n}\n\n.standalone-modal__footer-separator {\n  width: 0;\n  height: 2rem;\n  border-right: solid 1px var(--border__color);\n  margin: 0 1.5rem;\n}\n\n.standalone-modal__form {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 2.75rem;\n}\n\n.standalone-modal__btn {\n  width: var(--standalone-modal__btn-width);\n  height: var(--standalone-modal__btn-height);\n}\n\n.standalone-modal__separator {\n  margin: 0 0 2.5rem 0;\n  display: block;\n  border-top: solid 1px var(--border__color);\n}\n\n.standalone-modal__auto-tab-input {\n  margin-bottom: 2.5rem;\n}\n\n.standalone-modal__radio-list {\n  margin-bottom: 2.5rem;\n}\n\n@media (max-width: 576px) {\n  .standalone-modal__wrapper {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n  }\n  .standalone-modal__container {\n    width: 100%;\n    font-size: 1.3rem;\n    -webkit-box-shadow: initial;\n            box-shadow: initial;\n    margin: initial;\n  }\n  .standalone-modal__logo {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    position: initial;\n    top: initial;\n    left: initial;\n  }\n}\n"],sourceRoot:""}])},1357:function(e,n,t){"use strict";var o=t(7),a=t(1358),r=t(122),i=t(321),s=t(8),l=t(111),c=Object(i.a)("d1"),d=Object(i.a)("UserId"),A=Object(i.a)("verifycode"),m=Object(s.j)({form:"resetPassword",onSubmit:function(e,n){var t=Object(l.l)(e.password);t?(n(Object(s.f)("resetPassword",!1,!0,"password","matchingPassword")),n(Object(r.g)({errorMessage:t}))):n(Object(r.f)({verifycode:A,userid:d,d1:c,formValues:e}))}})(a.a),u=Object(s.g)("resetPassword"),f=function(e){var n=e.apiProcessing.processingResetPassword,t=e.resetPassword,o=t.message,a=t.error,r=t.validateError;return{passwordValue:u(e,"password"),processingResetPassword:n,message:o,fetchError:a,validateError:r}},p={clearResetPasswordError:r.e};n.a=Object(o.connect)(f,p)(m)},1358:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),s=t.n(i),l=t(34),c=t(1),d=t.n(c),A=t(953),m=t(44),u=t(5),f=t(174),p=t(33),b=t(111),_=t(1049),C=t(20),g=t(178),h=(t.n(g),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),v=Object(u.b)("standalone-form"),B=function(e){function n(){var e,t,r,i;o(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),r.handleChange=function(){r.props.validateError&&r.props.clearResetPasswordError()},r.getPasswordStrength=function(){var e=r,n=e.context,t=Object(_.a)(r.props.passwordValue);return{0:n.t("Very Weak"),1:n.t("Weak"),2:n.t("Medium"),3:n.t("Strong"),4:n.t("Very Strong")}[t]},i=t,a(r,i)}return r(n,e),h(n,[{key:"render",value:function(){var e=this.context,n=this.props,t=n.processingResetPassword,o=n.message,a=n.handleSubmit,r=n.fetchError,i=n.pristine,c=n.passwordValue,d=n.invalid,u=n.validateError;return s.a.createElement("div",{className:""+v("wrapper")},s.a.createElement(A.a,{customClass:v("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+v("container")},!o&&s.a.createElement("div",{className:""+v("header")},s.a.createElement("div",{className:""+v("header-text")},e.t("Reset Your Password")),s.a.createElement(l.a,{to:Object(C.a)("/"),className:v("close-icon")},s.a.createElement(m.a,{name:"close",classModifiers:"big"}))),!o&&s.a.createElement("form",{onSubmit:a,className:""+v("form")},s.a.createElement(f.b,{type:"password",name:"password",customClass:v(),label:e.t("New Password"),validate:[b.k],readOnly:t,info:c&&s.a.createElement("span",{className:v("password-strength")},this.getPasswordStrength()),onChange:this.handleChange}),s.a.createElement(f.b,{type:"password",name:"matchingPassword",customClass:v(),label:e.t("Matching Password"),readOnly:t,validate:[b.k,b.g],onChange:this.handleChange}),u&&s.a.createElement("div",{className:v("password-error")},u),s.a.createElement("hr",{className:""+v("separator")}),s.a.createElement(p.a,{type:"submit",disabled:i||t||d,customClass:""+v()},t?e.t("Resetting your password..."):e.t("Reset Password"))),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+v("message")},s.a.createElement("div",{className:""+v("message-text")},e.t(o))),s.a.createElement("div",{className:""+v("message-footer")},r?s.a.createElement(l.a,{to:Object(C.a)("/problem-logging-in"),className:v("btn","subtractive")},e.t("Problem resetting your password?")):s.a.createElement(l.a,{to:Object(C.a)("/login"),className:v("btn","additive")},e.t("Go to Exchange"))))))}}]),n}(s.a.Component);B.defaultProps={handleSubmit:function(){},processingResetPassword:!1,message:"",fetchError:!1},B.propTypes={handleSubmit:d.a.func.isRequired,processingResetPassword:d.a.bool.isRequired,fetchError:d.a.bool},B.contextTypes={t:d.a.func.isRequired},n.a=B},1359:function(e,n,t){"use strict";var o=t(7),a=t(191),r=t(321),i=t(1360),s=function(e){var n=e.apiProcessing.processingConfirmWithdraw,t=e.confirmWithdraw;return{processingConfirmWithdraw:n,message:t.message,error:t.error}},l=function(e){var n=Object(r.a)("d1"),t=Object(r.a)("UserId"),o=Object(r.a)("verifycode");return{fetchConfirmWithdraw:function(){return e(Object(a.c)({verifycode:o,userid:t,d1:n}))}}};n.a=Object(o.connect)(s,l)(i.a)},1360:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(0),s=t.n(i),l=t(34),c=t(1),d=t.n(c),A=t(310),m=t(953),u=t(5),f=t(20),p=t(112),b=t(1069),_=(t.n(b),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),C=Object(u.b)("standalone-modal"),g=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),_(n,[{key:"componentDidMount",value:function(){this.props.fetchConfirmWithdraw()}},{key:"render",value:function(){var e=this.context,n=this.props,t=n.processingConfirmWithdraw,o=n.message;return s.a.createElement("div",{className:""+C("wrapper")},s.a.createElement(m.a,{customClass:C("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+C("container")},s.a.createElement("div",{className:""+C("body")},s.a.createElement("div",{className:""+C("body-text")},e.t(o))),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+C("footer")},s.a.createElement(l.a,{to:Object(f.a)(""+p.b.path),className:C("btn","additive")},e.t("Go to Exchange")))),s.a.createElement(A.a,{isVisible:t,text:"Confirming your withdrawal"})))}}]),n}(s.a.Component);g.defaultProps={fetchConfirmWithdraw:function(){},processingConfirmWithdraw:!0,message:""},g.propTypes={fetchConfirmWithdraw:d.a.func.isRequired,processingConfirmWithdraw:d.a.bool.isRequired,message:d.a.string},g.contextTypes={t:d.a.func.isRequired},n.a=g},893:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(7),a=t(1050),r=t(921),i=t(45),s=function(e){return{openModal:function(){return e(Object(i.e)(i.b.DEPOSIT_STATUS))}}},l=Object(o.connect)(null,s)(a.a);n.default=Object(r.a)({name:i.b.DEPOSIT_STATUS})(l)},910:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),s=t.n(i),l=t(1047),c=t(345),d=t(327),A=t(1353),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=function(e){function n(){var e,t,r,i;o(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),r.state={StandAloneComponent:void 0},i=t,a(r,i)}return r(n,e),m(n,[{key:"componentWillMount",value:function(){return Object(d.d)()?this.setState({StandAloneComponent:A.a.VerifyEmailContainer}):Object(d.a)()?this.setState({StandAloneComponent:A.a.ConfirmWithdrawContainer}):Object(d.c)()?this.setState({StandAloneComponent:A.a.ResetPasswordNoAuthFormContainer}):Object(d.b)()?this.setState({StandAloneComponent:A.a.DepositConfirmationContainer}):void Object(c.c)()}},{key:"componentWillUnmount",value:function(){Object(c.b)(!1)}},{key:"render",value:function(){var e=this.state.StandAloneComponent;return e?s.a.createElement(e,null):null}}]),n}(s.a.Component);n.default=Object(l.a)(u)},921:function(e,n,t){"use strict";var o=t(7),a=t(45),r=function(e){var n=e.name,t=function(e){if(e.modal.hasOwnProperty(n)){var t=e.modal[n],o=t.isOpen,a=t.modalProps;return Object.assign({isOpen:o},a)}return{isOpen:!1}},r=function(e){return{close:function(){return e(Object(a.d)(n))}}};return function(e){return Object(o.connect)(t,r)(e)}};n.a=r},953:function(e,n,t){"use strict";var o=t(0),a=t.n(o),r=t(1),i=t.n(r),s=t(34),l=t(20),c=t(328),d=t(6),A=t(5),m=t(993),u=(t.n(m),function(e){var n=e.customClass,t=e.linkTo,o=Object(A.b)("ap-logo",n),r=function(){return d.default.global.siteLogo.match(/.svg$/)?a.a.createElement(c.a,{alt:"Site logo",src:Object(l.a)("/local/logos/"+d.default.global.siteLogo),className:o("img")}):a.a.createElement("img",{alt:"Site logo",src:Object(l.a)("/local/logos/"+d.default.global.siteLogo),className:o("img")})};return a.a.createElement("div",{className:o()},t?a.a.createElement(s.a,{className:o("link"),to:Object(l.a)(t)},r()):r())});u.defaultProps={customClass:"",linkTo:""},u.propTypes={customClass:i.a.string,linkTo:i.a.string},n.a=u},993:function(e,n,t){var o=t(994);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;t(888)(o,a);o.locals&&(e.exports=o.locals)},994:function(e,n,t){n=e.exports=t(43)(!0),n.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/common/APLogo/APLogo.css"],names:[],mappings:"AAAA,SACE,sBAAuB,AACpB,kBAAoB,CACxB,AAED,qGAKE,wCAA0C,CAC3C,AAED,cACE,UAAY,CACb",file:"APLogo.css",sourcesContent:[".ap-logo {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.ap-logo__link,\n.ap-logo__link:link,\n.ap-logo__link:hover,\n.ap-logo__link:active,\n.ap-logo__link:visited {\n  color: var(--standalone-form__logo-color);\n}\n\n.ap-logo__img {\n  width: 8rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=25.57a43dea.chunk.js.map