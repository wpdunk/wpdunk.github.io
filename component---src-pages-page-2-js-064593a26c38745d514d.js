(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),o=a(147),c=a(150);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},145:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(145);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(146),u=(a(152),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,(new Date).getFullYear()," - In construction!"," ",i.a.createElement("span",{role:"img","aria-label":"construction emoji"},"🚧"))))},data:n})});u.propTypes={children:c.a.node.isRequired},t.a=u},148:function(e){e.exports={data:{site:{siteMetadata:{title:"William Dunk"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(153),u=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},151:function(e){e.exports={data:{site:{siteMetadata:{title:"William Dunk",description:"👨‍💻 coding and 🚴‍ cycling",author:"@wpdunk"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-064593a26c38745d514d.js.map