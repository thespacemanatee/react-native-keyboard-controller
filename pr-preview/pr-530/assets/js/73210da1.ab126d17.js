"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{5179:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),n=t(8453);const s={sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},a="Compatibility",c={id:"guides/compatibility",title:"Compatibility",description:"Compatibility of library with different react-native versions and architectures",source:"@site/versioned_docs/version-1.12.0/guides/compatibility.md",sourceDirName:"guides",slug:"/guides/compatibility",permalink:"/react-native-keyboard-controller/pr-preview/pr-530/docs/guides/compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.12.0/guides/compatibility.md",tags:[],version:"1.12.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-530/docs/guides/interactive-keyboard"},next:{title:"Recipes",permalink:"/react-native-keyboard-controller/pr-preview/pr-530/docs/category/recipes"}},o={},d=[{value:"<code>react-native</code>",id:"react-native",level:2},{value:"Fabric (new) architecture",id:"fabric-new-architecture",level:3},{value:"Paper (old) architecture",id:"paper-old-architecture",level:3},{value:"<code>react-native-reanimated</code>",id:"react-native-reanimated",level:2},{value:"Third-party libraries compatibility",id:"third-party-libraries-compatibility",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["If you found an incompatibility or conflict with other open source libraries - don't hesitate to open an ",(0,r.jsx)(i.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title=",children:"issue"}),". It will help the project \ud83d\ude4f"]})}),"\n",(0,r.jsx)(i.h2,{id:"react-native",children:(0,r.jsx)(i.code,{children:"react-native"})}),"\n",(0,r.jsxs)(i.p,{children:["Below you can find an information about compatibility with ",(0,r.jsx)(i.code,{children:"react-native"})," package per different architectures."]}),"\n",(0,r.jsx)(i.h3,{id:"fabric-new-architecture",children:"Fabric (new) architecture"}),"\n",(0,r.jsxs)(i.p,{children:["Starting from ",(0,r.jsx)(i.code,{children:"1.2.0"})," this library adds support for a new architecture called ",(0,r.jsx)(i.code,{children:"Fabric"}),". Since a new architecture is still in adoption stage and it changes some APIs over time - it's highly recommended to use versions which are compatible and were intensively tested against specific ",(0,r.jsx)(i.code,{children:"react-native"})," versions."]}),"\n",(0,r.jsx)(i.p,{children:"Below you can find a table with supported versions:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"library version"}),(0,r.jsx)(i.th,{children:"react-native version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.12.0+"}),(0,r.jsx)(i.td,{children:"0.74.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.10.0+"}),(0,r.jsx)(i.td,{children:"0.73.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.6.0+"}),(0,r.jsx)(i.td,{children:"0.72.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.5.0+"}),(0,r.jsx)(i.td,{children:"0.71.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.3.0+"}),(0,r.jsx)(i.td,{children:"0.70.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.2.0+"}),(0,r.jsx)(i.td,{children:"0.69.0+"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"paper-old-architecture",children:"Paper (old) architecture"}),"\n",(0,r.jsxs)(i.p,{children:["This library supports as minimal ",(0,r.jsx)(i.code,{children:"react-native"})," version as possible. However it was decided to drop a support for some really old versions for better development workflow and future support."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"library version"}),(0,r.jsx)(i.th,{children:"react-native version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.7.0+"}),(0,r.jsx)(i.td,{children:"0.65.0+"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1.0.0+"}),(0,r.jsx)(i.td,{children:"0.62.0+"})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"react-native-reanimated",children:(0,r.jsx)(i.code,{children:"react-native-reanimated"})}),"\n",(0,r.jsxs)(i.p,{children:["This library is heavily relies on ",(0,r.jsx)(i.code,{children:"react-native-reanimated"})," primitives to bring advanced concepts for keyboard handling."]}),"\n",(0,r.jsxs)(i.p,{children:["The minimal supported version of ",(0,r.jsx)(i.code,{children:"react-native-reanimated"})," is ",(0,r.jsx)(i.code,{children:"2.11.0"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"third-party-libraries-compatibility",children:"Third-party libraries compatibility"}),"\n",(0,r.jsxs)(i.p,{children:["Since this library uses ",(0,r.jsx)(i.code,{children:"WindowInsetsCompat"})," API on Android it may conflict with other libraries if they are using deprecated API (if they are changing ",(0,r.jsx)(i.code,{children:"window"})," flags directly)."]}),"\n",(0,r.jsxs)(i.p,{children:["For example ",(0,r.jsx)(i.code,{children:"react-native-screens"})," ",(0,r.jsx)(i.a,{href:"https://github.com/software-mansion/react-native-screens/pull/1451",children:"were"})," using old API, so if you are using ",(0,r.jsx)(i.code,{children:"StatusBar"})," management from ",(0,r.jsx)(i.code,{children:"react-native-screens"})," you'll need to use at least ",(0,r.jsx)(i.code,{children:"3.14+"})," version. Otherwise it will ",(0,r.jsx)(i.strong,{children:"break"})," keyboard animations."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"StatusBar"})," component from ",(0,r.jsx)(i.code,{children:"react-native"})," is also using deprecated API. In order to allow better compatibility - ",(0,r.jsx)(i.code,{children:"react-native-keyboard-controller"})," ",(0,r.jsx)(i.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30",children:"monkey-patches"})," this component (hopefully soon they will change an approach and will rewrite this component to new API)."]}),"\n",(0,r.jsxs)(i.p,{children:["If you know other 3rd party libraries that may be using deprecated API, please open an ",(0,r.jsx)(i.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title=",children:"issue"})," and we'll try to fix it."]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>c});var r=t(6540);const n={},s=r.createContext(n);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);