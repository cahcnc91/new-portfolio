(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{31:function(t,e,s){"use strict";function a(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"section-nav navbar"},[s("div",{staticClass:"row"},[s("router-link",{attrs:{to:"/"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.href,r=(e.route,e.navigate),c=e.isActive;return[s("a",{staticClass:"navbar__logo",attrs:{active:c,href:a},on:{click:r}},[t._v("Camila Coder")])]}}])})],1)])}a._withStripped=!0;var r=s(1),c=Object(r.a)({},a,[],!1,null,null,null);c.options.__file="src/components/Navbar.vue",e.a=c.exports},39:function(t,e,s){"use strict";function a(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),t._v(" "),s("Cards")],1)}function r(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-projects",attrs:{id:"projects"}},[s("div",{staticClass:"row"},t._l(t.projects,(function(e){return s("ProjectsCard",{key:t.projects.title,attrs:{item:e}})})),1)])}function c(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-1-of-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card__side card__side--front"},[s("div",{class:t.item.class}),t._v(" "),s("h4",{staticClass:"card__heading"},[s("span",{staticClass:"card__heading--span"},[t._v("\n          "+t._s(t.item.title)+"\n        ")])]),t._v(" "),s("div",{staticClass:"card__details"},[s("ul",t._l(t.item.tools,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)])]),t._v(" "),s("div",{staticClass:"card__side card__side--back card__side--back-1"},[s("div",{staticClass:"card__cta"},[s("p",{staticClass:"card__name"},[t._v(t._s(t.item.title))]),t._v(" "),s("router-link",{attrs:{to:t.item.link},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.href,r=(e.route,e.navigate);return[s("a",{staticClass:"button button--transparent-green",attrs:{href:a},on:{click:r}},[t._v("LEARN MORE")])]}}])})],1)])])])}s.r(e),c._withStripped=r._withStripped=a._withStripped=!0;var i={props:{item:Object}},n=s(1),o=Object(n.a)(i,c,[],!1,null,null,null);o.options.__file="src/components/ProjectsSection/components/ProjectsCard.vue";var l={components:{ProjectsCard:o.exports},data:function(){return{projects:[{title:"THINK EMPIRE",tools:["Nodejs / Express","MySQL / GraphQL","React / Redux","GCP"],class:"card__picture card__picture--1",link:"/thinkempire"},{title:"RESOVERE",tools:["Wordpress","VUE","SCSS","Webpack"],class:"card__picture card__picture--2",link:"/resovere"},{title:"MY FUN PROJECTS",tools:["React","Vue","Webpack","npm"],class:"card__picture card__picture--3",link:"/autocomplete"}]}}},_=Object(n.a)(l,r,[],!1,null,null,null);_.options.__file="src/components/ProjectsSection/components/Cards.vue";var u={components:{Cards:_.exports,Navbar:s(31).a}},d=Object(n.a)(u,a,[],!1,null,null,null);d.options.__file="src/layout/Projects.vue",e.default=d.exports}}]);