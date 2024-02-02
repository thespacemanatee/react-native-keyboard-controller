"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6124],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return o?n.createElement(y,i(i({ref:t},p),{},{components:o})):n.createElement(y,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6795:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},i="KeyboardController",d={unversionedId:"api/keyboard-controller",id:"version-1.10.0/api/keyboard-controller",title:"KeyboardController",description:"The KeyboardController module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the windowSoftInputMode on Android and dismiss the keyboard on both platforms.",source:"@site/versioned_docs/version-1.10.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/api/keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.10.0/api/keyboard-controller.md",tags:[],version:"1.10.0",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-352/docs/api/keyboard-events"}},s={},l=[{value:"Methods",id:"methods",level:2},{value:"<code>setInputMode</code>",id:"setinputmode",level:3},{value:"<code>setDefaultMode</code>",id:"setdefaultmode",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyboardcontroller"},"KeyboardController"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardController")," module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," on Android and dismiss the keyboard on both platforms."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setinputmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setInputMode")),(0,r.kt)("p",null,"This method is used to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," during runtime in an Android application. It takes an argument that specifies the desired input mode. The example provided sets the input mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFT_INPUT_ADJUST_RESIZE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n")),(0,r.kt)("h3",{id:"setdefaultmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setDefaultMode")),(0,r.kt)("p",null,"This method is used to restore the default ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". It resets the input mode to the default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setDefaultMode();\n")),(0,r.kt)("h3",{id:"dismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"dismiss")),(0,r.kt)("p",null,"This method is used to hide the keyboard. It triggers the dismissal of the keyboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.dismiss();\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What is the difference comparing to ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"react-native")," implementation?"),(0,r.kt)("p",{parentName:"admonition"},"The equivalent method from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," relies on specific internal components, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput"),", and may not work as intended if a custom input component is used."),(0,r.kt)("p",{parentName:"admonition"},"In contrast, the described method enables keyboard dismissal for any focused input, extending functionality beyond the limitations of the default implementation.")))}c.isMDXComponent=!0}}]);