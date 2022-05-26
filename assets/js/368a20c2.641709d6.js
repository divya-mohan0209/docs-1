"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2716],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],a={sidebar_label:"Builtin Support",title:""},s="Builtin support",u={unversionedId:"writing-policies/rego/builtin-support",id:"writing-policies/rego/builtin-support",title:"",description:"Building a policy for the wasm target is only half of the problem,",source:"@site/docs/writing-policies/rego/02-builtin-support.md",sourceDirName:"writing-policies/rego",slug:"/writing-policies/rego/builtin-support",permalink:"/writing-policies/rego/builtin-support",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/02-builtin-support.md",tags:[],version:"current",lastUpdatedAt:1653566638,formattedLastUpdatedAt:"5/26/2022",sidebarPosition:2,frontMatter:{sidebar_label:"Builtin Support",title:""},sidebar:"docs",previous:{title:"Introduction to Rego",permalink:"/writing-policies/rego/intro-rego"},next:{title:"Swift",permalink:"/writing-policies/swift"}},p={},c=[{value:"Executing policies with missing built-ins",id:"executing-policies-with-missing-built-ins",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"builtin-support"},"Builtin support"),(0,o.kt)("p",null,"Building a policy for the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," target is only half of the problem,\nit needs to be executed."),(0,o.kt)("p",null,"The Open Policy Agent team has a dedicated page you can check in order\nto ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-reference/#built-in-functions"},"find out the built-in support\nlevel"),"."),(0,o.kt)("p",null,"When building a Rego policy into a WebAssembly module, some of these\nbuilt-in functions are going to be implemented inside of the Wasm file\nitself (the built-ins marked with a green check in the previously\nlinked table) -- regardless of the runtime; while others have to be\nprovided at execution time by the WebAssembly runtime evaluating the\nmodule."),(0,o.kt)("p",null,"The built-ins marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK-dependent")," are the ones that the host has\nto implement -- in this case, Kubewarden. Open Policy Agent and\nGatekeeper may use them depending on the needs of the policy. In any\ncase, this built-ins are exposed to the policy and any new or existing\npolicy could depend on them."),(0,o.kt)("p",null,"There are still some built-ins that are not yet provided by us,\nhowever, based on the policies we have seen in the open, the ones we\nalready support should be enough for the majority of Kubernetes users."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-evaluator/issues/56"},"This GitHub issue"),"\nkeeps track of the Rego built-ins we have still to implement. Feel free to\ncomment over there to prioritize our work."),(0,o.kt)("h2",{id:"executing-policies-with-missing-built-ins"},"Executing policies with missing built-ins"),(0,o.kt)("p",null,"When a policy is instantiated with ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," or with ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server"),",\nthe list of built-ins used by the policy will be inspected, and if any\nof the used built-ins is missing, the program will abort execution\nlogging a fatal error reporting what are the missing built-ins."))}f.isMDXComponent=!0}}]);