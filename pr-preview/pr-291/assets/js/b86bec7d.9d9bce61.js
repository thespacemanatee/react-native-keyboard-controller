"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,y=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},l=void 0,i={permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/set-enabled",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-09-28-set-enabled/index.md",source:"@site/blog/2023-09-28-set-enabled/index.md",title:"New setEnabled method",description:"I'm thrilled to announce the release of react-native-keyboard-controller version 1.8.0. With this latest release, I introduce the useKeyboardController hook and setEnabled method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly.",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/tags/keyboard"},{label:"setEnabled",permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/tags/set-enabled"}],readingTime:2.27,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},prevItem:{title:"New release, new features, achieved milestones",permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/new-features-achieved-milestones"},nextItem:{title:"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience",permalink:"/react-native-keyboard-controller/pr-preview/pr-291/blog/components"}},s={authorsImageUrls:[void 0]},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I'm thrilled to announce the release of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.8.0"),". With this latest release, I introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardController")," hook and ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly."))}p.isMDXComponent=!0}}]);