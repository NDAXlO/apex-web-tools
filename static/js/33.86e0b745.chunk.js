webpackJsonp([33],{1053:function(e,a,t){"use strict";var i=function(e){var a=document.createElement("textarea");a.innerText=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()};a.a=i},1398:function(e,a,t){"use strict";var i=t(0),r=t.n(i),n=t(1),o=t.n(n),l=t(34),c=t(1399),s=(t.n(c),t(1053)),d=t(6),f=t(5),m=t(1401),_=Object(d.b)("affiliate"),b=function(e,a){var t=e.path,i=e.affiliate,n=e.showSnack,o=e.openAffiliateModal,c=""+window.location.origin+t("")+"?aff="+i.affiliateTag;return r.a.createElement("section",{className:_()},r.a.createElement("header",{className:_("main-header")},r.a.createElement("h1",{className:_("header")},a.t("Join the {n} Affiliate Program",{n:f.default.global.siteName})),r.a.createElement("p",{className:_("description")},a.t("Our affiliate program lets you earn a bonus for each successful referral registered to your account. Create an affiliate link below, copy it and email to a friend. Your friends can click on the affiliate link and sign up for an account, at which point you will see the number of affliates increase on this page."))),r.a.createElement("section",{className:_("body")},r.a.createElement("section",{className:_("container")},r.a.createElement("header",{className:_("container-header")},r.a.createElement("h1",{className:_("container-header--title")},a.t("Current Active Tag"))),r.a.createElement("section",{className:_("container-content")},r.a.createElement("p",{className:_("tag")},i.affiliateTag),i.affiliateTag&&r.a.createElement("p",{id:"affiliateTag",className:_("tag-description")},c),r.a.createElement("div",{className:_("btn-container")},r.a.createElement(l.a,{customClass:_(),onClick:function(){return o()}},function(){return i.affiliateTag?a.t("Edit"):a.t("Create")}()),i.affiliateTag&&r.a.createElement(l.a,{customClass:_(),onClick:function(){n(a.t("The affiliate tag has been copied to the clipboard.")),Object(s.a)(c)}},a.t("Copy"))))),r.a.createElement("section",{className:_("container")},r.a.createElement("header",{className:_("container-header")},r.a.createElement("h1",{className:_("container-header--title")},a.t("Number of Active Affiliates"))),r.a.createElement("section",{className:_("container-content")},r.a.createElement("p",{className:_("tag")},i.affiliateCount," ",a.t("Affiliates"))))),r.a.createElement(m.a,null))};b.contextTypes={t:o.a.func.isRequired},a.a=b},1399:function(e,a,t){var i=t(1400);"string"===typeof i&&(i=[[e.i,i,""]]);var r={hmr:!1};r.transform=void 0;t(938)(i,r);i.locals&&(e.exports=i.locals)},1400:function(e,a,t){a=e.exports=t(46)(!1),a.push([e.i,'.affiliate{overflow:auto;width:100%;height:var(--settings__body-height);position:relative;z-index:0;background:var(--settings__body-bg-color);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.affiliate__main-header{max-width:calc(var(--retail-setting__body-max-width) / 1.5);background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.affiliate__main-header:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.affiliate__header{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.affiliate__description{max-width:calc(var(--retail-setting__body-max-width) / 1.5);font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height)}.affiliate__body{overflow:visible;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.affiliate__tag{margin-bottom:10px;font-size:2rem}.affiliate__tag,.affiliate__tag-description{line-height:1.27;letter-spacing:.5px;color:var(--component__color-primary)}.affiliate__tag-description{max-width:80rem;background:unset;cursor:pointer}.affiliate__container{width:calc(50% - 3rem);max-width:50rem;min-width:30rem;border-radius:var(--affiliate__border-radius);border:solid 1px var(--affiliate__border-color);background:var(--component__bg-color);color:var(--component__color-primary);margin:var(--settings__body-header-margin);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-box-shadow:var(--settings__card-box-shadow);box-shadow:var(--settings__card-box-shadow)}.affiliate__container header{border-bottom:solid 1px var(--affiliate__border-color);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top-left-radius:var(--affiliate__border-radius);border-top-right-radius:var(--affiliate__border-radius);padding:var(--settings__card-header-padding);color:var(--settings__card-header-title-font-color);background:var(--settings__card-header-bg-color);border-bottom:var(--settings__card-header-accent-border);letter-spacing:var(--settings__card-header-title-letter-spacing)}.affiliate__container header,.affiliate__container header h1{font-size:var(--settings__card-header-title-font-size)}.affiliate__container-content{padding:2rem}.affiliate__container-header{border-bottom:solid 1px var(--component__header-separator-color)}.affiliate__container-header--title{margin:0}.affiliate__btn-container{height:5rem;margin:6.7rem -2rem 0;border-top:1px solid;border-color:var(--affiliate__btn-border-color--hover)}.affiliate__btn{height:3rem;width:6rem;line-height:2.4rem;margin:2rem 2rem 0;border:1px solid;border-radius:.2rem;border-color:var(--affiliate__btn-border-color);background-color:var(--affiliate__btn-bg-color)}.affiliate__btn,.affiliate__btn:hover{font-size:1.1rem;letter-spacing:.5px;color:var(--affiliate__btn-color)}.affiliate__btn:hover{border:1px solid;border-color:var(--affiliate__btn-border-color--hover);background-color:var(--affiliate__btn-bg-color--hover)}.affiliate-modal__form{font-size:1.4rem}.affiliate-modal__input-wraper{min-height:10rem}.affiliate-modal__input{min-width:320px}.affiliate-modal__ap-modal{border-radius:.4rem}.affiliate-modal__footer{margin:0 -2.5rem;min-height:6rem;border-top:1px solid;border-color:var(--affiliate__btn-border-color--hover)}.affiliate-modal__btn{height:4rem;width:32rem;margin:2rem 2.5rem 0;-ms-flex-item-align:center;align-self:center;justify-self:center}@media only screen and (max-width:48rem){.affiliate{height:unset;-ms-flex:1 1;flex:1 1}.affiliate__main-header:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding)) * -1)}}',""])},1401:function(e,a,t){"use strict";var i=t(8),r=t(7),n=t(1402),o=t(971),l=t(48),c=t(53),s=function(e){return{initialValues:{tag:e.affiliate.affiliateTag}}},d={getAffiliate:c.d},f=Object(r.j)({form:"updateAffiliate",onSubmit:function(e,a){return a(Object(c.g)(e))}})(n.a),m=Object(i.connect)(s,d)(f);a.a=Object(o.a)({name:l.b.NEW_AFFILIATE_KEY})(m)},1402:function(e,a,t){"use strict";var i=t(0),r=t.n(i),n=t(1),o=t.n(n),l=t(191),c=t(192),s=t(34),d=t(6),f=Object(d.b)("affiliate-modal"),m=function(e,a){var t=e.handleSubmit,i=e.submitting;return r.a.createElement(l.a,{isOpen:e.isOpen,title:a.t("Create or Edit Affiliate Tag"),onCancel:function(){e.close()},close:e.close,customClass:f("ap-modal")},r.a.createElement("form",{onSubmit:t,className:f("form")},r.a.createElement("div",{className:f("input-wraper")},a.t("Change tag"),r.a.createElement(c.b,{customClass:f(),type:"text",name:"tag"})),r.a.createElement("div",{className:f("footer")},r.a.createElement(s.a,{type:"submit",customClass:f()},i?a.t("Submitting..."):a.t("Update")))))};m.propTypes={submitting:o.a.bool.isRequired,close:o.a.func.isRequired},m.contextTypes={t:o.a.func.isRequired},a.a=m},955:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(8),r=t(1398),n=t(53),o=t(11),l=t(22),c=function(e){return{path:l.a,affiliate:e.affiliate}},s=function(e){return{openAffiliateModal:function(){return e(Object(n.f)())},showSnack:function(a){return e(Object(o.f)({id:"affiliateCopyTage",text:a,type:"success"}))}}};a.default=Object(i.connect)(c,s)(r.a)},971:function(e,a,t){"use strict";var i=t(8),r=t(48),n=function(e){var a=e.name,t=function(e){if(e.modal.hasOwnProperty(a)){var t=e.modal[a],i=t.isOpen,r=t.modalProps;return Object.assign({isOpen:i},r)}return{isOpen:!1}},n=function(e){return{close:function(){return e(Object(r.d)(a))}}};return function(e){return Object(i.connect)(t,n)(e)}};a.a=n}});