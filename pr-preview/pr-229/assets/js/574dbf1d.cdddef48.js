"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3110],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),c=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),v=n,b=u["".concat(d,".").concat(v)]||u[v]||s[v]||a;return t?o.createElement(b,i(i({ref:r},p),{},{components:t})):o.createElement(b,i({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7566:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:3,keywords:["react-native-keyboard-controller","KeyboardControllerView","view"]},i="KeyboardControllerView",l={unversionedId:"api/keyboard-controller-view",id:"api/keyboard-controller-view",title:"KeyboardControllerView",description:"A plain react-native View with some additional methods and props. Used internally in KeyboardProvider",source:"@site/docs/api/keyboard-controller-view.md",sourceDirName:"api",slug:"/api/keyboard-controller-view",permalink:"/react-native-keyboard-controller/pr-preview/pr-229/docs/next/api/keyboard-controller-view",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/keyboard-controller-view.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["react-native-keyboard-controller","KeyboardControllerView","view"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardProvider",permalink:"/react-native-keyboard-controller/pr-preview/pr-229/docs/next/api/keyboard-provider"},next:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/pr-preview/pr-229/docs/next/api/keyboard-gesture-area"}},d={},c=[{value:"Props",id:"props",level:2},{value:"<code>onKeyboardMoveStart</code>",id:"onkeyboardmovestart",level:3},{value:"<code>onKeyboardMove</code>",id:"onkeyboardmove",level:3},{value:"<code>onKeyboardMoveInteractive</code>",id:"onkeyboardmoveinteractive",level:3},{value:"<code>onKeyboardMoveEnd</code>",id:"onkeyboardmoveend",level:3},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",level:3},{value:"<code>navigationBarTranslucent</code>",id:"navigationbartranslucent",level:3}],p={toc:c};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"keyboardcontrollerview"},"KeyboardControllerView"),(0,n.kt)("p",null,"A plain react-native ",(0,n.kt)("inlineCode",{parentName:"p"},"View")," with some additional methods and props. Used internally in ",(0,n.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-229/docs/next/api/keyboard-provider"},"KeyboardProvider")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)("h3",{id:"onkeyboardmovestart"},(0,n.kt)("inlineCode",{parentName:"h3"},"onKeyboardMoveStart")),(0,n.kt)("p",null,"A callback function which is fired when keyboard starts a transition from one to another state (from closed to open, for example)."),(0,n.kt)("h3",{id:"onkeyboardmove"},(0,n.kt)("inlineCode",{parentName:"h3"},"onKeyboardMove")),(0,n.kt)("p",null,"A callback function which is fired every time, when keyboard changes its position on the screen."),(0,n.kt)("h3",{id:"onkeyboardmoveinteractive"},(0,n.kt)("inlineCode",{parentName:"h3"},"onKeyboardMoveInteractive")),(0,n.kt)("p",null,"A callback function which is fired every time, when user drags keyboard."),(0,n.kt)("h3",{id:"onkeyboardmoveend"},(0,n.kt)("inlineCode",{parentName:"h3"},"onKeyboardMoveEnd")),(0,n.kt)("p",null,"A callback function which is fired when keyboard finished a transition from one to another state (from closed to open, for example)."),(0,n.kt)("h3",{id:"statusbartranslucent"},(0,n.kt)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),(0,n.kt)("p",null,"A boolean prop to indicate whether ",(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar")," should be translucent on ",(0,n.kt)("inlineCode",{parentName:"p"},"Android")," or not."),(0,n.kt)("h3",{id:"navigationbartranslucent"},(0,n.kt)("inlineCode",{parentName:"h3"},"navigationBarTranslucent")),(0,n.kt)("p",null,"A boolean prop to indicate whether ",(0,n.kt)("a",{parentName:"p",href:"https://m2.material.io/design/platform-guidance/android-bars.html#android-navigation-bar"},"NavigationBar")," should be translucent on ",(0,n.kt)("inlineCode",{parentName:"p"},"Android")," or not."))}s.isMDXComponent=!0}}]);