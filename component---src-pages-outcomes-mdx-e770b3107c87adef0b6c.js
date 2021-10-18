"use strict";(self.webpackChunkBY_COVID_website=self.webpackChunkBY_COVID_website||[]).push([[497],{1059:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return H},default:function(){return R}});var n=r(7294),a=r(4983),l=r(7198),i=r(4942),s=r(5987),o=r(5900),c=r.n(o),u=r(9541),m=r(5893),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.striped,l=e.bordered,i=e.borderless,o=e.hover,p=e.size,b=e.variant,v=e.responsive,y=(0,s.Z)(e,d),h=(0,u.vE)(r,"table"),O=c()(n,h,b&&"".concat(h,"-").concat(b),p&&"".concat(h,"-").concat(p),a&&"".concat(h,"-striped"),l&&"".concat(h,"-bordered"),i&&"".concat(h,"-borderless"),o&&"".concat(h,"-hover")),g=(0,m.jsx)("table",f(f({},y),{},{className:O,ref:t}));if(v){var x="".concat(h,"-responsive");return"string"==typeof v&&(x="".concat(x,"-").concat(v)),(0,m.jsx)("div",{className:x,children:g})}return g})),v=r(6187),y=r(994),h=r(7408);function O(e,t){var r=0;return n.Children.map(e,(function(e){return n.isValidElement(e)?t(e,r++):e}))}var g=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],x=["isChild"],w=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){var n=(e-t)/(r-t)*100;return Math.round(1e3*n)/1e3}function Z(e,t){var r,n=e.min,a=e.now,l=e.max,o=e.label,u=e.visuallyHidden,d=e.striped,p=e.animated,f=e.className,b=e.style,v=e.variant,y=e.bsPrefix,h=(0,s.Z)(e,g);return(0,m.jsx)("div",E(E({ref:t},h),{},{role:"progressbar",className:c()(f,"".concat(y,"-bar"),(r={},(0,i.Z)(r,"bg-".concat(v),v),(0,i.Z)(r,"".concat(y,"-bar-animated"),p),(0,i.Z)(r,"".concat(y,"-bar-striped"),p||d),r)),style:E({width:"".concat(P(a,n,l),"%")},b),"aria-valuenow":a,"aria-valuemin":n,"aria-valuemax":l,children:u?(0,m.jsx)("span",{className:"visually-hidden",children:o}):o}))}var C=n.forwardRef((function(e,t){var r=e.isChild,a=(0,s.Z)(e,x);if(a.bsPrefix=(0,u.vE)(a.bsPrefix,"progress"),r)return Z(a,t);var l=a.min,i=a.now,o=a.max,d=a.label,p=a.visuallyHidden,f=a.striped,b=a.animated,v=a.bsPrefix,y=a.variant,h=a.className,g=a.children,j=(0,s.Z)(a,w);return(0,m.jsx)("div",E(E({ref:t},j),{},{className:c()(h,v),children:g?O(g,(function(e){return(0,n.cloneElement)(e,{isChild:!0})})):Z({min:l,now:i,max:o,label:d,visuallyHidden:p,striped:f,animated:b,bsPrefix:v,variant:y},t)}))}));C.displayName="ProgressBar",C.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var D=C,N=function(e){return n.createElement("div",null,n.createElement("h2",{class:"mt-2"},e.progressTitle),n.createElement("div",{class:"bar-progress"},n.createElement(D,{now:e.progress}),n.createElement("p",{class:"progress-start"},"October 2021 Kick-off"),n.createElement("p",{class:"progress-end"},"October 2024")))},T=["components"];function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var H={},_={_frontmatter:H},I=l.Z;function R(e){var t=e.components,r=S(e,T);return(0,a.mdx)(I,k({},_,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(v.Z,{mdxType:"Container"},(0,a.mdx)(y.Z,{mdxType:"Row"},(0,a.mdx)(h.Z,{mdxType:"Col"},(0,a.mdx)(N,{progressTitle:"Progress",progress:"1",mdxType:"Progress"}),(0,a.mdx)("p",null,"BY-COVID runs from October 2021 to October 2024. The ultimate outcome of the project is that SARS-CoV-2 and other infectious disease data will be easier to access, share and analyse. This will enable the world to respond more quickly to infectious disease outbreaks. During the project there will also be specific outputs such as publications and deliverables. Deliverables will include  reports and best practice guidelines. These outputs will appear here as the project progresses."),(0,a.mdx)("span",{className:"anchor",id:"deliverables"}),(0,a.mdx)("h2",null,"Deliverables"),(0,a.mdx)(b,{className:"bg-white mb-5",mdxType:"Table"},(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"All deliverables will appear here as they are published."))))))))}R.isMDXComponent=!0},7198:function(e,t,r){var n=r(7294),a=r(5697),l=r.n(a),i=r(5444),s=r(6187),o=r(994),c=r(7408),u=r(4414),m=r(6179),d=r(8915),p=r(5414),f=["location","children","pageContext"];function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=function(e){e.location;var t=e.children,r=e.pageContext;b(e,f);return n.createElement(i.StaticQuery,{query:"2516051163",render:function(e){return n.createElement(n.Fragment,null,n.createElement(p.Z,null,n.createElement("body",{className:r.frontmatter.class})),n.createElement(m.Z,{title:r.frontmatter.title,description:r.frontmatter.description,imageTwitter:r.frontmatter.imageTwitter,imageOg:r.frontmatter.imageOg,imageAlt:r.frontmatter.imageAlt}),n.createElement(s.Z,null,n.createElement(o.Z,null,n.createElement(c.Z,null,n.createElement(d.Z,null)))),n.createElement(s.Z,{className:"full-width"},n.createElement(o.Z,null,n.createElement(c.Z,null,n.createElement("div",{class:"visually-hidden-focusable"},n.createElement("a",{href:"#content"},"Skip to main content")),n.createElement("main",null,n.createElement("article",{id:"content"},n.createElement(s.Z,null,n.createElement(o.Z,null,n.createElement(c.Z,null,n.createElement("h1",null,r.frontmatter.title)))),t))))),n.createElement(u.Z,null))}})};v.propTypes={children:l().node.isRequired},t.Z=v}}]);
//# sourceMappingURL=component---src-pages-outcomes-mdx-e770b3107c87adef0b6c.js.map