webpackJsonp([39],{1352:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),i=n.n(s),c=n(1),l=n.n(c),u=n(29),p=n(30),d=n(5),f=n(21),m=n(785),h=n(715),g=n(256),b=n(81),v=n(901),w=n(786),_=n(843),y=n(842),x=(n.n(y),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),E=Object(b.b)("standalone-form"),O=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleFormType=function(){return n.setState({resetPassword:!n.state.resetPassword})},n.sendEmail=function(e){var t=n.props,o=t.sendResetPasswordEmail,r=t.resendVerificationEmail;return n.state.resetPassword?o(e.Email):r(e)},n.state={resetPassword:!0},n}return a(t,e),x(t,[{key:"render",value:function(){var e=this.context,t=this.props,n=t.handleSubmit,o=t.submitting,r=t.pristine,a=t.invalid,s=d.default.SignupForm||{},c=s.useEmailAsUsername,l=[w.f],b=e.t("Username");return c&&(l.push(w.c),b=e.t("Email")),i.a.createElement("div",{className:E("wrapper")},i.a.createElement(_.a,{customClass:E("logo"),linkTo:"/"}),i.a.createElement("div",{className:E("container")},i.a.createElement("div",{className:E("header")},i.a.createElement("div",{className:E("header-text")},e.t("Problems Logging In?")),i.a.createElement(p.a,{to:Object(f.a)("/"),className:E("close-icon")},i.a.createElement(h.a,{name:"close",classModifiers:"big"}))),i.a.createElement(u.b,{onSubmit:n(this.sendEmail),className:E("form")},i.a.createElement("div",{className:E("information-text")},e.t("Select your issue type and provide us with your email address. We will follow up with a solution shortly.")),i.a.createElement("hr",{className:E("separator")}),i.a.createElement("section",{className:E("radio-list")},i.a.createElement(v.a,{name:"type",checked:this.state.resetPassword,onChange:this.toggleFormType,label:e.t("I\u2019m an existing user and I forgot my password."),id:"problem-login-radio1"}),i.a.createElement(v.a,{name:"type",checked:!this.state.resetPassword,onChange:this.toggleFormType,label:e.t("I\u2019m a new user and I haven\u2019t received my verification email."),id:"problem-login-radio2"})),i.a.createElement(m.b,{type:"text",name:"Email",customClass:E(),label:b,validate:l}),i.a.createElement("hr",{className:E("separator")}),i.a.createElement(g.a,{type:"submit",disabled:o||r||a,customClass:E()},o?e.t("Processing..."):e.t("Send Email"))),i.a.createElement("div",{className:E("footer")},i.a.createElement(p.a,{to:Object(f.a)("/login")},e.t("Log In")),i.a.createElement("div",{className:E("footer-separator")}),i.a.createElement(p.a,{to:Object(f.a)("/signup")},e.t("Sign Up")))))}}]),t}(i.a.Component);O.propTypes={handleSubmit:l.a.func.isRequired},O.contextTypes={t:l.a.func.isRequired},t.a=O},712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=n(29),a=n(1352),s=n(48),i=Object(r.j)({form:"forgotPassword",onSubmit:function(e,t){var n=e.resetPassword,o=e.Email;return t(n?Object(s.p)(o):Object(s.n)({Email:o}))},enableReinitialize:!0})(a.a),c=Object(o.connect)(null,function(e){return{sendResetPasswordEmail:s.p,resendVerificationEmail:s.n}}())(i);t.default=c},714:function(e,t){function n(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}e.exports=n},715:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),s=n.n(a),i=n(721),c=n(81),l=n(732),u=(n.n(l),n(734)),p=n.n(u),d=n(735),f=n.n(d),m=n(736),h=n.n(m),g=n(737),b=n.n(g),v=n(738),w=n.n(v),_=n(739),y=n.n(_),x=n(740),E=n.n(x),O=n(741),k=n.n(O),R=n(742),j=n.n(R),P=n(743),T=n.n(P),N=n(744),q=n.n(N),C=n(745),L=n.n(C),S=n(746),I=n.n(S),A=n(747),U=n.n(A),M=n(748),D=n.n(M),H=n(749),F=n.n(H),G=n(750),z=n.n(G),X=n(751),B=n.n(X),$=n(752),V=n.n($),Z=n(753),W=n.n(Z),J=n(754),K=n.n(J),Q=n(755),Y=n.n(Q),ee=n(756),te=n.n(ee),ne=n(757),oe=n.n(ne),re=n(758),ae=n.n(re),se=n(759),ie=n.n(se),ce=n(760),le=n.n(ce),ue=n(761),pe=n.n(ue),de=n(762),fe=n.n(de),me=n(763),he=n.n(me),ge=n(764),be=n.n(ge),ve=n(765),we=n.n(ve),_e=n(766),ye=n.n(_e),xe=n(767),Ee=n.n(xe),Oe=n(768),ke=n.n(Oe),Re=n(769),je=n.n(Re),Pe=n(770),Te=n.n(Pe),Ne=n(771),qe=n.n(Ne),Ce=n(772),Le=n.n(Ce),Se=n(773),Ie=n.n(Se),Ae=n(774),Ue=n.n(Ae),Me=n(775),De=n.n(Me),He=n(776),Fe=n.n(He),Ge={"user-settings":oe.a,"buy-sell":ie.a,user:fe.a,notification:he.a,dashboard:pe.a,trading:le.a,wallet:ae.a,stop:p.a,balance:f.a,center:h.a,close:b.a,"close-inverse":w.a,"deposit-arrow":y.a,download:z.a,exchange:E.a,"generate-reports":k.a,check:j.a,checkbox:T.a,refresh:q.a,"withdraw-arrow":L.a,menu:I.a,"menu-toggle":U.a,key:D.a,bigKey:F.a,arrowPrevious:B.a,arrowNext:V.a,"simple-check":te.a,pending:Y.a,settings:K.a,alert:W.a,buy:be.a,sell:we.a,eye:ye.a,receive:Ee.a,send:ke.a,deposit:je.a,withdraw:Te.a,info:qe.a,copy:Le.a,star:Ie.a,"logo-powered":Ue.a,"open-buy":De.a,"open-sell":Fe.a},ze=function(e){var t=e.name,n=e.customClass,o=e.classModifiers,a=Object(c.a)(o,t),s=Object(c.b)(["ap-icon",n]),l=Ge[t];return r.a.createElement(i.a,{src:l,className:s(null,a)})};ze.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},ze.propTypes={name:s.a.string,customClass:s.a.string,classModifiers:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),disabled:s.a.bool},t.a=ze},716:function(e,t,n){"use strict";function o(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var r=n(717),a=n(718);o.prototype.header=r.prototype.header,o.fromRequest=function(e){return new o(a(e))},e.exports=o},717:function(e,t,n){"use strict";function o(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}o.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},o.prototype.header=function(e,t){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&e.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=t)return this.headers[e]=t,t},e.exports=o},718:function(e,t,n){"use strict";var o=n(714);e.exports=function(e){var t=e.xhr,n={request:e,xhr:t};try{var r,a,s,i={};if(t.getAllResponseHeaders)for(r=t.getAllResponseHeaders().split("\n"),a=0;a<r.length;a++)(s=r[a].match(/\s*([^\s]+):\s+([^\s]+)/))&&(i[s[1]]=s[2]);n=o(n,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:i,text:t.responseText,body:t.response||t.responseText})}catch(e){}return n}},719:function(e,t,n){"use strict";e.exports=function(e){var t,n=!1;return function(){return n||(n=!0,t=e.apply(this,arguments)),t}}},720:function(e,t,n){var o,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var s=n.apply(null,o);s&&e.push(s)}else if("object"===r)for(var i in o)a.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(o=[],void 0!==(r=function(){return n}.apply(t,o))&&(e.exports=r))}()},721:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),i=n.n(s),c=n(1),l=n.n(c),u=n(722),p=n.n(u),d=n(727),f=n.n(d),m=n(729),h=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=p.a.use(f.a),v={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},w={},_={},y=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLoad=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void n.fail(e);n.isActive&&n.setState({loadedText:t.text,status:v.LOADED},function(){n.props.onLoad(n.props.src,o)})},n.state={status:v.PENDING},n.isActive=!1,n}return a(t,e),g(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===v.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")):this.fail(Object(m.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,n=this.props,o=n.cacheGetRequests,r=n.src;if(o){if(_[r]){var a=h(_[r],2),s=a[0],i=a[1];e(s,i,!0)}w[r]||(w[r]=[],b.get(r,function(e,n){w[r].forEach(function(o){_[r]=[e,n],r===t.props.src&&o(e,n)})})),w[r].push(e)}else b.get(r,function(n,o){r===t.props.src&&e(n,o)})}},{key:"fail",value:function(e){var t=this,n=e.isUnsupportedBrowserError?v.UNSUPPORTED:v.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:v.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,n=t.uniquifyIDs,o=t.uniqueHash,r=t.baseURL;return n?Object(m.d)(e,o||Object(m.c)(),r):e}},{key:"renderContents",value:function(){switch(this.state.status){case v.UNSUPPORTED:case v.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(i.a.PureComponent);y.propTypes={baseURL:l.a.string,cacheGetRequests:l.a.bool,children:l.a.node,className:l.a.string,onError:l.a.func,onLoad:l.a.func,preloader:l.a.node,src:l.a.string.isRequired,style:l.a.object,supportTest:l.a.func,uniqueHash:l.a.string,uniquifyIDs:l.a.bool,wrapper:l.a.func},y.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:m.b,uniquifyIDs:!0,wrapper:i.a.createFactory("span")},t.a=y},722:function(e,t,n){"use strict";function o(e,t){function n(n,o){var s,l,m,h,g,b;for(n=new p(d(e,n)),a=0;a<t.length;a++)l=t[a],l.processRequest&&l.processRequest(n);for(a=0;a<t.length;a++)if(l=t[a],l.createXHR){s=l.createXHR(n);break}s=s||new i,n.xhr=s,m=f(c(function(e){clearTimeout(g),s.onload=s.onerror=s.onabort=s.onreadystatechange=s.ontimeout=s.onprogress=null;var i=r(n,e),c=i||u.fromRequest(n);for(a=0;a<t.length;a++)l=t[a],l.processResponse&&l.processResponse(c);i&&n.onerror&&n.onerror(i),!i&&n.onload&&n.onload(c),o&&o(i,i?void 0:c)})),b="onload"in s&&"onerror"in s,s.onload=function(){m()},s.onerror=m,s.onabort=function(){m()},s.onreadystatechange=function(){if(4===s.readyState){if(n.aborted)return m();if(!b){var e;try{e=s.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return m(t)}}},s.ontimeout=function(){},s.onprogress=function(){},s.open(n.method,n.url),n.timeout&&(g=setTimeout(function(){n.timedOut=!0,m();try{s.abort()}catch(e){}},n.timeout));for(h in n.headers)n.headers.hasOwnProperty(h)&&s.setRequestHeader(h,n.headers[h]);return s.send(n.body),n}e=e||{},t=t||[];var s,m=["get","post","put","head","patch","delete"];for(a=0;a<m.length;a++)s=m[a],n[s]=function(e){return function(t,o){return t=new p(t),t.method=e,n(t,o)}}(s);return n.plugins=function(){return t},n.defaults=function(n){return n?o(d(e,n),t):e},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return o(e,t.concat(n))},n.bare=function(){return o()},n.Request=p,n.Response=u,n.RequestError=l,n}function r(e,t){if(e.aborted)return m("Request aborted",e,{name:"Abort"});if(e.timedOut)return m("Request timeout",e,{name:"Timeout"});var n,o=e.xhr,r=Math.floor(o.status/100);switch(r){case 0:case 2:if(!t)return;return m(t.message,e);case 4:if(404===o.status&&!e.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var a=n+" Error: The server returned a status of "+o.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return m(a,e)}var a,s=n(723),i=n(724),c=n(725),l=n(726),u=n(716),p=n(717),d=n(714),f=n(719),m=l.create;e.exports=o({},[s])},723:function(e,t,n){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},724:function(e,t){e.exports=window.XMLHttpRequest},725:function(e,t,n){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),n=function(){return e.apply(null,t)};setTimeout(n,0)}}},726:function(e,t,n){"use strict";function o(e,t){var n=new Error(e);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var o in t)t.hasOwnProperty(o)&&(this[o]=t[o])}var r=n(716),a=n(718),s=n(714);o.prototype=s(Error.prototype),o.prototype.constructor=o,o.create=function(e,t,n){var s=new o(e,n);return r.call(s,a(t)),s},e.exports=o},727:function(e,t,n){"use strict";var o=n(728),r=n(719),a=!1,s=r(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,n,r;if("undefined"!==typeof window&&null!==window&&(t=o(e.url),n=o(window.location.href),t.host&&(t.protocol!==n.protocol||t.host!==n.host||t.port!==n.port))){if(!a&&e.headers)for(r in e.headers)if(e.headers.hasOwnProperty(r)){a=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!s()){var i=new window.XDomainRequest;return i.setRequestHeader=function(){},i}}}}},728:function(e,t){(function(){var t,n,o,r={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,o=function(e,t){return o.URL.parse(e,t)},o.URL=function(){function e(e){var t,o,a;for(t in n)r.call(n,t)&&(o=n[t],this[t]=null!=(a=e[t])?a:o);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var n,r,a;return n=e.toString().match(t),r=n[8]||"",a=n[1],new o.URL({protocol:a,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:a&&"/"!==r.charAt(0)?"/"+r:r,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},e}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=o}).call(this)},729:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return g});var s=n(730),i=n.n(s),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=i()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),u=i()(function(){return!(!l()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",n=t+t.toUpperCase()+"1234567890",o="",r=0;r<e;r++)o+=function(e){return e[Math.floor(Math.random()*e.length)]}(n);return o},d=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,n,o){var r=function(e){return e+"___"+n};return e.replace(t,function(e,t,n,a,s,i,c){return n?t+'="'+r(n)+'"':s?a+'="'+o+"#"+r(s)+'"':i?'="url('+o+"#"+r(i)+')"':c?"url("+o+"#"+r(c)+")":void 0})}}(),f=function(e){function t(e){var n;o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name="InlineSVGError",a.isSupportedBrowser=!0,a.isConfigurationError=!1,a.isUnsupportedBrowserError=!1,a.message=e,n=a,r(a,n)}return a(t,e),t}(Error),m=function(e,t){var n=new f(e);return c({},n,t)},h=function(e){var t=e;return t||(t="Unsupported Browser"),m(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},g=function(e){return m(e,{isConfigurationError:!0})}},730:function(e,t,n){function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function r(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},n=e.name||"Function wrapped with `once`";return t.onceError=n+" shouldn't be called more than once",t.called=!1,t}var a=n(731);e.exports=a(o),e.exports.strict=a(r),o.proto=o(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return r(this)},configurable:!0})})},731:function(e,t){function n(e,t){function o(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var o=e.apply(this,t),r=t[t.length-1];return"function"===typeof o&&o!==r&&Object.keys(r).forEach(function(e){o[e]=r[e]}),o}if(e&&t)return n(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){o[t]=e[t]}),o}e.exports=n},732:function(e,t,n){var o=n(733);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(692)(o,r);o.locals&&(e.exports=o.locals)},733:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},734:function(e,t,n){e.exports=n.p+"static/media/icon-stop.12973336.svg"},735:function(e,t,n){e.exports=n.p+"static/media/icon-balance.25d500b4.svg"},736:function(e,t,n){e.exports=n.p+"static/media/icon-center.d3865558.svg"},737:function(e,t,n){e.exports=n.p+"static/media/icon-close.f5458b61.svg"},738:function(e,t,n){e.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},739:function(e,t,n){e.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},740:function(e,t,n){e.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},741:function(e,t,n){e.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},742:function(e,t,n){e.exports=n.p+"static/media/icon-check.4443b294.svg"},743:function(e,t,n){e.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},744:function(e,t,n){e.exports=n.p+"static/media/icon-refresh.36718f54.svg"},745:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},746:function(e,t,n){e.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},747:function(e,t,n){e.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},748:function(e,t,n){e.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},749:function(e,t,n){e.exports=n.p+"static/media/icon-key-big.0d56bc9b.svg"},750:function(e,t,n){e.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},751:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},752:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},753:function(e,t,n){e.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},754:function(e,t,n){e.exports=n.p+"static/media/icon-settings.d15941a5.svg"},755:function(e,t,n){e.exports=n.p+"static/media/icon-pending.e2938acc.svg"},756:function(e,t,n){e.exports=n.p+"static/media/icon-simple-check.03179922.svg"},757:function(e,t,n){e.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},758:function(e,t,n){e.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},759:function(e,t,n){e.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},760:function(e,t,n){e.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},761:function(e,t,n){e.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},762:function(e,t,n){e.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},763:function(e,t,n){e.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},764:function(e,t,n){e.exports=n.p+"static/media/icon-buy.4736e26a.svg"},765:function(e,t,n){e.exports=n.p+"static/media/icon-sell.749581f6.svg"},766:function(e,t,n){e.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},767:function(e,t,n){e.exports=n.p+"static/media/icon-receive.f8805981.svg"},768:function(e,t,n){e.exports=n.p+"static/media/icon-send.0eae48e8.svg"},769:function(e,t,n){e.exports=n.p+"static/media/icon-deposit.361361b7.svg"},770:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw.aa1ee13f.svg"},771:function(e,t,n){e.exports=n.p+"static/media/icon-info.6448a8d0.svg"},772:function(e,t,n){e.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},773:function(e,t,n){e.exports=n.p+"static/media/icon-star.9e54355c.svg"},774:function(e,t,n){e.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},775:function(e,t,n){e.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},776:function(e,t,n){e.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},785:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}n.d(t,"a",function(){return f});var a=n(0),s=n.n(a),i=n(1),c=n.n(i),l=n(720),u=n.n(l),p=n(29),d=n(81),f=function(e){var t=e.input,n=e.customClass,a=e.classModifiers,i=e.meta,c=e.rows,l=e.info,p=e.label,f=e.labelInInput,m=e.rightLabelText,h=r(e,["input","customClass","classModifiers","meta","rows","info","label","labelInInput","rightLabelText"]),g=c>1,b=Object(d.b)(["ap-input",n]),v=Object.assign({className:u()("form-control",o({},b("with-label"),f),o({},b("input","error",""),i.dirty&&i.error),o({},b("text-area"),g),m?b("input","with-right-label"):b("input",a))},t,h);return s.a.createElement("div",{className:"form-group "+b("input-wrapper",a)},"hidden"!==e.type&&s.a.createElement("label",{className:"ap--label "+b("label",a)},p),s.a.createElement("div",{className:u()(m&&b("input-with-right-label-container"),b("input-box"))},f&&s.a.createElement("span",{className:"label-in-input "+b("label-in-input")},f),g?s.a.createElement("textarea",v):s.a.createElement("input",v),m?s.a.createElement("div",{className:b("right-label")},s.a.createElement("span",{className:b("right-label-span")},m)):null,l&&s.a.createElement("div",{className:"form-text-muted "+b("info")},l),i.touched&&i.error&&s.a.createElement("div",{className:b("error")},i.error)))},m=function(e){return s.a.createElement(p.a,Object.assign({name:e.name,component:f},e))};m.defaultProps={name:"",label:"",labelInInput:"",type:"",classModifiers:"",placeholder:"",info:"",autoFocus:"",disabled:!1,required:!1,rows:1},m.propTypes={name:c.a.string,label:c.a.string,labelInInput:c.a.string,type:c.a.string,customClass:c.a.string,classModifiers:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),placeholder:c.a.string,info:c.a.oneOfType([c.a.string,c.a.object]),autoFocus:c.a.string,disabled:c.a.bool,required:c.a.bool,rightLabelText:c.a.string,rows:c.a.number},t.b=m},786:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"e",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return l});var o=function(e){return e?void 0:"Required"},r=function(e,t){return e!==t.password?"Passwords do not match":void 0},a=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)?"Invalid email address":void 0},s=function(e){return e&&!/^[a-z0-9]*$/i.test(e)?"Input should only contain alphanumeric characters":void 0},i=function(e,t){return t&&t>e?"Must be less than "+e:void 0},c=function(e){return function(t){return void 0!==t&&t<=e?"Must be bigger than "+e:void 0}}(0),l=function(e){return e&&!/^(?=.{8,})(?=.*[A-Z])(?=.*[0-9]).*$/g.test(e)?"Password must contain at least 8 characters, one number, and at least one capital letter":void 0}},842:function(e,t,n){var o=n(852);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(692)(o,r);o.locals&&(e.exports=o.locals)},843:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),s=n.n(a),i=n(30),c=n(21),l=n(721),u=n(5),p=n(81),d=n(853),f=(n.n(d),function(e){var t=e.customClass,n=e.linkTo,o=Object(p.b)("ap-logo",t),a=function(){return u.default.global.siteLogo.match(/.svg$/)?r.a.createElement(l.a,{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:o("img")}):r.a.createElement("img",{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:o("img")})};return r.a.createElement("div",{className:o()},n?r.a.createElement(i.a,{className:o("link"),to:Object(c.a)(n)},a()):a())});f.defaultProps={customClass:"",linkTo:""},f.propTypes={customClass:s.a.string,linkTo:s.a.string},t.a=f},852:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".standalone-form__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;height:100%;background:var(--standalone-form__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-form__input-wrapper{margin-bottom:2.5rem}.standalone-form__input-box{height:3rem}.standalone-form__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-form__logo-color)}.standalone-form__close-icon{position:absolute;top:1.5rem;right:1.5rem;color:var(--font__color-primary)}.standalone-form__container{margin:auto;width:var(--standalone-form__container-width);min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--standalone-form__container-bg-color);-webkit-box-shadow:var(--standalone-form__container-box-shadow);box-shadow:var(--standalone-form__container-box-shadow)}.standalone-form__header{position:relative;height:6.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-form__header-color);background:var(--standalone-form__header-bg-color);padding-left:2.8rem;-webkit-box-shadow:var(--standalone-form__header-box-shadow);box-shadow:var(--standalone-form__header-box-shadow)}.standalone-form__header-text,.standalone-form__message-text{font-size:1.6rem;color:var(--font__color-primary)}.standalone-form__message{height:14rem;color:var(--standalone-form__message-color);background:var(--standalone-form__header-bg-color);padding:0 2.8rem;-webkit-box-shadow:var(--standalone-form__message-box-shadow);box-shadow:var(--standalone-form__message-box-shadow)}.standalone-form__message,.standalone-form__message-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.standalone-form__message-footer{height:6.2rem;margin:0 2.8rem;border-top:solid 1px var(--border__color)}.standalone-form__message-footer .standalone-form__btn--additive,.standalone-form__message-footer .standalone-form__btn--subtractive{font-size:1.1rem;display:inline-block;height:3.2rem;line-height:3.2rem;border-radius:2px;text-align:center;cursor:pointer;padding:0 1rem;border:1px solid transparent;color:var(--font__color-primary);white-space:nowrap;width:auto;min-width:var(--standalone-form__btn-width)}.standalone-form__message-footer .standalone-form__btn--subtractive{background:var(--danger__bg-color)}.standalone-form__message-footer .standalone-form__btn--additive{background:var(--success__bg-color)}.standalone-form__message-footer .standalone-form__btn--subtractive:hover{background:var(--danger__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--additive:hover{background:var(--success__bg-color--hover)}.standalone-form__message-footer .standalone-form__btn--subtractive:focus{background:var(--danger__bg-color--focus);border:solid 1px var(--danger__border-color--focus)}.standalone-form__message-footer .standalone-form__btn--additive:focus{background:var(--success__bg-color--focus);border:solid 1px var(--success__border-color--focus)}.standalone-form__success{padding:1rem}.standalone-form__terms-text{margin:1rem 0;line-height:1.45;color:var(--font__color-secondary)}.standalone-form__information-text{margin-bottom:2.8rem;font-size:1.4rem;color:var(--font__color-secondary)}.standalone-form__password-strength{color:var(--information__color)}.standalone-form__password-error{color:var(--danger__bg-color);margin-bottom:2.5rem}.standalone-form__footer{height:6.2rem;margin:0 2.8rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:solid 1px var(--border__color)}.standalone-form__footer-separator{width:0;height:2rem;border-right:solid 1px var(--border__color);margin:0 1.5rem}.standalone-form__form{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin:2.75rem}.standalone-form__btn{width:var(--standalone-form__btn-width);height:var(--standalone-form__btn-height);background-color:var(--standalone-form__btn-bg-color)}.standalone-form__separator{margin:0 0 2.5rem;display:block;border-top:solid 1px var(--border__color)}.standalone-form__auto-tab-input,.standalone-form__radio-list{margin-bottom:2.5rem}.standalone-form__error{color:var(--danger__color);padding-top:.5rem;display:inline-block}.standalone-form__info{padding-top:.5rem}@media (max-width:576px){.standalone-form__wrapper{-ms-flex-pack:start;justify-content:flex-start}.standalone-form__container{width:100%;font-size:1.3rem;-webkit-box-shadow:initial;box-shadow:none;margin:initial}.standalone-form__logo{-ms-flex-item-align:start;align-self:flex-start;position:static;top:auto;left:auto}}",""])},853:function(e,t,n){var o=n(854);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(692)(o,r);o.locals&&(e.exports=o.locals)},854:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}",""])},901:function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var r=n(0),a=n.n(r),s=n(1),i=n.n(s),c=n(29),l=n(81),u=function(e){var t=e.input,n=e.customClass,r=e.meta,s=e.inline,i=e.label,c=e.info,u=e.id,p=o(e,["input","customClass","meta","inline","label","info","id"]),d=Object(l.b)(["ap-radio",n]);return delete p.meta,a.a.createElement("div",{className:d(null,{inline:s})},a.a.createElement("input",Object.assign({className:d("input"),type:"radio"},t,p,{id:u})),a.a.createElement("label",{className:d("label"),htmlFor:u},i,a.a.createElement("span",{className:d("check")}),a.a.createElement("span",{className:d("checked")})),c&&a.a.createElement("small",{className:"form-text-muted "+d("radio-info")},c),r.dirty&&r.error&&a.a.createElement("span",{className:d("radio-error")},r.error))},p=function(e){return a.a.createElement(c.a,Object.assign({name:e.name,component:u,type:"radio"},e))};p.defaultProps={name:"",label:"",autoFocus:!1,required:!1,readOnly:!1,inline:!1,info:""},p.propTypes={name:i.a.string,label:i.a.string,customClass:i.a.string,autoFocus:i.a.bool,required:i.a.bool,readOnly:i.a.bool,inline:i.a.bool,info:i.a.string,id:i.a.string.isRequired},t.a=p}});