"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3385],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),c=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return r?i.createElement(f,s(s({ref:t},l),{},{components:r})):i.createElement(f,s({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2045:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var i=r(3117),n=r(102),o=(r(7294),r(3905)),s=["components"],a={sidebar_label:"OCI Registries Support",title:""},u="OCI Registries support",c={unversionedId:"distributing-policies/oci-registries-support",id:"distributing-policies/oci-registries-support",title:"",description:"Note well: this is not an exhaustive list. If a registry you know or use is working correctly",source:"@site/docs/distributing-policies/oci-registries-support.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/oci-registries-support",permalink:"/distributing-policies/oci-registries-support",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/oci-registries-support.md",tags:[],version:"current",lastUpdatedAt:1653566638,formattedLastUpdatedAt:"5/26/2022",frontMatter:{sidebar_label:"OCI Registries Support",title:""},sidebar:"docs",previous:{title:"Custom Certificate Authorities",permalink:"/distributing-policies/custom-certificate-authorities"},next:{title:"Secure Supply Chain",permalink:"/distributing-policies/secure-supply-chain"}},l={},p=[{value:"Projects",id:"projects",level:2},{value:"Hosted registries",id:"hosted-registries",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Docker Hub",id:"docker-hub",level:3},{value:"JFrog",id:"jfrog",level:3}],d={toc:p};function g(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oci-registries-support"},"OCI Registries support"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note well"),": this is not an exhaustive list. If a registry you know or use is working correctly\nwith Kubewarden, or if any information described here is not accurate at this time, please open a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/docs"},"Pull Request against this documentation")," to fix it.")),(0,o.kt)("p",null,"Kubewarden policies are distributed as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/artifacts"},"OCI Artifacts"),"\nusing regular OCI Registries."),(0,o.kt)("p",null,"Policies are stored side by side with container images. They don't require any extra setup or\nmaintenance than regular container images do."),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/distribution/distribution"},"Distribution"))),(0,o.kt)("h2",{id:"hosted-registries"},"Hosted registries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"GitHub container registry"))),(0,o.kt)("h2",{id:"known-issues"},"Known issues"),(0,o.kt)("h3",{id:"docker-hub"},"Docker Hub"),(0,o.kt)("p",null,"The Docker Hub does not support OCI artifacts at this time, and as such, it cannot be used to store\nKubewarden policies."),(0,o.kt)("h3",{id:"jfrog"},"JFrog"),(0,o.kt)("p",null,"Although JFrog supports OCI artifacts, it is only partially possible to push to it when following\nthe specification. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/issues/59"},"Read more here")))}g.isMDXComponent=!0}}]);