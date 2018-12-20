webpackJsonp([34],{1375:function(e,t,r){"use strict";var o=r(0),n=r.n(o),a=r(1),i=r.n(a),s=r(955),c=r(33),u=r(20),A=r(5),m=r(111),l=r(34),p=r(311),f=r(178),d=(r.n(f),r(1376)),h=(r.n(d),Object(A.b)("standalone-form")),b=Object(A.b)("two-factor-auth-form"),C=function(e,t){var r=e.handleSubmit,o=e.submitting,a=e.is2FARequired,i=e.error;return a?n.a.createElement("div",{className:h("container")+" "+b("container")},n.a.createElement("div",{className:h("header")+" "+b("header")},n.a.createElement("div",{className:h("header-text")+" "+b("header-text")},t.t("Two-Factor Authentication"))),n.a.createElement("form",{onSubmit:r,className:h("form")+" "+b("form")},n.a.createElement("div",{className:h("information-text")+" "+b("information-text")},t.t("Enter the token from your Authenticator app.")),n.a.createElement("div",{className:h("auto-tab-input")},n.a.createElement(s.a,{name:"code",type:"input",numberOfInputs:6,validate:[m.k],customClass:b("input")}),i&&n.a.createElement("div",{className:h("error")+" "+b("error")},i)),n.a.createElement("hr",{className:b("separator")}),n.a.createElement(c.a,{type:"submit",disabled:o,customClass:b(),styleName:p.b.additive},o?t.t("Processing..."):t.t("Submit")))):n.a.createElement(l.c,{to:Object(u.a)("/login")})};C.propTypes={handleSubmit:i.a.func.isRequired,submitting:i.a.bool.isRequired},C.contextTypes={t:i.a.func.isRequired},t.a=C},1376:function(e,t,r){var o=r(1377);"string"===typeof o&&(o=[[e.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(888)(o,n);o.locals&&(e.exports=o.locals)},1377:function(e,t,r){t=e.exports=r(43)(!0),t.push([e.i,".two-factor-auth-form__form{text-align:center;margin:2.8rem}.two-factor-auth-form__container{border-radius:10px;width:41.6rem}.two-factor-auth-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.two-factor-auth-form__header-text{font-size:2rem}.two-factor-auth-form__information-text{font-size:1.6rem}.two-factor-auth-form__separator{margin:3rem -2.8rem 2.8rem}.two-factor-auth-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.two-factor-auth-form__input{height:3.6rem;width:4.8rem;border:1px solid var(--border__color);border-radius:5px;margin-top:0}.two-factor-auth-form__input:last-child{margin-right:0}.two-factor-auth-form__error,.two-factor-auth-form__input__error{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;padding-left:1.2rem}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/TwoFactorAuthForm/TwoFactorAuthFormComponent.css"],names:[],mappings:"AAIA,4BACE,kBAAmB,AACnB,aAAe,CAChB,AAED,iCACE,mBAAoB,AACpB,aAAe,CAChB,AAED,8BACE,cAAe,AACf,4BAA6B,AAC7B,6BAA8B,AAC9B,mEAAqE,CACtE,AAED,mCACE,cAAgB,CACjB,AAED,wCACE,gBAAkB,CACnB,AAED,iCACE,0BAA4B,CAC7B,AAED,2BACE,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACnB,AAED,6BACE,cAAe,AACf,aAAc,AACd,sCAAuC,AACvC,kBAAmB,AACnB,YAAc,CACf,AAED,wCACE,cAAgB,CACjB,AAED,iEAEE,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,2BAA4B,AAChC,mBAAqB,CACtB",file:"TwoFactorAuthFormComponent.css",sourcesContent:[".two-factor-auth-form {\n\n}\n\n.two-factor-auth-form__form {\n  text-align: center;\n  margin: 2.8rem;\n}\n\n.two-factor-auth-form__container {\n  border-radius: 10px;\n  width: 41.6rem;\n}\n\n.two-factor-auth-form__header {\n  height: 6.8rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 2px solid var(--standalone-form__header-border-color);\n}\n\n.two-factor-auth-form__header-text {\n  font-size: 2rem;\n}\n\n.two-factor-auth-form__information-text {\n  font-size: 1.6rem;\n}\n\n.two-factor-auth-form__separator {\n  margin: 3rem -2.8rem 2.8rem;\n}\n\n.two-factor-auth-form__btn {\n  height: 5rem;\n  border-radius: 5px;\n  font-size: 1.4rem;\n}\n\n.two-factor-auth-form__input {\n  height: 3.6rem;\n  width: 4.8rem;\n  border: 1px solid var(--border__color);\n  border-radius: 5px;\n  margin-top: 0;\n}\n\n.two-factor-auth-form__input:last-child {\n  margin-right: 0;\n}\n\n.two-factor-auth-form__input__error,\n.two-factor-auth-form__error {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  padding-left: 1.2rem;\n}\n"],sourceRoot:""}])},915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),n=r(7),a=r(1375),i=r(66),s=function(e){return{is2FARequired:e.auth.is2FARequired}},c=Object(n.connect)(s)(a.a),u=Object(o.j)({form:"twoFactorAuth",onSubmit:function(e,t){return t(Object(i.i)(e.code)).then(function(e){if(e.type===i.b)throw new o.c({_error:"Invalid Auth Code. Please try again."});return!0})},onChange:function(e,t,r){e.code&&6===e.code.length&&r.submit()}})(c);t.default=u},955:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),A=r(8),m=r(5),l=r(991),p=(r.n(l),function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()),f=function(e){function t(e){o(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=function(e,t){var o=e.target,n=o.value,a=r.props.maxLength,i=r.state.values.slice();n.length<=a?(i[t]=n,r.setNewValues(i)):n.length>a&&t<r.props.numberOfInputs-1&&(i[t+1]=n.substr(n.length-1,1),r.setNewValues(i))},r.handleKeyUp=function(e,t){if(8===e.keyCode&&0===e.target.value.length)for(var o=e.target.previousElementSibling;o&&null!==o;){if("input"===o.tagName.toLowerCase()){o.focus();break}o=o.previousElementSibling}else if(e.target.value.length===r.props.maxLength)for(var n=e.target.nextElementSibling;n&&null!==n;){if("input"===n.tagName.toLowerCase()){n.focus();break}n=n.nextElementSibling}},r.state={values:Array(e.numberOfInputs).fill("")},r}return a(t,e),p(t,[{key:"setNewValues",value:function(e){var t=this;this.setState({values:e},function(){t.props.input.onChange(t.state.values.join(""))})}},{key:"render",value:function(){var e=this,t=this.props,r=t.info,o=t.meta,n=t.label,a=t.customClass,i=Object(m.b)("ap-auto-tab-input",a),c=this.state.values.map(function(t,r){return s.a.createElement("input",{key:r,className:i(),onKeyUp:function(t){return e.handleKeyUp(t,r)},onChange:function(t){return e.handleChange(t,r)},value:e.state.values[r]})});return s.a.createElement("div",{className:"form-group"},"hidden"!==this.props.type&&n&&s.a.createElement("label",{className:i("label")},n),c,r&&s.a.createElement("small",{className:"form-text-muted"},r),o.touched&&o.error&&s.a.createElement("span",{className:""+i("error")},o.error))}}]),t}(s.a.Component),d=function(e){return s.a.createElement(A.a,Object.assign({name:e.name,component:f},e))};d.defaultProps={maxLength:1},d.propTypes={name:u.a.string.isRequired,type:u.a.string,customClass:u.a.string,numberOfInputs:u.a.number.isRequired,maxLength:u.a.number},t.a=d},991:function(e,t,r){var o=r(992);"string"===typeof o&&(o=[[e.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(888)(o,n);o.locals&&(e.exports=o.locals)},992:function(e,t,r){t=e.exports=r(43)(!0),t.push([e.i,".ap-auto-tab-input{width:3.2rem;height:3.2rem;margin:.5rem 1rem .5rem 0;border-radius:2px;text-align:center;font-size:1.4rem;color:var(--font__color-primary);background:var(--input__bg-color)}.ap-auto-tab-input__label{display:block;color:var(--font__color-secondary)}.ap-auto-tab-input__error{display:block;color:var(--danger__color);padding-top:.5rem}.ap-auto-tab-input__form-text-muted{display:inline-block;color:var(--font__color-secondary);padding-top:.5rem}","",{version:3,sources:["/Users/iMac/Documents/Trabajo/toptal/alphapoint/repositories/apex-web-0.2.57/src/components/common/APAutoTabInput/APAutoTabInput.css"],names:[],mappings:"AAAA,mBACE,aAAc,AACd,cAAe,AACf,0BAA6B,AAC7B,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,AAClB,iCAAkC,AAClC,iCAAmC,CACpC,AAED,0BACE,cAAe,AACf,kCAAoC,CACrC,AAED,0BACE,cAAe,AACf,2BAA4B,AAC5B,iBAAoB,CACrB,AAED,oCACE,qBAAsB,AACtB,mCAAoC,AACpC,iBAAoB,CACrB",file:"APAutoTabInput.css",sourcesContent:[".ap-auto-tab-input {\n  width: 3.2rem;\n  height: 3.2rem;\n  margin: 0.5rem 1rem 0.5rem 0;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 1.4rem;\n  color: var(--font__color-primary);\n  background: var(--input__bg-color);\n}\n\n.ap-auto-tab-input__label {\n  display: block;\n  color: var(--font__color-secondary);\n}\n\n.ap-auto-tab-input__error {\n  display: block;\n  color: var(--danger__color);\n  padding-top: 0.5rem;\n}\n\n.ap-auto-tab-input__form-text-muted {\n  display: inline-block;\n  color: var(--font__color-secondary);\n  padding-top: 0.5rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=34.58fada4b.chunk.js.map