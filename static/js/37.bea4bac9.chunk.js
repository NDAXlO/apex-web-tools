webpackJsonp([37],{674:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o=n(7),s=n(911),i=function(t){return{snacks:t.snackbar.snacks}},a=function(t){return{dismissSnackByUniqueId:function(e){return t(Object(o.e)(e))}}};e.default=Object(r.connect)(i,a)(s.a)},697:function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}t.exports=n},698:function(t,e,n){"use strict";var r=n(0),o=n.n(r),s=n(2),i=n.n(s),a=n(707),c=n(241),u=n(718),p=(n.n(u),n(720)),f=n.n(p),l=n(721),h=n.n(l),d=n(722),m=n.n(d),v=n(723),g=n.n(v),y=n(724),b=n.n(y),w=n(725),x=n.n(w),k=n(726),O=n.n(k),R=n(727),E=n.n(R),_=n(728),j=n.n(_),P=n(729),C=n.n(P),q=n(730),T=n.n(q),S=n(731),L=n.n(S),A=n(732),N=n.n(A),U=n(733),D=n.n(U),I=n(734),M=n.n(I),H=n(735),G=n.n(H),X=n(736),B=n.n(X),F=n(737),V=n.n(F),z=n(738),W=n.n(z),$=n(739),J=n.n($),K=n(740),Q=n.n(K),Y=n(741),Z=n.n(Y),tt=n(742),et=n.n(tt),nt=n(743),rt=n.n(nt),ot=n(744),st=n.n(ot),it=n(745),at=n.n(it),ct=n(746),ut=n.n(ct),pt=n(747),ft=n.n(pt),lt=n(748),ht=n.n(lt),dt=n(749),mt=n.n(dt),vt=n(750),gt=n.n(vt),yt=n(751),bt=n.n(yt),wt=n(752),xt=n.n(wt),kt=n(753),Ot=n.n(kt),Rt=n(754),Et=n.n(Rt),_t=n(755),jt=n.n(_t),Pt=n(756),Ct=n.n(Pt),qt=n(757),Tt=n.n(qt),St=n(758),Lt=n.n(St),At=n(759),Nt=n.n(At),Ut=n(760),Dt=n.n(Ut),It=n(761),Mt=n.n(It),Ht={"user-settings":et.a,"buy-sell":st.a,user:ft.a,notification:ht.a,dashboard:ut.a,trading:at.a,wallet:rt.a,stop:f.a,balance:h.a,center:m.a,close:g.a,"close-inverse":b.a,"deposit-arrow":x.a,download:G.a,exchange:O.a,"generate-reports":E.a,check:j.a,checkbox:C.a,refresh:T.a,"withdraw-arrow":L.a,menu:N.a,"menu-toggle":D.a,key:M.a,arrowPrevious:B.a,arrowNext:V.a,"simple-check":Z.a,pending:Q.a,settings:J.a,alert:W.a,buy:mt.a,sell:gt.a,eye:bt.a,receive:xt.a,send:Ot.a,deposit:Et.a,withdraw:jt.a,info:Ct.a,copy:Tt.a,star:Lt.a,"logo-powered":Nt.a,"open-buy":Dt.a,"open-sell":Mt.a},Gt=function(t){var e=t.name,n=t.customClass,r=t.classModifiers,s=Object(c.a)(r,e),i=Object(c.b)(["ap-icon",n]),u=Ht[e];return o.a.createElement(a.a,{src:u,className:i(null,s)})};Gt.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Gt.propTypes={name:i.a.string,customClass:i.a.string,classModifiers:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),disabled:i.a.bool},e.a=Gt},699:function(t,e,n){"use strict";function r(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=n(700),s=n(701);r.prototype.header=o.prototype.header,r.fromRequest=function(t){return new r(s(t))},t.exports=r},700:function(t,e,n){"use strict";function r(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(t,e){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&t.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=e)return this.headers[t]=e,e},t.exports=r},701:function(t,e,n){"use strict";var r=n(697);t.exports=function(t){var e=t.xhr,n={request:t,xhr:e};try{var o,s,i,a={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),s=0;s<o.length;s++)(i=o[s].match(/\s*([^\s]+):\s+([^\s]+)/))&&(a[i[1]]=i[2]);n=r(n,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:a,text:e.responseText,body:e.response||e.responseText})}catch(t){}return n}},702:function(t,e,n){"use strict";t.exports=function(t){var e,n=!1;return function(){return n||(n=!0,e=t.apply(this,arguments)),e}}},707:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n(0),a=n.n(i),c=n(2),u=n.n(c),p=n(708),f=n.n(p),l=n(713),h=n.n(l),d=n(715),m=function(){function t(t,e){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,s=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=f.a.use(h.a),y={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},b={},w={},x=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleLoad=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void n.fail(t);n.isActive&&n.setState({loadedText:e.text,status:y.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:y.PENDING},n.isActive=!1,n}return s(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===y.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(d.a)("Missing source")):this.fail(Object(d.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(d.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(w[o]){var s=m(w[o],2),i=s[0],a=s[1];t(i,a,!0)}b[o]||(b[o]=[],g.get(o,function(t,n){b[o].forEach(function(r){w[o]=[t,n],o===e.props.src&&r(t,n)})})),b[o].push(t)}else g.get(o,function(n,r){o===e.props.src&&t(n,r)})}},{key:"fail",value:function(t){var e=this,n=t.isUnsupportedBrowserError?y.UNSUPPORTED:y.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:y.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,n=e.uniquifyIDs,r=e.uniqueHash,o=e.baseURL;return n?Object(d.d)(t,r||Object(d.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case y.UNSUPPORTED:case y.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(a.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:d.b,uniquifyIDs:!0,wrapper:a.a.createFactory("span")},e.a=x},708:function(t,e,n){"use strict";function r(t,e){function n(n,r){var i,u,d,m,v,g;for(n=new f(l(t,n)),s=0;s<e.length;s++)u=e[s],u.processRequest&&u.processRequest(n);for(s=0;s<e.length;s++)if(u=e[s],u.createXHR){i=u.createXHR(n);break}i=i||new a,n.xhr=i,d=h(c(function(t){clearTimeout(v),i.onload=i.onerror=i.onabort=i.onreadystatechange=i.ontimeout=i.onprogress=null;var a=o(n,t),c=a||p.fromRequest(n);for(s=0;s<e.length;s++)u=e[s],u.processResponse&&u.processResponse(c);a&&n.onerror&&n.onerror(a),!a&&n.onload&&n.onload(c),r&&r(a,a?void 0:c)})),g="onload"in i&&"onerror"in i,i.onload=function(){d()},i.onerror=d,i.onabort=function(){d()},i.onreadystatechange=function(){if(4===i.readyState){if(n.aborted)return d();if(!g){var t;try{t=i.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return d(e)}}},i.ontimeout=function(){},i.onprogress=function(){},i.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,d();try{i.abort()}catch(t){}},n.timeout));for(m in n.headers)n.headers.hasOwnProperty(m)&&i.setRequestHeader(m,n.headers[m]);return i.send(n.body),n}t=t||{},e=e||[];var i,d=["get","post","put","head","patch","delete"];for(s=0;s<d.length;s++)i=d[s],n[i]=function(t){return function(e,r){return e=new f(e),e.method=t,n(e,r)}}(i);return n.plugins=function(){return e},n.defaults=function(n){return n?r(l(t,n),e):t},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(t,e.concat(n))},n.bare=function(){return r()},n.Request=f,n.Response=p,n.RequestError=u,n}function o(t,e){if(t.aborted)return d("Request aborted",t,{name:"Abort"});if(t.timedOut)return d("Request timeout",t,{name:"Timeout"});var n,r=t.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!e)return;return d(e.message,t);case 4:if(404===r.status&&!t.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var s=n+" Error: The server returned a status of "+r.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return d(s,t)}var s,i=n(709),a=n(710),c=n(711),u=n(712),p=n(699),f=n(700),l=n(697),h=n(702),d=u.create;t.exports=r({},[i])},709:function(t,e,n){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},710:function(t,e){t.exports=window.XMLHttpRequest},711:function(t,e,n){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),n=function(){return t.apply(null,e)};setTimeout(n,0)}}},712:function(t,e,n){"use strict";function r(t,e){var n=new Error(t);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}var o=n(699),s=n(701),i=n(697);r.prototype=i(Error.prototype),r.prototype.constructor=r,r.create=function(t,e,n){var i=new r(t,n);return o.call(i,s(e)),i},t.exports=r},713:function(t,e,n){"use strict";var r=n(714),o=n(702),s=!1,i=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,n,o;if("undefined"!==typeof window&&null!==window&&(e=r(t.url),n=r(window.location.href),e.host&&(e.protocol!==n.protocol||e.host!==n.host||e.port!==n.port))){if(!s&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){s=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!i()){var a=new window.XDomainRequest;return a.setRequestHeader=function(){},a}}}}},714:function(t,e){(function(){var e,n,r,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(t,e){return r.URL.parse(t,e)},r.URL=function(){function t(t){var e,r,s;for(e in n)o.call(n,e)&&(r=n[e],this[e]=null!=(s=t[e])?s:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var n,o,s;return n=t.toString().match(e),o=n[8]||"",s=n[1],new r.URL({protocol:s,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:s&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},t}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=r}).call(this)},715:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return v});var i=n(716),a=n.n(i),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=a()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),p=a()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),f=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",n=e+e.toUpperCase()+"1234567890",r="",o=0;o<t;o++)r+=function(t){return t[Math.floor(Math.random()*t.length)]}(n);return r},l=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,n,r){var o=function(t){return t+"___"+n};return t.replace(e,function(t,e,n,s,i,a,c){return n?e+'="'+o(n)+'"':i?s+'="'+r+"#"+o(i)+'"':a?'="url('+r+"#"+o(a)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),h=function(t){function e(t){var n;r(this,e);var s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.name="InlineSVGError",s.isSupportedBrowser=!0,s.isConfigurationError=!1,s.isUnsupportedBrowserError=!1,s.message=t,n=s,o(s,n)}return s(e,t),e}(Error),d=function(t,e){var n=new h(t);return c({},n,e)},m=function(t){var e=t;return e||(e="Unsupported Browser"),d(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return d(t,{isConfigurationError:!0})}},716:function(t,e,n){function r(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},n=t.name||"Function wrapped with `once`";return e.onceError=n+" shouldn't be called more than once",e.called=!1,e}var s=n(717);t.exports=s(r),t.exports.strict=s(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},717:function(t,e){function n(t,e){function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),o=e[e.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),r}if(t&&e)return n(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e]}),r}t.exports=n},718:function(t,e,n){var r=n(719);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(671)(r,o);r.locals&&(t.exports=r.locals)},719:function(t,e,n){e=t.exports=n(20)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},720:function(t,e,n){t.exports=n.p+"static/media/icon-stop.12973336.svg"},721:function(t,e,n){t.exports=n.p+"static/media/icon-balance.25d500b4.svg"},722:function(t,e,n){t.exports=n.p+"static/media/icon-center.d3865558.svg"},723:function(t,e,n){t.exports=n.p+"static/media/icon-close.f5458b61.svg"},724:function(t,e,n){t.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},725:function(t,e,n){t.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},726:function(t,e,n){t.exports=n.p+"static/media/icon-exchange.9c5a32b0.svg"},727:function(t,e,n){t.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},728:function(t,e,n){t.exports=n.p+"static/media/icon-check.4443b294.svg"},729:function(t,e,n){t.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},730:function(t,e,n){t.exports=n.p+"static/media/icon-refresh.36718f54.svg"},731:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},732:function(t,e,n){t.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},733:function(t,e,n){t.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},734:function(t,e,n){t.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},735:function(t,e,n){t.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},736:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},737:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},738:function(t,e,n){t.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},739:function(t,e,n){t.exports=n.p+"static/media/icon-settings.d15941a5.svg"},740:function(t,e,n){t.exports=n.p+"static/media/icon-pending.e2938acc.svg"},741:function(t,e,n){t.exports=n.p+"static/media/icon-simple-check.03179922.svg"},742:function(t,e,n){t.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},743:function(t,e,n){t.exports=n.p+"static/media/icon-nav-wallet.d1ac2082.svg"},744:function(t,e,n){t.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},745:function(t,e,n){t.exports=n.p+"static/media/icon-nav-trading.ac0d0bea.svg"},746:function(t,e,n){t.exports=n.p+"static/media/icon-nav-dashboard-on.56ceecff.svg"},747:function(t,e,n){t.exports=n.p+"static/media/icon-nav-user.1cd05f40.svg"},748:function(t,e,n){t.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},749:function(t,e,n){t.exports=n.p+"static/media/icon-buy.4736e26a.svg"},750:function(t,e,n){t.exports=n.p+"static/media/icon-sell.749581f6.svg"},751:function(t,e,n){t.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},752:function(t,e,n){t.exports=n.p+"static/media/icon-receive.f8805981.svg"},753:function(t,e,n){t.exports=n.p+"static/media/icon-send.0eae48e8.svg"},754:function(t,e,n){t.exports=n.p+"static/media/icon-deposit.59dc6048.svg"},755:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw.ce30850a.svg"},756:function(t,e,n){t.exports=n.p+"static/media/icon-info.6448a8d0.svg"},757:function(t,e,n){t.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},758:function(t,e,n){t.exports=n.p+"static/media/icon-star.9e54355c.svg"},759:function(t,e,n){t.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},760:function(t,e,n){t.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},761:function(t,e,n){t.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},846:function(t,e,n){"use strict";var r={timeout:4e3,type:"info",showMultiple:!0,showProgressBar:!0};e.a=r},911:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n(0),a=n.n(i),c=n(2),u=n.n(c),p=n(241),f=n(846),l=n(912),h=n(915),d=(n.n(h),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),m=function(t){function e(){var t,n,s,i;r(this,e);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=s=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),s.bemClasses=Object(p.b)(["ap-snackbar"]),i=n,o(s,i)}return s(e,t),d(e,[{key:"closeSnack",value:function(t){this.props.dismissSnackByUniqueId(t.uniqueId),t.onClose&&t.onClose()}},{key:"getSnackElement",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.timeout||f.a.timeout,o=Math.round(r/1e3);return setTimeout(function(){return e.closeSnack(t)},r),a.a.createElement("div",{key:n,className:this.bemClasses("snack")},a.a.createElement(l.a,Object.assign({},t,{onClose:function(){return e.closeSnack(e.props.snacks[0])}})),f.a.showProgressBar&&a.a.createElement("div",{className:this.bemClasses("snack-progress"),style:{animationDuration:o+"s"}}))}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:this.bemClasses()},f.a.showMultiple&&this.props.snacks.map(function(e,n){return t.getSnackElement(e,n)}),!f.a.showMultiple&&this.props.snacks[0]&&this.getSnackElement(this.props.snacks[0]))}}]),e}(i.Component);m.defaultProps={timeout:f.a.timeout,snacks:[]},m.propTypes={timeout:u.a.number,snacks:u.a.arrayOf(u.a.shape({timeout:u.a.number,text:u.a.string.isRequired,id:u.a.string.isRequired,type:u.a.oneOf(["info","success","warning"]),customClass:u.a.string,onClose:u.a.func})).isRequired},e.a=m},912:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n(0),a=n.n(i),c=n(2),u=n.n(c),p=n(241),f=n(846),l=n(698),h=n(913),d=(n.n(h),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),m=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),d(e,[{key:"render",value:function(){var t=this,e=Object(p.b)(["snackbar",this.props.customClass]),n=this.props,r=n.type,o=n.text,s=n.textVars;return a.a.createElement("div",{className:e("",r)},a.a.createElement("div",{className:e("text",r)},this.context.t(o,s)),a.a.createElement("div",{className:e("close",r),onClick:function(){return t.props.onClose()}},a.a.createElement(l.a,{name:"close",className:e("close-icon"),customClass:e("icon"),classModifiers:"big"})))}}]),e}(i.Component);m.defaultProps={timeout:f.a.timeout,text:"",textVars:{},type:f.a.type,customClass:"custom-snackbar",onClose:function(){}},m.contextTypes={t:u.a.func.isRequired},m.propTypes={timeout:u.a.number,id:u.a.string.isRequired,text:u.a.string.isRequired,textVars:u.a.object,type:u.a.oneOf(["info","success","warning"]),customClass:u.a.string,onClose:u.a.func},e.a=m},913:function(t,e,n){var r=n(914);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(671)(r,o);r.locals&&(t.exports=r.locals)},914:function(t,e,n){e=t.exports=n(20)(!1),e.push([t.i,".snackbar{height:52px;color:var(--font__color-primary);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:flex-start;padding:0 2rem;position:relative}.snackbar--info{background:var(--information__color)}.snackbar--success{background:var(--success__color)}.snackbar--warning{background:var(--danger__color)}.snackbar__close,.snackbar__text{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;line-height:52px;vertical-align:middle}",""])},915:function(t,e,n){var r=n(678);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(671)(r,o);r.locals&&(t.exports=r.locals)}});