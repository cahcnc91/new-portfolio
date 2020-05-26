(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{31:function(t,e,r){"use strict";function a(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"section-nav navbar"},[r("div",{staticClass:"row"},[r("router-link",{attrs:{to:"/"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.href,s=(e.route,e.navigate),i=e.isActive;return[r("a",{staticClass:"navbar__logo",attrs:{active:i,href:a},on:{click:s}},[t._v("Camila Coder")])]}}])})],1)])}a._withStripped=!0;var s=r(1),i=Object(s.a)({},a,[],!1,null,null,null);i.options.__file="src/components/Navbar.vue",e.a=i.exports},32:function(t,e,r){"use strict";function a(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.link}},[r("div",{staticClass:"arrow arrow__left"},[r("svg",{staticStyle:{"enable-background":"new 0 0 404.258 404.258"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 404.258 404.258","xml:space":"preserve",height:"40px"}},[r("polygon",{staticStyle:{fill:"#fff"},attrs:{points:"289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "}})])])])}a._withStripped=!0;var s={props:{link:String}},i=r(1),o=Object(i.a)(s,a,[],!1,null,null,null);o.options.__file="src/components/ArrowLeft.vue",e.a=o.exports},33:function(t,e,r){"use strict";function a(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.link}},[r("div",{staticClass:"arrow arrow__right"},[r("svg",{staticStyle:{"enable-background":"new 0 0 404.258 404.258"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 404.258 404.258","xml:space":"preserve",height:"40px"}},[r("polygon",{staticStyle:{fill:"#fff"},attrs:{points:"138.331,0 114.331,18 252.427,202.129 114.331,386.258 138.331,404.258 289.927,202.129 "}})])])])}a._withStripped=!0;var s={props:{link:String}},i=r(1),o=Object(i.a)(s,a,[],!1,null,null,null);o.options.__file="src/components/ArrowRight.vue",e.a=o.exports},34:function(t,e,r){"use strict";function a(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),t._v(" "),r("section",{staticClass:"section-project"},[r("ArrowLeft",{attrs:{link:t.project.arrowLeft}}),t._v(" "),r("ArrowRight",{attrs:{link:t.project.arrowRight}}),t._v(" "),r("div",{staticClass:"row single-project"},[r("div",{staticClass:"col-1-of-4"},[r("h2",[t._v(t._s(t.project.title))]),t._v(" "),r("div",{staticClass:"single-project__divider"}),t._v(" "),r("a",{staticClass:"paragraph",attrs:{href:""}},[t._v(t._s(t.project.subtitle))]),t._v(" "),r("p",{staticClass:"paragraph u-margin-top-s"},[t._v("\n          "+t._s(t.project.body)+" "),t.project.link?r("span",[r("a",{staticClass:"single-project__link",attrs:{href:t.project.link,target:"_blank"}},[t._v("npm package")])]):t._e(),t._v(".\n        ")]),t._v(" "),r("p",{staticClass:"paragraph"},[r("b",[t._v("Technologies:")]),t._v(" "+t._s(t.project.technologies)+"\n        ")])]),t._v(" "),r("div",{staticClass:"col-3-of-4 single-project__img"},[r("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:t.project.iframe,title:"scatterplot-with-menus",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])])],1)],1)}a._withStripped=!0;var s=r(31),i=r(32),o=r(33),n={components:{Navbar:s.a,ArrowLeft:i.a,ArrowRight:o.a},props:{project:Object}},l=r(1),c=Object(l.a)(n,a,[],!1,null,null,null);c.options.__file="src/components/ProjectsSection/components/MyStuff.vue",e.a=c.exports},48:function(t,e,r){"use strict";function a(){var t=this.$createElement;return(this._self._c||t)("MyStuff",{attrs:{project:this.project}})}r.r(e),a._withStripped=!0;var s={components:{MyStuff:r(34).a},data:function(){return{project:{title:"Line Chart",subtitle:"Data Visualization",body:"COVID Line Chart made with d3. It is a data visualization of number of deaths and confirmed cases by country",technologies:"Vanilla Js, d3.",iframe:"https://codesandbox.io/embed/scatterplot-with-menus-rp40c?fontsize=14&hidenavigation=1&theme=dark&view=preview",arrowLeft:"/resovere",arrowRight:"/autocomplete"}}}},i=r(1),o=Object(i.a)(s,a,[],!1,null,null,null);o.options.__file="src/components/ProjectsSection/D3.vue",e.default=o.exports}}]);