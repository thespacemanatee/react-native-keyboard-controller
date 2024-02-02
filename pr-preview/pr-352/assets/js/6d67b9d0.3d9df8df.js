"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},i="KeyboardController",d={unversionedId:"api/keyboard-controller",id:"api/keyboard-controller",title:"KeyboardController",description:"The KeyboardController module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the windowSoftInputMode on Android and dismiss the keyboard on both platforms.",source:"@site/docs/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/next/api/keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/keyboard-controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/next/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/next/api/keyboard-events"}},l={},s=[{value:"Methods",id:"methods",level:2},{value:"<code>setInputMode</code>",id:"setinputmode",level:3},{value:"<code>setDefaultMode</code>",id:"setdefaultmode",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyboardcontroller"},"KeyboardController"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardController")," module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," on Android and dismiss the keyboard on both platforms."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setinputmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setInputMode")),(0,r.kt)("p",null,"This method is used to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," during runtime in an Android application. It takes an argument that specifies the desired input mode. The example provided sets the input mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFT_INPUT_ADJUST_RESIZE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n")),(0,r.kt)("h3",{id:"setdefaultmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setDefaultMode")),(0,r.kt)("p",null,"This method is used to restore the default ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". It resets the input mode to the default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setDefaultMode();\n")),(0,r.kt)("h3",{id:"dismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"dismiss")),(0,r.kt)("p",null,"This method is used to hide the keyboard. It triggers the dismissal of the keyboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.dismiss();\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What is the difference comparing to ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"react-native")," implementation?"),(0,r.kt)("p",{parentName:"admonition"},"The equivalent method from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," relies on specific internal components, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput"),", and may not work as intended if a custom input component is used."),(0,r.kt)("p",{parentName:"admonition"},"In contrast, the described method enables keyboard dismissal for any focused input, extending functionality beyond the limitations of the default implementation.")))}c.isMDXComponent=!0}}]);